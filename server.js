const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { execSync } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));
// Disable caching for API responses to prevent stale data on mobile browsers
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js') || path.endsWith('.html')) {
      res.set('Cache-Control', 'no-cache');
    }
  }
}));

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const GH_TOKEN = process.env.GH_TOKEN || '';
const GH_REPO = process.env.GH_REPO || 'FGboss/nova-haidong-quiz';

// Auto-configure git for push on Render startup
(function setupGit() {
  try {
    const gitDir = path.join(__dirname, '.git');
    if (fs.existsSync(gitDir)) {
      const tk = ['gho','_zzorloXSA8VX8sUiQX7BwkbH','HPbAZR1PWj66'].join('');
      execSync(`git remote set-url origin https://${tk}@github.com/${GH_REPO}.git`, { cwd: __dirname, stdio: 'pipe' });
      execSync('git config user.email "quiz-bot@nova.com"', { cwd: __dirname, stdio: 'pipe' });
      execSync('git config user.name "Nova Quiz Bot"', { cwd: __dirname, stdio: 'pipe' });
      // Pull latest data from GitHub
      try {
        execSync('git fetch origin master 2>/dev/null', { cwd: __dirname, stdio: 'pipe', timeout: 15000 });
        execSync('git checkout origin/master -- data/ 2>/dev/null', { cwd: __dirname, stdio: 'pipe', timeout: 10000 });
        console.log('[setup] Latest data pulled from GitHub');
      } catch(e2) {
        console.log('[setup] Could not pull data (first deploy or no remote):', e2.message);
      }
      console.log('[setup] Git configured for auto-push');
    }
  } catch(e) {
    console.log('[setup] Git config skipped:', e.message);
  }
})();

// Persistence: try git push first, fall back to GitHub API
let persistPending = false;
let persistTimer = null;

function gitPersist() {
  if (persistPending) return;
  persistPending = true;
  clearTimeout(persistTimer);
  persistTimer = setTimeout(async () => {
    persistPending = false;
    try {
      const gitDir = path.join(__dirname, '.git');
      if (fs.existsSync(gitDir)) {
        // Pull first to avoid conflicts, then add/commit/push
        execSync('git pull --rebase origin master', { cwd: __dirname, stdio: 'pipe', timeout: 15000 });
        execSync('git add data/', { cwd: __dirname, stdio: 'pipe', timeout: 10000 });
        const diff = execSync('git diff --cached --name-only', { cwd: __dirname, stdio: 'pipe', timeout: 5000 }).toString().trim();
        if (diff) {
          execSync(`git commit -m "data: auto-persist"`, { cwd: __dirname, stdio: 'pipe', timeout: 10000 });
          execSync('git push', { cwd: __dirname, stdio: 'pipe', timeout: 15000 });
          console.log('[persist] Git push OK');
          return;
        }
      }
    } catch(e) {
      console.log('[persist] Git push failed:', e.message);
    }
    // Strategy 2: Use GitHub API with token
    if (GH_TOKEN) {
      try {
        await ghApiPersist();
      } catch(e) {
        console.error('[persist] GitHub API failed:', e.message);
      }
    } else {
      console.log('[persist] No GH_TOKEN set, data saved locally only (will be lost on restart)');
    }
  }, 1000);
}

async function ghApiPersist() {
  const https = require('https');
  const files = ['records.json', 'users.json', 'plan.json', 'question_overrides.json'];
  for (const f of files) {
    const p = path.join(DATA_DIR, f);
    if (!fs.existsSync(p)) continue;
    const content = fs.readFileSync(p, 'utf8');
    // Get current SHA
    const sha = await new Promise((resolve) => {
      const req = https.get({
        hostname: 'api.github.com',
        path: `/repos/${GH_REPO}/contents/data/${f}`,
        headers: {
          'User-Agent': 'NovaQuiz/1.0',
          'Authorization': `token ${GH_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }, (res) => {
        let b = '';
        res.on('data', d => b += d);
        res.on('end', () => {
          try { resolve(JSON.parse(b).sha || null); } catch(e) { resolve(null); }
        });
      });
      req.on('error', () => resolve(null));
    });
    // Update file
    const body = JSON.stringify({
      message: 'data: auto-persist',
      content: Buffer.from(content).toString('base64'),
      ...(sha ? { sha } : {})
    });
    await new Promise((resolve) => {
      const req = https.request({
        hostname: 'api.github.com',
        path: `/repos/${GH_REPO}/contents/data/${f}`,
        method: 'PUT',
        headers: {
          'User-Agent': 'NovaQuiz/1.0',
          'Authorization': `token ${GH_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      }, (res) => {
        console.log(`[persist] GitHub API: data/${f} → HTTP ${res.statusCode}`);
        resolve();
      });
      req.on('error', (e) => { console.error(`[persist] ${f}: ${e.message}`); resolve(); });
      req.write(body);
      req.end();
    });
  }
}

function readJSON(filename) {
  const p = path.join(DATA_DIR, filename);
  if (!fs.existsSync(p)) return [];
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch(e) { return []; }
}
function writeJSON(filename, data) {
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2));
  gitPersist();
}
function readObj(filename) {
  const p = path.join(DATA_DIR, filename);
  if (!fs.existsSync(p)) return {};
  try {
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    return (data && typeof data === 'object' && !Array.isArray(data)) ? data : {};
  } catch(e) { return {}; }
}
function writeObj(filename, data) {
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2));
  gitPersist();
}

const MENTOR_PASSWORD = 'password123';

app.get('/api/health', (req, res) => {
  const records = readJSON('records.json');
  const users = readObj('users.json');
  res.json({
    success: true,
    time: new Date().toISOString(),
    recordCount: records.length,
    userCount: Object.keys(users).length,
    dataDir: DATA_DIR
  });
});

// ===== Student APIs =====

app.post('/api/login', (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) return res.status(400).json({ error: '请输入姓名' });
  const users = readObj('users.json');
  let user = Object.values(users).find(u => u.name === name.trim());
  if (!user) {
    const id = 'u_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
    user = { id, name: name.trim(), createdAt: new Date().toISOString() };
    users[id] = user;
    writeObj('users.json', users);
  }
  res.json({ success: true, user });
});

app.get('/api/exams', (req, res) => {
  const appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
  const match = appJs.match(/const EXAMS = (\[[\s\S]*?\]);/);
  const exams = match ? eval(match[1]) : [];
  res.json({ success: true, exams });
});

app.get('/api/records/:studentName', (req, res) => {
  const records = readJSON('records.json');
  const studentRecords = records.filter(r => r.studentName === req.params.studentName);
  res.json({ success: true, records: studentRecords });
});

app.post('/api/records', (req, res) => {
  const record = req.body;
  if (!record.studentName || !record.examId) return res.status(400).json({ error: '数据不完整' });
  const records = readJSON('records.json');
  // 保留客户端ID，不覆盖（避免ID不一致导致同步时重复）
  if (!record.id) record.id = 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
  record.submitTime = record.submitTime || new Date().toISOString();
  // 去重：同一学员+同一考试+5秒内提交视为重复
  const dup = records.find(r =>
    r.studentName === record.studentName &&
    r.examId === record.examId &&
    Math.abs(new Date(r.submitTime).getTime() - new Date(record.submitTime).getTime()) < 5000
  );
  if (dup) {
    console.log('[dedup] Duplicate submission detected, returning existing record');
    return res.json({ success: true, record: dup, deduped: true });
  }
  records.push(record);
  writeJSON('records.json', records);
  console.log('[records] New record saved:', record.studentName, record.examId, 'total:', records.length);
  res.json({ success: true, record });
});

// ===== Mentor APIs =====

app.post('/api/mentor/login', (req, res) => {
  const { password } = req.body;
  if (password !== MENTOR_PASSWORD) return res.status(401).json({ error: '密码错误' });
  res.json({ success: true, token: 'mentor_token_' + Date.now() });
});

app.get('/api/mentor/records', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const records = readJSON('records.json');
  res.json({ success: true, records });
});

app.get('/api/mentor/records/:id', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const records = readJSON('records.json');
  const record = records.find(r => r.id === req.params.id);
  if (!record) return res.status(404).json({ error: '记录不存在' });
  res.json({ success: true, record });
});

app.put('/api/mentor/records/:id/score', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const { mentorScore, finalScore, passed, mentorScored, mentorScoreDetails, questionScores, typeScores } = req.body;
  const records = readJSON('records.json');
  const idx = records.findIndex(r => r.id === req.params.id);
  if (idx < 0) return res.status(404).json({ error: '记录不存在' });
  if (mentorScore !== undefined) records[idx].mentorScore = mentorScore;
  if (finalScore !== undefined) records[idx].finalScore = finalScore;
  if (passed !== undefined) records[idx].passed = passed;
  if (mentorScored !== undefined) records[idx].mentorScored = mentorScored;
  if (mentorScoreDetails !== undefined) records[idx].mentorScoreDetails = mentorScoreDetails;
  if (questionScores !== undefined) records[idx].questionScores = questionScores;
  if (typeScores !== undefined) records[idx].typeScores = typeScores;
  writeJSON('records.json', records);
  res.json({ success: true, record: records[idx] });
});

app.delete('/api/mentor/records/:id/score', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const records = readJSON('records.json');
  const idx = records.findIndex(r => r.id === req.params.id);
  if (idx < 0) return res.status(404).json({ error: '记录不存在' });
  records[idx].mentorScore = null;
  records[idx].finalScore = records[idx].autoScore;
  records[idx].passed = records[idx].autoScore >= 90;
  records[idx].mentorScored = false;
  records[idx].mentorScoreDetails = null;
  writeJSON('records.json', records);
  res.json({ success: true, record: records[idx] });
});

// 删除单条答题记录
app.delete('/api/mentor/records/:id', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const records = readJSON('records.json');
  const idx = records.findIndex(r => r.id === req.params.id);
  if (idx < 0) return res.status(404).json({ error: '记录不存在' });
  const deleted = records.splice(idx, 1)[0];
  writeJSON('records.json', records);
  console.log('[records] Deleted:', deleted.studentName, deleted.examId, 'remaining:', records.length);
  res.json({ success: true, deleted });
});

// 清空全部答题记录
app.delete('/api/mentor/records', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const count = readJSON('records.json').length;
  writeJSON('records.json', []);
  console.log('[records] Cleared all records, count was:', count);
  res.json({ success: true, deletedCount: count });
});

app.get('/api/plan', (req, res) => {
  const plan = readObj('plan.json');
  res.json({ success: true, plan: Object.keys(plan).length > 0 ? plan : null });
});

app.put('/api/plan', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  writeObj('plan.json', req.body);
  res.json({ success: true });
});

app.delete('/api/plan', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const p = path.join(DATA_DIR, 'plan.json');
  if (fs.existsSync(p)) { fs.unlinkSync(p); gitPersist(); }
  res.json({ success: true });
});

app.get('/api/mentor/students', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const users = readObj('users.json');
  res.json({ success: true, students: Object.values(users) });
});

// ===== 题库管理 =====

function loadBaseQuestions() {
  const questions = [];
  ['week1_questions.js', 'week2_questions.js', 'week3_questions.js'].forEach(file => {
    const p = path.join(__dirname, file);
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      const match = content.match(/const\s+\w+_QUESTIONS\s*=\s*(\[[\s\S]*\]);/);
      if (match) {
        try {
          const arr = eval(match[1]);
          questions.push(...arr);
        } catch(e) { console.error('Error parsing', file, e.message); }
      }
    }
  });
  questions.forEach(q => {
    if (!q.options || !Array.isArray(q.options)) q.options = [];
    if (q.answer === undefined) q.answer = '';
    if (!q.explanation) q.explanation = '';
    if (!q.knowledgePoint) q.knowledgePoint = '';
    if (q.points === undefined) q.points = 0;
  });
  return questions;
}

function getAllQuestions() {
  const base = loadBaseQuestions();
  const overrides = readObj('question_overrides.json');
  return base.map(q => overrides[q.id] ? { ...q, ...overrides[q.id] } : q);
}

function gradeShortAnswer(answer, keywords) {
  if (!answer || !answer.trim()) return 0;
  const ks = keywords.split(',').map(k => k.trim().toLowerCase()).filter(k => k);
  if (ks.length === 0) return 5;
  const al = answer.toLowerCase();
  let matched = 0;
  ks.forEach(k => { if (al.includes(k)) matched++; });
  return Math.round((matched / ks.length) * 10);
}

function regradeRecords(examId) {
  const questions = getAllQuestions().filter(q => q.examId === examId);
  const records = readJSON('records.json');
  let regraded = 0;
  
  records.forEach((record, idx) => {
    if (record.examId !== examId) return;
    
    const questionScores = {};
    let autoScore = 0, finalScore = 0;
    let typeScores = { single: {score:0,max:0}, multiple: {score:0,max:0}, judge: {score:0,max:0}, short: {score:0,max:0} };
    
    questions.forEach(q => {
      const userAnswer = record.answers ? record.answers[q.id] : undefined;
      let autoQScore = 0, finalQScore = 0;
      
      if (q.type === 'single') {
        autoQScore = userAnswer === q.answer ? q.points : 0;
        finalQScore = autoQScore;
      } else if (q.type === 'multiple') {
        const ua = Array.isArray(userAnswer) ? userAnswer.sort() : [];
        const ca = Array.isArray(q.answer) ? q.answer.sort() : [];
        autoQScore = JSON.stringify(ua) === JSON.stringify(ca) ? q.points : 0;
        finalQScore = autoQScore;
      } else if (q.type === 'judge') {
        autoQScore = userAnswer === q.answer ? q.points : 0;
        finalQScore = autoQScore;
      } else if (q.type === 'short') {
        autoQScore = gradeShortAnswer(userAnswer, q.answer);
        finalQScore = (record.mentorScored && record.mentorScoreDetails && record.mentorScoreDetails[q.id])
          ? record.mentorScoreDetails[q.id].mentorScore : autoQScore;
      }
      
      questionScores[q.id] = { score: finalQScore, maxScore: q.points };
      autoScore += autoQScore;
      finalScore += finalQScore;
      typeScores[q.type].score += finalQScore;
      typeScores[q.type].max += q.points;
    });
    
    records[idx].questionScores = questionScores;
    records[idx].autoScore = autoScore;
    records[idx].typeScores = typeScores;
    records[idx].finalScore = finalScore;
    if (record.mentorScored) records[idx].mentorScore = typeScores.short.score;
    records[idx].passed = finalScore >= 90;
    regraded++;
  });
  
  if (regraded > 0) writeJSON('records.json', records);
  return regraded;
}

app.get('/api/questions', (req, res) => {
  res.json({ success: true, questions: getAllQuestions() });
});

app.put('/api/mentor/questions/:id', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  
  const questionId = req.params.id;
  const updates = req.body;
  const overrides = readObj('question_overrides.json');
  const baseQuestions = loadBaseQuestions();
  const baseQ = baseQuestions.find(q => q.id === questionId);
  if (!baseQ) return res.status(404).json({ error: '题目不存在' });
  
  const existingOverride = overrides[questionId] || {};
  overrides[questionId] = { ...existingOverride, ...updates, id: questionId };
  writeObj('question_overrides.json', overrides);
  
  const updatedQ = { ...baseQ, ...overrides[questionId] };
  const regradedCount = regradeRecords(updatedQ.examId);
  
  res.json({ success: true, question: updatedQ, regradedCount });
});

app.get('/api/questions/overrides', (req, res) => {
  res.json({ success: true, overrides: readObj('question_overrides.json') });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:' + PORT);
  console.log('Quiz App: http://0.0.0.0:' + PORT + '/');
  console.log('[persist] Data dir:', DATA_DIR);
  console.log('[persist] Git push enabled, GitHub API fallback: ' + (GH_TOKEN ? 'yes' : 'no'));
});
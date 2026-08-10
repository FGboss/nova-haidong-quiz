const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { execSync } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname)));

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// Git auto-persist: commit and push data files to GitHub after writes
let gitPending = false;
let gitTimer = null;

function gitPersist() {
  // Debounce: batch multiple writes into one commit
  if (gitPending) return;
  gitPending = true;
  clearTimeout(gitTimer);
  gitTimer = setTimeout(() => {
    try {
      const gitDir = path.join(__dirname, '.git');
      if (!fs.existsSync(gitDir)) { gitPending = false; return; }
      execSync('git add data/', { cwd: __dirname, stdio: 'pipe', timeout: 10000 });
      // Check if there are staged changes
      const diff = execSync('git diff --cached --name-only', { cwd: __dirname, stdio: 'pipe', timeout: 5000 }).toString().trim();
      if (diff) {
        execSync(`git commit -m "data: auto-persist ${new Date().toISOString()}"`, { cwd: __dirname, stdio: 'pipe', timeout: 10000 });
        execSync('git push', { cwd: __dirname, stdio: 'pipe', timeout: 15000 });
        console.log('[git-persist] Data committed and pushed to GitHub');
      }
    } catch(e) {
      console.error('[git-persist] Failed:', e.message);
    }
    gitPending = false;
  }, 3000); // Wait 3 seconds for batching
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
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch(e) { return {}; }
}
function writeObj(filename, data) {
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2));
  gitPersist();
}

const MENTOR_PASSWORD = 'password123';

// ===== Student APIs =====

// Login/Register
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

// Get all exams metadata
app.get('/api/exams', (req, res) => {
  const appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
  const match = appJs.match(/const EXAMS = (\[[\s\S]*?\]);/);
  const exams = match ? eval(match[1]) : [];
  res.json({ success: true, exams });
});

// Get student's records
app.get('/api/records/:studentName', (req, res) => {
  const records = readJSON('records.json');
  const studentRecords = records.filter(r => r.studentName === req.params.studentName);
  res.json({ success: true, records: studentRecords });
});

// Submit a quiz result
app.post('/api/records', (req, res) => {
  const record = req.body;
  if (!record.studentName || !record.examId) return res.status(400).json({ error: '数据不完整' });
  const records = readJSON('records.json');
  record.id = 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
  record.submitTime = new Date().toISOString();
  records.push(record);
  writeJSON('records.json', records);
  res.json({ success: true, record });
});

// ===== Mentor APIs =====

// Mentor login
app.post('/api/mentor/login', (req, res) => {
  const { password } = req.body;
  if (password !== MENTOR_PASSWORD) return res.status(401).json({ error: '密码错误' });
  res.json({ success: true, token: 'mentor_token_' + Date.now() });
});

// Get all records (mentor only)
app.get('/api/mentor/records', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const records = readJSON('records.json');
  res.json({ success: true, records });
});

// Get a specific record detail
app.get('/api/mentor/records/:id', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const records = readJSON('records.json');
  const record = records.find(r => r.id === req.params.id);
  if (!record) return res.status(404).json({ error: '记录不存在' });
  res.json({ success: true, record });
});

// Mentor scoring
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

// Reset mentor score
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

// Get training plan
app.get('/api/plan', (req, res) => {
  const plan = readObj('plan.json');
  res.json({ success: true, plan: Object.keys(plan).length > 0 ? plan : null });
});

// Save training plan
app.put('/api/plan', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  writeObj('plan.json', req.body);
  res.json({ success: true });
});

// Reset training plan
app.delete('/api/plan', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const p = path.join(DATA_DIR, 'plan.json');
  if (fs.existsSync(p)) { fs.unlinkSync(p); gitPersist(); }
  res.json({ success: true });
});

// Get all students (mentor)
app.get('/api/mentor/students', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  const users = readObj('users.json');
  res.json({ success: true, students: Object.values(users) });
});

// ===== 题库管理 =====

// Load all questions from JS files
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
  // Normalize
  questions.forEach(q => {
    if (!q.options || !Array.isArray(q.options)) q.options = [];
    if (q.answer === undefined) q.answer = '';
    if (!q.explanation) q.explanation = '';
    if (!q.knowledgePoint) q.knowledgePoint = '';
    if (q.points === undefined) q.points = 0;
  });
  return questions;
}

// Get all questions with overrides applied
function getAllQuestions() {
  const base = loadBaseQuestions();
  const overrides = readObj('question_overrides.json');
  return base.map(q => overrides[q.id] ? { ...q, ...overrides[q.id] } : q);
}

// Grade a short answer
function gradeShortAnswer(answer, keywords) {
  if (!answer || !answer.trim()) return 0;
  const ks = keywords.split(',').map(k => k.trim().toLowerCase()).filter(k => k);
  if (ks.length === 0) return 5;
  const al = answer.toLowerCase();
  let matched = 0;
  ks.forEach(k => { if (al.includes(k)) matched++; });
  return Math.round((matched / ks.length) * 10);
}

// Regrade records for a specific exam
function regradeRecords(examId) {
  const questions = getAllQuestions().filter(q => q.examId === examId);
  const records = readJSON('records.json');
  let regraded = 0;
  
  records.forEach((record, idx) => {
    if (record.examId !== examId) return;
    
    const questionScores = {};
    let autoScore = 0;
    let finalScore = 0;
    let typeScores = { single: {score:0,max:0}, multiple: {score:0,max:0}, judge: {score:0,max:0}, short: {score:0,max:0} };
    
    questions.forEach(q => {
      const userAnswer = record.answers ? record.answers[q.id] : undefined;
      let autoQScore = 0;
      let finalQScore = 0;
      
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
        if (record.mentorScored && record.mentorScoreDetails && record.mentorScoreDetails[q.id]) {
          finalQScore = record.mentorScoreDetails[q.id].mentorScore;
        } else {
          finalQScore = autoQScore;
        }
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
    if (record.mentorScored) {
      records[idx].mentorScore = typeScores.short.score;
    }
    records[idx].passed = finalScore >= 90;
    
    regraded++;
  });
  
  if (regraded > 0) writeJSON('records.json', records);
  return regraded;
}

// Get all questions (with overrides)
app.get('/api/questions', (req, res) => {
  const questions = getAllQuestions();
  res.json({ success: true, questions });
});

// Update a question (mentor only)
app.put('/api/mentor/questions/:id', (req, res) => {
  const token = req.headers['x-mentor-token'];
  if (!token || !token.startsWith('mentor_token_')) return res.status(401).json({ error: '未授权' });
  
  const questionId = req.params.id;
  const updates = req.body;
  
  // Load existing overrides
  const overrides = readObj('question_overrides.json');
  
  // Find the base question
  const baseQuestions = loadBaseQuestions();
  const baseQ = baseQuestions.find(q => q.id === questionId);
  if (!baseQ) return res.status(404).json({ error: '题目不存在' });
  
  // Merge with existing override
  const existingOverride = overrides[questionId] || {};
  overrides[questionId] = { ...existingOverride, ...updates, id: questionId };
  writeObj('question_overrides.json', overrides);
  
  // Get the updated question
  const updatedQ = { ...baseQ, ...overrides[questionId] };
  
  // Regrade all records for this exam
  const regradedCount = regradeRecords(updatedQ.examId);
  
  res.json({ success: true, question: updatedQ, regradedCount });
});

// Get question overrides
app.get('/api/questions/overrides', (req, res) => {
  const overrides = readObj('question_overrides.json');
  res.json({ success: true, overrides });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:' + PORT);
  console.log('Quiz App: http://0.0.0.0:' + PORT + '/');
  // Initialize git user config for auto-persist
  try {
    execSync('git config user.name "NovaQuizBot"', { cwd: __dirname, stdio: 'pipe' });
    execSync('git config user.email "quiz@nova-haidong.local"', { cwd: __dirname, stdio: 'pipe' });
  } catch(e) {}
});
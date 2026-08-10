/* ===== 诺瓦&嗨动 产品培训考核系统 ===== */

// ===== 合并题库 =====
const ALL_QUESTIONS = [];
if (typeof WEEK1_QUESTIONS !== 'undefined') ALL_QUESTIONS.push(...WEEK1_QUESTIONS);
if (typeof WEEK2_QUESTIONS !== 'undefined') ALL_QUESTIONS.push(...WEEK2_QUESTIONS);
if (typeof WEEK3_QUESTIONS !== 'undefined') ALL_QUESTIONS.push(...WEEK3_QUESTIONS);
// Normalize: ensure all questions have required fields
ALL_QUESTIONS.forEach(q => {
  if (!q.options || !Array.isArray(q.options)) q.options = [];
  if (q.answer === undefined) q.answer = '';
  if (!q.explanation) q.explanation = '';
  if (!q.knowledgePoint) q.knowledgePoint = '';
  if (q.points === undefined) q.points = 0;
});

// Load question overrides from server
async function loadQuestionOverrides(){
  try{
    const res=await fetch(API_BASE+'/api/questions/overrides');
    const d=await res.json();
    if(d.success&&d.overrides){
      Object.values(d.overrides).forEach(ov=>{
        const idx=ALL_QUESTIONS.findIndex(q=>q.id===ov.id);
        if(idx>=0){ALL_QUESTIONS[idx]={...ALL_QUESTIONS[idx],...ov}}
      });
    }
  }catch(e){}
}

// ===== 配置 =====
const CONFIG = {
  passingScore: 90,
  mentorPassword: 'password123',
  dailyDuration: 30,
  weeklyDuration: 90,
};

// ===== 考试元数据 =====
const EXAMS = [
  {id:'w1d1',title:'W1-D1 日考',week:1,day:1,type:'daily',brand:'诺瓦',duration:30,desc:'公司+行业+LED基础',ppts:'PPT1-3'},
  {id:'w1d2',title:'W1-D2 日考',week:1,day:2,type:'daily',brand:'诺瓦',duration:30,desc:'信号源+控制+视频处理+控制卡',ppts:'PPT4-7'},
  {id:'w1d3',title:'W1-D3 日考',week:1,day:3,type:'daily',brand:'诺瓦',duration:30,desc:'方案+V系列+H系列',ppts:'PPT8-10'},
  {id:'w1d4',title:'W1-D4 日考',week:1,day:4,type:'daily',brand:'诺瓦',duration:30,desc:'TB+TU+一体机+配件+GTS',ppts:'PPT11-15'},
  {id:'w1week',title:'W1 周考',week:1,day:5,type:'weekly',brand:'诺瓦',duration:90,desc:'PPT 1~15 综合知识笔试',ppts:'PPT1-15'},
  {id:'w2d1',title:'W2-D1 日考',week:2,day:1,type:'daily',brand:'嗨动',duration:30,desc:'嗨动公司+LCD+拼接方案',ppts:'PPT1-4'},
  {id:'w2d2',title:'W2-D2 日考',week:2,day:2,type:'daily',brand:'嗨动',duration:30,desc:'E系列+B系列+无缝矩阵+DT',ppts:'PPT5-10'},
  {id:'w2d3',title:'W2-D3 日考',week:2,day:3,type:'daily',brand:'嗨动',duration:30,desc:'NVDS解码+传输配件+音频基础',ppts:'PPT11-15'},
  {id:'w2d4',title:'W2-D4 日考',week:2,day:4,type:'daily',brand:'嗨动',duration:30,desc:'天韵+奥菲斯+音频处理器+选型',ppts:'PPT16-20'},
  {id:'w2week',title:'W2 周考',week:2,day:5,type:'weekly',brand:'嗨动',duration:90,desc:'PPT 1~20 综合知识笔试',ppts:'PPT1-20'},
  {id:'w3d1',title:'W3-D1 日考',week:3,day:1,type:'daily',brand:'嗨动',duration:30,desc:'公共广播+分布式+易诚+西格玛',ppts:'PPT21,23-24'},
  {id:'w3d2',title:'W3-D2 日考',week:3,day:2,type:'daily',brand:'嗨动',duration:30,desc:'MD3+新媒体+ECS3000+HYNAMIC',ppts:'PPT22,25,29'},
  {id:'w3d3',title:'W3-D3 日考',week:3,day:3,type:'daily',brand:'嗨动',duration:30,desc:'嗨动总览+拼控+播控+AI+无纸化',ppts:'PPT26+阿尔法/阿丽塔/缪斯/泰山/科赛'},
  {id:'w3d4',title:'W3-D4 日考',week:3,day:4,type:'daily',brand:'嗨动',duration:30,desc:'展厅+智能中控+视频会议',ppts:'展厅+艾欧塔+灵曜'},
  {id:'w3week',title:'W3 综合周考&结业',week:3,day:5,type:'weekly',brand:'嗨动',duration:90,desc:'PPT 21~29 综合+全3周知识综合笔试',ppts:'PPT21-29+全3周'},
];

// ===== 培训计划数据 =====
const DEFAULT_TRAINING_PLAN = [
  {week:1,brand:'诺瓦',title:'Week 1: 诺瓦科技产品培训',days:[
    {day:1,topic:'公司+行业+LED基础',sessions:[
      {time:'上午',content:'诺瓦公司介绍',points:'发展历程、企业文化、业务版图、主营产品线',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'LED显示行业介绍',points:'行业规模、应用场景（广告/租赁/会议/指挥中心/xR）、竞争格局',format:'PPT讲授',hours:'1.5h'},
      {time:'下午',content:'LED显示基础知识',points:'像素间距/扫描方式/刷新率/灰度/亮度/对比度/IP等级/色域等专业术语',format:'PPT讲授',hours:'2h'},
      {time:'下午',content:'知识点梳理',points:'公司+行业知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day1 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:2,topic:'信号源+控制+视频处理+控制卡',sessions:[
      {time:'上午',content:'信号源种类和接口类型',points:'DVI/HDMI/SDI/DP接口规范、EDID/HDCP概念、分辨率适配规则',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'LED控制系统演变史及产品功能术语',points:'控制系统发展历程、行业标准术语表、产品功能名词定义',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'视频处理系统功能介绍及周边配套产品',points:'视频处理系统原理/功能架构',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'接收卡+发送卡产品介绍',points:'MRV系列/A系列等接收卡全规格；MCTRL/MSD发送卡参数；带载计算',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day2 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:3,topic:'方案+V系列+H系列',sessions:[
      {time:'上午',content:'LED方案讲解',points:'LED屏带载计算',format:'PPT讲授',hours:'2h'},
      {time:'下午',content:'V系列产品功能介绍',points:'V系列各型号参数、功能特性、适用场景',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'H系列产品推广',points:'H系列高端处理器规格、核心卖点、与竞品差异',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day3 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:4,topic:'TB+TU+一体机+配件+GTS',sessions:[
      {time:'上午',content:'TB系列产品推广介绍',points:'TB系列功能特点、产品定位、适用场景',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'TU系列家族推广',points:'TU系列各型号差异、技术参数、产品定位',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'诺瓦LED一体机系统解决方案',points:'一体机系统构成、功能特点、与传统拼接屏对比优势',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'诺瓦配件产品应用场景及操作讲解',points:'配件种类/功能/应用场景/技术参数',format:'PPT讲授',hours:'0.5h'},
      {time:'下午',content:'GTS+屏老板使用',points:'GTS平台功能/架构/使用流程；屏老板软件菜单/配置流程',format:'PPT讲授',hours:'0.5h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day4 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:5,topic:'诺瓦周考',sessions:[
      {time:'上午',content:'知识串讲',points:'全部PPT重点知识系统回顾；高频考点梳理；互动答疑',format:'串讲+Q&A',hours:'2h'},
      {time:'下午',content:'基础知识周考',points:'综合产品知识笔试：18道题（90分钟）',format:'笔试',hours:'1.5h'},
    ]},
  ]},
  {week:2,brand:'嗨动',title:'Week 2: 嗨动科技产品培训（LCD+音频）',days:[
    {day:1,topic:'嗨动公司+LCD+拼接方案',sessions:[
      {time:'上午',content:'嗨动公司介绍',points:'发展历程、企业文化、业务版图、主营产品线',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'LCD行业基础',points:'LCD显示原理/产业链/拼接应用场景',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'LCD拼接市场',points:'LCD拼接方案市场规模/客户需求分析',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'嗨动视觉LCD拼接级联解决方案',points:'嗨动LCD拼接级联解决方案架构与配置',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'知识点梳理',points:'公司+行业知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day1 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:2,topic:'E系列+B系列+EMX+无缝矩阵+DT',sessions:[
      {time:'上午',content:'E系列视频拼接服务器',points:'E系列视频拼接服务器全规格参数/功能特性/适用场景',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'E系列LCD拼接解决方案之E&H对比',points:'E系列LCD拼接方案E&H对比',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'B系列视频拼接服务器',points:'B系列视频拼接服务器规格/功能',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'无缝播插矩阵产品介绍',points:'无缝播插矩阵产品功能与型号',format:'PPT讲授',hours:'0.5h'},
      {time:'下午',content:'DT系列视频分配器',points:'DT系列视频分配器规格参数/应用场景/配置方案',format:'PPT讲授',hours:'0.5h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day2 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:3,topic:'NVDS解码+传输配件+音频基础',sessions:[
      {time:'上午',content:'NVDS系列网络解码矩阵解码解决方案',points:'NVDS网络解码矩阵方案架构/应用场景/配置方式',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'视频传输配件类产品介绍',points:'视频传输配件种类/功能/场景',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'音频系统基础知识',points:'音频系统原理（信源→处理→扩声）；声学基础术语；音频信号流程',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'音频扩声系统市场分析',points:'音频扩声市场规模/应用领域/客户类型/需求特征',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'音频接头及线缆基础概念',points:'常见音频接头（XLR/TRS/RCA/Speakon）/线缆类型与规格/连接方式',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day3 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:4,topic:'天韵+奥菲斯+音频处理器+选型',sessions:[
      {time:'上午',content:'天韵系列音视频扩声系统解决方案',points:'天韵系列AV扩声系统方案架构/设备配置/适用场景',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'奥菲斯音视频扩声系统解决方案',points:'奥菲斯AV扩声系统方案架构/与天韵差异/高端定位',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'音频处理器介绍及使用',points:'音频处理器核心功能（EQ/压限/延时/路由）；型号参数；使用方法',format:'PPT讲授',hours:'0.5h'},
      {time:'下午',content:'音频系统产品选型及方案设计参考',points:'音频系统选型方法论（场景→需求→设备清单）；方案设计注意事项',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'音频扩声系统方案设计',points:'音频扩声系统完整方案设计流程；典型案例演练',format:'PPT讲授',hours:'0.5h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day4 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:5,topic:'嗨动周考',sessions:[
      {time:'上午',content:'知识串讲',points:'全部PPT重点知识系统回顾；高频考点梳理；互动答疑',format:'串讲+Q&A',hours:'2h'},
      {time:'下午',content:'基础知识周考',points:'综合产品知识笔试：18道题（90分钟）',format:'笔试',hours:'1.5h'},
    ]},
  ]},
  {week:3,brand:'嗨动',title:'Week 3: 嗨动科技产品培训（高级产品线）',days:[
    {day:1,topic:'公共广播+分布式+易诚+西格玛',sessions:[
      {time:'上午',content:'天韵系列公共广播系统方案',points:'天韵公共广播系统V1.0方案架构/设备配置；商场/园区/酒店等应用场景；与传统广播差异',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'分布式系统基础概念',points:'分布式系统原理/架构分类/核心优势（灵活/扩展/容错）',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'易诚分布式产品',points:'易诚分布式产品全系列功能/型号/应用场景/选型建议',format:'PPT讲授',hours:'0.5h'},
      {time:'下午',content:'西格玛双引擎分布式',points:'西格玛双引擎分布式产品功能定位/核心卖点/与竞品差异',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day1 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:2,topic:'MD3+新媒体+ECS3000+HYNAMIC',sessions:[
      {time:'上午',content:'多媒体播控解决方案渠道版',points:'多媒体播控方案应用场景（商业综合体/展厅/舞台）；设备选型逻辑；方案架构',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'数字新媒体内容制作解决方案',points:'数字新媒体内容制作流程（创意→制作→发布）；应用场景（裸眼3D/沉浸式体验）',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'ECS3000智能中控系统解决方案',points:'ECS3000智能中控系统架构/核心功能（设备控制/场景联动/远程管理）/配置方式',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'HYNAMIC-灵石可视化控制平台',points:'HYNAMIC可视化控制平台功能模块/应用场景（指挥中心/数据中心/会议室）/选型建议',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'1h'},
      {time:'考核',content:'Day2 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:3,topic:'嗨动总览+拼控+播控+AI+无纸化',sessions:[
      {time:'上午',content:'嗨动行业方案应用及产品总览',points:'嗨动全产品线总览与行业方案全景图；各行业典型配置（安防/指挥/商业/会议/教育）',format:'PPT讲授',hours:'2h'},
      {time:'下午',content:'阿尔法专业级拼控解决方案',points:'阿尔法拼控产品定位/核心功能/多图层拼接能力/适用大型项目场景',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'阿丽塔专业级LED拼控解决方案',points:'阿丽塔LED拼控解决方案架构/LED显示拼接控制能力/与阿尔法差异',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'缪斯超高分多媒体播控服务器推广',points:'缪斯播控服务器功能/超高清播放能力/多媒体融合播控场景/推广策略',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'0.5h'},
      {time:'考核',content:'Day3 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:4,topic:'展厅参观+智能中控+视频会议',sessions:[
      {time:'上午',content:'泰山系列AI超融合二合一光纤坐席管理系统',points:'泰山AI超融合坐席系统架构/AI智能调度能力/光纤传输优势/坐席协作场景',format:'PPT讲授',hours:'1h'},
      {time:'上午',content:'科赛无纸化会议系统解决方案',points:'科赛无纸化会议系统功能（文件分发/批注/投票/签到）/部署方式/与传统会议差异',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'展厅参观介绍',points:'实地参观展厅，了解双品牌产品实物陈列/方案展示',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'艾欧塔智能中控系统',points:'艾欧塔中控系统定位/功能模块/与ECS3000差异/小型项目适用场景',format:'PPT讲授',hours:'0.5h'},
      {time:'下午',content:'灵曜视频会议系统解决方案',points:'灵曜视频会议系统架构/兼容性（腾讯会议/Teams/Zoom）/部署方案',format:'PPT讲授',hours:'1h'},
      {time:'下午',content:'知识点梳理',points:'产品知识总结串讲',format:'串讲+练习',hours:'0.5h'},
      {time:'考核',content:'Day4 日考',points:'产品知识考核：18道题（30分钟）',format:'笔试',hours:'0.5h'},
    ]},
    {day:5,topic:'第3周综合周考 & 结业',sessions:[
      {time:'上午',content:'知识串讲',points:'全部PPT重点知识系统回顾；高频考点梳理；互动答疑',format:'串讲+Q&A',hours:'2h'},
      {time:'下午',content:'基础知识周考',points:'综合产品知识笔试：18道题（90分钟）',format:'笔试',hours:'1.5h'},
    ]},
  ]},
];

// ===== 存储层（localStorage缓存 + 云端API同步） =====
const API_BASE = '';

const Store = {
  // 用户管理
  getUser(){try{return JSON.parse(localStorage.getItem('quiz_user')||'null')}catch(e){return null}},
  setUser(u){localStorage.setItem('quiz_user',JSON.stringify(u));fetch(API_BASE+'/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:u.name})}).catch(()=>{})},
  clearUser(){localStorage.removeItem('quiz_user')},

  // 答题记录 - 本地缓存
  _getCache(){try{return JSON.parse(localStorage.getItem('quiz_records')||'[]')}catch(e){return[]}},
  _setCache(rs){localStorage.setItem('quiz_records',JSON.stringify(rs))},
  getRecords(){return this._getCache()},
  getRecord(id){return this._getCache().find(r=>r.id===id)},

  // 从云端同步学员记录
  async syncRecords(name){
    try{const res=await fetch(API_BASE+'/api/records/'+encodeURIComponent(name));const d=await res.json();
    if(d.success){const local=this._getCache();const sid=new Set(d.records.map(r=>r.id));this._setCache([...d.records,...local.filter(r=>!sid.has(r.id))])}}catch(e){}
  },

  // 保存记录（本地+云端）
  async saveRecord(r){const rs=this._getCache();rs.push(r);this._setCache(rs);try{await fetch(API_BASE+'/api/records',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(r)})}catch(e){};},

  // 更新记录（本地+云端，导师操作）
  async updateRecord(id,updates){const rs=this._getCache();const i=rs.findIndex(r=>r.id===id);if(i>=0){rs[i]={...rs[i],...updates};this._setCache(rs)}const tk=this._token();if(tk){try{await fetch(API_BASE+'/api/mentor/records/'+id+'/score',{method:'PUT',headers:{'Content-Type':'application/json','x-mentor-token':tk},body:JSON.stringify(updates)})}catch(e){}}},
  async resetRecordScore(id){const tk=this._token();if(!tk)return;try{const res=await fetch(API_BASE+'/api/mentor/records/'+id+'/score',{method:'DELETE',headers:{'x-mentor-token':tk}});const d=await res.json();if(d.success){const rs=this._getCache();const i=rs.findIndex(r=>r.id===id);if(i>=0){rs[i]=d.record;this._setCache(rs)}}}catch(e){}},

  // 导师管理
  isMentor(){return localStorage.getItem('quiz_mentor')==='1'},
  setMentor(v){localStorage.setItem('quiz_mentor',v?'1':'0')},
  _token(){return localStorage.getItem('quiz_mentor_token')||''},
  _setToken(t){localStorage.setItem('quiz_mentor_token',t)},

  // 导师：同步全部记录
  async syncAllRecords(){const tk=this._token();if(!tk)return;try{const res=await fetch(API_BASE+'/api/mentor/records',{headers:{'x-mentor-token':tk}});const d=await res.json();if(d.success){const local=this._getCache();const sid=new Set(d.records.map(r=>r.id));this._setCache([...d.records,...local.filter(r=>!sid.has(r.id))])}}catch(e){};},

  // 培训计划
  getPlan(){try{return JSON.parse(localStorage.getItem('quiz_plan')||'null')||DEFAULT_TRAINING_PLAN}catch(e){return DEFAULT_TRAINING_PLAN}},
  savePlan(p){localStorage.setItem('quiz_plan',JSON.stringify(p));const tk=this._token();if(tk){fetch(API_BASE+'/api/plan',{method:'PUT',headers:{'Content-Type':'application/json','x-mentor-token':tk},body:JSON.stringify(p)}).catch(()=>{})}},
  async syncPlan(){try{const res=await fetch(API_BASE+'/api/plan');const d=await res.json();if(d.success&&d.plan){localStorage.setItem('quiz_plan',JSON.stringify(d.plan))}}catch(e){}},
  resetPlan(){localStorage.removeItem('quiz_plan');const tk=this._token();if(tk){fetch(API_BASE+'/api/plan',{method:'DELETE',headers:{'x-mentor-token':tk}}).catch(()=>{})}},
};

// ===== 工具函数 =====
function $(s){return document.querySelector(s)}
function escapeHtml(t){if(t==null)return'';return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function showToast(msg,type='info'){const t=document.createElement('div');t.className=`toast toast-${type}`;t.textContent=msg;document.body.appendChild(t);setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300)},2500)}
function formatDate(d){const dt=new Date(d);return `${dt.getMonth()+1}/${dt.getDate()} ${String(dt.getHours()).padStart(2,'0')}:${String(dt.getMinutes()).padStart(2,'0')}`}
function formatDuration(sec){const m=Math.floor(sec/60);const s=sec%60;return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function genId(){return 'r_'+Date.now()+'_'+Math.random().toString(36).slice(2,8)}
function getQuestions(examId){return ALL_QUESTIONS.filter(q=>q.examId===examId)}
function getExam(id){return EXAMS.find(e=>e.id===id)}
function getTypeLabel(t){return {single:'单选题',multiple:'多选题',judge:'判断题',short:'简答题'}[t]||t}
function getTypeClass(t){return t}
function renderHeader(title,showBack,backRoute){
  const brandColor = title.includes('诺瓦')?'var(--nova)':title.includes('嗨动')?'var(--haidong)':'#fff';
  return `<div class="header"><div class="nav-bar">
    ${showBack?`<span class="nav-back" onclick="navigate('${backRoute||'#/'}')">← 返回</span>`:'<span></span>'}
    <span style="font-size:14px;font-weight:600">${escapeHtml(title)}</span>
    <span></span>
  </div></div>`
}
function renderQRCode(){
  const url=window.location.href.split('#')[0];
  return `<div class="qr-section">
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}" alt="扫码进入" width="180" height="180" style="border-radius:8px;border:1px solid var(--border)" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
    <div style="display:none;padding:12px;background:#f8fafc;border-radius:8px;font-size:12px;word-break:break-all;max-width:240px;margin:0 auto">${escapeHtml(url)}</div>
    <p style="font-size:12px;color:var(--text-sec);margin-top:8px">扫码或分享链接进入答题</p>
  </div>`
}

// ===== 路由 =====
function navigate(route){window.location.hash=route}
function handleRoute(){
  const hash=window.location.hash||'#/';
  const parts=hash.replace(/^#\//,'').split('/');
  const app=$('#app');
  if(parts[0]===''||parts[0]===''){renderHome();return}
  if(parts[0]==='login'){renderStudentLogin();return}
  if(parts[0]==='exams'){if(!Store.getUser()){navigate('#/login');return}renderExamList();return}
  if(parts[0]==='quiz'){if(!Store.getUser()){navigate('#/login');return}renderQuiz(parts[1]);return}
  if(parts[0]==='result'){if(!Store.getUser()){navigate('#/login');return}renderResult(parts[1]);return}
  if(parts[0]==='learning'){if(!Store.getUser()){navigate('#/login');return}renderLearning();return}
  if(parts[0]==='mentor'){if(parts[1]){if(!Store.isMentor()){navigate('#/mentor');return}renderMentorDashboard(parts[1]);return}renderMentorLogin();return}
  renderHome();
}

// ===== 首页 =====
function renderHome(){
  const user=Store.getUser();
  $('#app').innerHTML=`
    <div class="header" style="background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%)">
      <div style="text-align:center;padding:8px 0">
        <h1 style="font-size:22px;font-weight:800">诺瓦&嗨动 产品培训考核系统</h1>
        <p style="font-size:13px;opacity:.9;margin-top:4px">Nova & Haidong Product Training Assessment</p>
      </div>
    </div>
    <div class="container fade-in">
      <div class="home-hero">
        <div class="brand-tags">
          <span class="brand-tag nova">诺瓦科技 · LED控制+视频处理</span>
          <span class="brand-tag haidong">嗨动科技 · LCD拼接+音视频</span>
        </div>
        <p>面向新员工的产品知识培训与流程考核系统<br>3周15套考试 · 270道题 · 日考+周考+结业</p>
        <div class="home-actions">
          ${user?`<button class="btn btn-primary btn-lg" onclick="navigate('#/exams')">开始答题 — ${escapeHtml(user.name)}</button>`:`<button class="btn btn-primary btn-lg" onclick="navigate('#/login')">学员答题</button>`}
          <button class="btn btn-outline btn-lg" onclick="navigate('#/mentor')">导师管理</button>
          ${user?`<button class="btn btn-outline" onclick="Store.clearUser();navigate('#/')">退出登录</button>`:''}
          ${user?`<button class="btn btn-outline" onclick="navigate('#/learning')">学习预览</button>`:''}
        </div>
      </div>
      <div class="card">
        <h3 style="font-size:15px;margin-bottom:12px">扫码进入</h3>
        ${renderQRCode()}
      </div>
      <div class="card">
        <h3 style="font-size:15px;margin-bottom:12px">培训体系概览</h3>
        <div class="stat-grid">
          <div class="stat-card"><div class="stat-value" style="color:var(--nova)">3</div><div class="stat-label">培训周次</div></div>
          <div class="stat-card"><div class="stat-value" style="color:var(--primary)">15</div><div class="stat-label">考试套数</div></div>
          <div class="stat-card"><div class="stat-value" style="color:var(--success)">270</div><div class="stat-label">题目总数</div></div>
          <div class="stat-card"><div class="stat-value" style="color:var(--warning)">90</div><div class="stat-label">及格分数线</div></div>
        </div>
        <div style="margin-top:12px;font-size:13px;color:var(--text-sec);line-height:1.8">
          <b>Week 1（诺瓦）</b>：公司+LED基础 → 信号控制 → V/H系列 → TB/TU/一体机/GTS → 周考<br>
          <b>Week 2（嗨动）</b>：公司+LCD拼接 → E/B/矩阵/DT → NVDS+音频基础 → 天韵/奥菲斯/处理器 → 周考<br>
          <b>Week 3（嗨动）</b>：公共广播+分布式 → MD3/中控/HYNAMIC → 拼控/播控/AI → 展厅/视频会议 → 结业考
        </div>
      </div>
    </div>`;
}

// ===== 学员登录 =====
function renderStudentLogin(){
  $('#app').innerHTML=renderHeader('学员登录',true,'#/')+`
    <div class="container fade-in">
      <div class="card" style="max-width:400px;margin:40px auto">
        <h3 style="font-size:18px;margin-bottom:16px;text-align:center">学员登录</h3>
        <p style="font-size:13px;color:var(--text-sec);margin-bottom:16px;text-align:center">输入姓名即可开始答题</p>
        <div class="form-group">
          <label class="form-label">姓名</label>
          <input type="text" class="form-input" id="loginName" placeholder="请输入您的姓名" onkeydown="if(event.key==='Enter')doLogin()">
        </div>
        <button class="btn btn-primary btn-lg" style="width:100%" onclick="doLogin()">进入答题</button>
      </div>
    </div>`;
  setTimeout(()=>{$('#loginName')&&$('#loginName').focus()},100);
}
async function doLogin(){
  const name=$('#loginName').value.trim();
  if(!name){showToast('请输入姓名','error');return}
  Store.setUser({name,id:genId()});
  await Store.syncRecords(name);
  showToast('登录成功','success');
  navigate('#/exams');
}

// ===== 考试列表 =====
async function renderExamList(){
  const user=Store.getUser();
  await Store.syncRecords(user.name);
  const records=Store.getRecords().filter(r=>r.studentName===user.name);
  $('#app').innerHTML=renderHeader(`考试列表 — ${user.name}`,true,'#/')+`
    <div class="container fade-in">
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <button class="btn btn-outline btn-sm" onclick="navigate('#/learning')">📅 学习预览</button>
        <button class="btn btn-outline btn-sm" onclick="navigate('#/')">🏠 首页</button>
      </div>
      ${[1,2,3].map(week=>{
        const weekExams=EXAMS.filter(e=>e.week===week);
        const weekPlan=DEFAULT_TRAINING_PLAN.find(p=>p.week===week);
        return `<div class="week-section">
          <div class="week-title">
            <span class="brand-tag ${week===1?'nova':'haidong'}">${weekPlan.brand}</span>
            ${escapeHtml(weekPlan.title)}
          </div>
          <div class="exam-list">
            ${weekExams.map(exam=>{
              const examRecords=records.filter(r=>r.examId===exam.id);
              const latest=examRecords[examRecords.length-1];
              const best=examRecords.reduce((max,r)=>Math.max(max,r.finalScore),0);
              let statusBadge='<span class="badge badge-gray">未开始</span>';
              if(latest){
                const pass=latest.finalScore>=CONFIG.passingScore;
                statusBadge=pass?`<span class="badge badge-success">✓ ${latest.finalScore}分</span>`:`<span class="badge badge-danger">✗ ${latest.finalScore}分</span>`;
                if(examRecords.length>1)statusBadge+=` <span class="badge badge-info">最佳${best}分</span>`;
              }
              return `<div class="exam-item" onclick="navigate('#/quiz/${exam.id}')">
                <div class="exam-item-info">
                  <div class="exam-item-title">${exam.type==='weekly'?'🏆 ':''}${escapeHtml(exam.title)}</div>
                  <div class="exam-item-desc">${escapeHtml(exam.desc)} · ${exam.ppts} · ${exam.duration}分钟</div>
                </div>
                <div class="exam-item-meta">${statusBadge}</div>
              </div>`;
            }).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>`;
}

// ===== 答题引擎 =====
let quizState=null;
let quizTimer=null;

function renderQuiz(examId){
  const exam=getExam(examId);
  if(!exam){showToast('考试不存在','error');navigate('#/exams');return}
  const questions=getQuestions(examId);
  if(questions.length===0){showToast('题目加载失败','error');navigate('#/exams');return}
  
  // 初始化答题状态
  const answers={};
  questions.forEach(q=>{
    if(q.type==='multiple')answers[q.id]=[];
    else if(q.type==='judge')answers[q.id]=null;
    else answers[q.id]='';
  });
  
  quizState={examId,questions,answers,startTime:Date.now(),duration:exam.duration*60};
  
  $('#app').innerHTML=`
    <div class="quiz-header" id="quizHeader">
      <div class="nav-bar">
        <span class="nav-back" onclick="confirmExitQuiz()">← 退出</span>
        <span style="font-size:14px;font-weight:600">${escapeHtml(exam.title)}</span>
        <span class="quiz-timer" id="quizTimer">⏱ ${formatDuration(exam.duration*60)}</span>
      </div>
      <div style="margin-top:6px;display:flex;justify-content:space-between;align-items:center">
        <span class="quiz-progress" id="quizProgress">已答 0 / ${questions.length}</span>
        <button class="btn btn-success btn-sm" onclick="confirmSubmit()">提交试卷</button>
      </div>
    </div>
    <div class="container" style="padding-top:80px">
      <div style="background:var(--primary-light);border-radius:var(--radius-sm);padding:10px 14px;margin-bottom:16px;font-size:13px;color:var(--primary)">
        📋 本试卷共${questions.length}道题（8单选+4多选+4判断+2简答），满分100分，及格线${CONFIG.passingScore}分。考试时长${exam.duration}分钟，请合理安排时间。
      </div>
      ${questions.map((q,i)=>renderQuestionHTML(q,i)).join('')}
      <div style="text-align:center;padding:20px 0 40px">
        <button class="btn btn-success btn-lg" onclick="confirmSubmit()">提交试卷</button>
      </div>
    </div>`;
  
  startQuizTimer();
  updateQuizProgress();
}

function renderQuestionHTML(q,index){
  const typeLabel=getTypeLabel(q.type);
  const typeClass=getTypeClass(q.type);
  let optionsHTML='';
  if(q.type==='single'){
    optionsHTML=`<div class="question-options">${q.options.map((opt,i)=>{
      const letter=String.fromCharCode(65+i);
      return `<div class="option-item" onclick="selectSingle('${q.id}','${letter}',this)">
        <div class="option-radio"></div><div class="option-text">${escapeHtml(opt)}</div>
      </div>`;
    }).join('')}</div>`;
  }else if(q.type==='multiple'){
    optionsHTML=`<div class="question-options">${q.options.map((opt,i)=>{
      const letter=String.fromCharCode(65+i);
      return `<div class="option-item" onclick="toggleMultiple('${q.id}','${letter}',this)">
        <div class="option-checkbox"></div><div class="option-text">${escapeHtml(opt)}</div>
      </div>`;
    }).join('')}</div>
    <p style="font-size:12px;color:var(--text-sec);margin-top:6px">（多选题，可选择多个选项）</p>`;
  }else if(q.type==='judge'){
    optionsHTML=`<div class="judge-btns">
      <div class="judge-btn" onclick="selectJudge('${q.id}',true,this)">✓ 正确</div>
      <div class="judge-btn" onclick="selectJudge('${q.id}',false,this)">✗ 错误</div>
    </div>`;
  }else if(q.type==='short'){
    optionsHTML=`<textarea class="short-answer" placeholder="请在此输入您的答案..." oninput="quizState.answers['${q.id}']=this.value"></textarea>
    <p style="font-size:12px;color:var(--text-sec);margin-top:6px">（简答题，请详细作答）</p>`;
  }
  return `<div class="question-card" id="q_${q.id}">
    <span class="question-type ${typeClass}">${typeLabel} ${q.points}分</span>
    <span style="font-size:12px;color:var(--text-sec);margin-left:8px">第${index+1}题</span>
    <div class="question-text">${index+1}. ${escapeHtml(q.question)}</div>
    ${optionsHTML}
  </div>`;
}

function selectSingle(qId,letter,el){
  quizState.answers[qId]=letter;
  el.parentElement.querySelectorAll('.option-item').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  updateQuizProgress();
}
function toggleMultiple(qId,letter,el){
  let arr=quizState.answers[qId]||[];
  if(arr.includes(letter))arr=arr.filter(l=>l!==letter);
  else arr.push(letter);
  quizState.answers[qId]=arr;
  el.classList.toggle('selected');
  updateQuizProgress();
}
function selectJudge(qId,value,el){
  quizState.answers[qId]=value;
  el.parentElement.querySelectorAll('.judge-btn').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
  updateQuizProgress();
}
function updateQuizProgress(){
  if(!quizState)return;
  const answered=quizState.questions.filter(q=>{
    const a=quizState.answers[q.id];
    if(q.type==='multiple')return a&&a.length>0;
    if(q.type==='judge')return a!==null;
    return a&&a.trim();
  }).length;
  const el=$('#quizProgress');
  if(el)el.textContent=`已答 ${answered} / ${quizState.questions.length}`;
}
function startQuizTimer(){
  if(quizTimer)clearInterval(quizTimer);
  const endTime=Date.now()+quizState.duration*1000;
  quizTimer=setInterval(()=>{
    const remaining=Math.max(0,Math.floor((endTime-Date.now())/1000));
    const el=$('#quizTimer');
    if(el)el.textContent=`⏱ ${formatDuration(remaining)}`;
    if(remaining<=0){clearInterval(quizTimer);showToast('考试时间到，自动提交','warning');submitQuiz();}
  },1000);
}
function confirmExitQuiz(){
  if(confirm('确定要退出考试吗？已作答的内容将不会保存。')){
    if(quizTimer)clearInterval(quizTimer);
    quizState=null;
    navigate('#/exams');
  }
}
function confirmSubmit(){
  const unanswered=quizState.questions.filter(q=>{
    const a=quizState.answers[q.id];
    if(q.type==='multiple')return !a||a.length===0;
    if(q.type==='judge')return a===null;
    return !a||!a.trim();
  }).length;
  if(unanswered>0){
    if(!confirm(`还有${unanswered}道题未作答，确定要提交吗？`))return;
  }else{
    if(!confirm('确定要提交试卷吗？提交后不可修改。'))return;
  }
  submitQuiz();
}
async function submitQuiz(){
  if(quizTimer)clearInterval(quizTimer);
  const{examId,questions,answers,startTime}=quizState;
  const user=Store.getUser();
  
  // 评分
  const questionScores={};
  let totalScore=0;
  let typeScores={single:{score:0,max:0},multiple:{score:0,max:0},judge:{score:0,max:0},short:{score:0,max:0}};
  
  questions.forEach(q=>{
    let score=0;
    const userAnswer=answers[q.id];
    if(q.type==='single'){
      score=userAnswer===q.answer?q.points:0;
    }else if(q.type==='multiple'){
      const ua=Array.isArray(userAnswer)?userAnswer.sort():[];
      const ca=Array.isArray(q.answer)?q.answer.sort():[];
      score=JSON.stringify(ua)===JSON.stringify(ca)?q.points:0;
    }else if(q.type==='judge'){
      score=userAnswer===q.answer?q.points:0;
    }else if(q.type==='short'){
      score=gradeShortAnswer(userAnswer,q.answer);
    }
    questionScores[q.id]={score,maxScore:q.points};
    totalScore+=score;
    typeScores[q.type].score+=score;
    typeScores[q.type].max+=q.points;
  });
  
  const hasShort=questions.some(q=>q.type==='short');
  const record={
    id:genId(),studentName:user.name,examId,examTitle:getExam(examId).title,
    answers:{...answers},questionScores,autoScore:totalScore,mentorScore:null,
    finalScore:totalScore,passed:totalScore>=CONFIG.passingScore,
    startTime:new Date(startTime).toISOString(),submitTime:new Date().toISOString(),
    duration:Math.round((Date.now()-startTime)/1000),
    typeScores,mentorScored:false,mentorScoreDetails:null,
  };
  await Store.saveRecord(record);
  quizState=null;
  showToast(`提交成功！得分：${totalScore}分`,totalScore>=CONFIG.passingScore?'success':'error');
  navigate(`#/result/${record.id}`);
}

function gradeShortAnswer(answer,keywords){
  if(!answer||!answer.trim())return 0;
  const ks=keywords.split(',').map(k=>k.trim().toLowerCase()).filter(k=>k);
  if(ks.length===0)return 5;
  const al=answer.toLowerCase();
  let matched=0;
  ks.forEach(k=>{if(al.includes(k))matched++});
  return Math.round((matched/ks.length)*10);
}

// ===== 成绩页面 =====
async function renderResult(recordId){
  const user=Store.getUser();
  if(user) await Store.syncRecords(user.name);
  const record=Store.getRecord(recordId);
  if(!record){showToast('记录不存在','error');navigate('#/exams');return}
  const passed=record.finalScore>=CONFIG.passingScore;
  const exam=getExam(record.examId);
  const hasShort=record.typeScores.short.max>0;
  const shortPending=hasShort&&!record.mentorScored;
  
  $('#app').innerHTML=renderHeader('考试成绩',true,'#/exams')+`
    <div class="container fade-in">
      <div class="card score-display">
        <div class="score-number" style="color:${passed?'var(--success)':'var(--danger)'}">${record.finalScore}</div>
        <div class="score-label">总分 / 100</div>
        <div class="score-status ${passed?'score-pass':'score-fail'}">${passed?'✓ 恭喜及格':'✗ 未及格（需≥90分）'}</div>
        ${shortPending?`<div style="margin-top:12px;padding:8px 16px;background:var(--warning-light);border-radius:var(--radius-sm);font-size:13px;color:var(--warning)">⏳ 简答题待导师评分，最终成绩可能调整</div>`:''}
        ${record.mentorScored?`<div style="margin-top:8px;font-size:12px;color:var(--text-sec)">（导师已评分，自动评分：${record.autoScore}分）</div>`:''}
      </div>
      <div class="card">
        <h3 style="font-size:15px;margin-bottom:12px">得分明细</h3>
        <div class="score-breakdown">
          <div class="score-item"><div class="score-item-label">单选题</div><div class="score-item-value">${record.typeScores.single.score}/${record.typeScores.single.max}</div></div>
          <div class="score-item"><div class="score-item-label">多选题</div><div class="score-item-value">${record.typeScores.multiple.score}/${record.typeScores.multiple.max}</div></div>
          <div class="score-item"><div class="score-item-label">判断题</div><div class="score-item-value">${record.typeScores.judge.score}/${record.typeScores.judge.max}</div></div>
          <div class="score-item"><div class="score-item-label">简答题</div><div class="score-item-value">${record.typeScores.short.score}/${record.typeScores.short.max}</div></div>
        </div>
        <div style="margin-top:16px;font-size:13px;color:var(--text-sec)">
          <b>考试：</b>${escapeHtml(record.examTitle)}（${escapeHtml(exam.desc)}）<br>
          <b>用时：</b>${formatDuration(record.duration)}<br>
          <b>提交时间：</b>${formatDate(record.submitTime)}
        </div>
      </div>
      <div style="text-align:center;padding:16px 0">
        <button class="btn btn-primary btn-lg" onclick="navigate('#/exams')">返回考试列表</button>
      </div>
    </div>`;
}

// ===== 学习预览 =====
function renderLearning(){
  const plan=Store.getPlan();
  $('#app').innerHTML=renderHeader('每周学习内容预览',true,'#/exams')+`
    <div class="container fade-in">
      <div class="tabs" id="weekTabs">
        ${plan.map((w,i)=>`<div class="tab ${i===0?'active':''}" onclick="switchWeek(${i},this)">Week ${w.week} · ${w.brand}</div>`).join('')}
      </div>
      <div id="weekContent"></div>
    </div>`;
  renderWeekContent(plan,0);
}
function switchWeek(idx,el){
  document.querySelectorAll('#weekTabs .tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderWeekContent(Store.getPlan(),idx);
}
function renderWeekContent(plan,idx){
  const w=plan[idx];
  $('#weekContent').innerHTML=w.days.map(d=>`
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h3 style="font-size:15px">Day ${d.day}：${escapeHtml(d.topic)}</h3>
        <span class="badge badge-info">${d.sessions.length}节课</span>
      </div>
      ${d.sessions.map(s=>`
        <div class="session-item">
          <span class="session-time">${escapeHtml(s.time)}</span>
          <div class="session-content">
            <div>${escapeHtml(s.content)} <span style="font-size:12px;color:var(--text-sec)">· ${escapeHtml(s.hours)} · ${escapeHtml(s.format)}</span></div>
            <div class="session-points">${escapeHtml(s.points)}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ===== 导师登录 =====
function renderMentorLogin(){
  if(Store.isMentor()){navigate('#/mentor/dashboard');return}
  $('#app').innerHTML=renderHeader('导师管理',true,'#/')+`
    <div class="container fade-in">
      <div class="card" style="max-width:400px;margin:40px auto">
        <h3 style="font-size:18px;margin-bottom:16px;text-align:center">导师登录</h3>
        <div class="form-group">
          <label class="form-label">管理密码</label>
          <input type="password" class="form-input" id="mentorPwd" placeholder="请输入管理密码" onkeydown="if(event.key==='Enter')doMentorLogin()">
        </div>
        <button class="btn btn-primary btn-lg" style="width:100%" onclick="doMentorLogin()">登录</button>
      </div>
    </div>`;
  setTimeout(()=>{$('#mentorPwd')&&$('#mentorPwd').focus()},100);
}
async function doMentorLogin(){
  const pwd=$('#mentorPwd').value;
  if(pwd!==CONFIG.mentorPassword){showToast('密码错误','error');return}
  try{const res=await fetch(API_BASE+'/api/mentor/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:pwd})});const d=await res.json();if(d.success)Store._setToken(d.token)}catch(e){}
  Store.setMentor(true);
  await Store.syncAllRecords();
  await Store.syncPlan();
  showToast('登录成功','success');
  navigate('#/mentor/dashboard');
}

// ===== 导师面板 =====
async function renderMentorDashboard(tab){
  tab=tab||'dashboard';
  await Store.syncAllRecords();
  await Store.syncPlan();
  const tabs=[
    {id:'dashboard',label:'📊 数据看板'},
    {id:'records',label:'📝 答题记录'},
    {id:'questions',label:'📚 题库管理'},
    {id:'plan',label:'📅 培训计划'},
    {id:'scoring',label:'✏️ 二次评分'},
  ];
  $('#app').innerHTML=renderHeader('导师管理面板',false)+`
    <div style="background:#fff;border-bottom:1px solid var(--border)">
      <div class="container" style="padding:0 12px">
        <div class="tabs" style="margin-bottom:0;border-bottom:none">
          ${tabs.map(t=>`<div class="tab ${t.id===tab?'active':''}" onclick="navigate('#/mentor/${t.id}')">${t.label}</div>`).join('')}
          <div class="tab" onclick="Store.setMentor(false);navigate('#/')" style="margin-left:auto;color:var(--danger)">退出</div>
        </div>
      </div>
    </div>
    <div class="container fade-in" id="mentorContent"></div>`;
  
  if(tab==='dashboard')renderMentorOverview();
  else if(tab==='records')renderMentorRecords();
  else if(tab==='questions')renderMentorQuestionBank();
  else if(tab==='plan')renderMentorTrainingPlan();
  else if(tab==='scoring')renderMentorScoring();
}

// ===== 数据看板 =====
function renderMentorOverview(){
  const records=Store.getRecords();
  const students=[...new Set(records.map(r=>r.studentName))];
  const passed=records.filter(r=>r.passed);
  const totalExams=EXAMS.length;
  
  // 按考试统计
  const examStats=EXAMS.map(exam=>{
    const ers=records.filter(r=>r.examId===exam.id);
    const scores=ers.map(r=>r.finalScore);
    return{
      exam,attempts:ers.length,
      avg:ers.length?Math.round(scores.reduce((a,b)=>a+b,0)/ers.length):0,
      passRate:ers.length?Math.round(ers.filter(r=>r.passed).length/ers.length*100):0,
    };
  });
  
  // 按周统计
  const weekStats=[1,2,3].map(w=>{
    const wr=records.filter(r=>getExam(r.examId)?.week===w);
    return{week:w,attempts:wr.length,avg:wr.length?Math.round(wr.reduce((a,b)=>a+b.finalScore,0)/wr.length):0,passRate:wr.length?Math.round(wr.filter(r=>r.passed).length/wr.length*100):0};
  });
  
  $('#mentorContent').innerHTML=`
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-value" style="color:var(--primary)">${students.length}</div><div class="stat-label">参与学员</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--success)">${records.length}</div><div class="stat-label">答题次数</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--warning)">${records.length?Math.round(passed.length/records.length*100):0}%</div><div class="stat-label">及格率</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--danger)">${records.length?Math.round(records.reduce((a,b)=>a+b.finalScore,0)/records.length):0}</div><div class="stat-label">平均分</div></div>
    </div>
    
    <div class="card">
      <h3 style="font-size:15px;margin-bottom:16px">周考核统计</h3>
      ${weekStats.length===0?'<div class="empty-state"><div class="empty-state-text">暂无数据</div></div>':`
      <table class="table">
        <thead><tr><th>周次</th><th>答题次数</th><th>平均分</th><th>及格率</th></tr></thead>
        <tbody>${weekStats.map(w=>`<tr><td>Week ${w.week}</td><td>${w.attempts}</td><td>${w.avg}</td><td><span class="badge ${w.passRate>=80?'badge-success':w.passRate>=60?'badge-warning':'badge-danger'}">${w.passRate}%</span></td></tr>`).join('')}</tbody>
      </table>`}
    </div>
    
    <div class="card">
      <h3 style="font-size:15px;margin-bottom:16px">日考核通过率</h3>
      ${examStats.filter(s=>s.exam.type==='daily').length===0?'<div class="empty-state"><div class="empty-state-text">暂无数据</div></div>':`
      <div class="bar-chart">
        ${examStats.filter(s=>s.exam.type==='daily').map(s=>`
          <div class="bar-row">
            <span class="bar-label">${escapeHtml(s.exam.title)}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${s.passRate}%;background:${s.passRate>=80?'var(--success)':s.passRate>=60?'var(--warning)':'var(--danger)'}">${s.passRate}%</div></div>
            <span style="font-size:12px;color:var(--text-sec);min-width:60px">${s.attempts}人</span>
          </div>
        `).join('')}
      </div>`}
    </div>
    
    <div class="card">
      <h3 style="font-size:15px;margin-bottom:16px">各考试平均分</h3>
      ${examStats.length===0?'<div class="empty-state"><div class="empty-state-text">暂无数据</div></div>':`
      <div class="bar-chart">
        ${examStats.map(s=>`
          <div class="bar-row">
            <span class="bar-label">${escapeHtml(s.exam.title)}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${s.avg}%;background:var(--primary)">${s.avg}</div></div>
            <span style="font-size:12px;color:var(--text-sec);min-width:60px">${s.attempts}人</span>
          </div>
        `).join('')}
      </div>`}
    </div>
    
    <div class="card">
      <h3 style="font-size:15px;margin-bottom:16px">学员成绩总览</h3>
      ${students.length===0?'<div class="empty-state"><div class="empty-state-text">暂无学员数据</div></div>':`
      <table class="table">
        <thead><tr><th>学员</th><th>答题数</th><th>最佳成绩</th><th>及格数</th><th>状态</th></tr></thead>
        <tbody>${students.map(name=>{
          const sr=records.filter(r=>r.studentName===name);
          const best=sr.reduce((max,r)=>Math.max(max,r.finalScore),0);
          const passCount=sr.filter(r=>r.passed).length;
          const uniqueExams=new Set(sr.map(r=>r.examId)).size;
          return `<tr>
            <td>${escapeHtml(name)}</td><td>${sr.length}（${uniqueExams}套）</td>
            <td><b>${best}</b></td><td>${passCount}/${uniqueExams}</td>
            <td>${passCount>=10?'<span class="badge badge-success">优秀</span>':passCount>=5?'<span class="badge badge-warning">进行中</span>':'<span class="badge badge-gray">刚开始</span>'}</td>
          </tr>`;
        }).join('')}</tbody>
      </table>`}
    </div>`;
}

// ===== 答题记录（导师） =====
function renderMentorRecords(){
  const records=Store.getRecords().sort((a,b)=>new Date(b.submitTime)-new Date(a.submitTime));
  // 获取筛选器值
  const filterStudent=window._recordFilterStudent||'';
  const filterWeek=window._recordFilterWeek||'';
  
  let filtered=records;
  if(filterStudent)filtered=filtered.filter(r=>r.studentName===filterStudent);
  if(filterWeek)filtered=filtered.filter(r=>getExam(r.examId)?.week==filterWeek);
  
  const students=[...new Set(records.map(r=>r.studentName))];
  
  $('#mentorContent').innerHTML=`
    <div class="card">
      <h3 style="font-size:15px;margin-bottom:12px">筛选</h3>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <select class="form-select" style="width:auto" onchange="window._recordFilterStudent=this.value;renderMentorRecords()">
          <option value="">全部学员</option>
          ${students.map(s=>`<option value="${escapeHtml(s)}" ${filterStudent===s?'selected':''}>${escapeHtml(s)}</option>`).join('')}
        </select>
        <select class="form-select" style="width:auto" onchange="window._recordFilterWeek=this.value;renderMentorRecords()">
          <option value="">全部周次</option>
          <option value="1" ${filterWeek==='1'?'selected':''}>Week 1</option>
          <option value="2" ${filterWeek==='2'?'selected':''}>Week 2</option>
          <option value="3" ${filterWeek==='3'?'selected':''}>Week 3</option>
        </select>
        <button class="btn btn-outline btn-sm" onclick="window._recordFilterStudent='';window._recordFilterWeek='';renderMentorRecords()">重置</button>
      </div>
    </div>
    <div class="card">
      <h3 style="font-size:15px;margin-bottom:12px">答题记录（${filtered.length}条）</h3>
      ${filtered.length===0?'<div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-text">暂无答题记录</div></div>':`
      <div style="overflow-x:auto">
      <table class="table">
        <thead><tr><th>学员</th><th>考试</th><th>分数</th><th>及格</th><th>用时</th><th>提交时间</th><th>评分</th><th>操作</th></tr></thead>
        <tbody>${filtered.map(r=>{
          const exam=getExam(r.examId);
          return `<tr>
            <td>${escapeHtml(r.studentName)}</td>
            <td>${escapeHtml(r.examTitle)}<br><span style="font-size:11px;color:var(--text-sec)">${exam?'W'+exam.week+' D'+exam.day:''}</span></td>
            <td><b style="color:${r.passed?'var(--success)':'var(--danger)'}">${r.finalScore}</b>${r.mentorScored?'<span style="font-size:10px;color:var(--warning)"> ✏️</span>':''}</td>
            <td>${r.passed?'<span class="badge badge-success">及格</span>':'<span class="badge badge-danger">未及格</span>'}</td>
            <td>${formatDuration(r.duration)}</td>
            <td>${formatDate(r.submitTime)}</td>
            <td>${r.mentorScored?'<span class="badge badge-info">已评</span>':'<span class="badge badge-gray">自动</span>'}</td>
            <td><button class="btn btn-outline btn-sm" onclick="viewRecordDetail('${r.id}')">查看</button></td>
          </tr>`;
        }).join('')}</tbody>
      </table>
      </div>`}
    </div>`;
}

function viewRecordDetail(recordId){
  const r=Store.getRecord(recordId);
  if(!r)return;
  const questions=getQuestions(r.examId);
  const exam=getExam(r.examId);
  
  const modal=document.createElement('div');
  modal.className='modal-overlay';
  modal.onclick=e=>{if(e.target===modal)modal.remove()};
  modal.innerHTML=`<div class="modal" style="max-width:700px">
    <div class="modal-header">答题详情 — ${escapeHtml(r.studentName)} · ${escapeHtml(r.examTitle)} · ${r.finalScore}分</div>
    <div class="modal-body" style="max-height:60vh;overflow-y:auto">
      <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
        <span class="badge ${r.passed?'badge-success':'badge-danger'}">${r.passed?'及格':'未及格'} ${r.finalScore}分</span>
        <span class="badge badge-gray">用时 ${formatDuration(r.duration)}</span>
        <span class="badge badge-gray">${formatDate(r.submitTime)}</span>
        ${r.mentorScored?'<span class="badge badge-info">导师已评分</span>':''}
      </div>
      ${questions.map((q,i)=>{
        const ua=r.answers[q.id];
        const qs=r.questionScores[q.id]||{score:0,maxScore:q.points};
        let userAnswerText='';
        let correctAnswerText='';
        if(q.type==='single'){userAnswerText=ua?(q.options[ua.charCodeAt(0)-65]||ua):'未作答';correctAnswerText=q.options[(q.answer||'A').charCodeAt(0)-65]||q.answer||''}
        else if(q.type==='multiple'){userAnswerText=Array.isArray(ua)&&ua.length?ua.map(l=>q.options[l.charCodeAt(0)-65]||l).join('、'):'未作答';correctAnswerText=(Array.isArray(q.answer)?q.answer:[]).map(l=>q.options[l.charCodeAt(0)-65]||l).join('、')}
        else if(q.type==='judge'){userAnswerText=ua===null||ua===undefined?'未作答':(ua?'正确':'错误');correctAnswerText=q.answer?'正确':'错误'}
        else if(q.type==='short'){userAnswerText=ua||'未作答';correctAnswerText=String(q.answer||'').split(',').join('、')}
        const isCorrect=qs.score>=qs.maxScore;
        return `<div class="answer-detail">
          <div class="answer-detail-q">${i+1}. [${getTypeLabel(q.type)} ${q.points}分] ${escapeHtml(q.question)}</div>
          <div style="margin:6px 0"><b>学员答案：</b><span class="${isCorrect?'answer-correct':'answer-wrong'}">${escapeHtml(userAnswerText)}</span> <span style="color:var(--text-sec)">(${qs.score}/${qs.maxScore}分)</span></div>
          ${q.type!=='short'?`<div style="margin:4px 0"><b>正确答案：</b><span class="answer-correct">${escapeHtml(correctAnswerText)}</span></div>`:`<div style="margin:4px 0"><b>评分关键词：</b><span style="color:var(--text-sec)">${escapeHtml(correctAnswerText)}</span></div>`}
          <div style="margin:4px 0;font-size:13px;color:var(--text-sec)"><b>解析：</b>${escapeHtml(q.explanation)}</div>
        </div>`;
      }).join('')}
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="this.closest('.modal-overlay').remove()">关闭</button>
      <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove();navigate('#/mentor/scoring')">去评分</button>
    </div>
  </div>`;
  document.body.appendChild(modal);
}

// ===== 题库管理 =====
function renderMentorQuestionBank(){
  let filterExam=window._qbFilterExam||'';
  let filterType=window._qbFilterType||'';
  let searchTerm=window._qbSearch||'';
  
  let questions=ALL_QUESTIONS.slice();
  if(filterExam)questions=questions.filter(q=>q.examId===filterExam);
  if(filterType)questions=questions.filter(q=>q.type===filterType);
  if(searchTerm)questions=questions.filter(q=>(q.question||'').includes(searchTerm)||(q.knowledgePoint||'').includes(searchTerm));
  
  $('#mentorContent').innerHTML=`
    <div class="card">
      <h3 style="font-size:15px;margin-bottom:12px">题库浏览（共${ALL_QUESTIONS.length}道题）</h3>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
        <select class="form-select" style="width:auto" onchange="window._qbFilterExam=this.value;renderMentorQuestionBank()">
          <option value="">全部考试</option>
          ${EXAMS.map(e=>`<option value="${e.id}" ${filterExam===e.id?'selected':''}>${escapeHtml(e.title)} - ${escapeHtml(e.desc)}</option>`).join('')}
        </select>
        <select class="form-select" style="width:auto" onchange="window._qbFilterType=this.value;renderMentorQuestionBank()">
          <option value="">全部题型</option>
          <option value="single" ${filterType==='single'?'selected':''}>单选题</option>
          <option value="multiple" ${filterType==='multiple'?'selected':''}>多选题</option>
          <option value="judge" ${filterType==='judge'?'selected':''}>判断题</option>
          <option value="short" ${filterType==='short'?'selected':''}>简答题</option>
        </select>
        <input type="text" class="form-input" style="width:200px" placeholder="搜索题目..." value="${escapeHtml(searchTerm)}" oninput="window._qbSearch=this.value" onkeydown="if(event.key==='Enter')renderMentorQuestionBank()">
        <button class="btn btn-outline btn-sm" onclick="window._qbFilterExam='';window._qbFilterType='';window._qbSearch='';renderMentorQuestionBank()">重置</button>
      </div>
      <p style="font-size:13px;color:var(--text-sec)">当前显示 ${questions.length} 道题 · 点击"编辑"可修改题目、选项、答案、解析</p>
    </div>
    ${questions.map((q,i)=>{
      const exam=getExam(q.examId);
      let answerText='';
      if(q.type==='single')answerText=q.options[q.answer.charCodeAt(0)-65]||q.answer||'';
      else if(q.type==='multiple')answerText=(Array.isArray(q.answer)?q.answer:[]).map(l=>q.options[l.charCodeAt(0)-65]||l).join('、');
      else if(q.type==='judge')answerText=q.answer?'正确':'错误';
      else if(q.type==='short')answerText=String(q.answer||'').split(',').join('、');
      return `<div class="question-card">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <span class="question-type ${q.type}">${getTypeLabel(q.type)} ${q.points}分</span>
          <span class="badge badge-gray">${escapeHtml(exam?.title||q.examId)}</span>
          <span style="font-size:12px;color:var(--text-sec)">${escapeHtml(q.knowledgePoint)}</span>
          <button class="btn btn-outline btn-sm" style="margin-left:auto" onclick="openQuestionEditor('${q.id}')">✏️ 编辑</button>
        </div>
        <div class="question-text">${i+1}. ${escapeHtml(q.question)}</div>
        ${(q.options&&q.options.length>0)?`<div class="question-options" style="pointer-events:none">${q.options.map((opt,j)=>{
          const letter=String.fromCharCode(65+j);
          const isAnswer=q.type==='single'?q.answer===letter:(q.type==='multiple'&&q.answer.includes(letter));
          return `<div class="option-item ${isAnswer?'selected':''}"><div class="${q.type==='multiple'?'option-checkbox':'option-radio'}"></div><div class="option-text">${escapeHtml(opt)}</div></div>`;
        }).join('')}</div>`:''}
        ${q.type==='judge'?`<div style="padding:8px 12px;background:#f8fafc;border-radius:var(--radius-sm);font-size:14px"><b>正确答案：</b><span class="answer-correct">${answerText}</span></div>`:''}
        ${q.type==='short'?`<div style="padding:8px 12px;background:#fef3c7;border-radius:var(--radius-sm);font-size:13px"><b>评分关键词：</b>${escapeHtml(answerText)}</div>`:''}
        <div style="margin-top:8px;padding:8px 12px;background:#f0fdf4;border-radius:var(--radius-sm);font-size:13px;color:#166534"><b>解析：</b>${escapeHtml(q.explanation)}</div>
      </div>`;
    }).join('')}
  `;
}

function openQuestionEditor(qid){
  const q=ALL_QUESTIONS.find(x=>x.id===qid);
  if(!q)return;
  
  const modal=document.createElement('div');
  modal.className='modal-overlay';
  modal.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px';
  
  let optionsHtml='';
  if(q.type==='single'||q.type==='multiple'){
    optionsHtml=q.options.map((opt,i)=>{
      const letter=String.fromCharCode(65+i);
      const isAns=q.type==='single'?q.answer===letter:(Array.isArray(q.answer)&&q.answer.includes(letter));
      return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <input type="${q.type==='multiple'?'checkbox':'radio'}" name="qedit_answer" value="${letter}" ${isAns?'checked':''} style="width:20px;height:20px">
        <span style="font-weight:600;min-width:20px">${letter}.</span>
        <input type="text" class="form-input" id="qedit_opt_${i}" value="${escapeHtml(opt)}" style="flex:1">
        <button class="btn btn-danger btn-sm" onclick="this.parentElement.querySelector('input[type=text]').value='';this.parentElement.style.display='none'" style="min-width:auto">✕</button>
      </div>`;
    }).join('');
    optionsHtml+=`<button class="btn btn-outline btn-sm" onclick="addQuestionOption('${q.type}')" style="margin-top:4px">+ 添加选项</button>`;
  }
  
  let answerHtml='';
  if(q.type==='judge'){
    answerHtml=`<div style="margin-bottom:12px"><label style="font-weight:600;display:block;margin-bottom:6px">正确答案</label>
      <select class="form-select" id="qedit_answer">
        <option value="true" ${q.answer===true||q.answer==='true'?'selected':''}>正确</option>
        <option value="false" ${q.answer===false||q.answer==='false'?'selected':''}>错误</option>
      </select></div>`;
  }else if(q.type==='short'){
    answerHtml=`<div style="margin-bottom:12px"><label style="font-weight:600;display:block;margin-bottom:6px">评分关键词（用英文逗号分隔）</label>
      <input type="text" class="form-input" id="qedit_answer" value="${escapeHtml(String(q.answer||''))}" placeholder="关键词1,关键词2,关键词3"></div>`;
  }
  
  modal.innerHTML=`<div style="background:#fff;border-radius:12px;max-width:600px;width:100%;max-height:85vh;overflow-y:auto;padding:24px">
    <h3 style="font-size:16px;margin-bottom:16px">编辑题目 — ${getTypeLabel(q.type)}</h3>
    <div style="margin-bottom:12px">
      <label style="font-weight:600;display:block;margin-bottom:6px">题目内容</label>
      <textarea class="form-input" id="qedit_question" rows="3" style="width:100%">${escapeHtml(q.question)}</textarea>
    </div>
    ${q.type==='single'||q.type==='multiple'?`<div style="margin-bottom:12px">
      <label style="font-weight:600;display:block;margin-bottom:6px">选项（勾选正确答案）</label>
      <div id="qedit_options">${optionsHtml}</div>
    </div>`:''}
    ${answerHtml}
    <div style="margin-bottom:12px">
      <label style="font-weight:600;display:block;margin-bottom:6px">解析</label>
      <textarea class="form-input" id="qedit_explanation" rows="2" style="width:100%">${escapeHtml(q.explanation||'')}</textarea>
    </div>
    <div style="display:flex;gap:12px;margin-bottom:12px">
      <div style="flex:1">
        <label style="font-weight:600;display:block;margin-bottom:6px">分值</label>
        <input type="number" class="form-input" id="qedit_points" value="${q.points}" min="1" max="20" style="width:100%">
      </div>
      <div style="flex:1">
        <label style="font-weight:600;display:block;margin-bottom:6px">知识点</label>
        <input type="text" class="form-input" id="qedit_kp" value="${escapeHtml(q.knowledgePoint||'')}" style="width:100%">
      </div>
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px">
      <button class="btn btn-outline" onclick="this.closest('.modal-overlay').remove()">取消</button>
      <button class="btn btn-primary" onclick="saveQuestionEdit('${qid}')">保存并重判</button>
    </div>
  </div>`;
  document.body.appendChild(modal);
}

function addQuestionOption(qtype){
  const container=document.getElementById('qedit_options');
  if(!container)return;
  const existing=container.querySelectorAll('input[type=text]').length;
  const letter=String.fromCharCode(65+existing);
  const div=document.createElement('div');
  div.style.cssText='display:flex;align-items:center;gap:8px;margin-bottom:8px';
  div.innerHTML=`<input type="${qtype==='multiple'?'checkbox':'radio'}" name="qedit_answer" value="${letter}" style="width:20px;height:20px">
    <span style="font-weight:600;min-width:20px">${letter}.</span>
    <input type="text" class="form-input" value="" style="flex:1" placeholder="选项内容">
    <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()" style="min-width:auto">✕</button>`;
  container.appendChild(div);
}

async function saveQuestionEdit(qid){
  const q=ALL_QUESTIONS.find(x=>x.id===qid);
  if(!q)return;
  
  const updates={
    question:document.getElementById('qedit_question').value.trim(),
    explanation:document.getElementById('qedit_explanation').value.trim(),
    points:parseInt(document.getElementById('qedit_points').value)||q.points,
    knowledgePoint:document.getElementById('qedit_kp').value.trim(),
  };
  
  if(q.type==='single'||q.type==='multiple'){
    const optInputs=document.querySelectorAll('#qedit_options input[type=text]');
    const newOptions=[];
    const newAnswer=[];
    optInputs.forEach((inp,i)=>{
      const val=inp.value.trim();
      if(val){
        const letter=String.fromCharCode(65+i);
        newOptions.push(val);
        const cb=document.querySelector(`#qedit_options input[name="qedit_answer"][value="${letter}"]`);
        if(cb&&cb.checked)newAnswer.push(letter);
      }
    });
    updates.options=newOptions;
    if(q.type==='single'){
      updates.answer=newAnswer[0]||'A';
    }else{
      updates.answer=newAnswer;
    }
  }else if(q.type==='judge'){
    updates.answer=document.getElementById('qedit_answer').value==='true';
  }else if(q.type==='short'){
    updates.answer=document.getElementById('qedit_answer').value.trim();
  }
  
  // Validate
  if(!updates.question){showToast('题目内容不能为空','error');return}
  if((q.type==='single'||q.type==='multiple')&&updates.options.length<2){showToast('至少需要2个选项','error');return}
  if(q.type==='single'&&!updates.answer){showToast('请设置正确答案','error');return}
  if(q.type==='multiple'&&(!updates.answer||updates.answer.length===0)){showToast('请设置正确答案','error');return}
  
  try{
    const tk=Store._token();
    const res=await fetch(API_BASE+'/api/mentor/questions/'+qid,{
      method:'PUT',
      headers:{'Content-Type':'application/json','x-mentor-token':tk},
      body:JSON.stringify(updates)
    });
    const d=await res.json();
    if(d.success){
      // Update local
      const idx=ALL_QUESTIONS.findIndex(x=>x.id===qid);
      if(idx>=0){ALL_QUESTIONS[idx]={...ALL_QUESTIONS[idx],...updates}}
      document.querySelector('.modal-overlay').remove();
      const msg=d.regradedCount>0?`已保存，自动重判了${d.regradedCount}条答题记录`:'已保存';
      showToast(msg,'success');
      renderMentorQuestionBank();
    }else{
      showToast(d.error||'保存失败','error');
    }
  }catch(e){
    showToast('网络错误','error');
  }
}

// ===== 培训计划 =====
function renderMentorTrainingPlan(){
  const plan=Store.getPlan();
  const isCustom=localStorage.getItem('quiz_plan')!==null;
  
  $('#mentorContent').innerHTML=`
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h3 style="font-size:15px">培训计划看板${isCustom?' <span class="badge badge-warning">已自定义修改</span>':''}</h3>
        <div style="display:flex;gap:8px">
          <button class="btn btn-outline btn-sm" onclick="toggleEditMode()">✏️ ${window._editMode?'完成编辑':'编辑模式'}</button>
          ${isCustom?`<button class="btn btn-danger btn-sm" onclick="resetTrainingPlan()">恢复默认</button>`:''}
        </div>
      </div>
      <p style="font-size:13px;color:var(--text-sec);margin-bottom:16px">点击编辑模式后，可直接修改各课程的知识要点、课时等信息。修改后点击"完成编辑"保存。</p>
    </div>
    ${plan.map((w,wi)=>`
      <div class="week-section">
        <div class="week-title">
          <span class="brand-tag ${w.week===1?'nova':'haidong'}">${w.brand}</span>
          ${escapeHtml(w.title)}
        </div>
        ${w.days.map((d,di)=>`
          <div class="card">
            <h4 style="font-size:14px;margin-bottom:10px">Day ${d.day}：${escapeHtml(d.topic)}</h4>
            <div style="overflow-x:auto">
            <table class="table">
              <thead><tr><th>时段</th><th>培训内容</th><th>知识要点</th><th>形式</th><th>课时</th></tr></thead>
              <tbody>${d.sessions.map((s,si)=>{
                const editAttr=window._editMode?`contenteditable="true" class="editable"`:'';
                return `<tr>
                  <td>${escapeHtml(s.time)}</td>
                  <td ${editAttr} onblur="savePlanEdit(${wi},${di},${si},'content',this.textContent)">${escapeHtml(s.content)}</td>
                  <td ${editAttr} onblur="savePlanEdit(${wi},${di},${si},'points',this.textContent)" style="max-width:300px">${escapeHtml(s.points)}</td>
                  <td ${editAttr} onblur="savePlanEdit(${wi},${di},${si},'format',this.textContent)">${escapeHtml(s.format)}</td>
                  <td ${editAttr} onblur="savePlanEdit(${wi},${di},${si},'hours',this.textContent)">${escapeHtml(s.hours)}</td>
                </tr>`;
              }).join('')}</tbody>
            </table>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('')}
  `;
}
function toggleEditMode(){
  window._editMode=!window._editMode;
  if(!window._editMode){
    showToast('已保存修改','success');
  }
  renderMentorTrainingPlan();
}
function savePlanEdit(wi,di,si,field,value){
  const plan=Store.getPlan();
  if(plan[wi]&&plan[wi].days[di]&&plan[wi].days[di].sessions[si]){
    plan[wi].days[di].sessions[si][field]=value.trim();
    Store.savePlan(plan);
  }
}
function resetTrainingPlan(){
  if(!confirm('确定要恢复默认培训计划吗？所有自定义修改将丢失。'))return;
  Store.resetPlan();
  showToast('已恢复默认','success');
  renderMentorTrainingPlan();
}

// ===== 二次评分 =====
function renderMentorScoring(){
  const records=Store.getRecords();
  // 找出含有简答题的记录
  const recordsWithShort=records.filter(r=>{
    const qs=getQuestions(r.examId);
    return qs.some(q=>q.type==='short');
  }).sort((a,b)=>new Date(b.submitTime)-new Date(a.submitTime));
  
  // 筛选未评分的
  const unscored=recordsWithShort.filter(r=>!r.mentorScored);
  const scored=recordsWithShort.filter(r=>r.mentorScored);
  
  $('#mentorContent').innerHTML=`
    <div class="card">
      <h3 style="font-size:15px;margin-bottom:12px">简答题二次评分</h3>
      <p style="font-size:13px;color:var(--text-sec)">系统根据关键词匹配自动评分简答题，导师可在此调整分数。调整后总分将重新计算。</p>
      <div style="display:flex;gap:12px;margin-top:12px">
        <div class="stat-card" style="flex:1"><div class="stat-value" style="color:var(--warning);font-size:22px">${unscored.length}</div><div class="stat-label">待评分</div></div>
        <div class="stat-card" style="flex:1"><div class="stat-value" style="color:var(--success);font-size:22px">${scored.length}</div><div class="stat-label">已评分</div></div>
        <div class="stat-card" style="flex:1"><div class="stat-value" style="color:var(--primary);font-size:22px">${recordsWithShort.length}</div><div class="stat-label">总记录</div></div>
      </div>
    </div>
    
    ${unscored.length>0?`
      <div class="card">
        <h3 style="font-size:15px;margin-bottom:12px">⏳ 待评分记录（${unscored.length}）</h3>
        ${unscored.map(r=>{
          const questions=getQuestions(r.examId).filter(q=>q.type==='short');
          return `<div class="scoring-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
              <div><b>${escapeHtml(r.studentName)}</b> · ${escapeHtml(r.examTitle)} · 自动评分 <b>${r.autoScore}</b>分</div>
              <span class="badge badge-gray">${formatDate(r.submitTime)}</span>
            </div>
            ${questions.map((q,qi)=>{
              const ua=r.answers[q.id]||'未作答';
              const qs=r.questionScores[q.id]||{score:0,maxScore:10};
              return `<div style="border-top:1px solid var(--border);padding-top:10px;margin-top:8px">
                <div class="scoring-question">Q${qi+1}. ${escapeHtml(q.question)}</div>
                <div class="scoring-answer">${escapeHtml(ua)}</div>
                <div class="scoring-keywords">评分关键词：${escapeHtml(q.answer.split(',').join('、'))}</div>
                <div class="scoring-controls">
                  <span style="font-size:13px;color:var(--text-sec)">自动评分：</span>
                  <b style="font-size:16px">${qs.score}</b><span style="color:var(--text-sec)">/${qs.maxScore}</span>
                  <span style="margin-left:16px;font-size:13px;color:var(--text-sec)">导师评分：</span>
                  <input type="number" class="scoring-input" id="score_${r.id}_${q.id}" min="0" max="${qs.maxScore}" value="${qs.score}" step="0.5">
                  <span style="color:var(--text-sec)">/${qs.maxScore}</span>
                </div>
              </div>`;
            }).join('')}
            <div style="margin-top:12px;text-align:right">
              <button class="btn btn-primary btn-sm" onclick="saveMentorScore('${r.id}')">保存评分</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    `:''}
    
    ${scored.length>0?`
      <div class="card">
        <h3 style="font-size:15px;margin-bottom:12px">✅ 已评分记录（${scored.length}）</h3>
        <table class="table">
          <thead><tr><th>学员</th><th>考试</th><th>自动评分</th><th>导师评分</th><th>最终</th><th>操作</th></tr></thead>
          <tbody>${scored.map(r=>`<tr>
            <td>${escapeHtml(r.studentName)}</td><td>${escapeHtml(r.examTitle)}</td>
            <td>${r.autoScore}</td><td>${r.mentorScore||'-'}</td>
            <td><b style="color:${r.passed?'var(--success)':'var(--danger)'}">${r.finalScore}</b></td>
            <td><button class="btn btn-outline btn-sm" onclick="resetMentorScore('${r.id}')">重新评分</button></td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
    `:''}
    
    ${recordsWithShort.length===0?'<div class="empty-state"><div class="empty-state-icon">✏️</div><div class="empty-state-text">暂无需要评分的记录</div></div>':''}
  `;
}

async function saveMentorScore(recordId){
  const r=Store.getRecord(recordId);
  if(!r)return;
  const questions=getQuestions(r.examId).filter(q=>q.type==='short');
  let mentorScoreDetails={};
  // autoScore 已包含所有题目的自动评分（含简答题自动评分）
  let totalScore=r.autoScore;
  let shortScore=0,shortMax=0;
  // 深拷贝 questionScores 和 typeScores，避免直接修改缓存对象
  const newQuestionScores={...r.questionScores};
  const newTypeScores={
    single:{...r.typeScores?.single||{score:0,max:0}},
    multiple:{...r.typeScores?.multiple||{score:0,max:0}},
    judge:{...r.typeScores?.judge||{score:0,max:0}},
    short:{score:0,max:0}
  };
  
  questions.forEach(q=>{
    const oldScore=r.questionScores[q.id]?.score||0;
    const input=$(`#score_${recordId}_${q.id}`);
    const newScore=Math.max(0,Math.min(q.points,parseFloat(input?.value||0)));
    // 原始自动评分：如果之前评过分，从 mentorScoreDetails 取原始 autoScore
    const originalAutoScore=(r.mentorScored&&r.mentorScoreDetails&&r.mentorScoreDetails[q.id])
      ?r.mentorScoreDetails[q.id].autoScore:oldScore;
    mentorScoreDetails[q.id]={autoScore:originalAutoScore,mentorScore:newScore};
    totalScore=totalScore-oldScore+newScore;
    shortScore+=newScore;
    shortMax+=q.points;
    newQuestionScores[q.id]={score:newScore,maxScore:q.points};
  });
  
  newTypeScores.short={score:shortScore,max:shortMax};
  
  await Store.updateRecord(recordId,{
    mentorScore:shortScore,
    finalScore:totalScore,
    passed:totalScore>=CONFIG.passingScore,
    mentorScored:true,
    mentorScoreDetails,
    questionScores:newQuestionScores,
    typeScores:newTypeScores,
  });
  const objectiveScore=totalScore-shortScore;
  showToast(`评分已保存，最终分数：${totalScore}分（客观题${objectiveScore}分 + 简答题${shortScore}分）`,'success');
  renderMentorScoring();
}

async function resetMentorScore(recordId){
  if(!confirm('确定要重新评分吗？之前的导师评分将被清除。'))return;
  await Store.resetRecordScore(recordId);
  showToast('已重置为自动评分','info');
  renderMentorScoring();
}

// ===== 初始化 =====
async function init(){
  await loadQuestionOverrides();
  window.addEventListener('hashchange',handleRoute);
  handleRoute();
}
window.addEventListener('DOMContentLoaded',init);

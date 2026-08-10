/**
 * 嗨动科技(Haidong) 产品培训 第二周 题库
 * 涵盖：LCD拼接 + 音频系统 + 视频矩阵 等
 *
 * 每套考试18题：8单选(4分=32) + 4多选(7分=28) + 4判断(5分=20) + 2简答(10分=20) = 满分100，90分及格
 * 简答题 answer 字段为逗号分隔关键词，用于自动匹配评分
 *
 * examId 列表：
 *   w2d1   —— Day1 嗨动公司+LCD+拼接方案
 *   w2d2   —— Day2 E系列+B系列+无缝矩阵+DT
 *   w2d3   —— Day3 NVDS解码+传输配件+音频基础
 *   w2d4   —— Day4 天韵+奥菲斯+音频处理器+选型
 *   w2week —— Week2 周考 综合(PPT1~20)
 */
const WEEK2_QUESTIONS = [
  {
    "id": "w2d1_q1",
    "examId": "w2d1",
    "type": "single",
    "question": "嗨动科技的主营产品线不包括以下哪一项？",
    "options": [
      "A. LCD拼接显示",
      "B. 音视频矩阵",
      "C. 半导体芯片制造",
      "D. 智能中控"
    ],
    "answer": "C",
    "explanation": "嗨动主营产品线包括LCD拼接、音视频矩阵、音频扩声、智能中控、多媒体播控五大方向，不涉及半导体芯片制造。",
    "points": 4,
    "knowledgePoint": "嗨动公司介绍-主营产品线"
  },
  {
    "id": "w2d1_q2",
    "examId": "w2d1",
    "type": "single",
    "question": "LCD液晶显示屏的成像原理主要依赖以下哪一部件来控制光线通过？",
    "options": [
      "A. 等离子体",
      "B. 液晶分子",
      "C. OLED自发光层",
      "D. 投影灯泡"
    ],
    "answer": "B",
    "explanation": "LCD通过液晶分子在电场作用下偏转来控制背光透过率从而成像，液晶本身不发光，必须依赖背光源。",
    "points": 4,
    "knowledgePoint": "LCD行业基础-显示原理"
  },
  {
    "id": "w2d1_q3",
    "examId": "w2d1",
    "type": "single",
    "question": "关于LCD液晶屏，以下说法正确的是？",
    "options": [
      "A. LCD屏幕自身能够发光",
      "B. LCD必须依赖背光源才能显示画面",
      "C. LCD与OLED发光原理完全相同",
      "D. LCD不需要任何光源"
    ],
    "answer": "B",
    "explanation": "LCD液晶本身不发光，必须依赖背光源照射才能显示画面；OLED为自发光，原理不同。",
    "points": 4,
    "knowledgePoint": "LCD行业基础-显示原理"
  },
  {
    "id": "w2d1_q4",
    "examId": "w2d1",
    "type": "single",
    "question": "LCD拼接屏的“拼缝”通常指什么？",
    "options": [
      "A. 屏幕对角线长度",
      "B. 相邻屏体边框之间的缝隙宽度",
      "C. 屏幕分辨率",
      "D. 屏幕亮度"
    ],
    "answer": "B",
    "explanation": "拼缝指相邻两块拼接屏边框之间的物理缝隙宽度，常见有3.5mm、1.8mm、1.7mm、0.88mm等，越小画面越完整。",
    "points": 4,
    "knowledgePoint": "LCD行业基础-拼接应用"
  },
  {
    "id": "w2d1_q5",
    "examId": "w2d1",
    "type": "single",
    "question": "下列哪一项是LCD拼接屏的典型应用场景？",
    "options": [
      "A. 个人手机显示",
      "B. 指挥调度中心大屏",
      "C. 手表表盘",
      "D. 车载小屏"
    ],
    "answer": "B",
    "explanation": "LCD拼接屏常用于指挥调度中心、安防监控、展览展示、会议室等需要大画面显示的场景。",
    "points": 4,
    "knowledgePoint": "LCD拼接市场-应用场景"
  },
  {
    "id": "w2d1_q6",
    "examId": "w2d1",
    "type": "single",
    "question": "在LCD产业链中，上游面板厂商通常是？",
    "options": [
      "A. 系统集成商",
      "B. 面板制造厂商（如京东方BOE、LG等）",
      "C. 终端用户",
      "D. 物流公司"
    ],
    "answer": "B",
    "explanation": "LCD产业链上游为面板制造厂商（如京东方BOE、LG、三星等），中游为整机/方案商，下游为集成应用。",
    "points": 4,
    "knowledgePoint": "LCD行业基础-产业链"
  },
  {
    "id": "w2d1_q7",
    "examId": "w2d1",
    "type": "single",
    "question": "嗨动视觉LCD拼接级联解决方案V3.1中“级联”的主要作用是？",
    "options": [
      "A. 降低屏幕亮度",
      "B. 扩展拼接规模，支持更多屏体接入",
      "C. 减少设备数量",
      "D. 替代背光源"
    ],
    "answer": "B",
    "explanation": "级联通过多台设备/控制器级联连接，扩展可接入的屏体数量，实现更大规模拼接墙。",
    "points": 4,
    "knowledgePoint": "嗨动视觉LCD拼接级联解决方案V3.1"
  },
  {
    "id": "w2d1_q8",
    "examId": "w2d1",
    "type": "single",
    "question": "客户在选择LCD拼接方案时，通常最关注的指标不包括？",
    "options": [
      "A. 拼缝大小",
      "B. 亮度与色彩一致性",
      "C. 芯片制程工艺",
      "D. 整体稳定性与售后"
    ],
    "answer": "C",
    "explanation": "客户关注拼缝、亮度色彩一致性、稳定性售后等应用层面指标，芯片制程工艺并非拼接方案客户的主要关注点。",
    "points": 4,
    "knowledgePoint": "LCD拼接市场-客户需求分析"
  },
  {
    "id": "w2d1_q9",
    "examId": "w2d1",
    "type": "multiple",
    "question": "嗨动科技的主营产品线包括以下哪些？（多选）",
    "options": [
      "A. LCD拼接显示",
      "B. 音视频矩阵",
      "C. 音频扩声",
      "D. 智能中控与多媒体播控"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "嗨动主营产品线涵盖LCD拼接、音视频矩阵、音频扩声、智能中控、多媒体播控五大方向。",
    "points": 7,
    "knowledgePoint": "嗨动公司介绍-主营产品线"
  },
  {
    "id": "w2d1_q10",
    "examId": "w2d1",
    "type": "multiple",
    "question": "LCD拼接屏的典型应用场景包括哪些？（多选）",
    "options": [
      "A. 指挥调度中心",
      "B. 安防监控中心",
      "C. 展览展示",
      "D. 会议室大屏"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "上述均为LCD拼接屏的典型应用场景，均需要大尺寸、多画面显示。",
    "points": 7,
    "knowledgePoint": "LCD拼接市场-应用场景"
  },
  {
    "id": "w2d1_q11",
    "examId": "w2d1",
    "type": "multiple",
    "question": "影响LCD拼接显示效果的因素有哪些？（多选）",
    "options": [
      "A. 拼缝宽度",
      "B. 亮度与色温一致性",
      "C. 信号处理与同步",
      "D. 背光源质量"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "拼缝、亮度色温一致性、信号同步、背光质量均直接影响拼接显示的最终效果。",
    "points": 7,
    "knowledgePoint": "LCD行业基础-拼接应用"
  },
  {
    "id": "w2d1_q12",
    "examId": "w2d1",
    "type": "multiple",
    "question": "LCD产业链通常包含以下哪些环节？（多选）",
    "options": [
      "A. 面板制造",
      "B. 整机/方案设计",
      "C. 系统集成与应用",
      "D. 终端使用与运维"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "LCD产业链包含面板制造、整机方案设计、系统集成应用、终端运维等环节。",
    "points": 7,
    "knowledgePoint": "LCD行业基础-产业链"
  },
  {
    "id": "w2d1_q13",
    "examId": "w2d1",
    "type": "judge",
    "question": "LCD液晶屏自身不发光，必须依赖背光源才能显示画面。",
    "answer": true,
    "explanation": "正确。LCD液晶本身不发光，需要背光照射成像。",
    "points": 5,
    "knowledgePoint": "LCD行业基础-显示原理",
    "options": []
  },
  {
    "id": "w2d1_q14",
    "examId": "w2d1",
    "type": "judge",
    "question": "LCD拼接屏的拼缝越小，画面整体性越好，越接近无缝效果。",
    "answer": true,
    "explanation": "正确。拼缝越小，视觉割裂感越低，画面整体性越好。",
    "points": 5,
    "knowledgePoint": "LCD行业基础-拼接应用",
    "options": []
  },
  {
    "id": "w2d1_q15",
    "examId": "w2d1",
    "type": "judge",
    "question": "嗨动科技的业务仅限于LCD拼接显示，不涉及音频领域。",
    "answer": false,
    "explanation": "错误。嗨动主营产品线包含音频扩声等多个方向，业务不限于LCD拼接。",
    "points": 5,
    "knowledgePoint": "嗨动公司介绍-业务版图",
    "options": []
  },
  {
    "id": "w2d1_q16",
    "examId": "w2d1",
    "type": "judge",
    "question": "级联方案可以通过多台设备串联扩展拼接规模，适用于大型拼接墙项目。",
    "answer": true,
    "explanation": "正确。级联用于扩展接入屏体数量，支撑大型拼接墙项目。",
    "points": 5,
    "knowledgePoint": "嗨动视觉LCD拼接级联解决方案V3.1",
    "options": []
  },
  {
    "id": "w2d1_q17",
    "examId": "w2d1",
    "type": "short",
    "question": "请写出嗨动科技的五大主营产品线。",
    "answer": "LCD拼接,音视频矩阵,音频扩声,智能中控,多媒体播控",
    "explanation": "五大产品线为LCD拼接、音视频矩阵、音频扩声、智能中控、多媒体播控。",
    "points": 10,
    "knowledgePoint": "嗨动公司介绍-主营产品线",
    "options": []
  },
  {
    "id": "w2d1_q18",
    "examId": "w2d1",
    "type": "short",
    "question": "请列举LCD拼接屏至少三种典型应用场景。",
    "answer": "指挥调度,安防监控,展览展示,会议室",
    "explanation": "典型场景包括指挥调度中心、安防监控、展览展示、会议室大屏等。",
    "points": 10,
    "knowledgePoint": "LCD拼接市场-应用场景",
    "options": []
  },
  {
    "id": "w2d2_q1",
    "examId": "w2d2",
    "type": "single",
    "question": "嗨动E系列视频拼接服务器的主要定位是？",
    "options": [
      "A. 仅用于音频处理",
      "B. 视频拼接与显示处理",
      "C. 网络交换设备",
      "D. 存储备份设备"
    ],
    "answer": "B",
    "explanation": "E系列为视频拼接服务器，负责视频信号的接入、拼接与显示处理。",
    "points": 4,
    "knowledgePoint": "E系列视频拼接服务器-功能定位"
  },
  {
    "id": "w2d2_q2",
    "examId": "w2d2",
    "type": "single",
    "question": "在E系列LCD拼接方案中，E系列与H系列的主要区别通常体现在？",
    "options": [
      "A. 是否需要电源",
      "B. 性能规格与适用规模/定位不同",
      "C. 是否使用液晶屏",
      "D. 是否需要背光"
    ],
    "answer": "B",
    "explanation": "E与H系列在性能规格、适用规模和产品定位上存在差异，需根据项目需求选型。",
    "points": 4,
    "knowledgePoint": "E系列LCD拼接解决方案之E&H对比"
  },
  {
    "id": "w2d2_q3",
    "examId": "w2d2",
    "type": "single",
    "question": "关于B系列视频拼接服务器，下列描述合理的是？",
    "options": [
      "A. 仅能处理音频",
      "B. 提供视频拼接处理能力，适用于相应规模项目",
      "C. 是一种网络线缆",
      "D. 不支持任何视频输入"
    ],
    "answer": "B",
    "explanation": "B系列为视频拼接服务器，提供视频拼接处理能力，适用于对应规模项目。",
    "points": 4,
    "knowledgePoint": "B系列视频拼接服务器-功能规格"
  },
  {
    "id": "w2d2_q4",
    "examId": "w2d2",
    "type": "single",
    "question": "无缝播插矩阵的核心功能是？",
    "options": [
      "A. 信号放大",
      "B. 多路信号输入输出切换且切换过程无黑屏/无闪屏",
      "C. 信号解码",
      "D. 信号存储"
    ],
    "answer": "B",
    "explanation": "无缝矩阵可实现多路信号切换且切换过程无黑屏、无闪屏，保证画面连续。",
    "points": 4,
    "knowledgePoint": "无缝播插矩阵-产品功能"
  },
  {
    "id": "w2d2_q5",
    "examId": "w2d2",
    "type": "single",
    "question": "DT系列视频分配器的主要作用是？",
    "options": [
      "A. 将多路输入合并为一路",
      "B. 将一路输入信号分配为多路相同输出",
      "C. 解码网络信号",
      "D. 放大音频信号"
    ],
    "answer": "B",
    "explanation": "视频分配器将一路输入信号分配为多路相同信号输出，供多台显示设备同步显示。",
    "points": 4,
    "knowledgePoint": "DT系列视频分配器-规格参数"
  },
  {
    "id": "w2d2_q6",
    "examId": "w2d2",
    "type": "single",
    "question": "E系列视频拼接服务器最适用的场景是？",
    "options": [
      "A. 单台手机显示",
      "B. LCD拼接墙的视频拼接与多屏显示",
      "C. 个人耳机扩声",
      "D. 数据库存储"
    ],
    "answer": "B",
    "explanation": "E系列适用于LCD拼接墙的视频拼接处理与多屏显示场景。",
    "points": 4,
    "knowledgePoint": "E系列视频拼接服务器-适用场景"
  },
  {
    "id": "w2d2_q7",
    "examId": "w2d2",
    "type": "single",
    "question": "无缝矩阵相比普通矩阵的主要优势是？",
    "options": [
      "A. 价格更高",
      "B. 切换无黑屏闪屏，画面连续流畅",
      "C. 不需要任何输入",
      "D. 只能接一路输出"
    ],
    "answer": "B",
    "explanation": "无缝矩阵切换无黑屏、无闪屏，画面连续流畅，体验更好。",
    "points": 4,
    "knowledgePoint": "无缝播插矩阵-产品功能"
  },
  {
    "id": "w2d2_q8",
    "examId": "w2d2",
    "type": "single",
    "question": "DT系列视频分配器在配置方案中，主要根据什么确定输出路数？",
    "options": [
      "A. 屏幕颜色",
      "B. 需要同步显示的显示设备数量",
      "C. 房间温度",
      "D. 操作人员数量"
    ],
    "answer": "B",
    "explanation": "分配器输出路数根据需要同步显示的设备数量确定，实现一分多同步输出。",
    "points": 4,
    "knowledgePoint": "DT系列视频分配器-配置方案"
  },
  {
    "id": "w2d2_q9",
    "examId": "w2d2",
    "type": "multiple",
    "question": "E系列视频拼接服务器的功能特性包括哪些？（多选）",
    "options": [
      "A. 多路视频输入处理",
      "B. 拼接显示输出",
      "C. 信号同步",
      "D. 多屏拼接管理"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "E系列具备多路输入处理、拼接输出、信号同步、多屏管理等能力。",
    "points": 7,
    "knowledgePoint": "E系列视频拼接服务器-功能特性"
  },
  {
    "id": "w2d2_q10",
    "examId": "w2d2",
    "type": "multiple",
    "question": "无缝播插矩阵的优势包括哪些？（多选）",
    "options": [
      "A. 切换无黑屏",
      "B. 切换无闪屏",
      "C. 多路输入输出灵活切换",
      "D. 画面连续流畅"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "无缝矩阵具备无黑屏、无闪屏、多路灵活切换、画面连续等优势。",
    "points": 7,
    "knowledgePoint": "无缝播插矩阵-产品功能"
  },
  {
    "id": "w2d2_q11",
    "examId": "w2d2",
    "type": "multiple",
    "question": "DT系列视频分配器的应用场景包括哪些？（多选）",
    "options": [
      "A. 多屏同步显示同一信号",
      "B. 安防监控画面分发",
      "C. 展厅多处同步展示",
      "D. 会议多屏显示"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "分配器适用于需要多屏同步显示同一信号的各类场景，如监控分发、展厅、会议等。",
    "points": 7,
    "knowledgePoint": "DT系列视频分配器-应用场景"
  },
  {
    "id": "w2d2_q12",
    "examId": "w2d2",
    "type": "multiple",
    "question": "视频拼接服务器通常具备以下哪些能力？（多选）",
    "options": [
      "A. 多路视频信号接入",
      "B. 画面拼接与开窗",
      "C. 多屏输出",
      "D. 信号同步处理"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "视频拼接服务器具备多路接入、拼接开窗、多屏输出、信号同步等能力。",
    "points": 7,
    "knowledgePoint": "E系列视频拼接服务器-功能特性"
  },
  {
    "id": "w2d2_q13",
    "examId": "w2d2",
    "type": "judge",
    "question": "视频分配器的作用是将一路输入信号分配为多路相同的输出信号。",
    "answer": true,
    "explanation": "正确。分配器实现一分多同步输出，供多台设备同步显示。",
    "points": 5,
    "knowledgePoint": "DT系列视频分配器-规格参数",
    "options": []
  },
  {
    "id": "w2d2_q14",
    "examId": "w2d2",
    "type": "judge",
    "question": "无缝矩阵在切换信号时会出现黑屏或闪屏。",
    "answer": false,
    "explanation": "错误。无缝矩阵的核心特点正是切换无黑屏、无闪屏。",
    "points": 5,
    "knowledgePoint": "无缝播插矩阵-产品功能",
    "options": []
  },
  {
    "id": "w2d2_q15",
    "examId": "w2d2",
    "type": "judge",
    "question": "E系列与H系列在性能规格和适用规模上完全相同。",
    "answer": false,
    "explanation": "错误。两者在性能规格、适用规模和产品定位上存在差异。",
    "points": 5,
    "knowledgePoint": "E系列LCD拼接解决方案之E&H对比",
    "options": []
  },
  {
    "id": "w2d2_q16",
    "examId": "w2d2",
    "type": "judge",
    "question": "DT系列视频分配器只能用于LCD拼接项目，不能用于其他显示场景。",
    "answer": false,
    "explanation": "错误。分配器可用于多种需要多屏同步显示的场景，不限于LCD拼接。",
    "points": 5,
    "knowledgePoint": "DT系列视频分配器-应用场景",
    "options": []
  },
  {
    "id": "w2d2_q17",
    "examId": "w2d2",
    "type": "short",
    "question": "请简述E系列与H系列LCD拼接方案的主要区别（至少写出3个方面）。",
    "answer": "性能规格,适用规模,产品定位,输入输出能力",
    "explanation": "E与H系列在性能规格、适用规模、产品定位、输入输出能力等方面存在差异。",
    "points": 10,
    "knowledgePoint": "E系列LCD拼接解决方案之E&H对比",
    "options": []
  },
  {
    "id": "w2d2_q18",
    "examId": "w2d2",
    "type": "short",
    "question": "请列举无缝播插矩阵的核心特点。",
    "answer": "无黑屏,无闪屏,多路切换,画面连续,灵活调度",
    "explanation": "无缝矩阵核心特点包括切换无黑屏、无闪屏、多路灵活切换、画面连续流畅。",
    "points": 10,
    "knowledgePoint": "无缝播插矩阵-产品功能",
    "options": []
  },
  {
    "id": "w2d3_q1",
    "examId": "w2d3",
    "type": "single",
    "question": "NVDS系列网络解码矩阵的主要功能是？",
    "options": [
      "A. 仅放大音频",
      "B. 对网络IP视频流进行解码并输出显示",
      "C. 分配一路HDMI信号",
      "D. 存储视频文件"
    ],
    "answer": "B",
    "explanation": "NVDS网络解码矩阵对接入的网络IP视频流进行解码，输出到显示设备上墙显示。",
    "points": 4,
    "knowledgePoint": "NVDS网络解码矩阵-方案架构"
  },
  {
    "id": "w2d3_q2",
    "examId": "w2d3",
    "type": "single",
    "question": "音频扩声系统的标准信号流程是？",
    "options": [
      "A. 扬声器→功放→处理→声源",
      "B. 声源→处理→功放→扬声器",
      "C. 功放→声源→扬声器→处理",
      "D. 处理→扬声器→声源→功放"
    ],
    "answer": "B",
    "explanation": "音频信号流程为：声源→处理（调音台/处理器）→功放→扬声器。",
    "points": 4,
    "knowledgePoint": "音频系统基础知识-信号流程"
  },
  {
    "id": "w2d3_q3",
    "examId": "w2d3",
    "type": "single",
    "question": "XLR（卡侬）接头最常用于连接？",
    "options": [
      "A. 大功率音箱",
      "B. 专业平衡话筒",
      "C. 消费级家用音响",
      "D. 视频信号"
    ],
    "answer": "B",
    "explanation": "XLR为3芯平衡接头，常用于专业话筒连接，抗干扰能力强，适合长距离传输。",
    "points": 4,
    "knowledgePoint": "音频接头及线缆-XLR"
  },
  {
    "id": "w2d3_q4",
    "examId": "w2d3",
    "type": "single",
    "question": "RCA（莲花）接头属于哪种传输方式？",
    "options": [
      "A. 平衡传输",
      "B. 非平衡传输",
      "C. 数字光纤",
      "D. 网络传输"
    ],
    "answer": "B",
    "explanation": "RCA为非平衡接头，常用于消费级音频设备，抗干扰能力弱于平衡传输。",
    "points": 4,
    "knowledgePoint": "音频接头及线缆-RCA"
  },
  {
    "id": "w2d3_q5",
    "examId": "w2d3",
    "type": "single",
    "question": "Speakon（音箱专用）接头主要用于连接？",
    "options": [
      "A. 话筒",
      "B. 大功率音箱与功放",
      "C. 耳机",
      "D. 网络设备"
    ],
    "answer": "B",
    "explanation": "Speakon为音箱专用接头，用于功放到音箱的大功率传输，接触可靠、安全性高。",
    "points": 4,
    "knowledgePoint": "音频接头及线缆-Speakon"
  },
  {
    "id": "w2d3_q6",
    "examId": "w2d3",
    "type": "single",
    "question": "音频术语中“频率响应”通常指？",
    "options": [
      "A. 音箱承受的最大功率",
      "B. 设备能重现的频率范围（如20Hz-20kHz）",
      "C. 话筒指向性",
      "D. 线缆长度"
    ],
    "answer": "B",
    "explanation": "频率响应指设备能重现的频率范围，人耳听觉范围约20Hz-20kHz。",
    "points": 4,
    "knowledgePoint": "音频系统基础知识-声学基础术语"
  },
  {
    "id": "w2d3_q7",
    "examId": "w2d3",
    "type": "single",
    "question": "下列哪一项属于视频传输配件？",
    "options": [
      "A. 音频处理器",
      "B. HDMI光纤延长器",
      "C. 功率放大器",
      "D. 扬声器"
    ],
    "answer": "B",
    "explanation": "HDMI光纤延长器等属于视频传输配件，用于信号长距离无损传输。",
    "points": 4,
    "knowledgePoint": "视频传输配件-种类功能"
  },
  {
    "id": "w2d3_q8",
    "examId": "w2d3",
    "type": "single",
    "question": "音频扩声系统的主要应用领域不包括？",
    "options": [
      "A. 报告厅/会议室",
      "B. 演出场馆",
      "C. 半导体光刻",
      "D. 教学扩声"
    ],
    "answer": "C",
    "explanation": "音频扩声应用于报告厅、演出场馆、教学等场景，与半导体光刻无关。",
    "points": 4,
    "knowledgePoint": "音频扩声系统市场-应用领域"
  },
  {
    "id": "w2d3_q9",
    "examId": "w2d3",
    "type": "multiple",
    "question": "常见音频接头包括以下哪些？（多选）",
    "options": [
      "A. XLR（卡侬）",
      "B. TRS（大三芯）",
      "C. RCA（莲花）",
      "D. Speakon（音箱接头）"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "上述均为常见音频接头，分别用于话筒、平衡音频、消费音频、音箱等连接。",
    "points": 7,
    "knowledgePoint": "音频接头及线缆-常见接头"
  },
  {
    "id": "w2d3_q10",
    "examId": "w2d3",
    "type": "multiple",
    "question": "完整的音频扩声系统通常包含以下哪些环节？（多选）",
    "options": [
      "A. 声源（话筒/音源）",
      "B. 信号处理（调音台/处理器）",
      "C. 功率放大（功放）",
      "D. 声音还原（扬声器）"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "音频系统包含声源、处理、功放、扬声器四个核心环节。",
    "points": 7,
    "knowledgePoint": "音频系统基础知识-信号流程"
  },
  {
    "id": "w2d3_q11",
    "examId": "w2d3",
    "type": "multiple",
    "question": "NVDS网络解码矩阵的典型应用场景包括哪些？（多选）",
    "options": [
      "A. 安防监控中心解码上墙",
      "B. 指挥调度IP视频接入",
      "C. 多路网络摄像头画面显示",
      "D. 个人耳机扩声"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "NVDS用于安防监控、指挥调度、多路网络摄像头解码显示等场景，与个人耳机扩声无关。",
    "points": 7,
    "knowledgePoint": "NVDS网络解码矩阵-应用场景"
  },
  {
    "id": "w2d3_q12",
    "examId": "w2d3",
    "type": "multiple",
    "question": "音频扩声系统的典型客户类型包括哪些？（多选）",
    "options": [
      "A. 政企会议室",
      "B. 学校教学场所",
      "C. 演出/场馆运营方",
      "D. 个人手机用户"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "典型客户为政企、学校、演出场馆等，非个人手机用户。",
    "points": 7,
    "knowledgePoint": "音频扩声系统市场-客户类型"
  },
  {
    "id": "w2d3_q13",
    "examId": "w2d3",
    "type": "judge",
    "question": "XLR（卡侬）接头采用平衡传输方式，抗干扰能力较强。",
    "answer": true,
    "explanation": "正确。XLR为平衡传输，适合长距离、抗干扰。",
    "points": 5,
    "knowledgePoint": "音频接头及线缆-XLR",
    "options": []
  },
  {
    "id": "w2d3_q14",
    "examId": "w2d3",
    "type": "judge",
    "question": "RCA（莲花）接头属于平衡传输接头。",
    "answer": false,
    "explanation": "错误。RCA为非平衡传输接头，抗干扰能力较弱。",
    "points": 5,
    "knowledgePoint": "音频接头及线缆-RCA",
    "options": []
  },
  {
    "id": "w2d3_q15",
    "examId": "w2d3",
    "type": "judge",
    "question": "Speakon接头专用于功放到音箱的大功率连接。",
    "answer": true,
    "explanation": "正确。Speakon为音箱专用接头，承载大功率，接触可靠安全。",
    "points": 5,
    "knowledgePoint": "音频接头及线缆-Speakon",
    "options": []
  },
  {
    "id": "w2d3_q16",
    "examId": "w2d3",
    "type": "judge",
    "question": "NVDS网络解码矩阵可将网络IP视频流解码后输出到显示设备上墙显示。",
    "answer": true,
    "explanation": "正确。NVDS负责网络IP流解码并输出上墙显示。",
    "points": 5,
    "knowledgePoint": "NVDS网络解码矩阵-方案架构",
    "options": []
  },
  {
    "id": "w2d3_q17",
    "examId": "w2d3",
    "type": "short",
    "question": "请写出音频扩声系统的标准信号流程（按顺序写出各环节）。",
    "answer": "声源,处理,功放,扬声器,调音台,处理器",
    "explanation": "标准流程为：声源→处理（调音台/处理器）→功放→扬声器。",
    "points": 10,
    "knowledgePoint": "音频系统基础知识-信号流程",
    "options": []
  },
  {
    "id": "w2d3_q18",
    "examId": "w2d3",
    "type": "short",
    "question": "请列举常见音频接头并说明各自典型用途（至少写出4种）。",
    "answer": "XLR,话筒,TRS,平衡音频,RCA,消费音频,Speakon,音箱",
    "explanation": "XLR接话筒、TRS接平衡音频、RCA接消费音频、Speakon接音箱。",
    "points": 10,
    "knowledgePoint": "音频接头及线缆-连接方式",
    "options": []
  },
  {
    "id": "w2d4_q1",
    "examId": "w2d4",
    "type": "single",
    "question": "嗨动天韵系列音视频扩声系统的定位是？",
    "options": [
      "A. 仅视频处理",
      "B. 标准化的音视频扩声整体解决方案",
      "C. 半导体制造",
      "D. 网络存储"
    ],
    "answer": "B",
    "explanation": "天韵系列为标准化的音视频扩声整体解决方案，覆盖设备配置与适用场景。",
    "points": 4,
    "knowledgePoint": "天韵系列-方案架构"
  },
  {
    "id": "w2d4_q2",
    "examId": "w2d4",
    "type": "single",
    "question": "嗨动奥菲斯音视频扩声系统的市场定位是？",
    "options": [
      "A. 入门低端",
      "B. 高端定位",
      "C. 仅用于家用",
      "D. 不含音频"
    ],
    "answer": "B",
    "explanation": "奥菲斯定位高端，面向更高要求的扩声场景。",
    "points": 4,
    "knowledgePoint": "奥菲斯-高端定位"
  },
  {
    "id": "w2d4_q3",
    "examId": "w2d4",
    "type": "single",
    "question": "奥菲斯与天韵系列的主要差异是？",
    "options": [
      "A. 奥菲斯定位更高，性能与配置更高端",
      "B. 两者完全相同",
      "C. 天韵仅用于视频",
      "D. 奥菲斯不含音频"
    ],
    "answer": "A",
    "explanation": "奥菲斯相比天韵定位更高，性能与设备配置更高端，面向高标准需求。",
    "points": 4,
    "knowledgePoint": "奥菲斯-与天韵差异"
  },
  {
    "id": "w2d4_q4",
    "examId": "w2d4",
    "type": "single",
    "question": "音频处理器中EQ（均衡）的功能是？",
    "options": [
      "A. 调节各频段增益，优化频率响应",
      "B. 控制音量大小",
      "C. 切换信号源",
      "D. 存储音频"
    ],
    "answer": "A",
    "explanation": "EQ用于调节各频段增益，修正并优化频率响应。",
    "points": 4,
    "knowledgePoint": "音频处理器-EQ"
  },
  {
    "id": "w2d4_q5",
    "examId": "w2d4",
    "type": "single",
    "question": "音频处理器中“压限”（压缩/限幅）的主要作用是？",
    "options": [
      "A. 提高音量",
      "B. 保护音箱与功放，控制动态范围防失真",
      "C. 增加低音",
      "D. 切换画面"
    ],
    "answer": "B",
    "explanation": "压限用于控制动态范围，保护音箱功放，防止过载失真。",
    "points": 4,
    "knowledgePoint": "音频处理器-压限"
  },
  {
    "id": "w2d4_q6",
    "examId": "w2d4",
    "type": "single",
    "question": "音频处理器中“延时”功能常用于？",
    "options": [
      "A. 增加音量",
      "B. 多扬声器时间对齐，实现声像同步",
      "C. 改变音色",
      "D. 存储数据"
    ],
    "answer": "B",
    "explanation": "延时用于多扬声器系统的时间对齐，保证声像同步。",
    "points": 4,
    "knowledgePoint": "音频处理器-延时"
  },
  {
    "id": "w2d4_q7",
    "examId": "w2d4",
    "type": "single",
    "question": "音频系统产品选型的正确方法论是？",
    "options": [
      "A. 先选设备再定场景",
      "B. 场景→需求→设备清单",
      "C. 只看价格",
      "D. 随机搭配"
    ],
    "answer": "B",
    "explanation": "选型应遵循“场景→需求→设备清单”的方法论，从应用场景出发。",
    "points": 4,
    "knowledgePoint": "音频系统选型-方法论"
  },
  {
    "id": "w2d4_q8",
    "examId": "w2d4",
    "type": "single",
    "question": "音频处理器中“路由”功能的作用是？",
    "options": [
      "A. 调节频率",
      "B. 实现输入与输出通道的灵活分配与调度",
      "C. 放大功率",
      "D. 产生延时"
    ],
    "answer": "B",
    "explanation": "路由功能实现输入输出通道的灵活分配与调度。",
    "points": 4,
    "knowledgePoint": "音频处理器-路由"
  },
  {
    "id": "w2d4_q9",
    "examId": "w2d4",
    "type": "multiple",
    "question": "音频处理器的核心功能包括哪些？（多选）",
    "options": [
      "A. EQ均衡",
      "B. 压缩/限幅",
      "C. 延时",
      "D. 路由"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "音频处理器核心功能包括EQ均衡、压限、延时、路由等。",
    "points": 7,
    "knowledgePoint": "音频处理器-核心功能"
  },
  {
    "id": "w2d4_q10",
    "examId": "w2d4",
    "type": "multiple",
    "question": "天韵系列音视频扩声系统适用的场景包括哪些？（多选）",
    "options": [
      "A. 会议室/报告厅",
      "B. 教学扩声",
      "C. 中小型场馆",
      "D. 个人耳机"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "天韵适用于会议室、教学、中小型场馆等扩声场景，非个人耳机。",
    "points": 7,
    "knowledgePoint": "天韵系列-适用场景"
  },
  {
    "id": "w2d4_q11",
    "examId": "w2d4",
    "type": "multiple",
    "question": "音频扩声系统方案设计时需注意的事项包括哪些？（多选）",
    "options": [
      "A. 场馆声学环境",
      "B. 设备功率与覆盖匹配",
      "C. 信号流程与接口匹配",
      "D. 预算与扩展性"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "设计需综合考虑声学环境、功率覆盖、接口匹配、预算扩展性等。",
    "points": 7,
    "knowledgePoint": "音频扩声系统方案设计-注意事项"
  },
  {
    "id": "w2d4_q12",
    "examId": "w2d4",
    "type": "multiple",
    "question": "奥菲斯高端定位体现在哪些方面？（多选）",
    "options": [
      "A. 更高音质性能",
      "B. 更高端设备配置",
      "C. 面向高标准扩声需求",
      "D. 更完善的专业方案"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "奥菲斯在音质、配置、定位、方案专业性上均体现高端。",
    "points": 7,
    "knowledgePoint": "奥菲斯-高端定位"
  },
  {
    "id": "w2d4_q13",
    "examId": "w2d4",
    "type": "judge",
    "question": "奥菲斯系列相比天韵系列定位更高，面向高端扩声需求。",
    "answer": true,
    "explanation": "正确。奥菲斯为高端定位，天韵为标准化方案。",
    "points": 5,
    "knowledgePoint": "奥菲斯-与天韵差异",
    "options": []
  },
  {
    "id": "w2d4_q14",
    "examId": "w2d4",
    "type": "judge",
    "question": "EQ（均衡）用于调节各频段增益，优化频率响应。",
    "answer": true,
    "explanation": "正确。EQ调节频段增益，修正频率响应。",
    "points": 5,
    "knowledgePoint": "音频处理器-EQ",
    "options": []
  },
  {
    "id": "w2d4_q15",
    "examId": "w2d4",
    "type": "judge",
    "question": "音频处理器中的延时功能没有实际作用。",
    "answer": false,
    "explanation": "错误。延时用于多扬声器时间对齐，对声像同步至关重要。",
    "points": 5,
    "knowledgePoint": "音频处理器-延时",
    "options": []
  },
  {
    "id": "w2d4_q16",
    "examId": "w2d4",
    "type": "judge",
    "question": "音频系统选型应从应用场景出发，明确需求后形成设备清单。",
    "answer": true,
    "explanation": "正确。遵循“场景→需求→设备清单”方法论。",
    "points": 5,
    "knowledgePoint": "音频系统选型-方法论",
    "options": []
  },
  {
    "id": "w2d4_q17",
    "examId": "w2d4",
    "type": "short",
    "question": "请列举音频处理器的核心功能（至少写出4项）。",
    "answer": "EQ,均衡,压限,压缩,限幅,延时,路由",
    "explanation": "核心功能包括EQ均衡、压限（压缩/限幅）、延时、路由等。",
    "points": 10,
    "knowledgePoint": "音频处理器-核心功能",
    "options": []
  },
  {
    "id": "w2d4_q18",
    "examId": "w2d4",
    "type": "short",
    "question": "请简述音频系统产品选型的方法论步骤。",
    "answer": "场景,需求,设备清单,功率匹配,接口匹配",
    "explanation": "选型方法论为场景→需求→设备清单，并注意功率与接口匹配。",
    "points": 10,
    "knowledgePoint": "音频系统选型-方法论",
    "options": []
  },
  {
    "id": "w2week_q1",
    "examId": "w2week",
    "type": "single",
    "question": "嗨动科技的主营产品线不包括以下哪一项？",
    "options": [
      "A. LCD拼接",
      "B. 音视频矩阵",
      "C. 半导体芯片制造",
      "D. 音频扩声"
    ],
    "answer": "C",
    "explanation": "嗨动主营产品线为LCD拼接、音视频矩阵、音频扩声、智能中控、多媒体播控，不含半导体芯片制造。",
    "points": 4,
    "knowledgePoint": "综合-嗨动公司主营产品线"
  },
  {
    "id": "w2week_q2",
    "examId": "w2week",
    "type": "single",
    "question": "LCD拼接屏成像依赖的关键部件是？",
    "options": [
      "A. 液晶分子与背光源",
      "B. 等离子体",
      "C. 投影灯泡",
      "D. 真空管"
    ],
    "answer": "A",
    "explanation": "LCD通过液晶分子控制背光透过率成像，液晶本身不发光，必须依赖背光源。",
    "points": 4,
    "knowledgePoint": "综合-LCD显示原理"
  },
  {
    "id": "w2week_q3",
    "examId": "w2week",
    "type": "single",
    "question": "音频扩声系统的标准信号流程是？",
    "options": [
      "A. 声源→处理→功放→扬声器",
      "B. 功放→声源→扬声器→处理",
      "C. 扬声器→功放→处理→声源",
      "D. 处理→扬声器→声源→功放"
    ],
    "answer": "A",
    "explanation": "标准流程为声源→处理（调音台/处理器）→功放→扬声器。",
    "points": 4,
    "knowledgePoint": "综合-音频信号流程"
  },
  {
    "id": "w2week_q4",
    "examId": "w2week",
    "type": "single",
    "question": "下列哪种接头常用于专业话筒且为平衡传输？",
    "options": [
      "A. XLR",
      "B. RCA",
      "C. TS",
      "D. USB"
    ],
    "answer": "A",
    "explanation": "XLR为3芯平衡接头，常用于专业话筒，抗干扰能力强。",
    "points": 4,
    "knowledgePoint": "综合-音频接头"
  },
  {
    "id": "w2week_q5",
    "examId": "w2week",
    "type": "single",
    "question": "视频分配器（如DT系列）的核心作用是？",
    "options": [
      "A. 一路输入分配为多路相同输出",
      "B. 多路输入合并为一路",
      "C. 解码网络流",
      "D. 放大音频"
    ],
    "answer": "A",
    "explanation": "视频分配器将一路输入信号分配为多路相同输出，实现多屏同步显示。",
    "points": 4,
    "knowledgePoint": "综合-DT系列视频分配器"
  },
  {
    "id": "w2week_q6",
    "examId": "w2week",
    "type": "single",
    "question": "无缝播插矩阵相比普通矩阵的优势是？",
    "options": [
      "A. 切换无黑屏无闪屏",
      "B. 价格更低",
      "C. 不需要输入",
      "D. 只能单路"
    ],
    "answer": "A",
    "explanation": "无缝矩阵核心优势是切换无黑屏、无闪屏，画面连续流畅。",
    "points": 4,
    "knowledgePoint": "综合-无缝播插矩阵"
  },
  {
    "id": "w2week_q7",
    "examId": "w2week",
    "type": "single",
    "question": "音频处理器中用于保护音箱防止过载失真的功能是？",
    "options": [
      "A. 压限",
      "B. EQ",
      "C. 路由",
      "D. 延时"
    ],
    "answer": "A",
    "explanation": "压限（压缩/限幅）控制动态范围，保护音箱功放，防止过载失真。",
    "points": 4,
    "knowledgePoint": "综合-音频处理器功能"
  },
  {
    "id": "w2week_q8",
    "examId": "w2week",
    "type": "single",
    "question": "嗨动奥菲斯系列相比天韵系列的定位是？",
    "options": [
      "A. 更高端",
      "B. 更低端",
      "C. 完全相同",
      "D. 不含音频"
    ],
    "answer": "A",
    "explanation": "奥菲斯定位高端，面向更高要求的扩声场景，天韵为标准化方案。",
    "points": 4,
    "knowledgePoint": "综合-奥菲斯与天韵对比"
  },
  {
    "id": "w2week_q9",
    "examId": "w2week",
    "type": "multiple",
    "question": "嗨动科技五大主营产品线包括哪些？（多选）",
    "options": [
      "A. LCD拼接",
      "B. 音视频矩阵",
      "C. 音频扩声",
      "D. 智能中控与多媒体播控"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "五大产品线为LCD拼接、音视频矩阵、音频扩声、智能中控、多媒体播控。",
    "points": 7,
    "knowledgePoint": "综合-嗨动公司主营产品线"
  },
  {
    "id": "w2week_q10",
    "examId": "w2week",
    "type": "multiple",
    "question": "音频处理器的核心功能包括哪些？（多选）",
    "options": [
      "A. EQ均衡",
      "B. 压限",
      "C. 延时",
      "D. 路由"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "音频处理器核心功能包括EQ均衡、压限、延时、路由等。",
    "points": 7,
    "knowledgePoint": "综合-音频处理器功能"
  },
  {
    "id": "w2week_q11",
    "examId": "w2week",
    "type": "multiple",
    "question": "LCD拼接屏典型应用场景包括哪些？（多选）",
    "options": [
      "A. 指挥调度中心",
      "B. 安防监控",
      "C. 展览展示",
      "D. 会议室大屏"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "上述均为LCD拼接屏的典型应用场景。",
    "points": 7,
    "knowledgePoint": "综合-LCD拼接应用场景"
  },
  {
    "id": "w2week_q12",
    "examId": "w2week",
    "type": "multiple",
    "question": "常见音频接头包括哪些？（多选）",
    "options": [
      "A. XLR",
      "B. TRS",
      "C. RCA",
      "D. Speakon"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "XLR、TRS、RCA、Speakon均为常见音频接头。",
    "points": 7,
    "knowledgePoint": "综合-音频接头"
  },
  {
    "id": "w2week_q13",
    "examId": "w2week",
    "type": "judge",
    "question": "NVDS网络解码矩阵可将网络IP视频流解码后输出到显示设备上墙。",
    "answer": true,
    "explanation": "正确。NVDS负责网络IP流解码并输出上墙显示。",
    "points": 5,
    "knowledgePoint": "综合-NVDS网络解码矩阵",
    "options": []
  },
  {
    "id": "w2week_q14",
    "examId": "w2week",
    "type": "judge",
    "question": "RCA莲花接头属于平衡传输方式。",
    "answer": false,
    "explanation": "错误。RCA为非平衡传输，抗干扰能力较弱。",
    "points": 5,
    "knowledgePoint": "综合-音频接头",
    "options": []
  },
  {
    "id": "w2week_q15",
    "examId": "w2week",
    "type": "judge",
    "question": "LCD拼接屏拼缝越小，画面整体性越好。",
    "answer": true,
    "explanation": "正确。拼缝越小，视觉割裂感越低，画面整体性越好。",
    "points": 5,
    "knowledgePoint": "综合-LCD拼接应用",
    "options": []
  },
  {
    "id": "w2week_q16",
    "examId": "w2week",
    "type": "judge",
    "question": "音频系统选型应先选设备再确定应用场景。",
    "answer": false,
    "explanation": "错误。选型应遵循“场景→需求→设备清单”，从场景出发。",
    "points": 5,
    "knowledgePoint": "综合-音频系统选型",
    "options": []
  },
  {
    "id": "w2week_q17",
    "examId": "w2week",
    "type": "short",
    "question": "请写出嗨动科技五大主营产品线。",
    "answer": "LCD拼接,音视频矩阵,音频扩声,智能中控,多媒体播控",
    "explanation": "五大产品线为LCD拼接、音视频矩阵、音频扩声、智能中控、多媒体播控。",
    "points": 10,
    "knowledgePoint": "综合-嗨动公司主营产品线",
    "options": []
  },
  {
    "id": "w2week_q18",
    "examId": "w2week",
    "type": "short",
    "question": "请简述音频扩声系统的标准信号流程，并列举音频处理器至少三项核心功能。",
    "answer": "声源,处理,功放,扬声器,EQ,压限,延时,路由",
    "explanation": "信号流程为声源→处理→功放→扬声器；处理器核心功能含EQ、压限、延时、路由等。",
    "points": 10,
    "knowledgePoint": "综合-音频系统与处理器",
    "options": []
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = WEEK2_QUESTIONS;
}
if (typeof window !== "undefined") {
  window.WEEK2_QUESTIONS = WEEK2_QUESTIONS;
}

/**
 * 诺瓦科技(Nova) 第一周培训题库
 *
 * 包含5套考试：
 * - Day 1 日考 (w1d1): 公司+行业+LED基础
 * - Day 2 日考 (w1d2): 信号源+控制+视频处理+控制卡
 * - Day 3 日考 (w1d3): 方案+V系列+H系列
 * - Day 4 日考 (w1d4): TB+TU+一体机+配件+GTS
 * - Week 1 周考 (w1week): PPT 1~15 综合知识笔试
 *
 * 每套考试18道题：8单选(4分)+4多选(7分)+4判断(5分)+2简答(10分) = 100分
 * 及格线：90分
 *
 * 简答题answer字段为关键词，逗号分隔，用于关键词匹配自动评分
 */

const WEEK1_QUESTIONS = [

  // ================================================================
  // Day 1 日考 (examId: "w1d1")
  // 公司+行业+LED基础
  // ================================================================

  // --- 8道单选题 (每题4分, 共32分) ---

  {
    id: "w1d1_q1",
    examId: "w1d1",
    type: "single",
    question: "诺瓦科技（西安诺瓦星云科技股份有限公司）的总部位于哪座城市？",
    options: ["A. 深圳", "B. 西安", "C. 北京", "D. 上海"],
    answer: "B",
    explanation: "诺瓦科技总部位于西安，全称为西安诺瓦星云科技股份有限公司，是全球领先的LED显示控制解决方案提供商，业务覆盖LED控制系统、视频处理系统、校正系统和云平台四大产品线。",
    points: 4,
    knowledgePoint: "诺瓦公司介绍-发展历程"
  },
  {
    id: "w1d1_q2",
    examId: "w1d1",
    type: "single",
    question: "LED显示屏的「像素间距」（Pixel Pitch）是指什么？",
    options: ["A. LED灯珠的物理直径", "B. 相邻两个LED像素中心点之间的距离", "C. LED模组的拼接缝隙宽度", "D. LED显示屏的物理厚度"],
    answer: "B",
    explanation: "像素间距是指相邻两个LED像素中心点之间的距离，通常以毫米(mm)为单位，如P2、P3.91、P4等。像素间距越小，单位面积内像素点越多，画面越细腻，适合更近的观看距离。",
    points: 4,
    knowledgePoint: "LED显示基础-像素间距"
  },
  {
    id: "w1d1_q3",
    examId: "w1d1",
    type: "single",
    question: "LED显示屏行业常说的高刷新率，其常见的高刷值为多少？",
    options: ["A. 60Hz", "B. 120Hz", "C. 1920Hz", "D. 3840Hz"],
    answer: "D",
    explanation: "LED显示屏的高刷新率通常指3840Hz（也称「金线刷新」或「超清刷新」），部分产品也支持1920Hz。高刷新率能有效减少相机、摄像机拍摄时出现的扫描线（摩尔纹）现象，是舞台租赁和演播室场景的重要指标。",
    points: 4,
    knowledgePoint: "LED显示基础-刷新率"
  },
  {
    id: "w1d1_q4",
    examId: "w1d1",
    type: "single",
    question: "LED显示屏防护等级IP65中的「6」和「5」分别代表什么含义？",
    options: ["A. 6级防尘、5级防水", "B. 6级防水、5级防尘", "C. 完全防尘、防低压喷水", "D. 完全防尘、防任何方向喷水"],
    answer: "D",
    explanation: "IP等级中第一位数字「6」表示完全防尘（无尘埃进入），第二位数字「5」表示防任何方向的低压喷水。IP65是户外LED显示屏常见的防护等级，可满足户外防雨防尘需求。注意IP65不是防浸泡，防浸泡需IP68等级。",
    points: 4,
    knowledgePoint: "LED显示基础-IP等级"
  },
  {
    id: "w1d1_q5",
    examId: "w1d1",
    type: "single",
    question: "当LED显示屏的灰度等级为16bit时，每种颜色可以显示多少级灰阶？",
    options: ["A. 256级", "B. 1024级", "C. 32768级", "D. 65536级"],
    answer: "D",
    explanation: "16bit灰度即2的16次方=65536级灰阶。灰度等级越高，色彩过渡越平滑，暗部细节表现越好。目前LED显示屏常见灰度等级有13bit（8192级）、14bit（16384级）、16bit（65536级）等。",
    points: 4,
    knowledgePoint: "LED显示基础-灰度"
  },
  {
    id: "w1d1_q6",
    examId: "w1d1",
    type: "single",
    question: "以下哪项不属于诺瓦科技的四大主营产品线？",
    options: ["A. LED控制系统", "B. 视频处理系统", "C. 半导体晶圆制造", "D. 校正系统与云平台"],
    answer: "C",
    explanation: "诺瓦科技的四大主营产品线为：LED控制系统（发送卡/接收卡）、视频处理系统（各类视频处理器）、校正系统（逐点校正工具）和云平台（GTS等远程管理平台）。诺瓦不涉及半导体晶圆制造业务。",
    points: 4,
    knowledgePoint: "诺瓦公司介绍-业务版图"
  },
  {
    id: "w1d1_q7",
    examId: "w1d1",
    type: "single",
    question: "LED显示屏扫描方式「1/16扫描」的含义是什么？",
    options: ["A. 每行16个LED灯同时点亮", "B. 同时点亮全部LED灯的1/16", "C. 每秒刷新16次", "D. 每16个像素共用一个驱动IC"],
    answer: "B",
    explanation: "1/16扫描表示在同一时刻只有1/16的LED灯被点亮，通过快速轮换实现全屏显示。扫描数越大（如1/32），同时点亮的灯越少，功耗越低但亮度也会降低；扫描数越小（如1/1静态扫描），亮度越高但功耗越大。",
    points: 4,
    knowledgePoint: "LED显示基础-扫描方式"
  },
  {
    id: "w1d1_q8",
    examId: "w1d1",
    type: "single",
    question: "LED显示屏亮度通常使用的计量单位是？",
    options: ["A. 流明(lm)", "B. 勒克斯(lux)", "C. 尼特(cd/m2)", "D. 瓦特(W)"],
    answer: "C",
    explanation: "LED显示屏亮度使用尼特(nit)为单位，即cd/m2（坎德拉每平方米）。户外显示屏亮度一般要求5000-8000nit以上，室内显示屏通常在800-1500nit。流明(lm)用于投影总光通量，勒克斯(lux)用于照度。",
    points: 4,
    knowledgePoint: "LED显示基础-亮度"
  },

  // --- 4道多选题 (每题7分, 共28分) ---

  {
    id: "w1d1_q9",
    examId: "w1d1",
    type: "multiple",
    question: "以下哪些属于诺瓦科技的主营产品线？",
    options: ["A. LED控制系统（发送卡/接收卡）", "B. 视频处理系统（视频处理器）", "C. 逐点校正系统", "D. 云平台（远程管理平台）"],
    answer: ["A", "B", "C", "D"],
    explanation: "诺瓦科技四大主营产品线涵盖：LED控制系统（MCTRL发送卡、MRV/A系列接收卡等）、视频处理系统（V系列、H系列、TB系列等处理器）、校正系统（逐点亮度/色度校正工具）、云平台（GTS远程监控管理平台），构成了完整的LED显示控制解决方案。",
    points: 7,
    knowledgePoint: "诺瓦公司介绍-主营产品线"
  },
  {
    id: "w1d1_q10",
    examId: "w1d1",
    type: "multiple",
    question: "LED显示屏的典型应用场景包括以下哪些？",
    options: ["A. 广告传媒（户外大屏）", "B. 舞台租赁（演唱会/活动）", "C. 会议室与指挥调度中心", "D. xR虚拟拍摄（影视制作）"],
    answer: ["A", "B", "C", "D"],
    explanation: "LED显示屏应用场景广泛，包括：广告传媒（户外广告牌、商圈大屏）、舞台租赁（演唱会、体育赛事、商业活动）、会议与指挥中心（企业会议室、安防指挥调度）、xR虚拟拍摄（利用LED屏作为虚拟背景进行影视拍摄）等，不同场景对产品参数要求不同。",
    points: 7,
    knowledgePoint: "LED显示行业-应用场景"
  },
  {
    id: "w1d1_q11",
    examId: "w1d1",
    type: "multiple",
    question: "以下哪些是影响LED显示屏显示效果的核心技术参数？",
    options: ["A. 像素间距与刷新率", "B. 灰度等级", "C. 亮度与对比度", "D. 色域覆盖率"],
    answer: ["A", "B", "C", "D"],
    explanation: "影响LED显示屏显示效果的核心参数包括：像素间距（决定分辨率密度）、刷新率（影响拍摄效果）、灰度等级（影响色彩层次）、亮度（影响可视性）、对比度（影响画面层次感）、色域覆盖率（影响色彩还原范围）等，这些参数共同决定了显示屏的最终画质表现。",
    points: 7,
    knowledgePoint: "LED显示基础-核心参数"
  },
  {
    id: "w1d1_q12",
    examId: "w1d1",
    type: "multiple",
    question: "关于LED显示屏的色域标准，以下说法正确的有哪些？",
    options: ["A. sRGB是常见的色域标准之一", "B. DCI-P3是数字电影行业标准色域", "C. Rec.2020是超高清电视色域标准", "D. 色域越宽，可显示的颜色范围越大"],
    answer: ["A", "B", "C", "D"],
    explanation: "色域是显示屏能表现的颜色范围。sRGB是传统显示通用标准；DCI-P3是数字电影行业标准，色域比sRGB更宽；Rec.2020是超高清电视(UHD)标准，色域最广。色域越宽，可显示的颜色越丰富，色彩还原越真实。高端LED显示屏通常支持DCI-P3或更宽色域。",
    points: 7,
    knowledgePoint: "LED显示基础-色域"
  },

  // --- 4道判断题 (每题5分, 共20分) ---

  {
    id: "w1d1_q13",
    examId: "w1d1",
    type: "judge",
    question: "LED显示屏的像素间距越小，单位面积内像素点越多，显示画面越细腻。",
    options: [],
    answer: true,
    explanation: "正确。像素间距越小（如P1.5比P4小），单位面积内的像素点密度越高，分辨率越大，画面越细腻，适合更近的观看距离。这也是小间距LED（P1.5以下）在会议室等近距离观看场景中越来越普及的原因。",
    points: 5,
    knowledgePoint: "LED显示基础-像素间距"
  },
  {
    id: "w1d1_q14",
    examId: "w1d1",
    type: "judge",
    question: "LED显示屏的刷新率越高，用相机或摄像机拍摄时越不容易出现扫描线（摩尔纹）现象。",
    options: [],
    answer: true,
    explanation: "正确。高刷新率（如3840Hz）使LED屏的刷新频率远高于相机快门速度，有效减少拍摄时出现的扫描线和闪烁现象。因此舞台租赁、演播室、xR虚拟拍摄等需要相机拍摄的场景必须使用高刷新率LED屏。",
    points: 5,
    knowledgePoint: "LED显示基础-刷新率"
  },
  {
    id: "w1d1_q15",
    examId: "w1d1",
    type: "judge",
    question: "诺瓦科技仅生产LED控制系统（发送卡和接收卡），不涉及视频处理产品。",
    options: [],
    answer: false,
    explanation: "错误。诺瓦科技不仅生产LED控制系统（MCTRL系列发送卡、MRV/A系列接收卡等），还拥有完整的视频处理产品线（V系列、H系列、TB系列、TU系列等视频处理器），以及校正系统和云平台，是LED显示控制领域的全栈解决方案提供商。",
    points: 5,
    knowledgePoint: "诺瓦公司介绍-业务版图"
  },
  {
    id: "w1d1_q16",
    examId: "w1d1",
    type: "judge",
    question: "IP68防护等级的LED显示屏可以持续浸泡在水中使用。",
    options: [],
    answer: true,
    explanation: "正确。IP68中「6」表示完全防尘，「8」表示在特定条件下可持续浸水。IP68是目前较高的防护等级，适用于水下或极端潮湿环境。日常户外LED屏常用IP65（防尘防喷水）即可满足需求。",
    points: 5,
    knowledgePoint: "LED显示基础-IP等级"
  },

  // --- 2道简答题 (每题10分, 共20分) ---

  {
    id: "w1d1_q17",
    examId: "w1d1",
    type: "short",
    question: "请列举诺瓦科技的四大主营产品线，并简要说明各自覆盖的产品方向。",
    options: [],
    answer: "LED控制系统,视频处理系统,校正系统,云平台",
    explanation: "诺瓦科技四大主营产品线：1.LED控制系统——包括发送卡（MCTRL/MSD系列）和接收卡（MRV/A系列）；2.视频处理系统——包括V系列、H系列、TB系列、TU系列等视频处理器；3.校正系统——逐点亮度/色度校正工具，提升屏体均匀性；4.云平台——GTS等远程监控管理平台，实现设备远程运维。",
    points: 10,
    knowledgePoint: "诺瓦公司介绍-主营产品线"
  },
  {
    id: "w1d1_q18",
    examId: "w1d1",
    type: "short",
    question: "请列举至少4个LED显示屏的核心技术参数，并简要说明其含义。",
    options: [],
    answer: "像素间距,刷新率,灰度,亮度,对比度,色域,扫描方式",
    explanation: "LED显示屏核心技术参数包括：1.像素间距——相邻像素中心距离(mm)，决定画面细腻度；2.刷新率——屏幕每秒刷新次数(Hz)，影响拍摄效果；3.灰度——每种颜色的亮度等级数(bit)，影响色彩层次；4.亮度——屏幕发光强度(cd/m2)，影响可视性；5.对比度——最亮与最暗的比值，影响画面层次感；6.色域——可显示的颜色范围；7.扫描方式——LED灯的分组点亮方式(1/N)。",
    points: 10,
    knowledgePoint: "LED显示基础-核心参数"
  },

  // ================================================================
  // Day 2 日考 (examId: "w1d2")
  // 信号源+控制+视频处理+控制卡
  // ================================================================

  // --- 8道单选题 (每题4分, 共32分) ---

  {
    id: "w1d2_q1",
    examId: "w1d2",
    type: "single",
    question: "HDMI接口的全称是什么？",
    options: ["A. High-Definition Multimedia Interface", "B. High-Density Memory Interface", "C. Home Digital Media Interface", "D. Hardware Digital Multimedia Interface"],
    answer: "A",
    explanation: "HDMI全称为High-Definition Multimedia Interface（高清晰度多媒体接口），是当前最常用的音视频接口之一，支持未压缩的音视频信号传输。HDMI接口在LED显示屏的视频处理器输入端广泛使用。",
    points: 4,
    knowledgePoint: "信号源-接口类型"
  },
  {
    id: "w1d2_q2",
    examId: "w1d2",
    type: "single",
    question: "EDID（Extended Display Identification Data）的主要作用是什么？",
    options: ["A. 加密视频信号防止盗版", "B. 显示器向信号源发送自身支持的分辨率和格式信息", "C. 提高视频信号的传输速率", "D. 压缩视频信号以节省带宽"],
    answer: "B",
    explanation: "EDID（扩展显示标识数据）是显示器通过接口向信号源发送的自身能力描述信息，包括支持的分辨率、刷新率、色彩格式等。信号源读取EDID后输出匹配的信号，实现正确的分辨率适配。在LED显示系统中，视频处理器需要正确配置EDID以确保信号源输出合适的分辨率。",
    points: 4,
    knowledgePoint: "信号源-EDID概念"
  },
  {
    id: "w1d2_q3",
    examId: "w1d2",
    type: "single",
    question: "HDCP（High-bandwidth Digital Content Protection）的主要目的是什么？",
    options: ["A. 提高视频传输带宽", "B. 数字内容版权保护，防止音视频内容被未授权拷贝", "C. 压缩视频信号", "D. 增强视频信号抗干扰能力"],
    answer: "B",
    explanation: "HDCP（高带宽数字内容保护）是由Intel开发的数字内容保护技术，用于防止音视频内容在传输过程中被未授权拷贝。HDMI、DP等接口均支持HDCP加密。当信号源和显示设备之间的HDCP握手失败时，可能出现黑屏或信号不显示的问题。",
    points: 4,
    knowledgePoint: "信号源-HDCP概念"
  },
  {
    id: "w1d2_q4",
    examId: "w1d2",
    type: "single",
    question: "以下哪种接口常用于广播电视和专业视频制作领域？",
    options: ["A. HDMI", "B. DVI", "C. SDI", "D. DP"],
    answer: "C",
    explanation: "SDI（Serial Digital Interface，串行数字接口）是广播电视和专业视频领域的标准接口，支持长距离同轴电缆传输（可达100米以上），抗干扰能力强。常见标准有SD-SDI、HD-SDI、3G-SDI、12G-SDI等，在演播室和大型活动现场的LED显示系统中经常使用。",
    points: 4,
    knowledgePoint: "信号源-接口类型"
  },
  {
    id: "w1d2_q5",
    examId: "w1d2",
    type: "single",
    question: "LED控制系统中，接收卡（Receiving Card）的主要功能是什么？",
    options: ["A. 接收外部视频信号并转换为LED数据", "B. 接收发送卡的数据并驱动LED模组显示", "C. 对视频信号进行缩放和处理", "D. 管理云平台远程监控"],
    answer: "B",
    explanation: "接收卡安装在LED箱体内部，主要功能是接收发送卡传来的LED显示数据，经过解码后驱动LED模组上的灯珠显示。接收卡还负责扫描控制、亮度调节、校正数据加载等功能。诺瓦的MRV系列和A系列均为接收卡产品。",
    points: 4,
    knowledgePoint: "控制卡-接收卡功能"
  },
  {
    id: "w1d2_q6",
    examId: "w1d2",
    type: "single",
    question: "LED控制系统中，发送卡（Sending Card）的主要功能是什么？",
    options: ["A. 接收外部视频信号并转换为LED显示数据，发送给接收卡", "B. 直接驱动LED灯珠显示", "C. 对视频信号进行压缩存储", "D. 提供云平台远程管理功能"],
    answer: "A",
    explanation: "发送卡接收来自视频处理器或信号源的视频信号，将其转换为LED显示数据格式，通过网线或光纤发送给各接收卡。发送卡是连接视频信号和LED屏的桥梁。诺瓦的MCTRL系列为独立发送卡，MSD系列为可嵌入处理器的模块化发送卡。",
    points: 4,
    knowledgePoint: "控制卡-发送卡功能"
  },
  {
    id: "w1d2_q7",
    examId: "w1d2",
    type: "single",
    question: "诺瓦的MCTRL系列产品属于以下哪类产品？",
    options: ["A. 接收卡", "B. 独立发送卡", "C. 视频处理器", "D. 云平台软件"],
    answer: "B",
    explanation: "MCTRL系列是诺瓦的独立发送卡产品线（如MCTRL300、MCTRL600、MCTRL4K等），可独立使用，接收视频信号并转换为LED数据发送给接收卡。与之对应，MSD系列是模块化发送卡，可嵌入视频处理器内部使用。两者区别在于MCTRL为独立机箱设计，MSD为板卡嵌入设计。",
    points: 4,
    knowledgePoint: "控制卡-发送卡产品"
  },
  {
    id: "w1d2_q8",
    examId: "w1d2",
    type: "single",
    question: "LED屏带载计算的核心要素是什么？",
    options: ["A. 屏幕物理尺寸和观看距离", "B. 屏幕总像素数与发送卡带载能力", "C. LED灯珠品牌和驱动IC型号", "D. 屏幕使用环境和防护等级"],
    answer: "B",
    explanation: "带载计算的核心是确认屏幕总像素数（宽像素x高像素）是否在发送卡的带载能力范围内。发送卡的带载能力以像素数衡量（如某型号可带载65万像素）。若屏幕总像素超过单张发送卡带载能力，则需要多张发送卡级联。同时还需确认接收卡的带载能力是否满足每个箱体的像素需求。",
    points: 4,
    knowledgePoint: "控制卡-带载计算"
  },

  // --- 4道多选题 (每题7分, 共28分) ---

  {
    id: "w1d2_q9",
    examId: "w1d2",
    type: "multiple",
    question: "以下哪些是LED显示系统中常见的视频信号接口类型？",
    options: ["A. DVI（数字视频接口）", "B. HDMI（高清晰度多媒体接口）", "C. SDI（串行数字接口）", "D. DP（DisplayPort接口）"],
    answer: ["A", "B", "C", "D"],
    explanation: "LED视频处理器通常支持多种输入接口：DVI（数字视频接口，常见于PC输出）、HDMI（音视频一体，消费电子主流）、SDI（专业广播级，长距离传输）、DP（DisplayPort，高带宽PC接口）。不同接口有不同的带宽、传输距离和应用场景，处理器多接口支持提高了系统兼容性。",
    points: 7,
    knowledgePoint: "信号源-接口类型"
  },
  {
    id: "w1d2_q10",
    examId: "w1d2",
    type: "multiple",
    question: "以下哪些属于诺瓦科技的接收卡产品系列？",
    options: ["A. MRV系列（如MRV336等）", "B. A系列（如A8S等）", "C. MCTRL系列", "D. MSD系列"],
    answer: ["A", "B"],
    explanation: "诺瓦的接收卡产品主要包括MRV系列（如MRV336、MRV416、MRV515等经典接收卡）和A系列（如A8S等新一代高集成度接收卡）。MCTRL系列和MSD系列属于发送卡产品，不是接收卡。接收卡安装在LED箱体内，负责接收数据并驱动LED模组显示。",
    points: 7,
    knowledgePoint: "控制卡-接收卡产品"
  },
  {
    id: "w1d2_q11",
    examId: "w1d2",
    type: "multiple",
    question: "视频处理系统在LED显示中的核心功能包括以下哪些？",
    options: ["A. 画面缩放（分辨率转换适配LED屏）", "B. 信号格式转换（不同接口间转换）", "C. 多画面拼接与无缝切换", "D. 图像增强（亮度/对比度/色彩调整）"],
    answer: ["A", "B", "C", "D"],
    explanation: "视频处理器是LED显示系统的核心设备，主要功能包括：1.画面缩放——将输入信号分辨率缩放适配LED屏实际像素；2.格式转换——不同接口和信号格式间的转换；3.画面拼接与无缝切换——多路信号拼接显示和无缝切换不黑屏；4.图像增强——亮度、对比度、色彩等画质调节。这些功能确保各种信号源都能在LED屏上正确、高质量地显示。",
    points: 7,
    knowledgePoint: "视频处理系统-功能架构"
  },
  {
    id: "w1d2_q12",
    examId: "w1d2",
    type: "multiple",
    question: "关于诺瓦发送卡产品MCTRL系列和MSD系列，以下说法正确的有哪些？",
    options: ["A. MCTRL系列是独立机箱设计的发送卡，可单独使用", "B. MSD系列是模块化发送卡，可嵌入视频处理器内部", "C. 两者都是发送卡，功能上都是将视频信号转换为LED数据", "D. MCTRL系列只能用于接收卡，不能发送数据"],
    answer: ["A", "B", "C"],
    explanation: "MCTRL系列是独立发送卡（自带机箱和接口），可独立连接信号源使用；MSD系列是模块化发送卡，设计为嵌入视频处理器内部使用，与处理器形成一体化方案。两者都是发送卡，核心功能都是将视频信号转换为LED显示数据并发送给接收卡。D选项错误，MCTRL是发送卡不是接收卡。",
    points: 7,
    knowledgePoint: "控制卡-发送卡产品"
  },

  // --- 4道判断题 (每题5分, 共20分) ---

  {
    id: "w1d2_q13",
    examId: "w1d2",
    type: "judge",
    question: "EDID是显示器通过接口向信号源发送自身支持的分辨率、刷新率等能力信息的机制。",
    options: [],
    answer: true,
    explanation: "正确。EDID（扩展显示标识数据）存储在显示设备中，通过接口（HDMI/DVI/DP等）发送给信号源，告知其本设备支持的分辨率、刷新率、色彩格式等信息，使信号源输出匹配的信号。LED视频处理器可通过配置EDID来引导信号源输出特定分辨率。",
    points: 5,
    knowledgePoint: "信号源-EDID概念"
  },
  {
    id: "w1d2_q14",
    examId: "w1d2",
    type: "judge",
    question: "HDCP握手失败时，LED显示屏可能出现黑屏或无信号显示的问题。",
    options: [],
    answer: true,
    explanation: "正确。HDCP是数字内容保护机制，信号源和显示设备之间需要进行HDCP握手验证。若显示设备（或视频处理器）不支持HDCP或握手失败，信号源会拒绝输出视频信号，导致黑屏。在调试LED显示系统时，需确认处理器和发送卡的HDCP支持情况。",
    points: 5,
    knowledgePoint: "信号源-HDCP概念"
  },
  {
    id: "w1d2_q15",
    examId: "w1d2",
    type: "judge",
    question: "在LED控制系统中，一台发送卡可以通过网线级联连接多张接收卡。",
    options: [],
    answer: true,
    explanation: "正确。LED控制系统的典型架构是：发送卡通过网线（或光纤）连接到第一张接收卡，接收卡之间再通过网线级联，形成数据链路。一张发送卡可带载数量不等的接收卡（取决于带载能力），实现大面积LED屏的控制。",
    points: 5,
    knowledgePoint: "控制卡-系统架构"
  },
  {
    id: "w1d2_q16",
    examId: "w1d2",
    type: "judge",
    question: "DP（DisplayPort）接口不支持音频信号传输，只能传输视频信号。",
    options: [],
    answer: false,
    explanation: "错误。DP（DisplayPort）接口支持音视频信号同步传输，与HDMI一样可以同时传输视频和音频信号。DP接口具有高带宽特点，常用于PC和高性能显卡输出，在LED视频处理器中也常作为输入接口使用。",
    points: 5,
    knowledgePoint: "信号源-接口类型"
  },

  // --- 2道简答题 (每题10分, 共20分) ---

  {
    id: "w1d2_q17",
    examId: "w1d2",
    type: "short",
    question: "请简述EDID的概念及其在LED显示系统中的作用。",
    options: [],
    answer: "扩展显示标识数据,告知信号源,显示器支持的分辨率和格式,分辨率适配",
    explanation: "EDID（Extended Display Identification Data，扩展显示标识数据）是显示设备存储并发送给信号源的能力描述信息，包含支持的分辨率、刷新率、色彩格式等。在LED显示系统中，视频处理器通过配置EDID告知信号源（如PC、播放器）输出特定分辨率的信号，确保信号源输出的分辨率与LED屏实际像素匹配，实现正确的分辨率适配，避免画面变形或显示不全。",
    points: 10,
    knowledgePoint: "信号源-EDID概念与作用"
  },
  {
    id: "w1d2_q18",
    examId: "w1d2",
    type: "short",
    question: "请简述LED控制系统中发送卡和接收卡的工作关系。",
    options: [],
    answer: "发送卡,转换视频信号为LED数据,并发送,接收卡,接收数据,驱动LED显示",
    explanation: "发送卡和接收卡是LED控制系统的核心组件，工作关系为：发送卡接收来自视频处理器或信号源的视频信号，将其转换为LED显示数据格式，通过网线/光纤发送给接收卡；接收卡安装在LED箱体内，接收发送卡传来的数据，解码后驱动LED模组上的灯珠按正确亮度、颜色显示。一张发送卡可级联连接多张接收卡，共同完成整块LED屏的画面显示控制。",
    points: 10,
    knowledgePoint: "控制卡-系统架构"
  },

  // ================================================================
  // Day 3 日考 (examId: "w1d3")
  // 方案+V系列+H系列
  // ================================================================

  // --- 8道单选题 (每题4分, 共32分) ---

  {
    id: "w1d3_q1",
    examId: "w1d3",
    type: "single",
    question: "诺瓦V系列视频处理器的产品定位是什么？",
    options: ["A. 超高端旗舰处理器", "B. 性价比型视频处理器，面向中端应用场景", "C. 专用校正设备", "D. 云平台管理软件"],
    answer: "B",
    explanation: "V系列是诺瓦的性价比型视频处理器产品线，面向中端应用场景，兼顾功能与成本。V系列支持多种信号输入、画面缩放、无缝切换等功能，适合商显、会议、中小型活动等场景，是诺瓦视频处理器产品矩阵中的中坚力量。",
    points: 4,
    knowledgePoint: "V系列-产品定位"
  },
  {
    id: "w1d3_q2",
    examId: "w1d3",
    type: "single",
    question: "诺瓦H系列视频处理器的产品定位是什么？",
    options: ["A. 入门级经济型处理器", "B. 高端视频处理器，面向高端租赁和指挥中心", "C. 接收卡产品", "D. 校正工具"],
    answer: "B",
    explanation: "H系列是诺瓦的高端视频处理器产品线，定位于高端租赁、指挥调度中心、大型活动等对画质和功能要求极高的场景。H系列支持4K处理、HDR、多路输入输出、无缝切换等高级功能，是诺瓦处理器的旗舰产品线。",
    points: 4,
    knowledgePoint: "H系列-产品定位"
  },
  {
    id: "w1d3_q3",
    examId: "w1d3",
    type: "single",
    question: "LED屏带载计算的第一步应该做什么？",
    options: ["A. 选择发送卡型号", "B. 确定接收卡数量", "C. 计算LED屏的总像素数", "D. 测量观看距离"],
    answer: "C",
    explanation: "带载计算的第一步是计算LED屏的总像素数：屏幕宽度方向的像素数（屏宽mm/像素间距mm）x 屏幕高度方向的像素数（屏高mm/像素间距mm）。得到总像素数后，再与发送卡的带载能力对比，确定需要几张发送卡；同时确认每张接收卡的带载能力是否满足箱体像素需求。",
    points: 4,
    knowledgePoint: "LED方案-带载计算"
  },
  {
    id: "w1d3_q4",
    examId: "w1d3",
    type: "single",
    question: "视频处理器在LED显示系统中的核心功能是什么？",
    options: ["A. 直接驱动LED灯珠发光", "B. 信号处理与格式转换，将各种信号源适配到LED屏", "C. 提供网络远程管理", "D. 校正LED屏的亮度均匀性"],
    answer: "B",
    explanation: "视频处理器是LED显示系统的信号中枢，核心功能是信号处理与格式转换：接收各种接口（HDMI/DVI/SDI/DP等）和分辨率的输入信号，经过缩放、格式转换、画质增强等处理后，输出与LED屏实际像素匹配的信号给发送卡。处理器是连接外部信号源和LED控制系统之间的桥梁。",
    points: 4,
    knowledgePoint: "视频处理器-核心功能"
  },
  {
    id: "w1d3_q5",
    examId: "w1d3",
    type: "single",
    question: "某LED屏宽4米、高3米，像素间距P4mm，该屏宽度方向有多少个像素？",
    options: ["A. 500", "B. 750", "C. 1000", "D. 1200"],
    answer: "C",
    explanation: "宽度方向像素数 = 屏幕物理宽度 / 像素间距 = 4000mm / 4mm = 1000像素。高度方向像素数 = 3000mm / 4mm = 750像素。总像素 = 1000 x 750 = 750,000像素。这是带载计算的基础，后续需将总像素与发送卡带载能力对比来确定发送卡数量。",
    points: 4,
    knowledgePoint: "LED方案-带载计算"
  },
  {
    id: "w1d3_q6",
    examId: "w1d3",
    type: "single",
    question: "H系列处理器相对于V系列的主要优势体现在什么方面？",
    options: ["A. 价格更低廉", "B. 更高端的处理能力，支持4K、HDR等高级功能", "C. 体积更小巧", "D. 操作更简单"],
    answer: "B",
    explanation: "H系列作为高端处理器，相比V系列的核心优势在于更强大的处理能力：支持4K分辨率处理、HDR高动态范围、更多路输入输出、更高级的画面处理算法等。V系列则以性价比见长，适合中端场景。两者定位互补，覆盖不同市场需求。",
    points: 4,
    knowledgePoint: "H系列-核心卖点"
  },
  {
    id: "w1d3_q7",
    examId: "w1d3",
    type: "single",
    question: "LED方案设计时，以下哪项不是必须确认的关键信息？",
    options: ["A. 像素间距与屏幕尺寸", "B. 发送卡与接收卡的带载能力", "C. 屏幕使用环境（室内/室外）", "D. LED灯珠的生产批次号"],
    answer: "D",
    explanation: "LED方案设计必须确认的关键信息包括：像素间距与屏幕尺寸（决定总像素）、发送卡带载能力（决定发送卡数量）、接收卡带载能力（决定每箱体接收卡配置）、使用环境（室内/室外影响亮度和防护等级要求）。LED灯珠生产批次号不是方案设计阶段的必要信息。",
    points: 4,
    knowledgePoint: "LED方案-设计要素"
  },
  {
    id: "w1d3_q8",
    examId: "w1d3",
    type: "single",
    question: "以下哪个场景更适合选用H系列高端处理器？",
    options: ["A. 小型商铺门头屏", "B. 高端租赁舞台和指挥调度中心", "C. 电梯内广告屏", "D. 家用电视替代"],
    answer: "B",
    explanation: "H系列作为高端处理器，支持4K、HDR、多路输入输出、无缝切换等高级功能，适合对画质和功能要求极高的场景：高端舞台租赁（演唱会、大型活动）、指挥调度中心（多信号拼接监控）、广电演播室等。小型门头屏和广告屏使用V系列即可满足需求。",
    points: 4,
    knowledgePoint: "H系列-适用场景"
  },

  // --- 4道多选题 (每题7分, 共28分) ---

  {
    id: "w1d3_q9",
    examId: "w1d3",
    type: "multiple",
    question: "诺瓦V系列视频处理器的主要产品特点包括哪些？",
    options: ["A. 性价比高，面向中端市场", "B. 支持多种信号输入格式", "C. 具备画面缩放和无缝切换功能", "D. 操作简便，适用场景广泛"],
    answer: ["A", "B", "C", "D"],
    explanation: "V系列处理器的核心特点：性价比高（在中端市场有竞争力）、支持多种信号输入（HDMI/DVI/SDI等）、具备画面缩放和无缝切换等核心处理功能、操作简便易于上手。V系列覆盖商显、会议、中小型活动等广泛应用场景，是诺瓦处理器产品线的主力军。",
    points: 7,
    knowledgePoint: "V系列-功能特性"
  },
  {
    id: "w1d3_q10",
    examId: "w1d3",
    type: "multiple",
    question: "诺瓦H系列高端处理器的核心卖点包括哪些？",
    options: ["A. 支持4K超高清分辨率处理", "B. 支持HDR高动态范围显示", "C. 多路输入输出与无缝切换", "D. 面向高端租赁和指挥中心等高要求场景"],
    answer: ["A", "B", "C", "D"],
    explanation: "H系列作为诺瓦旗舰处理器，核心卖点：4K超高清处理能力（满足高分辨率大屏需求）、HDR支持（更宽的动态范围和更丰富的明暗细节）、多路输入输出与无缝切换（满足多信号源调度需求）、定位高端租赁和指挥中心（与V系列形成差异化定位）。这些特性使H系列在高端市场具有竞争力。",
    points: 7,
    knowledgePoint: "H系列-核心卖点"
  },
  {
    id: "w1d3_q11",
    examId: "w1d3",
    type: "multiple",
    question: "LED屏带载计算过程中，需要考虑以下哪些因素？",
    options: ["A. LED屏的总像素数（宽x高）", "B. 发送卡的带载能力（像素数）", "C. 接收卡的带载能力（每张卡可驱动像素数）", "D. 发送卡与接收卡之间的级联方式"],
    answer: ["A", "B", "C", "D"],
    explanation: "带载计算需要综合考虑：1.LED屏总像素数——由屏宽/像素间距x屏高/像素间距得出；2.发送卡带载能力——单张发送卡最大可带载的像素数，总像素超过则需多卡；3.接收卡带载能力——每张接收卡可驱动的像素数，决定每箱体需几张接收卡；4.级联方式——发送卡到接收卡、接收卡之间的连接拓扑。四者缺一不可。",
    points: 7,
    knowledgePoint: "LED方案-带载计算"
  },
  {
    id: "w1d3_q12",
    examId: "w1d3",
    type: "multiple",
    question: "V系列和H系列处理器在市场定位上的区别包括以下哪些？",
    options: ["A. V系列定位性价比型，H系列定位高端型", "B. V系列面向中端商显会议场景，H系列面向高端租赁指挥中心", "C. H系列在处理能力上优于V系列，支持4K/HDR等高级功能", "D. V系列和H系列是完全相同的产品，只是命名不同"],
    answer: ["A", "B", "C"],
    explanation: "V系列和H系列是差异化定位的两个产品线：V系列主打性价比，面向中端商显/会议/中小活动场景；H系列主打高端，面向高端租赁/指挥中心/演播室等高要求场景。H系列在处理能力（4K、HDR、多路IO等）上优于V系列。D选项错误，两者是不同定位的不同产品线。",
    points: 7,
    knowledgePoint: "V系列与H系列-产品定位对比"
  },

  // --- 4道判断题 (每题5分, 共20分) ---

  {
    id: "w1d3_q13",
    examId: "w1d3",
    type: "judge",
    question: "H系列处理器的产品定位高于V系列，在功能和处理能力上更强。",
    options: [],
    answer: true,
    explanation: "正确。H系列是诺瓦的高端处理器产品线，定位高于V系列（性价比型）。H系列支持4K处理、HDR、更多路输入输出等高级功能，面向高端租赁和指挥中心等对画质要求极高的场景；V系列则面向中端商显和会议场景，注重性价比。",
    points: 5,
    knowledgePoint: "V系列与H系列-产品定位"
  },
  {
    id: "w1d3_q14",
    examId: "w1d3",
    type: "judge",
    question: "LED屏带载计算只需考虑屏幕宽度方向的像素数，不需要考虑高度方向。",
    options: [],
    answer: false,
    explanation: "错误。带载计算必须同时考虑宽度和高度两个方向。屏幕总像素数 = 宽度像素 x 高度像素。发送卡的带载能力是按总像素数计算的（如65万像素），不是只看单一方向。忽略高度方向会导致带载计算错误，可能造成发送卡数量不足。",
    points: 5,
    knowledgePoint: "LED方案-带载计算"
  },
  {
    id: "w1d3_q15",
    examId: "w1d3",
    type: "judge",
    question: "V系列视频处理器支持多种输入信号格式，可适配不同的信号源设备。",
    options: [],
    answer: true,
    explanation: "正确。V系列处理器支持HDMI、DVI、SDI、DP等多种输入接口，可接入PC、播放器、摄像机、矩阵等多种信号源设备。多接口支持是视频处理器的基本功能，确保系统兼容性。",
    points: 5,
    knowledgePoint: "V系列-功能特性"
  },
  {
    id: "w1d3_q16",
    examId: "w1d3",
    type: "judge",
    question: "当LED屏总像素数超过单张发送卡的带载能力时，可以通过多张发送卡级联来解决。",
    options: [],
    answer: true,
    explanation: "正确。当屏幕总像素数超过单张发送卡的带载能力时，需要使用多张发送卡。多张发送卡可以分别负责屏幕的不同区域，通过级联或分区方式协同工作，共同完成整块大屏的数据发送。这是大型LED屏方案设计中的常见做法。",
    points: 5,
    knowledgePoint: "LED方案-带载计算"
  },

  // --- 2道简答题 (每题10分, 共20分) ---

  {
    id: "w1d3_q17",
    examId: "w1d3",
    type: "short",
    question: "请列举诺瓦H系列高端处理器的核心卖点（至少列举4个）。",
    options: [],
    answer: "4K处理,HDR,多路输出,无缝切换,高端处理,多路输入",
    explanation: "H系列高端处理器的核心卖点包括：1.4K超高清分辨率处理——满足高分辨率大屏需求；2.HDR高动态范围支持——更丰富的明暗细节和更真实的色彩表现；3.多路输入输出——可同时接入多路信号源并输出到多个显示区域；4.无缝切换——信号切换时不黑屏不闪屏，满足直播和高端活动需求；5.高端处理算法——更强大的画质处理能力。这些特性使H系列在高端租赁、指挥中心等场景具有竞争优势。",
    points: 10,
    knowledgePoint: "H系列-核心卖点"
  },
  {
    id: "w1d3_q18",
    examId: "w1d3",
    type: "short",
    question: "请简述LED屏带载计算的主要步骤。",
    options: [],
    answer: "计算屏幕总像素,确认发送卡带载能力,确认接收卡带载能力,确定所需卡数",
    explanation: "LED屏带载计算主要步骤：1.计算屏幕总像素数——宽度像素（屏宽mm/像素间距mm）x 高度像素（屏高mm/像素间距mm）；2.确认发送卡带载能力——查看所选发送卡型号的最大带载像素数，将屏幕总像素与之对比，确定需要几张发送卡；3.确认接收卡带载能力——根据每个箱体的像素数和接收卡的带载能力，确定每箱体需要几张接收卡；4.确定级联方案——设计发送卡到接收卡、接收卡之间的连接拓扑。通过以上步骤确保控制系统带载能力满足屏幕需求。",
    points: 10,
    knowledgePoint: "LED方案-带载计算"
  },

  // ================================================================
  // Day 4 日考 (examId: "w1d4")
  // TB+TU+一体机+配件+GTS
  // ================================================================

  // --- 8道单选题 (每题4分, 共32分) ---

  {
    id: "w1d4_q1",
    examId: "w1d4",
    type: "single",
    question: "诺瓦TB系列产品的核心定位是什么？",
    options: ["A. 独立发送卡", "B. 集成化一体化解决方案，整合处理与发送功能", "C. 云平台软件", "D. 接收卡"],
    answer: "B",
    explanation: "TB系列是诺瓦的集成化一体化解决方案产品线，将视频处理和发送卡功能整合到一个设备中，简化了系统架构和部署流程。用户无需单独购买处理器和发送卡，TB系列一体机即可完成信号处理、格式转换和LED数据发送的全部功能，降低了系统复杂度和成本。",
    points: 4,
    knowledgePoint: "TB系列-产品定位"
  },
  {
    id: "w1d4_q2",
    examId: "w1d4",
    type: "single",
    question: "诺瓦TU系列产品的定位是什么？",
    options: ["A. 高端租赁处理器", "B. 集成化场景解决方案，多型号适配不同场景", "C. 校正工具", "D. 接收卡系列"],
    answer: "B",
    explanation: "TU系列是诺瓦的集成化场景解决方案产品线，提供多个不同型号以适配不同的应用场景和需求。TU系列注重场景化适配，各型号在功能参数上有所差异，用户可根据实际场景需求选择合适的型号，实现最佳性价比和功能匹配。",
    points: 4,
    knowledgePoint: "TU系列-产品定位"
  },
  {
    id: "w1d4_q3",
    examId: "w1d4",
    type: "single",
    question: "诺瓦LED一体机系统与传统分离式方案相比，最大的特点是什么？",
    options: ["A. 价格最便宜", "B. 将发送、处理、控制等功能集成为一体", "C. 支持最大尺寸的LED屏", "D. 不需要任何配置即可使用"],
    answer: "B",
    explanation: "LED一体机系统的最大特点是高度集成化——将视频处理、发送卡、控制等功能整合到一个设备或一套系统中，相比传统分离式方案（独立处理器+独立发送卡+独立接收卡），减少了设备数量和线缆连接，简化了系统架构，降低了部署难度和维护成本。",
    points: 4,
    knowledgePoint: "一体机-系统构成"
  },
  {
    id: "w1d4_q4",
    examId: "w1d4",
    type: "single",
    question: "诺瓦GTS平台的产品定位是什么？",
    options: ["A. 本地屏幕管理软件", "B. 云端远程监控管理平台", "C. 视频处理器型号", "D. 接收卡配置工具"],
    answer: "B",
    explanation: "GTS是诺瓦的云端远程监控管理平台，用户可通过互联网远程监控和管理分布在不同地点的LED显示屏设备。GTS提供设备状态监控、内容管理、告警管理等功能，适用于连锁店铺、户外广告网络等需要集中远程管理的场景。",
    points: 4,
    knowledgePoint: "GTS-平台定位"
  },
  {
    id: "w1d4_q5",
    examId: "w1d4",
    type: "single",
    question: "诺瓦「屏老板」软件的产品定位是什么？",
    options: ["A. 云端远程管理平台", "B. 本地屏幕管理与内容播放软件", "C. 视频处理器固件", "D. 接收卡调试工具"],
    answer: "B",
    explanation: "屏老板是诺瓦的本地屏幕管理与内容播放软件，安装在本地播放设备上，用于LED屏的本地内容管理、节目编排和播放控制。与GTS（云端平台）不同，屏老板侧重于本地操作，适合单点或局域网内的屏幕管理，两者可以配合使用。",
    points: 4,
    knowledgePoint: "屏老板-产品定位"
  },
  {
    id: "w1d4_q6",
    examId: "w1d4",
    type: "single",
    question: "LED一体机系统相比传统分离式方案（独立处理器+独立发送卡）的主要优势是什么？",
    options: ["A. 支持更大的屏幕尺寸", "B. 系统更简化，集成度更高，部署和维护更便捷", "C. 价格一定更贵", "D. 不需要接收卡"],
    answer: "B",
    explanation: "一体机系统的核心优势是集成化带来的简化：减少了独立设备数量和设备间线缆连接，降低了部署难度和故障点，维护更便捷。一体机将处理+发送集成后，用户只需连接信号源和接收卡即可工作，大幅简化了系统架构。注意一体机仍需要接收卡来驱动LED模组。",
    points: 4,
    knowledgePoint: "一体机-对比优势"
  },
  {
    id: "w1d4_q7",
    examId: "w1d4",
    type: "single",
    question: "GTS平台与屏老板软件的主要区别是什么？",
    options: ["A. GTS是云端远程管理，屏老板是本地管理软件", "B. GTS是硬件，屏老板是软件", "C. GTS用于校正，屏老板用于处理", "D. 两者完全相同"],
    answer: "A",
    explanation: "GTS是基于云端的远程监控管理平台，通过互联网远程管理分散在各处的LED屏设备；屏老板是本地屏幕管理与内容播放软件，安装在本地设备上进行单点或局域网内的屏幕管理。两者定位互补：GTS适合集中远程管理多屏，屏老板适合本地精细化管理，可配合使用。",
    points: 4,
    knowledgePoint: "GTS与屏老板-产品对比"
  },
  {
    id: "w1d4_q8",
    examId: "w1d4",
    type: "single",
    question: "以下哪项是诺瓦配件产品中常见的设备类型？",
    options: ["A. 传感器（亮度/温度等环境监测）", "B. 视频处理器", "C. 发送卡", "D. 接收卡"],
    answer: "A",
    explanation: "诺瓦配件产品包括各类辅助设备，如传感器（亮度传感器用于自动亮度调节、温度传感器用于温度监测）、信号转换器、光纤收发器、网线分配器等。这些配件用于完善LED显示系统的功能，如自动亮度调节、信号长距离传输等。视频处理器、发送卡、接收卡属于核心产品而非配件。",
    points: 4,
    knowledgePoint: "配件-产品类型"
  },

  // --- 4道多选题 (每题7分, 共28分) ---

  {
    id: "w1d4_q9",
    examId: "w1d4",
    type: "multiple",
    question: "诺瓦TB系列产品的主要特点包括哪些？",
    options: ["A. 集成化设计，整合处理与发送功能", "B. 一体化方案，简化系统架构", "C. 减少设备数量和线缆连接，部署更便捷", "D. 降低系统复杂度和整体成本"],
    answer: ["A", "B", "C", "D"],
    explanation: "TB系列作为一体化解决方案，核心特点：集成化设计（处理+发送一体）、一体化方案（替代分离式处理器+发送卡组合）、简化部署（减少设备和线缆）、降低成本（减少设备采购和安装成本）。TB系列适合追求简洁部署和性价比的应用场景。",
    points: 7,
    knowledgePoint: "TB系列-功能特点"
  },
  {
    id: "w1d4_q10",
    examId: "w1d4",
    type: "multiple",
    question: "诺瓦TU系列产品的特点包括以下哪些？",
    options: ["A. 提供多个型号适配不同场景需求", "B. 集成化设计", "C. 各型号在功能参数上有所差异，便于场景化选择", "D. 面向特定应用场景的集成化解决方案"],
    answer: ["A", "B", "C", "D"],
    explanation: "TU系列是诺瓦的集成化场景解决方案产品线，特点包括：多型号选择（不同型号适配不同场景）、集成化设计（功能整合）、参数差异化（各型号功能参数不同便于选择）、场景化定位（针对特定应用场景优化）。用户可根据实际需求选择最匹配的型号。",
    points: 7,
    knowledgePoint: "TU系列-产品特点"
  },
  {
    id: "w1d4_q11",
    examId: "w1d4",
    type: "multiple",
    question: "诺瓦GTS云平台的主要功能包括以下哪些？",
    options: ["A. 远程设备监控（实时查看设备状态）", "B. 设备管理（远程配置和管控）", "C. 内容管理（远程发布和排播节目）", "D. 告警管理（异常状态实时告警通知）"],
    answer: ["A", "B", "C", "D"],
    explanation: "GTS云平台作为远程管理平台，核心功能：1.远程设备监控——实时查看各LED屏设备的运行状态、在线状态等；2.设备管理——远程配置设备参数、固件升级等；3.内容管理——远程发布、排播和管理播放内容；4.告警管理——设备异常时实时告警通知，便于及时处理。适用于多屏分布式管理场景。",
    points: 7,
    knowledgePoint: "GTS-平台功能"
  },
  {
    id: "w1d4_q12",
    examId: "w1d4",
    type: "multiple",
    question: "诺瓦LED一体机系统相比传统拼接屏方案的优势包括哪些？",
    options: ["A. 集成度更高，系统架构更简化", "B. 部署更便捷，减少设备数量和线缆", "C. 降低系统复杂度和维护成本", "D. 完全不需要接收卡和任何配置"],
    answer: ["A", "B", "C"],
    explanation: "LED一体机相比传统拼接屏的优势：集成度高（处理+发送一体化）、部署便捷（减少设备和线缆）、降低成本和维护复杂度。但D选项错误——一体机仍需要接收卡驱动LED模组，也需要进行基本配置，只是整体更简化。",
    points: 7,
    knowledgePoint: "一体机-对比优势"
  },

  // --- 4道判断题 (每题5分, 共20分) ---

  {
    id: "w1d4_q13",
    examId: "w1d4",
    type: "judge",
    question: "诺瓦LED一体机系统通过集成化设计，简化了系统架构，减少了设备数量。",
    options: [],
    answer: true,
    explanation: "正确。一体机系统将视频处理、发送卡等功能整合到一个设备中，相比传统方案（独立处理器+独立发送卡+线缆连接），减少了设备数量和线缆连接，简化了系统架构，降低了部署难度和故障风险。",
    points: 5,
    knowledgePoint: "一体机-系统特点"
  },
  {
    id: "w1d4_q14",
    examId: "w1d4",
    type: "judge",
    question: "GTS云平台支持通过互联网对分布在不同地点的LED屏设备进行远程监控和管理。",
    options: [],
    answer: true,
    explanation: "正确。GTS是基于云端的远程管理平台，用户通过互联网即可远程监控和管理分布在不同城市、不同地点的LED屏设备。支持设备状态监控、远程配置、内容发布、告警通知等功能，适用于连锁门店、户外广告网络等多屏分布式管理场景。",
    points: 5,
    knowledgePoint: "GTS-平台功能"
  },
  {
    id: "w1d4_q15",
    examId: "w1d4",
    type: "judge",
    question: "屏老板软件和GTS平台是完全相同的云端远程管理产品，只是名称不同。",
    options: [],
    answer: false,
    explanation: "错误。屏老板是本地屏幕管理与内容播放软件，安装在本地设备上，侧重于单点或局域网内的本地管理；GTS是云端远程管理平台，通过互联网进行多设备远程集中管理。两者定位不同、功能侧重不同，可配合使用但不是同一产品。",
    points: 5,
    knowledgePoint: "GTS与屏老板-产品对比"
  },
  {
    id: "w1d4_q16",
    examId: "w1d4",
    type: "judge",
    question: "TB系列产品集成了视频处理和发送卡功能，是一体化解决方案。",
    options: [],
    answer: true,
    explanation: "正确。TB系列是诺瓦的一体化解决方案产品线，将视频处理功能和发送卡功能集成到一个设备中。用户使用TB系列产品时，无需再单独购买独立的视频处理器和发送卡，一套设备即可完成信号处理、格式转换和LED数据发送的全部功能，简化了系统部署。",
    points: 5,
    knowledgePoint: "TB系列-功能特点"
  },

  // --- 2道简答题 (每题10分, 共20分) ---

  {
    id: "w1d4_q17",
    examId: "w1d4",
    type: "short",
    question: "请列举诺瓦GTS云平台的主要功能（至少列举4个）。",
    options: [],
    answer: "远程监控,设备管理,内容管理,告警管理",
    explanation: "GTS云平台的主要功能：1.远程设备监控——实时查看各LED屏设备的运行状态、在线状态、播放状态等；2.设备管理——远程配置设备参数、固件升级、分组管理等；3.内容管理——远程创建、发布和排播节目内容，支持素材管理；4.告警管理——设备离线、温度异常等异常状态实时告警，支持邮件/短信通知。GTS适用于连锁店铺、户外广告等多屏远程集中管理场景。",
    points: 10,
    knowledgePoint: "GTS-平台功能"
  },
  {
    id: "w1d4_q18",
    examId: "w1d4",
    type: "short",
    question: "请简述诺瓦LED一体机系统相比传统分离式方案（独立处理器+独立发送卡）的主要优势。",
    options: [],
    answer: "集成化,简化部署,降低成本,易于维护,减少设备",
    explanation: "LED一体机系统的主要优势：1.集成化——将视频处理和发送卡功能整合到一个设备中，无需独立处理器+独立发送卡的组合；2.简化部署——减少设备数量和设备间线缆连接，安装配置更简单快捷；3.降低成本——减少设备采购成本和安装人工成本；4.易于维护——设备数量少、连接点少，故障率低，排查维护更便捷；5.系统更稳定——减少了设备间接口和线缆带来的潜在故障点。",
    points: 10,
    knowledgePoint: "一体机-对比优势"
  },

  // ================================================================
  // Week 1 周考 (examId: "w1week")
  // PPT 1~15 综合知识笔试
  // ================================================================

  // --- 8道单选题 (每题4分, 共32分) ---

  {
    id: "w1week_q1",
    examId: "w1week",
    type: "single",
    question: "诺瓦科技的四大主营产品线是以下哪一组？",
    options: ["A. LED控制+视频处理+校正+云平台", "B. 芯片设计+屏幕制造+支架生产+物流配送", "C. 摄像机+切换台+调音台+录播设备", "D. 投影仪+拼接屏+广告机+触摸一体机"],
    answer: "A",
    explanation: "诺瓦科技四大主营产品线为：LED控制系统（发送卡/接收卡）、视频处理系统（V系列/H系列/TB系列/TU系列等处理器）、校正系统（逐点亮度/色度校正）、云平台（GTS远程管理平台）。诺瓦是LED显示控制解决方案提供商，不涉及芯片设计、屏幕制造、投影仪等业务。",
    points: 4,
    knowledgePoint: "综合-诺瓦产品线"
  },
  {
    id: "w1week_q2",
    examId: "w1week",
    type: "single",
    question: "在LED控制系统中，发送卡和接收卡的工作关系是？",
    options: ["A. 发送卡直接驱动LED灯，接收卡接收外部信号", "B. 发送卡将视频信号转为LED数据并发送，接收卡接收数据并驱动LED显示", "C. 两者功能完全相同，可以互换使用", "D. 接收卡将信号发给发送卡，发送卡驱动LED"],
    answer: "B",
    explanation: "发送卡接收视频信号并转换为LED显示数据，通过网线/光纤发送给接收卡；接收卡安装在LED箱体内，接收发送卡的数据并驱动LED模组显示。发送卡到接收卡再到LED灯珠是数据流向的正确顺序，两者不可互换。",
    points: 4,
    knowledgePoint: "综合-控制系统架构"
  },
  {
    id: "w1week_q3",
    examId: "w1week",
    type: "single",
    question: "诺瓦H系列处理器的产品定位是什么？",
    options: ["A. 入门级经济型处理器", "B. 高端视频处理器，支持4K/HDR等高级功能", "C. 接收卡产品线", "D. 云平台管理软件"],
    answer: "B",
    explanation: "H系列是诺瓦的高端视频处理器产品线，支持4K超高清处理、HDR高动态范围、多路输入输出、无缝切换等高级功能，面向高端租赁舞台、指挥调度中心、演播室等对画质和功能要求极高的场景。与V系列（性价比型中端定位）形成差异化互补。",
    points: 4,
    knowledgePoint: "综合-产品定位"
  },
  {
    id: "w1week_q4",
    examId: "w1week",
    type: "single",
    question: "某LED屏宽5米、高3米，像素间距P5mm，该屏总像素数约为多少？",
    options: ["A. 300,000", "B. 500,000", "C. 600,000", "D. 750,000"],
    answer: "C",
    explanation: "宽度像素 = 5000mm / 5mm = 1000像素；高度像素 = 3000mm / 5mm = 600像素；总像素 = 1000 x 600 = 600,000像素。带载计算时需将此总像素与发送卡带载能力对比，确定所需发送卡数量。",
    points: 4,
    knowledgePoint: "综合-带载计算"
  },
  {
    id: "w1week_q5",
    examId: "w1week",
    type: "single",
    question: "GTS平台与屏老板软件的核心区别是什么？",
    options: ["A. GTS是云端远程管理平台，屏老板是本地屏幕管理软件", "B. GTS是硬件设备，屏老板是软件", "C. GTS用于校正，屏老板用于处理", "D. 两者是同一产品的不同名称"],
    answer: "A",
    explanation: "GTS是基于云端的远程监控管理平台，通过互联网远程管理分布式LED屏设备；屏老板是本地屏幕管理与内容播放软件，安装在本地设备上进行本地管理。两者定位互补：GTS适合多屏远程集中管理，屏老板适合本地精细化管理，可配合使用。",
    points: 4,
    knowledgePoint: "综合-软件平台"
  },
  {
    id: "w1week_q6",
    examId: "w1week",
    type: "single",
    question: "LED显示屏像素间距「P4」中的「4」代表什么含义？",
    options: ["A. 屏幕分辨率为4K", "B. 相邻两个像素中心点之间的距离为4毫米", "C. 屏幕有4层结构", "D. 屏幕亮度为4000尼特"],
    answer: "B",
    explanation: "P4表示该LED显示屏的像素间距为4mm，即相邻两个LED像素中心点之间的距离为4毫米。像素间距是LED屏最重要的参数之一，决定了画面细腻度和最佳观看距离。P4的最近观看距离约为4米，常用于中远距离观看的室内外显示屏。",
    points: 4,
    knowledgePoint: "综合-LED基础"
  },
  {
    id: "w1week_q7",
    examId: "w1week",
    type: "single",
    question: "诺瓦TB系列产品集成的是哪两项核心功能？",
    options: ["A. 校正与云平台", "B. 视频处理与发送卡功能", "C. 接收卡与传感器", "D. 矩阵切换与光纤传输"],
    answer: "B",
    explanation: "TB系列是诺瓦的一体化解决方案产品线，将视频处理和发送卡功能集成到一个设备中。传统方案需要独立购买视频处理器和发送卡，TB系列一体机则将两者整合，简化了系统架构、减少了设备数量和线缆连接，降低了部署难度和成本。",
    points: 4,
    knowledgePoint: "综合-TB系列"
  },
  {
    id: "w1week_q8",
    examId: "w1week",
    type: "single",
    question: "以下关于HDCP的描述，正确的是哪一项？",
    options: ["A. HDCP是一种视频压缩技术", "B. HDCP用于数字内容版权保护，防止音视频内容被未授权拷贝", "C. HDCP用于提高视频传输速度", "D. HDCP是LED灯珠的驱动协议"],
    answer: "B",
    explanation: "HDCP（High-bandwidth Digital Content Protection，高带宽数字内容保护）是Intel开发的版权保护技术，用于防止音视频内容在HDMI/DP等接口传输过程中被未授权拷贝。在LED显示系统中，若处理器或发送卡不支持HDCP或握手失败，可能导致黑屏无信号问题。",
    points: 4,
    knowledgePoint: "综合-信号源知识"
  },

  // --- 4道多选题 (每题7分, 共28分) ---

  {
    id: "w1week_q9",
    examId: "w1week",
    type: "multiple",
    question: "以下哪些属于诺瓦科技的产品线或产品系列？",
    options: ["A. LED控制系统（MCTRL发送卡/MRV接收卡等）", "B. 视频处理系统（V系列/H系列/TB系列/TU系列处理器）", "C. 云平台与本地管理软件（GTS/屏老板）", "D. 逐点校正系统"],
    answer: ["A", "B", "C", "D"],
    explanation: "诺瓦科技的产品体系覆盖LED显示控制全链路：LED控制系统（发送卡MCTRL/MSD系列、接收卡MRV/A系列）、视频处理系统（V系列/H系列/TB系列/TU系列）、云平台与软件（GTS远程管理+屏老板本地管理）、校正系统（逐点亮度/色度校正工具）。四大产品线构成了完整的LED显示控制解决方案。",
    points: 7,
    knowledgePoint: "综合-诺瓦产品体系"
  },
  {
    id: "w1week_q10",
    examId: "w1week",
    type: "multiple",
    question: "以下哪些是LED显示屏的核心技术参数？",
    options: ["A. 像素间距与刷新率", "B. 灰度等级与亮度", "C. 对比度与色域", "D. 扫描方式与IP防护等级"],
    answer: ["A", "B", "C", "D"],
    explanation: "LED显示屏核心技术参数包括：像素间距（决定画面细腻度）、刷新率（影响拍摄效果）、灰度等级（影响色彩层次）、亮度（影响可视性）、对比度（影响画面层次）、色域（影响色彩还原范围）、扫描方式（影响亮度和功耗）、IP防护等级（影响使用环境）。掌握这些参数的含义和典型值是LED行业从业者的基本功。",
    points: 7,
    knowledgePoint: "综合-LED基础"
  },
  {
    id: "w1week_q11",
    examId: "w1week",
    type: "multiple",
    question: "视频处理器在LED显示系统中的主要功能包括以下哪些？",
    options: ["A. 画面缩放（将输入分辨率适配LED屏实际像素）", "B. 信号格式转换（不同接口和格式间转换）", "C. 多画面拼接与无缝切换", "D. 图像增强（亮度/对比度/色彩调节）"],
    answer: ["A", "B", "C", "D"],
    explanation: "视频处理器是LED显示系统的信号中枢，核心功能：1.画面缩放——将各种输入分辨率缩放适配LED屏的实际像素排列；2.格式转换——HDMI/DVI/SDI/DP等接口间的信号转换；3.拼接与无缝切换——多路信号拼接显示和切换不黑屏；4.图像增强——亮度、对比度、色彩等画质优化。这些功能确保各种信号源都能在LED屏上高质量显示。",
    points: 7,
    knowledgePoint: "综合-视频处理"
  },
  {
    id: "w1week_q12",
    examId: "w1week",
    type: "multiple",
    question: "关于诺瓦GTS云平台和屏老板软件，以下说法正确的有哪些？",
    options: ["A. GTS是基于云端的远程监控管理平台", "B. 屏老板是本地屏幕管理与内容播放软件", "C. GTS适合多屏分布式远程集中管理", "D. 两者可以配合使用，GTS远程管理+屏老板本地管理"],
    answer: ["A", "B", "C", "D"],
    explanation: "GTS是云端远程管理平台（适合多屏分布式远程集中管理），屏老板是本地管理软件（适合单点或局域网内本地精细化管理）。两者定位互补，可以配合使用：GTS负责远程监控和内容下发，屏老板负责本地播放和精细化管理。这种组合既能实现远程集中管控，又能保证本地播放的稳定性和灵活性。",
    points: 7,
    knowledgePoint: "综合-软件平台"
  },

  // --- 4道判断题 (每题5分, 共20分) ---

  {
    id: "w1week_q13",
    examId: "w1week",
    type: "judge",
    question: "LED显示屏的刷新率越高，用相机拍摄时越不容易出现扫描线现象。",
    options: [],
    answer: true,
    explanation: "正确。高刷新率（如3840Hz）使LED屏的刷新频率远高于相机快门速度，有效减少拍摄时出现的扫描线和闪烁。舞台租赁、演播室、xR虚拟拍摄等需要相机拍摄的场景必须使用高刷新率LED屏（通常要求>=1920Hz，推荐3840Hz）。",
    points: 5,
    knowledgePoint: "综合-LED基础"
  },
  {
    id: "w1week_q14",
    examId: "w1week",
    type: "judge",
    question: "诺瓦MCTRL系列是接收卡产品，安装在LED箱体内驱动LED模组。",
    options: [],
    answer: false,
    explanation: "错误。MCTRL系列是发送卡产品（独立机箱设计），接收视频信号并转换为LED数据发送给接收卡。安装在LED箱体内驱动LED模组的是接收卡（MRV系列/A系列）。发送卡和接收卡的功能和安装位置完全不同：发送卡在控制端，接收卡在显示屏端。",
    points: 5,
    knowledgePoint: "综合-控制系统"
  },
  {
    id: "w1week_q15",
    examId: "w1week",
    type: "judge",
    question: "诺瓦H系列处理器在产品定位上高于V系列，面向高端租赁和指挥中心等高要求场景。",
    options: [],
    answer: true,
    explanation: "正确。H系列是诺瓦的高端处理器产品线，支持4K处理、HDR、多路IO、无缝切换等高级功能，定位高端租赁舞台、指挥调度中心、演播室等。V系列是性价比型，面向中端商显、会议、中小型活动场景。两者差异化定位，覆盖不同市场需求。",
    points: 5,
    knowledgePoint: "综合-产品定位"
  },
  {
    id: "w1week_q16",
    examId: "w1week",
    type: "judge",
    question: "GTS云平台和屏老板软件都是基于云端的远程管理产品。",
    options: [],
    answer: false,
    explanation: "错误。GTS是基于云端的远程管理平台，但屏老板是本地屏幕管理与内容播放软件，安装在本地设备上运行，不是云端产品。两者定位不同：GTS适合远程集中管理多台设备，屏老板适合本地管理单台或少量设备，可配合使用但不是同一类型产品。",
    points: 5,
    knowledgePoint: "综合-软件平台"
  },

  // --- 2道简答题 (每题10分, 共20分) ---

  {
    id: "w1week_q17",
    examId: "w1week",
    type: "short",
    question: "请完整列举诺瓦科技的四大主营产品线，并简要说明各产品线覆盖的产品方向。",
    options: [],
    answer: "LED控制系统,视频处理系统,校正系统,云平台",
    explanation: "诺瓦科技四大主营产品线：1.LED控制系统——包括发送卡（MCTRL独立系列/MSD嵌入系列）和接收卡（MRV系列/A系列），是LED显示控制的核心；2.视频处理系统——包括V系列（性价比型）、H系列（高端型）、TB系列（一体化）、TU系列（场景化）等视频处理器，负责信号处理和格式转换；3.校正系统——逐点亮度/色度校正工具，提升屏体均匀性和显示质量；4.云平台——GTS远程管理平台+屏老板本地管理软件，实现LED屏的远程和本地管理。四大产品线构成完整的LED显示控制解决方案。",
    points: 10,
    knowledgePoint: "综合-诺瓦产品体系"
  },
  {
    id: "w1week_q18",
    examId: "w1week",
    type: "short",
    question: "请简述LED显示屏方案设计中带载计算的主要步骤，并说明每步需要确认的关键信息。",
    options: [],
    answer: "计算屏幕总像素,确认发送卡带载能力,确认接收卡带载能力,确定级联方案",
    explanation: "带载计算的主要步骤：1.计算屏幕总像素数——宽度像素（屏宽mm/像素间距mm）x 高度像素（屏高mm/像素间距mm），这是带载计算的基础数据；2.确认发送卡带载能力——查看所选发送卡型号的最大带载像素数，将屏幕总像素与之对比，总像素超过单卡能力则需多张发送卡；3.确认接收卡带载能力——根据每个LED箱体的像素数和接收卡的单卡带载能力，确定每箱体需要几张接收卡；4.确定级联方案——设计发送卡到接收卡、接收卡之间的网线/光纤连接拓扑，确保数据链路通畅。通过以上步骤确保控制系统带载能力满足屏幕显示需求。",
    points: 10,
    knowledgePoint: "综合-LED方案设计"
  }

];

// Node.js 模块导出（兼容HTML直接引入和Node.js require）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WEEK1_QUESTIONS;
}

// 论坛简介
//title 标题
//subtitle 副标题
//content 内容
const forumIntro = [
    {
        title:'中国企业家博鳌论坛',
        subtitle:'共赴海滨之约 共商发展之机',
        content:`2021中国企业家博鳌论坛以“共谋数字时代 共赢绿色发展”为主题，包括主论坛及学者分享会、平行论坛、中国实干家公开课、品牌品鉴会、品牌夜话、文化交流活动、“冠军友谊赛”等环节。论坛将邀请政府领导、知名经济学家、文化名家和企业家等，深度思考、前瞻判断，剖析中国经济的内生动力，把脉中国经济数字化、绿色发展的高质量发展之路。
        作为中国企业界重要的年度盛会，中国企业家博鳌论坛已连续成功举办五届，成为企业家之间碰撞商业智慧、凝聚商业力量、携手共同发展的重要平台。
        `
    },
    {
        title:'中国财富峰会',
        subtitle:'',
        content:`2021中国企业家博鳌论坛·中国财富峰会以“新格局·新业态·新财富”为主题，在海南博鳌隆重召开。会议邀请一行两会、市场中介机构、上市公司、大型金融公司、产业基金机构以及其他金融机构等各领域的专家、学者及相关负责人共聚博鳌，从财富管理、资产配置、产业发展、品牌建设等方面共话行业未来高质量发展态势。论坛由中国财富传媒集团携手新华社新闻信息中心、新华网、新华社新媒体中心、中国经济信息社、新华每日电讯、半月谈杂志社联合举办。`
    }
]
// 会议日程（总）
//date 日期
//time 时间
//info 内容

const agendaList = [
    {
        date:'12月2日',
        agenda:[
            {
                time:'08:00-17:00',
                info:`注册报到`
            },
            {
                time:'17:00-18:00',
                info:`中国企业家博鳌论坛欢迎夜</br>
                --超级发布会`
            },
            {
                time:'18:00-21:00',
                info:`中国企业家博鳌论坛欢迎夜</br>
                --品牌品鉴会`
            },
            {
                time:'17:30-21:00',
                info:`民族品牌之夜`
            },
        ]
    },
    {
        date: "12月3日",
        agenda: [
          {
            time: "06:30-08:30",
            info: "中国品牌加油·博鳌健康跑",
          },
          {
            time: "08:30-17:30",
            info: "平行论坛一：2021国际黄金市场年度峰会",
          },
          {
            time: "09:00-12:00",
            info: `“冠军友谊赛”`,
          },
          {
            time: "09:00-12:00",
            info: `平行论坛二：2021博鳌数字经济发展论坛`,
          },
          {
            time: "10:00-12:00",
            info: `文化交流活动`,
          },
          {
            time: "13:30-17:00",
            info: `平行论坛三：2021中国品牌新势力发展峰会`,
          },
          {
            time: "09:00-12:00",
            info: `“冠军友谊赛”`,
          },
          {
            time: "09:00-12:00",
            info: `平行论坛二：2021博鳌数字经济发展论坛`,
          },
          {
            time: "14:00-16:30",
            info: `中国实干家公开课`,
          },
          {
            time: "14:00-17:00",
            info: `<span>平行论坛四：“百年荣章 时代有我”2021中国文化发展论坛</span>
            <span>平行论坛五：2021健康未来峰会</span>
            <span>平行论坛六：三产融合赋能乡村振兴暨御福年品牌超级发布会</span>
            <span>平行论坛七：数字经济诚信建设高峰论坛</span>
            `,
          },
          {
            time: "16:30-17:30",
            info: `城市特别发布活动`,
          },
          {
            time: "18:30-20:30",
            info: `品牌品鉴会`,
          },
          {
            time: "21:00-22:30",
            info: `木兰夜话`,
          },
        ],
      },
      {
        date: "12月4日",
        agenda: [
          {
            time: "08:30-09:30",
            info: "主论坛：开幕式及学者分享会",
          },
          {
            time: "09:30-12:00",
            info: "主论坛：中国企业家博鳌论坛圆桌会议",
          },
          {
            time: "14:00-17:30",
            info: `<span>平行论坛一：2021中国新消费发展大会</span>
            <span>平行论坛二：2021汽车数智发展大会  </span>
            <span>平行论坛三：2021中国“双碳”经济建设高峰对话</span>
            <span>平行论坛四：金融科技赋能乡村振兴高峰论坛</span>
            <span>平行论坛五：共同富裕视野下的企业社会责任高峰论坛</span>
            <span>平行论坛六：第四届企业家精神圆桌会议</span>
            <span>平行论坛七：“洞见数字经济 解码直播电商”主题论坛</span>
            `,
          },
          {
            time: "14:00-20:45",
            info: `<span>平行论坛八：中国财富峰会</span>
            <span>中国财富峰会·潮中国之夜</span>
            `,
          },
          {
            time: "17:30-18:30",
            info: "超级发布会",
          },
          {
            time: "18:30-20:30",
            info: "时代摘要之夜",
          },
          {
            time: "21:00-22:30",
            info: "博鳌夜话",
          },
        ],
      },
]

//会议日程摘要（？）
const agendataSummary = `2日-4日 “新华社民族品牌工程•好物故事会”启动专场`

//论坛会议议程
//name 论坛名称
// theme:主题,
//   time:时间,
//   place:地点,
//   organizer:主办单位,
//   coHosted:联合主办,
//   organizer2:承办单位
// agenda 议程
//unitname 单元名称
const meetingList = [
  {
    id:1,
    name:`12月2日</br>民族品牌之夜`,
    info:{
      theme:'潮起博鳌 香醉世界',
      time:'2021年12月2日17:30-21:00',
      place:'海南·博鳌  金湾康斯宾悦度假酒店',
      organizer:'新华社民族品牌工程办公室',
      coHosted:'',
      organizer2:'中国财富网',
      agendaList:[
        {
          unitname:'',
          agenda:[
            {
                time:'18:30-18:35',
                info:`主持人致开场辞`
            },
            {
                time:'18:35-18:40',
                info:`新华社领导致辞`
            },
            {
                time:'18:40-18:50',
                info:`民族品牌企业家致辞`
            },
            {
                time:'18:50-18:55',
                info:`五粮液领导致辞`
            },
            {
                time:'18:55-19:00',
                info:`5产品视频播放`
            },
            {
                time:'19:00-19:30',
                info:`品酒领鉴`
            },
            {
                time:'19:30-21:00',
                info:`祝酒、品鉴交流与餐叙`
            }
          ]
        }

        
    ]
    }
  },
  {
    id:2,
    name:`12月3日</br>国际黄金市场年度峰会`,
    info:{
      theme:'大变局·新格局',
      time:'2021年12月3日8:30-17:30',
      place:'海南康斯宾悦度假酒店',
      organizer:'中国财富传媒集团 中国黄金协会 世界黄金协会 上海黄金交易所 上海期货交易所',
      coHosted:'',
      organizer2:'中国财富网',
      agendaList:[
        {
          unitname:'',
          agenda:[
            {
                time:'08:30-09:00',
                info:`暖场视频  签到`
            },
            {
                time:'09:00-09:20',
                info:`主持人开场  李雅君</br>
                领导致辞</br>
                新华社领导致辞</br>
                一行两会或其他监管层领导讲话</br>
                中国黄金协会会长致辞</br>
                世界黄金协会CEO致辞</br>
                上海黄金交易所领导/上海期货交易所领导致辞（TBD）</br>
                `
            },
            {
                time:'09:20-09:35',
                info:`“变革”（中国）投资论坛</br>
                Evolve China Investment Summit</br>
                主旨演讲</br>
                后疫情时代中国新金融形势及保险资管行业未来发展</br>
                中国保险资产管理业协会党委书记、执行副会长兼秘书长曹德云</br>
                `
            },
            {
                time:'09:35-10:15',
                info:`主旨演讲</br>
                中国宏观形势及政策展望</br>
                东吴证券任首席经济学家 任泽平</br>
                `
            },
            {
                time:'10:15-10:35',
                info:`产品视主旨演讲</br>
                扩表后美联储2022年政策对全球资产的影响</br>
                美国资管机构经济学家</br>
                频播放`
            },
            {
                time:'10:35-11:15',
                info:`主旨演讲</br>
                后疫情时代资产管理行业面临的挑战和机遇</br>
                公募基金代表</br>
                保险资管代表
                `
            },
            {
                time:'11:15-12:00',
                info:`圆桌论坛 - 2022年大类资产配置策略</br>
                主持人：王立新，世界黄金协会中国区CEO</br>
                圆桌嘉宾：美国资管机构经济学家、保险资管代表、基金公司代表、银行资管代表
                `
            },
            {
              time:'12:00-12:20',
              info:`黄金ESG联盟启动仪式or报告发布</br>
              1、演讲：嘉宾（待定）</br>
              2、宣读倡议书</br>
              `
            },
            {
              time:'12:30-14:00',
              info:`自助午餐`
            },
            {
              time:'14:00-15:40',
              info:`主持人开场  赵宇欣</br>
              贵金属价格分析与发展趋势论坛</br>
              主旨演讲</br>
              1、世界黄金协会首席市场策略师 芮强（15分钟）</br>
              2、天风证券首席宏观分析师 宋雪涛（15分钟）</br>
              3、商业银行代表（15分钟）</br>
              4、上海金币投资有限公司总经理 樊飞（15分钟）</br>
              圆桌对话： 著名黄金投资分析师（40分钟）</br>
              主持人： </br>
              同济大学教授、博导、经济与金融系主任钟宁桦</br>
              1、商业银行分析师</br>
              2、期货公司分析师</br>
              3、基金公司分析师</br>
              4、2016届冠军或2020届冠军</br>
              5、中国印钞造币总公司市场部经理 顾剑平</br>
              6、世界铂金投资协会亚太区负责人 邓伟斌</br>
              `
            },
            {
              time:'15:40-16:00',
              info:`茶歇`
            },
            {
              time:'16:00-17:30',
              info:`2021全国行业职业技能竞赛—黄金投资分析师贵金属知识大赛颁奖仪式</br>
              深圳市政府领导致辞</br>
              人社部领导致辞</br>
              中国黄金协会领导致辞</br>
              黄金投资分析师贵金属知识大赛冠军争夺赛</br>
              6名入围选手现场演讲</br>
              5位专家现场评分</br>
              拟邀专家：</br>
              魏本华、宋钰勤、施院长、王立新、皮俊
              `
            },{
              time:'18:00',
              info:`答谢晚宴（内部）`
            }
          ]
        }
      ]
    }
  },
  {
    id:3,
    name:`12月4日</br>“碳达峰 碳中和”绿色经济高峰论坛`,
    info:{
      theme:'“双碳”战略，打造经济新引擎',
      time:'2021年12月4日上午9：30',
      place:'海南·博鳌金湾康斯宾悦度假酒店—多功能厅',
      organizer:'中国财富传媒集团、新华社新闻信息中心',
      coHosted:'',
      organizer2:'运鸿集团股份有限公司',
      agendaList:[
        {
          unitname:'',
          agenda:[
            {
                time:'09:00-09:20',
                info:`嘉宾、媒体签到`
            },
            {
                time:'09:20-09:30',
                info:`嘉宾入场`
            },
            {
                time:'09:30-09:35',
                info:`主持人致开幕词，介绍出席嘉宾`
            },
            {
                time:'09:35-09:40',
                info:`世界生产力科学院院士、湖北省食品安全协会会长、中国运鸿控股董事局主席李玉保致欢迎辞`
            },
            {
                time:'09:40-09:45',
                info:`政府领导讲话`
            },
            {
                time:'09:45-09:50',
                info:`播放全生物降解材料介绍视频`
            },
            {
                time:'09:50-10:00',
                info:`新华社领导致辞`
            },
            {
                time:'10:00-10:20',
                info:`论坛对话一
                主题：聚焦气候变化，探讨“双碳”目标下中国智慧的创新发展之路
                `
            },
            {
                time:'10:20-10:40',
                info:`论坛对话二
                主题：绿色发展助力经济健康可持续，相互协作实现共同富裕
                `
            },
            {
                time:'10:40-11:00',
                info:`现场签约`
            },
            {
                time:'11:00-11:10',
                info:`合影留念`
            }
          ]
        }  
      ]
    }
  },
  {
    id:4,
    name:`12月4日</br>中国财富峰会`,
    info:{
      theme:'新格局·新业态·新财富',
      time:'2021年12月4日14:00-18:00',
      place:'海南·博鳌 金湾康斯宾悦度假酒店',
      organizer:'中国财富传媒集团',
      coHosted:`新华社民族品牌工程办公室 
      新华网 新华社新闻信息中心 中国经济信息社 
      新华社新媒体中心 新华每日电讯 半月谈杂志社
      `,
      organizer2:'中国财富网',
      agendaList:[
        {
          unitname:'',
          agenda:[
            {
                time:'13:30-14:00',
                info:`嘉宾签到，播放宣传片`
            },
            {
                time:'14:00-14:05',
                info:`主持人开场、介绍嘉宾`
            },
          ]
        },
        {
          unitname:'第一单元：致辞',
          agenda:[
            {
                time:'14:05-14:10',
                info:`新华社领导`
            },
            {
                time:'14:10-14:15',
                info:`中国证监会领导致辞（拟邀请）`
            },
            {
                time:'14:15-14:20',
                info:`张燕生 国家发改委学术委员会秘书长（拟邀请）`
            },
            {
                time:'14:20-14:25',
                info:`余孝忠 新华社总经理室常务副总经理，中国财富传媒集团党委书记、董事长、总裁`
            },
            {
                time:'14:25-15:00',
                info:`财富学人演讲：</br>
                陈晓红 中国工程院院士</br>
                `
            },
            {
                time:'15:00-15:30',
                info:`财富企业家演讲：</br>
                董明珠 格力电器董事长（拟邀请）
                `
            },
          ]
        },
        {
          unitname:'第二单元：中国财富传媒集团·“e披露”网上信息披露服务平台发布仪式',
          agenda:[
            {
                time:'15:30-15:45',
                info:`播放产品介绍宣传片、产品发布、合作签约仪式</br>
                发布嘉宾：</br>
                新华社领导</br>
                中国证监会领导</br>
                余孝忠  新华社总经理室常务副总经理，中国财富传媒集团党委书</br>
                记、董事长、总裁</br>
                陈晓红  中国工程院院士</br>
                董明珠  格力电器董事长</br>
                叶国标  中国财富传媒集团党委委员、副总裁、董事，上海证券报</br>
                社有限公司党委书记、董事长</br>
                周  亮  中国财富传媒集团党委委员、副总裁、董事，经济参考报</br>
                社总编辑、党委书记</br>
                匡乐成  中国财富传媒集团党委委员、副总裁、董事，新华出版社社长、党委书记</br>
                蔡国兆  中国证券报党委委员、副总编辑、董事
                `
            },
            {
                time:'15:45-16:00',
                info:`《2021中国人身保险产品研究报告》发布仪式</br>
                报告解读：</br>
                何剑刚 爱选科技联合创始人</br>
                报告首发仪式嘉宾：</br>
                匡乐成   中国财富传媒集团党委委员、副总裁、董事，新华出版社社长、党委书记</br>
                何剑刚  爱选科技联合创始人
                `
            },
          ]
        },
        {
          unitname:'第三单元：高端对话',
          agenda:[
            {
                time:'16:00-16:40',
                info:`高端对话一：“数智化”信息披露与媒体融合助力上市公司高质量发展</br>

                主持人：叶国标 中国财富传媒集团党委委员、副总裁、董事，上
                海证券报社有限公司党委书记、董事长</br>
                对话嘉宾：</br>
                北京证券交易所相关领导（拟邀请）</br>
                招商证券股份有限公司相关领导（拟邀请）</br>
                五粮液集团股份公司相关领导</br>
                尹  烨  华大集团CEO（拟邀请）</br>
                陈涵霖  湖北恒隆集团董事会主席</br>
                王柏华  浪潮集团执行总裁（拟邀请）</br>
                武超则  中信建投现任研究所所长兼TMT首席</br>
                滕  泰  万博新经济研究院院长
                …… 
                `
            },
            {
                time:'16:40-17:20',
                info:`高端对话二：疫情背景下数字经济未来发展趋势</br>

                主持人：周  亮 中国财富传媒集团党委委员、副总裁、董事，经济
                参考报社总编辑、党委书记</br>
                对话嘉宾：</br>
                李如东  中信百信银行股份有限公司董事长</br>
                李  伟  趣链科技CEO
                ……                 
                `
            },
            {
                time:'17:20-18:00',
                info:`高端对话三：新发展动能如何创新驱动未来产业升级？</br>

                主持人：匡乐成  中国财富传媒集团党委委员、副总裁、董事，新华
                出版社社长、党委书记</br>
                对话嘉宾：</br>
                万怡挺  好未来集团执行总裁 </br>
                宁  浩  上海兴动实业有限公司董事长</br>
                李学周  中优盛恒实业集团有限公司董事长</br>
                猿辅导相关领导
                ……
                `
            },
            {
                time:'18:00',
                info:`活动结束`
            }
          ]
        }  
      ]
    }
  }
]

export {
    forumIntro,
    agendaList,
    agendataSummary,
    meetingList
}
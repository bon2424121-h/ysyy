
import { Chapter, CourseInfo } from './types';

export const COURSE_INFO: CourseInfo = {
  name: "影视语言与剪辑",
  code: "o021601",
  credits: "48/3",
  prerequisites: ["视觉叙事", "三维设计基础", "数字摄影"],
  type: "必修",
  semester: "第五学期",
  objective: "本课程是学生将来从事艺术设计所必须具备的重要专业设计能力之一。通过学习，学生要掌握影视画面语言、镜头语言、声音语言及剪辑理论，并熟练运用 Premiere 进行创作。"
};

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "绪论",
    hours: 2,
    content: ["影视语言的课程框架体系", "什么是影视语言", "影视语言的构成元素"],
    requirements: "掌握课程总体框架、艺术特性、基本元素和概念。",
    focus: "影视视听语言概念，构成元素。",
    difficulty: "课程框架体系与各部分内容之间的关系。",
    ideology: "影片赏析：《流浪地球》。感悟家国情怀，培养民族自豪感。",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    movieUrl: "https://www.bilibili.com/bangumi/play/ss26284"
  },
  {
    id: 2,
    title: "影视画面语言",
    hours: 8,
    content: ["造型元素", "实体元素", "构图形式"],
    requirements: "掌握造型元素（光线、色彩等）、实体元素及构图形式。",
    focus: "造型元素 with 实体元素的内容。",
    difficulty: "构图形式的审美原则。",
    ideology: "影片赏析：《布达佩斯大饭店》。分析美学特征，发掘创造力。",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    movieUrl: "https://v.qq.com/x/cover/mzc002008v8m2t4.html"
  },
  {
    id: 3,
    title: "影视镜头语言",
    hours: 12,
    content: ["什么是影视镜头", "镜头景别", "运动镜头", "镜头角度", "镜头轴线", "场面调度"],
    requirements: "了解景别、运动、角度与轴线，掌握不同场面调度方式。",
    focus: "镜头语言的多种变化形式。",
    difficulty: "运动镜头拍摄要点及场面调度方式。",
    ideology: "影片赏析：《我不是药神》。分析镜头语言，培养人道主义情怀。",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
    movieUrl: "https://www.iqiyi.com/v_19rr1zb0m8.html"
  },
  {
    id: 4,
    title: "影视声音语言",
    hours: 6,
    content: ["影视声音概述", "声音的三种形式", "声画关系"],
    requirements: "理解人声、音响、音乐的重要性及与画面的关系。",
    focus: "影视声音的各组成部分。",
    difficulty: "声音成分的艺术运用及其与画面的联系。",
    ideology: "理解声画同步的高质量要求。",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "影视剪辑理论",
    hours: 4,
    content: ["剪辑基础", "蒙太奇思维", "蒙太奇表现形式"],
    requirements: "掌握剪辑流程、意义、蒙太奇相关理论及其表现形式。",
    focus: "剪辑一般流程与基本原理技巧。",
    difficulty: "后期剪辑的蒙太奇相关理论。",
    ideology: "影片赏析：《盗梦空间》。分析叙事逻辑，提升逻辑思维能力。",
    image: "https://images.unsplash.com/photo-1598899303450-230eb195da3a?auto=format&fit=crop&q=80&w=800",
    movieUrl: "https://www.bilibili.com/bangumi/play/ss12044"
  },
  {
    id: 6,
    title: "Premiere 的使用与实践",
    hours: 16,
    content: ["PR初步使用", "基本编辑", "字幕叠加", "音频处理", "转场特效", "视频特效", "综合运用"],
    requirements: "基本掌握 PR 的操作及应用。",
    focus: "界面认识、字幕创建、音频编辑等。",
    difficulty: "针对不同素材综合运用转场与特效。",
    ideology: "综合训练：《大决战》。通过剪辑历史事件，树立正确历史观。",
    image: "https://images.unsplash.com/photo-1574717024458-388ee7155188?auto=format&fit=crop&q=80&w=800"
  }
];

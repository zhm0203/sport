export interface User {
  id: string;
  nickname: string;
  avatar: string;
  level: number;
  exp: number;
  nextLevelExp: number;
  totalSteps: number;
  todaySteps: number;
  targetSteps: number;
  calories: number;
  targetCalories: number;
  streakDays: number;
  bestStreak: number;
  badges: Badge[];
  unlockedLocations: string[];
  fitnessBuddy: string;
  joinDate: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAt?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  progress?: number;
  required?: number;
}

export interface Location {
  id: string;
  name: string;
  position: { x: number; y: number };
  requiredSteps: number;
  unlocked: boolean;
  description: string;
  funFact: string;
  icon: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  expReward: number;
  type: 'steps' | 'checkin' | 'social' | 'ai';
  completed: boolean;
  deadline?: string;
}

export interface Buddy {
  id: string;
  nickname: string;
  avatar: string;
  level: number;
  todaySteps: number;
  streakDays: number;
  sportsType: string;
  matchScore: number;
  isOnline: boolean;
  lastActive: string;
}

export interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: string;
  type?: 'text' | 'motivation' | 'suggestion';
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  icon: string;
  cost: number;
  stock: number;
  category: 'equipment' | 'service' | 'virtual' | 'coupon';
}

export const mockUser: User = {
  id: 'user_001',
  nickname: '运动达人小王',
  avatar: '👨‍💻',
  level: 12,
  exp: 3450,
  nextLevelExp: 4000,
  totalSteps: 156780,
  todaySteps: 8523,
  targetSteps: 10000,
  calories: 320,
  targetCalories: 400,
  streakDays: 7,
  bestStreak: 15,
  fitnessBuddy: 'ai_buddy_001',
  joinDate: '2024-01-01',
  badges: [],
  unlockedLocations: []
};

export const mockBadges: Badge[] = [
  {
    id: 'badge_001',
    name: '初次打卡',
    icon: '🎯',
    description: '完成第一次运动打卡',
    unlockedAt: '2024-01-01',
    rarity: 'common'
  },
  {
    id: 'badge_002',
    name: '七日连胜',
    icon: '🔥',
    description: '连续打卡7天',
    unlockedAt: '2024-01-08',
    rarity: 'common'
  },
  {
    id: 'badge_003',
    name: '千里之行',
    icon: '🏃',
    description: '累计步数达到100公里',
    rarity: 'rare',
    progress: 65,
    required: 100000
  },
  {
    id: 'badge_004',
    name: '社交达人',
    icon: '🤝',
    description: '成功匹配5个运动搭子',
    rarity: 'common',
    progress: 3,
    required: 5
  },
  {
    id: 'badge_005',
    name: '早起鸟儿',
    icon: '🌅',
    description: '在早上6点前完成打卡',
    rarity: 'rare',
    progress: 0,
    required: 1
  },
  {
    id: 'badge_006',
    name: '夜猫子',
    icon: '🌙',
    description: '在晚上11点后完成运动',
    unlockedAt: '2024-01-15',
    rarity: 'rare'
  },
  {
    id: 'badge_007',
    name: '校园探索者',
    icon: '🗺️',
    description: '解锁校园内10个地点',
    rarity: 'epic',
    progress: 4,
    required: 10
  },
  {
    id: 'badge_008',
    name: '自律王者',
    icon: '👑',
    description: '连续打卡30天',
    rarity: 'epic',
    progress: 7,
    required: 30
  },
  {
    id: 'badge_009',
    name: 'AI密友',
    icon: '🤖',
    description: '与AI搭子聊天超过100次',
    rarity: 'rare',
    progress: 45,
    required: 100
  },
  {
    id: 'badge_010',
    name: '校园传奇',
    icon: '⭐',
    description: '等级达到50级',
    rarity: 'legendary',
    progress: 12,
    required: 50
  },
  {
    id: 'badge_011',
    name: '燃烧吧脂肪',
    icon: '🔥',
    description: '累计消耗卡路里达到10000',
    rarity: 'epic',
    progress: 4560,
    required: 10000
  },
  {
    id: 'badge_012',
    name: '步行诗人',
    icon: '📚',
    description: '边走路边听完10本有声书',
    rarity: 'common',
    progress: 0,
    required: 10
  }
];

export const mockLocations: Location[] = [
  {
    id: 'loc_001',
    name: '图书馆',
    position: { x: 50, y: 25 },
    requiredSteps: 10000,
    unlocked: true,
    description: '知识的殿堂，安静的阅读空间',
    funFact: '图书馆藏书超过200万册，是校园最受欢迎的自习地点',
    icon: '📚'
  },
  {
    id: 'loc_002',
    name: '体育馆',
    position: { x: 75, y: 55 },
    requiredSteps: 25000,
    unlocked: true,
    description: '室内运动圣地，各类球馆齐全',
    funFact: '体育馆拥有标准篮球场、羽毛球场和游泳池',
    icon: '🏟️'
  },
  {
    id: 'loc_003',
    name: '食堂',
    position: { x: 25, y: 45 },
    requiredSteps: 15000,
    unlocked: true,
    description: '美食聚集地，能量补给站',
    funFact: '食堂每天供应超过5000份餐食，菜品多达100种',
    icon: '🍜'
  },
  {
    id: 'loc_004',
    name: '操场',
    position: { x: 60, y: 75 },
    requiredSteps: 30000,
    unlocked: true,
    description: '标准跑道，跑步爱好者的天堂',
    funFact: '操场跑道一圈400米，曾举办过校级运动会',
    icon: '🏃'
  },
  {
    id: 'loc_005',
    name: '游泳馆',
    position: { x: 80, y: 35 },
    requiredSteps: 40000,
    unlocked: false,
    description: '室内恒温泳池，四季皆可畅游',
    funFact: '游泳馆水温恒定28°C，配备专业救生员',
    icon: '🏊'
  },
  {
    id: 'loc_006',
    name: '篮球场',
    position: { x: 35, y: 70 },
    requiredSteps: 35000,
    unlocked: false,
    description: '户外篮球场，激情对抗',
    funFact: '篮球场共有8个全场，每天晚间开放至22点',
    icon: '🏀'
  },
  {
    id: 'loc_007',
    name: '网球场',
    position: { x: 85, y: 65 },
    requiredSteps: 50000,
    unlocked: false,
    description: '专业网球场，技巧比拼',
    funFact: '网球场拥有6片标准场地，曾举办省级大学生网球赛',
    icon: '🎾'
  },
  {
    id: 'loc_008',
    name: '健身中心',
    position: { x: 15, y: 30 },
    requiredSteps: 60000,
    unlocked: false,
    description: '专业健身器材，塑造完美体型',
    funFact: '健身中心配备进口器械，有专业教练指导',
    icon: '💪'
  },
  {
    id: 'loc_009',
    name: '羽毛球馆',
    position: { x: 45, y: 60 },
    requiredSteps: 45000,
    unlocked: false,
    description: '室内羽毛球馆，灵活对抗',
    funFact: '羽毛球馆有12片场地，是学校最热门的运动场馆',
    icon: '🏸'
  },
  {
    id: 'loc_010',
    name: '足球场',
    position: { x: 20, y: 80 },
    requiredSteps: 55000,
    unlocked: false,
    description: '标准足球场，团队竞技',
    funFact: '足球场草坪采用天然草皮，维护人员每天精心打理',
    icon: '⚽'
  },
  {
    id: 'loc_011',
    name: '艺术中心',
    position: { x: 65, y: 20 },
    requiredSteps: 70000,
    unlocked: false,
    description: '文艺气息浓厚，陶冶情操',
    funFact: '艺术中心定期举办音乐会、画展等文化活动',
    icon: '🎨'
  },
  {
    id: 'loc_012',
    name: '樱花大道',
    position: { x: 50, y: 50 },
    requiredSteps: 80000,
    unlocked: false,
    description: '校园最美风景线，春季赏樱胜地',
    funFact: '樱花大道两侧种有100棵樱花树，每年3-4月盛开',
    icon: '🌸'
  }
];

export const mockDailyTasks: Task[] = [
  {
    id: 'task_001',
    title: '今日步数',
    description: '完成今日步数目标',
    target: 10000,
    current: 8523,
    expReward: 50,
    type: 'steps',
    completed: false
  },
  {
    id: 'task_002',
    title: '完成打卡',
    description: '记录今日运动并打卡',
    target: 1,
    current: 0,
    expReward: 30,
    type: 'checkin',
    completed: false
  },
  {
    id: 'task_003',
    title: '与AI搭子互动',
    description: '和AI运动搭子聊天或获取建议',
    target: 1,
    current: 1,
    expReward: 20,
    type: 'ai',
    completed: true
  },
  {
    id: 'task_004',
    title: '查看搭子动态',
    description: '浏览至少3个运动搭子的动态',
    target: 3,
    current: 2,
    expReward: 15,
    type: 'social',
    completed: false
  }
];

export const mockWeeklyTasks: Task[] = [
  {
    id: 'weekly_001',
    title: '本周累计步数',
    description: '本周步数达到70000步',
    target: 70000,
    current: 52340,
    expReward: 200,
    type: 'steps',
    completed: false
  },
  {
    id: 'weekly_002',
    title: '连续打卡',
    description: '本周每日打卡',
    target: 7,
    current: 5,
    expReward: 150,
    type: 'checkin',
    completed: false
  }
];

export const mockBuddies: Buddy[] = [
  {
    id: 'buddy_001',
    nickname: '跑步爱好者小李',
    avatar: '🏃',
    level: 15,
    todaySteps: 12340,
    streakDays: 12,
    sportsType: '跑步',
    matchScore: 95,
    isOnline: true,
    lastActive: '刚刚'
  },
  {
    id: 'buddy_002',
    nickname: '健身达人阿杰',
    avatar: '💪',
    level: 18,
    todaySteps: 6540,
    streakDays: 25,
    sportsType: '健身房训练',
    matchScore: 88,
    isOnline: true,
    lastActive: '5分钟前'
  },
  {
    id: 'buddy_003',
    nickname: '篮球少女小雨',
    avatar: '🏀',
    level: 10,
    todaySteps: 9870,
    streakDays: 8,
    sportsType: '篮球',
    matchScore: 82,
    isOnline: false,
    lastActive: '2小时前'
  },
  {
    id: 'buddy_004',
    nickname: '游泳健将小明',
    avatar: '🏊',
    level: 20,
    todaySteps: 4500,
    streakDays: 30,
    sportsType: '游泳',
    matchScore: 75,
    isOnline: true,
    lastActive: '1小时前'
  }
];

export const mockRewards: Reward[] = [
  {
    id: 'reward_001',
    name: '运动毛巾',
    description: '吸汗速干运动毛巾',
    icon: '🧣',
    cost: 500,
    stock: 50,
    category: 'equipment'
  },
  {
    id: 'reward_002',
    name: '瑜伽垫',
    description: '加厚防滑瑜伽垫',
    icon: '🧘',
    cost: 800,
    stock: 30,
    category: 'equipment'
  },
  {
    id: 'reward_003',
    name: '运动水壶',
    description: '便携式运动水壶600ml',
    icon: '🍼',
    cost: 300,
    stock: 100,
    category: 'equipment'
  },
  {
    id: 'reward_004',
    name: '场馆优先预约',
    description: '体育馆场地优先预约权',
    icon: '🎫',
    cost: 200,
    stock: 999,
    category: 'service'
  },
  {
    id: 'reward_005',
    name: '限定头像框',
    icon: '🖼️',
    description: '校园动力限定头像框',
    cost: 150,
    stock: 500,
    category: 'virtual'
  },
  {
    id: 'reward_006',
    name: '运动品牌优惠券',
    description: 'Nike/Adidas 9折券',
    icon: '🎟️',
    cost: 100,
    stock: 200,
    category: 'coupon'
  },
  {
    id: 'reward_007',
    name: '蛋白粉',
    description: '乳清蛋白粉450g',
    icon: '🥤',
    cost: 1200,
    stock: 20,
    category: 'equipment'
  },
  {
    id: 'reward_008',
    name: '运动手套',
    description: '防滑透气运动手套',
    icon: '🧤',
    cost: 250,
    stock: 80,
    category: 'equipment'
  }
];

export const mockAIResponses = {
  greeting: [
    '早上好！今天的运动目标是什么？☀️',
    '新的一天开始了，让我们一起动起来吧！💪',
    '早起的鸟儿有虫吃，快来打卡吧！🌅'
  ],
  motivation: [
    '你已经很棒了！继续保持，明天我们一起努力！💪',
    '每一步都是进步，你比昨天的自己更强了！🌟',
    '运动不只是为了数字，更是爱自己的方式。今天哪怕只走100步也是进步！🌱'
  ],
  encouragement: [
    '不要放弃，你离目标只差一点点了！🔥',
    '研究表明，坚持运动的人更容易保持好心情。再坚持一下！📈',
    '你已经连续运动{streak}天了，太厉害了！继续保持这个势头！⭐'
  ],
  suggestions: [
    '今天天气不错，推荐去操场跑步哦！记得补充水分~🏃',
    '久坐对身体不好，每小时站起来走动5分钟吧~🚶',
    '运动后记得拉伸，可以减少肌肉酸痛哦~🤸'
  ],
  celebration: [
    '恭喜你解锁新徽章！你的努力得到了回报！🎉',
    '太棒了！你今天完成了所有任务！你是最棒的！🏆',
    '等级提升了！你已经成为运动达人了！⭐'
  ]
};

export const mockLeaderboard = [
  { rank: 1, nickname: '跑步狂人张三', steps: 234560, avatar: '🏃', level: 25 },
  { rank: 2, nickname: '健身女王李四', steps: 198340, avatar: '💪', level: 23 },
  { rank: 3, nickname: '运动达人小王', steps: 156780, avatar: '👨‍💻', level: 12 },
  { rank: 4, nickname: '游泳健将王五', steps: 145670, avatar: '🏊', level: 20 },
  { rank: 5, nickname: '篮球少年赵六', steps: 134560, avatar: '🏀', level: 18 },
  { rank: 6, nickname: '瑜伽仙子小红', steps: 123450, avatar: '🧘', level: 15 },
  { rank: 7, nickname: '足球小子刘七', steps: 112340, avatar: '⚽', level: 14 },
  { rank: 8, nickname: '网球高手陈八', steps: 101230, avatar: '🎾', level: 16 },
  { rank: 9, nickname: '羽毛球达人周九', steps: 90120, avatar: '🏸', level: 13 },
  { rank: 10, nickname: '排球女王吴十', steps: 89010, avatar: '🏐', level: 12 }
];

export const weeklyStepsData = [
  { day: '周一', steps: 9234 },
  { day: '周二', steps: 10456 },
  { day: '周三', steps: 8765 },
  { day: '周四', steps: 11234 },
  { day: '周五', steps: 7654 },
  { day: '周六', steps: 12890 },
  { day: '周日', steps: 8523 }
];

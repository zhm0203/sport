# 校园动力 (CampusFit) - 技术架构文档

## 1. 技术栈概览

### 1.1 核心技术选型
- **前端框架**: React 18.2+ with TypeScript
- **样式方案**: Tailwind CSS 3.4+
- **动画库**: Framer Motion 10+
- **图标库**: Lucide React
- **构建工具**: Vite 5+
- **包管理**: npm

### 1.2 项目结构
```
src/
├── components/          # 可复用组件
│   ├── ui/              # 基础UI组件
│   ├── dashboard/       # 首页仪表板组件
│   ├── gamification/    # 游戏化组件
│   ├── map/             # 地图组件
│   ├── social/          # 社交组件
│   ├── ai-buddy/        # AI搭子组件
│   └── task/            # 任务组件
├── pages/               # 页面组件
├── hooks/               # 自定义Hooks
├── data/                # Mock数据
├── types/               # TypeScript类型定义
├── utils/               # 工具函数
├── styles/              # 全局样式
└── App.tsx              # 主应用入口

```

## 2. 组件架构

### 2.1 页面组件
| 页面 | 路由 | 功能描述 |
|------|------|----------|
| HomePage | / | 运动数据仪表板 |
| GrowthPage | /growth | 等级/EXP/徽章系统 |
| MapPage | /map | 校园地图探索 |
| BuddyPage | /buddy | 社交匹配与搭子 |
| TaskPage | /tasks | 任务中心与奖励 |
| AIAssistantPage | /ai | AI运动搭子对话 |

### 2.2 核心组件列表
```
首页组件
├── DashboardHeader          # 顶部用户信息
├── TodayStatsCard           # 今日数据卡片
├── StepsProgressRing        # 步数环形进度
├── CalorieCard              # 卡路里统计
├── StreakCard               # 连续打卡展示
├── QuickActions             # 快捷操作入口
└── AIMiniBuddy              # AI搭子悬浮球

成长页组件
├── LevelDisplay             # 等级展示
├── EXPProgressBar           # 经验值进度条
├── BadgeGrid                # 徽章网格
├── BadgeCard                # 单个徽章卡片
├── AchievementStats         # 成就统计
└── NextGoalPreview          # 下一目标预览

地图页组件
├── CampusMap                # 校园地图画布
├── LocationMarker           # 地标标记
├── LocationDetail           # 地标详情弹窗
├── MapLegend                # 地图图例
└── CollectedLocations       # 已收集地标列表

搭子页组件
├── BuddyMatchList           # 匹配列表
├── BuddyCard                # 搭子卡片
├── TeamSection              # 组队区域
├── Leaderboard              # 排行榜
└── InviteModal              # 邀请弹窗

任务页组件
├── DailyTasks               # 每日任务
├── WeeklyChallenges         # 每周挑战
├── RewardsCatalog           # 奖励目录
├── RewardCard               # 奖励卡片
└── ExchangeModal            # 兑换弹窗

AI搭子组件
├── ChatInterface            # 对话界面
├── MessageBubble            # 消息气泡
├── AIMotivation             # AI激励卡片
├── QuickReplies             # 快捷回复
└── ConversationHistory      # 历史对话
```

## 3. 数据流设计

### 3.1 状态管理
使用 React Context + useReducer 管理全局状态：
- **UserContext**: 用户信息、成长数据
- **ExerciseContext**: 运动数据、步数记录
- **SocialContext**: 社交关系、搭子列表
- **TaskContext**: 任务进度、奖励状态

### 3.2 Mock 数据结构
```typescript
// 用户数据
const mockUser: User = {
  id: 'user_001',
  nickname: '运动达人小王',
  avatar: '/avatars/avatar_1.png',
  level: 12,
  exp: 3450,
  nextLevelExp: 4000,
  totalSteps: 156780,
  todaySteps: 8523,
  streakDays: 7,
  badges: [...],
  unlockedLocations: ['library', 'gym'],
  fitnessBuddy: 'ai_buddy_001'
}

// 运动数据
const mockExerciseData = {
  today: { steps: 8523, calories: 320, distance: 5.2 },
  weekly: [...],
  monthly: [...]
}

// 徽章数据
const mockBadges: Badge[] = [
  { id: 'badge_001', name: '初次打卡', icon: '🎯', unlocked: true },
  { id: 'badge_002', name: '七日连胜', icon: '🔥', unlocked: true },
  { id: 'badge_003', name: '百公里达人', icon: '🏃', unlocked: false, progress: 65 }
]

// 地图地标
const mockLocations: Location[] = [
  { id: 'loc_001', name: '图书馆', position: { x: 50, y: 30 }, requiredSteps: 10000, unlocked: true },
  { id: 'loc_002', name: '体育馆', position: { x: 75, y: 60 }, requiredSteps: 25000, unlocked: true }
]

// 每日任务
const mockDailyTasks: Task[] = [
  { id: 'task_001', title: '今日步数', target: 10000, current: 8523, reward: 50 },
  { id: 'task_002', title: '完成打卡', current: 0, reward: 30 },
  { id: 'task_003', title: '与AI搭子对话', current: 1, reward: 20 }
]

// AI对话预设
const mockAIResponses = [
  { keywords: ['加油', '坚持'], response: '你已经很棒了！继续保持，明天我们一起努力！💪' },
  { keywords: ['累了', '不想动'], response: '运动不只是为了数字，更是爱自己的方式。今天哪怕只走100步也是进步！🌱' }
]
```

## 4. 样式系统

### 4.1 Tailwind CSS 配置
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#10B981',
        accent: '#F59E0B',
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          border: '#334155'
        }
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Noto Sans SC', 'sans-serif'],
        mono: ['Orbitron', 'monospace']
      }
    }
  }
}
```

### 4.2 CSS 变量系统
```css
:root {
  --color-primary: #6366F1;
  --color-secondary: #10B981;
  --color-accent: #F59E0B;
  --color-bg-dark: #0F172A;
  --color-bg-card: #1E293B;
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
  
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  
  --shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3);
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3);
}
```

## 5. 动画系统

### 5.1 动画规范
- **页面切换**: opacity 0→1, translateY 20px→0, duration 300ms
- **按钮交互**: scale 1→0.95, duration 150ms
- **数据更新**: 数字滚动动画, duration 800ms
- **徽章解锁**: scale 0→1.2→1, rotate 0→360deg, duration 600ms
- **升级特效**: 粒子效果 + 光晕扩散, duration 1000ms

### 5.2 Framer Motion 示例
```typescript
// 页面入场动画
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

// 卡片悬停效果
const cardHover = {
  scale: 1.02,
  boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)'
}
```

## 6. 性能优化

### 6.1 优化策略
- **代码分割**: 使用 React.lazy 进行路由级代码分割
- **图片优化**: 使用 WebP 格式，懒加载图片
- **动画优化**: 使用 CSS transform 和 opacity，启用 GPU 加速
- **状态优化**: 合理使用 useMemo 和 useCallback
- **Tree Shaking**: 移除未使用的代码和样式

### 6.2 性能指标
- Lighthouse Performance Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 7. 可访问性

### 7.1 WCAG 2.1 AA 标准
- 所有交互元素可键盘访问
- 色彩对比度符合标准（4.5:1）
- 图片包含 alt 属性
- 表单标签关联正确
- ARIA 标签使用正确

### 7.2 移动端适配
- 触摸目标最小 44x44px
- 支持手势操作
- 适配刘海屏和圆角屏
- 支持深色模式切换

## 8. 部署方案

### 8.1 开发环境
```bash
npm install
npm run dev    # 启动开发服务器
npm run build  # 构建生产版本
```

### 8.2 生产部署
- 构建输出到 `dist/` 目录
- 可部署到任意静态服务器
- 支持 GitHub Pages、Vercel、Netlify
- 可嵌入微信小程序 web-view

### 8.3 预览链接
开发完成后，通过本地服务器预览：
```
http://localhost:5173
```

---
**文档版本**: v1.0  
**更新日期**: 2024年1月  
**技术负责人**: AI Assistant

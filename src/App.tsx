import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Trophy,
  Map,
  Users,
  CheckSquare,
  Zap,
  Target,
  Flame,
  TrendingUp,
  Award,
  Star,
  ChevronRight,
  MessageCircle,
  Gift,
  Calendar,
  Footprints,
  Wind,
  Clock,
  MapPin,
  Sparkles,
  Send,
  Heart,
  TrendingDown,
  Trophy as TrophyIcon,
  Crown,
  Shield,
  Swords,
  ThumbsUp,
  Coffee,
  Dumbbell,
  Bike,
  Waves,
  TreePine,
  Building2,
  Building,
  Landmark,
  Warehouse,
  Tent,
  Palette,
  Flower2,
  Gamepad2,
  Wallet,
  CreditCard,
  Shirt,
  Bottle,
  Timer,
  UsersRound,
  Bell,
  Settings,
  ChevronDown,
  Plus,
  X,
  User,
  BarChart3,
  Activity,
  MessageSquare,
  Bot,
  Sun,
  Moon,
  Coffee as CoffeeIcon,
  Dumbbell as DumbbellIcon,
  Brain,
  Sparkle,
  PartyPopper,
  Zap as ZapIcon,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  Circle,
  Star as StarIcon,
  Lock,
  Unlock
} from 'lucide-react';
import {
  mockUser,
  mockBadges,
  mockLocations,
  mockDailyTasks,
  mockWeeklyTasks,
  mockBuddies,
  mockRewards,
  mockAIResponses,
  mockLeaderboard,
  weeklyStepsData
} from './data/mockData';

type TabType = 'home' | 'growth' | 'map' | 'buddy' | 'tasks';
type PageType = TabType | 'ai-assistant' | 'rewards';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [user] = useState(mockUser);
  const [badges] = useState(mockBadges);
  const [locations] = useState(mockLocations);
  const [dailyTasks] = useState(mockDailyTasks);
  const [weeklyTasks] = useState(mockWeeklyTasks);
  const [buddies] = useState(mockBuddies);
  const [rewards] = useState(mockRewards);
  const [messages, setMessages] = useState<Array<{ id: string; content: string; isAI: boolean; type?: string }>>([
    { id: '1', content: '嗨！我是你的AI运动搭子Fitty！今天过得怎么样？要不要一起制定今天的运动计划？💪', isAI: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showAIBuddy, setShowAIBuddy] = useState(false);
  const [userExp, setUserExp] = useState(mockUser.exp);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserExp(prev => {
        if (prev >= mockUser.nextLevelExp) {
          return prev;
        }
        return prev + Math.floor(Math.random() * 3);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const expProgress = (userExp / mockUser.nextLevelExp) * 100;
  const unlockedBadges = badges.filter(b => b.unlockedAt);
  const lockedBadges = badges.filter(b => !b.unlockedAt);
  const unlockedLocations = locations.filter(l => l.unlocked);
  const completedTasks = dailyTasks.filter(t => t.completed).length;

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg = { id: Date.now().toString(), content: inputMessage, isAI: false };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');

    setTimeout(() => {
      const responses = [
        mockAIResponses.motivation[Math.floor(Math.random() * mockAIResponses.motivation.length)],
        mockAIResponses.suggestions[Math.floor(Math.random() * mockAIResponses.suggestions.length)],
        mockAIResponses.encouragement[Math.floor(Math.random() * mockAIResponses.encouragement.length)]
      ];
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        isAI: true
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  const renderHomePage = () => (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              早安，{user.nickname} 👋
            </h1>
            <p className="text-slate-400 text-sm">
              今天也要元气满满地运动哦！
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs text-slate-400">等级</div>
              <div className="text-xl font-bold text-gradient font-mono">Lv.{user.level}</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-lg">
              {user.avatar}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="card-glow rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-slate-400 text-sm">连续打卡</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {user.streakDays}
              <span className="text-sm text-slate-400 ml-1">天</span>
            </div>
            <div className="text-xs text-slate-500">最佳: {user.bestStreak}天</div>
          </div>

          <div className="card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-slate-400 text-sm">今日EXP</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {userExp}
              <span className="text-sm text-slate-400 ml-1">/ {user.nextLevelExp}</span>
            </div>
            <div className="w-full bg-dark-border rounded-full h-2 mt-2">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${expProgress}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>

        <div className="card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">今日运动</h3>
              <p className="text-sm text-slate-400">
                {user.todaySteps.toLocaleString()} / {user.targetSteps.toLocaleString()} 步
              </p>
            </div>
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#334155"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={2 * Math.PI * 40 * (1 - user.todaySteps / user.targetSteps)}
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - user.todaySteps / user.targetSteps) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Footprints className="w-6 h-6 text-primary mb-1" />
                <span className="text-lg font-bold text-white">
                  {Math.round((user.todaySteps / user.targetSteps) * 100)}%
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-dark-bg rounded-xl p-3 text-center">
              <Wind className="w-5 h-5 text-green-500 mx-auto mb-1" />
              <div className="text-lg font-bold text-white">{user.calories}</div>
              <div className="text-xs text-slate-400">千卡</div>
            </div>
            <div className="bg-dark-bg rounded-xl p-3 text-center">
              <TrendingUp className="w-5 h-5 text-blue-500 mx-auto mb-1" />
              <div className="text-lg font-bold text-white">5.2</div>
              <div className="text-xs text-slate-400">公里</div>
            </div>
            <div className="bg-dark-bg rounded-xl p-3 text-center">
              <Clock className="w-5 h-5 text-purple-500 mx-auto mb-1" />
              <div className="text-lg font-bold text-white">45</div>
              <div className="text-xs text-slate-400">分钟</div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">本周步数趋势</h3>
          <span className="text-sm text-slate-400">共 {(weeklyStepsData.reduce((a, b) => a + b.steps, 0) / 1000).toFixed(1)}k 步</span>
        </div>
        <div className="flex items-end justify-between h-32 gap-2">
          {weeklyStepsData.map((day, index) => {
            const maxSteps = Math.max(...weeklyStepsData.map(d => d.steps));
            const height = (day.steps / maxSteps) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <motion.div
                  className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                <span className="text-xs text-slate-400 mt-2">{day.day}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentPage('ai-assistant')}
          className="card-glow rounded-2xl p-5 text-left"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">AI运动搭子</h4>
              <p className="text-xs text-slate-400">获取个性化建议</p>
            </div>
          </div>
          <p className="text-sm text-slate-300">有什么运动问题都可以问我哦~</p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentPage('rewards')}
          className="card rounded-2xl p-5 text-left"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">奖励中心</h4>
              <p className="text-xs text-slate-400">兑换专属好礼</p>
            </div>
          </div>
          <p className="text-sm text-slate-300">完成任务获取积分兑换奖励</p>
        </motion.button>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">今日任务</h3>
          <span className="text-sm text-slate-400">{completedTasks}/{dailyTasks.length} 完成</span>
        </div>
        <div className="space-y-3">
          {dailyTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 p-3 bg-dark-bg rounded-xl"
            >
              {task.completed ? (
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-6 h-6 text-slate-500 flex-shrink-0" />
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-medium ${task.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
                    {task.title}
                  </span>
                  <span className="text-xs text-primary">+{task.expReward} EXP</span>
                </div>
                {task.type === 'steps' && (
                  <div className="w-full bg-dark-border rounded-full h-1.5">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                      style={{ width: `${(task.current / task.target) * 100}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderGrowthPage = () => (
    <motion.div
      key="growth"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                <Crown className="w-12 h-12 text-yellow-500" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 shadow-lg">
              <Star className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-1">
              Lv.{user.level}
            </h1>
            <p className="text-slate-400 mb-2">
              {user.exp} / {user.nextLevelExp} EXP
            </p>
            <div className="w-full bg-dark-border rounded-full h-3">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${expProgress}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-dark-bg rounded-xl p-3 text-center">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">{user.totalSteps.toLocaleString()}</div>
            <div className="text-xs text-slate-400">累计步数</div>
          </div>
          <div className="bg-dark-bg rounded-xl p-3 text-center">
            <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">{user.bestStreak}</div>
            <div className="text-xs text-slate-400">最佳连续</div>
          </div>
          <div className="bg-dark-bg rounded-xl p-3 text-center">
            <Award className="w-6 h-6 text-purple-500 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">{unlockedBadges.length}</div>
            <div className="text-xs text-slate-400">徽章数</div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">我的徽章</h3>
          <span className="text-sm text-slate-400">{unlockedBadges.length}/{badges.length}</span>
        </div>

        <div className="mb-6">
          <h4 className="text-sm text-slate-400 mb-3">已解锁</h4>
          <div className="grid grid-cols-4 gap-3">
            {unlockedBadges.map((badge) => (
              <motion.div
                key={badge.id}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center p-3 bg-dark-bg rounded-xl"
              >
                <div className="text-3xl mb-1">{badge.icon}</div>
                <span className="text-xs text-slate-300 text-center">{badge.name}</span>
                <span className={`text-xs ${
                  badge.rarity === 'legendary' ? 'text-yellow-400' :
                  badge.rarity === 'epic' ? 'text-purple-400' :
                  badge.rarity === 'rare' ? 'text-blue-400' : 'text-slate-400'
                }`}>
                  {badge.rarity === 'common' ? '普通' : badge.rarity === 'rare' ? '稀有' : badge.rarity === 'epic' ? '史诗' : '传说'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm text-slate-400 mb-3">进行中</h4>
          <div className="space-y-3">
            {lockedBadges.slice(0, 4).map((badge) => (
              <div key={badge.id} className="flex items-center gap-3 p-3 bg-dark-bg rounded-xl">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-dark-border flex items-center justify-center">
                    <span className="text-2xl opacity-50">{badge.icon}</span>
                  </div>
                  <Lock className="w-4 h-4 text-slate-500 absolute -bottom-1 -right-1 bg-dark-bg rounded-full p-0.5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-slate-300">{badge.name}</span>
                    <span className={`text-xs ${
                      badge.rarity === 'legendary' ? 'text-yellow-400' :
                      badge.rarity === 'epic' ? 'text-purple-400' : 'text-blue-400'
                    }`}>
                      {badge.rarity === 'common' ? '普通' : badge.rarity === 'rare' ? '稀有' : badge.rarity === 'epic' ? '史诗' : '传说'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{badge.description}</p>
                  <div className="w-full bg-dark-border rounded-full h-1.5">
                    <div
                      className={`h-full rounded-full ${
                        badge.rarity === 'legendary' ? 'bg-yellow-500' :
                        badge.rarity === 'epic' ? 'bg-purple-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${((badge.progress || 0) / (badge.required || 1)) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 mt-1">
                    {badge.progress?.toLocaleString()} / {badge.required?.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderMapPage = () => (
    <motion.div
      key="map"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">校园探索</h2>
            <p className="text-sm text-slate-400">
              已解锁 {unlockedLocations.length}/{locations.length} 个地点
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold text-white">
              {Math.round((unlockedLocations.length / locations.length) * 100)}%
            </span>
          </div>
        </div>

        <div className="relative w-full aspect-square bg-dark-bg rounded-2xl overflow-hidden border border-dark-border">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg opacity-80" />

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />

            {locations.map((location) => (
              <g key={location.id} transform={`translate(${location.position.x}, ${location.position.y})`}>
                <motion.circle
                  cx="0"
                  cy="0"
                  r={location.unlocked ? "4" : "2"}
                  fill={location.unlocked ? "#6366F1" : "#334155"}
                  opacity={location.unlocked ? 0.8 : 0.4}
                  animate={location.unlocked ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0.4, 0.8]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {location.unlocked && (
                  <text
                    x="0"
                    y="-6"
                    textAnchor="middle"
                    className="text-xs"
                    fill="#F8FAFC"
                    fontSize="4"
                  >
                    {location.name}
                  </text>
                )}
              </g>
            ))}
          </svg>

          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
            {locations.slice(0, 5).map((location) => (
              <motion.div
                key={location.id}
                whileHover={{ scale: 1.1 }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                  location.unlocked
                    ? 'bg-primary/20 border border-primary'
                    : 'bg-dark-border'
                }`}
              >
                {location.unlocked ? location.icon : <Lock className="w-4 h-4 text-slate-500" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">已解锁地点</h3>
        <div className="space-y-3">
          {unlockedLocations.map((location) => (
            <motion.div
              key={location.id}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-dark-bg rounded-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                {location.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1">{location.name}</h4>
                <p className="text-xs text-slate-400">{location.description}</p>
                <p className="text-xs text-primary mt-1">{location.funFact}</p>
              </div>
              <Unlock className="w-5 h-5 text-green-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">解锁进度</h3>
        <div className="space-y-3">
          {lockedBadges.slice(0, 3).map((location) => (
            <div key={location.id} className="flex items-center gap-4 p-3 bg-dark-bg rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-dark-border flex items-center justify-center text-xl opacity-50">
                ?
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-300 mb-2">
                  累计 {location.required?.toLocaleString()} 步解锁
                </div>
                <div className="w-full bg-dark-border rounded-full h-1.5">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${((location.progress || 0) / (location.required || 1)) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderBuddyPage = () => (
    <motion.div
      key="buddy"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">运动搭子</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-medium text-white"
          >
            + 匹配新搭子
          </motion.button>
        </div>

        <div className="space-y-3">
          {buddies.map((buddy) => (
            <motion.div
              key={buddy.id}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-dark-bg rounded-xl"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center text-2xl">
                    {buddy.avatar}
                  </div>
                </div>
                {buddy.isOnline && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-bg" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-white">{buddy.nickname}</span>
                  <span className="text-xs text-slate-400">Lv.{buddy.level}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>今日 {buddy.todaySteps.toLocaleString()} 步</span>
                  <span>🔥 {buddy.streakDays}天</span>
                  <span>{buddy.sportsType}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-green-400">{buddy.matchScore}%</div>
                <div className="text-xs text-slate-400">匹配度</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">🏆 步数排行榜</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-primary rounded-full text-xs text-white">周榜</button>
            <button className="px-3 py-1 bg-dark-border rounded-full text-xs text-slate-400">月榜</button>
          </div>
        </div>

        <div className="space-y-2">
          {mockLeaderboard.slice(0, 5).map((item) => (
            <div
              key={item.rank}
              className={`flex items-center gap-3 p-3 rounded-xl ${
                item.rank <= 3 ? 'bg-gradient-to-r from-primary/20 to-transparent' : 'bg-dark-bg'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                item.rank === 1 ? 'bg-yellow-500 text-white' :
                item.rank === 2 ? 'bg-slate-400 text-white' :
                item.rank === 3 ? 'bg-orange-600 text-white' :
                'bg-dark-border text-slate-400'
              }`}>
                {item.rank}
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  {item.avatar}
                </div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-white text-sm">{item.nickname}</div>
                <div className="text-xs text-slate-400">Lv.{item.level}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-white">{item.steps.toLocaleString()}</div>
                <div className="text-xs text-slate-400">步</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderTasksPage = () => (
    <motion.div
      key="tasks"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-white">每日任务</h2>
        </div>

        <div className="mb-6 p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-300">今日进度</span>
            <span className="text-sm font-bold text-white">
              {completedTasks}/{dailyTasks.length}
            </span>
          </div>
          <div className="w-full bg-dark-border rounded-full h-2">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(completedTasks / dailyTasks.length) * 100}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        <div className="space-y-3">
          {dailyTasks.map((task) => (
            <div key={task.id} className="flex items-center gap-4 p-4 bg-dark-bg rounded-xl">
              {task.completed ? (
                <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-8 h-8 text-slate-500 flex-shrink-0" />
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-semibold ${task.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
                    {task.title}
                  </span>
                  <span className="text-sm text-primary font-bold">+{task.expReward} EXP</span>
                </div>
                <p className="text-xs text-slate-400">{task.description}</p>
                {task.type === 'steps' && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>{task.current.toLocaleString()}</span>
                      <span>{task.target.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-dark-border rounded-full h-1.5">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: `${(task.current / task.target) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h3 className="text-lg font-semibold text-white">每周挑战</h3>
        </div>

        <div className="space-y-3">
          {weeklyTasks.map((task) => (
            <div key={task.id} className="p-4 bg-dark-bg rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white">{task.title}</span>
                <span className="text-sm text-yellow-500 font-bold">+{task.expReward} EXP</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">{task.description}</p>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{task.current.toLocaleString()}</span>
                <span>{task.target.toLocaleString()}</span>
              </div>
              <div className="w-full bg-dark-border rounded-full h-2">
                <div
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                  style={{ width: `${(task.current / task.target) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setCurrentPage('rewards')}
        className="w-full card-glow rounded-2xl p-5 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
            <Gift className="w-7 h-7 text-white" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-white mb-1">奖励兑换中心</h4>
            <p className="text-sm text-slate-400">查看更多奖励好礼</p>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-slate-400" />
      </motion.button>
    </motion.div>
  );

  const renderAIAssistantPage = () => (
    <motion.div
      key="ai-assistant"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full flex flex-col"
    >
      <div className="glass-effect rounded-3xl p-4 mb-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
          <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold text-white">AI运动搭子 Fitty</h2>
          <p className="text-xs text-slate-400">始终在线，为你加油 💪</p>
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 bg-green-500 rounded-full"
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4 px-1">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[85%] p-4 rounded-2xl ${
                msg.isAI
                  ? 'bg-dark-bg text-white rounded-tl-sm'
                  : 'bg-gradient-to-r from-primary to-secondary text-white rounded-tr-sm'
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-effect rounded-2xl p-3">
        <div className="flex gap-2 mb-3 overflow-x-auto hide-scrollbar">
          {['今日目标', '运动建议', '鼓励我', '连续打卡'].map((item) => (
            <button
              key={item}
              onClick={() => setInputMessage(item)}
              className="px-3 py-1.5 bg-dark-bg rounded-full text-xs text-slate-300 whitespace-nowrap hover:bg-primary/20 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="输入消息..."
            className="flex-1 bg-dark-bg rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            className="px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl"
          >
            <Send className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const renderRewardsPage = () => (
    <motion.div
      key="rewards"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-effect rounded-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">我的积分</h2>
          <button
            onClick={() => setCurrentPage('tasks')}
            className="text-sm text-primary hover:underline"
          >
            赚取更多
          </button>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl">
          <Zap className="w-10 h-10 text-yellow-500" />
          <div>
            <div className="text-3xl font-bold text-white">{user.exp}</div>
            <div className="text-sm text-slate-400">可用积分</div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">运动装备</h3>
        <div className="grid grid-cols-2 gap-3">
          {rewards.filter(r => r.category === 'equipment').slice(0, 4).map((reward) => (
            <motion.div
              key={reward.id}
              whileHover={{ scale: 1.02 }}
              className="card rounded-xl overflow-hidden"
            >
              <div className="h-20 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">
                {reward.icon}
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-white text-sm mb-1">{reward.name}</h4>
                <p className="text-xs text-slate-400 mb-2">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-yellow-500">{reward.cost} 积分</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={user.exp < reward.cost}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.exp >= reward.cost
                        ? 'bg-primary text-white'
                        : 'bg-dark-border text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    兑换
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">虚拟物品 & 服务</h3>
        <div className="space-y-3">
          {rewards.filter(r => r.category !== 'equipment').map((reward) => (
            <div key={reward.id} className="flex items-center gap-4 p-4 bg-dark-bg rounded-xl">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                {reward.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1">{reward.name}</h4>
                <p className="text-xs text-slate-400">{reward.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-yellow-500 mb-1">{reward.cost} 积分</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={user.exp < reward.cost}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.exp >= reward.cost
                      ? 'bg-primary text-white'
                      : 'bg-dark-border text-slate-500 cursor-not-allowed'
                  }`}
                >
                  兑换
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    if (currentPage === 'ai-assistant') {
      return renderAIAssistantPage();
    }
    if (currentPage === 'rewards') {
      return renderRewardsPage();
    }

    switch (activeTab) {
      case 'home':
        return renderHomePage();
      case 'growth':
        return renderGrowthPage();
      case 'map':
        return renderMapPage();
      case 'buddy':
        return renderBuddyPage();
      case 'tasks':
        return renderTasksPage();
      default:
        return renderHomePage();
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg pb-24">
      <div className="max-w-md mx-auto px-4 pt-8">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 glass-effect border-t border-dark-border safe-area-bottom">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex justify-around">
            {[
              { id: 'home', icon: Home, label: '首页' },
              { id: 'growth', icon: Trophy, label: '成长' },
              { id: 'map', icon: Map, label: '地图' },
              { id: 'buddy', icon: Users, label: '搭子' },
              { id: 'tasks', icon: CheckSquare, label: '任务' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleTabChange(tab.id as TabType)}
                className={`flex flex-col items-center gap-1 ${
                  activeTab === tab.id && currentPage === tab.id
                    ? 'text-primary'
                    : 'text-slate-400'
                }`}
              >
                <tab.icon className="w-6 h-6" />
                <span className="text-xs">{tab.label}</span>
                {activeTab === tab.id && currentPage === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="w-1 h-1 bg-primary rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setCurrentPage('ai-assistant')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <Bot className="w-7 h-7 text-white" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
        />
      </motion.button>
    </div>
  );
};

export default App;

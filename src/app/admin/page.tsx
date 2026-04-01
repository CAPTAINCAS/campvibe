'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  Video, 
  Heart, 
  MessageCircle, 
  Tv, 
  User, 
  Shield,
  BarChart3,
  Settings,
  Flag,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Trash2,
  Edit,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Bell,
  Lock,
  Unlock,
  UserPlus,
  UserMinus,
  Activity,
  TrendingUp,
  DollarSign,
  Globe,
  MapPin,
  Calendar,
  Clock,
  Star,
  Zap,
  Crown,
  Sparkles,
  ChevronDown,
  ChevronRight,
  MoreVertical,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Image as ImageIcon,
  FileText,
  Music,
  Mic,
  Wifi,
  Server,
  Database,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Cloud,
  LineChart,
  PieChart,
  BarChart,
  ArrowUp,
  ArrowDown,
  Minus,
  Plus,
  X,
  Menu,
  Home,
  LogOut
} from 'lucide-react'

interface User {
  id: number
  name: string
  email: string
  university: string
  status: 'active' | 'suspended' | 'banned' | 'pending'
  role: 'user' | 'moderator' | 'admin'
  joinDate: string
  lastActive: string
  posts: number
  followers: number
  reports: number
}

interface Report {
  id: number
  type: 'spam' | 'harassment' | 'inappropriate' | 'fake' | 'copyright'
  reporter: string
  reported: string
  content: string
  status: 'pending' | 'resolved' | 'dismissed'
  date: string
  priority: 'low' | 'medium' | 'high'
}

interface Content {
  id: number
  type: 'post' | 'video' | 'comment' | 'story'
  author: string
  content: string
  status: 'published' | 'flagged' | 'removed'
  reports: number
  date: string
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [showUserModal, setShowUserModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  // Mock data for users
  const users: User[] = [
    { id: 1, name: 'John Kamau', email: 'john@uonbi.ac.ke', university: 'University of Nairobi', status: 'active', role: 'user', joinDate: '2024-01-15', lastActive: '2 hours ago', posts: 45, followers: 234, reports: 0 },
    { id: 2, name: 'Mary Wanjiku', email: 'mary@ku.ac.ke', university: 'Kenyatta University', status: 'active', role: 'moderator', joinDate: '2024-02-20', lastActive: '1 hour ago', posts: 89, followers: 567, reports: 0 },
    { id: 3, name: 'Peter Ochieng', email: 'peter@mu.ac.ke', university: 'Moi University', status: 'suspended', role: 'user', joinDate: '2024-03-10', lastActive: '1 day ago', posts: 12, followers: 45, reports: 3 },
    { id: 4, name: 'Grace Akinyi', email: 'grace@strathmore.edu', university: 'Strathmore University', status: 'active', role: 'user', joinDate: '2024-01-05', lastActive: '30 mins ago', posts: 156, followers: 890, reports: 0 },
    { id: 5, name: 'David Njoroge', email: 'david@jkuat.ac.ke', university: 'JKUAT', status: 'banned', role: 'user', joinDate: '2024-04-01', lastActive: '1 week ago', posts: 5, followers: 12, reports: 8 },
  ]

  // Mock data for reports
  const reports: Report[] = [
    { id: 1, type: 'harassment', reporter: 'Mary Wanjiku', reported: 'Peter Ochieng', content: 'Inappropriate comments on my post', status: 'pending', date: '2 hours ago', priority: 'high' },
    { id: 2, type: 'spam', reporter: 'Grace Akinyi', reported: 'David Njoroge', content: 'Posting spam links in comments', status: 'pending', date: '5 hours ago', priority: 'medium' },
    { id: 3, type: 'inappropriate', reporter: 'John Kamau', reported: 'Unknown User', content: 'Inappropriate content in video', status: 'resolved', date: '1 day ago', priority: 'high' },
    { id: 4, type: 'fake', reporter: 'Peter Ochieng', reported: 'Fake Account', content: 'Fake profile impersonating student', status: 'pending', date: '2 days ago', priority: 'medium' },
  ]

  // Mock data for content
  const contents: Content[] = [
    { id: 1, type: 'video', author: 'John Kamau', content: 'Campus tour video', status: 'published', reports: 0, date: '1 hour ago' },
    { id: 2, type: 'post', author: 'Mary Wanjiku', content: 'Study group announcement', status: 'published', reports: 0, date: '3 hours ago' },
    { id: 3, type: 'video', author: 'David Njoroge', content: 'Inappropriate content', status: 'flagged', reports: 5, date: '1 day ago' },
    { id: 4, type: 'comment', author: 'Peter Ochieng', content: 'Offensive comment', status: 'removed', reports: 3, date: '2 days ago' },
  ]

  const stats = {
    totalUsers: 15234,
    activeUsers: 12456,
    totalVideos: 8923,
    totalPosts: 45678,
    pendingReports: 12,
    revenue: 2450000,
    serverLoad: 67,
    uptime: 99.9
  }

  const handleUserAction = (userId: number, action: 'suspend' | 'ban' | 'activate' | 'delete') => {
    console.log(`Action: ${action} for user ${userId}`)
    // In real app, this would update the user status
  }

  const handleReportAction = (reportId: number, action: 'resolve' | 'dismiss') => {
    console.log(`Action: ${action} for report ${reportId}`)
    // In real app, this would update the report status
  }

  const handleContentAction = (contentId: number, action: 'approve' | 'remove' | 'flag') => {
    console.log(`Action: ${action} for content ${contentId}`)
    // In real app, this would update the content status
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-red-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 via-red-500 to-black rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">CampVibe</span>
                <span className="text-xs text-red-400 ml-2 font-semibold">ADMIN</span>
              </div>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users, content, reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Admin Info */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-red-500 rounded-full flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-white font-semibold text-sm">Admin</p>
                  <p className="text-gray-400 text-xs">admin@campvibe.co.ke</p>
                </div>
              </div>
              <Link href="/" className="p-2 text-gray-400 hover:text-white transition-colors">
                <LogOut className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Admin Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'content', label: 'Content', icon: Video },
              { id: 'reports', label: 'Reports', icon: Flag },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Total Users', value: stats.totalUsers.toLocaleString(), icon: Users, color: 'from-blue-500 to-blue-600', change: '+12%' },
                  { label: 'Active Users', value: stats.activeUsers.toLocaleString(), icon: Activity, color: 'from-green-500 to-green-600', change: '+8%' },
                  { label: 'Total Videos', value: stats.totalVideos.toLocaleString(), icon: Video, color: 'from-purple-500 to-purple-600', change: '+23%' },
                  { label: 'Total Posts', value: stats.totalPosts.toLocaleString(), icon: FileText, color: 'from-pink-500 to-pink-600', change: '+15%' },
                  { label: 'Pending Reports', value: stats.pendingReports.toString(), icon: AlertTriangle, color: 'from-yellow-500 to-yellow-600', change: '-5%' },
                  { label: 'Revenue (KSh)', value: `KSh ${(stats.revenue / 1000000).toFixed(1)}M`, icon: DollarSign, color: 'from-green-500 to-emerald-600', change: '+18%' },
                  { label: 'Server Load', value: `${stats.serverLoad}%`, icon: Server, color: 'from-orange-500 to-orange-600', change: '+3%' },
                  { label: 'Uptime', value: `${stats.uptime}%`, icon: Wifi, color: 'from-cyan-500 to-cyan-600', change: '0%' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-400' : stat.change.startsWith('-') ? 'text-red-400' : 'text-gray-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold text-lg mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Add User', icon: UserPlus, color: 'from-green-500 to-green-600' },
                    { label: 'Review Reports', icon: Flag, color: 'from-yellow-500 to-yellow-600' },
                    { label: 'Moderate Content', icon: Shield, color: 'from-red-500 to-red-600' },
                    { label: 'View Analytics', icon: LineChart, color: 'from-blue-500 to-blue-600' },
                  ].map((action, index) => (
                    <button
                      key={index}
                      className={`flex flex-col items-center gap-3 p-4 bg-gradient-to-r ${action.color} rounded-xl text-white hover:opacity-90 transition-all`}
                    >
                      <action.icon className="w-6 h-6" />
                      <span className="text-sm font-semibold">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold text-lg mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: 'New user registered', user: 'John Kamau', time: '2 mins ago', icon: UserPlus, color: 'text-green-400' },
                    { action: 'Video reported', user: 'Mary Wanjiku', time: '15 mins ago', icon: Flag, color: 'text-yellow-400' },
                    { action: 'User suspended', user: 'Peter Ochieng', time: '1 hour ago', icon: UserMinus, color: 'text-red-400' },
                    { action: 'Content removed', user: 'Admin', time: '2 hours ago', icon: Trash2, color: 'text-red-400' },
                    { action: 'Report resolved', user: 'Grace Akinyi', time: '3 hours ago', icon: CheckCircle, color: 'text-green-400' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                      <div className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ${activity.color}`}>
                        <activity.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{activity.action}</p>
                        <p className="text-gray-400 text-sm">{activity.user}</p>
                      </div>
                      <span className="text-gray-500 text-sm">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Users Management */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="suspended">Suspended</option>
                  <option value="banned">Banned</option>
                  <option value="pending">Pending</option>
                </select>
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Add User
                </button>
              </div>

              {/* Users Table */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="px-6 py-4 text-left text-gray-400 font-semibold">User</th>
                        <th className="px-6 py-4 text-left text-gray-400 font-semibold">University</th>
                        <th className="px-6 py-4 text-left text-gray-400 font-semibold">Status</th>
                        <th className="px-6 py-4 text-left text-gray-400 font-semibold">Role</th>
                        <th className="px-6 py-4 text-left text-gray-400 font-semibold">Activity</th>
                        <th className="px-6 py-4 text-left text-gray-400 font-semibold">Reports</th>
                        <th className="px-6 py-4 text-left text-gray-400 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-white font-medium">{user.name}</p>
                                <p className="text-gray-400 text-sm">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">{user.university}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                              user.status === 'suspended' ? 'bg-yellow-500/20 text-yellow-400' :
                              user.status === 'banned' ? 'bg-red-500/20 text-red-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              user.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                              user.role === 'moderator' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-white text-sm">{user.posts} posts</p>
                              <p className="text-gray-400 text-xs">{user.lastActive}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              user.reports > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                            }`}>
                              {user.reports} reports
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => { setSelectedUser(user); setShowUserModal(true) }}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleUserAction(user.id, user.status === 'active' ? 'suspend' : 'activate')}
                                className={`p-2 rounded-lg transition-all ${
                                  user.status === 'active' 
                                    ? 'text-yellow-400 hover:bg-yellow-500/10' 
                                    : 'text-green-400 hover:bg-green-500/10'
                                }`}
                              >
                                {user.status === 'active' ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                              </button>
                              <button
                                onClick={() => handleUserAction(user.id, 'ban')}
                                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Content Moderation */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="all">All Content</option>
                  <option value="published">Published</option>
                  <option value="flagged">Flagged</option>
                  <option value="removed">Removed</option>
                </select>
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contents.map((content) => (
                  <div key={content.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {content.type === 'video' && <Video className="w-5 h-5 text-purple-400" />}
                        {content.type === 'post' && <FileText className="w-5 h-5 text-blue-400" />}
                        {content.type === 'comment' && <MessageCircle className="w-5 h-5 text-green-400" />}
                        <span className="text-gray-400 text-sm capitalize">{content.type}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        content.status === 'published' ? 'bg-green-500/20 text-green-400' :
                        content.status === 'flagged' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {content.status}
                      </span>
                    </div>
                    <p className="text-white mb-2">{content.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{content.author}</span>
                      <span>{content.date}</span>
                    </div>
                    {content.reports > 0 && (
                      <div className="flex items-center gap-2 mb-4 p-2 bg-red-500/10 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-red-400 text-sm">{content.reports} reports</span>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleContentAction(content.id, 'approve')}
                        className="flex-1 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold hover:bg-green-500/30 transition-all"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleContentAction(content.id, 'remove')}
                        className="flex-1 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-semibold hover:bg-red-500/30 transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reports */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="all">All Reports</option>
                  <option value="pending">Pending</option>
                  <option value="resolved">Resolved</option>
                  <option value="dismissed">Dismissed</option>
                </select>
              </div>

              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          report.priority === 'high' ? 'bg-red-500/20' :
                          report.priority === 'medium' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                        }`}>
                          <Flag className={`w-6 h-6 ${
                            report.priority === 'high' ? 'text-red-400' :
                            report.priority === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                          }`} />
                        </div>
                        <div>
                          <p className="text-white font-semibold capitalize">{report.type}</p>
                          <p className="text-gray-400 text-sm">Reported by {report.reporter}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          report.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                          report.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {report.priority} priority
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          report.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          report.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{report.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>Against: {report.reported}</span>
                        <span>{report.date}</span>
                      </div>
                      {report.status === 'pending' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleReportAction(report.id, 'resolve')}
                            className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold hover:bg-green-500/30 transition-all flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Resolve
                          </button>
                          <button
                            onClick={() => handleReportAction(report.id, 'dismiss')}
                            className="px-4 py-2 bg-gray-500/20 text-gray-400 rounded-lg text-sm font-semibold hover:bg-gray-500/30 transition-all flex items-center gap-2"
                          >
                            <XCircle className="w-4 h-4" />
                            Dismiss
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Platform Settings */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-green-400" />
                    Platform Settings
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'User Registration', description: 'Allow new users to register', enabled: true },
                      { label: 'Email Verification', description: 'Require email verification', enabled: true },
                      { label: 'Content Moderation', description: 'Auto-moderate content', enabled: true },
                      { label: 'Dating Feature', description: 'Enable dating feature', enabled: true },
                      { label: 'Video Downloads', description: 'Allow video downloads', enabled: true },
                      { label: 'Music Downloads', description: 'Allow music downloads', enabled: true },
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <div>
                          <p className="text-white font-medium">{setting.label}</p>
                          <p className="text-gray-400 text-sm">{setting.description}</p>
                        </div>
                        <button className={`w-12 h-6 rounded-full transition-all ${
                          setting.enabled ? 'bg-green-500' : 'bg-gray-600'
                        }`}>
                          <div className={`w-5 h-5 bg-white rounded-full transition-all ${
                            setting.enabled ? 'translate-x-6' : 'translate-x-0.5'
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-400" />
                    Security Settings
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Two-Factor Auth', description: 'Require 2FA for all users', enabled: true },
                      { label: 'Session Timeout', description: 'Auto logout after inactivity', enabled: true },
                      { label: 'IP Blocking', description: 'Block suspicious IPs', enabled: true },
                      { label: 'Rate Limiting', description: 'Limit API requests', enabled: true },
                      { label: 'Data Encryption', description: 'Encrypt user data', enabled: true },
                      { label: 'Audit Logging', description: 'Log all admin actions', enabled: true },
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <div>
                          <p className="text-white font-medium">{setting.label}</p>
                          <p className="text-gray-400 text-sm">{setting.description}</p>
                        </div>
                        <button className={`w-12 h-6 rounded-full transition-all ${
                          setting.enabled ? 'bg-green-500' : 'bg-gray-600'
                        }`}>
                          <div className={`w-5 h-5 bg-white rounded-full transition-all ${
                            setting.enabled ? 'translate-x-6' : 'translate-x-0.5'
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kenya-Specific Settings */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-green-400" />
                    Kenya Settings 🇰🇪
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'M-Pesa Integration', description: 'Enable M-Pesa payments', enabled: true },
                      { label: 'Kenyan Universities', description: 'Only Kenyan universities', enabled: true },
                      { label: 'Local Content', description: 'Prioritize Kenyan content', enabled: true },
                      { label: 'Swahili Support', description: 'Enable Swahili language', enabled: false },
                      { label: 'Local Events', description: 'Show Kenyan campus events', enabled: true },
                      { label: 'Data Protection', description: 'Kenya DPA compliance', enabled: true },
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <div>
                          <p className="text-white font-medium">{setting.label}</p>
                          <p className="text-gray-400 text-sm">{setting.description}</p>
                        </div>
                        <button className={`w-12 h-6 rounded-full transition-all ${
                          setting.enabled ? 'bg-green-500' : 'bg-gray-600'
                        }`}>
                          <div className={`w-5 h-5 bg-white rounded-full transition-all ${
                            setting.enabled ? 'translate-x-6' : 'translate-x-0.5'
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Server Status */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <Server className="w-5 h-5 text-blue-400" />
                    Server Status
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'CPU Usage', value: '45%', icon: Cpu, color: 'text-green-400' },
                      { label: 'Memory Usage', value: '67%', icon: MemoryStick, color: 'text-yellow-400' },
                      { label: 'Storage', value: '234GB / 500GB', icon: HardDrive, color: 'text-blue-400' },
                      { label: 'Network', value: '1.2 Gbps', icon: Network, color: 'text-green-400' },
                      { label: 'Database', value: 'Connected', icon: Database, color: 'text-green-400' },
                      { label: 'CDN', value: 'Active', icon: Cloud, color: 'text-green-400' },
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <div className="flex items-center gap-3">
                          <stat.icon className={`w-5 h-5 ${stat.color}`} />
                          <p className="text-white font-medium">{stat.label}</p>
                        </div>
                        <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* User Modal */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold text-lg">User Details</h3>
              <button
                onClick={() => setShowUserModal(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                  {selectedUser.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{selectedUser.name}</p>
                  <p className="text-gray-400">{selectedUser.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">University</p>
                  <p className="text-white font-medium">{selectedUser.university}</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">Status</p>
                  <p className="text-white font-medium capitalize">{selectedUser.status}</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">Posts</p>
                  <p className="text-white font-medium">{selectedUser.posts}</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">Followers</p>
                  <p className="text-white font-medium">{selectedUser.followers}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleUserAction(selectedUser.id, selectedUser.status === 'active' ? 'suspend' : 'activate')}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                    selectedUser.status === 'active'
                      ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                      : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  }`}
                >
                  {selectedUser.status === 'active' ? 'Suspend' : 'Activate'}
                </button>
                <button
                  onClick={() => handleUserAction(selectedUser.id, 'ban')}
                  className="flex-1 py-3 bg-red-500/20 text-red-400 rounded-xl font-semibold hover:bg-red-500/30 transition-all"
                >
                  Ban User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

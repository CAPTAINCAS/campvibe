'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Home, 
  Video, 
  Heart, 
  MessageCircle, 
  Tv, 
  User, 
  Search,
  Menu,
  X,
  Sparkles,
  Settings,
  Edit,
  Camera,
  MapPin,
  GraduationCap,
  Calendar,
  Mail,
  Phone,
  Globe,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Users,
  UserPlus,
  UserMinus,
  MessageSquare,
  ThumbsUp,
  Share2,
  Bookmark,
  MoreHorizontal,
  Grid,
  List,
  Heart as HeartIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  FileText,
  Award,
  Trophy,
  Star,
  TrendingUp,
  Activity,
  Clock,
  Eye,
  Lock,
  Unlock,
  Shield,
  Bell,
  Moon,
  Sun,
  LogOut,
  ChevronRight,
  Plus,
  Filter,
  SortAsc,
  ExternalLink,
  Copy,
  Check,
  Verified
} from 'lucide-react'

interface Post {
  id: number
  type: 'text' | 'image' | 'video'
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
  time: string
}

interface Achievement {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  unlocked: boolean
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileTab, setProfileTab] = useState('posts')
  const [isEditing, setIsEditing] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const navItems = [
    { id: 'feed', label: 'Feed', icon: Home, href: '/' },
    { id: 'videos', label: 'Videos', icon: Video, href: '/videos' },
    { id: 'dating', label: 'Dating', icon: Heart, href: '/dating' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, href: '/chat' },
    { id: 'streaming', label: 'Live', icon: Tv, href: '/streaming' },
    { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  ]

  const user = {
    name: 'Alex Thompson',
    username: '@alexthompson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    university: 'Stanford University',
    major: 'Computer Science',
    year: 'Junior',
    bio: 'Passionate about technology, innovation, and making a difference. Love coding, hiking, and exploring new ideas. Always up for a challenge! 🚀',
    location: 'Stanford, CA',
    website: 'alexthompson.dev',
    email: 'alex@stanford.edu',
    followers: 12500,
    following: 890,
    posts: 456,
    likes: 89200,
    verified: true,
    joinDate: 'September 2023'
  }

  const posts: Post[] = [
    {
      id: 1,
      type: 'image',
      content: 'Just finished my final project! 🎉 Months of hard work finally paid off. Thanks to everyone who helped along the way!',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      likes: 234,
      comments: 45,
      shares: 12,
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'text',
      content: 'Late night coding sessions hit different when you\'re building something you\'re passionate about. 💻✨ #CodingLife #Stanford',
      likes: 156,
      comments: 23,
      shares: 8,
      time: '5 hours ago'
    },
    {
      id: 3,
      type: 'image',
      content: 'Campus vibes today were absolutely perfect! 🌅 Nature never fails to amaze me.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      likes: 892,
      comments: 67,
      shares: 45,
      time: '1 day ago'
    },
    {
      id: 4,
      type: 'video',
      content: 'Check out my latest project demo! Building the future, one line of code at a time. 🚀',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      likes: 567,
      comments: 89,
      shares: 34,
      time: '2 days ago'
    }
  ]

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Early Adopter',
      description: 'Joined CampVibe in the first month',
      icon: <Star className="w-6 h-6" />,
      unlocked: true
    },
    {
      id: 2,
      title: 'Popular Creator',
      description: 'Reached 10K followers',
      icon: <Users className="w-6 h-6" />,
      unlocked: true
    },
    {
      id: 3,
      title: 'Viral Post',
      description: 'Got 1K+ likes on a single post',
      icon: <TrendingUp className="w-6 h-6" />,
      unlocked: true
    },
    {
      id: 4,
      title: 'Video Star',
      description: 'Posted 100+ videos',
      icon: <VideoIcon className="w-6 h-6" />,
      unlocked: false
    },
    {
      id: 5,
      title: 'Matchmaker',
      description: 'Got 50+ dating matches',
      icon: <HeartIcon className="w-6 h-6" />,
      unlocked: false
    },
    {
      id: 6,
      title: 'Sports Fan',
      description: 'Watched 100+ live matches',
      icon: <Tv className="w-6 h-6" />,
      unlocked: false
    }
  ]

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">CampVibe</span>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search CampVibe..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cover Photo */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
            <img
              src={user.cover}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button className="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-indigo-500"
                />
                {user.verified && (
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-slate-900">
                    <Verified className="w-5 h-5 text-white" />
                  </div>
                )}
                <button className="absolute bottom-0 left-0 p-2 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                  {user.verified && (
                    <div className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Verified className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400 mb-2">{user.username}</p>
                <p className="text-white mb-4">{user.bio}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{user.university}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{formatNumber(user.posts)}</p>
                <p className="text-gray-400 text-sm">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{formatNumber(user.followers)}</p>
                <p className="text-gray-400 text-sm">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{formatNumber(user.following)}</p>
                <p className="text-gray-400 text-sm">Following</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{formatNumber(user.likes)}</p>
                <p className="text-gray-400 text-sm">Likes</p>
              </div>
            </div>
          </div>

          {/* Profile Tabs */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 mb-6">
            <div className="flex items-center border-b border-white/10">
              {['posts', 'videos', 'photos', 'achievements', 'about'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setProfileTab(tab)}
                  className={`flex-1 py-4 text-center font-medium transition-colors ${
                    profileTab === tab
                      ? 'text-indigo-400 border-b-2 border-indigo-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-6">
              {profileTab === 'posts' && (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-start space-x-3 mb-4">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-white font-semibold">{user.name}</h4>
                            {user.verified && (
                              <Verified className="w-4 h-4 text-blue-400" />
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">{post.time}</p>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <p className="text-white mb-4">{post.content}</p>
                      
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full rounded-xl mb-4"
                        />
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-pink-500 transition-colors">
                            <ThumbsUp className="w-5 h-5" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-500 transition-colors">
                            <MessageSquare className="w-5 h-5" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors">
                            <Share2 className="w-5 h-5" />
                            <span>{post.shares}</span>
                          </button>
                        </div>
                        <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                          <Bookmark className="w-5 h-5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {profileTab === 'achievements' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-xl border ${
                        achievement.unlocked
                          ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30'
                          : 'bg-white/5 border-white/10 opacity-50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        achievement.unlocked
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                          : 'bg-white/10'
                      }`}>
                        {achievement.icon}
                      </div>
                      <h4 className="text-white font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                      {achievement.unlocked && (
                        <div className="mt-2 flex items-center space-x-1 text-green-400 text-sm">
                          <Check className="w-4 h-4" />
                          <span>Unlocked</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {profileTab === 'about' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-400">
                        <Mail className="w-5 h-5" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <Globe className="w-5 h-5" />
                        <a href={`https://${user.website}`} className="text-indigo-400 hover:underline">
                          {user.website}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Education</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-400">
                        <GraduationCap className="w-5 h-5" />
                        <span>{user.university}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <Award className="w-5 h-5" />
                        <span>{user.major} • {user.year}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Social Links</h4>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'text-indigo-400'
                  : 'text-gray-400'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

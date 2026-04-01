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
  Play,
  ThumbsUp,
  Share2,
  Bookmark,
  MoreHorizontal,
  Send,
  Image as ImageIcon,
  Smile,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('feed')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'dating', label: 'Dating', icon: Heart },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'streaming', label: 'Live', icon: Tv },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  const posts = [
    {
      id: 1,
      user: { name: 'Amina Wanjiku', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop', university: 'University of Nairobi' },
      content: 'Just finished my final exams at UoN! 🎉 Time to celebrate with friends. Who\'s up for a campus party this weekend?',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      likes: 234,
      comments: 45,
      shares: 12,
      time: '2 hours ago'
    },
    {
      id: 2,
      user: { name: 'Kevin Ochieng', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', university: 'Kenyatta University' },
      content: 'Working on an AI project at KU that can predict campus events attendance. The future is here! 🤖',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      likes: 567,
      comments: 89,
      shares: 34,
      time: '4 hours ago'
    },
    {
      id: 3,
      user: { name: 'Faith Njeri', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', university: 'Moi University' },
      content: 'Campus sunrise at Moi University this morning was absolutely breathtaking! 🌅 Nature never fails to amaze me.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      likes: 892,
      comments: 67,
      shares: 45,
      time: '6 hours ago'
    }
  ]

  const trendingTopics = [
    { tag: '#CampusLife', posts: '12.5K' },
    { tag: '#StudyGroup', posts: '8.2K' },
    { tag: '#CollegeParty', posts: '6.8K' },
    { tag: '#FinalsWeek', posts: '5.4K' },
    { tag: '#CampusLove', posts: '4.1K' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">CampVibe</span>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search CampVibe..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
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
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - User Info */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* User Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop"
                      alt="Profile"
                      className="w-16 h-16 rounded-full border-2 border-cyan-500"
                    />
                    <div>
                      <h3 className="text-white font-semibold">Brian Kamau</h3>
                      <p className="text-gray-400 text-sm">University of Nairobi</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-white font-bold">1.2K</p>
                      <p className="text-gray-400 text-xs">Friends</p>
                    </div>
                    <div>
                      <p className="text-white font-bold">456</p>
                      <p className="text-gray-400 text-xs">Posts</p>
                    </div>
                    <div>
                      <p className="text-white font-bold">89</p>
                      <p className="text-gray-400 text-xs">Matches</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Create Post</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500/20 to-red-500/20 hover:from-pink-500/30 hover:to-red-500/30 transition-all">
                      <Heart className="w-5 h-5 text-pink-400" />
                      <span className="text-white">Find Matches</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 transition-all">
                      <Video className="w-5 h-5 text-green-400" />
                      <span className="text-white">Go Live</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Feed */}
            <div className="lg:col-span-6 space-y-6">
              {/* Create Post */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      placeholder="What's happening on campus?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                      rows={3}
                    />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                          <ImageIcon className="w-5 h-5" />
                          <span className="text-sm">Photo</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                          <Video className="w-5 h-5" />
                          <span className="text-sm">Video</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors">
                          <Smile className="w-5 h-5" />
                          <span className="text-sm">Feeling</span>
                        </button>
                      </div>
                      <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Feed */}
              {posts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden animate-slide-in">
                  {/* Post Header */}
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="w-12 h-12 rounded-full border-2 border-cyan-500"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{post.user.name}</h4>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <MapPin className="w-3 h-3" />
                          <span>{post.user.university}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-4">
                    <p className="text-white mb-4">{post.content}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full rounded-xl object-cover max-h-96"
                      />
                    )}
                  </div>

                  {/* Post Actions */}
                  <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-pink-500 transition-colors">
                        <ThumbsUp className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-500 transition-colors">
                        <MessageCircle className="w-5 h-5" />
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

            {/* Right Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* Trending Topics */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-white font-semibold">Trending on Campus</h3>
                  </div>
                  <div className="space-y-4">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="text-cyan-400 font-medium">{topic.tag}</p>
                          <p className="text-gray-400 text-sm">{topic.posts} posts</p>
                        </div>
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <Globe className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Events */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
                    <h3 className="text-white font-semibold">Live Now</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop"
                        alt="Live Match"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white font-semibold text-sm">Manchester United vs Liverpool</p>
                        <p className="text-gray-300 text-xs">EPL • 2nd Half</p>
                      </div>
                      <div className="absolute top-3 right-3 bg-red-500 px-2 py-1 rounded text-white text-xs font-bold">
                        LIVE
                      </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&h=200&fit=crop"
                        alt="Live Match"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white font-semibold text-sm">Chelsea vs Arsenal</p>
                        <p className="text-gray-300 text-xs">EPL • 1st Half</p>
                      </div>
                      <div className="absolute top-3 right-3 bg-red-500 px-2 py-1 rounded text-white text-xs font-bold">
                        LIVE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suggested Friends */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold mb-4">People You May Know</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Jessica Lee', university: 'UCLA', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop' },
                      { name: 'David Park', university: 'NYU', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
                      { name: 'Sophia Martinez', university: 'Columbia', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
                    ].map((person, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={person.avatar}
                            alt={person.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="text-white text-sm font-medium">{person.name}</p>
                            <p className="text-gray-400 text-xs">{person.university}</p>
                          </div>
                        </div>
                        <button className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/30 transition-colors">
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'text-cyan-400'
                  : 'text-gray-400'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

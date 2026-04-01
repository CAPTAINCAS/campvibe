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
  MapPin,
  GraduationCap,
  Calendar,
  X as XIcon,
  Check,
  Star,
  MessageSquare,
  Filter,
  SlidersHorizontal,
  ChevronDown,
  Zap,
  Flame,
  Shield,
  Verified
} from 'lucide-react'

export default function DatingPage() {
  const [activeTab, setActiveTab] = useState('dating')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [matches, setMatches] = useState<number[]>([])
  const [likes, setLikes] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const navItems = [
    { id: 'feed', label: 'Feed', icon: Home, href: '/' },
    { id: 'videos', label: 'Videos', icon: Video, href: '/videos' },
    { id: 'dating', label: 'Dating', icon: Heart, href: '/dating' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, href: '/chat' },
    { id: 'streaming', label: 'Live', icon: Tv, href: '/streaming' },
    { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  ]

  const profiles = [
    {
      id: 1,
      name: 'Emma Wilson',
      age: 21,
      university: 'Harvard University',
      major: 'Computer Science',
      year: 'Junior',
      bio: 'Looking for someone to explore campus with! 🌟 Love coding, hiking, and late-night study sessions. Let\'s grab coffee and talk about life!',
      interests: ['Coding', 'Hiking', 'Coffee', 'Music', 'Travel'],
      photos: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop'
      ],
      distance: '0.5 miles away',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Chen',
      age: 20,
      university: 'Stanford University',
      major: 'Business Administration',
      year: 'Sophomore',
      bio: 'Future entrepreneur with a passion for innovation 💡 Looking for someone ambitious and fun-loving. Let\'s build something amazing together!',
      interests: ['Entrepreneurship', 'Yoga', 'Photography', 'Food', 'Networking'],
      photos: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop'
      ],
      distance: '1.2 miles away',
      verified: true
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      age: 22,
      university: 'MIT',
      major: 'Mechanical Engineering',
      year: 'Senior',
      bio: 'Engineer by day, artist by night 🎨 Love solving problems and creating beautiful things. Looking for someone who appreciates both logic and creativity!',
      interests: ['Engineering', 'Art', 'Robotics', 'Dancing', 'Cooking'],
      photos: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop'
      ],
      distance: '2.1 miles away',
      verified: false
    },
    {
      id: 4,
      name: 'Olivia Thompson',
      age: 19,
      university: 'UCLA',
      major: 'Psychology',
      year: 'Freshman',
      bio: 'Psychology major who loves understanding people 🧠 Looking for deep conversations and genuine connections. Let\'s explore the campus together!',
      interests: ['Psychology', 'Reading', 'Movies', 'Coffee', 'Nature'],
      photos: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop'
      ],
      distance: '0.8 miles away',
      verified: true
    }
  ]

  const handleLike = (profileId: number) => {
    if (!likes.includes(profileId)) {
      setLikes([...likes, profileId])
      // Simulate match (50% chance)
      if (Math.random() > 0.5) {
        setMatches([...matches, profileId])
      }
    }
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1)
    }
  }

  const handlePass = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1)
    }
  }

  const handleSuperLike = (profileId: number) => {
    if (!likes.includes(profileId)) {
      setLikes([...likes, profileId])
      setMatches([...matches, profileId])
    }
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1)
    }
  }

  const currentProfile = profiles[currentProfileIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-pink-400">CampVibe Dating</span>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search matches..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                      ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
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
                      ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - Matches */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* Your Matches */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Your Matches</h3>
                    <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">
                      {matches.length}
                    </span>
                  </div>
                  {matches.length > 0 ? (
                    <div className="space-y-3">
                      {profiles
                        .filter(p => matches.includes(p.id))
                        .map((profile) => (
                          <div key={profile.id} className="flex items-center space-x-3">
                            <img
                              src={profile.photos[0]}
                              alt={profile.name}
                              className="w-12 h-12 rounded-full border-2 border-pink-500"
                            />
                            <div className="flex-1">
                              <p className="text-white text-sm font-medium">{profile.name}</p>
                              <p className="text-gray-400 text-xs">{profile.university}</p>
                            </div>
                            <button className="p-2 text-pink-400 hover:bg-pink-500/20 rounded-lg transition-colors">
                              <MessageSquare className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">No matches yet. Keep swiping!</p>
                  )}
                </div>

                {/* Likes Sent */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold mb-4">Likes Sent</h3>
                  {likes.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {profiles
                        .filter(p => likes.includes(p.id))
                        .map((profile) => (
                          <img
                            key={profile.id}
                            src={profile.photos[0]}
                            alt={profile.name}
                            className="w-10 h-10 rounded-full border-2 border-pink-500"
                          />
                        ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">No likes sent yet</p>
                  )}
                </div>

                {/* Dating Stats */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold mb-4">Your Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-pink-400">{likes.length}</p>
                      <p className="text-gray-400 text-sm">Likes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-pink-400">{matches.length}</p>
                      <p className="text-gray-400 text-sm">Matches</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-pink-400">89%</p>
                      <p className="text-gray-400 text-sm">Response</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-pink-400">12</p>
                      <p className="text-gray-400 text-sm">Dates</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Dating Card */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Profile Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20">
                  {/* Profile Photos */}
                  <div className="relative aspect-[3/4] max-h-[70vh]">
                    <img
                      src={currentProfile.photos[0]}
                      alt={currentProfile.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Photo Indicators */}
                    <div className="absolute top-4 left-4 right-4 flex space-x-2">
                      {currentProfile.photos.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 flex-1 rounded-full ${
                            index === 0 ? 'bg-white' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Verified Badge */}
                    {currentProfile.verified && (
                      <div className="absolute top-4 right-4 bg-blue-500 p-2 rounded-full">
                        <Verified className="w-5 h-5 text-white" />
                      </div>
                    )}

                    {/* Profile Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <h2 className="text-3xl font-bold text-white">{currentProfile.name}</h2>
                        <span className="text-2xl text-white">{currentProfile.age}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-gray-300 mb-3">
                        <div className="flex items-center space-x-1">
                          <GraduationCap className="w-4 h-4" />
                          <span>{currentProfile.university}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{currentProfile.distance}</span>
                        </div>
                      </div>

                      <p className="text-white mb-4">{currentProfile.bio}</p>

                      <div className="flex flex-wrap gap-2">
                        {currentProfile.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-white text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center space-x-4 mt-6">
                  {/* Pass */}
                  <button
                    onClick={handlePass}
                    className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:bg-red-500/20 hover:border-red-500 transition-all"
                  >
                    <XIcon className="w-8 h-8 text-red-400" />
                  </button>

                  {/* Super Like */}
                  <button
                    onClick={() => handleSuperLike(currentProfile.id)}
                    className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:bg-blue-500/20 hover:border-blue-500 transition-all"
                  >
                    <Star className="w-6 h-6 text-blue-400" />
                  </button>

                  {/* Like */}
                  <button
                    onClick={() => handleLike(currentProfile.id)}
                    className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/30"
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </button>

                  {/* Boost */}
                  <button className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:bg-purple-500/20 hover:border-purple-500 transition-all">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </button>
                </div>

                {/* Profile Counter */}
                <div className="text-center mt-4">
                  <p className="text-gray-400 text-sm">
                    {currentProfileIndex + 1} of {profiles.length} profiles
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* Filters */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Filters</h3>
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <SlidersHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {showFilters && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-400 text-sm">Age Range</label>
                        <div className="flex items-center space-x-2 mt-2">
                          <input
                            type="number"
                            defaultValue={18}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
                          />
                          <span className="text-gray-400">to</span>
                          <input
                            type="number"
                            defaultValue={25}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-gray-400 text-sm">Distance</label>
                        <input
                          type="range"
                          min="1"
                          max="50"
                          defaultValue={10}
                          className="w-full mt-2"
                        />
                        <p className="text-gray-400 text-xs mt-1">Up to 10 miles</p>
                      </div>

                      <div>
                        <label className="text-gray-400 text-sm">University</label>
                        <select className="w-full mt-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm">
                          <option value="">All Universities</option>
                          <option value="harvard">Harvard University</option>
                          <option value="stanford">Stanford University</option>
                          <option value="mit">MIT</option>
                          <option value="ucla">UCLA</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Safety Tips */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="w-5 h-5 text-green-400" />
                    <h3 className="text-white font-semibold">Safety Tips</h3>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Meet in public places first</li>
                    <li>• Tell a friend about your date</li>
                    <li>• Trust your instincts</li>
                    <li>• Report suspicious behavior</li>
                  </ul>
                </div>

                {/* Premium Features */}
                <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <h3 className="text-white font-semibold">Go Premium</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Unlimited likes</li>
                    <li>• See who likes you</li>
                    <li>• Advanced filters</li>
                    <li>• Super likes daily</li>
                  </ul>
                  <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Upgrade Now
                  </button>
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
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'text-pink-400'
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

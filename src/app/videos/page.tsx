'use client'

import { useState, useRef, useEffect } from 'react'
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
  Pause,
  Volume2,
  VolumeX,
  ThumbsUp,
  Share2,
  Bookmark,
  MoreHorizontal,
  Music,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Flame,
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  Send,
  Smile,
  Image as ImageIcon,
  Plus,
  ArrowLeft
} from 'lucide-react'

export default function VideosPage() {
  const [activeTab, setActiveTab] = useState('videos')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [likedVideos, setLikedVideos] = useState<number[]>([])
  const [downloadProgress, setDownloadProgress] = useState<{[key: number]: number}>({})
  const [isDownloading, setIsDownloading] = useState<{[key: number]: boolean}>({})
  const videoRef = useRef<HTMLVideoElement>(null)

  const navItems = [
    { id: 'feed', label: 'Feed', icon: Home, href: '/' },
    { id: 'videos', label: 'Videos', icon: Video, href: '/videos' },
    { id: 'dating', label: 'Dating', icon: Heart, href: '/dating' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, href: '/chat' },
    { id: 'streaming', label: 'Live', icon: Tv, href: '/streaming' },
    { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  ]

  const videos = [
    {
      id: 1,
      user: { name: 'CampusVibes', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop', followers: '125K' },
      description: 'POV: When you finally finish your thesis 🎓 #CampusLife #Graduation #College',
      video: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=700&fit=crop',
      likes: 45200,
      comments: 1234,
      shares: 892,
      song: 'Original Sound - CampusVibes'
    },
    {
      id: 2,
      user: { name: 'StudyWithMe', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', followers: '89K' },
      description: 'Library study session at 2AM hits different 📚 #StudyTok #College #FinalsWeek',
      video: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=700&fit=crop',
      likes: 32100,
      comments: 892,
      shares: 456,
      song: 'Lofi Study Beats - ChillHop'
    },
    {
      id: 3,
      user: { name: 'PartyPeople', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', followers: '234K' },
      description: 'Friday night campus party vibes 🎉 #CollegeParty #Weekend #CampusLife',
      video: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=700&fit=crop',
      likes: 78900,
      comments: 2341,
      shares: 1567,
      song: 'Party Mix 2024 - DJ Campus'
    },
    {
      id: 4,
      user: { name: 'SportsFan', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', followers: '156K' },
      description: 'Campus basketball game was insane! 🏀 #CollegeSports #GameDay #MarchMadness',
      video: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=700&fit=crop',
      likes: 56700,
      comments: 1892,
      shares: 945,
      song: 'Game Day Anthem - SportsBeats'
    },
    {
      id: 5,
      user: { name: 'FoodieCampus', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', followers: '67K' },
      description: 'Dining hall food tier list 🍕 #CollegeFood #DiningHall #FoodTok',
      video: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=700&fit=crop',
      likes: 23400,
      comments: 567,
      shares: 234,
      song: 'Cooking Vibes - KitchenBeats'
    }
  ]

  const handleLike = (videoId: number) => {
    if (likedVideos.includes(videoId)) {
      setLikedVideos(likedVideos.filter(id => id !== videoId))
    } else {
      setLikedVideos([...likedVideos, videoId])
    }
  }

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    }
  }

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const handleDownload = async (videoId: number, videoUrl: string, videoTitle: string) => {
    setIsDownloading({ ...isDownloading, [videoId]: true })
    setDownloadProgress({ ...downloadProgress, [videoId]: 0 })

    // Simulate download progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200))
      setDownloadProgress({ ...downloadProgress, [videoId]: i })
    }

    // Create download link
    const link = document.createElement('a')
    link.href = videoUrl
    link.download = `${videoTitle}.mp4`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setIsDownloading({ ...isDownloading, [videoId]: false })
    setDownloadProgress({ ...downloadProgress, [videoId]: 100 })
  }

  const handleMusicDownload = async (videoId: number, songTitle: string) => {
    setIsDownloading({ ...isDownloading, [videoId]: true })
    setDownloadProgress({ ...downloadProgress, [videoId]: 0 })

    // Simulate download progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200))
      setDownloadProgress({ ...downloadProgress, [videoId]: i })
    }

    // Create download link for music
    const link = document.createElement('a')
    link.href = `https://music.campvibe.co.ke/download/${encodeURIComponent(songTitle)}.mp3`
    link.download = `${songTitle}.mp3`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setIsDownloading({ ...isDownloading, [videoId]: false })
    setDownloadProgress({ ...downloadProgress, [videoId]: 100 })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
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
                  placeholder="Search videos..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
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
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
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
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
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

      {/* Main Content - TikTok Style Video Feed */}
      <main className="pt-16 pb-20 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - Trending */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* Trending Hashtags */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center space-x-2 mb-4">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <h3 className="text-white font-semibold">Trending</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { tag: '#CampusLife', views: '2.5M' },
                      { tag: '#CollegeParty', views: '1.8M' },
                      { tag: '#StudyTok', views: '1.2M' },
                      { tag: '#DormLife', views: '980K' },
                      { tag: '#Graduation', views: '750K' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="text-cyan-400 font-medium">{item.tag}</p>
                          <p className="text-gray-400 text-sm">{item.views} views</p>
                        </div>
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggested Creators */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Suggested Creators</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'CampusComedy', followers: '450K', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
                      { name: 'StudyTips', followers: '320K', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
                      { name: 'CampusFood', followers: '280K', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
                    ].map((creator, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={creator.avatar}
                            alt={creator.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="text-white text-sm font-medium">{creator.name}</p>
                            <p className="text-gray-400 text-xs">{creator.followers} followers</p>
                          </div>
                        </div>
                        <button className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/30 transition-colors">
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Video Feed */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Video Container */}
                <div className="relative bg-black rounded-2xl overflow-hidden aspect-[9/16] max-h-[80vh] mx-auto">
                  {/* Video Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${videos[currentVideoIndex].video})` }}
                  />
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                  {/* Play/Pause Button */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {!isPlaying && (
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    )}
                  </button>

                  {/* Navigation Arrows */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
                    <button
                      onClick={handlePrevVideo}
                      disabled={currentVideoIndex === 0}
                      className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center disabled:opacity-30"
                    >
                      <ChevronUp className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={handleNextVideo}
                      disabled={currentVideoIndex === videos.length - 1}
                      className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center disabled:opacity-30"
                    >
                      <ChevronDown className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* User Info */}
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={videos[currentVideoIndex].user.avatar}
                        alt={videos[currentVideoIndex].user.name}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <div>
                        <p className="text-white font-semibold">{videos[currentVideoIndex].user.name}</p>
                        <p className="text-gray-300 text-sm">{videos[currentVideoIndex].user.followers} followers</p>
                      </div>
                      <button className="ml-4 px-4 py-1 bg-cyan-500 text-white rounded-full text-sm font-semibold hover:bg-cyan-600 transition-colors">
                        Follow
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-white mb-4">{videos[currentVideoIndex].description}</p>

                    {/* Song */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Music className="w-4 h-4 text-white" />
                      <div className="flex-1 overflow-hidden">
                        <p className="text-white text-sm truncate">{videos[currentVideoIndex].song}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Actions */}
                  <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6">
                    {/* Like */}
                    <button
                      onClick={() => handleLike(videos[currentVideoIndex].id)}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        likedVideos.includes(videos[currentVideoIndex].id)
                          ? 'bg-pink-500'
                          : 'bg-white/20 backdrop-blur-lg'
                      }`}>
                        <Heart className={`w-6 h-6 ${
                          likedVideos.includes(videos[currentVideoIndex].id)
                            ? 'text-white fill-white'
                            : 'text-white'
                        }`} />
                      </div>
                      <span className="text-white text-sm mt-1">
                        {formatNumber(videos[currentVideoIndex].likes + (likedVideos.includes(videos[currentVideoIndex].id) ? 1 : 0))}
                      </span>
                    </button>

                    {/* Comment */}
                    <button className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white text-sm mt-1">
                        {formatNumber(videos[currentVideoIndex].comments)}
                      </span>
                    </button>

                    {/* Share */}
                    <button className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                        <Share2 className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white text-sm mt-1">
                        {formatNumber(videos[currentVideoIndex].shares)}
                      </span>
                    </button>

                    {/* Bookmark */}
                    <button className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                        <Bookmark className="w-6 h-6 text-white" />
                      </div>
                    </button>

                    {/* Music Disc */}
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-spin-slow">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Video Progress */}
                <div className="mt-4 flex items-center space-x-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        index === currentVideoIndex
                          ? 'bg-cyan-500'
                          : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* Create Video */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Create Video</h3>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    <Plus className="w-5 h-5" />
                    <span>Upload Video</span>
                  </button>
                </div>

                {/* Live Videos */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
                    <h3 className="text-white font-semibold">Live Now</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { user: 'CampusRadio', viewers: '1.2K', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
                      { user: 'StudyStream', viewers: '890', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
                    ].map((live, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={live.avatar}
                            alt={live.user}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{live.user}</p>
                          <p className="text-gray-400 text-xs">{live.viewers} watching</p>
                        </div>
                        <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm hover:bg-red-500/30 transition-colors">
                          Watch
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Your Stats */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Your Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">156</p>
                      <p className="text-gray-400 text-sm">Videos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">12.5K</p>
                      <p className="text-gray-400 text-sm">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">89.2K</p>
                      <p className="text-gray-400 text-sm">Likes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">2.3M</p>
                      <p className="text-gray-400 text-sm">Views</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'text-cyan-400'
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

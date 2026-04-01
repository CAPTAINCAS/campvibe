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
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Settings,
  Users,
  MessageSquare,
  ThumbsUp,
  Share2,
  Bookmark,
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Target,
  TrendingUp,
  Flame,
  Star,
  ChevronRight,
  ChevronLeft,
  Radio,
  Zap,
  Eye,
  Globe,
  Shield,
  Flag,
  Timer,
  BarChart3,
  Activity,
  Wifi,
  WifiOff,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Copy,
  Link as LinkIcon,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  Send
} from 'lucide-react'

interface Match {
  id: number
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  homeLogo: string
  awayLogo: string
  status: 'live' | 'upcoming' | 'finished'
  time: string
  league: string
  viewers: number
  isHot?: boolean
}

interface Stream {
  id: number
  title: string
  thumbnail: string
  streamer: string
  viewers: number
  isLive: boolean
  category: string
  tags: string[]
}

export default function StreamingPage() {
  const [activeTab, setActiveTab] = useState('streaming')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showChat, setShowChat] = useState(true)
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'FootballFan', message: 'What a goal! 🔥', time: '2m ago' },
    { id: 2, user: 'RedDevil', message: 'Come on United!', time: '1m ago' },
    { id: 3, user: 'BlueMoon', message: 'Great save by the keeper!', time: '30s ago' },
    { id: 4, user: 'Gunner', message: 'This match is intense!', time: '15s ago' },
  ])

  const navItems = [
    { id: 'feed', label: 'Feed', icon: Home, href: '/' },
    { id: 'videos', label: 'Videos', icon: Video, href: '/videos' },
    { id: 'dating', label: 'Dating', icon: Heart, href: '/dating' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, href: '/chat' },
    { id: 'streaming', label: 'Live', icon: Tv, href: '/streaming' },
    { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  ]

  const liveMatches: Match[] = [
    {
      id: 1,
      homeTeam: 'Manchester United',
      awayTeam: 'Liverpool',
      homeScore: 2,
      awayScore: 1,
      homeLogo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop',
      awayLogo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&h=100&fit=crop',
      status: 'live',
      time: '67\'',
      league: 'Premier League',
      viewers: 125000,
      isHot: true
    },
    {
      id: 2,
      homeTeam: 'Chelsea',
      awayTeam: 'Arsenal',
      homeScore: 0,
      awayScore: 0,
      homeLogo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop',
      awayLogo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&h=100&fit=crop',
      status: 'live',
      time: '23\'',
      league: 'Premier League',
      viewers: 98000
    },
    {
      id: 3,
      homeTeam: 'Manchester City',
      awayTeam: 'Tottenham',
      homeScore: 3,
      awayScore: 2,
      homeLogo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop',
      awayLogo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&h=100&fit=crop',
      status: 'live',
      time: '89\'',
      league: 'Premier League',
      viewers: 156000,
      isHot: true
    }
  ]

  const upcomingMatches: Match[] = [
    {
      id: 4,
      homeTeam: 'Newcastle',
      awayTeam: 'Aston Villa',
      homeScore: 0,
      awayScore: 0,
      homeLogo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop',
      awayLogo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&h=100&fit=crop',
      status: 'upcoming',
      time: '15:00',
      league: 'Premier League',
      viewers: 0
    },
    {
      id: 5,
      homeTeam: 'Brighton',
      awayTeam: 'West Ham',
      homeScore: 0,
      awayScore: 0,
      homeLogo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop',
      awayLogo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&h=100&fit=crop',
      status: 'upcoming',
      time: '17:30',
      league: 'Premier League',
      viewers: 0
    }
  ]

  const otherStreams: Stream[] = [
    {
      id: 1,
      title: 'Match Analysis & Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=225&fit=crop',
      streamer: 'FootballExpert',
      viewers: 45000,
      isLive: true,
      category: 'Sports',
      tags: ['Analysis', 'Highlights', 'EPL']
    },
    {
      id: 2,
      title: 'Pre-Match Discussion',
      thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=225&fit=crop',
      streamer: 'SportsTalk',
      viewers: 23000,
      isLive: true,
      category: 'Sports',
      tags: ['Discussion', 'Preview', 'EPL']
    },
    {
      id: 3,
      title: 'Fantasy Football Tips',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=225&fit=crop',
      streamer: 'FantasyPro',
      viewers: 18000,
      isLive: true,
      category: 'Sports',
      tags: ['Fantasy', 'Tips', 'EPL']
    }
  ]

  const formatViewers = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        user: 'You',
        message: chatMessage,
        time: 'Just now'
      }
      setChatMessages([...chatMessages, newMessage])
      setChatMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-green-400">CampVibe Live</span>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search matches, streams..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
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
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
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
            {/* Left Sidebar - Live Matches */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* Live Now */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
                    <h3 className="text-white font-semibold">Live Now</h3>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">
                      {liveMatches.length}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {liveMatches.map((match) => (
                      <button
                        key={match.id}
                        onClick={() => setSelectedMatch(match)}
                        className={`w-full p-3 rounded-xl transition-all ${
                          selectedMatch?.id === match.id
                            ? 'bg-green-500/20 border border-green-500'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-xs">{match.league}</span>
                          {match.isHot && (
                            <Flame className="w-4 h-4 text-orange-400" />
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <img
                              src={match.homeLogo}
                              alt={match.homeTeam}
                              className="w-6 h-6 rounded-full"
                            />
                            <span className="text-white text-sm font-medium">{match.homeTeam}</span>
                          </div>
                          <span className="text-white font-bold">{match.homeScore}</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center space-x-2">
                            <img
                              src={match.awayLogo}
                              alt={match.awayTeam}
                              className="w-6 h-6 rounded-full"
                            />
                            <span className="text-white text-sm font-medium">{match.awayTeam}</span>
                          </div>
                          <span className="text-white font-bold">{match.awayScore}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-green-400 text-xs font-medium">{match.time}</span>
                          <div className="flex items-center space-x-1 text-gray-400 text-xs">
                            <Eye className="w-3 h-3" />
                            <span>{formatViewers(match.viewers)}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upcoming Matches */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold mb-4">Upcoming</h3>
                  <div className="space-y-3">
                    {upcomingMatches.map((match) => (
                      <div key={match.id} className="p-3 bg-white/5 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-xs">{match.league}</span>
                          <span className="text-gray-400 text-xs">{match.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <img
                              src={match.homeLogo}
                              alt={match.homeTeam}
                              className="w-5 h-5 rounded-full"
                            />
                            <span className="text-white text-sm">{match.homeTeam}</span>
                          </div>
                          <span className="text-gray-400 text-sm">vs</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm">{match.awayTeam}</span>
                            <img
                              src={match.awayLogo}
                              alt={match.awayTeam}
                              className="w-5 h-5 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Stream */}
            <div className="lg:col-span-6">
              {selectedMatch ? (
                <div className="space-y-6">
                  {/* Video Player */}
                  <div className="bg-black rounded-2xl overflow-hidden relative">
                    {/* Video */}
                    <div className="aspect-video bg-gradient-to-br from-green-900 to-slate-900 relative">
                      {/* Placeholder for video */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Tv className="w-16 h-16 text-green-400 mx-auto mb-4" />
                          <p className="text-white font-semibold text-lg">{selectedMatch.homeTeam} vs {selectedMatch.awayTeam}</p>
                          <p className="text-gray-400">{selectedMatch.league}</p>
                        </div>
                      </div>

                      {/* Live Badge */}
                      <div className="absolute top-4 left-4 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
                      </div>

                      {/* Score Overlay */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg rounded-xl p-3">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <img
                              src={selectedMatch.homeLogo}
                              alt={selectedMatch.homeTeam}
                              className="w-8 h-8 rounded-full mx-auto mb-1"
                            />
                            <p className="text-white text-sm font-medium">{selectedMatch.homeTeam}</p>
                            <p className="text-2xl font-bold text-white">{selectedMatch.homeScore}</p>
                          </div>
                          <div className="text-gray-400 text-sm">vs</div>
                          <div className="text-center">
                            <img
                              src={selectedMatch.awayLogo}
                              alt={selectedMatch.awayTeam}
                              className="w-8 h-8 rounded-full mx-auto mb-1"
                            />
                            <p className="text-white text-sm font-medium">{selectedMatch.awayTeam}</p>
                            <p className="text-2xl font-bold text-white">{selectedMatch.awayScore}</p>
                          </div>
                        </div>
                        <div className="text-center mt-2">
                          <span className="text-green-400 font-bold">{selectedMatch.time}</span>
                        </div>
                      </div>

                      {/* Viewers */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/50 backdrop-blur-lg rounded-lg px-3 py-2">
                        <Eye className="w-4 h-4 text-white" />
                        <span className="text-white text-sm">{formatViewers(selectedMatch.viewers)} watching</span>
                      </div>

                      {/* Controls */}
                      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="p-2 bg-black/50 backdrop-blur-lg rounded-lg hover:bg-black/70 transition-colors"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-white" />
                          ) : (
                            <Play className="w-5 h-5 text-white" />
                          )}
                        </button>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-2 bg-black/50 backdrop-blur-lg rounded-lg hover:bg-black/70 transition-colors"
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5 text-white" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-white" />
                          )}
                        </button>
                        <button
                          onClick={() => setIsFullscreen(!isFullscreen)}
                          className="p-2 bg-black/50 backdrop-blur-lg rounded-lg hover:bg-black/70 transition-colors"
                        >
                          {isFullscreen ? (
                            <Minimize2 className="w-5 h-5 text-white" />
                          ) : (
                            <Maximize2 className="w-5 h-5 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Match Info */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-white font-bold text-xl">{selectedMatch.homeTeam} vs {selectedMatch.awayTeam}</h2>
                        <p className="text-gray-400">{selectedMatch.league}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                          <ThumbsUp className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                          <Bookmark className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Match Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-white/5 rounded-xl">
                        <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <p className="text-white font-bold">{selectedMatch.homeScore + selectedMatch.awayScore}</p>
                        <p className="text-gray-400 text-sm">Goals</p>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-xl">
                        <Activity className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <p className="text-white font-bold">{selectedMatch.time}</p>
                        <p className="text-gray-400 text-sm">Minute</p>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-xl">
                        <Eye className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-white font-bold">{formatViewers(selectedMatch.viewers)}</p>
                        <p className="text-gray-400 text-sm">Viewers</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
                  <Tv className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Select a Match</h3>
                  <p className="text-gray-400">Choose a live match from the sidebar to start watching</p>
                </div>
              )}
            </div>

            {/* Right Sidebar - Chat & Other Streams */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* Live Chat */}
                {selectedMatch && showChat && (
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 flex flex-col h-96">
                    <div className="p-4 border-b border-white/10 flex items-center justify-between">
                      <h3 className="text-white font-semibold">Live Chat</h3>
                      <button
                        onClick={() => setShowChat(false)}
                        className="p-1 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className="flex items-start space-x-2">
                          <span className="text-green-400 font-medium text-sm">{msg.user}:</span>
                          <span className="text-white text-sm">{msg.message}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-white/10">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Send a message..."
                          className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                          onClick={handleSendMessage}
                          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Other Streams */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold mb-4">Other Streams</h3>
                  <div className="space-y-4">
                    {otherStreams.map((stream) => (
                      <div key={stream.id} className="group cursor-pointer">
                        <div className="relative rounded-xl overflow-hidden mb-2">
                          <img
                            src={stream.thumbnail}
                            alt={stream.title}
                            className="w-full h-24 object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                          {stream.isLive && (
                            <div className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-bold">
                              LIVE
                            </div>
                          )}
                        </div>
                        <h4 className="text-white text-sm font-medium">{stream.title}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-gray-400 text-xs">{stream.streamer}</span>
                          <div className="flex items-center space-x-1 text-gray-400 text-xs">
                            <Eye className="w-3 h-3" />
                            <span>{formatViewers(stream.viewers)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold mb-4">Today's Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Live Matches</span>
                      <span className="text-white font-medium">{liveMatches.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Total Viewers</span>
                      <span className="text-white font-medium">
                        {formatViewers(liveMatches.reduce((sum, m) => sum + m.viewers, 0))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Upcoming</span>
                      <span className="text-white font-medium">{upcomingMatches.length}</span>
                    </div>
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
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'text-green-400'
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

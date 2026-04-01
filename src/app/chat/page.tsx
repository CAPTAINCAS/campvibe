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
  Sparkles,
  Send,
  Smile,
  Image as ImageIcon,
  Paperclip,
  Phone,
  Video as VideoIcon,
  MoreVertical,
  Check,
  CheckCheck,
  Circle,
  ArrowLeft,
  Mic,
  StopCircle,
  Play,
  Pause,
  Trash2,
  Reply,
  Forward,
  Copy,
  Star,
  Info,
  Settings,
  Users,
  Group,
  Plus,
  Filter,
  Archive,
  Pin,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  MicOff,
  Camera,
  CameraOff,
  Monitor,
  MonitorOff,
  PhoneOff,
  MessageSquare
} from 'lucide-react'

interface Message {
  id: number
  sender: string
  content: string
  time: string
  isMe: boolean
  status: 'sent' | 'delivered' | 'read'
  type: 'text' | 'image' | 'voice' | 'video'
  duration?: string
}

interface Chat {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
  isGroup: boolean
  university?: string
}

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState('chat')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [showVideoCall, setShowVideoCall] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { id: 'feed', label: 'Feed', icon: Home, href: '/' },
    { id: 'videos', label: 'Videos', icon: Video, href: '/videos' },
    { id: 'dating', label: 'Dating', icon: Heart, href: '/dating' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, href: '/chat' },
    { id: 'streaming', label: 'Live', icon: Tv, href: '/streaming' },
    { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  ]

  const chats: Chat[] = [
    {
      id: 1,
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      lastMessage: 'Hey! Are you coming to the study group tonight?',
      time: '2m ago',
      unread: 2,
      online: true,
      isGroup: false,
      university: 'Harvard University'
    },
    {
      id: 2,
      name: 'CS Study Group',
      avatar: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop',
      lastMessage: 'Mike: Don\'t forget to bring your laptops!',
      time: '15m ago',
      unread: 5,
      online: false,
      isGroup: true
    },
    {
      id: 3,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      lastMessage: 'Thanks for the notes! 📚',
      time: '1h ago',
      unread: 0,
      online: true,
      isGroup: false,
      university: 'Stanford University'
    },
    {
      id: 4,
      name: 'Campus Events',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      lastMessage: 'New event: Spring Festival this Saturday!',
      time: '3h ago',
      unread: 12,
      online: false,
      isGroup: true
    },
    {
      id: 5,
      name: 'Jessica Martinez',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
      lastMessage: 'See you at the library tomorrow!',
      time: '5h ago',
      unread: 0,
      online: false,
      isGroup: false,
      university: 'MIT'
    }
  ]

  const initialMessages: Message[] = [
    {
      id: 1,
      sender: 'Emma Wilson',
      content: 'Hey! How\'s your day going?',
      time: '10:30 AM',
      isMe: false,
      status: 'read',
      type: 'text'
    },
    {
      id: 2,
      sender: 'Me',
      content: 'Pretty good! Just finished my morning classes. You?',
      time: '10:32 AM',
      isMe: true,
      status: 'read',
      type: 'text'
    },
    {
      id: 3,
      sender: 'Emma Wilson',
      content: 'Same here! Are you coming to the study group tonight?',
      time: '10:33 AM',
      isMe: false,
      status: 'read',
      type: 'text'
    },
    {
      id: 4,
      sender: 'Me',
      content: 'Definitely! What time and where?',
      time: '10:35 AM',
      isMe: true,
      status: 'delivered',
      type: 'text'
    },
    {
      id: 5,
      sender: 'Emma Wilson',
      content: 'Library room 204 at 7 PM. Don\'t forget to bring your notes!',
      time: '10:36 AM',
      isMe: false,
      status: 'read',
      type: 'text'
    }
  ]

  useEffect(() => {
    if (selectedChat) {
      setMessages(initialMessages)
    }
  }, [selectedChat])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'Me',
        content: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true,
        status: 'sent',
        type: 'text'
      }
      setMessages([...messages, newMessage])
      setMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Start recording
      setTimeout(() => {
        const voiceMessage: Message = {
          id: messages.length + 1,
          sender: 'Me',
          content: 'Voice message',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: true,
          status: 'sent',
          type: 'voice',
          duration: '0:15'
        }
        setMessages([...messages, voiceMessage])
        setIsRecording(false)
      }, 3000)
    }
  }

  const formatTime = (time: string) => {
    return time
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-blue-400">CampVibe Chat</span>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
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
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
            {/* Chat List */}
            <aside className={`lg:col-span-4 ${selectedChat ? 'hidden lg:block' : ''}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 h-full flex flex-col">
                {/* Chat List Header */}
                <div className="p-4 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white font-semibold text-lg">Messages</h2>
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 py-2 px-3 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">
                      All
                    </button>
                    <button className="flex-1 py-2 px-3 text-gray-400 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                      Unread
                    </button>
                    <button className="flex-1 py-2 px-3 text-gray-400 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                      Groups
                    </button>
                  </div>
                </div>

                {/* Chat List */}
                <div className="flex-1 overflow-y-auto">
                  {chats.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className={`w-full p-4 flex items-center space-x-3 hover:bg-white/5 transition-colors ${
                        selectedChat?.id === chat.id ? 'bg-white/10' : ''
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-12 h-12 rounded-full"
                        />
                        {chat.online && !chat.isGroup && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-medium">{chat.name}</h3>
                          <span className="text-gray-400 text-xs">{chat.time}</span>
                        </div>
                        <p className="text-gray-400 text-sm truncate">{chat.lastMessage}</p>
                        {chat.university && (
                          <p className="text-gray-500 text-xs">{chat.university}</p>
                        )}
                      </div>
                      {chat.unread > 0 && (
                        <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                          {chat.unread}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Chat Window */}
            <div className={`lg:col-span-8 ${!selectedChat ? 'hidden lg:flex' : 'flex'} flex-col`}>
              {selectedChat ? (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 h-full flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setSelectedChat(null)}
                        className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <img
                        src={selectedChat.avatar}
                        alt={selectedChat.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="text-white font-medium">{selectedChat.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {selectedChat.online ? 'Online' : 'Offline'}
                          {selectedChat.isGroup && ' • 5 members'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setShowVideoCall(true)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <VideoIcon className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        <Phone className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] ${
                            msg.isMe
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                              : 'bg-white/10'
                          } rounded-2xl px-4 py-3`}
                        >
                          {msg.type === 'voice' ? (
                            <div className="flex items-center space-x-3">
                              <button className="p-2 bg-white/20 rounded-full">
                                <Play className="w-4 h-4 text-white" />
                              </button>
                              <div className="flex-1">
                                <div className="h-1 bg-white/30 rounded-full">
                                  <div className="h-1 w-1/3 bg-white rounded-full" />
                                </div>
                                <p className="text-white text-xs mt-1">{msg.duration}</p>
                              </div>
                            </div>
                          ) : (
                            <p className="text-white">{msg.content}</p>
                          )}
                          <div className={`flex items-center space-x-1 mt-1 ${
                            msg.isMe ? 'justify-end' : 'justify-start'
                          }`}>
                            <span className="text-white/60 text-xs">{msg.time}</span>
                            {msg.isMe && (
                              <span className="text-white/60">
                                {msg.status === 'read' ? (
                                  <CheckCheck className="w-3 h-3 text-blue-300" />
                                ) : msg.status === 'delivered' ? (
                                  <CheckCheck className="w-3 h-3" />
                                ) : (
                                  <Check className="w-3 h-3" />
                                )}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center space-x-3">
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        <Smile className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        <Paperclip className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        <ImageIcon className="w-5 h-5" />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type a message..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      {message ? (
                        <button
                          onClick={handleSendMessage}
                          className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-opacity"
                        >
                          <Send className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={handleVoiceRecord}
                          className={`p-3 rounded-xl transition-colors ${
                            isRecording
                              ? 'bg-red-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {isRecording ? (
                            <StopCircle className="w-5 h-5" />
                          ) : (
                            <Mic className="w-5 h-5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 h-full flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">Select a conversation</h3>
                    <p className="text-gray-400">Choose a chat to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Video Call Modal */}
      {showVideoCall && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Video Call UI */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              {/* Remote Video */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src={selectedChat?.avatar}
                  alt={selectedChat?.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Local Video (Picture-in-Picture) */}
                <div className="absolute bottom-4 right-4 w-32 h-24 bg-slate-800 rounded-xl overflow-hidden border-2 border-white/20">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Call Info */}
                <div className="absolute top-4 left-4">
                  <h3 className="text-white font-semibold">{selectedChat?.name}</h3>
                  <p className="text-gray-300 text-sm">00:45</p>
                </div>

                {/* Call Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                  <button
                    onClick={() => setIsAudioOn(!isAudioOn)}
                    className={`p-4 rounded-full ${
                      isAudioOn ? 'bg-white/20' : 'bg-red-500'
                    }`}
                  >
                    {isAudioOn ? (
                      <Mic className="w-6 h-6 text-white" />
                    ) : (
                      <MicOff className="w-6 h-6 text-white" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsVideoOn(!isVideoOn)}
                    className={`p-4 rounded-full ${
                      isVideoOn ? 'bg-white/20' : 'bg-red-500'
                    }`}
                  >
                    {isVideoOn ? (
                      <Camera className="w-6 h-6 text-white" />
                    ) : (
                      <CameraOff className="w-6 h-6 text-white" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsScreenSharing(!isScreenSharing)}
                    className={`p-4 rounded-full ${
                      isScreenSharing ? 'bg-blue-500' : 'bg-white/20'
                    }`}
                  >
                    {isScreenSharing ? (
                      <Monitor className="w-6 h-6 text-white" />
                    ) : (
                      <MonitorOff className="w-6 h-6 text-white" />
                    )}
                  </button>
                  <button
                    onClick={() => setShowVideoCall(false)}
                    className="p-4 bg-red-500 rounded-full"
                  >
                    <PhoneOff className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                  ? 'text-blue-400'
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

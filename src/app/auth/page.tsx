'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Phone, 
  Shield, 
  Smartphone,
  Key,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Globe,
  MapPin,
  GraduationCap,
  Calendar,
  ChevronDown,
  Loader2,
  Crown,
  Settings,
  Users,
  BarChart3,
  ShieldCheck
} from 'lucide-react'

type AuthMode = 'login' | 'signup' | 'mfa' | 'mfa-setup' | 'forgot-password' | 'admin-login'

interface University {
  id: number
  name: string
  location: string
  code: string
}

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mfaCode, setMfaCode] = useState(['', '', '', '', '', ''])
  const [mfaMethod, setMfaMethod] = useState<'sms' | 'authenticator' | 'email'>('sms')
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null)
  const [showUniversityDropdown, setShowUniversityDropdown] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Default admin credentials
  const ADMIN_EMAIL = 'admin@campvibe.co.ke'
  const ADMIN_PASSWORD = 'CampVibe2024!'

  const kenyanUniversities: University[] = [
    { id: 1, name: 'University of Nairobi', location: 'Nairobi', code: 'UON' },
    { id: 2, name: 'Kenyatta University', location: 'Nairobi', code: 'KU' },
    { id: 3, name: 'Moi University', location: 'Eldoret', code: 'MU' },
    { id: 4, name: 'Strathmore University', location: 'Nairobi', code: 'SU' },
    { id: 5, name: 'United States International University', location: 'Nairobi', code: 'USIU' },
    { id: 6, name: 'Jomo Kenyatta University of Agriculture and Technology', location: 'Nairobi', code: 'JKUAT' },
    { id: 7, name: 'Egerton University', location: 'Nakuru', code: 'EU' },
    { id: 8, name: 'Maseno University', location: 'Kisumu', code: 'MSU' },
    { id: 9, name: 'Daystar University', location: 'Nairobi', code: 'DU' },
    { id: 10, name: 'Mount Kenya University', location: 'Thika', code: 'MKU' },
    { id: 11, name: 'Technical University of Kenya', location: 'Nairobi', code: 'TUK' },
    { id: 12, name: 'Dedan Kimathi University of Technology', location: 'Nyeri', code: 'DeKUT' },
    { id: 13, name: 'Masinde Muliro University of Science and Technology', location: 'Kakamega', code: 'MMUST' },
    { id: 14, name: 'Pwani University', location: 'Kilifi', code: 'PU' },
    { id: 15, name: 'Kisii University', location: 'Kisii', code: 'KSU' },
    { id: 16, name: 'KCA University', location: 'Nairobi', code: 'KCA' },
    { id: 17, name: 'Africa Nazarene University', location: 'Nairobi', code: 'ANU' },
    { id: 18, name: 'Catholic University of Eastern Africa', location: 'Nairobi', code: 'CUEA' },
    { id: 19, name: 'Kenya Methodist University', location: 'Nairobi', code: 'KEMU' },
    { id: 20, name: 'St. Paul\'s University', location: 'Limuru', code: 'SPU' },
  ]

  const handleMfaCodeChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newCode = [...mfaCode]
    newCode[index] = value
    setMfaCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`mfa-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleMfaKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !mfaCode[index] && index > 0) {
      const prevInput = document.getElementById(`mfa-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (mode === 'login') {
      // Check for admin credentials
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Admin login - redirect to admin dashboard
        window.location.href = '/admin'
        return
      }
      // Regular user login
      setMode('mfa')
    } else if (mode === 'admin-login') {
      // Admin login validation
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        window.location.href = '/admin'
      } else {
        setError('Invalid admin credentials. Please try again.')
        setIsLoading(false)
        return
      }
    } else if (mode === 'signup') {
      setMode('mfa-setup')
    } else if (mode === 'mfa' || mode === 'mfa-setup') {
      // Redirect to main page
      window.location.href = '/'
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-red-900 flex items-center justify-center p-4">
      {/* Kenya Flag Colors Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/30 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-b from-red-900/20 to-green-900/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-900/30 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 via-red-500 to-black rounded-2xl mb-4 shadow-lg shadow-green-500/30">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">CampVibe</h1>
          <p className="text-gray-300 text-lg">Kenya's #1 Campus Social Network</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-2xl">🇰🇪</span>
            <span className="text-gray-400 text-sm">Proudly Kenyan</span>
          </div>
        </div>

        {/* Auth Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          {/* Mode Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => { setMode('login'); setError('') }}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                mode === 'login' || mode === 'mfa'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <User className="w-4 h-4 inline mr-2" />
              User Login
            </button>
            <button
              onClick={() => { setMode('admin-login'); setError('') }}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                mode === 'admin-login'
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Crown className="w-4 h-4 inline mr-2" />
              Admin
            </button>
          </div>

          {/* Admin Login Info */}
          {mode === 'admin-login' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-red-400 mt-0.5" />
                <div>
                  <h4 className="text-red-300 font-semibold text-sm">Admin Access</h4>
                  <p className="text-gray-400 text-xs mt-1">Full control over users, content, and platform settings</p>
                  <div className="mt-2 text-xs text-gray-500">
                    <p>Demo: admin@campvibe.co.ke</p>
                    <p>Password: CampVibe2024!</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-sm">{error}</span>
            </div>
          )}

          {/* Login Form */}
          {(mode === 'login' || mode === 'admin-login') && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {mode === 'admin-login' ? 'Admin Email' : 'University Email'}
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={mode === 'admin-login' ? 'admin@campvibe.co.ke' : 'your.email@university.ac.ke'}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {mode === 'login' && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/10 bg-white/5 text-green-500 focus:ring-green-500 focus:ring-offset-0"
                    />
                    <span className="text-gray-400 text-sm">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setMode('forgot-password')}
                    className="text-green-400 text-sm hover:text-green-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  mode === 'admin-login'
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/30'
                    : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    {mode === 'admin-login' ? <Crown className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    <span>{mode === 'admin-login' ? 'Access Admin Panel' : 'Sign In'}</span>
                  </>
                )}
              </button>

              {mode === 'login' && (
                <div className="text-center">
                  <p className="text-gray-400">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              )}
            </form>
          )}

          {/* Signup Form */}
          {mode === 'signup' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Kamau"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">University</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowUniversityDropdown(!showUniversityDropdown)}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-left text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-gray-400" />
                      <span className={selectedUniversity ? 'text-white' : 'text-gray-500'}>
                        {selectedUniversity ? selectedUniversity.name : 'Select your university'}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showUniversityDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showUniversityDropdown && (
                    <div className="absolute z-10 w-full mt-2 bg-gray-900 border border-white/10 rounded-xl max-h-60 overflow-y-auto shadow-xl">
                      {kenyanUniversities.map((uni) => (
                        <button
                          key={uni.id}
                          type="button"
                          onClick={() => {
                            setSelectedUniversity(uni)
                            setShowUniversityDropdown(false)
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-3"
                        >
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-white text-sm">{uni.name}</p>
                            <p className="text-gray-500 text-xs">{uni.location}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="your.email@university.ac.ke"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Create a strong password"
                    className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-5 h-5" />
                    <span>Create Account</span>
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* MFA Form */}
          {mode === 'mfa' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Two-Factor Authentication</h2>
                <p className="text-gray-400">Enter the verification code sent to your device</p>
              </div>

              {/* MFA Method Selection */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setMfaMethod('sms')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    mfaMethod === 'sms'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Smartphone className="w-4 h-4 inline mr-2" />
                  SMS
                </button>
                <button
                  type="button"
                  onClick={() => setMfaMethod('authenticator')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    mfaMethod === 'authenticator'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Key className="w-4 h-4 inline mr-2" />
                  App
                </button>
                <button
                  type="button"
                  onClick={() => setMfaMethod('email')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    mfaMethod === 'email'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </button>
              </div>

              {/* MFA Code Input */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-3">Verification Code</label>
                <div className="flex gap-3 justify-center">
                  {mfaCode.map((digit, index) => (
                    <input
                      key={index}
                      id={`mfa-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleMfaCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleMfaKeyDown(index, e)}
                      className="w-12 h-14 text-center text-xl font-bold bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="text-green-400 text-sm hover:text-green-300 transition-colors"
                >
                  Resend code
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading || mfaCode.some(d => !d)}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Verify</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMode('login')}
                className="w-full py-3 bg-white/5 text-gray-300 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to login</span>
              </button>
            </form>
          )}

          {/* Forgot Password */}
          {mode === 'forgot-password' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
                <p className="text-gray-400">Enter your email to receive a reset link</p>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="your.email@university.ac.ke"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-5 h-5" />
                    <span>Send Reset Link</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMode('login')}
                className="w-full py-3 bg-white/5 text-gray-300 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to login</span>
              </button>
            </form>
          )}
        </div>

        {/* Admin Features Preview */}
        {mode === 'admin-login' && (
          <div className="mt-6 p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-400" />
              Admin Privileges
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4 text-blue-400" />
                <span>User Management</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4 text-red-400" />
                <span>Content Moderation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <BarChart3 className="w-4 h-4 text-green-400" />
                <span>Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Settings className="w-4 h-4 text-purple-400" />
                <span>Platform Settings</span>
              </div>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="text-green-300 font-semibold text-sm">Secure Authentication</h4>
              <p className="text-gray-400 text-xs mt-1">
                Protected with industry-standard encryption and multifactor authentication.
              </p>
            </div>
          </div>
        </div>

        {/* Kenya Pride */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <Globe className="w-4 h-4" />
            <span>Made with ❤️ in Kenya 🇰🇪</span>
          </div>
        </div>
      </div>
    </div>
  )
}

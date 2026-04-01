# CampVibe - Kenya's Campus Social Network 🇰🇪

The ultimate social platform for Kenyan college and university students. Connect, date, stream live sports, and share your campus life!

## 🇰🇪 Kenya-First Features

- **Kenyan Universities**: Support for all major Kenyan universities (UoN, KU, Moi, Strathmore, USIU, JKUAT, etc.)
- **Local Phone Numbers**: +254 SMS verification for Kenyan mobile carriers (Safaricom, Airtel, Telkom)
- **Kenyan Shilling**: Future payment integration with M-Pesa and local banks
- **Local Content**: Kenyan campus events, news, and culture
- **Data Protection**: Compliant with Kenya Data Protection Act 2019

## ✨ Features

### 📱 Social Feed (Facebook-like)
- Create and share posts with text, images, and videos
- Like, comment, and share posts
- Follow friends and see their updates
- Trending topics and hashtags
- Real-time notifications

### 🎬 Video Feed (TikTok-style)
- Vertical video scrolling experience
- Like, comment, and share videos
- Follow creators
- Trending hashtags
- Live streaming capabilities

### 💕 Dating Feature
- Swipe-based matching system
- Profile verification
- Match notifications
- Chat with matches
- Safety tips and guidelines

### 💬 Live Chat
- Real-time messaging
- Group chats
- Voice messages
- Video calls
- File sharing

### ⚽ EPL Live Streaming
- Live football matches
- Real-time scores
- Live chat during matches
- Match statistics
- Upcoming fixtures

### 👤 User Profiles
- Customizable profiles
- Achievement system
- Post history
- Followers/Following
- Social links

## 🔒 Security Features

- **Multifactor Authentication (MFA)**: SMS, Authenticator App, and Email verification
- **End-to-End Encryption**: All messages and calls are encrypted
- **Secure Sessions**: JWT tokens with automatic expiration
- **Privacy Controls**: Granular privacy settings for all users
- **Kenya Compliance**: Data Protection Act 2019 compliant

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/campvibe.git
cd campvibe
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Option 1: Deploy to Netlify (Recommended)

1. **Build your project**
```bash
npm run build
```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in
   - Drag and drop the `.next` folder to Netlify
   - Or connect your GitHub repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

### Option 2: Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

### Option 3: Deploy with GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 4: Deploy with Dashboard

1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com)
2. Click "New Project"
3. Upload your project folder
4. Click "Deploy"

## 📁 Project Structure

```
campvibe/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main feed page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── videos/
│   │   │   └── page.tsx          # TikTok-style video feed
│   │   ├── dating/
│   │   │   └── page.tsx          # Dating/matching feature
│   │   ├── chat/
│   │   │   └── page.tsx          # Live chat & video calls
│   │   ├── streaming/
│   │   │   └── page.tsx          # EPL live streaming
│   │   └── profile/
│   │       └── page.tsx          # User profiles
│   ├── components/               # Reusable components
│   └── lib/                      # Utility functions
├── public/                       # Static assets
├── package.json                  # Dependencies
├── next.config.js               # Next.js config
├── tailwind.config.js           # Tailwind config
├── tsconfig.json                # TypeScript config
└── README.md                    # This file
```

## 🎨 Design Features

### Modern UI/UX
- Glassmorphism design
- Gradient backgrounds
- Smooth animations
- Responsive design
- Dark mode support

### Performance
- Server-side rendering
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- High contrast mode
- Focus indicators

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_STREAMING_URL=your_streaming_url
NEXT_PUBLIC_DATING_API_URL=your_dating_api_url
```

### Customization
- Edit `tailwind.config.js` to customize colors and themes
- Modify `globals.css` for custom styles
- Update `next.config.js` for Next.js settings

## 📱 Mobile Support

CampVibe is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones
- Progressive Web App (PWA) ready

## 🔒 Security Features

- User authentication
- Profile verification
- Content moderation
- Privacy settings
- Secure messaging

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- Vercel for the hosting platform

## 📞 Support

For support:
- **Email**: support@campvibe.co.ke
- **Phone**: +254 700 000 000
- **Location**: Nairobi, Kenya
- **Discord**: Join our server for community support

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] AI-powered matching
- [ ] Virtual events
- [ ] Marketplace
- [ ] Study groups
- [ ] Campus news
- [ ] Job board
- [ ] Alumni network

---

**Made with ❤️ for college students everywhere**

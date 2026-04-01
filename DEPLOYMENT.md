# CampVibe Deployment Guide 🚀

## Deploying to Netlify

### Prerequisites
- Node.js 18+ installed
- Git installed
- Netlify account (free at netlify.com)

### Step 1: Prepare Your Project

1. **Install dependencies:**
```bash
cd campvibe
npm install
```

2. **Build the project:**
```bash
npm run build
```

### Step 2: Deploy to Netlify

#### Option A: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify:**
```bash
netlify login
```

3. **Initialize and deploy:**
```bash
netlify init
```

4. **Follow the prompts:**
   - Create & configure a new site
   - Team: Select your team
   - Site name: `campvibe` (or your preferred name)
   - Build command: `npm run build`
   - Directory to deploy: `.next`

5. **Deploy:**
```bash
netlify deploy --prod
```

#### Option B: Deploy via Netlify Dashboard

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/campvibe.git
git push -u origin main
```

2. **Go to [netlify.com](https://netlify.com)** and login

3. **Click "Add new site" → "Import an existing project"**

4. **Connect your GitHub repository**

5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

6. **Click "Deploy site"**

### Step 3: Configure Environment Variables

In Netlify Dashboard → Site settings → Environment variables, add:

```
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
NEXT_PUBLIC_API_URL=https://your-site.netlify.app/api
```

### Step 4: Custom Domain (Optional)

1. **In Netlify Dashboard:**
   - Go to Domain settings
   - Add custom domain: `campvibe.co.ke`

2. **Configure DNS:**
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify DNS

3. **Enable HTTPS:**
   - Netlify automatically provisions SSL certificates

### Step 5: Verify Deployment

1. **Check your site:** https://your-site.netlify.app
2. **Test all features:**
   - Login with admin credentials
   - Create posts
   - Watch videos
   - Use dating feature
   - Chat with users
   - Watch EPL streams

## Admin Access

**Login Credentials:**
- Email: `admin@campvibe.co.ke`
- Password: `CampVibe2024!`

**Admin Features:**
- User management
- Content moderation
- Analytics dashboard
- Site settings

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Ensure images are in `public/` folder
- Check image paths in components
- Verify Netlify CDN is working

### API Routes Not Working
- Check Netlify Functions are enabled
- Verify API routes are in `src/app/api/`
- Check environment variables

### Slow Performance
- Enable Netlify CDN
- Optimize images
- Use Next.js Image component

## Support

For issues or questions:
- Email: support@campvibe.co.ke
- GitHub Issues: https://github.com/yourusername/campvibe/issues

---

**Made with ❤️ for Kenyan Campus Students**

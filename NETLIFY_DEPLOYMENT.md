# CampVibe - Netlify Deployment Guide 🚀

## Quick Deploy to Netlify

### Option 1: One-Click Deploy (Recommended)

1. **Go to Netlify**: Visit [app.netlify.com](https://app.netlify.com)
2. **Sign up/Login**: Use GitHub, GitLab, or email
3. **Import Project**: Click "Add new site" → "Import an existing project"
4. **Connect Repository**: Select your Git provider and authorize
5. **Select Repository**: Choose your CampVibe repository
6. **Configure Build**:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. **Deploy**: Click "Deploy site"

### Option 2: Manual Deploy

1. **Build Locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

3. **Login to Netlify**:
   ```bash
   netlify login
   ```

4. **Deploy**:
   ```bash
   netlify deploy --prod --dir=.next
   ```

## Environment Variables

Set these in Netlify Dashboard → Site settings → Environment variables:

```
NEXT_PUBLIC_API_URL=https://api.campvibe.co.ke
NEXT_PUBLIC_STREAMING_URL=https://stream.campvibe.co.ke
NEXT_PUBLIC_DATING_API_URL=https://dating.campvibe.co.ke
NEXT_PUBLIC_APP_NAME=CampVibe
NEXT_PUBLIC_APP_URL=https://campvibe.co.ke
```

## Custom Domain Setup

### Step 1: Add Domain in Netlify

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter: `campvibe.co.ke`
4. Click **Verify**

### Step 2: Configure DNS

Add these DNS records to your domain provider:

**For Apex Domain (campvibe.co.ke):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For Subdomain (www.campvibe.co.ke):**
```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

### Step 3: Enable HTTPS

1. Go to **Site settings** → **Domain management**
2. Click **HTTPS** → **Provision certificate**
3. Wait for SSL certificate to be issued

## Build Configuration

The `netlify.toml` file configures:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Troubleshooting

### Build Fails

**Problem**: Build fails with TypeScript errors

**Solution**:
```bash
npm run build
```
Fix any TypeScript errors before deploying.

### Environment Variables Not Working

**Problem**: Environment variables are undefined

**Solution**:
1. Make sure variables start with `NEXT_PUBLIC_`
2. Redeploy after adding variables
3. Check variable names match exactly

### Images Not Loading

**Problem**: Images fail to load

**Solution**:
1. Check image URLs are correct
2. Add domains to `next.config.js`:
```javascript
images: {
  domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
}
```

### Slow Performance

**Problem**: Site loads slowly

**Solution**:
1. Enable Netlify Analytics
2. Optimize images
3. Use dynamic imports for large components
4. Enable caching

### 404 Errors

**Problem**: Pages return 404

**Solution**:
1. Check redirects in `netlify.toml`
2. Ensure all routes are properly configured
3. Redeploy the site

## Monitoring

### Netlify Dashboard

Monitor your deployment:
- **Deploys**: View all deployments
- **Analytics**: Track page views and performance
- **Functions**: Monitor serverless functions
- **Forms**: Handle contact forms

### Error Tracking

Add Sentry for error tracking:

```bash
npm install @sentry/nextjs
```

Configure in `sentry.client.config.ts`:

```typescript
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'your-sentry-dsn',
  tracesSampleRate: 1.0,
});
```

## Rollback

### Rollback to Previous Deployment

1. Go to your site dashboard
2. Click **Deploys** tab
3. Find the deployment you want to rollback to
4. Click **...** → **Publish deploy**

## Performance Optimization

### Enable Netlify Analytics

1. Go to **Site settings** → **Analytics**
2. Enable **Netlify Analytics**
3. Track page views and performance

### Enable Caching

Add to `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "/api/*"
  [headers.values]
    Cache-Control = "no-cache"
```

### Enable Compression

Netlify automatically enables gzip compression.

## Security

### Enable HTTPS

1. Go to **Site settings** → **Domain management**
2. Click **HTTPS** → **Provision certificate**
3. Wait for SSL certificate to be issued

### Security Headers

Add to `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "origin-when-cross-origin"
```

## Support

If you encounter issues:

1. Check [Netlify Documentation](https://docs.netlify.com)
2. Visit [Next.js Documentation](https://nextjs.org/docs)
3. Join [Netlify Community](https://community.netlify.com)
4. Email: support@campvibe.co.ke

## Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies installed (`npm install`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] No TypeScript errors
- [ ] Environment variables configured
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled
- [ ] Security headers configured
- [ ] Error tracking configured

---

**Happy Deploying! 🎉**

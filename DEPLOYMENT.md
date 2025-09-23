# WeatherShield Roofing - Deployment Guide

## 🚀 Deployment Overview

**Current Status**: ✅ Production Ready
**Deployment Method**: GitHub Pages with CI/CD
**Live URL**: [https://charwinvanryckdegroot.github.io/weathershield-roofing-site/](https://charwinvanryckdegroot.github.io/weathershield-roofing-site/)
**Deployment Time**: ~2-5 minutes per deployment
**Automatic Deployments**: Enabled on push to `main` branch

## What Was Done

1. **Next.js Configuration** (`next.config.js`)
   - Added `basePath: '/WeatherShield-Website'` for GitHub Pages URL structure
   - Added `assetPrefix: '/WeatherShield-Website'` for correct asset loading
   - Static export mode already configured with `output: 'export'`

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Created automated deployment workflow
   - Triggers on push to main branch
   - Builds Next.js site and deploys to GitHub Pages

3. **Jekyll Bypass** (`public/.nojekyll`)
   - Added `.nojekyll` file to prevent Jekyll processing
   - Ensures Next.js assets load correctly

4. **Bug Fixes**
   - Fixed TypeScript errors in reviews page
   - Installed ESLint dependency

## Required Manual Step: Enable GitHub Pages

**You must enable GitHub Pages in the repository settings:**

1. Go to: https://github.com/bknddevelopment/WeatherShield-Website/settings/pages
2. Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
3. Click "Save"

## Live Website URL

Once GitHub Pages is enabled and the deployment completes (2-5 minutes), the website will be available at:

### 🌐 https://bknddevelopment.github.io/WeatherShield-Website/

## Checking Deployment Status

### Option 1: GitHub Actions Page
Visit: https://github.com/bknddevelopment/WeatherShield-Website/actions

### Option 2: Command Line
```bash
# Check latest workflow run
gh run list --repo bknddevelopment/WeatherShield-Website --limit 1

# Check if Pages is enabled
gh api repos/bknddevelopment/WeatherShield-Website/pages
```

### Option 3: Use the Check Script
```bash
./check-deployment.sh
```

## Automatic Deployments

After the initial setup, the website will automatically deploy whenever you:
- Push changes to the `main` branch
- Merge a pull request to `main`

Each deployment typically takes 2-5 minutes to complete.

## Troubleshooting

### If the site doesn't appear:
1. Verify GitHub Pages is enabled (Settings > Pages > Source: GitHub Actions)
2. Check the Actions tab for any failed workflows
3. Wait 5-10 minutes for DNS propagation on first deployment
4. Clear browser cache and try again

### If assets/images don't load:
- All paths are automatically prefixed with `/WeatherShield-Website/`
- The configuration in `next.config.js` handles this automatically

### If you see a 404 page:
1. Ensure the workflow completed successfully
2. Check that GitHub Pages is using "GitHub Actions" as the source
3. The site may still be building (wait 2-5 minutes)

## Local Development

To test the production build locally:
```bash
npm run build
npx serve out -l 3000
```

Then visit: http://localhost:3000/WeatherShield-Website/

## Making Changes

1. Make your changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit and push to `main`
5. GitHub Actions will automatically deploy

## Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Verify all configuration files are in place
3. Ensure GitHub Pages is enabled with "GitHub Actions" as the source

---

## Alternative Deployment Options

### Vercel Deployment

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel --prod
```

3. **Configure custom domain** (if needed)
- Add domain in Vercel dashboard
- Update DNS records

### Netlify Deployment

1. **Build locally**
```bash
npm run build
```

2. **Deploy via CLI**
```bash
npm i -g netlify-cli
netlify deploy --dir=out --prod
```

3. **Or drag and drop**
- Visit [app.netlify.com](https://app.netlify.com)
- Drag the `out` folder to deploy

### Traditional Hosting (Apache/Nginx)

1. **Build the static site**
```bash
npm run build
```

2. **Upload files**
- Upload contents of `/out` directory to web root
- Ensure `.htaccess` (Apache) or nginx config handles routing

3. **Apache .htaccess example**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. **Nginx configuration example**
```nginx
server {
    listen 80;
    server_name weathershieldroofers.com;
    root /var/www/weathershield;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Environment Configuration

### Production Build Variables

```bash
# Build for production (GitHub Pages)
NODE_ENV=production npm run build

# Build for custom domain
NEXT_PUBLIC_SITE_URL=https://weathershieldroofers.com npm run build
```

### Configuration Files

#### next.config.js (GitHub Pages)
```javascript
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  output: 'export',
  basePath: isProd ? '/weathershield-roofing-site' : '',
  assetPrefix: isProd ? '/weathershield-roofing-site' : '',
  // ... rest of config
}
```

#### next.config.js (Custom Domain)
```javascript
module.exports = {
  output: 'export',
  // Remove basePath and assetPrefix for custom domain
  // ... rest of config
}
```

## Post-Deployment Checklist

### Immediate Verification (0-5 minutes)
- [ ] Site loads at deployment URL
- [ ] Homepage renders correctly
- [ ] Navigation works
- [ ] Images load properly
- [ ] Contact information is correct

### Functionality Testing (5-15 minutes)
- [ ] All service pages load
- [ ] All location pages load
- [ ] Mobile responsive design works
- [ ] Forms display correctly
- [ ] Phone/email links work
- [ ] Emergency CTAs visible

### Performance Verification (15-30 minutes)
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Check Core Web Vitals
- [ ] Verify lazy loading works
- [ ] Test on 3G connection
- [ ] Check bundle size (< 1MB)

### SEO Verification (30-45 minutes)
- [ ] Check robots.txt accessibility
- [ ] Verify sitemap.xml loads
- [ ] Test meta tags with SEO tools
- [ ] Verify canonical URLs
- [ ] Check Open Graph tags
- [ ] Submit to Google Search Console

### Security Verification
- [ ] HTTPS enabled
- [ ] No exposed API keys
- [ ] No console errors
- [ ] CSP headers (if configured)

## Rollback Procedures

### GitHub Pages Rollback

1. **Revert to previous commit**
```bash
# Find the last working commit
git log --oneline

# Revert to specific commit
git revert HEAD
git push origin main
```

2. **Or use GitHub UI**
- Go to Actions tab
- Find last successful deployment
- Click "Re-run all jobs"

### Emergency Rollback

```bash
# Create a rollback branch from last known good commit
git checkout -b emergency-rollback <commit-hash>
git push origin emergency-rollback

# Change default branch in GitHub settings temporarily
# Then fix issues in main branch
```

## Monitoring & Maintenance

### Automated Monitoring

1. **GitHub Actions Status**
   - Monitor at: [Actions Tab](https://github.com/charwinvanryckdegroot/weathershield-roofing-site/actions)
   - Set up email notifications for failures

2. **Uptime Monitoring**
   - Use services like UptimeRobot or Pingdom
   - Set up alerts for downtime

3. **Performance Monitoring**
   - Google PageSpeed Insights API
   - Web Vitals reporting
   - Real User Monitoring (RUM)

### Manual Checks (Weekly)

```bash
# Check deployment status
gh run list --limit 5

# Check site health
curl -I https://charwinvanryckdegroot.github.io/weathershield-roofing-site/

# Run Lighthouse
npx lighthouse https://charwinvanryckdegroot.github.io/weathershield-roofing-site/ --view
```

## Troubleshooting Guide

### Common Issues & Solutions

#### Site Not Updating After Push
```bash
# Check workflow status
gh run list --limit 1

# Manually trigger deployment
gh workflow run deploy.yml

# Clear GitHub Pages cache
# Wait 10 minutes or add ?v=timestamp to URLs
```

#### 404 Errors on Routes
```bash
# Ensure trailingSlash is set in next.config.js
trailingSlash: true

# Rebuild and redeploy
npm run build
git add -A
git commit -m "Fix 404 routing issues"
git push
```

#### Images Not Loading
```bash
# Check image paths in code
# Should be: /images/filename.jpg (without basePath)
# StaticImage component handles basePath automatically

# Verify images exist in /public/images/
ls -la public/images/
```

#### Build Failures
```bash
# Check error logs
gh run view

# Test locally
npm ci
npm run build

# Common fixes
rm -rf node_modules .next out
npm ci
npm run build
```

## Support & Resources

### Documentation
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Actions](https://docs.github.com/actions)

### Getting Help
1. Check the [CHANGELOG.md](./CHANGELOG.md) for recent changes
2. Review [GitHub Issues](https://github.com/charwinvanryckdegroot/weathershield-roofing-site/issues)
3. Check deployment logs in GitHub Actions
4. Contact the development team

---

*Last Updated: September 22, 2025*
*Version: 1.0.0*
# Deployment Guide - Chris Bradshaw CV

This guide covers deploying your CV website to production.

## Current Status

- Development server running on port 3002 in tmux session `cv`
- Build verified and compiles successfully
- Repository clean and ready for deployment
- GitHub repository: https://github.com/CollectiveIntelligenceCode/cv-chrisbradshaw

## Quick Reference

**Access running dev server:**
```bash
tmux attach -t cv
# Press Ctrl+b d to detach
```

**Local testing:**
```bash
cd /home/solomon/workspace/repos/cv-chrisbradshaw
npm run dev         # Dev server
npm run build       # Production build
npm start           # Run production build
```

## Production Deployment

### Step 1: Vercel Deployment (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Repository"
3. Search for and select: `cv-chrisbradshaw`
4. Configure Project:
   - Framework: Next.js (auto-detected)
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"
6. Wait for build to complete (2-3 minutes)
7. Note your deployment URL

### Step 2: Auto-Deploy on Git Push

After initial Vercel deployment, every push to `main` branch automatically triggers a new deployment:

```bash
cd /home/solomon/workspace/repos/cv-chrisbradshaw
git add .
git commit -m "Update CV content"
git push origin main
```

Vercel will automatically build and deploy within minutes.

### Step 3: Custom Domain (Optional)

If you have a custom domain:

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `cv.example.com`)

2. **In Your Domain Registrar** (GoDaddy, Namecheap, etc.):
   - Copy the DNS records shown by Vercel
   - Add them to your domain's DNS settings
   - Wait for propagation (24-48 hours typical)

3. **Verify:** 
   - Check Vercel dashboard to confirm domain is connected
   - Visit your custom domain in browser

## Environment Variables

No environment variables are required for this project. All content is local (Markdown files).

If you add external features later (API calls, analytics, etc.):

1. Create `.env.local` in project root
2. Add variables (won't be committed - .gitignore ignores it)
3. Add same variables to Vercel project settings

## Monitoring

**In Vercel Dashboard:**
- View deployment logs
- Check analytics and performance
- Monitor build times
- Configure notifications for failed deployments

**Monitoring Commands (Local):**
```bash
cd /home/solomon/workspace/repos/cv-chrisbradshaw

# View git history
git log --oneline

# Check git status
git status

# View recent commits
git log -n 5 --pretty=format:"%h - %s (%ar)"
```

## Rolling Back

If a deployment has issues, you can roll back:

1. **Via Vercel Dashboard:**
   - Go to Deployments tab
   - Find previous working deployment
   - Click the three-dots menu
   - Select "Promote to Production"

2. **Via Git:**
   ```bash
   cd /home/solomon/workspace/repos/cv-chrisbradshaw
   git revert HEAD
   git push origin main
   ```

## Content Updates

To update your CV content:

1. **Edit content files:**
   ```bash
   /home/solomon/workspace/repos/cv-chrisbradshaw/content/
   ├── cv.md           # Full CV
   ├── summary.md      # Executive Summary
   └── cover.md        # Cover Letter
   ```

2. **Test locally:**
   ```bash
   cd /home/solomon/workspace/repos/cv-chrisbradshaw
   npm run dev
   # Open http://localhost:3002
   ```

3. **Deploy:**
   ```bash
   git add content/
   git commit -m "Update CV"
   git push origin main
   ```

Deployment happens automatically within minutes.

## Troubleshooting

**Build Fails on Vercel:**
- Check build logs in Vercel dashboard
- Verify dependencies in `package.json`
- Test locally: `npm run build`

**Content Not Updating:**
- Check if push succeeded: `git log`
- Wait for Vercel deployment to complete
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser cache in DevTools

**Performance Issues:**
- Vercel provides Edge Caching automatically
- Check Vercel Analytics for insights
- Consider optimizing images in public/

## Security Notes

- Repository is public on GitHub
- No sensitive data should be committed
- Environment files (`.env.local`) are ignored
- Consider using draft mode if needed (advanced feature)

## Backup & Disaster Recovery

Your content is safe because:
- All files in Git repository on GitHub
- Vercel keeps 25 most recent deployments
- You can always rebuild from source

**Backup to external storage:**
```bash
cd /home/solomon/workspace/repos/cv-chrisbradshaw
tar -czf cv-website-backup.tar.gz .
# Store tar.gz file in safe location
```

## Next Steps

1. Review live Vercel deployment
2. Test PDF export (print to PDF in browser)
3. Verify responsive design on mobile
4. Set up custom domain (if desired)
5. Enable Vercel notifications (optional)

---

**Last Updated:** 2026-04-27
**Project:** CV Website
**Status:** Ready for Production

# 🚀 GitHub Pages Deployment Guide

This guide will help you publish your bookstore website to GitHub Pages so it's accessible online.

## 📋 Prerequisites

- A GitHub account (free)
- Git installed on your computer
- Your website files ready

## 🎯 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the **"+"** button (top right) → **"New repository"**
3. Choose a repository name (e.g., `bookstore-website`)
4. Make it **Public** (required for free GitHub Pages)
5. Do NOT initialize with README (your files already have one)
6. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open Terminal/Command Prompt in your project folder and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit - bookstore website"

# Add GitHub as remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `johndoe` and repository is `bookstore-website`:
```bash
git remote add origin https://github.com/johndoe/bookstore-website.git
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
5. GitHub will automatically detect and deploy your site

### Step 4: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running (yellow dot)
3. Wait 2-5 minutes for it to complete (green checkmark)
4. Your site is now live! 🎉

### Step 5: Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

**Example:**
```
https://johndoe.github.io/bookstore-website/
```

## 🔄 Updating Your Website

After making changes to your content:

```bash
# Add your changes
git add .

# Commit with a message
git commit -m "Updated book inventory"

# Push to GitHub
git push origin main
```

GitHub will automatically redeploy your site (takes 2-5 minutes).

## ❓ Troubleshooting

### Problem: 404 Page Not Found

**Solution:**
1. Check that GitHub Pages is enabled (Settings → Pages)
2. Verify the URL is correct: `https://USERNAME.github.io/REPO-NAME/`
3. Wait 5 minutes - first deployment takes time
4. Make sure your repository is **Public**

### Problem: Blank Page

**Solution:**
1. Press `F12` in your browser to open Developer Console
2. Check for error messages
3. Verify all files were pushed: `git status`
4. Clear browser cache: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)

### Problem: Changes Not Showing

**Solution:**
1. Check the "Actions" tab - make sure deployment finished (green checkmark)
2. Clear browser cache: `Ctrl + Shift + R`
3. Verify you pushed changes: `git status` should show "nothing to commit"

### Problem: Styles Not Loading

**Solution:**
1. Check that `/styles/globals.css` file exists
2. Hard refresh the page: `Ctrl + Shift + R`
3. Check browser console (F12) for CSS errors

## 📝 Quick Reference

### Common Git Commands

```bash
# Check status of your files
git status

# Add all changed files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes (if working on multiple computers)
git pull origin main
```

### Your Site URL Structure

```
https://YOUR-USERNAME.github.io/REPO-NAME/
       ↑                        ↑
   GitHub username        Repository name
```

## 🎨 Editing Content After Deployment

1. Edit `/content/siteContent.ts` on your computer
2. Save the file
3. Run these commands:
   ```bash
   git add .
   git commit -m "Updated website content"
   git push origin main
   ```
4. Wait 2-5 minutes for GitHub to redeploy
5. Refresh your browser to see changes

## 🆘 Still Having Issues?

**See the complete troubleshooting guide:** [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

### Quick Checks:

- ✅ Repository is set to **Public** (not Private)
- ✅ GitHub Pages source is set to **"GitHub Actions"**
- ✅ All files are pushed to GitHub (`git status` shows clean)
- ✅ Waited at least 5 minutes after first push
- ✅ Using correct URL format: `username.github.io/repo-name`

### Verification Checklist:

1. ✅ Files appear on GitHub website
2. ✅ "Actions" tab shows green checkmark
3. ✅ "Settings → Pages" shows site is live
4. ✅ `.nojekyll` file exists in repository
5. ✅ `index.html` file exists in root

**For detailed solutions, see:** [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

## 🎉 Success!

Once deployed, you can:
- Share your website URL with anyone
- Edit content anytime via `/content/siteContent.ts`
- Update by pushing changes to GitHub
- Access your site from any device

---

**Need to edit content?** See [HOW_TO_EDIT.md](./HOW_TO_EDIT.md)

**Questions about the code?** See [README.md](./README.md)

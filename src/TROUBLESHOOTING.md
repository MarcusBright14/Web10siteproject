# 🔧 Troubleshooting Guide

## Common GitHub Pages Issues and Solutions

### 🚫 Problem: "404 - Page Not Found"

#### Possible Causes & Solutions:

**1. GitHub Pages Not Enabled**
- Go to repository Settings → Pages
- Make sure Source is set to "GitHub Actions"
- Save and wait 5 minutes

**2. Wrong URL**
```
❌ Wrong: https://github.com/username/repo-name
✅ Correct: https://username.github.io/repo-name/
```

**3. Repository is Private**
- GitHub Pages requires a Public repository (for free accounts)
- Go to Settings → Change visibility to Public

**4. First Deployment Takes Time**
- Wait 5-10 minutes after first push
- Check the "Actions" tab for deployment status
- Look for green checkmark ✓

---

### 📄 Problem: Blank White Page

#### Possible Causes & Solutions:

**1. JavaScript Errors**
```bash
# Press F12 in browser
# Check Console tab for errors
```

**2. Files Not Pushed to GitHub**
```bash
# Run this command:
git status

# If you see unstaged files:
git add .
git commit -m "Fix files"
git push origin main
```

**3. index.html Missing**
- Check that `index.html` exists in root folder
- Don't delete or move this file

**4. Browser Cache**
```
Press: Ctrl + Shift + R (Windows/Linux)
Or: Cmd + Shift + R (Mac)
```

---

### 🎨 Problem: Styling Not Working / Looks Broken

#### Possible Causes & Solutions:

**1. CSS File Not Loading**
- Check that `/styles/globals.css` exists
- Clear browser cache (Ctrl + Shift + R)
- Check browser console (F12) for errors

**2. Tailwind Not Loading**
- `index.html` includes Tailwind CDN
- Make sure you didn't modify `index.html`
- Check internet connection (Tailwind loads from CDN)

**3. Wrong Import Paths**
- All imports should be relative (start with `./` or `../`)
- Don't use absolute paths

---

### 🔄 Problem: Changes Not Showing

#### Possible Causes & Solutions:

**1. Not Pushed to GitHub**
```bash
# Check if you pushed:
git status

# Should say: "nothing to commit, working tree clean"
# If not:
git add .
git commit -m "Update content"
git push origin main
```

**2. Deployment Still Running**
- Go to "Actions" tab on GitHub
- Wait for yellow dot to turn green ✓
- Takes 2-5 minutes

**3. Browser Cache**
```
Hard Refresh:
- Chrome/Firefox: Ctrl + Shift + R
- Safari: Cmd + Option + R
```

**4. Deployment Failed**
- Check "Actions" tab for red X
- Click on failed action to see error
- Common fix: Re-push your code

---

### ⚠️ Problem: GitHub Actions Workflow Failed (Red X)

#### Solutions:

**1. Check Error Message**
```
1. Go to "Actions" tab
2. Click the failed workflow (red X)
3. Click on the job name
4. Read error message
```

**2. Common Fixes**
```bash
# Re-push everything:
git add .
git commit -m "Fix deployment"
git push origin main --force
```

**3. Verify Files**
Make sure these files exist:
- ✅ `index.html`
- ✅ `App.tsx`
- ✅ `.github/workflows/deploy.yml`
- ✅ `.nojekyll`

---

### 📝 Problem: Content Not Updating

#### Solutions:

**1. Check siteContent.ts**
- Did you save the file?
- Are quotes and commas correct?
- No syntax errors?

**2. Verify Syntax**
```typescript
// ✅ Correct:
title: "My Book Title",

// ❌ Wrong (missing comma):
title: "My Book Title"

// ❌ Wrong (missing quote):
title: "My Book Title,
```

**3. Push Changes**
```bash
git add content/siteContent.ts
git commit -m "Update content"
git push origin main
```

---

### 🔍 Problem: Specific Page Not Working

#### Solutions:

**1. Check Component Imports**
Make sure the page component exists:
- HomePage.tsx
- AboutPage.tsx
- InventoryPage.tsx
- ContactPage.tsx

**2. Verify siteContent.ts**
Make sure all sections are filled out properly

**3. Check Browser Console**
```
Press F12 → Console tab
Look for red error messages
```

---

### 💻 Problem: Can't Push to GitHub

#### Common Errors & Fixes:

**Error: "fatal: not a git repository"**
```bash
# Initialize git:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

**Error: "Permission denied"**
```bash
# Check your GitHub username/password
# Or set up SSH keys
# Or use GitHub Desktop app instead
```

**Error: "failed to push some refs"**
```bash
# Pull first, then push:
git pull origin main --allow-unrelated-histories
git push origin main
```

---

### 🌐 Problem: Site Works Locally But Not on GitHub Pages

#### Solutions:

**1. Check Absolute vs Relative Paths**
```typescript
// ❌ Wrong (absolute path):
import Component from '/components/Component'

// ✅ Correct (relative path):
import Component from './components/Component'
```

**2. Verify .nojekyll File**
- Make sure `.nojekyll` file exists in root
- It tells GitHub to serve all files

**3. Check importmap in index.html**
- Should use ESM CDN links
- Don't modify the script section

---

### 📱 Problem: Site Works on Desktop But Not Mobile

#### Solutions:

**1. Check Responsive Design**
- The site uses Tailwind's responsive classes
- Should work on all devices

**2. Clear Mobile Browser Cache**
- Settings → Safari/Chrome → Clear Cache
- Or open in incognito/private mode

**3. Check Viewport Meta Tag**
```html
<!-- Should be in index.html: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 🆘 Still Not Working?

### Debug Checklist:

1. ✅ Repository is **Public**
2. ✅ GitHub Pages is **enabled** (Settings → Pages)
3. ✅ Source is set to **"GitHub Actions"**
4. ✅ All files are **pushed** to GitHub (`git status` is clean)
5. ✅ **Actions** tab shows **green checkmark** ✓
6. ✅ Waited at least **5 minutes** after deployment
7. ✅ Used correct **URL format**: `username.github.io/repo-name`
8. ✅ Tried **hard refresh**: Ctrl + Shift + R
9. ✅ Checked **browser console** (F12) for errors
10. ✅ `.nojekyll` file **exists** in repository

### How to Get Help:

1. **Check browser console** (F12) for specific error messages
2. **Check GitHub Actions** log for deployment errors
3. **Take a screenshot** of any error messages
4. **Note the specific URL** you're trying to access
5. **Check which step** in the deployment guide you're on

---

## 📚 Additional Resources

- **[Quick Start Guide](./QUICK_START.md)** - Basic setup
- **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Detailed deployment steps
- **[How to Edit](./HOW_TO_EDIT.md)** - Edit website content
- **[File Structure](./FILE_STRUCTURE.md)** - Understand files

---

## ✅ Verification Steps

If everything is working, you should see:

1. ✅ Website loads at `https://username.github.io/repo-name/`
2. ✅ All 4 pages work (Home, About, Inventory, Contact)
3. ✅ Navigation buttons work
4. ✅ Styling looks correct (red header, proper colors)
5. ✅ Content from `siteContent.ts` is displayed
6. ✅ No errors in browser console (F12)

---

**Remember:** Most issues are solved by waiting 5 minutes and doing a hard refresh! 🔄

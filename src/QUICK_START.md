# ⚡ Quick Start Guide

## 🎯 Get Your Website Online in 3 Steps

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click **"New repository"**
3. Name it (e.g., `my-bookstore`)
4. Make it **Public**
5. Click **"Create repository"**

### Step 2: Upload Your Files
In your project folder, run:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Set Source to **"GitHub Actions"**
3. Wait 5 minutes

**Your site is live!** 🎉
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

---

## ✏️ Edit Your Website

**All text is in ONE file:** `/content/siteContent.ts`

1. Open the file
2. Change text between quotes `"like this"`
3. Save
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```

---

## 📚 Need More Help?

- **Detailed deployment:** [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **How to edit content:** [HOW_TO_EDIT.md](./HOW_TO_EDIT.md)
- **Technical details:** [README.md](./README.md)

---

## ✅ Checklist

Before pushing to GitHub:
- [ ] All your content is updated in `/content/siteContent.ts`
- [ ] Repository is created on GitHub
- [ ] Repository is set to **Public**

After pushing:
- [ ] GitHub Pages is enabled (Settings → Pages)
- [ ] Source is set to **"GitHub Actions"**
- [ ] Waited 5 minutes for deployment
- [ ] Checked the "Actions" tab (should show green checkmark)

---

**That's it!** Your website should now be live and accessible to anyone with the URL.

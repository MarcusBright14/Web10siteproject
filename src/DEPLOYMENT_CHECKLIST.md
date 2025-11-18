# ✅ Deployment Checklist

Use this checklist to ensure your website is properly deployed to GitHub Pages.

## 📋 Pre-Deployment Checklist

### Content Ready
- [ ] Edited `/content/siteContent.ts` with your information
- [ ] Changed company name from "Your Company Name"
- [ ] Updated book inventory (titles, prices, descriptions)
- [ ] Updated contact information (address, phone, email)
- [ ] Reviewed all pages for placeholder text
- [ ] Checked spelling and grammar

### Files Ready
- [ ] All files are saved
- [ ] No syntax errors in `siteContent.ts`
- [ ] All quotation marks properly closed
- [ ] All commas in place

## 🌐 GitHub Setup Checklist

### Repository Creation
- [ ] Created GitHub account (if needed)
- [ ] Created new repository on GitHub
- [ ] Repository name chosen (will be in URL)
- [ ] Repository set to **Public**
- [ ] Did NOT initialize with README

### Initial Push
- [ ] Opened terminal/command prompt in project folder
- [ ] Ran `git init`
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Initial commit"`
- [ ] Ran `git remote add origin [YOUR-REPO-URL]`
- [ ] Ran `git push -u origin main`
- [ ] Files appear on GitHub website

## ⚙️ GitHub Pages Configuration

### Enable Pages
- [ ] Went to repository Settings
- [ ] Clicked "Pages" in left sidebar
- [ ] Set Source to "GitHub Actions"
- [ ] Saved changes

### Verify Deployment
- [ ] Went to "Actions" tab
- [ ] See workflow running (yellow dot)
- [ ] Waited 5 minutes
- [ ] Workflow completed successfully (green checkmark ✓)

## 🧪 Testing Checklist

### Initial Load
- [ ] Opened `https://[username].github.io/[repo-name]/`
- [ ] Page loads (no 404 error)
- [ ] Page not blank
- [ ] No JavaScript errors in console (F12)

### Navigation
- [ ] Clicked "Home" - page displays
- [ ] Clicked "About" - page displays
- [ ] Clicked "Inventory" - page displays
- [ ] Clicked "Contact" - page displays
- [ ] Navigation between pages works smoothly

### Content Display
- [ ] Company name shows correctly
- [ ] Hero section displays your text
- [ ] Book inventory shows your books
- [ ] Contact information is correct
- [ ] Footer shows proper text

### Styling
- [ ] Header is red (#BA0C2F)
- [ ] Footer is red (#BA0C2F)
- [ ] Text is readable
- [ ] Navigation buttons work
- [ ] Content blocks have red borders
- [ ] Page looks professional

### Responsive Design
- [ ] Tested on desktop browser
- [ ] Tested on mobile browser (or mobile view in dev tools)
- [ ] Layout adjusts properly for mobile
- [ ] Text is readable on small screens
- [ ] Navigation works on mobile

## 🔄 Update Workflow Test

### Make a Test Change
- [ ] Edited `/content/siteContent.ts`
- [ ] Changed some text (e.g., company name)
- [ ] Saved the file
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Test update"`
- [ ] Ran `git push origin main`
- [ ] Waited 2-5 minutes
- [ ] Refreshed website (hard refresh: Ctrl+Shift+R)
- [ ] Changes appeared on live site

## 🆘 Troubleshooting (If Needed)

### If Site Shows 404
- [ ] Checked URL format: `username.github.io/repo-name/`
- [ ] Verified repository is Public
- [ ] Verified GitHub Pages is enabled
- [ ] Waited 10 minutes
- [ ] Checked Actions tab for errors

### If Site is Blank
- [ ] Opened browser console (F12)
- [ ] Checked for JavaScript errors
- [ ] Verified all files pushed to GitHub
- [ ] Cleared browser cache (Ctrl+Shift+R)
- [ ] Checked that `index.html` exists

### If Styling is Wrong
- [ ] Cleared browser cache
- [ ] Checked that `/styles/globals.css` exists
- [ ] Opened in different browser
- [ ] Checked browser console for CSS errors

### If Changes Don't Show
- [ ] Verified files are pushed: `git status`
- [ ] Checked Actions tab (deployment complete?)
- [ ] Hard refreshed browser: Ctrl+Shift+R
- [ ] Waited 5 minutes after push
- [ ] Checked correct URL

## ✅ Final Verification

### All Systems Go
- [ ] Website accessible at correct URL
- [ ] All 4 pages work
- [ ] Navigation functions properly
- [ ] Content displays correctly
- [ ] Styling looks good
- [ ] Mobile-responsive
- [ ] Can update content via git push
- [ ] No console errors
- [ ] Shared URL with friend (it works for them too!)

## 📝 Notes

**Your Website URL:**
```
https://__________________.github.io/___________________/
        (username)                    (repo-name)
```

**Date Deployed:** ______________

**Git Commands for Updates:**
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## 🎉 Success!

If you've checked all the boxes above, congratulations! 

Your bookstore website is live and accessible to the world! 🚀📚

### Next Steps:
1. Share your URL with others
2. Keep `/content/siteContent.ts` updated
3. Push changes regularly
4. Monitor the site periodically

### Useful Links:
- [How to Edit](./HOW_TO_EDIT.md) - Update website content
- [Troubleshooting](./TROUBLESHOOTING.md) - Fix issues
- [Quick Start](./QUICK_START.md) - Quick reference

---

**Remember:** To update your site, just edit `/content/siteContent.ts` and push to GitHub!

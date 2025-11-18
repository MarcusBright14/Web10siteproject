# 💻 Git Commands Reference

A simple guide to the Git commands you'll use to manage your website.

## 🎯 What is Git?

Git is a version control system that:
- Tracks changes to your files
- Lets you upload files to GitHub
- Keeps a history of all your edits
- Allows you to undo mistakes

Think of it like "Save" and "Upload" for your website files.

## 📋 Commands You'll Use

### First Time Setup (Do Once)

```bash
# 1. Initialize git in your project folder
git init

# 2. Add your GitHub repository as "origin"
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# 3. Verify it's connected
git remote -v
```

### Every Time You Make Changes

```bash
# 1. Check what files changed
git status

# 2. Add all changed files to staging
git add .

# 3. Commit (save) your changes with a message
git commit -m "Updated book inventory"

# 4. Push (upload) to GitHub
git push origin main
```

## 🔄 Common Workflows

### Workflow 1: Update Website Content

```bash
# 1. Edit /content/siteContent.ts in your text editor
# 2. Save the file
# 3. Run these commands:

git add .
git commit -m "Updated contact information"
git push origin main

# 4. Wait 2-5 minutes
# 5. Refresh your browser - changes are live!
```

### Workflow 2: Check Current Status

```bash
# See what files you've changed
git status

# Should show either:
# - Modified files (in red) = not staged yet
# - Modified files (in green) = staged, ready to commit
# - "nothing to commit" = all changes are pushed
```

### Workflow 3: View Recent Changes

```bash
# See your recent commits
git log --oneline

# See last 5 commits
git log --oneline -5

# Exit by pressing 'q'
```

## 📝 Understanding the Commands

### `git status`
**What it does:** Shows which files have changed

```bash
git status
```

**Output:**
```
Changes not staged for commit:
  modified:   content/siteContent.ts
```

### `git add .`
**What it does:** Stages all changed files (prepares them for commit)

```bash
git add .
```

**Tip:** The `.` means "all files". You can also add specific files:
```bash
git add content/siteContent.ts
```

### `git commit -m "message"`
**What it does:** Saves your changes with a description

```bash
git commit -m "Updated book prices"
```

**Good commit messages:**
- ✅ "Updated book inventory"
- ✅ "Changed contact phone number"
- ✅ "Added new team member bio"

**Bad commit messages:**
- ❌ "update"
- ❌ "changes"
- ❌ "asdf"

### `git push origin main`
**What it does:** Uploads your commits to GitHub

```bash
git push origin main
```

**Breakdown:**
- `push` = upload
- `origin` = your GitHub repository
- `main` = the main branch

## 🆘 Fixing Common Mistakes

### Mistake 1: Forgot to Add Files

```bash
# If you see "nothing to commit" but you changed files:
git add .
git commit -m "Your message"
git push origin main
```

### Mistake 2: Wrong Commit Message

```bash
# Change the last commit message:
git commit --amend -m "New correct message"
git push origin main --force
```

### Mistake 3: Want to Undo Last Commit (but keep changes)

```bash
# Undo commit but keep your file changes:
git reset --soft HEAD~1

# Now you can modify files and commit again
```

### Mistake 4: Want to Completely Undo Changes

```bash
# CAREFUL: This deletes all uncommitted changes!
git checkout -- content/siteContent.ts

# Or reset everything:
git reset --hard HEAD
```

### Mistake 5: Accidentally Changed Wrong File

```bash
# Restore one file to last committed version:
git checkout -- filename.tsx

# Check status to verify:
git status
```

## 🔍 Checking Before You Push

Always run these before pushing:

```bash
# 1. Check what changed
git status

# 2. See the actual changes
git diff

# 3. If looks good, proceed:
git add .
git commit -m "Your message"
git push origin main
```

## 📊 Understanding Git Workflow

```
Local Computer              GitHub
     │                         │
     │  1. Edit files          │
     ├──────────────           │
     │                         │
     │  2. git add .           │
     ├──────────────           │
     │  (Stage changes)        │
     │                         │
     │  3. git commit -m ""    │
     ├──────────────           │
     │  (Save locally)         │
     │                         │
     │  4. git push            │
     ├─────────────────────────┤
     │                         │
     │                    GitHub receives
     │                    Triggers Actions
     │                    Deploys to Pages
     │                         │
     │  5. Visit website       │
     │     See changes!        │
```

## 💡 Pro Tips

### Tip 1: Commit Often
Don't wait until you've changed everything. Commit after each logical change:

```bash
# ✅ Good practice:
git commit -m "Updated book 1 title"
git commit -m "Updated book 2 description"
git commit -m "Changed contact email"

# ❌ Avoid:
git commit -m "Changed everything"
```

### Tip 2: Use Descriptive Messages
Your future self will thank you:

```bash
# ✅ Clear and specific:
git commit -m "Updated inventory prices for summer sale"

# ❌ Vague:
git commit -m "updates"
```

### Tip 3: Check Status Frequently
```bash
# Run this often:
git status

# It reminds you what needs to be committed
```

### Tip 4: Pull Before Push (if working on multiple computers)
```bash
# Before making changes:
git pull origin main

# Then make your edits and push
```

## 🎓 Learning More

### If you get an error:
1. Read the error message carefully
2. Run `git status` to see current state
3. Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

### Safe to experiment:
- `git status` - just shows info, doesn't change anything
- `git log` - just shows history
- `git diff` - shows what changed

### Be careful with:
- `git reset --hard` - deletes changes
- `git push --force` - can overwrite GitHub
- Deleting `.git` folder - loses all history

## 📋 Quick Reference Card

```bash
# Check status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "message"

# Push to GitHub
git push origin main

# Pull from GitHub
git pull origin main

# View recent commits
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard changes to a file
git checkout -- filename
```

## 🎯 Your Standard Workflow

Every time you edit your website, you'll do this:

```bash
# 1. Check current state
git status

# 2. Stage your changes
git add .

# 3. Commit with message
git commit -m "What I changed"

# 4. Push to GitHub
git push origin main

# 5. Wait for deployment (2-5 min)

# 6. Refresh website in browser
```

**That's it!** These commands will handle 99% of your needs.

---

## 🆘 Need Help?

- **Deployment issues:** [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- **Content editing:** [HOW_TO_EDIT.md](./HOW_TO_EDIT.md)
- **Getting started:** [QUICK_START.md](./QUICK_START.md)

---

**Remember:** Git is just a way to track and upload your changes. You'll get comfortable with it quickly! 💪

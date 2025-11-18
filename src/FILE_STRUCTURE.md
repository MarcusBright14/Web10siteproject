# 📁 File Structure Guide

## Overview

This document explains what each file and folder does in your website.

```
📦 Your Website
├── 📄 index.html                    ⭐ Main HTML file (GitHub Pages entry point)
├── 📄 App.tsx                       Main React application
├── 📄 package.json                  Project information
├── 📄 .nojekyll                     Tells GitHub to serve all files
├── 📄 .gitignore                    Files to ignore in Git
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── 📄 deploy.yml            Automatic GitHub Pages deployment
│
├── 📂 content/
│   └── 📄 siteContent.ts            ⭐⭐⭐ EDIT THIS FILE FOR ALL TEXT
│
├── 📂 components/
│   ├── 📄 WireframeLayout.tsx       Header & footer layout
│   ├── 📄 Navigation.tsx            Navigation menu
│   ├── 📄 ContentBlock.tsx          Reusable content blocks
│   │
│   └── 📂 pages/
│       ├── 📄 HomePage.tsx          Home page content
│       ├── 📄 AboutPage.tsx         About page content
│       ├── 📄 InventoryPage.tsx     Book inventory page
│       └── 📄 ContactPage.tsx       Contact page content
│
├── 📂 styles/
│   └── 📄 globals.css               Colors and global styles
│
├── 📂 guidelines/
│   └── 📄 Guidelines.md             Your custom guidelines
│
└── 📚 Documentation/
    ├── 📄 README.md                 Main documentation
    ├── 📄 QUICK_START.md            Get started in 3 steps
    ├── 📄 DEPLOYMENT_GUIDE.md       Complete deployment guide
    ├── 📄 HOW_TO_EDIT.md            How to edit website content
    ├── 📄 FILE_STRUCTURE.md         This file
    └── 📄 Attributions.md           Credits and licenses
```

## 🎯 Files You Should Edit

### ⭐ Main Content File
- **`/content/siteContent.ts`** - Edit ALL website text here

### 🎨 Styling (Optional)
- **`/styles/globals.css`** - Change colors/fonts (advanced)

### 📝 Documentation (Optional)
- **`README.md`** - Update project description
- **`Attributions.md`** - Add credits

## 🚫 Files You Should NOT Edit

### System Files
- `.nojekyll` - Required for GitHub Pages
- `.gitignore` - Git configuration
- `package.json` - Project metadata
- `index.html` - Entry point for browser

### GitHub Actions
- `.github/workflows/deploy.yml` - Automatic deployment

### React Components
Unless you know React/TypeScript, don't edit:
- `App.tsx`
- `components/*.tsx`
- `components/pages/*.tsx`

## 📂 Folder Purposes

### `/content`
Contains all editable website text. This is where you make content changes.

### `/components`
React components that build your website. These use the content from `/content/siteContent.ts`.

### `/components/pages`
Individual page components (Home, About, Inventory, Contact).

### `/styles`
CSS files for styling. The `globals.css` file contains color definitions and typography.

### `/guidelines`
Your custom guidelines or notes.

### `/.github/workflows`
GitHub Actions workflows for automatic deployment to GitHub Pages.

## 🔄 How Files Work Together

```
┌─────────────────────────────────────────────┐
│ index.html                                  │
│ (Loads everything)                          │
└────────────┬────────────────────────────────┘
             │
             ├──> styles/globals.css (Colors)
             │
             └──> App.tsx (Main application)
                  │
                  ├──> components/WireframeLayout.tsx
                  │    (Header & Footer)
                  │    │
                  │    └──> content/siteContent.ts
                  │         ⭐ (Your editable content)
                  │
                  └──> components/pages/*.tsx
                       (Individual pages)
                       │
                       └──> content/siteContent.ts
                            ⭐ (Your editable content)
```

## 💡 Key Points

1. **One File to Edit:** `/content/siteContent.ts` contains all text
2. **Automatic Deployment:** Push to GitHub → Site updates automatically
3. **Component System:** Pages pull content from `siteContent.ts`
4. **Static Site:** No database or server needed
5. **GitHub Pages:** Free hosting from GitHub

## 📝 Example: Changing a Book Title

1. Open `/content/siteContent.ts`
2. Find the books array:
   ```typescript
   books: [
     {
       title: "[Book Title Here]",  // ← Edit this
       genre: "[Genre]",
       price: "$[00.00]",
       description: "...",
     },
   ```
3. Change to:
   ```typescript
   books: [
     {
       title: "The Great Gatsby",  // ✓ Changed
       genre: "Classic Fiction",
       price: "$12.99",
       description: "A classic American novel",
     },
   ```
4. Save the file
5. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated book title"
   git push
   ```
6. Wait 2-5 minutes for deployment
7. Refresh your website to see changes

## 🆘 Troubleshooting

### Can't find a file?
Make sure you're looking in the correct folder based on the structure above.

### Accidentally deleted a file?
Use Git to restore it:
```bash
git checkout filename.tsx
```

### Want to add new pages?
This requires React knowledge. Stick to editing `/content/siteContent.ts` for content changes.

---

**Remember:** For 99% of your edits, you only need to touch `/content/siteContent.ts` 🎯

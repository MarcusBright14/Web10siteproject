# 📚 Bookstore Website

> **🎯 New here? Start with [START_HERE.md](./START_HERE.md) for a complete guide!**

A customizable Web 1.0 style static informational website with a 4-page structure for a bookstore.

## 🚀 Quick Links

### Getting Started
- **[👋 START HERE](./START_HERE.md)** - Complete overview and guide
- **[⚡ Quick Start (3 steps)](./QUICK_START.md)** - Get online fast!
- **[✅ Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)** - Step-by-step checklist

### Managing Your Site
- **[📝 How to Edit Content](./HOW_TO_EDIT.md)** - Change website text
- **[💻 Git Commands](./GIT_COMMANDS.md)** - Git reference guide
- **[🔧 Troubleshooting](./TROUBLESHOOTING.md)** - Fix common issues

### Reference
- **[🌐 Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Complete GitHub Pages setup
- **[📁 File Structure](./FILE_STRUCTURE.md)** - Understand the files

## 🌐 Live Demo

After publishing to GitHub Pages, your site will be available at:
```
https://[your-username].github.io/[repository-name]/
```

## 📄 Pages

- **Home** - Hero section, features, and call-to-action
- **About** - Company information, mission, and team
- **Inventory** - Book listings with titles, genres, prices, and descriptions
- **Contact** - Contact form and business information

## ✏️ How to Edit Content

All website text can be edited in **one file**: `/content/siteContent.ts`

See the [HOW_TO_EDIT.md](./HOW_TO_EDIT.md) file for detailed instructions on editing your website content.

## 🚀 Deploying to GitHub Pages

**See the complete step-by-step guide:** [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Quick Start:

1. Push code to GitHub
2. Enable GitHub Pages (Settings → Pages → Source: "GitHub Actions")
3. Wait 2-5 minutes
4. Site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`

**Having trouble?** Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions and troubleshooting.

## 🎨 Color Scheme

- Primary: #BA0C2F (Deep Red)
- Secondary: #FFFFFF (White)
- Tertiary: #000000 (Black)

## 📁 Project Structure

```
├── App.tsx                    # Main app component with page routing
├── components/
│   ├── WireframeLayout.tsx   # Site layout (header/footer)
│   ├── Navigation.tsx        # Navigation menu
│   ├── ContentBlock.tsx      # Reusable content block component
│   └── pages/                # Individual page components
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       ├── InventoryPage.tsx
│       └── ContactPage.tsx
├── content/
│   └── siteContent.ts        # ⭐ EDIT THIS FILE FOR ALL TEXT
└── styles/
    └── globals.css           # Global styles and colors
```

## 🛠️ Local Development

This project is built with React, TypeScript, and Tailwind CSS.

To run locally (if you have Node.js installed):

```bash
npm install
npm run dev
```

## 📝 Editing Tips

1. Only edit the `/content/siteContent.ts` file for text changes
2. Keep quotation marks around all text
3. Don't delete commas at the end of lines
4. Save the file after editing

## ❓ Troubleshooting GitHub Pages

### Site shows 404 error
- Check that GitHub Pages is enabled in Settings → Pages
- Make sure the source is set to "GitHub Actions" or branch is `main`
- Wait 3-5 minutes after first deployment

### Site is blank
- Check browser console for errors (F12)
- Verify all files were pushed to GitHub
- Make sure `/content/siteContent.ts` exists and is valid

### Changes not showing
- Clear browser cache (Ctrl + Shift + R)
- Wait for GitHub Actions to complete deployment (check Actions tab)
- Make sure you pushed your changes: `git push origin main`

## 📞 Support

For detailed editing instructions, see [HOW_TO_EDIT.md](./HOW_TO_EDIT.md)

---

**Built with:** React + TypeScript + Tailwind CSS

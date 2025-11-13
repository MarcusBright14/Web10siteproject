# How to Edit Your Website Content

## 📝 Quick Start Guide

All the text on your website can be edited in **ONE FILE**: `/content/siteContent.ts`

### Step-by-Step Instructions:

1. **Open the file**: Navigate to the `content` folder and open `siteContent.ts`

2. **Find the text you want to change**: The file is organized by page sections with clear labels

3. **Edit the text**: Simply change the text between the quotation marks `"your text here"`

4. **Save the file**: After making your changes, save the file and your website will update automatically

---

## 📂 File Structure

```
content/
  └── siteContent.ts  ← EDIT THIS FILE TO CHANGE ALL WEBSITE TEXT
```

---

## ✏️ Editing Examples

### Example 1: Change Company Name
**Find this:**
```typescript
companyName: "Your Company Name",
```

**Change to:**
```typescript
companyName: "ABC Bookstore",
```

### Example 2: Change a Book Title
**Find this:**
```typescript
books: [
  {
    title: "[Book Title Here]",
    genre: "[Genre: Fiction, Non-Fiction, Mystery, etc.]",
    price: "$[00.00]",
    description: "Brief description...",
  },
```

**Change to:**
```typescript
books: [
  {
    title: "The Great Gatsby",
    genre: "Classic Fiction",
    price: "$12.99",
    description: "A classic American novel set in the Jazz Age.",
  },
```

### Example 3: Change Contact Information
**Find this:**
```typescript
phone: {
  label: "Phone",
  number: "(123) 456-7890",
},
```

**Change to:**
```typescript
phone: {
  label: "Phone",
  number: "(555) 123-4567",
},
```

---

## 🗺️ Content Organization

The `siteContent.ts` file is organized into sections:

### **Site-Wide Content**
- Company name
- Logo text
- Footer information
- Navigation labels

### **Home Page**
- Hero/banner section
- Feature boxes (3 features)
- Introduction section
- Call-to-action button

### **About Page**
- Page header
- Mission statement
- Company history
- Team members (3 people)

### **Inventory Page (Books)**
- Page header
- Introduction text
- Book listings (6 books)
  - Each book has: title, genre, price, description
- Additional information section

### **Contact Page**
- Page header
- Contact form labels
- Contact information
  - Address
  - Phone
  - Email
  - Hours

---

## ⚠️ Important Tips

1. **Keep the quotation marks**: Always keep the `"` marks around your text
2. **Don't delete commas**: Each line should end with a comma `,`
3. **Use the same structure**: Don't change the overall organization
4. **Save your work**: Always save the file after making changes

---

## 🆘 What NOT to Change

❌ Don't change anything outside the quotation marks  
❌ Don't delete the curly braces `{ }` or square brackets `[ ]`  
❌ Don't remove commas `,` at the end of lines  
❌ Don't change the file name or location  

✅ Only change the text between the quotation marks `"like this"`

---

## 💡 Need Help?

If something breaks or doesn't look right:
1. Check that you didn't accidentally delete a quotation mark `"` or comma `,`
2. Make sure every opening quotation mark `"` has a closing quotation mark `"`
3. Look for error messages in the browser console

---

## 📚 Example: Complete Book Entry

Here's what a complete, edited book entry looks like:

```typescript
{
  title: "To Kill a Mockingbird",
  genre: "Classic Literature",
  price: "$14.99",
  description: "A gripping tale of racial injustice and childhood innocence in the American South.",
},
```

Simply copy this format for each of your 6 books!

---

**Remember**: You only need to edit `/content/siteContent.ts` - don't worry about any other files! 🎉

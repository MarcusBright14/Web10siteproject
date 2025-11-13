// ============================================
// WEBSITE CONTENT - EDIT ALL TEXT HERE
// ============================================
// This file contains ALL the text content for your website.
// To change any text on your site, simply edit the text between the quotes.
// Save the file after making changes and your website will update.
// ============================================

export const siteContent = {
  // ============================================
  // SITE-WIDE CONTENT
  // ============================================
  site: {
    companyName: "Your Company Name",
    logoText: "Logo Area",
    footerText: "© 2025 Your Company Name. All rights reserved.",
    footerLinks: "Contact Info | Links | Social Media",
    footerLabel: "Footer Area",
    navigationLabel: "Navigation Bar",
  },

  // ============================================
  // HOME PAGE
  // ============================================
  home: {
    // Hero/Banner Section
    hero: {
      title: "Welcome to Our Website",
      description: "This is the main hero/banner area. Add your headline, tagline, and call-to-action here.",
    },

    // Three Feature Boxes
    features: [
      {
        title: "Feature Title",
        description: "Brief description of feature or service.",
      },
      {
        title: "Feature Title",
        description: "Brief description of feature or service.",
      },
      {
        title: "Feature Title",
        description: "Brief description of feature or service.",
      },
    ],

    // Main Introduction Section
    introduction: {
      title: "About Our Company",
      description: "Main introductory content goes here. Describe your company, products, or services. Add paragraphs, images, and other content as needed.",
    },

    // Call to Action Section
    callToAction: {
      title: "Get Started Today",
      description: "Add a compelling call-to-action message here.",
      buttonText: "CTA Button",
    },
  },

  // ============================================
  // ABOUT PAGE
  // ============================================
  about: {
    // Page Header
    header: {
      title: "About Us",
      subtitle: "Brief tagline or subtitle about your company",
    },

    // Image Area Placeholder
    imageText: "[Company Photo / Image]",

    // Mission Section
    mission: {
      title: "Our Mission",
      paragraph1: "Tell your company's story here. Explain your mission, values, and what makes you unique.",
      paragraph2: "Add more details about your history, team, or philosophy.",
    },

    // History Section
    history: {
      title: "Our History",
      paragraph1: "Detailed information about your company's background, achievements, and milestones.",
      paragraph2: "Add multiple paragraphs as needed to tell your complete story.",
    },

    // Team Members
    teamMembers: [
      {
        name: "Name",
        position: "Position",
      },
      {
        name: "Name",
        position: "Position",
      },
      {
        name: "Name",
        position: "Position",
      },
    ],
  },

  // ============================================
  // INVENTORY PAGE (Book Store)
  // ============================================
  inventory: {
    // Page Header
    header: {
      title: "Book Inventory",
      subtitle: "Browse our collection of books",
    },

    // Introduction
    introduction: "Welcome to our book inventory. Browse through our selection and find your next great read.",

    // Book Listings (6 books)
    books: [
      {
        title: "[Book Title Here]",
        genre: "[Genre: Fiction, Non-Fiction, Mystery, etc.]",
        price: "$[00.00]",
        description: "Brief description of the book. Include plot summary, key themes, or what makes this book special.",
      },
      {
        title: "[Book Title Here]",
        genre: "[Genre: Fiction, Non-Fiction, Mystery, etc.]",
        price: "$[00.00]",
        description: "Brief description of the book. Include plot summary, key themes, or what makes this book special.",
      },
      {
        title: "[Book Title Here]",
        genre: "[Genre: Fiction, Non-Fiction, Mystery, etc.]",
        price: "$[00.00]",
        description: "Brief description of the book. Include plot summary, key themes, or what makes this book special.",
      },
      {
        title: "[Book Title Here]",
        genre: "[Genre: Fiction, Non-Fiction, Mystery, etc.]",
        price: "$[00.00]",
        description: "Brief description of the book. Include plot summary, key themes, or what makes this book special.",
      },
      {
        title: "[Book Title Here]",
        genre: "[Genre: Fiction, Non-Fiction, Mystery, etc.]",
        price: "$[00.00]",
        description: "Brief description of the book. Include plot summary, key themes, or what makes this book special.",
      },
      {
        title: "[Book Title Here]",
        genre: "[Genre: Fiction, Non-Fiction, Mystery, etc.]",
        price: "$[00.00]",
        description: "Brief description of the book. Include plot summary, key themes, or what makes this book special.",
      },
    ],

    // Additional Info Section
    additionalInfo: {
      title: "More Books Available",
      description: "Add more book listings, featured selections, or filter/search options here.",
    },
  },

  // ============================================
  // CONTACT PAGE
  // ============================================
  contact: {
    // Page Header
    header: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
    },

    // Contact Form
    form: {
      title: "Send us a Message",
      buttonText: "Submit Button",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "[Input Field]",
        email: "[Input Field]",
        subject: "[Input Field]",
        message: "[Textarea]",
      },
    },

    // Contact Information
    info: {
      title: "Contact Information",
      address: {
        label: "Address",
        line1: "123 Main Street",
        line2: "City, State 12345",
        line3: "Country",
      },
      phone: {
        label: "Phone",
        number: "(123) 456-7890",
      },
      email: {
        label: "Email",
        address: "info@yourcompany.com",
      },
      hours: {
        label: "Hours",
        line1: "Monday - Friday: 9:00 AM - 5:00 PM",
        line2: "Saturday - Sunday: Closed",
      },
    },

    // Map Section
    mapText: "[Embedded Map / Location Image]",
  },

  // ============================================
  // LABELS (For wireframe structure labels)
  // ============================================
  labels: {
    home: {
      hero: "Hero Section / Banner",
      feature1: "Feature 1",
      feature2: "Feature 2",
      feature3: "Feature 3",
      introduction: "Main Content / Introduction",
      callToAction: "Call to Action Section",
    },
    about: {
      header: "Page Header",
      image: "Image / Photo Area",
      mission: "Company Story / Mission",
      history: "Detailed Content / History",
      team1: "Team Member 1",
      team2: "Team Member 2",
      team3: "Team Member 3",
    },
    inventory: {
      header: "Page Header",
      introduction: "Inventory Introduction",
      book1: "Book Listing 1",
      book2: "Book Listing 2",
      book3: "Book Listing 3",
      book4: "Book Listing 4",
      book5: "Book Listing 5",
      book6: "Book Listing 6",
      additionalInfo: "Additional Inventory Info",
      bookTitleLabel: "Book Title",
      genreLabel: "Genre",
      priceLabel: "Price",
      descriptionLabel: "Description",
    },
    contact: {
      header: "Page Header",
      form: "Contact Form",
      info: "Contact Information",
      map: "Map Area",
    },
  },
};

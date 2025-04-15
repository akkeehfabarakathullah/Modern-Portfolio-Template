# Modern Portfolio Template

A professional, fully customizable portfolio template built with React, TypeScript, and Tailwind CSS. Perfect for developers, designers, and creatives looking to showcase their work with a modern, responsive website.

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

- 🎨 Modern and clean design with smooth animations
- 🌓 Dark/Light mode with system preference detection
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with performance in mind
- 🔧 Easy to customize through a central configuration file
- 🎭 Smooth animations using Framer Motion
- 📧 Working contact form with EmailJS integration
- 📊 Automatic GitHub projects integration
- 🎯 SEO friendly
- 🌐 Social media integration
- 📄 Downloadable resume section

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-portfolio
   cd modern-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install for install vite run npm install vite --save-dev
   ```

3. Update the configuration in `src/config/portfolio.ts`

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Customization Guide

### 1. Personal Information

Update `src/config/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  bio: "Your bio description",
  location: "Your Location",
  avatarUrl: "your-photo-url",
  resumeUrl: "/your-resume.pdf",
};
```

### 2. Social Links

Configure your social media links:

```typescript
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  // Add more social links
];
```

### 3. Skills & Technologies

Customize your skills:

```typescript
export const skillCategories = [
  {
    category: "Frontend",
    icon: "Layout",
    color: "text-blue-500",
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  // Add more categories
];
```

### 4. Contact Form Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template with variables:
   - `{{name}}`
   - `{{email}}`
   - `{{message}}`
4. Update the EmailJS configuration:

```typescript
export const emailConfig = {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
};
```

### 5. GitHub Integration

Update your GitHub username:

```typescript
export const githubUsername = "yourusername";
```

### 6. Theme Customization

Modify `tailwind.config.js` to customize colors, fonts, and other design tokens:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        // Add custom colors
      },
      // Add custom configurations
    },
  },
};
```

## 📁 Project Structure

```
modern-portfolio/
├── src/
│   ├── components/        # React components
│   ├── config/           # Configuration files
│   ├── types/            # TypeScript types
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── package.json         # Project dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## 📦 Dependencies

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide React Icons

## 🚀 Deployment

1. Build your portfolio:
   ```bash
   npm run build
   ```

2. The `dist` folder will contain your built application

3. Deploy to your preferred platform:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting

## 📱 Mobile Responsiveness

The portfolio is fully responsive with three breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO

The template includes:
- Semantic HTML
- Meta tags
- Proper heading hierarchy
- Alt text for images
- Sitemap support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Support

If you have any questions or need help with customization, please open an issue in the repository.

---

Made with ❤️ by akkeehfa barakathullah
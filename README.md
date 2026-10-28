# Sai Ram Chidurala - Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience as a Backend Software Engineer with 4 years of expertise in Java, Spring Boot, and microservices architecture.

## 🌟 Overview

This portfolio demonstrates:
- **Backend Engineering Excellence**: Java, Spring Boot, Kafka, REST APIs
- **Technical Leadership**: Leading a team of 10 engineers at Nextiva
- **Enterprise Impact**: Solutions delivered for Tata Play, Kotak, Bank of Baroda
- **Modern Development**: Microservices, AI/ML integration, Docker, CI/CD

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### State & Data
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sairamchidurala/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Contact.tsx    # Contact section
│   │   ├── Experience.tsx # Work experience
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Navbar.tsx     # Navigation
│   │   ├── Projects.tsx   # Project showcase
│   │   └── Skills.tsx     # Skills section
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Main portfolio page
│   │   ├── Resume.tsx     # Resume page
│   │   └── NotFound.tsx   # 404 page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── assets/            # Images and media
├── package.json
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Features

- ✅ **Responsive Design** - Works on all devices and screen sizes
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Interactive Components** - Project dialogs, contact forms, navigation
- ✅ **Performance Optimized** - Fast loading with Vite and code splitting
- ✅ **SEO Friendly** - Proper meta tags and semantic HTML
- ✅ **Accessibility** - WCAG compliant components from Radix UI
- ✅ **Type Safe** - Full TypeScript implementation
- ✅ **Professional Sections**:
- Hero with introduction
- Skills and technologies
- Work experience timeline
- Project portfolio with detailed views
- Contact information and form

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Connect your GitHub repo to Vercel for automatic deployments
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder to Netlify
```

### Manual Deployment
```bash
npm run build
# Upload the contents of the `dist` folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any environment-specific configurations:

```env
VITE_APP_TITLE="Sai Ram Chidurala - Portfolio"
VITE_CONTACT_EMAIL="sairamchidurala93@gmail.com"
```

### Customization
- **Colors**: Modify `tailwind.config.ts` for theme colors
- **Components**: Update components in `src/components/`
- **Content**: Edit component files to update personal information
- **Styling**: Customize styles in component files or global CSS

## 📞 Contact Information

- **Email**: sairamchidurala93@gmail.com
- **Phone**: +91 9966365940
- **LinkedIn**: [linkedin.com/in/sairamchidurala](https://linkedin.com/in/sairam-chidurala)
- **GitHub**: [github.com/sairamchidurala](https://github.com/sairamchidurala)
- **Blog**: [iamsairam.in/blog](https://iamsairam.in/blog)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Sai Ram Chidurala**

<div align="center">

# Base64 Tool

*Base64 encoder & decoder*

[![GitHub stars](https://img.shields.io/github/stars/damianczer/Base64-Tool?style=for-the-badge&color=gold)](https://github.com/damianczer/Base64-Tool/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/damianczer/Base64-Tool?style=for-the-badge&color=blue)](https://github.com/damianczer/Base64-Tool/watchers)
[![GitHub issues](https://img.shields.io/github/issues/damianczer/Base64-Tool?style=for-the-badge&color=red)](https://github.com/damianczer/Base64-Tool/issues)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://www.damianczerwinski.pl/base64-tool/)

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react) | `19.2.3` | Modern UI Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript) | `5.9.3` | Type-safe development |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=flat-square&logo=tailwind-css) | `3.4.19` | Utility-first CSS framework |
| ![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?style=flat-square&logo=vite) | `7.3.0` | Next generation frontend tooling |
| ![i18next](https://img.shields.io/badge/i18next-25.7.3-26A69A?style=flat-square&logo=i18next) | `25.7.3` | Internationalization framework |

Fast and reliable Base64 encoder/decoder with instant text-to-Base64 and Base64-to-text conversion using optimized algorithms.

<img width="1899" height="906" alt="image" src="https://github.com/user-attachments/assets/066bfe88-2149-4960-909b-0768706701ce" />

<img width="1898" height="903" alt="image" src="https://github.com/user-attachments/assets/fb4615f5-7597-4a59-9b17-7ebc6afa040b" />

</div>

**Key Features & Capabilities:**

- **Base64 Encoding/Decoding** - Fast, client-side text encoding and decoding
- **Dark/Light Theme** - Smooth theme transitions with system preference detection
- **Internationalization** - Full support for English and Polish languages
- **Responsive Design** - Mobile-first approach, works on all devices
- **Privacy Focused** - All operations performed locally in your browser
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- **Zero Server Dependency** - No data ever leaves your browser

## 📁 Project Architecture

```
Base64-Tool/
├── application/
│   ├── public/
│   │   └── favicon.ico                 # Application favicon
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Base64Converter.tsx     # Main converter component
│   │   │   ├── Footer.tsx              # Footer with author info
│   │   │   ├── LanguageToggle.tsx      # i18n language switcher
│   │   │   ├── LegalModal.tsx          # Privacy Policy & Terms modal
│   │   │   ├── Logo.tsx                # Application logo
│   │   │   ├── ThemeToggle.tsx         # Dark/Light mode toggle
│   │   │   └── ThemeTransition.tsx     # Smooth theme transitions
│   │   │
│   │   ├── contexts/
│   │   │   ├── theme.context.ts        # Theme context types
│   │   │   └── ThemeContext.tsx        # Theme provider & logic
│   │   │
│   │   ├── hooks/
│   │   │   └── useTheme.ts             # Theme state management hook
│   │   │
│   │   ├── i18n/
│   │   │   ├── config.ts               # i18next configuration
│   │   │   └── locales/
│   │   │       ├── en.json             # English translations
│   │   │       └── pl.json             # Polish translations
│   │   │
│   │   ├── utils/
│   │   │   └── settings.ts             # Settings persistence helpers
│   │   │
│   │   ├── App.tsx                     # Root component with providers
│   │   ├── main.tsx                    # React DOM rendering entry point
│   │   └── index.css                   # Global styles & Tailwind imports
│   │
│   ├── index.html                      # HTML entry point
│   ├── package.json                    # Dependencies & scripts
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── tsconfig.app.json               # App-specific TS config
│   ├── tsconfig.node.json              # Node-specific TS config
│   ├── vite.config.ts                  # Vite build configuration
│   ├── tailwind.config.js              # Tailwind CSS configuration
│   ├── postcss.config.js               # PostCSS configuration
│   ├── eslint.config.js                # ESLint rules & plugins
│   └── .gitignore
│
├── LICENSE                             # MIT License
└── README.md                           # Project documentation
```
  
## ⚒️ Installation & Setup

### Prerequisites

```bash
- Node.js 18.0.0 or higher
- npm 7.0.0 or higher (or yarn/pnpm equivalent)
- Modern web browser (Chrome, Firefox, Safari, Edge)
```

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/damianczer/Base64-Tool.git

# 2️⃣ Navigate to project directory
cd Base64-Tool/application

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm run dev

# 🎉 Application will open at http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Production files will be in the 'dist' folder
# Deploy the entire dist folder to your web hosting

# Optional: Preview production build locally
npm run preview
```

### Additional Commands

```bash
# Run ESLint for code quality
npm run lint

# Type checking
npm run build
```

## 📜 License

```
Copyright © 2025 Damian Czerwiński

This project is copyrighted and proprietary software.
All rights reserved.

Unauthorized copying, modification, distribution, or use of this software,
via any medium, is strictly prohibited without explicit written permission
from the copyright holder.

For licensing inquiries or permission requests:
📧 Email: kontakt@damianczerwinski.pl
🌐 Web: https://www.damianczerwinski.pl
```

<br>

<div align="center">
  
**Made with ❤️ and ☕ by Damian Czerwiński**

*Building beautiful, functional web experiences one component at a time*

</div>


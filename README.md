# Aadhaar Card Download - React MUI Application

A complete React JS application built with Material UI (MUI v5) for Aadhaar Card download services.

## Features

- ⚡ React 18 with functional components and hooks
- 🎨 Material UI (MUI v5) with custom theme
- 🛣️ React Router v6 for client-side routing
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 5 complete pages with professional design
- 🔍 FAQ search and category filtering
- 📬 Contact form with validation

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, and steps |
| `/about` | About Aadhaar Card and our mission |
| `/download` | Download guide with step-by-step instructions |
| `/contact` | Contact form with validation |
| `/faqs` | Searchable FAQ with category filters |

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/chiragtelar/aadharcard.git
cd aadharcard

# Install dependencies
npm install

# Start development server
npm start
```

### Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation bar with mobile drawer
│   ├── Footer.jsx      # Footer with links and contact info
│   └── Layout.jsx      # Master layout wrapper
├── pages/
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page
│   ├── Download.jsx    # Download guide page
│   ├── Contact.jsx     # Contact form page
│   └── FAQs.jsx        # FAQ page with search
├── routes/
│   └── Routes.jsx      # App routing configuration
├── styles/
│   ├── theme.js        # MUI custom theme
│   └── globalStyles.js # Global CSS styles
├── App.jsx             # Main app component
└── index.js            # App entry point
```

## Tech Stack

- **React 18** - UI framework
- **Material UI v5** - Component library
- **React Router v6** - Client-side routing
- **Emotion** - CSS-in-JS styling

## License

MIT

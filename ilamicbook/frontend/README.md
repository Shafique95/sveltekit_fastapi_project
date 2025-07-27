# IlamicBook Frontend

A modern, responsive frontend for the IlamicBook application built with SvelteKit and Tailwind CSS.

## Features

- 🚀 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 📚 **Book Display**: Showcase books from the FastAPI backend
- ⚡ **Fast Performance**: Built with SvelteKit for optimal performance
- 🎨 **Beautiful Design**: Modern gradient backgrounds and smooth animations
- 📱 **Mobile Responsive**: Works perfectly on all device sizes

## Tech Stack

- **SvelteKit**: Full-stack web framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type-check the code

## Project Structure

```
src/
├── app.css          # Global styles with Tailwind
├── app.html         # HTML template
├── routes/          # SvelteKit routes
│   ├── +layout.svelte  # Root layout
│   └── +page.svelte    # Homepage
└── lib/             # Shared components and utilities
```

## API Integration

The frontend connects to the FastAPI backend running on `http://localhost:8000`. Make sure the backend is running before starting the frontend.

## Styling

This project uses Tailwind CSS for styling. The design features:
- Gradient backgrounds
- Modern card layouts
- Responsive grid systems
- Smooth hover animations
- Professional color scheme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

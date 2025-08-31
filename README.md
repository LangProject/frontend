# LangProject Frontend

A modern language learning platform built with Next.js 15, TypeScript, and Tailwind CSS, designed to work seamlessly with a FastAPI backend.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Component Architecture**: Well-organized, reusable components
- **API Integration**: Ready for FastAPI backend integration
- **Authentication**: Built-in auth system with hooks and utilities
- **Performance**: Optimized with Next.js best practices

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   └── forms/            # Form components
├── hooks/                # Custom React hooks
│   └── useAuth.ts
├── lib/                  # Utility libraries
│   └── utils.ts
├── services/             # API services
│   └── api.ts
├── types/                # TypeScript type definitions
│   └── index.ts
├── modules/              # Feature modules
│   ├── auth/            # Authentication module
│   ├── dashboard/       # Dashboard module
│   └── api/             # API module
└── styles/              # Additional styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **State Management**: React Hooks
- **Form Handling**: React Hook Form (ready to add)
- **Validation**: Zod (ready to add)
- **Icons**: Lucide React (ready to add)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LangProject/frontend.git
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Development

### Adding New Components

1. **UI Components**: Add to `src/components/ui/`
2. **Layout Components**: Add to `src/components/layout/`
3. **Form Components**: Add to `src/components/forms/`

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component

### Adding New API Endpoints

1. Add new methods to `src/services/api.ts`
2. Create specific service files in `src/services/` if needed
3. Use the API service in your components

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Use the `cn()` utility for conditional classes
- Follow the existing design system
- Use semantic color names (blue-600, gray-900, etc.)

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with the new PostCSS plugin. Configuration is in `tailwind.config.ts`.

### TypeScript

TypeScript is configured with strict mode enabled. Configuration is in `tsconfig.json`.

### ESLint

ESLint is configured with Next.js recommended rules. Configuration is in `eslint.config.mjs`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Docker

```bash
# Build the Docker image
docker build -t lang-frontend .

# Run the container
docker run -p 3000:3000 lang-frontend
```

## 🔗 API Integration

The frontend is designed to work with a FastAPI backend. The API service layer is configured to:

- Make requests to `http://localhost:8000` by default
- Handle authentication with JWT tokens
- Provide consistent error handling
- Support all HTTP methods (GET, POST, PUT, PATCH, DELETE)

### Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://localhost:8000)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/LangProject/frontend/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

Built with ❤️ by the LangProject Team

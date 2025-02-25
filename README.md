# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### How it works

1. When you push to the `main` branch, a GitHub Actions workflow will automatically:
   - Build the project
   - Deploy it to GitHub Pages

### Setup Instructions

To enable GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The first deployment will happen automatically after your next push to `main`

### Manual Deployment

You can also manually trigger a deployment:

1. Go to the "Actions" tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the branch you want to deploy

### Repository Information Management

This project includes a GitHub Actions workflow to update repository information:

1. Go to the "Actions" tab in your repository
2. Select the "Update Repository Information" workflow
3. Click "Run workflow"
4. You can customize:
   - Repository description (default: "A React application built with Vite and deployed to GitHub Pages")
   - Repository topics (default: react, vite, github-pages, javascript, web-development)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

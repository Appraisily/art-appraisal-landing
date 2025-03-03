# Art Appraisal Landing Page

A modern, minimalist landing page for an art appraisal service built with React and TypeScript.

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Lucide React for icons

## Features

- Clean, modern design optimized for conversions
- Responsive layout for all devices
- Performance optimized with code splitting
- SEO friendly

## Core Components

- Hero section with clear value proposition
- Process explanation
- FAQ section
- Pricing information

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
│   ├── Hero.tsx   # Main landing section
│   ├── Process.tsx # How it works
│   ├── FAQ.tsx    # Common questions
│   └── Pricing.tsx # Service pricing
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## Performance Optimizations

- Code splitting with React.Suspense
- Error boundaries for reliability
- Optimized image loading
- Efficient bundle chunking

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on all screen sizes

## Deployment

This site is configured to be deployed to Netlify. The deployment is handled automatically through the Netlify configuration in `netlify.toml`.

### Netlify Configuration

The site is configured with a specific subdomain for the art appraisal landing page. The sitemap generation is part of the build process.

To configure the site for your Netlify account:

1. Update the `NETLIFY_SITE_ID` and `SITE_NAME` in the `netlify.toml` file
2. Update the `SITE_URL` to match your actual subdomain (e.g., `https://art-appraisal.yourdomain.com`)

### Sitemap Generation

A sitemap.xml file is automatically generated during the build process. The sitemap is created by scanning the built HTML files in the `dist` directory.

The sitemap generator can be run manually with:

```bash
npm run generate-sitemap
```

The sitemap will be generated in the `dist` directory as `sitemap.xml`.

### Integrating with Other Sitemaps

If you have multiple subdomains or sites with their own sitemaps, you can create a sitemap index file that references all of them. 

Example of a sitemap index file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://art-appraisal.yourdomain.com/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://another-subdomain.yourdomain.com/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
```

This index file would typically be placed at the root domain level.
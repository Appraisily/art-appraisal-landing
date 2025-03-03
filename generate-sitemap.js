import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your site URL - this should be updated to your actual subdomain
const SITE_URL = process.env.SITE_URL || 'https://art-appraisal.yourdomain.com';

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: SITE_URL });
const writeStream = createWriteStream(resolve(__dirname, 'dist', 'sitemap.xml'));

sitemap.pipe(writeStream);

// Function to scan the dist directory for HTML files
function scanDirectory(dir, baseUrl = '') {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = resolve(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      scanDirectory(filePath, `${baseUrl}/${file}`);
    } else if (file.endsWith('.html')) {
      // For HTML files, add them to the sitemap
      const relativePath = file === 'index.html' && baseUrl === '' 
        ? '/' 
        : `${baseUrl}/${file.replace('index.html', '')}`;
      
      sitemap.write({
        url: relativePath,
        changefreq: 'weekly',
        priority: relativePath === '/' ? 1.0 : 0.7,
        lastmod: stat.mtime.toISOString()
      });
    }
  }
}

// Scan the dist directory
scanDirectory(resolve(__dirname, 'dist'));

// Add any additional static routes if needed
// For example, if you have dynamic routes that aren't represented by HTML files:
/*
sitemap.write({
  url: '/appraisers/new-york',
  changefreq: 'weekly',
  priority: 0.8
});
*/

// Close the sitemap stream
sitemap.end();

console.log('✅ Sitemap generated successfully!'); 
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://nipunbandara.vercel.app';

// List your static routes with priorities
const staticPages = [
  { path: '', priority: 1.0 },      // homepage
  { path: 'blogs', priority: 0.8 }, // blog listing page
  { path: 'open-contribution', priority: 0.8 }, // open contributions page
];

// If your blog posts are markdown files in /content/blogs, read their slugs and lastmod:
const postsDir = path.join(process.cwd(), 'content', 'blogs');
let blogPosts = [];
if (fs.existsSync(postsDir)) {
  blogPosts = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const stats = fs.statSync(path.join(postsDir, file));
      const lastmod = stats.mtime.toISOString().split('T')[0]; // YYYY-MM-DD
      return {
        url: `${BASE_URL}/blogs/${slug}`,
        lastmod,
        priority: 0.7,
      };
    });
}

// Static pages (use today's date as lastmod)
const today = new Date().toISOString().split('T')[0];
const staticUrls = staticPages.map(page => ({
  url: `${BASE_URL}/${page.path}`,
  lastmod: today,
  priority: page.priority,
}));

const urls = [...staticUrls, ...blogPosts];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastmod, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap.trim());
console.log('✅ Sitemap generated at public/sitemap.xml');
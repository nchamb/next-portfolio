const RSS = require('rss');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const postsDirectory = path.join(process.cwd(), 'src/content/blogs');

function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
}

function generateRssFeed() {
  const feed = new RSS({
    title: "Nipun's Blog",
    description: 'A collection of my findings, thoughts, and experiences in the world of software development.',
    site_url: 'http://nipunbandara.vercel.app/',
    feed_url: 'http://nipunbandara.vercel.app/rss.xml',
    pubDate: new Date(),
    language: 'en',
  });

  const posts = getAllPosts();

  posts.forEach(post => {
    feed.item({
      title: post.title,
      guid: post.slug,
      url: `http://nipunbandara.vercel.app/blogs/${post.slug}`,
      date: post.date,
      description: post.excerpt,
      categories: post.tags || [],
      author: post.author.name || 'Nipun Bandara',
    });
  });

  const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
  fs.writeFileSync(rssPath, feed.xml({ indent: true }));
}

module.exports = { generateRssFeed };
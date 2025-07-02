const RSS = require('rss');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const postsDirectory = path.join(process.cwd(), 'content/blogs');
const mime = require('mime-types');

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
    title: "Cham's Blog",
    description: 'A collection of my findings, thoughts, and experiences in the world of software development.',
    site_url: 'https://chamb.vercel.app/blogs',
    feed_url: 'https://chamb.vercel.app/rss.xml',
    pubDate: new Date(),
    language: 'en',
  });

  const posts = getAllPosts();
  posts.forEach(post => {
    let imageUrl, mimeType;
    if (post.img) {
      imageUrl = post.img;
      mimeType = mime.lookup(imageUrl);
    }
    const itemOptions = {
      title: post.title,
      guid: `https://chamb.vercel.app/blogs/${post.slug}`,
      url: `https://chamb.vercel.app/blogs/${post.slug}`,
      date: post.date,
      description: post.excerpt,
      enclosure: post.img ? {
        url: 'https://chamb.vercel.app' + post.img,
        type: mimeType,
      } : undefined,
      categories: post.tags || [],
      author: post.author?.name || 'Cham Bandara',
      custom_elements: []
    };

    if (post.img) {
      itemOptions.custom_elements.push({
        'media:content': {
          _attr: {
            url: 'https://chamb.vercel.app' + post.img,
            type: mimeType
          }
        }
      });
    }

    feed.item(itemOptions);
  });

  const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
  let xml = feed.xml({ indent: true });
  xml = xml.replace(
    /<rss([^>]*)>/,
    `<rss$1 xmlns:media="http://search.yahoo.com/mrss/">`
  );
  fs.writeFileSync(rssPath, xml);
}

module.exports = { generateRssFeed };
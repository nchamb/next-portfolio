import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Heart, Bookmark } from "lucide-react";
import BlogNavbar from '@/components/blog-navbar';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/blog';

type Props = {
  params: { slug: string };
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.slug, // or another appropriate property
    description: post.content, // or another appropriate property
  };
}



export default function BlogPostPage({ params }: Props) {

  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      
      <BlogNavbar />

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
              <div>
                <p className="font-medium text-slate-900">{post.author.name}</p>
                <p className="text-sm text-slate-600">{post.author.bio}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
        </header>

        {/* Article Actions */}
        <div className="flex items-center justify-between border-y border-slate-200 py-4 mb-8">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-slate-600 hover:text-red-600 transition-colors">
              <Heart className="w-5 h-5" />
              <span>42</span>
            </button>
            <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Bookmark className="w-5 h-5" />
              <span>Save</span>
            </button>
          </div>
          
          <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-pre:bg-slate-100 prose-pre:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">About the Author</h3>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-slate-900 mb-2">{post.author.name}</h4>
              <p className="text-slate-600 mb-4">{post.author.bio}</p>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-700 font-medium">Follow</button>
                <button className="text-slate-600 hover:text-slate-700">View Profile</button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/2" className="group">
              <div className="h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg mb-4"></div>
              <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                Mastering CSS Grid and Flexbox for Modern Layouts
              </h4>
              <p className="text-sm text-slate-600 mt-2">6 min read</p>
            </Link>
            <Link href="/blog/3" className="group">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4"></div>
              <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                Optimizing Web Performance with Modern Tools
              </h4>
              <p className="text-sm text-slate-600 mt-2">10 min read</p>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">&copy; 2024 DevBlog. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};
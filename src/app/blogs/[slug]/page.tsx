import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Heart, Bookmark } from "lucide-react";
import BlogNavbar from '@/components/blog-navbar';
import { Footer } from '@/components';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/blog';
import DisqusComments from '@/components/disqus-comment';
const { getAllPosts } = require('@/lib/blog');
import Image from "next/image";


type Props = {
  params: { slug: string };
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.slug, // or another appropriate property
    description: post.content, // or another appropriate property
    alternates: {
      canonical: `https://chamb.vercel.app/blogs/${params.slug}`,
    },
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0 overflow-hidden">
                <Image
                  src="/image/blog-pic.png"
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                />
                </div>
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
          <div />
          <div className="flex items-center space-x-4">
            <a
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://chamb.vercel.app/blogs/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Share2 className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://chamb.vercel.app/blogs/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Share2 className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://chamb.vercel.app/blogs/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Share2 className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
           
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-pre:bg-slate-100 prose-pre:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">About the Author</h3>
          <div className="flex items-start space-x-4">
             <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0 overflow-hidden">
                <Image
                  src="/image/blog-pic.png"
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                />
                </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-2">{post.author.name}</h4>
              <p className="text-slate-600 mb-4">{post.author.bio}</p>
              <div className="flex space-x-4">
                <Link
                  href="'https://chamb.vercel.app/#about-me"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Follow
                </Link>
                <Link
                  href={'https://chamb.vercel.app/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-700"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
        

        {/* Related Posts */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {(() => {
              // Import all posts and filter by shared tags, excluding current post
              const allPosts = getAllPosts();
              const relatedPosts = allPosts
          .filter((p: any) =>
            p.slug !== post.slug &&
            p.tags.some((tag: string) => post.tags.includes(tag))
          )
          .slice(0, 4); // Limit to 4 related posts

              return relatedPosts.length > 0 ? (
          relatedPosts.map((related: any) => (
            <Link
              href={`/blogs/${related.slug}`}
              className="group max-w-xs w-full"
              key={related.slug}
            >
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
                <Image
            src={related.img}
            alt={related.title}
            width={320}
            height={160}
            className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-medium group-hover:text-blue-600 transition-colors mt-2">
                {related.title}
              </h4>
              <p className="text-sm text-slate-600 mt-1">{related.readTime}</p>
            </Link>
          ))
              ) : (
          <p className="text-slate-500">No related articles found.</p>
              );
            })()}
          </div>
        </div>


        <DisqusComments post={post} />
      </article>
     
      {/* Footer */}
      <Footer />
      
    </div>
  );
};
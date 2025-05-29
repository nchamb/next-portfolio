import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Link from 'next/link';
import BlogNavbar from "@/components/blog-navbar";
import { getAllPosts } from '@/lib/blog';
import Image from "next/image";


const blogs = () => {
    

    const blogPosts = getAllPosts();
    if (!blogPosts || blogPosts.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <h1 className="text-2xl font-bold text-slate-900">No blog posts available</h1>
            </div>
        );
    }

    const categories = ["All", "React", "TypeScript", "CSS", "Performance", "Node.js"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    
        {/* Navigation */}
        <BlogNavbar />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Development Blog
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Insights, tutorials, and thoughts on modern web development, React, TypeScript, and more.
                </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        category === "All"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-300"
                    }`}
                    >
                    {category}
                    </button>
                ))}
                </div>
            </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article key={post.id} className="group hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1 bg-white rounded-lg overflow-hidden">
                    {post.featured && (
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium px-3 py-1">
                            Featured
                        </div>
                    )}
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"> <Image
                        src={post.img}
                        alt={post.title}
                        width={768}
                        height={768}
                        className="h-full w-full object-cover"
                         />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center text-sm text-slate-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        {post.readTime}
                        </div>
                        
                        <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        <Link href={`/blogs/${post.slug}`}>
                            {post.title}
                        </Link>
                        </h2>
                        
                        <p className="text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {tag}
                            </span>
                        ))}
                        </div>
                        
                        <Link href={`/blogs/${post.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                        >
                        Read more 
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    </article>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
                Load More Posts
            </button>
            </div>
        </div>

        </div>
    );
};

export default blogs;

"use client";
import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

// Define the type for a single blog post
type BlogPost = {
  slug: string;
  img: string;
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
};

// Define the props type for Blogs
type BlogsProps = {
  blogs: BlogPost[];
};
const Blogs: React.FC<BlogsProps> = ({ blogs }) =>  {
  const router = useRouter();


  if (!blogs || blogs.length === 0) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-slate-900">No blog posts available</h1>
        </div>
    );
}
  return (
    <section id="blog"className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Blogs
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Explore my collection of blog posts on various topics related to web development and programming.
        </Typography>
      </div>
      {/* Blog Posts Grid */}

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {blogs.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => router.push("/blogs")}
          type="button"
          className="bg-black text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-gray-900"
        >
          Load More Posts
        </button>
      </div>
    </section>
  );
}


export default Blogs;

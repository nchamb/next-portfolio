"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const BLOGS = [
  {
    img: "/image/blog-1.svg",
    title: "Introduction to React Hooks",
    desc: "Learn about the basics of React Hooks and how they can improve your component logic.",
  },
  {
    img: "/image/blog2.svg",
    title: "CSS Grid Layout",
    desc: "Discover the power of CSS Grid Layout and how it can simplify your web page layouts.",
  },
  {
    img: "/image/blog3.svg",
    title: "Getting Started with TypeScript",
    desc: "Get started with TypeScript and learn how it can enhance your JavaScript projects.",
  },
  {
    img: "/image/blog4.svg",
    title: "Responsive Web Design",
    desc: "Learn the principles of responsive web design and create websites that adapt to different screen sizes.",
  },
  {
    img: "/image/blog-1.svg",
    title: "Introduction to React Hooks",
    desc: "Learn about the basics of React Hooks and how they can improve your component logic.",
  },
  {
    img: "/image/blog2.svg",
    title: "CSS Grid Layout",
    desc: "Discover the power of CSS Grid Layout and how it can simplify your web page layouts.",
  },
  {
    img: "/image/blog3.svg",
    title: "Getting Started with TypeScript",
    desc: "Get started with TypeScript and learn how it can enhance your JavaScript projects.",
  },
  {
    img: "/image/blog4.svg",
    title: "Responsive Web Design",
    desc: "Learn the principles of responsive web design and create websites that adapt to different screen sizes.",
  },
];

export function Blogs() {
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
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {BLOGS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}


export default Blogs;

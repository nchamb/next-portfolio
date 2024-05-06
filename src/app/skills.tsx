"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "I have experiences in frontend styling but data manipulation using APIs and storing methods, quering react components using useQuery and GraphQL, state management using useState, Redux are my forte.",
  },
  {
    icon: FingerPrintIcon,
    title: "Backend/API Development",
    children:
      "I specialized in developing obust backend development, API design, database management, scalable architectures, implementing efficient data handling, and optimizing performance, while also demonstrating expertise in security protocols and seamless integration strategies",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular technologies, including MERN, .NET Core + SQL Server, Django + PostgreSQL, Serverless and Microservices Architecture. And, I'm always eager to learn new technologies and adapt to the latest trends.",
  },
  {
    icon: HashtagIcon,
    title: "Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, using caching, lazy loading, optimizing database quaries, indexing and data structures and other techniques to reduce load times and performance bottlenecks.",
  },
  {
    icon: EyeIcon,
    title: "Machine Learning and AI",
    children:
      "I am currently studying Machine Learning and AI, and I am excited to apply my knowledge to your projects. I can help you build intelligent applications that can learn and adapt to user behavior, automate tasks, and provide valuable insights.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

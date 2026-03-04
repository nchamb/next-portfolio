import { ExternalLink } from "lucide-react";
import React from 'react';

const projects = [
  {
    title: 'Product Safety Analyzer',
    description: 'An AI-powered consumer product safety platform built for the Sophiie AI Agents Hackathon 2026. Searches 8 Australian retailers in real time, analyzes ingredients for health risks, and delivers structured safety reports using Groq\'s Llama 3.3 70B LLM. Features semantic vector search with Qdrant, live multi-store web search via Tavily API, and full pipeline observability with Inngest event-driven monitoring.',
    imageUrl: '/image/projects/product-safety-analyzer.png',
    destination: 'https://itemchecker.streamlit.app',
    github: 'https://github.com/nchamb/hackathon',
    techStack: 'Python, Streamlit, Groq (Llama 3.3 70B), Tavily API, Qdrant, Sentence-Transformers, Inngest',
    badge: 'Sophiie AI Agents Hackathon 2026',
  },
  {
    title: 'HEART Learning Management System',
    description: 'A full-stack application designed for managing online courses, video content, student enrollments, progress tracking, and multi-tenant organizations with secure authentication.',
    imageUrl: '/image/projects/lms.png',
    techStack: 'Next.js 16, React 19, TypeScript, Prisma ORM, MySQL, Clerk Auth, Mux Video, Stripe, UploadThing, Tailwind CSS',
    // destination: 'https://your-lms-url.com',
  },
  {
    title: 'Titans User',
    description: 'Ticketing System for Titans Organization to sell tickets for their events. Users can purchase tickets and get QR Code for Entry and Exit of the Event.',
    imageUrl: '/image/projects/titans.png',
    destination: 'https://titans-tickets.com/',
    techStack: 'JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Docker, Email and Text Services, QRScanner',
  },
  {
    title: 'Titans Admin',
    description: 'Ticketing Admin System for Titans Organization to manage their tickets purchases with QR Code Scanning Feature for Entry and Exit of the Event.',
    imageUrl: '/image/projects/titans-admin.png',
    techStack: 'JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Docker, Email and Text Services, QRScanner',
    // destination: 'http://ticketing-admin-dev.vercel.app/',
  },
  {
    title: 'Zoo Melaka',
    description: 'Zoo Management System for Zoo Melaka Organization',
    imageUrl: '/image/projects/zoo-melaka.png',
    techStack: 'JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB',
    // destination: 'https://zoo-melaka.vercel.app/',
  },
  {
    title: 'Avanoa',
    description: 'Avanoa is multifunctional application mainly focused for communication purposes for motor disability persons to operate application functionalities with their eye movements.',
    imageUrl: '/image/projects/avanoa.jpeg',
    destination: 'https://avanoa-frontend.vercel.app/',
    techStack: 'JavaScript, ReactJS, WebGazer.JS, Sass, NodeJS, ExpressJS, MongoDB, Azure, EmailJS',
  },
  {
    title: 'Global Adventures',
    description: 'Global Adventures is a travel agency website that provides information about various travel packages, destinations, and services offered by the agency.',
    imageUrl: '/image/projects/global-adventure.png',
    destination: 'https://nchamb.github.io/Global-Adventures/',
    techStack: 'JavaScript, CSS, HTML',
  },
  {
    title: 'Garden Indian Restaurant',
    description: 'Garden Indian Restaurant is a restaurant website that provides information about the restaurant, its menu, and services offered. Users can view the menu, make reservations, and place orders online. Additonally, users can see privious orders and refill same order with one click.',
    imageUrl: '/image/projects/garden-indian-restourant.png',
    destination: 'https://nchamb.github.io/Garden-Indian-Restaurant/',
    techStack: 'JavaScript, CSS, HTML',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[500px_minmax(500px)] gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <a href={project.destination} target="_blank" rel="noreferrer">
                <div className="relative group ">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-80 object-cover transition duration-300 transform group-hover:scale-105"
                  />
                </div>
              </a>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 mb-2">
                    🏆 {project.badge}
                  </span>
                )}
                <div className="w-10 h-1 bg-blue-200 rounded-full mb-3" />
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                {project.techStack && (
                  <div className="mt-auto flex flex-col gap-1">
                    <span className="font-semibold text-xs text-gray-900 mb-1 uppercase tracking-wide">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.split(',').map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block bg-blue-50 text-blue-700 font-mono text-xs px-2 py-1 rounded-full border border-blue-100 shadow-sm"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    {(project.destination || project.github) && (
                      <div className="flex gap-3 mt-3">
                        {project.destination && (
                          <a
                            href={project.destination}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
         <div className="flex justify-center mt-16">
            <a
              href="https://github.com/nchamb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black  text-white rounded-lg px-8 py-3 font-semibold shadow-sm transition hover:shadow-xl"
            >
              <ExternalLink className="w-5 h-5" />
              See more projects on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { ExternalLink } from "lucide-react";
import React from 'react';

const projects = [
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
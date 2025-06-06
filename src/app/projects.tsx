import { title } from 'process';
import React from 'react';

const projects = [
  {
    title: 'Titans User',
    description: 'Ticketing System for Titans Organization to sell tickets for their events. Users can purchase tickets and get QR Code for Entry and Exit of the Event.',
    imageUrl: '/image/projects/titans.png',
    // destination: 'http://sentinels-user.vercel.app/',
  },
  {
    title: 'Titans Admin',
    description: 'Ticketing Admin System for Titans Organization to manage their tickets purchases with QR Code Scanning Feature for Entry and Exit of the Event.',
    imageUrl: '/image/projects/titans-admin.png',
    // destination: 'http://ticketing-admin-dev.vercel.app/',
  },
  {
    title: 'Zoo Melaka',
    description: 'Zoo Management System for Zoo Melaka Organization',
    imageUrl: '/image/projects/zoo-melaka.png',
    // destination: 'https://zoo-melaka.vercel.app/',
  },
  {
    title: 'Avanoa',
    description: 'Avanoa is multifunctional application mainly focused for communication purposes for motor disability persons to operate application functionalities with their eye movements.',
    imageUrl: '/image/projects/avanoa.jpeg',
    destination: 'https://avanoa-frontend.vercel.app/',
  },
  {
    title: 'Global Adventures',
    description: 'Global Adventures is a travel agency website that provides information about various travel packages, destinations, and services offered by the agency.',
    imageUrl: '/image/projects/global-adventure.png',
    destination: 'https://nipunbandara.github.io/Global-Adventures/',
  },
  {
    title: 'Garden Indian Restaurant',
    description: 'Garden Indian Restaurant is a restaurant website that provides information about the restaurant, its menu, and services offered. Users can view the menu, make reservations, and place orders online. Additonally, users can see privious orders and refill same order with one click.',
    imageUrl: '/image/projects/garden-indian-restourant.png',
    destination: 'https://nipunbandara.github.io/Garden-Indian-Restaurant/',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[500px_minmax(500px)] gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href={project.destination} target="_blank" rel="noreferrer">
              <div className="relative group ">
                <img src={project.imageUrl} alt={project.title} className="w-fit h-80 object-cover transition duration-300 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="font-mono subpixel-antialiased text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
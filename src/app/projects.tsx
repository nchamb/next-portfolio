import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales metus a arcu dictum varius.',
    imageUrl: '/image/titans.png',
    destination: 'http://sentinels-user.vercel.app/',
  },
  {
    title: 'Project 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imageUrl: '/image/titans-admin.png',
    destination: 'http://ticketing-admin-dev.vercel.app/',
  },
  {
    title: 'Project 3',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam nec.',
    imageUrl: '/image/zoo-melaka.png',
    destination: 'https://zoo-melaka.vercel.app/',
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href={project.destination} target="_blank" rel="noreferrer">
              <div className="relative group">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
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
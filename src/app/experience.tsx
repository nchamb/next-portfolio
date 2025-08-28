"use client";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import { BriefcaseIcon, StarIcon, ClockIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from 'react';

// Define experience data structure
interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  isActive: boolean;
  isCurrent: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    id: "superprof",
    title: "Part-time Tutor",
    company: "SuperProf",
    period: "Aug 2024 - Present",
    description: [
      "Provide tutoring in computer programming and basic computer skills for learners of all levels",
      "Help students build a strong foundation and advance their expertise in technology",
      "Teach programming concepts including JavaScript, Python, and web development fundamentals",
      "Guide students through practical coding exercises and real-world project implementations",
      "Adapt teaching methods to accommodate different learning styles and skill levels",
      "Mentor students in problem-solving techniques and debugging strategies",
      "Support learners in developing confidence with technology and programming concepts"
    ],
    isActive: true,
    isCurrent: true
  },
  {
    id: "sunil-electricals",
    title: "IT Technician - Part-time",
    company: "Sunil Electricals",
    period: "Feb 2019 - Dec 2023",
    description: [
      "Installed and configured generator control modules and ECUs, ensuring seamless integration with existing systems",
      "Specialized in supporting and maintaining ComAp, Deep Sea Electronics, SmartGen modules and CAT and Perkins ECUs",
      "Provided comprehensive software system support, addressing and resolving technical issues promptly",
      "Performed maintenance and troubleshooting for hardware and software, enhancing system performance and reliability",
      "Delivered exceptional end-user support, facilitating training sessions and efficiently addressing user concerns",
      "Handled administrative tasks, including drafting contracts and preparing invoices for services provided"
    ],
    isActive: true,
    isCurrent: false
  }
];

const ExperienceCard = ({ experience, isDesktop = false, isLast = false }: { experience: ExperienceItem; isDesktop?: boolean; isLast?: boolean }) => {
  // Choose icon and colors based on current/previous status
  const IconComponent = experience.isCurrent ? StarIcon : ClockIcon;
  const iconBgColor = experience.isCurrent ? "bg-green-500" : "bg-blue-500";
  const badgeColor = experience.isCurrent ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  
  if (isDesktop) {
    return (
      <div className="flex">
        {/* Timeline column */}
        <div className="flex flex-col items-center">
          {/* Icon */}
          <div className={`flex items-center justify-center w-8 h-8 ${iconBgColor} rounded-full z-10`}>
            <IconComponent className="h-4 w-4 text-white" />
          </div>
          {/* Connector line */}
          {!isLast && (
            <div className="w-0.5 bg-gray-300 flex-1 min-h-24"></div>
          )}
        </div>
        
        {/* Content column */}
        <div className="flex-1 ml-6 pb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badgeColor}`}>
              {experience.period}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {experience.title}
          </h3>
          <p className="text-lg font-semibold text-blue-600 mb-4">
            {experience.company}
          </p>
          
          <div className="space-y-2">
            {experience.description.map((desc, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-2 ${experience.isCurrent ? 'bg-green-100' : 'bg-blue-100'} rounded-lg`}>
          <IconComponent className={`h-6 w-6 ${experience.isCurrent ? 'text-green-600' : 'text-blue-600'}`} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900">
              {experience.title}
            </h3>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badgeColor} w-fit`}>
              {experience.period}
            </span>
          </div>
          <p className="text-lg font-semibold text-blue-600 mb-4">
            {experience.company}
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        {experience.description.map((desc, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-gray-700 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsSectionLarge = () => {
  const activeExperiences = experienceData.filter(exp => exp.isActive);
  
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Professional Experience</h2>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="space-y-0">
            {activeExperiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                isDesktop={true}
                isLast={index === activeExperiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSectionSmall = () => {
  const activeExperiences = experienceData.filter(exp => exp.isActive);
  
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Professional Experience</h2>
        
        <div className="space-y-6">
          {activeExperiences.map((experience) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              isDesktop={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Experience() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        setIsLargeScreen(window.innerWidth >= 768);
      }
    };

    checkScreenSize();
    setIsMounted(true);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  if (!isMounted) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return isLargeScreen ? <ProjectsSectionLarge /> : <ProjectsSectionSmall />;
}

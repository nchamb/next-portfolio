"use client";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

import React, { useState, useEffect } from 'react';

const ProjectsSectionLarge = () => {
  // Define the section content for larger screens
  return (
<div id = "experience" className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Experience</h1>
      <Timeline className="">
      {/* <div className="">
      <time className=" translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-26 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Apr, 2023 - Jan, 2024</time>

        <TimelineItem className="float-right pr-48">
          <TimelineConnector className="" />
          <TimelineHeader className="h-3">
            <TimelineIcon className=""/>
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Junior Full-stack Developer
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <div className="text-base font-bold font-caveat text-gray-600">CorsDeck Pvt Ltd</div>

            <Typography variant="small" color="gray" className="font-normal text-gray-600">
              Collaborated with product managers and stakeholders to gather requirements and to prioritize project development.<br/>
              Implemented authentication and authorization mechanisms using JWT tokens and OAuth2.<br/>
              Implemented caching strategies using React Quarry and Redux.<br/>
              Developed custom integrations with third party APIs such as email providers, QR generators and payment gateways.<br/>
              Architected and developed RESTful APIs, to seamless integration with systems.<br/>
              Optimized databases and developed efficient API calls using GraphQL.<br/>
              Deployed application using CI/CD tools with Docker, Kubernetes, AWS and GCP pipelines.<br/>
              Resolved production issues and implemented unit testing using JUnit and Jest.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        </div> */}

        <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <time className=" translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-26 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Feb, 2019 - Dec, 2023</time>
        <TimelineItem className="float-right pr-3 mr-36">
          {/* <TimelineConnector className="pl-0.4 ml-24" /> */}
          <TimelineHeader className="h-3">
            <TimelineIcon className=""/>
            <Typography variant="h6" color="blue-gray" className="leading-none">
              IT Technician - Part-time
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <div className="text-base font-bold font-caveat text-gray-600">Sunil Electricals</div>

            <Typography variant="small" color="gray" className="font-normal text-gray-600">
              Installed and configured generator control modules and ECUs, ensuring seamless integration with existing systems.<br/>
              Specialized in supporting and maintaining ComAp, Deep Sea Electronics, SmartGen modules and CAT and Perkins ECUs.<br/>
              Provided comprehensive software system support, addressing and resolving technical issues promptly.<br/>
              Performed maintenance and troubleshooting for hardware and software, enhancing system performance and reliability.<br/>
              Delivered exceptional end-user support, facilitating training sessions and efficiently addressing user concerns related to <br/>controller modules and other technical issues.<br/>
              Handled administrative tasks, including drafting contracts and preparing invoices for the services provided.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        </div>
      </Timeline>
      </div>
  );
};

const ProjectsSectionSmall = () => {
  // Define the section content for smaller screens
  return (
    <div className="container mx-auto p-4">
       <h1 className="text-2xl font-semibold mb-4">My Experience</h1>
         {/* <div className="bg-white shadow-md rounded-md p-6 mb-4">
           <h2 className="text-xl font-semibold mb-2"> Junior Full-stack Developer</h2>
           <p className="text-gray-600">CorsDeck Pvt Ltd</p>
           <p className="text-gray-600">Apr, 2023 - Jan, 2024</p>
           <p className="text-gray-700 mt-2">
              Collaborated with product managers and stakeholders to gather requirements and to prioritize project development.<br/>
              Implemented authentication and authorization mechanisms using JWT tokens and OAuth2.<br/>
              Implemented caching strategies using React Quarry and Redux.<br/>
              Developed custom integrations with third party APIs such as email providers, QR generators and payment gateways.<br/>
              Architected and developed RESTful APIs, to seamless integration with systems.<br/>
              Optimized databases and developed efficient API calls using GraphQL.<br/>
              Deployed application using CI/CD tools with Docker, Kubernetes, AWS and GCP pipelines.<br/>
              Resolved production issues and implemented unit testing using JUnit and Jest.
           </p>
         </div> */}
         <div className="bg-white shadow-md rounded-md p-6 mb-4">
           <h2 className="text-xl font-semibold mb-2">IT Technician - Part-time</h2>
           <p className="text-gray-600">Sunil Electricals</p>
           <p className="text-gray-600">Feb, 2019 - Dec, 2023</p>
           <p className="text-gray-700 mt-2">
              Installed and configured generator control modules and ECUs, ensuring seamless integration <br/>with existing systems.<br/>
              Specialized in supporting and maintaining ComAp, Deep Sea Electronics, SmartGen modules and <br/>CAT and Perkins ECUs.<br/>
              Provided comprehensive software system support, addressing and resolving technical issues promptly.<br/>
              Performed maintenance and troubleshooting for hardware and software, enhancing system <br/>performance and reliability.<br/>
              Delivered exceptional end-user support, facilitating training sessions and efficiently addressing <br/>user concerns related to controller modules and other technical issues.<br/>
              Handled administrative tasks, including drafting contracts and preparing invoices for the services provided.
           </p>
         </div>
        </div>
  );
};

const Experience = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Function to update isSmallScreen state based on screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };
  
    // Effect hook to listen for window resize events
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      setIsSmallScreen(window.innerWidth < 900);
      // Cleanup function to remove event listener when component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Empty dependency array to run effect only once on component mount
  
    // Render different sections based on screen width
    return isSmallScreen ? <ProjectsSectionSmall /> : <ProjectsSectionLarge />;
  };

export default Experience;

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
      <div className="">
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

            <Typography variant="small" color="gary" className="font-normal text-gray-600">
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

        </div>
        <div>
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

            <Typography variant="small" color="gary" className="font-normal text-gray-600">
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
         <div className="bg-white shadow-md rounded-md p-6 mb-4">
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
         </div>
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

//   <div className="relative font-inter antialiased">

//     <div className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
//         <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
//             <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

//                 <div className="w-full max-w-3xl mx-auto">
                
//                     <div className="-my-6">

//                         <div className="relative pl-8 sm:pl-32 py-6 group">
//                             <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div>
//                             <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//                                 <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time>
//                                 <div className="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
//                             </div>
//                             <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
//                         </div>
                        
//                         <div className="relative pl-8 sm:pl-32 py-6 group">
//                             <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The milestone</div>
//                             <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//                                 <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time>
//                                 <div className="text-xl font-bold text-slate-900">Reached 5K customers</div>
//                             </div>
//                             <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
//                         </div>
                        
//                         <div className="relative pl-8 sm:pl-32 py-6 group">
//                             <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>
//                             <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//                                 <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time>
//                                 <div className="text-xl font-bold text-slate-900">Acquired various companies, inluding Technology Inc.</div>
//                             </div>
//                             <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
//                         </div>
                        
//                         <div className="relative pl-8 sm:pl-32 py-6 group">
//                             <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The IPO</div>
//                             <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//                                 <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2023</time>
//                                 <div className="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div>
//                             </div>
//                             <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
//                         </div>

//                     </div>
                    
//                 </div>

            
//             </div>
//         </div>
//       </div>
//     </div>
    
    // <div id = "experience" className="container mx-auto p-4">
    //   <h1 className="text-2xl font-semibold mb-4">My Experience</h1>
    //   <Timeline className="">
    //   <div className="">
    //   <time className=" translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-26 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Apr, 2023 - Jan, 2024</time>
       
    //     <TimelineItem className="float-right pr-48">
    //       <TimelineConnector className="" />
    //       <TimelineHeader className="h-3">
    //         <TimelineIcon className=""/>
    //         <Typography variant="h6" color="blue-gray" className="leading-none">
    //           Software Engineer - Self-employed
    //         </Typography>
    //       </TimelineHeader>
    //       <TimelineBody className="pb-8">
    //         <div className="text-base font-bold font-caveat text-gray-600">CorsDeck Pvt Ltd</div>

    //         <Typography variant="small" color="gary" className="font-normal text-gray-600">
    //           Collaborated with product managers and stakeholders to gather requirements and to prioritize project development.<br/>
    //           Implemented authentication and authorization mechanisms using JWT tokens and OAuth2.<br/>
    //           Implemented caching strategies using React Quarry and Redux.<br/>
    //           Developed custom integrations with third party APIs such as email providers, QR generators and payment gateways.<br/>
    //           Architected and developed RESTful APIs, to seamless integration with systems.<br/>
    //           Optimized databases and developed efficient API calls using GraphQL.<br/>
    //           Deployed application using CI/CD tools with Docker, Kubernetes, AWS and GCP pipelines.<br/>
    //           Resolved production issues and implemented unit testing using JUnit and Jest.
    //         </Typography>
    //       </TimelineBody>
    //     </TimelineItem>

    //     </div>
    //     <div>
    //     <time className=" translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-26 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Feb, 2019 - Dec, 2023</time>
    //     <TimelineItem className="float-right pr-3 mr-80">
    //       {/* <TimelineConnector className="pl-0.4 ml-24" /> */}
    //       <TimelineHeader className="h-3">
    //         <TimelineIcon className=""/>
    //         <Typography variant="h6" color="blue-gray" className="leading-none">
    //           Administrative Clerk - Part-time
    //         </Typography>
    //       </TimelineHeader>
    //       <TimelineBody className="pb-8">
    //         <div className="text-base font-bold font-caveat text-gray-600">Sunil Electricals</div>

    //         <Typography variant="small" color="gary" className="font-normal text-gray-600">
    //     
    //         </Typography>
    //       </TimelineBody>
    //     </TimelineItem>
    //     </div>
    //   </Timeline>

    //   <style jsx>{`
    //     @media (max-width: 499px) {
    //       .text-sm {
    //         font-size: 12px;
    //       }
    //       .lg\:text-lg {
    //         font-size: 14px;
    //       }
    //     }
    //   `}</style>
    //   @media (max-width: 640px) {
    //      <div className="container mx-auto p-4">
    //      <div className="bg-white shadow-md rounded-md p-6 mb-4">
    //        <h2 className="text-xl font-semibold mb-2">Research Assistant</h2>
    //        <p className="text-gray-600">University of Research</p>
    //        <p className="text-gray-600">Sept 2018 - Dec 2019</p>
    //        <p className="text-gray-700 mt-2">Contributed to multiple research projects in the field of Artificial Intelligence, conducted experiments, and analyzed data. Published several papers in reputable conferences.</p>
    //      </div>
    //      <div className="bg-white shadow-md rounded-md p-6 mb-4">
    //        <h2 className="text-xl font-semibold mb-2">Intern</h2>
    //        <p className="text-gray-600">XYZ Corporation</p>
    //        <p className="text-gray-600">May 2019 - Aug 2019</p>
    //        <p className="text-gray-700 mt-2">Assisted in the development of mobile applications using React Native, gained experience in Agile methodologies.</p>
    //      </div>
    //      <div className="bg-white shadow-md rounded-md p-6 mb-4">
    //        <h2 className="text-xl font-semibold mb-2">Software Engineer</h2>
    //        <p className="text-gray-600">ABC Tech Inc.</p>
    //        <p className="text-gray-600">Jan 2020 - Present</p>
    //        <p className="text-gray-700 mt-2">Developed web applications using React and Node.js, collaborated with cross-functional teams to deliver projects on time.</p>
    //      </div>
    //      <h1 className="text-2xl font-semibold mb-4">My Experience</h1>
    //    </div>
    //   }
    // </div>
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

import React from 'react';

const Experience = () => {
  return (
    <div id = "experience" className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Experience</h1>
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Software Engineer - Self Employed</h2>
        <p className="text-gray-600">CorsDeck Pvt Ltd</p>
        <p className="text-gray-600">Apr 2023 - Jan 2024</p>
        <p className="text-gray-700 mt-2">
            Collaborated with product managers and stakeholders to gather requirements and to prioritize project development.<br/>
            Implemented authentication and authorization mechanisms using JWT tokens and OAuth2.<br/>
            Implemented caching strategies using React Quarry and Redux.<br/>
            Developed custom integrations with third party APIs such as email providers, QR generators and payment gateways.<br/>
            Architected and developed RESTful APIs, to seamless integration with systems.<br/>
            Optimized databases and developed efficient API calls using GraphQL.<br/>
            Deployed application using CI/CD tools with Docker, Kubernetes, AWS and GCP pipelines.<br/>
            Resolved production issues and implemented unit testing using JUnit and Jest.</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Administrative Clerk - Part-time</h2>
        <p className="text-gray-600">Sunil Electricals</p>
        <p className="text-gray-600">Feb 2019 - Dec 2023</p>
        <p className="text-gray-700 mt-2">
        Wrote and sent contracts, finalizing paperwork on behalf of staff.<br/>
        Proofread and edited correspondence, reports and files.<br/>
        Kept office file system highly organized and quickly retrieved needed records.<br/>
        Maintained accurate accounting records, inputting new invoices, and payments into Database.<br/>
        Answered email and mail correspondence on behalf of personnel.<br/>
        Tracked inventory orders and usage to maintain accurate records.</p>
      </div>


    </div>
  );
};

export default Experience;
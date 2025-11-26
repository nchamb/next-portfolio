"use client";
import React from 'react';
import { DocumentTextIcon, AcademicCapIcon, DocumentIcon, UserGroupIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

interface Document {
  id: string;
  title: string;
  description: string;
  icon: 'transcript' | 'cover-letter';
  fileUrl?: string;
  isAvailable: boolean;
}

interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  phone?: string;
  email?: string;
  portfolio?: string;
}

const documents: Document[] = [
  {
    id: 'transcript',
    title: 'University Transcript',
    description: 'Official academic transcript from University of Southern Queensland',
    icon: 'transcript',
    fileUrl: '/documents/transcript.pdf',
    isAvailable: true, // Set to true when you upload the file
  },
  {
    id: 'cover-letter',
    title: 'Cover Letter',
    description: 'Professional cover letter highlighting my skills and experience',
    icon: 'cover-letter',
    fileUrl: '/documents/cover-letter.pdf',
    isAvailable: true, // Set to true when you upload the file
  },
];

const references: Reference[] = [
  {
    id: 'ref1',
    name: 'Dr. Zhi Chen',
    title: 'Lecturer in Computer Science, University of Southern Queensland',
    company: 'Research Officer in Artificial Intelligence, Computer Vision - School of Electrical Engineering & Computer Science, University of Queensland',
    relationship: 'Academic Supervisor',
    phone: '+61416669800',
    email: 'zhi.chen@unisq.edu.au',
    portfolio: 'https://uqzhichen.github.io/',
  },
  // Add more references as needed
  // {
  //   id: 'ref2',
  //   name: 'John Doe',
  //   title: 'Senior Developer',
  //   company: 'Tech Corp',
  //   relationship: 'Direct Supervisor',
  //   phone: '+1234567890',
  //   email: 'john@example.com',
  // },
];

const Documents = () => {
  return (
    <section id="documents" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Documents</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Download my academic transcripts and professional documents
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  {doc.icon === 'transcript' ? (
                    <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                  ) : (
                    <DocumentTextIcon className="h-8 w-8 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  
                  {doc.isAvailable ? (
                    <a
                      href={doc.fileUrl}
                      download
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      <DocumentIcon className="h-5 w-5" />
                      Download PDF
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed"
                    >
                      <DocumentIcon className="h-5 w-5" />
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* References Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-4">Professional References</h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            References available upon request
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {references.map((ref) => (
              <div
                key={ref.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <UserGroupIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">{ref.name}</h4>
                    <p className="text-sm text-blue-600 font-semibold">{ref.title}</p>
                    <p className="text-sm text-gray-600">{ref.company}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <span className="font-semibold">Relationship:</span> {ref.relationship}
                  </p>
                  
                  {ref.phone && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <PhoneIcon className="h-4 w-4" />
                      <a href={`tel:${ref.phone}`} className="hover:text-blue-600">
                        {ref.phone}
                      </a>
                    </div>
                  )}
                  
                  {ref.email && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <EnvelopeIcon className="h-4 w-4" />
                      <a href={`mailto:${ref.email}`} className="hover:text-blue-600 break-all">
                        {ref.email}
                      </a>
                    </div>
                  )}
                  
                  {ref.portfolio && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <GlobeAltIcon className="h-4 w-4" />
                      <a href={ref.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 break-all">
                        Portfolio
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            For additional documents or inquiries, please{' '}
            <a href="#contact" className="text-blue-600 hover:underline">
              contact me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Documents;

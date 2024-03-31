import React from 'react';

const ResearchExperience: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
             <h1 className="text-2xl font-semibold mb-4">My Research Experience</h1>
            <div className="bg-white shadow-md rounded-md p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">Research Assistant</h2>
                <p className="text-gray-600">University of Research</p>
                <p className="text-gray-600">Sept 2018 - Dec 2019</p>
                <p className="text-gray-700 mt-2">Contributed to multiple research projects in the field of Artificial Intelligence, conducted experiments, and analyzed data. Published several papers in reputable conferences.</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">Intern</h2>
                <p className="text-gray-600">XYZ Corporation</p>
                <p className="text-gray-600">May 2019 - Aug 2019</p>
                <p className="text-gray-700 mt-2">Assisted in the development of mobile applications using React Native, gained experience in Agile methodologies.</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">Software Engineer</h2>
                <p className="text-gray-600">ABC Tech Inc.</p>
                <p className="text-gray-600">Jan 2020 - Present</p>
                <p className="text-gray-700 mt-2">Developed web applications using React and Node.js, collaborated with cross-functional teams to deliver projects on time.</p>
            </div>
        </div>
    );
}
export default ResearchExperience;
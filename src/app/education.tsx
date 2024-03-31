import React from 'react';

const Education: React.FC = () => {
    return (
        <section className=" py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-2">University of Southern Queensland</h3>
                        <p className="text-gray-600 mb-4">Master of Information Technology</p>
                        <p className="text-gray-600">2024 - 2025</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-2">Curtin University</h3>
                        <p className="text-gray-600 mb-4">Bachelor of Computing in Software Engineering</p>
                        <p className="text-gray-600">2020 - 2023</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
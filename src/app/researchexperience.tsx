import React from 'react';

const ResearchExperience: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
             <h1 className="text-2xl font-semibold mb-4">My Research/Data Science Experience</h1>
            <div className="bg-white shadow-md rounded-md p-6 mb-4">
                <h2 className="text-md font-semibold mb-2">Depth of Anesthesia (DoA) Index Design</h2>
                <p className="text-gray-600">CSC6003 Machine Learning | University of Southern Queensland</p>
                <p className="text-gray-600">Nov 2024</p>
                <div className="text-gray-700 mt-2 space-y-3 text-sm">
                    <p>I developed a novel Depth of Anesthesia (DoA) index using EEG-derived features to enhance intraoperative patient monitoring in clinical settings. The model was designed to produce BIS-like index values ranging from 0 (deep anesthesia) to 100 (awake).</p>
                    <p>The project involved rigorous feature selection and model validation using Pearson correlation, R², and Bland-Altman plots to ensure robustness on withheld test data. Supervised machine learning techniques including Linear Regression and Random Forest were employed to model the index from EEG features (x1–x7).</p>
                    <p>For a separate dataset containing 4,965 EEG segments, I implemented unsupervised learning algorithms (K-means clustering and Gaussian Mixture Models) to identify anesthesia states without direct supervision, labeling them as states A/B to infer depth.</p>
                    <p>The final solution integrated both supervised and unsupervised approaches into a hybrid ensemble model that combined linear regression and random forest using weighted averaging predictors, resulting in enhanced predictive accuracy and system resilience.</p>
                </div>
            </div>
    
        </div>
    );
}
export default ResearchExperience;
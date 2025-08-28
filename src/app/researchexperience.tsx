import React from 'react';

const ResearchExperience: React.FC = () => {
    return (
        <section id="research" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Research & Data Science Experience</h2>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Depth of Anesthesia (DoA) Index Design</h3>
                    <p className="text-blue-600 font-semibold">CSC6003 Machine Learning | University of Southern Queensland</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mt-2">
                        Nov 2024
                    </span>
                </div>
                <div className="text-gray-700 mt-2 space-y-3 text-sm">
                    <p>I developed a novel Depth of Anesthesia (DoA) index using EEG-derived features to enhance intraoperative patient monitoring in clinical settings. The model was designed to produce BIS-like index values ranging from 0 (deep anesthesia) to 100 (awake).</p>
                    <p>The project involved rigorous feature selection and model validation using Pearson correlation, R², and Bland-Altman plots to ensure robustness on withheld test data. Supervised machine learning techniques including Linear Regression and Random Forest were employed to model the index from EEG features (x1–x7).</p>
                    <p>For a separate dataset containing 4,965 EEG segments, I implemented unsupervised learning algorithms (K-means clustering and Gaussian Mixture Models) to identify anesthesia states without direct supervision, labeling them as states A/B to infer depth.</p>
                    <p>The final solution integrated both supervised and unsupervised approaches into a hybrid ensemble model that combined linear regression and random forest using weighted averaging predictors, resulting in enhanced predictive accuracy and system resilience.</p>
                </div>
                <div className="mt-4">
                    <div className="flex flex-wrap gap-3">
                        <a 
                            href="https://github.com/nchamb/DoA-data-analysis.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            Data Analysis
                        </a>
                        <a 
                            href="https://github.com/nchamb/DoA-Regression-model.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            Regression Model
                        </a>
                        <a 
                            href="https://github.com/nchamb/DoA-Random-Forest.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            Random Forest
                        </a>
                        <a 
                            href="https://github.com/nchamb/DoA-K-Means-Clustering.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            K-means Clustering
                        </a>
                        <a 
                            href="https://github.com/nchamb/DoA-Gaussian-Mixture-Model.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            Gaussian Mixture Model
                        </a>
                        <a 
                            href="https://github.com/nchamb/DoA-Combined-LinearR-RandomF.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            Linear Regression and Random Forest Hybrid Model
                        </a>
                    </div>
                </div>
            </div>
    
            <div className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Learning for Chest X-ray Classification</h3>
                    <p className="text-blue-600 font-semibold">CSC6203 - Intelligent Multimedia (Computer Vision, Audio) Analysis | University of Southern Queensland</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                        June 2025
                    </span>
                </div>
                <div className="text-gray-700 mt-2 space-y-3 text-sm">
                    <p>Developed and trained deep learning models (DenseNet-121 & custom CNN) for multi-label classification of chest X-ray images using over 100,000 samples for comprehensive medical image analysis.</p>
                    <p>Implemented a custom 4-block CNN architecture with SE attention mechanisms, batch normalization, and channel recalibration, specifically optimized for extracting radiology features from medical imaging data.</p>
                    <p>Fine-tuned DenseNet-121 pretrained on ImageNet with a custom classification head and addressed class imbalance using BCEWithLogitsLoss with positional weighting to improve model performance across all disease classes.</p>
                    <p>Applied advanced image preprocessing techniques including CLAHE, Gamma correction, ColorJitter, and comprehensive data augmentation (RandomCrop, Flip, Rotation) to enhance model generalization and robustness.</p>
                    <p>Optimized training pipeline using differential learning rates, AdamW optimizer, and ReduceLROnPlateau scheduler for stable and adaptive training on Google Colab GPU/TPU (T4 & v2–8) with efficient memory usage and dynamic batching for high-throughput processing.</p>
                </div>
                <div className="mt-4">
                    <a 
                        href="https://github.com/nchamb/Disease-Diagnosis-Deep-Learning.git" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Sound Classification with Deep Learning</h3>
                    <p className="text-blue-600 font-semibold">CSC6203 - Intelligent Multimedia (Computer Vision, Audio) Analysis | University of Southern Queensland</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                        Aug 2025
                    </span>
                </div>
                <div className="text-gray-700 mt-2 space-y-3 text-sm">
                    <p>Developed and optimized deep learning models (CNN, LSTM-RNN, CAR-Transformer) for Environmental Sound Classification (ESC) using the UrbanSound8K dataset, achieving high accuracy in noisy, real-world audio environments.</p>
                    <p>Extracted and engineered audio features (MFCC-40, log-Mel spectrograms, Δ & Δ² features) to enhance temporal and spectral representation for classification tasks.</p>
                    <p>Applied attention mechanisms and Transformer architectures (CAR-Transformer with Coordinate Attention & Residual Convolutions) to improve robustness, interpretability, and global context modeling.</p>
                    <p>Implemented data preprocessing and augmentation pipelines (time shifting, pitch shifting, noise addition, time stretching) to address dataset imbalance, increase diversity, and improve generalization.</p>
                    <p>Conducted performance benchmarking of multiple architectures (CNN, CRNN, Transformer, Generative augmentation) on UrbanSound8K cross-validation folds with comprehensive model inspection methods.</p>
                    <p>Evaluated model performance using rigorous training, validation, and testing protocols with metrics including accuracy, precision, recall, F1-score, and confusion matrix analysis to assess classification performance across all environmental sound categories.</p>
                    <p>Integrated ethical considerations into model design, addressing privacy, bias, and consent issues in speech, emotion, and environmental audio domains, aligned with AI ethics frameworks.</p>
                    <p>Leveraged transfer learning and lightweight architectures (ResNet, DenseNet, Audio Spectrogram Transformer) to scale models efficiently for both research-grade accuracy and real-time applications (IoT, smart cities).</p>
                </div>
                <div className="mt-4">
                    <a 
                        href="https://github.com/nchamb/Environmental-Sound-Classification-Deep-Learning.git" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResearchExperience;
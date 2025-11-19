import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Download, Mail } from 'lucide-react';
import { productsData } from "../data/products";

const ModelDetailModal = ({ model: propModel, series: propSeries, productId, onBack }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeSpecTab, setActiveSpecTab] = useState(0);

    let model = propModel;
    let series = propSeries;

    if (!model && productId) {
        for (const brand of productsData) {
            for (const ser of brand.series) {
                const found = ser.models.find(m => m.id === productId);
                if (found) {
                    model = found;
                    series = ser;
                    break;
                }
            }
            if (model) break;
        }
    }

    // Check if model data is complete
    const isModelDataComplete = (model) => {
        return (
            model &&
            model.overview &&
            model.keyFeatures &&
            model.keyFeatures.length > 0 &&
            model.applications &&
            model.applications.length > 0 &&
            model.specifications &&
            Object.keys(model.specifications).length > 0
        );
    };

    // Redirect to series page if model data is incomplete
    if (model && !isModelDataComplete(model) && series && onBack) {
        onBack();
        return null;
    }

    if (!model) return null;

    const images = model.images && model.images.length > 0
        ? model.images
        : ["https://placehold.co/800x600/F8F9FA/6B7280?text=" + encodeURIComponent(model.name)];

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const productData = getProductData(model);
    const specTabs = Object.keys(productData.specifications);

    // Handle click on related model card
    const handleModelClick = (relatedModel) => {
        if (isModelDataComplete(relatedModel)) {
            onBack(); // Replace with actual navigation logic if needed
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                    </button>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            <Download className="w-4 h-4" />
                            <span>Datasheet</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            <Mail className="w-4 h-4" />
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </header>
            <main className="mx-auto px-6 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{model.name}</h1>
                    <p className="text-lg text-gray-600">Professional Digital Signal Processor</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <div className="aspect-video relative mb-4">
                            <img
                                src={images[currentImageIndex]}
                                alt={`${model.name} - Image ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain rounded bg-gray-100"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/800x450/F8F9FA/6B7280?text=" + encodeURIComponent(model.name);
                                }}
                            />
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={goToPreviousImage}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={goToNextImage}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                            {images.length > 1 && (
                                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                                    {currentImageIndex + 1} / {images.length}
                                </div>
                            )}
                        </div>
                        {images.length > 1 && (
                            <div className="flex space-x-3 overflow-x-auto">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`flex-shrink-0 w-20 h-16 rounded border-2 overflow-hidden transition-colors ${index === currentImageIndex
                                            ? 'border-blue-500'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-1 bg-white rounded-lg border border-gray-200 p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Product Overview</h2>
                        <p className="text-gray-700 leading-relaxed text-base">{productData.overview}</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h2>
                        <ul className="space-y-3">
                            {productData.keyFeatures.map((feature, index) => (
                                <li key={index} className="text-gray-700 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Applications</h2>
                        <ul className="space-y-3">
                            {productData.applications.map((application, index) => (
                                <li key={index} className="text-gray-700 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                    {application}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 mb-12">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-2xl font-semibold text-gray-900">Technical Specifications</h2>
                    </div>
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            {specTabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSpecTab(index)}
                                    className={`py-4 text-sm font-medium border-b-2 transition-colors ${activeSpecTab === index
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                            {Object.entries(productData.specifications[specTabs[activeSpecTab]] || {}).map(([key, value], index) => (
                                <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                                    <dt className="font-medium text-gray-900">{key}</dt>
                                    <dd className="text-gray-700">{value}</dd>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Related Models Section */}
                {series && series.models && series.models.length > 1 && (
                    <div className="bg-white rounded-lg border border-gray-200 mb-12">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-900">Related Models</h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {series.models
                                    .filter((relatedModel) => relatedModel.id !== model.id)
                                    .map((relatedModel) => {
                                        const isComplete = isModelDataComplete(relatedModel);
                                        return (
                                            <div
                                                key={relatedModel.id}
                                                className={`bg-white rounded-lg border border-gray-200 p-4 transition-all ${
                                                    isComplete
                                                        ? 'hover:shadow-lg hover:border-gray-300 cursor-pointer'
                                                        : 'opacity-50 cursor-not-allowed'
                                                }`}
                                                onClick={isComplete ? () => handleModelClick(relatedModel) : undefined}
                                                title={isComplete ? '' : 'More details coming soon'}
                                            >
                                                <img
                                                    src={relatedModel.image || 'https://placehold.co/400x300/F8F9FA/6B7280?text=' + encodeURIComponent(relatedModel.name)}
                                                    alt={relatedModel.name}
                                                    className="w-full h-40 object-cover rounded mb-4"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = 'https://placehold.co/400x300/F8F9FA/6B7280?text=' + encodeURIComponent(relatedModel.name);
                                                    }}
                                                />
                                                <h3 className="text-lg font-semibold text-gray-900">{relatedModel.name}</h3>
                                                <p className="text-gray-600 text-sm mt-2">
                                                    {relatedModel.description || 'Professional audio solution'}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ModelDetailModal;
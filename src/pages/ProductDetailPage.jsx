import React, { useState } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, Download, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JoinCommunitySection from '../components/JoinCommunitySection';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeSpecTab, setActiveSpecTab] = useState(0);

    // Get product and series data from navigation state
    const model = location.state?.model;
    const series = location.state?.series;

    console.log(model, "model, series", series);

    // Handle datasheet download
    const handleDatasheetDownload = () => {
        // Define PDF paths for different products
        const datasheetPaths = {
            'model_ap_44d': '/datasheets/AurisPro-44D.pdf',
            'model_ap_88d': '/datasheets/AurisPro-88D.pdf',
            'model_ap_128d': '/datasheets/AURISPRO-128D.pdf',
            'model_ap_1616d': '/datasheets/AurisPro-1616D.pdf',
            'model_ap_6464d': '/datasheets/AurisPro-6464D.pdf',
            'model_EchoPrime_88AEC': '/datasheets/EchoPrime-88AEC.pdf',
            'model_EchoPrime_b88': '/datasheets/EchoPrime-B88.pdf',
            'model_EchoPrime_B1616': '/datasheets/EchoPrime-B1616.pdf',
            'model_fusion_1005': '/datasheets/Fusion-1005.pdf',
            'model_fusion_1008': '/datasheets/Fusion-1008.pdf',
            'model_fusion_1009': '/datasheets/Fusion-1009.pdf',
            'model_fusion_2009': '/datasheets/Fusion-2009.pdf',
            'model_fusion_cp2': '/datasheets/Fusion-CP2.pdf',
            'model_fusion_cp6': '/datasheets/Fusion-CP6.pdf',
            'model_VoxNova_88': '/datasheets/VoxNova88.pdf',
            'model_VoxNova_128f': '/datasheets/VoxNova128F.pdf',
            'model_VoxNova_1616': '/datasheets/VoxNova1616.pdf',
            // Add more product datasheets as needed
        };

        // Get the PDF path for current product
        const pdfPath = datasheetPaths[model.id] || datasheetPaths[model.name?.toLowerCase().replace(/\s+/g, '_')];
        
        if (pdfPath) {
            // Create a temporary link and trigger download
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = `${model.name.replace(/\s+/g, '-')}-Datasheet.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // Fallback: show alert or redirect to contact
            alert('Datasheet not available. Please contact us for product information.');
        }
    };

    if (!model) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                    <Link
                        to="/products"
                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    // Enhanced product data structure based on ModelDetailModal logic
    const getProductData = (model) => {
        if (model.name?.includes('Auris Pro-44D') || model.id === 'model_ap_44d') {
            return {
                overview: "The Resoundify AurisPro-44D is a compact, high-performance Digital Signal Processor (DSP) designed to meet the demands of modern audio installations. Built with 4 analog inputs and 4 analog outputs, along with 4×4 Dante digital audio channels, it provides exceptional flexibility for small to mid-sized AV systems. Whether used in conference rooms, boardrooms, classrooms, or multi-room AV zones, the AurisPro-44D delivers powerful audio processing capabilities. It supports AEC (Acoustic Echo Cancellation) to eliminate echo during calls, and ANC (Active Noise Cancellation) to suppress background noise, ensuring crystal-clear communication. Fully compatible with Dante audio networking, the AurisPro-44D allows easy integration into existing networked AV environments, enabling efficient routing of audio signals with ultra-low latency and no degradation in quality.",
                keyFeatures: [
                    "Professional SHARC DSP Core",
                    "High-Quality Audio Processing",
                    "Intelligent Feedback Suppression",
                    "Full Duplex AEC & ANC",
                    "Auto Mixer & Gain Control",
                    "Configurable ADSP/FPGA",
                    "Comprehensive Audio Matrix",
                    "Multi-Platform Compatibility"
                ],
                applications: [
                    "Conference Rooms",
                    "Classrooms",
                    "Auditoriums",
                    "Boardrooms"
                ],
                specifications: {
                    "System Specifications": {
                        "Processor": "ADI SHARC+ARM926EJ-S@600 MHz, 800 MHz",
                        "Max Processing Capacity": "800 MIPS, 1.6 GFLOPS",
                        "Sampling Rate": "44.1 kHz / 48 kHz",
                        "Frequency Response": "20 Hz - 20 kHz (±0.25 dB)",
                        "Dynamic Range": "118 dB A-weighted",
                        "Channel Separation": "> 120 dB (20Hz - 20kHz, -60 dBFS)",
                        "Latency": "< 2.6 ms@48kHz",
                        "Network Protocol": "Dante (AES67 compatible) / AES67",
                        "DSP Channels": "4 inputs / 4 outputs",
                        "Supply Voltage Range": "AC: 85~264V, 47~63Hz",
                        "Maximum Power": "15 watts"
                    },
                    "Analog I/O": {
                        "Analog Inputs": "4 switchable balanced XLR-3",
                        "Input Impedance": "≥ 8 kΩ differential and single-ended",
                        "Input Voltage": "≥ +24 dBu @ 0.1% THD+N",
                        "Phantom Power": "+48V (±4V on pins 2&3)",
                        "Analog Outputs": "4 balanced line level",
                        "Output Impedance": "20 Ohms balanced, 10 Ohms unbalanced",
                        "THD + Noise": "> 100 dB SNR @ 4Vrms output"
                    }
                }
            };
        }

        if (model.name?.includes('Fusion -2009') || model.id === 'model_fusion_2009') {
            return {
                overview: "The Fusion-2009 is a compact, high-performance Digital Signal Processor (DSP) designed to meet the demands of modern audio installations. Built with 4 analog inputs and 4 analog outputs, along with 4×4 Dante (802.1-draft-compliant), it provides exceptional flexibility for both live sound AV systems.",
                keyFeatures: [
                    "Professional SHARC DSP Core",
                    "High-Quality Audio Processing",
                    "Intelligent Feedback Suppression",
                    "Full Duplex AEC & ANC",
                    "Auto Mixer & Gain Control",
                    "Configurable ADSP/FPGA",
                    "Comprehensive Audio Matrix",
                    "Multi-Platform Compatibility"
                ],
                applications: [
                    "Conference Rooms",
                    "Classrooms",
                    "Auditoriums"
                ],
                specifications: {
                    "System Specifications": {
                        "Processor": "ADI SHARC+ARM926EJ-S@600 MHz, 800 MHz",
                        "Max Processing Capacity": "800 MIPS, 1.6 GFLOPS",
                        "Sampling Rate": "44.1 kHz / 48 kHz",
                        "Frequency Response": "20 Hz - 20 kHz (±0.25 dB)",
                        "Dynamic Range": "118 dB A-weighted",
                        "Channel Separation": "> 120 dB (20Hz - 20kHz, -60 dBFS)",
                        "Latency": "< 2.6 ms@48kHz",
                        "DSP Channels": "4 inputs / 4 outputs",
                        "Supply Voltage Range": "AC: 85~264V, 47~63Hz",
                        "Maximum Power": "15 watts"
                    },
                    "Mechanical Specifications": {
                        "Installation": "1U standard 19-inch rack-mount",
                        "Dimensions": "482 mm(L) x 275 mm(W) x 44 mm(H)",
                        "Weight": "1.5 kg (3.3 lbs)",
                        "Power Consumption": "30W typical, 40W full load",
                        "Operating Temperature": "0°C ~ 50°C",
                        "Storage Humidity": "20% ~ 90%",
                        "Color": "Black"
                    }
                }
            };
        }

        // Default structure for other products
        return {
            overview: model.description || "Professional audio solution designed for high-performance applications.",
            keyFeatures: model.features || series?.features || [
                "Professional Grade Quality",
                "Advanced Performance",
                "Reliable Operation",
                "Easy Integration"
            ],
            applications: [
                "Professional Audio Systems",
                "Corporate Installations",
                "Educational Facilities"
            ],
            specifications: {
                "General": {
                    "Model": model.name,
                    "Series": series?.name || "Professional Series",
                    "Type": "Professional Equipment",
                    "Warranty": "3 Years",
                    "Certification": "ISO 9001:2015"
                }
            }
        };
    };

    const productData = getProductData(model);
    const specTabs = Object.keys(productData.specifications);

    // Handle images
    const images = model.images && model.images.length > 0
        ? model.images
        : model.image
            ? [model.image]
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

    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 top-20 mt-20">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <nav className="flex items-center space-x-2 text-gray-500">
                            <Link to="/products" className="hover:text-emerald-600 transition-colors flex items-center space-x-2">
                                <ArrowLeft className="w-5 h-5" />
                                <span className="font-medium">Products</span>
                            </Link>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                            {series && (
                                <>
                                    <Link
                                        to={`/products/series/${series.id}`}
                                        state={{ series }}
                                        className="hover:text-emerald-600 transition-colors"
                                    >
                                        {series.name}
                                    </Link>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </>
                            )}
                            <span className="text-emerald-600 font-medium">{model.name}</span>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={handleDatasheetDownload}
                                className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                <span>Datasheet</span>
                            </button>
                            <button
                                onClick={() => navigate('/contact', { state: { product: model } })}
                                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Contact</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 py-12">

                    {/* Product Title */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                                In Stock
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{model.name}</h1>
                        <p className="text-lg text-gray-600">Professional Digital Signal Processor</p>
                    </div>

                    {/* Main Product Section - Image Left, Description Right */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-12">

                        {/* Image Gallery - Left */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="aspect-video relative mb-4">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`${model.name} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover rounded bg-gray-100"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/800x450/F8F9FA/6B7280?text=" + encodeURIComponent(model.name);
                                    }}
                                />

                                {/* Navigation */}
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

                                {/* Image Counter */}
                                {images.length > 1 && (
                                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                )}
                            </div>

                            {/* Thumbnails */}
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
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Overview - Right */}
                        <div className="lg:col-span-1 bg-white rounded-lg border border-gray-200 p-6">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Product Overview</h2>
                            <p className="text-gray-700 leading-relaxed text-base mb-8">{productData.overview}</p>

                            {/* Action Buttons */}
                            {/* <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => navigate('/contact', { state: { product: model } })}
                                    className="flex-1 bg-emerald-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Request Quote
                                </button>
                                <button className="px-6 py-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="px-6 py-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                    </div>

                    {/* Key Features and Applications */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">

                        {/* Key Features */}
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

                        {/* Applications */}
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

                    {/* Technical Specifications */}
                    <div className="bg-white rounded-lg border border-gray-200 mb-12">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-900">Technical Specifications</h2>
                        </div>

                        {/* Specification Tabs */}
                        {specTabs.length > 1 && (
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
                        )}

                        {/* Specification Content */}
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

                    {/* Contact form */}
                    {/* Product Inquiry Form */}
                    <div className="bg-white rounded-lg border border-gray-200 mb-12">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-900">Get Product Information</h2>
                            <p className="text-gray-600 mt-1">Interested in {model.name}? Let's discuss your requirements.</p>
                        </div>
                        
                        <div className="p-6">
                            <form className="space-y-4">
                                {/* Basic Info */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                                            I'm interested in *
                                        </label>
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        >
                                            <option value="">Select option</option>
                                            <option value="quote">Getting a Quote</option>
                                            <option value="demo">Product Demo</option>
                                            <option value="technical">Technical Details</option>
                                            <option value="support">Support & Integration</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Product Context */}
                                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                                    <div className="flex items-center space-x-2 text-sm">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                        <span className="text-emerald-800 font-medium">Product: {model.name}</span>
                                        {series && <span className="text-emerald-600">• {series.name} Series</span>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        placeholder="Tell us about your project or any specific questions..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    ></textarea>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2">
                                    <div className="flex items-center mb-4 sm:mb-0">
                                        <input
                                            id="sendDatasheet"
                                            name="sendDatasheet"
                                            type="checkbox"
                                            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="sendDatasheet" className="ml-2 text-sm text-gray-600">
                                            Send me the datasheet
                                        </label>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="bg-emerald-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                    >
                                        Send Inquiry
                                    </button>
                                </div>
                                
                                <p className="text-xs text-gray-500">
                                    * Required fields. We typically respond within 4 hours during business days.
                                </p>
                            </form>
                        </div>
                    </div>
                    
                </main>
            </div>

            <JoinCommunitySection />
            <Footer />
        </>
    );
};

export default ProductDetailPage;
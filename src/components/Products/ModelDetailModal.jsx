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

    // const getProductData = (model) => {
    //     if (model.name?.includes('Auris Pro-44D') || model.id === 'model_ap_44d') {
    //         return {
    //             overview: `The Resoundify AurisPro-44D is a compact, high-performance Digital Signal Processor (DSP) designed to
    //               meet the demands of modern audio installations. Built with 4 analog inputs and 4 analog outputs, along with
    //               4x4 Dante digital audio channels, it provides exceptional flexibility for small to mid-sized AV systems.
    //               Whether used in conference rooms, boardrooms, classrooms, or multi-room AV zones, the AurisPro-44D
    //               delivers powerful audio processing capabilities. It supports AEC (Acoustic Echo Cancellation) to eliminate
    //               echo during calls, and ANC (Active Noise Cancellation) to suppress background noise, ensuring crystal-clear
    //               communication. Fully compatible with Dante audio networking, the AurisPro-44D allows easy integration
    //               into existing networked AV environments, enabling efficient routing of audio signals with ultra-low latency
    //               and no degradation in quality.`,
    //             keyFeatures: [
    //                 "Professional SHARC DSP Core: Built on the ADI SHARC platform, the AurisPro-44D delivers ultra-fast processing with a semi-open architecture for user-defined signal chains.",
    //                 "High-Quality Audio Processing: Supports 24-bit / 48kHz audio resolution across all channels, ensuring clear, natural sound reproduction.",
    //                 "Intelligent Feedback Suppression: Each input channel features adaptive feedback elimination, automatically removing audio feedback in live environments.",
    //                 "Full-Duplex AEC & ANC: Integrated Acoustic Echo Cancellation (AEC) and Active Noise Cancellation (ANC) guarantee clean voice capture for conferencing applications.",
    //                 "Auto Mixer & Gain Control: Includes Auto Mixer, Automatic Gain Control (AGC), and Ducking to manage varying audio levels and prioritize inputs automatically.",
    //                 "Ambient Noise Compensation: Real-time ANC (Ambient Noise Compensator) adjusts output based on room noise, maintaining consistent speech clarity.",
    //                 "Comprehensive Audio Matrix: Internal mixing matrix with channel linking, grouping, duplication, and precise level control for customized signal routing.",
    //                 "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for third-party systems.",
    //                 "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
    //             ],
    //             applications: [
    //                 "Conference",
    //                 "Classrooms",
    //                 "Auditoriums"
    //             ],
    //             specifications: {
    //                 "System Specifications": {
    //                     "Processor": "ADI SHARC+ARM926EJ-S@600 MHz, 800 MHz",
    //                     "Max Processing Capacity": "800 MIPS, 1.6 GFLOPS",
    //                     "Sampling Rate": "44.1 kHz / 48 kHz",
    //                     "Frequency Response (±0.5dB)": "20 Hz - 20 kHz (±0.25 dB)",
    //                     "Dynamic Range (A/D/A)": "118 dB A-weighted",
    //                     "Channel Separation (A/D/A)": "> 120 dB (20Hz - 20kHz, -60 dBFS)",
    //                     "Latency (A/D/A)": "< 2.6 ms@48kHz (optimized for low latency)",
    //                     "Max Memory": "1 GB total bandwidth",
    //                     "Network Protocol": "Dante (AES67 compatible) / AES67",
    //                     "Max Internal Sample Processing": "32-bit floating point",
    //                     "DSP Channels": "4 inputs / 4 outputs",
    //                     "High Output Background Noise Ceiling": "< -90 dB",
    //                     "Supply Voltage Range": "AC: 85~264V, 47~63Hz",
    //                     "Supply Current Sinking": "-",
    //                     "DC Current": "2 max ADC",
    //                     "High Output Maximum Supply Current": "< 1.5 A power when input at 110V",
    //                     "Maximum Supply Current": "15 watts",
    //                     "Network Interface": "1 x RJ45 jack",
    //                     "Maximum Internal Power": "15 watts nominal"
    //                 },
    //                 "Analog Inputs and Outputs": {
    //                     "Number of Analog Input": "4 switchable balanced on one base unit",
    //                     "Analog Input Jack Connector": "XLR-3 (pin 2 hot) on back panel",
    //                     "Analog Input Input Impedance": "≥ 8 kΩ both differential and single-ended",
    //                     "Network Interface Input Impedance": "≥ 8 kΩ both on differential input",
    //                     "Analog Input Jack Input Voltage": "≥ +24 dBu @ 0.1% THD+N (balanced input)",
    //                     "Analog Input Max Line Level": "≥ +24 dBu @ 0.1% THD with unit will not clip input",
    //                     "Analog Input Pre Line Level": "< -40 dBu with 40dB gain input set to full scale",
    //                     "Analog Line Impedance": "20 Ohms balanced, 10 Ohms unbalanced",
    //                     "Analog Phantom Power Port Count": "+48V (±4V on input pins 2&3)",
    //                     "Analog Input THD + Noise": "> 100 dB SNR @ 4Vrms output (1 kHz @ +18 dBu, 20 Hz-20k",
    //                     "Analog Max Latency": "< 2.6 ms @ 48 kHz sampling",
    //                     "Number of Analog Outputs": "4 balanced line level",
    //                     "Analog Output Impedance": "20 Ohms balanced, 10 Ohms unbalanced",
    //                     "Analog Output THD + Noise": "> 100 dB SNR @ 4Vrms output (1 kHz @ +18 dBu, 20 Hz-20k",
    //                     "Analog Output Level": "1 × ms"
    //                 }
    //             }
    //         };
    //     }
    //     if (model.name?.includes('Fusion -2009') || model.id === 'model_fusion_2009') {
    //         return {
    //             overview: "The Fusion-2009 is a compact, high-performance Digital Signal Processor (DSP) designed to meet the demands of modern audio installations. Built with 4 analog inputs and 4 analog outputs, along with 4x4 Dante (804.1-draft-compliant), it provides exceptional flexibility for both live sound AV systems.",
    //             keyFeatures: [
    //                 "Professional SHARC DSP Core",
    //                 "High-Quality Audio Processing",
    //                 "Intelligent Feedback Suppression",
    //                 "Full Duplex AEC & ANC",
    //                 "Auto Mixer & Gain Control",
    //                 "Configurable ADSP/FPGA",
    //                 "Comprehensive Audio Matrix",
    //                 "Multi-Platform Compatibility"
    //             ],
    //             applications: [
    //                 "Conference",
    //                 "Classrooms",
    //                 "Auditoriums"
    //             ],
    //             specifications: {
    //                 "System Specifications": {
    //                     "Processor": "ADI SHARC+ARM926EJ-S@600 MHz, 800 MHz",
    //                     "Max Processing Capacity": "800 MIPS, 1.6 GFLOPS",
    //                     "Sampling Rate": "44.1 kHz / 48 kHz",
    //                     "Frequency Response (±0.5dB)": "20 Hz - 20 kHz (±0.25 dB)",
    //                     "Dynamic Range (A/D/A)": "118 dB A-weighted",
    //                     "Channel Separation (A/D/A)": "> 120 dB (20Hz - 20kHz, -60 dBFS)",
    //                     "Latency (A/D/A)": "< 2.6 ms@48kHz (optimized for low latency)",
    //                     "Max Memory": "1 GB total bandwidth",
    //                     "DSP Channels": "4 inputs / 4 outputs",
    //                     "High Output Background Noise Ceiling": "< -90 dB",
    //                     "Supply Voltage Range": "AC: 85~264V, 47~63Hz",
    //                     "Low Output Maximum Supply Current": "AC: 85~264V, 47~63Hz",
    //                     "Supply Current Sinking": "-",
    //                     "High Output Maximum Supply Current": "< 1.5 A power when input at 110V",
    //                     "HD-226 Advisory Serial Diff": "0.5 kΩ (40Ω HD, 6 dB link tip, tip+tip+tip: Sloped through using: port 2, 6, 5; circuit)",
    //                     "Input Interface": "1 x Serial Power",
    //                     "Maximum Serial Power": "15 watts annual"
    //                 },
    //                 "Mechanical Specifications": {
    //                     "Installation": "1U standard 19-inch rack-mount",
    //                     "Dimensions": "482 mm(L) x 275 mm(W) x 44 mm(H)",
    //                     "Weight": "1.5 kg (3.3 lbs)",
    //                     "Power consumption": "Power 30W, Full Load: 40W",
    //                     "Operating Condition": "Temperature: 0°C ~50°C",
    //                     "Storage Condition": "Humidity: 20% ~90%",
    //                     "Color": "Black"
    //                 }
    //             }
    //         };
    //     }
    //     return {
    //         overview: model.description || "Professional audio solution designed for high-performance applications.",
    //         keyFeatures: model.features || [
    //             "Professional Grade Quality",
    //             "Advanced Performance",
    //             "Reliable Operation",
    //             "Easy Integration"
    //         ],
    //         applications: [
    //             "Professional Audio Systems",
    //             "Corporate Installations",
    //             "Educational Facilities"
    //         ],
    //         specifications: {
    //             "General": {
    //                 "Model": model.name,
    //                 "Type": "Professional Equipment",
    //                 "Warranty": "3 Years"
    //             }
    //         }
    //     };
    // };

    const productData = getProductData(model);
    const specTabs = Object.keys(productData.specifications);

    // Handle click on related model card
    const handleModelClick = (relatedModel) => {
        if (isModelDataComplete(relatedModel)) {
            // Update modal with new model (assumes parent component handles state)
            // Pass the new model and series to parent via a callback or state update
            // For simplicity, we call onBack to simulate navigation; replace with actual logic
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
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, Download, Mail, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JoinCommunitySection from '../components/ProductPageCta';
import { productsData } from "../data/products";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeSpecTab, setActiveSpecTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let model = location.state?.model;
    let series = location.state?.series;

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

    if (model && !isModelDataComplete(model) && series) {
        navigate(`/products/series/${series.id}`, { state: { series } });
        return null;
    }

    if (!model) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                    <Link to="/products" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    const getProductData = (model) => {
        if (model.overview || model.keyFeatures || model.specifications) {
            return {
                overview: model.overview || model.description || "Professional audio solution.",
                keyFeatures: Array.isArray(model.keyFeatures)
                    ? model.keyFeatures
                    : (model.features ? model.features.split(',').map(f => f.trim()) : ["High Performance", "Reliable", "Easy Integration"]),
                applications: Array.isArray(model.applications)
                    ? model.applications
                    : ["Conference", "Auditorium", "Classroom"],
                specifications: model.specifications || {
                    "General": {
                        "Model": model.name,
                        "Series": series?.name || "Professional Series",
                        "Type": "DSP Processor"
                    }
                },
                controlSoftware: model.controlSoftware || null
            };
        }

        if (model.name?.includes('Auris Pro-44D') || model.id === 'model_ap_44d') {
            return {
                overview: `The Resoundify AurisPro-44D is a compact, high-performance Digital Signal Processor (DSP) designed to meet the demands of modern audio installations. Built with 4 analog inputs and 4 analog outputs, along with 4x4 Dante digital audio channels, it provides exceptional flexibility for small to mid-sized AV systems. Whether used in conference rooms, boardrooms, classrooms, or multi-room AV zones, the AurisPro-44D delivers powerful audio processing capabilities. It supports AEC (Acoustic Echo Cancellation) to eliminate echo during calls, and ANC (Active Noise Cancellation) to suppress background noise, ensuring crystal-clear communication. Fully compatible with Dante audio networking, the AurisPro-44D allows easy integration into existing networked AV environments, enabling efficient routing of audio signals with ultra-low latency and no degradation in quality.`,
                keyFeatures: [
                    "Professional SHARC DSP Core: Built on the ADI SHARC platform, the AurisPro-44D delivers ultra-fast processing with a semi-open architecture for user-defined signal chains.",
                    "High-Quality Audio Processing: Supports 24-bit / 48kHz audio resolution across all channels, ensuring clear, natural sound reproduction.",
                    "Intelligent Feedback Suppression: Each input channel features adaptive feedback elimination, automatically removing audio feedback in live environments.",
                    "Full-Duplex AEC & ANC: Integrated Acoustic Echo Cancellation (AEC) and Active Noise Cancellation (ANC) guarantee clean voice capture for conferencing applications.",
                    "Auto Mixer & Gain Control: Includes Auto Mixer, Automatic Gain Control (AGC), and Ducking to manage varying audio levels and prioritize inputs automatically.",
                    "Ambient Noise Compensation: Real-time ANC (Ambient Noise Compensator) adjusts output based on room noise, maintaining consistent speech clarity.",
                    "Comprehensive Audio Matrix: Internal mixing matrix with channel linking, grouping, duplication, and precise level control for customized signal routing.",
                    "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for third-party systems.",
                    "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
                ],
                controlSoftware: {
                    title: "Control Software",
                    name: "AuriControl+",
                    description: `AuriControl+ is our dedicated configuration software, available for free download from our official website. Designed with a user-friendly interface, it allows users to easily tailor the matrix settings to match the specific needs of any installation. With this software, you can configure a wide range of parameters, including:`,
                    parameters: [
                        "Input Gain", "Expander", "Compressor & Limiter", "Auto Gain Control (AGC)", "Equalizer", "Figure Balancer",
                        "Active Noise Control (ANC)", "Noise Suppression (ANS)", "Matrix", "Low & High Pass Filters", "Delayer",
                        "Output", "Feedback (AFC)", "Noise Gate", "Ducker", "SPL", "Share AM (Automixer)", "Echo Canceller (AEC)", "Camera Tracking"
                    ]
                },
                applications: ["Classrooms", "Auditoriums", "Boardrooms"],
                specifications: {
                    "System Specifications": {
                        "Processor": "ADI SHARC 21489@450 MHz SIMD",
                        "Raw Processing Capacity": "400 MIPS, 1.6 GFLOPS",
                        "Sampling Rate": "48 kHz ± 100 ppm",
                        "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.3 dB",
                        "Dynamic Range (A/D/A)": "110 dB (A-weighted)",
                        "THD + Noise": "< -95 dB (22.4 kHz BW, unweighted); 1 kHz @17 dBu, 0 dB gain",
                        "Channel Separation (A/D/A)": "110 dB @ 1 kHz, +24 dBu",
                        "Latency (A/D/A)": "<3 ms (input routed directly to output)",
                        "Delay Memory": "174 mono seconds",
                        "Analog Control Inputs": "0–3.3 VDC",
                        "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                        "Logic Outputs": "Low (0 V) when active; Pulled high (5 V) when inactive",
                        "Logic Output Maximum External Power Supply / Current Sinking": "AC110~240V, 50Hz/60Hz",
                        "Logic Output Maximum Output Current": "10 mA",
                        "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
                        "AEC Channel": "2-bus AEC",
                        "Maximum Stored Presets": "16 storable presets"
                    },
                    "Analog Inputs and Outputs": {
                        "Number of Analog Inputs": "4 switchable balanced mic or line level",
                        "Analog Input and Output Connectors": "3.81 mm terminal blocks",
                        "Nominal Analog Input and Output Level": "+4 dBu with 20 dB headroom",
                        "Analog Input and Output Maximum Level": "+24 dBu (or +22.8 dBu into a 2k Ohm minimum load)",
                        "Analog Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps) with ±24 dB digital trim",
                        "Analog Mic Pre-amp EIN": "< -125 dB (with 150 Ohm source, 22.4 kHz BW)",
                        "Analog Input Impedance": "2k Ohms balanced, 1k Ohms unbalanced",
                        "Analog Phantom Power (per input)": "+48 VDC per input, max 10 mA",
                        "Analog Input Dynamic Range": "<113 dB, A-weighted",
                        "Analog Input THD + Noise": "< -100 dB (22.4 kHz BW, unweighted), 1 kHz @ +15 dBu, 0 dB gain",
                        "Analog Input Latency": "1 ms",
                        "Number of Analog Outputs": "4 balanced line level",
                        "Analog Output Impedance": "300 Ohms balanced, 150 Ohms unbalanced",
                        "Analog Output Dynamic Range": "113 dB, A-weighted",
                        "Analog Output THD + Noise": "< -97 dB (22.4 kHz BW, unweighted); 1 kHz, 0 dB gain, +8 dBu output",
                        "Analog Output Latency": "1.5 ms"
                    }
                }
            };
        }

        if (model.name?.includes('Auris Pro-88D') || model.id === 'model_ap_88d') {
            return {
                overview: `The Resoundify AurisPro-88D is a professional-grade 8x8 Digital Signal Processor (DSP) designed for highperformance audio applications in conferencing, commercial AV, and integrated systems. With native support for Dante™ audio networking, and built-in AEC (Acoustic Echo Cancellation) and ANC (Automatic Noise Cancellation) on all mic inputs, it ensures crystal-clear voice and audio transmission in even the most acoustically challenging environments. This versatile DSP features 8 balanced analog inputs and 8 balanced outputs, along with 8x8 Dante digital channels, enabling seamless integration with modern AV networks. The AurisPro-88D supports flexible routing, powerful DSP tools (EQ, dynamics, delay, etc.), and remote control via Ethernet or RS-232, making it an ideal solution for medium to large meeting rooms, boardrooms, lecture halls, and hybrid AV environments.`,
                keyFeatures: [
                    "Professional SHARC DSP Core: Powered by Analog Devices' SHARC processor for advanced, low-latency signal processing.",
                    "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                    "Intelligent Feedback Suppression: Adaptive per-channel feedback elimination to reduce howling or mic interference.",
                    "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation per channel for flawless communication.",
                    "Auto Mixer & Gain Control: Features Gain Sharing Auto Mixer, AGC, and Ducker for smooth level balancing in real-time.",
                    "Ambient Noise Compensation: Dynamically adjusts levels based on background noise fluctuations.",
                    "Comprehensive Audio Matrix: Fully configurable 8x8 routing matrix with input duplication, grouping, level, and mute control.",
                    "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                    "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
                ],
                controlSoftware: {
                    title: "Control Software",
                    name: "AuriControl+",
                    description: `AuriControl+ is our dedicated configuration software, available for free download from our official website. Designed with a user-friendly interface, it allows users to easily tailor the matrix settings to match the specific needs of any installation. With this software, you can configure a wide range of parameters, including:`,
                    parameters: [
                        "Input Gain", "Expander", "Compressor & Limiter", "Auto Gain Control (AGC)", "Equalizer", "Figure Balancer",
                        "Active Noise Control (ANC)", "Noise Suppression (ANS)", "Matrix", "Low & High Pass Filters", "Delayer",
                        "Output", "Feedback (AFC)", "Noise Gate", "Ducker", "SPL", "Share AM (Automixer)", "Echo Canceller (AEC)", "Camera Tracking"
                    ]
                },
                applications: ["Auditoriums", "Boardrooms", "Classrooms"],
                specifications: {
                    "System Specifications": {
                        "Processor": "ADI SHARC 21489@450 MHz SIMD",
                        "Raw Processing Capacity": "400 MIPS, 1.6 GFLOPS",
                        "Sampling Rate": "48 kHz ± 100 ppm",
                        "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.5 dB",
                        "Dynamic Range (A/D/A)": "113 dB (A-weighted)",
                        "THD + Noise": "< -95 dB (22.4 kHz BW, unweighted); 1 kHz @ +17 dBu, 0 dB gain",
                        "Channel Separation (A/D/A)": "108 dB @ 1 kHz, +24 dBu",
                        "Latency (A/D/A)": "<3 ms (input routed directly to output)",
                        "Delay Memory": "174 mono seconds",
                        "Analog Control Inputs": "0–3.3 VDC",
                        "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                        "Logic Outputs": "Low (0 V) when active; Pulled high (5 V) when inactive",
                        "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
                        "Logic Output Maximum Output Current": "10 mA",
                        "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
                        "AEC Channel": "1-bus AEC",
                        "Maximum Stored Presets": "16 storable presets"
                    },
                    "Analog Inputs and Outputs": {
                        "Number of Analog Inputs": "8 switchable balanced mic or line level",
                        "Analog Input and Output Connectors": "3.81 mm terminal blocks",
                        "Nominal Analog Input and Output Level": "+4 dBu with 20 dB headroom",
                        "Analog Input and Output Maximum Level": "+24 dBu (or +22.8 dBu into a 2k Ohm minimum load)",
                        "Analog Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps) with ±24 dB digital trim",
                        "Analog Mic Pre-amp EIN": "< -125 dB (with 150 Ohm source, 22.4 kHz BW)",
                        "Analog Input Impedance": "2k Ohms balanced, 1k Ohms unbalanced",
                        "Analog Phantom Power (per input)": "+48 VDC per input, max 10 mA",
                        "Analog Input Dynamic Range": ">115 dB, A-weighted",
                        "Analog Input THD + Noise": "< -100 dB (22.4 kHz BW, unweighted), 1 kHz @ +15 dBu, 0 dB gain",
                        "Analog Input Latency": "0.31 ms",
                        "Number of Analog Outputs": "8 balanced line level",
                        "Analog Output Impedance": "300 Ohms balanced, 150 Ohms unbalanced",
                        "Analog Output Dynamic Range": "117 dB, A-weighted",
                        "Analog Output THD + Noise": "< -97 dB (22.4 kHz BW, unweighted); 1 kHz, 0 dB gain, +8 dBu output",
                        "Analog Output Latency": "0.31 ms"
                    }
                }
            };
        }

        if (model.name?.includes('Auris Pro-1616D') || model.id === 'model_ap_1616d') {
            return {
                overview: `The Resoundify AurisPro-1616D is a flagship-grade 16x16 Advanced Audio Digital Signal Processor (DSP) designed for large-scale, mission-critical AV installations. Powered by the ADI SHARC DSP platform, it delivers robust performance, ultra-low latency, and professional-grade audio processing. With 16 balanced analog inputs and 16 balanced outputs, plus 16x16 Dante™ audio networking, this system is built for high-capacity audio routing and processing. Ideal for enterprise-level applications, the AurisPro-1616D includes full-duplex AEC (Acoustic Echo Cancellation) and ANC (Automatic Noise Cancellation) on all mic inputs, ensuring crystal-clear communication in challenging acoustic environments. It also features intelligent auto mixing, feedback suppression, gain sharing, and ambient noise compensation—making it a complete solution for conferencing, courtrooms, broadcast studios, and more.`,
                keyFeatures: [
                    "Professional SHARC DSP Core: Delivers powerful processing using Analog Devices' renowned SHARC platform, ensuring low-latency performance and customization potential.",
                    "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                    "Intelligent Feedback Suppression: Adaptive per-channel feedback elimination for consistent, interference-free audio.",
                    "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation per channel for flawless communication.",
                    "Auto Mixer & Gain Control: Features Gain Sharing Auto Mixer, AGC, and Ducker for smooth level balancing in real-time.",
                    "Ambient Noise Compensation: Dynamically adjusts levels based on background noise fluctuations.",
                    "Comprehensive Audio Matrix: Fully configurable 16x16 routing matrix with input duplication, grouping, level, and mute control.",
                    "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                    "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing.",
                    "Dual Power Support: Operates on PoE or DC 12V for flexible power deployment."
                ],
                controlSoftware: {
                    title: "Control Software",
                    name: "AuriControl+",
                    description: `AuriControl+ is our dedicated configuration software, available for free download from our official website. Designed with a user-friendly interface, it allows users to easily tailor the matrix settings to match the specific needs of any installation. With this software, you can configure a wide range of parameters, including:`,
                    parameters: [
                        "Input Gain", "Expander", "Compressor & Limiter", "Auto Gain Control (AGC)", "Equalizer", "Figure Balancer",
                        "Active Noise Control (ANC)", "Noise Suppression (ANS)", "Matrix", "Low & High Pass Filters", "Delayer",
                        "Output", "Feedback (AFC)", "Noise Gate", "Ducker", "SPL", "Share AM (Automixer)", "Echo Canceller (AEC)", "Camera Tracking"
                    ]
                },
                applications: ["Auditoriums", "Classrooms", "Boardrooms"],
                specifications: {
                    "System Specifications": {
                        "Processor": "ADI SHARC 21489@450 MHz SIMDx2",
                        "Raw Processing Capacity": "400 MIPS, 1.6 GFLOPS",
                        "Sampling Rate": "48 kHz ± 100 ppm",
                        "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.5 dB",
                        "Dynamic Range (A/D/A)": "114 dB (A-weighted)",
                        "THD + Noise": "< -95 dB (22.4 kHz BW, unweighted); 1 kHz @ +17 dBu, 0 dB gain",
                        "Channel Separation (A/D/A)": "110 dB @ 1 kHz, +24 dBu",
                        "Latency (A/D/A)": "1.04 ms (input routed directly to output)",
                        "Delay Memory": "174 mono seconds",
                        "Analog Control Inputs": "0–3.3 VDC",
                        "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                        "Logic Outputs": "Low (0 V) when active; Pulled high (5 V) when inactive",
                        "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
                        "Logic Output Maximum Output Current": "10 mA",
                        "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity; Straight-through wiring; pins 2, 3, 5 used",
                        "Ethernet Cable": "Standard CAT5/6, max 100 m (328 ft)",
                        "Maximum Stored Presets": "1,000 storable presets"
                    },
                    "Analog Inputs and Outputs": {
                        "Number of Analog Inputs": "16 switchable balanced mic or line level",
                        "Analog Input and Output Connectors": "3.81 mm terminal blocks",
                        "Nominal Analog Input and Output Level": "+4 dBu with 20 dB headroom",
                        "Analog Input and Output Maximum Level": "+24 dBu (or +22.8 dBu into a 2k Ohm minimum load)",
                        "Analog Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps) with ±24 dB digital trim",
                        "Analog Mic Pre-amp EIN": "< -125 dB (with 150 Ohm source, 22.4 kHz BW)",
                        "Analog Input Impedance": "2k Ohms balanced, 1k Ohms unbalanced",
                        "Analog Phantom Power (per input)": "+48 VDC per input, max 10 mA",
                        "Analog Input Dynamic Range": ">115 dB, A-weighted",
                        "Analog Input THD + Noise": "< -100 dB (22.4 kHz BW, unweighted), 1 kHz @ +15 dBu, 0 dB gain",
                        "Analog Input Latency": "0.31 ms",
                        "Number of Analog Outputs": "16 balanced line level",
                        "Analog Output Impedance": "300 Ohms balanced, 150 Ohms unbalanced",
                        "Analog Output Dynamic Range": "117 dB, A-weighted",
                        "Analog Output THD + Noise": "< -97 dB (22.4 kHz BW, unweighted); 1 kHz, 0 dB gain, +8 dBu output",
                        "Analog Output Latency": "0.31 ms"
                    }
                }
            };
        }

        if (model.name?.includes('Auris Pro-6464D') || model.id === 'model_ap_6464d') {
            return {
                overview: `The Resoundify AurisPro-6464D is a high-performance, enterprise-class 64x64 Audio Digital Signal Processor (DSP) engineered for large-scale, professional AV installations. Designed for audio environments that demand extensive input/output capacity and uncompromising processing power, this DSP is built on the Analog Devices SHARC DSP platform and supports full Dante™ audio networking (64x64 channels). With built-in AEC (Acoustic Echo Cancellation) and ANC (Automatic Noise Cancellation) on all mic channels, the AurisPro-6464D guarantees crystal-clear voice pickup and reliable audio clarity in high-density conferencing or broadcast setups. It features intelligent audio tools such as auto-mixing, adaptive feedback suppression, AGC, ducking, and ambient noise compensation, all configurable through an intuitive interface.`,
                keyFeatures: [
                    "Professional SHARC DSP Core: Delivers powerful processing using Analog Devices' renowned SHARC platform, ensuring low-latency performance and customization potential.",
                    "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                    "Intelligent Feedback Suppression: Adaptive per-channel feedback elimination for consistent, interference-free audio.",
                    "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation per channel for flawless communication.",
                    "Auto Mixer & Gain Control: Features Gain Sharing Auto Mixer, AGC, and Ducker for smooth level balancing in real-time.",
                    "Ambient Noise Compensation: Dynamically adjusts levels based on background noise fluctuations.",
                    "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                    "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
                ],
                applications: ["Auditoriums", "Classrooms", "Boardrooms"],
                specifications: {
                    "System Specifications": {
                        "Processor": "ADI SHARC 21489 @ 450 MHz SIMDx2",
                        "Raw Processing Capacity": "400 MIPS, 1.6 GFLOPS",
                        "Sampling Rate": "48 kHz ± 100 ppm",
                        "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.3 dB",
                        "Dynamic Range (A/D/A)": "114 dB (A-weighted)",
                        "THD + Noise": "< -95 dB (22.4 kHz BW, unweighted); 1 kHz @ +17 dBu, 0 dB gain",
                        "Channel Separation (A/D/A)": "110 dB @ 1 kHz, +24 dBu",
                        "Latency (A/D/A)": "<6 ms (input routed directly to output)",
                        "Delay Memory": "174 mono seconds",
                        "Analog Control Inputs": "0–3.3 VDC",
                        "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                        "Logic Outputs": "Low (0 V) when active; Pulled high (5 V) when inactive",
                        "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
                        "Logic Output Maximum Output Current": "10 mA",
                        "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
                        "AEC Channel": "1-bus AEC",
                        "Maximum Stored Presets": "16 storable presets",
                        "Dimension": "482 x 260 x 45 mm"
                    }
                }
            };
        }

        if (model.name?.includes('Fusion -2009') || model.id === 'model_fusion_2009') {
            return {
                overview: "The Fusion-2009 is a compact, high-performance Digital Signal Processor (DSP) designed to meet the demands of modern audio installations. Built with 4 analog inputs and 4 analog outputs, along with 4x4 Dante (802.1-draft-compliant), it provides exceptional flexibility for both live sound AV systems.",
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
                applications: ["Conference Rooms", "Classrooms", "Auditoriums"],
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

        return {
            overview: model.description || "Professional audio solution designed for high-performance applications.",
            keyFeatures: model.features || ["Professional Grade Quality", "Advanced Performance", "Reliable Operation", "Easy Integration"],
            applications: ["Professional Audio Systems", "Corporate Installations", "Educational Facilities"],
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

    const images = model.images && model.images.length > 0
        ? model.images
        : model.image ? [model.image] : ["https://placehold.co/800x600/F8F9FA/6B7280?text=" + encodeURIComponent(model.name)];

    const goToPreviousImage = () => {
        setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    };

    const goToNextImage = () => {
        setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    };

    const handleDatasheetDownload = () => {
        const datasheetPaths = {
            'model_ap_44d': '/datasheets/audio-dsp/DSP/AurisPro-44D.pdf',
            'model_ap_88d': '/datasheets/audio-dsp/DSP/AurisPro-88D.pdf',
            'model_ap_128d': '/datasheets/audio-dsp/DSP/AURISPRO-128D.pdf',
            'model_ap_1616d': '/datasheets/audio-dsp/DSP/AurisPro-1616D.pdf',
            'model_ap_6464d': '/datasheets/audio-dsp/DSP/AurisPro-6464D.pdf',
            'model_ep_88aec': '/datasheets/audio-dsp/DSP/EchoPrime-88AEC.pdf',
            'model_ep_b88': '/datasheets/audio-dsp/DSP/EchoPrime-B88.pdf',
            'model_ep_b1616': '/datasheets/audio-dsp/DSP/EchoPrime-B1616.pdf',
            'model_fusion_1005': '/datasheets/all-in-one-processor/Fusion-1005.pdf',
            'model_fusion_1008': '/datasheets/all-in-one-processor/Fusion-1008.pdf',
            'model_fusion_1009': '/datasheets/all-in-one-processor/Fusion-1009.pdf',
            'model_fusion_2009': '/datasheets/all-in-one-processor/Fusion-2009.pdf',
            'model_fusion_cp2': '/datasheets/touchscreen-control-panel/Fusion-CP2.pdf',
            'model_fusion_cp6': '/datasheets/touchscreen-control-panel/Fusion-CP6.pdf',
            'model_vn_88': '/datasheets/audio-dsp/VoxNova88.pdf',
            'model_vn_128f': '/datasheets/audio-dsp/VoxNova128F.pdf',
            'model_vn_1616': '/datasheets/audio-dsp/VoxNova1616.pdf',
        };

        const pdfPath =
            datasheetPaths[model.id?.toLowerCase()] ||
            datasheetPaths[
            model.name?.toLowerCase().replace(/\s+/g, '_')
            ];

        if (pdfPath) {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.target = '_blank';
            link.download = `${model.name ? model.name.replace(/\s+/g, '-') : 'Product'}-Datasheet.pdf`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('Datasheet not available. Please contact us for product information.');
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <header className="bg-white border-b border-gray-200 top-20 mt-20">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <nav className="flex items-center space-x-2 text-gray-500 overflow-x-auto">
                                <Link to="/products" className="hover:text-emerald-600 transition-colors flex items-center space-x-2 whitespace-nowrap">
                                    <ArrowLeft className="w-5 h-5" />
                                    <span className="font-medium">Products</span>
                                </Link>
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                                {series && (
                                    <>
                                        <Link to={`/products/series/${series.id}`} state={{ series }} className="hover:text-emerald-600 transition-colors whitespace-nowrap">
                                            {series.name}
                                        </Link>
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                                <span className="text-emerald-600 font-medium whitespace-nowrap">{model.name}</span>
                            </nav>
                            <div className="flex items-center gap-3">
                                <button onClick={handleDatasheetDownload} className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors whitespace-nowrap">
                                    <Download className="w-4 h-4" />
                                    <span>Datasheet</span>
                                </button>
                                <button onClick={() => navigate('/contact', { state: { product: model } })} className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                                    <Mail className="w-4 h-4" />
                                    <span>Contact</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="max-w-7xl mx-auto px-6 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{model.name}</h1>
                        <p className="text-lg text-gray-600">Professional Digital Signal Processor</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="aspect-video relative justify-center">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`${model.name} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain rounded cursor-pointer mt-14"
                                    onError={e => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/800x450/F8F9FA/6B7280?text=" + encodeURIComponent(model.name);
                                    }}
                                    onClick={openModal}
                                />
                                {images.length > 1 && (
                                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                )}
                            </div>
                            {images.length > 1 && (
                                <div className="flex gap-3 overflow-x-auto pb-2 mt-4">
                                    {images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`flex-shrink-0 w-24 h-20 rounded border-2 p-1 overflow-hidden transition-all ${index === currentImageIndex
                                                ? 'border-emerald-500 ring-2 ring-emerald-200'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-contain bg-gray-50"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                            {isModalOpen && (
                                <div className="fixed inset-0 backdrop-blur-md bg-white bg-opacity-30 flex items-center justify-center z-50 p-4">
                                    <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center">
                                        <img
                                            src={images[currentImageIndex]}
                                            alt={`${model.name} - Image ${currentImageIndex + 1}`}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://placehold.co/800x450/F8F9FA/6B7280?text=${encodeURIComponent(model.name)}`;
                                            }}
                                        />
                                        <button
                                            onClick={closeModal}
                                            className="absolute top-24 right-2 md:top-14 md:right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                                        >
                                            <X className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                                        </button>
                                        {images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={goToPreviousImage}
                                                    className="absolute left-2 md:-left-24 bottom-1/3 md:top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                                                >
                                                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                                </button>
                                                <button
                                                    onClick={goToNextImage}
                                                    className="absolute right-2 md:-right-24 bottom-1/3 md:top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                                                >
                                                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                                </button>
                                                <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                                                    {currentImageIndex + 1} / {images.length}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Product Overview</h2>
                                <p className="text-gray-700 leading-relaxed text-base mb-8 text-sm">{productData.overview}</p>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Applications</h2>
                                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 pr-2 text-sm">
                                    {(productData.applications || []).map((application, index) => (
                                        <li key={index} className="text-gray-700 flex items-start">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            {application}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-12">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 text-sm">
                            <ul className="space-y-2 pr-2">
                                {(productData.keyFeatures || []).slice(0, Math.ceil(productData.keyFeatures.length / 2)).map((feature, index) => (
                                    <li key={index} className="text-gray-700 flex items-start">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2 pr-2">
                                {(productData.keyFeatures || []).slice(Math.ceil(productData.keyFeatures.length / 2)).map((feature, index) => (
                                    <li key={index} className="text-gray-700 flex items-start">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {productData.controlSoftware && (
                        <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6 mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{productData.controlSoftware.title}</h2>
                            <p className="text-gray-700 mb-4">
                                <span className="font-semibold">{productData.controlSoftware.name}</span> — {productData.controlSoftware.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4">
                                {(productData.controlSoftware.parameters || []).map((param, index) => (
                                    <li key={index} className="text-gray-700 flex items-start">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                        {param}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="bg-white rounded-lg border border-gray-200 mb-12 mx-auto">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-900">Technical Specifications</h2>
                        </div>
                        {Object.keys(productData.specifications || {}).length > 1 && (
                            <div className="border-b border-gray-200">
                                <nav className="flex space-x-8 px-6 overflow-x-auto">
                                    {Object.keys(productData.specifications || {}).map((tab, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveSpecTab(index)}
                                            className={`py-4 text-md font-medium border-b-2 transition-colors whitespace-nowrap ${activeSpecTab === index
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
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                                {Object.entries(productData.specifications[specTabs[activeSpecTab]] || {}).map(([key, value], index) => (
                                    <div key={index} className="flex flex-col py-2 border-b border-gray-100">
                                        <dt className="font-medium text-gray-900 mb-1">{key}</dt>
                                        <dd className="text-gray-700 text-sm">{value}</dd>
                                    </div>
                                ))}
                            </div>
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

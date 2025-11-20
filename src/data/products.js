export const productsData = [
  {
    id: "brand_audio_dsp",
    name: "Audio DSP Solutions",
    category: "audio_dsp",
    description: "Advanced Digital Signal Processing units for superior audio control.",
    image: "https://placehold.co/400x300/F0F4F8/3B82F6?text=Audio+DSP+Brand",
    type: "brand",
    series: [
      {
        id: "series_aurispro",
        name: "AurisPro Series",
        description: "Cutting-edge Dante audio interfaces for professional sound.",
        image: "/images/Products/audio_dsp/aurispro44d.webp",
        features: ["Dante Enabled", "High Channel Count", "Compact Design"],
        status: "In Stock",
        type: "series",
        models: [
         {
            id: "model_ap_44d",
            name: "AurisPro-44D",
            description: "4 in, 4 out DSP, 1/2 rack, 4x4 Dante",
            images: [
              "/images/Products/audio_dsp/aurispro44d.webp"
            ],
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
                "Input Gain",
                "Expander",
                "Compressor & Limiter",
                "Auto Gain Control (AGC)",
                "Equalizer",
                "Figure Balancer",
                "Active Noise Control (ANC)",
                "Noise Suppression (ANS)",
                "Matrix",
                "Low & High Pass Filters",
                "Delayer",
                "Output",
                "Feedback (AFC)",
                "Noise Gate",
                "Ducker",
                "SPL",
                "Share AM (Automixer)",
                "Echo Canceller (AEC)",
                "Camera Tracking"
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
          },

          {
              id: "model_ap_88d",
              name: "AurisPro-88D",
              description: "8 in, 8 out DSP, 8x8 Dante",
              images: [
                "/images/Products/audio_dsp/aurispro88d.webp"
              ],
              overview: `The Resoundify AurisPro-88D is a professional-grade 8x8 Digital Signal Processor (DSP) designed for high-performance audio applications in conferencing, commercial AV, and integrated systems. With native support for Dante™ audio networking, and built-in AEC (Acoustic Echo Cancellation) and ANC (Automatic Noise Cancellation) on all mic inputs, it ensures crystal-clear voice and audio transmission in even the most acoustically challenging environments. This versatile DSP features 8 balanced analog inputs and 8 balanced outputs, along with 8x8 Dante digital channels, enabling seamless integration with modern AV networks. The AurisPro-88D supports flexible routing, powerful DSP tools (EQ, dynamics, delay, etc.), and remote control via Ethernet or RS-232, making it an ideal solution for medium to large meeting rooms, boardrooms, lecture halls, and hybrid AV environments.`,
              keyFeatures: [
                "Professional SHARC DSP Core: Powered by Analog Devices’ SHARC processor for advanced, low-latency signal processing.",
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
                  "Input Gain",
                  "Expander",
                  "Compressor & Limiter",
                  "Auto Gain Control (AGC)",
                  "Equalizer",
                  "Figure Balancer",
                  "Active Noise Control (ANC)",
                  "Noise Suppression (ANS)",
                  "Matrix",
                  "Low & High Pass Filters",
                  "Delayer",
                  "Output",
                  "Feedback (AFC)",
                  "Noise Gate",
                  "Ducker",
                  "SPL",
                  "Share AM (Automixer)",
                  "Echo Canceller (AEC)",
                  "Camera Tracking"
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
            },

          // {
          //   id: "model_ap_1212d",
          //   name: "Auris Pro-1212D",
          //   description: "12 in, 12 out DSP, 8x8 Dante",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=Auris+Pro-1212D+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=Auris+Pro-1212D+2"
          //   ]
          // },
          {
              id: "model_ap_1616d",
              name: "AurisPro-1616D",
              description: "16 in, 16 out DSP, 16x16 Dante",
              images: [
                "/images/Products/audio_dsp/aurispro1616.webp"
              ],
              overview: "The Resoundify AurisPro-1616D is a flagship-grade 16×16 Advanced Audio Digital Signal Processor (DSP) designed for large-scale, mission-critical AV installations. Powered by the ADI SHARC DSP platform, it delivers robust performance, ultra-low latency, and professional-grade audio processing. With 16 balanced analog inputs and 16 balanced outputs, plus 16×16 Dante™ audio networking, this system is built for high-capacity audio routing and processing. Ideal for enterprise-level applications, the AurisPro-1616D includes full-duplex AEC (Acoustic Echo Cancellation) and ANC (Automatic Noise Cancellation) on all mic inputs, ensuring crystal-clear communication in challenging acoustic environments. It also features intelligent auto mixing, feedback suppression, gain sharing, and ambient noise compensation — making it a complete solution for conferencing, courtrooms, broadcast studios, and more.",
              keyFeatures: [
                "Professional SHARC DSP Core: Delivers powerful processing using Analog Devices’ renowned SHARC platform, ensuring low-latency performance and customization potential.",
                "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                "Intelligent Feedback Suppression: Adaptive per-channel feedback elimination for consistent, interference-free audio.",
                "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation per channel for flawless communication.",
                "Auto Mixer & Gain Control: Features Gain Sharing Auto Mixer, AGC, and Ducker for smooth level balancing in real-time.",
                "Ambient Noise Compensation: Dynamically adjusts levels based on background noise fluctuations.",
                "Comprehensive Audio Matrix: Fully configurable 16×16 routing matrix with input duplication, grouping, level, and mute control.",
                "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing.",
                "Dual Power Support: Operates on PoE or DC 12V for flexible power deployment."
              ],
              controlSoftware: {
                "title": "Control Software",
                "name": "AuriControl+",
                "description": "AuriControl+ is our dedicated configuration software, available for free download from our official website. Designed with a user-friendly interface, it allows users to easily tailor the matrix settings to match the specific needs of any installation. With this software, you can configure a wide range of parameters, including:",
                "parameters": [
                  "Input Gain",
                  "Expander",
                  "Compressor & Limiter",
                  "Auto Gain Control (AGC)",
                  "Equalizer",
                  "Figure Balancer",
                  "Active Noise Control (ANC)",
                  "Noise Suppression (ANS)",
                  "Matrix",
                  "Low & High Pass Filters",
                  "Delayer",
                  "Output",
                  "Feedback (AFC)",
                  "Noise Gate",
                  "Ducker",
                  "SPL",
                  "Share AM (Automixer)",
                  "Echo Canceller (AEC)",
                  "Camera Tracking"
                ]
              },
              applications: [
                "Auditoriums",
                "Classrooms",
                "Boardrooms"
              ],
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
            },

          {
              id: "model_ap_6464d",
              name: "AurisPro-6464D",
              description: "0 in, 0 out DSP, 64x64 Dante",
              images: [
                "/images/Products/audio_dsp/aurispro6464.webp"
              ],
              overview: "The Resoundify AurisPro-6464D is a high-performance, enterprise-class 64x64 Audio Digital Signal Processor (DSP) engineered for large-scale, professional AV installations. Designed for audio environments that demand extensive input/output capacity and uncompromising processing power, this DSP is built on the Analog Devices SHARC DSP platform and supports full Dante™ audio networking (64x64 channels). With built-in AEC (Acoustic Echo Cancellation) and ANC (Automatic Noise Cancellation) on all mic channels, the AurisPro-6464D guarantees crystal-clear voice pickup and reliable audio clarity in high-density conferencing or broadcast setups. It features intelligent audio tools such as auto-mixing, adaptive feedback suppression, AGC, ducking, and ambient noise compensation, all configurable through an intuitive interface.",
              keyFeatures: [
                "Professional SHARC DSP Core: Delivers powerful processing using Analog Devices’ renowned SHARC platform, ensuring low-latency performance and customization potential.",
                "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                "Intelligent Feedback Suppression: Adaptive per-channel feedback elimination for consistent, interference-free audio.",
                "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation per channel for flawless communication.",
                "Auto Mixer & Gain Control: Features Gain Sharing Auto Mixer, AGC, and Ducker for smooth level balancing in real-time.",
                "Ambient Noise Compensation: Dynamically adjusts levels based on background noise fluctuations.",
                "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
              ],
              applications: [
                "Auditoriums",
                "Classrooms",
                "Boardrooms"
              ],
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
                  "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity; Straight-through wiring; pins 2, 3, 5 used",
                  "AEC Channel": "1-bus AEC",
                  "Maximum Stored Presets": "16 storable presets",
                  "Dimension": "482 x 260 x 45 mm"
                }
              }
            },
        ],
      },
      {
        id: "series_echoprime",
        name: "EchoPrime Series",
        description: "Versatile DSPs with Acoustic Echo Cancellation (AEC) for clear audio conferencing.",
        image: "/images/Products/audio_dsp/EchoPrime-88AEC.webp",
        features: ["AEC Support", "Multiple I/O Options", "Robust Performance"],
        status: "In Stock",
        type: "series",
        models: [
              {
                id: "model_ap_88d",
                name: "EchoPrime-88AEC",
                description: "8 in, 8 out DSP, 8x8 Dante",
                images: [
                  "/images/Products/audio_dsp/aurispro88d.webp",
                ],
                overview: `The Resoundify EchoPrime-88AEC is a professional-grade Digital Signal Processor (DSP) designed for audio
                      processing applications such as conferencing, broadcasting, and AV installations. It features an 8×8 matrix,
                      meaning it supports 8 input and 8 output channels, allowing flexible routing and audio mixing capabilities.
                      The unit is equipped with 4 channels of Acoustic Echo Cancellation (AEC), making it ideal for clear, echo-free
                      communication in environments like meeting rooms and teleconferencing systems.
                      The EchoPrime-88AEC is an advanced, professional-grade audio DSP processor engineered for seamless
                      integration in conference rooms, boardrooms, classrooms, and enterprise AV systems. With its 8×8
                      input/output configuration, it allows for powerful audio signal management, routing, and processing
                      between multiple microphones, loudspeakers, and external audio sources.`,

                keyFeatures: [
                  "Professional SHARC DSP Core: Harnesses the robust ADI SHARC architecture to deliver ultra-fast, high-precision audio processing with exceptional flexibility for complex audio designs.",
                  "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                  "Intelligent Feedback Suppression: Independent adaptive feedback suppression on each channel automatically eliminates unwanted noise.",
                  "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation for clear communication in conferencing environments.",
                  "Auto Mixer & Gain Control: Built-in Gain Sharing Auto Mixer, Automatic Gain Control (AGC), and Audio Ducking (Ducker) for seamless level balancing.",
                  "Ambient Noise Compensation: Real-time Ambient Noise Compensator (ANC) adjusts audio levels based on environmental sound.",
                  "Comprehensive Audio Matrix: A flexible 8×8 audio matrix allows for routing, duplication, linking, grouping, and level control of all inputs and outputs with granular precision.",
                  "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                  "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing.",
                  "Dual Power Support: Operates on PoE or DC 12V for flexible power deployment."
                ],

                applications: [
                  "Conference Rooms",
                  "Boardrooms",
                  "Auditoriums",
                ],

                specifications: {
                  "System Specifications": {
                    "Processor": "ADI SHARC 21489 x 2",
                    "Raw Processing Capacity": "500 MIPS, 6 GFLOPS, 2 GMACS",
                    "Sampling Rate": "48 kHz ± 100 ppm",
                    "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.5 dB",
                    "Dynamic Range (A/D/A)": "113 dB (A-weighted)",
                    "THD + Noise": "< -95 dB (22.4 kHz BW, unweighted); 1 kHz @ +17 dBu, 0 dB gain",
                    "Channel Separation (A/D/A)": "110 dB @ 1 kHz, +24 dBu",
                    "Latency (A/D/A)": "<3 ms (input routed directly to output)",
                    "Delay Memory": "174 mono seconds",
                    "Analog Control Inputs": "0–3.3 VDC",
                    "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                    "Logic Outputs": "Low (0 V) when active Pulled high (5 V) when inactive",
                    "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
                    "Logic Output Maximum Output Current": "10 mA",
                    "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
                    "AEC Channel": "4-bus AEC",
                    "Maximum Stored Presets": "16 storable presets"
                  },
                  "Analog Inputs and Outputs": {
                    "Number of Analog Inputs": "8 switchable balanced mic or line level",
                    "Analog Input and output Connectors": "3.81 mm terminal blocks",
                    "Nominal Analog Input and output Level": "+4 dBu with 20 dB headroom",
                    "Analog Input and output Maximum Level": "+24 dBu (or +22.8 dBu into a 2k Ohm minimum load)",
                    "Analog Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps) with ±24 dB digital trim",
                    "Analog Mic Pre-amp EIN": "< -125 dB (with 150 Ohm source, 22.4 kHz BW)",
                    "Analog Input Impedance": "2k Ohms balanced, 1k Ohms unbalanced",
                    "Analog Phantom Power (per input)": "+48 VDC per input, max 10 mA",
                    "Analog Input Dynamic Range": ">115 dB, A-weighted",
                    "Analog Input THD + Noise": "<-100 dB (22.4 kHz BW, unweighted), 1 kHz @ +15 dBu, 0 dB gain",
                    "Analog Input Latency": "1 ms",
                    "Number of Analog Outputs": "8 balanced line level",
                    "Analog Output Impedance": "300 Ohms balanced, 150 Ohms unbalanced",
                    "Analog Output Dynamic Range": "117 dB, A-weighted",
                    "Analog Output THD + Noise": "< -97 dB (22.4 kHz BW, unweighted); 1 kHz, 0 dB gain, +8 dBu output",
                    "Analog Output Latency": "1.5 ms",
                    "Dimensions" : "482 x 260 x 45mm",
                    "AEC Number of Channels":  "4 Channels",
                    "AEC Tail Length 512 ms" : "suitable for medium rooms",
                    "AEC Convergence Rate" : "  Typically > 90 dB/sec",
                    "AEC Latency" : "16 mS",
                    "AEC Processors" : "ADI SHARC 21489@450 MHz"
                  },
                },

                controlSoftware: {
                title: "Control Software",
                name: "AuriControl+",
                description: "AuriControl+ is our dedicated configuration software, available for free download from our official website. Designed with a user-friendly interface, it allows users to easily tailor the matrix settings to match the specific needs of any installation. With this software, you can configure a wide range of parameters, including:",
                parameters: [
                  "Input gain",
                  "Expander",
                  "Compressor & Limiter",
                  "Auto Gain Control (AGC)",
                  "Equalizer",
                  "Figure Balancer",
                  "Active Noise Control (ANC)",
                  "Noise Suppression (ANS)",
                  "Matrix",
                  "Low & High Pass filters",
                  "Delayer",
                  "Output",
                  "Feedback (AFC)",
                  "Noise gate",
                  "Ducker",
                  "SPL",
                  "Share AM (Automixer)",
                  "Echo Canceller (AEC)",
                  "Camera Tracking"
                ]
              }
            },

          {
            id: "model_ep_b88",
            name: "EchoPrime-B88",
            description: "8 in, 8 out DSP",
            images: [
              "/images/Products/audio_dsp/EchoPrime-B88.webp",
              "/images/Products/audio_dsp/EchoPrime-B88(1).webp"
            ],

            overview: `The Resoundify EchoPrime-B88 is a high-performance Digital Signal Processor (DSP) equipped with an 8×8
                        input/output architecture, designed for crystal-clear audio management in a wide range of AV environments
                        including conference rooms, educational spaces, auditoriums, and corporate installations. Powered by the
                        robust BEIDOU DSP platform, it delivers professional-grade audio signal routing, processing, and mixing with
                        exceptional reliability and clarity.
                        The EchoPrime-B88 is a next-generation digital audio matrix processor designed to deliver exceptional signal
                        processing performance and routing flexibility for medium to large-scale AV integration projects. Powered by
                        the BEIDOU DSP core, this processor is engineered to meet the dynamic demands of professional audio
                        environments, including conference systems, educational networks, multi-room installations, and broadcastgrade setups.`
                        ,
              keyFeatures: [
                    "Professional SHARC DSP Core: Powered by ADI SHARC platform with semi-open architecture for flexibility and high-performance processing.",
                    "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                    "Intelligent Feedback Suppression: Independent adaptive feedback suppression on each channel automatically eliminates unwanted noise.",
                    "Auto Mixer & Gain Control: Built-in Gain Sharing Auto Mixer, Automatic Gain Control (AGC), and Audio Ducking (Ducker) for seamless level balancing.",
                    "Ambient Noise Compensation: Real-time gain adjustment based on room noise levels ensures consistent and comfortable listening even in fluctuating environments.",
                    "Comprehensive Audio Matrix: Flexible mixing matrix with input level control, channel duplication, linking, and grouping.",
                    "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                    "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
                  ],

              applications: [
                "Conference Rooms",
                "Boardrooms",
                "Auditoriums",
              ],

              specifications: {
                  "System Specifications": {
                    "Processor": "ADI SHARC 21489@450 MHz SIMD",
                    "Raw Processing Capacity": "500 MIPS, 6 GFLOPS, 2 GMACS",
                    "Sampling Rate": "48 kHz ± 100 ppm",
                    "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.5 dB",
                    "Dynamic Range (A/D/A)": "110 dB (A-weighted)",
                    "THD + Noise": "< -95 dB (22.4 kHz BW, unweighted); 1 kHz @ +17 dBu, 0 dB gain",
                    "Channel Separation (A/D/A)": "110 dB @ 1 kHz, +24 dBu",
                    "Latency (A/D/A)": "1.04 ms (input routed directly to output)",
                    "Delay Memory": "174 mono seconds",
                    "Analog Control Inputs": "0–3.3 VDC",
                    "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                    "Logic Outputs": "Low (0 V) when active Pulled high (5 V) when inactive",
                    "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
                    "Logic Output Maximum Output Current": "10 mA",
                    "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
                    "Ethernet Cable": "Standard CAT5/6, max 100 m (328 ft)",
                    "Maximum Stored Presets": "16 storable presets"
                  },
              },
            },
          {
        id: "model_ep_b1616",
        name: "EchoPrime-B1616",
        description: "16 in, 16 out DSP",
        images: [
          "/images/Products/audio_dsp/EchoPrime-B1616.webp",
          "/images/Products/audio_dsp/EchoPrime-B1616(1).webp",

        ],

        overview: `The Resoundify EchoPrime-B1616 is a professional-grade 16×16 digital audio signal processor built to meet
                  the demanding needs of networked audio systems, multi-room AV setups, and enterprise-grade installations.
                  Powered by a high-performance EchoPrime DSP engine and integrated with Dante audio networking, the
                  B1616 delivers exceptional flexibility, precision, and reliability in managing complex audio signal paths.
                  The EchoPrime-B1616 represents a new class of intelligent audio processors designed for the next generation
                  of IP-based AV systems. Combining a powerful EchoPrime DSP processing engine with full Dante™ digital
                  audio networking, it offers unmatched flexibility, audio fidelity, and system scalability for conference rooms,
                  auditoriums, control centers, broadcast facilities, and smart building infrastructures.`,

        keyFeatures: [
                "Professional SHARC DSP Core: Delivers powerful processing using Analog Devices’ renowned SHARC platform, ensuring low-latency performance and customization potential.",
                "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                "Intelligent Feedback Suppression: Adaptive per-channel feedback elimination for consistent, interference-free audio.",
                "Auto Mixer & Gain Control: Features Gain Sharing Auto Mixer, AGC, and Ducker for smooth level balancing in real-time.",
                "Ambient Noise Compensation: Dynamically adjusts levels based on background noise fluctuations.",
                "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
              ],

        applications: [
          "Conference Rooms",
                "Boardrooms",
                "Auditoriums",
        ],

       specifications: {
            "System Specifications": {
              "Processor": "ADI SHARC 21489@450 MHz SIMDx2",
              "Raw Processing Capacity": "400 MIPS, 1.6 GFLOPS",
              "Sampling Rate": "48 kHz ± 100 ppm",
              "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.3 dB",
              "Dynamic Range (A/D/A)": "113 dB (A-weighted)",
              "THD + Noise": "< -95 dB (22.4 kHz BW, unweighted); 1 kHz @ +17 dBu, 0 dB gain",
              "Channel Separation (A/D/A)": "108 dB @ 1 kHz, +24 dBu",
              "Latency (A/D/A)": "<6 ms (input routed directly to output)",
              "Delay Memory": "174 mono seconds",
              "Analog Control Inputs": "0–3.3 VDC",
              "Recommended External Control Potentiometer": "10k Ohm, linear taper",
              "Logic Outputs": "Low (0 V) when active Pulled high (5 V) when inactive",
              "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
              "Logic Output Maximum Output Current": "10 mA",
              "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
              "Maximum Stored Presets": "16 storable presets"
            },
            "Mechanical Specifications": {
              "Dimension": "482x260x45mm"
            }
          },
      },
    ],
    },
      {
        id: "series_vox_nova",
        name: "VoxNova Series",
        description: "Open structure DSPs with extensive Dante and AEC capabilities for flexible audio solutions.",
        image: "/images/Products/audio_dsp/VoxNova88.webp",
        features: ["Open Architecture", "Dante Integration", "Advanced AEC"],
        status: "New Arrival",
        type: "series",
        models: [
          {
            id: "model_vn_88",
            name: "VoxNova88",
            description: "Open Structure DSP 8X8, Dante 64X64, 8AEC",
            images: [
            "/images/Products/audio_dsp/VoxNova88.webp"
            ],
            overview: `The Resoundify VoxNova88 is a high-performance, open-architecture audio DSP processor tailored for
                professional AV and conferencing applications. It features 8x8 analog inputs and outputs, and supports
                Dante™ digital audio networking with 64x64 Dante I/O, enabling seamless integration across large-scale
                networked audio systems.
                The VoxNova88 represents the next generation in flexible, scalable DSP solutions for high-end audio
                environments. Built with a powerful processing core and an open architecture design, it empowers AV
                system integrators to tailor audio processing chains precisely to the needs of any space—whether it's a
                compact huddle room or a large conference environment.
                `,
            keyFeatures: [
              "Professional SHARC DSP Core: Powered by the Analog Devices SHARC platform, delivering ultra-fast parallel processing in a semi-open architecture environment for custom DSP design and signal chain optimization.",
              "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
              "Intelligent Feedback Suppression: Independent adaptive feedback suppression on each channel automatically eliminates unwanted noise.",
              "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation for clear communication in conferencing environments.",
              "Auto Mixer & Gain Control: Built-in Gain Sharing Auto Mixer, Automatic Gain Control (AGC), and Audio Ducking (Ducker) for seamless level balancing.",
              "Ambient Noise Compensation: Real-time Ambient Noise Compensator (ANC) adjusts audio levels based on environmental sound.",
              "Comprehensive Audio Matrix: Flexible mixing matrix with input level control, channel duplication, linking, and grouping.",
              "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
              "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
            ],
            applications: [
                "Conference Rooms",
                "Boardrooms",
                "Auditoriums",
            ],
           specifications: {
              "System Specifications": {
                "Processor": "ADI SHARC 21569@1GHz SIMD*2",
                "Raw Processing Capacity": "500 MIPS, 6 GFLOPS, 2 GMACS",
                "Sampling Rate": "48 kHz ± 100 ppm",
                "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.3 dB",
                "Dynamic Range (A/D/A)": "115 dB (A-weighted)",
                "THD + Noise": "<0.003%@4dBu",
                "Channel Separation (A/D/A)": "110 dB @ 1 kHz, +24 dBu",
                "Latency (A/D/A)": "<4 ms (input routed directly to output)",
                "Delay Memory": "174 mono seconds",
                "Analog Control Inputs": "0–3.3 VDC",
                "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                "Logic Outputs": "Low (0 V) when active Pulled high (5 V) when inactive",
                "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
                "Logic Output Maximum Output Current": "10 mA",
                "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
                "Maximum Stored Presets": "1,000 storable presets"
              },
              "Analog Inputs and Outputs": {
                "Number of Analog Inputs": "8 switchable balanced mic or line level",
                "Analog Input and output Connectors": "3.81 mm terminal blocks",
                "Nominal Analog Input and output Level": "+4 dBu with 20 dB headroom",
                "Analog Input and output Maximum Level": "+24 dBu (or +22.8 dBu into a 2k Ohm minimum load)",
                "Analog Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps) with ±24 dB digital trim",
                "Analog Mic Pre-amp EIN": "< -125 dB (with 150 Ohm source, 22.4 kHz BW)",
                "Analog Input Impedance": "5.4k Ohms balanced, 3k Ohms unbalanced",
                "Analog Phantom Power (per input)": "+48 VDC per input, max 10 mA",
                "Analog Input Dynamic Range": ">115 dB, A-weighted",
                "Analog Input THD + Noise": "<-100 dB (22.4 kHz BW, unweighted), 1 kHz @ +15 dBu, 0 dB gain",
                "Analog Input Latency": "2.5 ms",
                "Number of Analog Outputs": "8 balanced line level",
                "Analog Output Impedance": "600 Ohms balanced, 300 Ohms unbalanced",
                "Analog Output Dynamic Range": "115 dB, A-weighted",
                "Analog Output THD + Noise": "< -97 dB (22.4 kHz BW, unweighted); 1 kHz, 0 dB gain, +8 dBu output",
                "Analog Output Latency": "1.5 ms"
              },
              "AEC Specifications": {
                "Number of Channels": "8 Channels",
                "AEC Tail Length": "512 ms – suitable for medium rooms",
                "AEC Convergence Rate": "Typically > 90 dB/sec",
                "AEC Latency": "16 mS",
                "AEC Processors": "ADI SHARC 21569@1GHz"
              },
            },
            controlSoftware: {
            title: "Control Software",
            name: "VoxControl+",
            description: "VoxControl+ is our dedicated configuration software, available for free download from our official website. Designed with a user-friendly interface, it allows fine-tuning to easily tailor the matrix settings to match the specific needs of any installation. With this software, you can configure a wide range of parameters, including:",
            parameters: [
              "Input gain",
              "Expander",
              "Compressor & Limiter",
              "Auto Gain Control (AGC)",
              "Equalizer",
              "Figure Balancer",
              "Active Noise Control (ANC)",
              "Noise Suppression (ANS)",
              "Matrix",
              "Low & High Pass filters",
              "Delayer",
              "Output",
              "Feedback (AFC)",
              "Noise gate",
              "Ducker",
              "SPL",
              "Share AM (Automixer)",
              "Echo Canceller (AEC)",
              "Camera Tracking"
            ]
          },
            },
          {
            id: "model_vn_1616",
            name: "VoxNova1616",
            description: "Open Structure DSP 16X16, Dante 64X64, 8AEC",
            images: [
              "/images/Products/audio_dsp/VoxNova1616.webp"
            ],
            overview: `The Resoundify VoxNova1616 is a powerful and flexible open-architecture DSP solution designed for
                      modern audio installations that demand high channel count, precise audio control, and seamless network
                      integration. Featuring 16 analog inputs and 16 analog outputs, along with 64x64 Dante™ audio networking, it
                      is ideal for conference rooms, multi-zone AV systems, and networked audio environments.
                      Built on a professional SHARC DSP platform, the VoxNova1616 provides 8 channels of full-duplex Acoustic
                      Echo Cancellation (AEC), ensuring crystal-clear voice communication in even the most acoustically complex
                      spaces. The open structure allows integrators to fully customize audio paths, filters, logic control, and DSP
                      behavior using a graphical programming interface.
                      The VoxNova1616 is engineered to meet the evolving needs of enterprise AV systems, delivering unparalleled`,

            keyFeatures: [
                  "Professional SHARC DSP Core: Powered by Analog Devices’ SHARC platform, the VoxNova1616 delivers ultra-fast signal processing with a semi-open architecture that supports complete customization of audio workflows and routing.",
                  "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
                  "Intelligent Feedback Suppression: Independent adaptive feedback suppression on each channel automatically eliminates unwanted noise.",
                  "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation for clear communication in conferencing environments.",
                  "Auto Mixer & Gain Control: Built-in Gain Sharing Auto Mixer, Automatic Gain Control (AGC), and Audio Ducking (Ducker) for seamless level balancing.",
                  "Ambient Noise Compensation: Real-time Ambient Noise Compensator (ANC) adjusts audio levels based on environmental sound.",
                  "Comprehensive Audio Matrix: Flexible mixing matrix with input level control, channel duplication, linking, and grouping.",
                  "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
                  "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
                ],

            applications: [
              "Conference Rooms",
                "Boardrooms",
                "Auditoriums",
            ],

            specifications: {
                  "System Specifications": {
                    "Processor": "ADI SHARC 21569@1GHz SIMD*2",
                    "Raw Processing Capacity": "500 MIPS, 6 GFLOPS, 2 GMACS",
                    "Sampling Rate": "48 kHz ± 100 ppm",
                    "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.3 dB",
                    "Dynamic Range (A/D/A)": "115 dB (A-weighted)",
                    "THD + Noise": "<0.003%@4dBu",
                    "Channel Separation (A/D/A)": "108 dB @ 1 kHz, +24 dBu",
                    "Latency (A/D/A)": "<4 ms (input routed directly to output)",
                    "Delay Memory": "174 mono seconds",
                    "Analog Control Inputs": "0–3.3 VDC",
                    "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                    "Logic Outputs": "Low (0 V) when active Pulled high (5 V) when inactive",
                    "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
                    "Logic Output Maximum Output Current": "10 mA",
                    "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
                    "Maximum Stored Presets": "1,000 storable presets"
                  },
                  "Analog Inputs and Outputs": {
                    "Number of Analog Inputs": "16 switchable balanced mic or line level",
                    "Analog Input and output Connectors": "3.81 mm terminal blocks",
                    "Nominal Analog Input and output Level": "+4 dBu with 20 dB headroom",
                    "Analog Input and output Maximum Level": "+24 dBu (or +22.8 dBu into a 2k Ohm minimum load)",
                    "Analog Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps) with ±24 dB digital trim",
                    "Analog Mic Pre-amp EIN": "< -125 dB (with 150 Ohm source, 22.4 kHz BW)",
                    "Analog Input Impedance": "5.4k Ohms balanced, 1k Ohms unbalanced",
                    "Analog Phantom Power (per input)": "+48 VDC per input, max 10 mA",
                    "Analog Input Dynamic Range": ">115 dB, A-weighted",
                    "Analog Input THD + Noise": "<-100 dB (22.4 kHz BW, unweighted), 1 kHz @ +15 dBu, 0 dB gain",
                    "Analog Input Latency": "2.5ms",
                    "Number of Analog Outputs": "16 balanced line level",
                    "Analog Output Impedance": "600 Ohms balanced, 300 Ohms unbalanced",
                    "Analog Output Dynamic Range": "115 dB, A-weighted",
                    "Analog Output THD + Noise": "< -97 dB (22.4 kHz BW, unweighted); 1 kHz, 0 dB gain, +8 dBu output",
                    "Analog Output Latency": "1.5 ms"
                  },
                  "AEC Specifications": {
                    "Number of Channels": "8 Channels",
                    "AEC Tail Length": "512 ms – suitable for medium rooms",
                    "AEC Convergence Rate": "Typically > 90 dB/sec",
                    "AEC Latency": "16 mS",
                    "AEC Processors": "ADI SHARC 21569@1GHz"
                  },
                },

            controlSoftware: {
            title: "Control Software",
            name: "VoxControl+",
            description: "VoxControl+ is our dedicated configuration software, available for free download from our official website. Designed with a user-friendly interface, it allows fine-tuning to easily tailor the matrix settings to match the specific needs of any installation. With this software, you can configure a wide range of parameters, including:",
            parameters: [
              "Input gain",
              "Expander",
              "Compressor & Limiter",
              "Auto Gain Control (AGC)",
              "Equalizer",
              "Figure Balancer",
              "Active Noise Control (ANC)",
              "Noise Suppression (ANS)",
              "Matrix",
              "Low & High Pass filters",
              "Delayer",
              "Output",
              "Feedback (AFC)",
              "Noise gate",
              "Ducker",
              "SPL",
              "Share AM (Automixer)",
              "Echo Canceller (AEC)",
              "Camera Tracking"
            ]
          },

          },
          {
            id: "model_vn_128f",
            name: "VoxNova128F",
            description: "Open Structure DSP 12X8, Dante 64X64, 8 flex channels, 12AEC",
            images: [
              "/images/Products/audio_dsp/VoxNova128F.webp"
            ],

            overview: `The Resoundify VoxNova128F is a next-generation audio DSP processor designed for advanced AV,
              conferencing, and networked audio environments. With 12 analog inputs, 8 analog outputs, and 64x64
              Dante™ digital audio networking, it delivers scalable, crystal-clear audio performance for demanding
              applications. Equipped with 12 channels of full-duplex Acoustic Echo Cancellation (AEC) and 8 Flex Channels
              (user-assignable as AEC, line in/out, or virtual processing), the VoxNova128F provides unmatched
              adaptability in voice and video conferencing systems.
              Built on a professional SHARC DSP platform, this unit offers open architecture signal flow customization,
              powerful matrix mixing, and real-time adaptive processing. The VoxNova128F is the ideal backbone for
              environments that require dynamic audio routing, high channel density, and superior clarity — including
              boardrooms, command centers, hybrid learning spaces, and corporate AV networks.
              `,

           keyFeatures: [
            "Professional SHARC DSP Core: Built on the ADI SHARC platform with a semi-open architecture, the VoxNova128F delivers exceptional signal processing power and flexibility for custom audio flow designs and advanced configurations.",
            "High-Quality Audio Processing: 24-bit/48kHz audio resolution ensures crystal-clear sound quality across all channels.",
            "Intelligent Feedback Suppression: Independent adaptive feedback suppression on each channel automatically eliminates unwanted noise.",
            "Full-Duplex AEC & ANC: Integrated Adaptive Echo Cancellation and Active Noise Cancellation for clear communication in conferencing environments.",
            "Auto Mixer & Gain Control: Built-in Gain Sharing Auto Mixer, Automatic Gain Control (AGC), and Audio Ducking (Ducker) for seamless level balancing.",
            "Ambient Noise Compensation: Real-time Ambient Noise Compensator (ANC) adjusts audio levels based on environmental sound.",
            "Comprehensive Audio Matrix: Flexible mixing matrix with input level control, channel duplication, linking, and grouping.",
            "Expandable Control Options: 8 configurable GPIOs (input/output/ADC), RS-232 & UDP support with assignable ports for central control systems.",
            "Multi-Platform Compatibility: Supports both iOS and Windows OS with dual USB audio interface for recording and conferencing."
          ],

            applications: [
               "Conference Rooms",
                "Boardrooms",
                "Auditoriums",
            ],

            specifications: {
              "System Specifications": {
                "Processor": "ADI SHARC 21569@1GHz SIMD*2",
                "Raw Processing Capacity": "500 MIPS, 6 GFLOPS, 2 GMACS",
                "Sampling Rate": "48 kHz ± 100 ppm",
                "Frequency Response (A/D/A)": "20 Hz – 20 kHz ± 0.5 dB",
                "Dynamic Range (A/D/A)": "117 dB (A-weighted)",
                "THD + Noise": "<0.003%@4dBu",
                "Channel Separation (A/D/A)": "108 dB @ 1 kHz, +24 dBu",
                "Latency (A/D/A)": "<1 ms (input routed directly to output)",
                "Delay Memory": "174 mono seconds",
                "Analog Control Inputs": "0–3.3 VDC",
                "Recommended External Control Potentiometer": "10k Ohm, linear taper",
                "Logic Outputs": "Low (0 V) when active Pulled high (5 V) when inactive",
                "Logic Output Maximum External Power Supply / Current Sinking": "24 VDC / 50 mA",
                "Logic Output Maximum Output Current": "10 mA",
                "RS-232 Accessory Serial I/O": "57.6 kbps (default), 8 data bits, 1 stop bit, no parity, Straight-through wiring; pins 2, 3, 5 used",
                "Maximum Stored Presets": "1,000 storable presets"
              },
              "Analog Inputs and Outputs": {
                "Number of Analog Inputs": "12 switchable balanced mic or line level",
                "Analog Input and output Connectors": "3.81 mm terminal blocks",
                "Nominal Analog Input and output Level": "+4 dBu with 20 dB headroom",
                "Analog Input and output Maximum Level": "+24 dBu (or +22.8 dBu into a 2k Ohm minimum load)",
                "Analog Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps) with ±24 dB digital trim",
                "Analog Mic Pre-amp EIN": "< -125 dB (with 150 Ohm source, 22.4 kHz BW)",
                "Analog Input Impedance": "5.4k Ohms balanced, 1k Ohms unbalanced",
                "Analog Phantom Power (per input)": "+48 VDC per input, max 10 mA",
                "Analog Input Dynamic Range": ">117 dB, A-weighted",
                "Analog Input THD + Noise": "<-100 dB (22.4 kHz BW, unweighted), 1 kHz @ +15 dBu, 0 dB gain",
                "Analog Input Latency": "0.30 ms",
                "Number of Analog Outputs": "8 balanced line level",
                "Analog Output Impedance": "600 Ohms balanced, 300 Ohms unbalanced",
                "Analog Output Dynamic Range": "117 dB, A-weighted",
                "Analog Output THD + Noise": "< -97 dB (22.4 kHz BW, unweighted); 1 kHz, 0 dB gain, +8 dBu output",
                "Analog Output Latency": "0.30 ms"
              },
              "AEC Specifications": {
                "Number of Channels": "12 Channels",
                "AEC Tail Length": "512 ms – suitable for medium rooms",
                "AEC Convergence Rate": "Typically > 90 dB/sec",
                "AEC Latency": "16 mS",
                "AEC Processors": "ADI SHARC 21569@1GHz"
              },
            },

          controlSoftware: {
          title: "Control Software",
          name: "VoxControl+",
          description: "VoxControl+ is our dedicated configuration software, available for free download from our official website. Designed with a user-friendly interface, it allows fine-tuning to easily tailor the matrix settings to match the specific needs of any installation. With this software, you can configure a wide range of parameters, including:",
          parameters: [
            "Input gain",
            "Expander",
            "Compressor & Limiter",
            "Auto Gain Control (AGC)",
            "Equalizer",
            "Figure Balancer",
            "Active Noise Control (ANC)",
            "Noise Suppression (ANS)",
            "Matrix",
            "Low & High Pass filters",
            "Delayer",
            "Output",
            "Feedback (AFC)",
            "Noise gate",
            "Ducker",
            "SPL",
            "Share AM (Automixer)",
            "Echo Canceller (AEC)",
            "Camera Tracking"
          ]
        },
          },
        ],
      },
      {
        id: "series_multiplayer",
        name: "Multiplayer Series",
        description: "Multi-channel audio web streamers with scheduling and Dante virtual sound card support.",
        image: "/images/Products/audio_dsp/R-MP8.jpg",
        features: ["Web Streaming", "Dante Virtual Sound Card", "Scheduling & Playback"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_r_mp8",
            name: "R-MP8",
            description: "8-Channel Web Audio Streamer with Scheduler & Dante",
            images: [
              "/images/Products/audio_dsp/R-MP8.jpg"
            ]
          },
          {
            id: "model_r_mp16",
            name: "R-MP16",
            description: "16-Channel Web Audio Streamer with Scheduler & Dante",
            images: [
              "/images/Products/audio_dsp/R-MP16.jpg"
            ]
          },
        ],
      },
    ],
  },
  {
    id: "brand_av_over_ip_solutions",
    name: "AV over IP Solutions",
    category: "av_over_ip_solutions",
    description: "Seamless audio-visual distribution over IP networks for various applications.",
    image: "https://placehold.co/400x300/F0F4F8/EF4444?text=AV+over+IP+Brand",
    type: "brand",
    series: [
      {
        id: "series_streamlite",
        name: "StreamLite Series",
        description: "Efficient H.264 AV over IP solutions with multi-screen capability.",
        image: "/images/Products/av_over_ip_soln/IPM2000.webp",
        features: ["H.264 Encoding", "Multi-screen Capability", "4K@30Hz"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_sl_4k30",
            name: "StreamLite-4k30",
            description: "H.264 with up to 4 screen capability, 4K@30",
            images: [
              "/images/Products/av_over_ip_soln/IPM2000.webp",
            ],

            overview: "The Resoundify StreamLite-4k30 4K Encoding and Decoding Integrated IP Matrix integrates advanced video compression, network, visualization, and centralized control technologies. It builds an IP-based system combining video splicing, KVM management, audio processing, and encoding/decoding with distributed, visualized, and server-less features. Supporting HDMI 4K@30Hz input/output, multi-screen splicing, and IR, I/O and RS-232 control, it ensures synchronization, real-time performance, and vivid color reproduction. This cost-effective solution simplifies wiring and offers visual control and decentralized operation for HD/1080p applications. Ideal for conference centers, exhibition halls, command centers, and transportation hubs.",

            keyFeatures: [
              "Integrated Encoder and Decoder: Combines encoder and decoder functions in one unit with DIP-switch to change the mode.",
              "Support for H.264 and H.265 Protocols: Compatible with H.264 and H.265 encoding and decoding protocols.",
              "High Resolution Support: HDMI interface supports up to 3840x2160@30Hz for input and output.",
              "Multiple Controlling Method: I/O, IR, RS-232",
              "Seamless Switching",
              "Visualization Operation",
              "Ultra-thin Design: The height is only 16mm.",
              "Multi-channel Decoding: Supports at least 4 images displaying in a single screen."
            ],

            applications: [
             "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

            specifications: {
              "Encoder Specifications": {
                "Video Input": "1x HDMI IN (Type-A Female Port), up to 3840x2160@30Hz",
                "Digital Audio Input": "1x HDMI IN (Type-A Female Port)",
                "Analog Audio Input": "1x 3-Pin Terminal Block",
                "Video Output": "1x RJ45 for IP Stream Output; 1x HDMI Loopout (Type-A Female Port)",
                "Encoding Performance": "3840x2160@30Hz x1"
              },
              "Decoder Specifications": {
                "Video Input": "1x RJ-45 (1000Mbps) for IP Stream Input",
                "Video Output": "1x HDMI (Type-A Female Port), up to 4K@30Hz",
                "Digital Audio Output": "1x HDMI (Type-A Female Port)",
                "Analog Audio Output": "1x 3-Pin Terminal Block",
                "Decoding Performance": "3840x2160@30Hz x1"
              },
              "General Specifications": {
                "Control Connector": "1 x 3-Pin Terminal Block for I/O or IR; 1 x 3-Pin Terminal Block for RS-232",
                Codec: "H.264, H.265",
                "Communication Protocols": "TCP/IP, UDP",
                "Bit Depth": "8-bit",
                Latency: "Less than 150ms",
                "Operation Temperature": "0°C ~ +50°C",
                "Storage Temperature": "-10°C ~ +70°C",
                "Relative Humidity": "10% ~ 90%",
                Power: "DC 12V/2A, or PoE",
                "Power Consumption": "Unknown",
                "Dimension (W x H x D)": "152mm x 16mm x 104mm",
                "Net Weight": "285g"
              }
            },
          },
        ],
      },
      {
        id: "series_streamcore",
        name: "StreamCore Series",
        description: "High-quality 4K60 4:4:4/HDR AV over IP with JPEG2K compression and advanced features.",
        image: "/images/Products/av_over_ip_soln/StreamCore-ENDE.webp",
        features: ["4K60 HDR", "JPEG2K Compression", "USB & Audio Support", "Dante Management"],
        status: "In Stock",
        type: "series",
        models: [
          // {
          //   id: "model_sc_en",
          //   name: "StreamCore-EN",
          //   description: "4K60 4:4:4/HDR AV over IP JPEG2K Encoder - Basic Version",
          //   images: [
          //     "/images/Products/av_over_ip_soln/EN.png",
          //   ]
          // },
          // {
          //   id: "model_sc_dn",
          //   name: "StreamCore-DN",
          //   description: "4K60 4:4:4/HDR AV over IP JPEG2K Decoder - Basic Version",
          //   images: [
          //     "/images/Products/av_over_ip_soln/DN.png",
          //   ]
          // },
          {
            id: "model_sc_enkvm",
            name: "StreamCore-EN/DE",
            description: "4K60 4:4:4/HDR AV over IP JPEG2K Encoder / Decoder",
            images: [
              "/images/Products/av_over_ip_soln/StreamCore-ENDE.webp"
            ],

            overview: "The Resoundify StreamCore-EN is a high-performance 4K60 4:4:4/HDR AV over IP Encoder and Decoder based on JPEG2000 technology, designed for ultra-low latency and visually lossless video transmission. It integrates both copper and fiber network interfaces in a single unit, providing flexibility for various installation environments. The encoder supports up to 4K60 4:4:4 video input with audio embedding or extraction, while the decoder outputs up to 4K60 4:4:4 with audio extraction capabilities. The product also supports multiple audio return options including ARC, eARC, S/PDIF, and analog. Additionally, it features USB 2.0, KVM, and camera connectivity, along with bi-directional RS-232, IR, and CEC control interfaces. Two built-in relay channels and two I/O ports are provided for external contact control. A built-in MJPEG substream allows real-time video previewing via third-party applications using API commands. The system runs on a Linux-based software platform and supports intelligent network control over 1G Ethernet switches.",

            keyFeatures: [
              "4K60 Ultra HD Video: Supports resolutions up to 4096x2160 @ 60fps, delivering smooth, high-definition video performance.",
              "4:4:4 Chroma Subsampling: Preserves full color data for precise image quality, ideal for detail-critical applications like design, broadcast, or simulation.",
              "HDR Support: Compatible with HDR10 and HLG formats to deliver enhanced contrast, brightness, and color depth.",
              "JPEG2000 Compression: Uses visually lossless, low-latency intraframe compression—perfect for real-time AV distribution.",
              "AV over IP (1G/10G Ethernet): Streams high-quality video over standard IP networks using multicast or unicast protocols.",
              "Embedded Audio Transmission: Supports digital audio embedded in the video stream for synchronized AV distribution.",
              "Web-Based Management Interface: Simple configuration, monitoring, and firmware updates via an intuitive browser GUI.",
              "Control System Integration: RS-232 support for integration with control platforms like Crestron, AMX, Q-SYS, etc.",
              "Low Latency Performance: End-to-end latency as low as 40 ms, suitable for live video, conferencing, and command centers.",
              "Compact & Reliable Design: Fanless, robust form factor with wall or rack mounting; built for 24/7 operation in demanding environments."
            ],

            applications: [
              "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

            specifications: {
              "Technical Specifications": {
                "HDMI Compliance": "HDMI 2.0b",
                "HDCP Compliance": "HDCP 2.2",
                "Video Bandwidth": "18Gbps",
                "Video Compression Standard": "JPEG2000",
                "Network Video Bandwidth": "1G",
                "Video Resolution": "Up to 4K@60Hz 4:4:4",
                "IR Frequency": "Wideband 20K - 60KHz"
              },
              "Connections - Encoder": {
                Input: "1x HDMI IN [Type A, 19-pin male]; 1x L/R AUDIO IN [3-pin 3.81mm Phoenix connector]",
                Output: "1x HDMI OUT [Type A, 19-pin male]; 1x L/R AUDIO OUT (3-pin 3.81mm Phoenix connector)",
                Control: "1x RS-232 (3-pin 3.81mm Phoenix connector); 1x LAN (PoE) (RJ45 jack); 1x IR IN (3.5mm Audio Jack); 1x IR OUT (3.5mm Audio Jack)"
              },
              "Connections - Decoder": {
                Output: "1x HDMI OUT [Type A, 19-pin male]; 1x L/R AUDIO OUT [3-pin 3.81mm Phoenix connector]",
                Control: "1x RS-232 (3.81mm Phoenix connector); 1x LAN (PoE) [RJ45 jack]; 1x IR IN [3.5mm Audio Jack]; 1x IR OUT [3.5mm Audio Jack]"
              },
              "Mechanical Specifications": {
                Housing: "Metal Enclosure",
                Color: "Black",
                Dimensions: "204mm [W] x 136mm [D] x 25.5mm [H]",
                Weight: "Encoder: 631g",
                "Power Supply": "Input: AC100-240V 50/60Hz, Output: DC 12V/1A (US/EU standards, CE/FCC/UL certified)",
                "Power Consumption (Max)": "Encoder: 8.52W",
                "Operation Temperature": "0°C to 40°C (32°F to 104°F)",
                "Storage Temperature": "-20°C to 60°C (-4°F to 140°F)",
                "Relative Humidity": "20-90% RH (no condensation)"
              }
            },
          },
          // {
          //   id: "model_sc_dnkvm",
          //   name: "StreamCore-DNKVM",
          //   description: "4K60 4:4:4/HDR w/USB and Audio over IP JPEG2K Decoder",
          //   images: [
          //     "/images/Products/av_over_ip_soln/DNKVM.png",
          //   ]
          // },
          {
            id: "model_sc_wp",
            name: "StreamCore-WP",
            description: "4K60 4:4:4/HDR w/USB and Audio over IP JPEG2K HDMI/USB-C Wall plate Encoder",
            images: [
              "/images/Products/av_over_ip_soln/WP.webp"
            ],

            overview: "The Resoundify StreamCore-WP is a high-performance, wall-mountable HDMI 2.0a encoder featuring dual inputs (HDMI and USB-C), designed for seamless IP-based AV distribution. Supporting visually lossless JPEG 2000 compression, it delivers 4K60 4:4:4 video with HDR over standard 1G Ethernet infrastructure. This encoder integrates USB, audio, and RS-232 control (via 3-pin Phoenix/Euroblock), making it ideal for modern collaboration spaces, classrooms, and meeting rooms. It is PoE-powered for simplified installation and requires a compatible StreamCore Decoder for operation. The StreamCore-WP is a next-generation, wall plate-style AV encoder engineered for high-performance IP-based audiovisual distribution. Designed for modern AV environments, it features dual video inputs (HDMI 2.0a and USB-C), enabling flexible source connectivity in conference rooms, classrooms, lecture halls, and control centers.",

            keyFeatures: [
              "Supports 4K60 4:4:4 HDR Video: High-resolution video with full color sampling and High Dynamic Range for exceptional image quality.",
              "Dual Input: HDMI 2.0a and USB-C: Flexible connectivity for modern devices including laptops, media players, and USB peripherals.",
              "JPEG 2000 Compression for IP Streaming: Efficient, visually lossless video compression over standard 1Gb Ethernet networks.",
              "USB and Audio over IP: Integrates USB data and high-quality audio streaming within the IP network for unified AV distribution.",
              "POE (Power over Ethernet) Support: Simplifies installation with power and data over a single Ethernet cable.",
              "HDCP 2.3 Encryption: Ensures secure content protection for protected media streams.",
              "RS-232 Serial Control (3-pin Phoenix): Enables device control and automation integration.",
              "Wall plate Form Factor: Compact and professional flush-mount design suitable for conference rooms and collaboration spaces.",
              "Compatible with StreamCore Decoders: Works seamlessly with complementary StreamCore decoder units for complete AV over IP solutions."
            ],

            applications: [
              "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

           specifications: {
              "Video & Audio": {
                "Video Inputs": "HDMI 2.0a (Type A) and USB-C",
                "Video Resolutions": "Supports all major VESA resolutions and variations including: VGA: 640x480 (4:3), SVGA: 800x600 (4:3), XGA: 1024x768 (4:3), SXGA: 1280x1024 (5:4), WXGA: 1366x768 (16:9), SXGA+: 1440x1080 (4:3), UXGA: 1600x1200 (4:3), QXGA: 2048x1536 (4:3), 1080p/i, 720p, Ultra HD 3840x2160 (16:9), 4K: 4096x2160 (16:10)",
                "Color Depth": "24 bit, 30 bit",
                "Chroma Subsampling": "4:4:4",
                HDR: "HDR10, HLG",
                "Audio Inputs": "Embedded via HDMI/USB-C, Analog L/R via 3-pin Phoenix"
              },
              "Control & Network": {
                Serial: "Full Duplex up to 115.2 kbps, 3-pin Phoenix connector",
                USB: "USB 2.0, 2x USB Type-C",
                "Ethernet (PoE)": "1 Gb for Video/Audio/Control, RJ45 port",
                "Network Distance": "Cat6a: 328 ft (100 m)",
                "Copy Protection/Security": "HDCP 2.3, 802.1X compatible"
              },
              "Mechanical & Power": {
                "Power Consumption": "Approximately 7W",
                "Power Supply": "PoE (802.3af/at) or optional 20V 6A via 2-pin Phoenix (U60WPPS)",
                Dimensions: "Standard 2-Gang box (90mm Wide x 105.6mm High x 47mm Deep)",
                "Operating Temperature": "0°C to +45°C (+32°F to +113°F)",
                "Storage Temperature": "-20°C to +70°C (-4°F to +158°F)",
                Humidity: "10% – 90%, non-condensing"
              },
            },
          },
          {
            id: "model_sc_cb",
            name: "StreamCore-CB",
            description: "Control box for with Dante management",
            images: [
              "/images/Products/av_over_ip_soln/CB.webp"
            ],

            overview: "The Resoundify StreamCore-CB is a professional-grade control box designed for seamless integration and management of Dante-enabled audio systems. It serves as the central hub for routing, controlling, and monitoring digital audio signals over IP networks, ensuring low-latency, high-quality audio transmission. With its reliable hardware design and intuitive control interface, StreamCore-CB is ideal for live sound, broadcast, corporate AV, and installed sound applications where precise Dante network management is essential. Equipped with intuitive network management tools, the StreamCore-CB simplifies system setup, device discovery, channel mapping, and audio distribution. It is perfect for live event venues, broadcast studios, conference facilities, houses of worship, and integrated AV installations. With robust build quality and a user-friendly interface, it allows technicians and operators to manage complex audio networks with confidence, efficiency, and precision.",

            keyFeatures: [
              "Simple Project Setup: Easily create, control, and manage the entire system.",
              "Flexible IP Configuration: Supports Auto, DHCP, and Manual IP settings.",
              "Enhanced Security: Compatible with HTTPS, SSH, and SFTP protocols.",
              "User-Friendly Web Interface: Built-in Web GUI with drag-and-drop operation.",
              "Media Preview Support: Enables image preview within the system.",
              "Comprehensive Control Options: Supports video, audio, RS-232, IR, and KVM control for distributed systems.",
              "Dual Network Ports: VIDEO LAN port supports PoE, with separation of control and multicast networks.",
              "Third-Party Integration: Supports LAN/RS-232 control and integration with external central control systems.",
              "IR Signal Support: Receives IR signals via 3.5mm audio jack (12V level).",
              "Versatile GPIO Ports: 8-channel GPIO control (5V or 12V selectable).",
              "Robust Protection Design: Multiple circuit protection with lightning and ESD safeguards.",
              "24/7 Reliability: Engineered for continuous, stable operation."
            ],

            applications: [
              "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

            specifications: {
              "Technical Specifications": {
                "Network Bandwidth": "100 Mbps",
                "Transmission Distance": "up to 100m (CAT5e/6/6A/7)",
                "Control Ports": "2 x 100M LAN (RJ45, VIDEO LAN supports PoE); 1 x IR IN (3.5mm audio jack, 12V level); 1 x Digital I/O (6-pin 3.81 mm Phoenix connector); 1 x RS-232 (3-pin 3.81mm Phoenix connector)",
                "Power Supply": "12V/1A DC",
                "Power Consumption": "Max 4.5W",
                "Operating Temperature": "0°C to 40°C (32°F to 104°F)",
                "Storage Temperature": "-20°C to 60°C (-4°F to 140°F)",
                "Relative Humidity": "20% - 90% RH (non-condensing)"
              },
              "Mechanical Specifications": {
                Dimensions: "204mm (W) x 98mm (D) x 21mm (H)",
                "Housing Material": "Metal enclosure",
                Color: "Black",
                Weight: "509g"
              }
            },
          },
          {
            id: "model_sc_cbd",
            name: "StreamCore-CBD",
            description: "Control box for JPEG2K Gen 1/2 IP",
            images: [
              "/images/Products/av_over_ip_soln/CBD.webp"
            ]
          },
        ],
      },
      {
        id: "series_streampro",
        name: "StreamPro Series",
        description: "SDVoE solutions for advanced 4K60 A/V over IP with KVM and video wall capabilities.",
        image: "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AT.webp",
        features: ["SDVoE Technology", "4K60 4:4:4 HDR", "USB KVM", "Video Wall/Multiview"],
        status: "In Stock",
        type: "series",
        models: [
         
         {
            id: "model_sp_fiber_kvm_2",
            name: "StreamPro-100ASENDE",
            description: "SDVoE AVP2000 IP solution Seamless Matrix/Video Wall/Multiview -- Fiber Port",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AS-DEC.webp"
            ],

            overview: "The StreamPro-100ASEN/DE is an SDVoE-compliant, all-in-one AV over IP solution that provides highest-quality, uncompressed 4K60 and zero-frame latency audio/video extension over a standard 10G Fiber Network Switch. It can transfer advanced HDMI content such as HDR (high dynamic range), full color-depth, and multi-channel HD Bitstream audio. Multiple control and data signals can be transmitted along with audio and video signals simultaneously, including RS-232 and 1G Ethernet. The product features a 10G fiber port, which can extend signals up to 40km via a single-mode fiber cable, or 300m via a multi-mode fiber cable. The 1G LAN port is for product management or Ethernet extension. The encoder supports HDMI loop out, the decoder HDMI output supports video scaling. The product supports bi-directional analog stereo audio pass-through and RS-232 with 12V voltage output on connector. This product combines multiple encoders/decoders with one or more 10GbE fiber switches to form an ideal IP solution for distributed 4K60 video matrix, multiview systems, or video wall systems.",

            keyFeatures: [
              "Separate Encoder/Decoder Design: Built with independent modules and a 10G fiber optical port for high-speed and stable signal transmission.",
              "4K UHD Video Resolution: Supports 4K2K@60Hz 4:4:4 video quality, fully compliant with HDMI 2.0b standards.",
              "HDCP 2.2 Compliance: Ensures secure transmission of protected 4K content with 18Gbps video bandwidth.",
              "HDR Format Compatibility: Enables seamless HDR10, Dolby Vision, and HLG signal pass-through for enhanced color and contrast.",
              "Comprehensive Audio Format Support: Handles LPCM2/5.1/7.1, Dolby Digital, Dolby Digital+, Dolby TrueHD, Dolby Atmos, DTS 5.1, DTS-HD Master Audio, and DTS:X.",
              "Zero-Frame Latency Mode: Provides real-time video and audio transmission without perceptible delay.",
              "HDMI Loop Out (Encoder): Allows local monitoring or cascading connections directly from the encoder.",
              "Dual Network Ports: Equipped with one 1G LAN port and one 10G fiber port for flexible network configurations.",
              "Comprehensive Control Options: Offers control via CEC, RS-232, TCP/IP, and Web GUI for easy system integration.",
              "10G Managed Network Compatibility: Designed to operate seamlessly within 10G managed network switch environments.",
              "Dedicated IP Controller Compatibility: Fully compatible with a dedicated IP controller box for centralized management."
            ],

            applications: [
              "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

            specifications: {
              "System Specifications": {
                "HDMI Compliance": "HDMI 2.0b",
                "HDCP Compliance": "HDCP 2.2",
                "Video Bandwidth": "594MHz / 18Gbps",
                "Video Compression Standard": "SDVoE",
                "Video Network Bandwidth": "10Gbps (SFP+)",
                "Audio Latency": "Zero latency",
                "Video Latency": "Zero latency",
                "Input Video Resolution": "640x480p60Hz, 800x600p60Hz, 1024x768p60Hz, 1280x1024p60Hz, 1360x768p60Hz, 1440x900p60Hz, 1440x1050p60Hz, 1600x1200p60Hz, 720x480i59.94Hz (480i59), 720x480p59.94Hz (480p59), 720x576i50Hz (576i50), 720x576p50Hz (576p50), 1280x720p50Hz (720p50), 1280x720p59.94Hz (720p59), 1280x720p60Hz (720p60), 1920x1080i50Hz (1080i50), 1920x1080i59.94Hz (1080i59), 1920x1080i60Hz (1080i60), 1920x1080p23.98Hz (1080p23), 1920x1080p24Hz (1080p24), 1920x1080p25Hz (1080p25), 1920x1080p29.97Hz (1080p29), 1920x1080p30Hz (1080p30), 1920x1080p50Hz (1080p50), 1920x1080p59.94Hz (1080p59), 1920x1080p60Hz (1080p60), 3840x2160p23.98Hz (2160p23), 3840x2160p24Hz (2160p24), 3840x2160p25Hz (2160p25), 3840x2160p29.97Hz (2160p29), 3840x2160p30Hz (2160p30), 3840x2160p50Hz (2160p50), 3840x2160p59.94Hz (2160p59), 3840x2160p60Hz (2160p60), 4096x2160p23.98Hz, 4096x2160p24Hz, 4096x2160p25Hz, 4096x2160p29.97Hz, 4096x2160p30Hz, 4096x2160p50Hz, 4096x2160p59.94Hz, 4096x2160p60Hz",
                "Output Video Resolution": "Auto, 3840x2160p60, 3840x2160p50, 4096x2160p60, 4096x2160p50, 3840x2160p30, 3840x2160p25, 1920x1200p60RB, 1920x1080p60, 1920x1080p50, 1360x768p60, 1280x800p60, 1280x720p60, 1280x720p50, 1024x768p60",
                "Color Space": "RGB, YCbCr 4:4:4 / 4:2:2, YUV",
                "Color Depth": "8/10/12-bit",
                HDR: "HDR, HDR10, HDR10+, Dolby Vision, HLG",
                "Audio Formats": "LPCM2/5.1/7.1, Dolby Digital, Dolby Digital+, Dolby TrueHD, Dolby Atmos, DTS 5.1, DTS-HD Master Audio, DTS:X",
                "Audio Sample Rate": "22.05/24/32/44.1/48/88.2/96/176.4/192KHz",
                "Transmission Distance": "HDMI passive cable: 16.4ft/5m (4K60); 33ft/10m (4K30); 49ft/15m (1080p60); Single-mode optical fiber cable: 40km; Multi-mode optical fiber cable: 300m (depending on the 10G optical module)",
                "ESD Protection": "IEC61000-4-2: ±15kV (Air-gap discharge) & ±8kV (Contact Discharge)"
              },
              "Connection Specifications - Encoder": {
                Input: "1x IN [HDMI Type A, 19-pin female]; 1x AUDIO IN [3.5mm audio jack]",
                Output: "1x SFP+ (Fiber slot, 10Gbps); 1x OUT [HDMI Type A, 19-pin female]; 1x AUDIO OUT [3.5mm audio jack]",
                Control: "1x 1G LAN [RJ45 jack]; 1x RS-232 [4-pin 3.5mm phoenix connector]"
              },
              "Connection Specifications - Decoder": {
                Input: "1x SFP+ (Fiber slot, 10Gbps); 1x AUDIO IN [3.5mm audio jack]",
                Output: "1x OUT [HDMI Type A, 19-pin female]; 1x AUDIO OUT [3.5mm audio jack]",
                Control: "1x 1G LAN [RJ45 jack]; 1x RS-232 [4-pin 3.5mm phoenix connector]"
              },
              "Mechanical Specifications": {
                Housing: "Metal Enclosure",
                Color: "Black",
                Dimensions: "Encoder/Decoder: 95mm [W] x 120mm [D] x 21.5mm [H]",
                Weight: "Encoder: 329g; Decoder: 323g",
                "Power Supply": "Input: AC 100–240V 50/60Hz; Output: DC 12V/1A (US/EU standard, CE/FCC/UL certified)",
                "Power Consumption (Max)": "Encoder: 6.72W; Decoder: 6.36W",
                "Operating Temperature": "0°C to 40°C (32°F to 104°F)",
                "Storage Temperature": "-20°C to 60°C (-4°F to 140°F)",
                "Operating Humidity": "20% – 80% (relative humidity, no condensation)",
                "Storage Humidity": "10% – 90% (relative humidity, no condensation)"
              }
            },
          },
         {
            id: "model_sp_avp2000_fiber_3",
            name: "StreamPro-100ASLEN/DE",
            description: "SDVoE AVP1000 IP solution Seamless Matrix - Fiber Port",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100ASL-DEC.webp"
            ],

            overview: "The StreamPro-100ASLEN/DE is an SDVoE-compliant, all-in-one AV over IP solution that provides highest-quality, uncompressed 4K60 and zero-frame latency audio/video extension over a standard 10G Fiber Network Switch. It can transfer advanced HDMI content such as HDR (high dynamic range), full color-depth, and multi-channel HD Bitstream audio. Multiple control and data signals can be transmitted along with audio and video signals simultaneously, including RS-232 and 1G Ethernet. The product features a 10G fiber port, which can extend signals up to 40km via a single-mode fiber cable, or 300m via a multi-mode fiber cable. The 1G LAN port is for product management or Ethernet extension. The encoder supports HDMI loop out. The product supports bi-directional analog stereo audio pass-through and RS-232 with 12V voltage output on connector. This product combines multiple encoders/decoders with one or more 10GbE fiber switches to form an ideal IP solution for distributed 4K60 video matrix.",

            keyFeatures: [
              "Separate Encoder/Decoder Design: Built with independent encoder and decoder modules featuring a 10G fiber optical port for high-speed AV signal transmission.",
              "4K UHD Video Resolution: Supports 4K2K@60Hz 4:4:4 video quality, fully compliant with HDMI 2.0b standards for exceptional image clarity.",
              "HDCP 2.2 Compliance: Delivers secure, encrypted content transmission with 18Gbps video bandwidth for uncompressed high-quality video.",
              "HDR Format Compatibility: Provides pass-through for HDR10, Dolby Vision, and HLG, ensuring rich color depth and superior dynamic range.",
              "4K60 IP Matrix Support: Enables 4K60 signal switching and distribution over IP networks for scalable AV system design.",
              "HDMI Loop Out (Encoder): Allows direct local signal monitoring or cascading without additional splitters.",
              "Dual Network Connectivity: Equipped with one 1G LAN port and one 10G fiber port, offering flexible network deployment options.",
              "Comprehensive Control Options: Operable via CEC, RS-232, TCP/IP, and Web GUI for versatile system control and integration.",
              "10G Managed Network Compatibility: Designed to function seamlessly with 10G managed network switches for reliable, high-bandwidth performance.",
              "Dedicated IP Controller Compatibility: Fully compatible with a dedicated IP controller box for centralized configuration and management."
            ],

            applications: [
              "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

            specifications: {
              "System Specifications": {
                "HDMI Compliance": "HDMI 2.0b",
                "HDCP Compliance": "HDCP 2.2",
                "Video Bandwidth": "594MHz / 18Gbps",
                "Video Compression Standard": "SDVoE",
                "Video Network Bandwidth": "10Gbps (SFP+)",
                "Audio Latency": "Zero latency",
                "Video Latency": "Zero latency",
                "Input Video Resolution": "640x480p60Hz, 800x600p60Hz, 1024x768p60Hz, 1280x1024p60Hz, 1360x768p60Hz, 1440x900p60Hz, 1440x1050p60Hz, 1600x1200p60Hz, 720x480i59.94Hz (480i59), 720x480p59.94Hz (480p59), 720x576i50Hz (576i50), 720x576p50Hz (576p50), 1280x720p50Hz (720p50), 1280x720p59.94Hz (720p59), 1280x720p60Hz (720p60), 1920x1080i50Hz (1080i50), 1920x1080i59.94Hz (1080i59), 1920x1080i60Hz (1080i60), 1920x1080p23.98Hz (1080p23), 1920x1080p24Hz (1080p24), 1920x1080p25Hz (1080p25), 1920x1080p29.97Hz (1080p29), 1920x1080p30Hz (1080p30), 1920x1080p50Hz (1080p50), 1920x1080p59.94Hz (1080p59), 1920x1080p60Hz (1080p60), 3840x2160p23.98Hz (2160p23), 3840x2160p24Hz (2160p24), 3840x2160p25Hz (2160p25), 3840x2160p29.97Hz (2160p29), 3840x2160p30Hz (2160p30), 3840x2160p50Hz (2160p50), 3840x2160p59.94Hz (2160p59), 3840x2160p60Hz (2160p60), 4096x2160p23.98Hz, 4096x2160p24Hz, 4096x2160p25Hz, 4096x2160p29.97Hz, 4096x2160p30Hz, 4096x2160p50Hz, 4096x2160p59.94Hz, 4096x2160p60Hz",
                "Output Video Resolution": "Pass-through",
                "Color Space": "RGB, YCbCr 4:4:4 / 4:2:2, YUV",
                "Color Depth": "8/10/12-bit",
                HDR: "HDR, HDR10, HDR10+, Dolby Vision, HLG",
                "Audio Formats": "LPCM2/5.1/7.1, Dolby Digital, Dolby Digital+, Dolby TrueHD, Dolby Atmos, DTS 5.1, DTS-HD Master Audio, DTS:X",
                "Audio Sample Rate": "22.05/24/32/44.1/48/88.2/96/176.4/192KHz",
                "Transmission Distance": "HDMI passive cable: 16.4ft/5m (4K60); 33ft/10m (4K30); 49ft/15m (1080p60); Single-mode optical fiber cable: 40km; Multi-mode optical fiber cable: 300m (depending on the 10G optical module)",
                "ESD Protection": "IEC 61000-4-2: ±15kV (Air-gap discharge) & ±8kV (Contact Discharge)"
              },
              "Connection Specifications - Encoder": {
                Input: "1x IN [HDMI Type A, 19-pin female]; 1x AUDIO IN [3.5mm audio jack]",
                Output: "1x SFP+ [Fiber slot, 10Gbps]; 1x OUT [HDMI Type A, 19-pin female]; 1x AUDIO OUT [3.5mm audio jack]",
                Control: "1x 1G LAN [RJ45 jack]; 1x RS-232 [4-pin 3.5mm phoenix connector]"
              },
              "Connection Specifications - Decoder": {
                Input: "1x SFP+ [Fiber slot, 10Gbps]; 1x AUDIO IN [3.5mm audio jack]",
                Output: "1x OUT [HDMI Type A, 19-pin female]; 1x AUDIO OUT [3.5mm audio jack]",
                Control: "1x 1G LAN [RJ45 jack]; 1x RS-232 [4-pin 3.5mm phoenix connector]"
              },
              "Mechanical Specifications": {
                Housing: "Metal Enclosure",
                Color: "Black",
                Dimensions: "Encoder/Decoder: 95mm [W] x 120mm [D] x 21.5mm [H]",
                Weight: "Encoder: 329g; Decoder: 323g",
                "Power Supply": "Input: AC 100–240V 50/60Hz; Output: DC 12V/1A (US/EU standard, CE/FCC/UL certified)",
                "Power Consumption (Max)": "Encoder: 5.52W; Decoder: 5.04W",
                "Operating Temperature": "0°C to 40°C (32°F to 104°F)",
                "Storage Temperature": "-20°C to 60°C (-4°F to 140°F)",
                "Operating Humidity": "20% – 80% (relative humidity, no condensation)",
                "Storage Humidity": "10% – 90% (relative humidity, no condensation)"
              }
            },
          },
          {
            id: "model_sp_avp1000_fiber_6",
            name: "StreamPro100ATF",
            description: "4K60 4:4:4/HDR W/USB KVM over IP SDVoE Tranceiver Fiber",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AT.webp"
            ],

            overview: "The Resoundify StreamPro 100ATF transceiver is an SDVoE-compliant, all-in-one AV over IP solution that provides highest-quality, uncompressed 4K and zero-frame latency audio/video extension over a standard 10G Fiber Network Switch with instant switching, Video Wall, and MultiView functions. It can transfer advanced HDMI content such as HDR (high dynamic range), full color-depth, and multichannel HD Bitstream audio. Flexible transceiver design (one box can be set to encoder or decoder) is much convenient in real installation sites and inventory control. Its built-in Secondary Stream supports a high-quality, bandwidth-configurable H.264/H.265 compression video stream for portable device preview purposes. Multiple control and data signals can be transmitted along with audio and video signals simultaneously, including bi-directional IR, RS-232, USB KVM, CEC, and 1G Ethernet.",

            keyFeatures: [
              "HDMI 2.0b and HDCP 2.2 Compliance: Ensures compatibility with the latest high-definition video and content protection standards.",
              "4K Ultra HD Video Performance: Supports resolutions up to 4K@60Hz (4:4:4) with 18Gbps video bandwidth for crystal-clear visuals.",
              "Flexible Transceiver Design: Combines Encoder and Decoder functionality within a single unit for versatile installation.",
              "Selectable Operation Mode: Encoder or Decoder mode can be configured via Button or API control.",
              "HDMI Loop Out (Encoder): Enables local monitoring or signal daisy-chaining without additional splitters.",
              "Advanced Video Format Support: Compatible with HDR10, Dolby Vision, HLG, and 3D video formats.",
              "Comprehensive Audio Format Support: Handles Dolby TrueHD, Dolby Atmos, DTS-HD, and DTS:X audio formats.",
              "Zero-Frame Latency Mode: Provides real-time signal transmission without perceptible delay.",
              "Built-in Secondary Stream (SS): Integrated H.264/H.265 streaming for preview and monitoring.",
              "Comprehensive Control Options: Enables bi-directional IR and RS-232 pass-through for device communication.",
              "Multiple Control Interfaces: Manage via IR, RS-232, TCP/IP, or Web GUI for flexible system integration.",
              "Power over Ethernet (PoE): Complies with IEEE 802.3at PD standard for simplified power and data connectivity.",
              "10G Managed Network Support: Designed for high-bandwidth AV-over-IP systems with 10G network switch integration."
            ],

            applications: [
              "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

            specifications: {
              "System Specifications": {
                "HDMI Compliance": "HDMI 2.0b",
                "HDCP Compliance": "HDCP 2.2",
                "Video Bandwidth": "18Gbps",
                "Network Video Bandwidth": "10G",
                "Video Resolution": "Up to 4K@60Hz 4:4:4",
                "Color Space": "Full Color-Depth",
                HDR: "HDR, HDR10, HDR10+, Dolby Vision, HLG",
                "HDMI Audio Formats": "LPCM, Dolby Digital/Plus/EX, Dolby True HD, Dolby Atmos, DTS, DTS-EX, DTS-96/24, DTS High Res, DTS-HD Master Audio, DSD, DTS:X",
                "Analog Audio Formats": "Left and Right stereo analog audio",
                "Transmission Distance": "100m (CAT6A/7) / 90m (CAT6)",
                "ESD Protection": "Human body model — ±8kV (air-gap discharge) & ±4kV (contact discharge)"
              },
              "Connection Specifications": {
                "Input Ports": "1x HDMI IN [Type A, 19-pin female]; 1x USB 2.0 HOST [Type B, 9-pin female]; 1x IR IN [3.5mm Jack]; 1x AUDIO IN [3.5mm Jack]; 1x RS-232 [4-pin phoenix connector]",
                "Output Ports": "1x HDMI OUT [Type A, 19-pin female]; 1x AUDIO OUT [3.5mm Jack]; 1x IR OUT [3.5mm Jack]; 2x USB 2.0 DEVICE [Type-A, 4-pin female]",
                "Network Ports": "1x 10G SFP+ [Fiber slot]; 1x 1G LAN [RJ45 jack]"
              },
              "Mechanical Specifications": {
                Housing: "Metal Enclosure",
                Color: "Black",
                Dimensions: "204mm [W] x 134mm [D] x 21.5mm [H]",
                Weight: "693g",
                "Power Supply": "Input: AC 100-240V 50/60Hz, Output: DC 12V/2.5A (US/EU standards, CE/FCC/UL certified)",
                "Power Consumption (Max)": "13.5W",
                "Operating Temperature": "0°C to 40°C (32°F to 104°F)",
                "Storage Temperature": "-20°C to 60°C (-4°F to 140°F)",
                "Relative Humidity": "20-90% RH (no condensation)"
              }
            },
          },
           {
            id: "model_sp_copper_fiber_1",
            name: "StreamPro",
            description: "4K60 4:4:4/HDR w/USB2.0/Video Preview over IP SDVoE Tranceiver Copper&Fiber",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-CTL100D.webp",
            ]
          },
          {
            id: "model_sp_avp2000_fiber_4",
            name: "StreamPro",
            description: "SDVoE AVP2000 IP solution Seamless Matrix/Video Wall/Multiview -- Fiber Port",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AS-ENC.webp",
            ]
          },
          {
            id: "model_sp_avp1000_fiber_5",
            name: "StreamPro",
            description: "SDVoE AVP1000 IP solution Seamless Matrix -- Fiber Port",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100ASL-ENC.webp",
            ]
          },
          {
            id: "model_sp_control_box_7",
            name: "StreamPro",
            description: "Control box for SDVoE IP",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100ATFS.webp",
            ]
          },
        ],
      },
    ],
  },
  {
    id: "brand_video_conferencing",
    name: "Video Conferencing & Broadcasting",
    category: "video_conferencing_and_broadcasting_system",
    description: "Integrated systems for professional communication and content delivery.",
    image: "https://placehold.co/400x300/F0F4F8/22C55E?text=Video+Conferencing",
    type: "brand",
    series: [
      {
        id: "series_dante_ptz_camera",
        name: "Dante PTZ Camera",
        description: "4K Ultra HD PTZ cameras with Dante audio and AI tracking for superior video conferencing.",
        image: "/images/Products/video_conferencing/PTZ12.webp",
        features: ["4K UHD", "AI Tracking", "Dante Audio", "PoE+"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_vc_ptz12_dante",
            name: "VC-PTZ12 (DANTE)",
            description: "4K Ultra HD Video Conference Camera AI tracking",
            images: [
              "/images/Products/video_conferencing/PTZ12.webp"
            ],

            overview: "The Resoundify VC-PTZ12 (DANTE) 4K UHD PTZ camera delivers exceptional image quality and intelligent performance, making it ideal for broadcasting, live events, education, and conferencing environments. Equipped with a 1/2.8-inch UHD CMOS sensor offering up to 8.51 megapixels, it supports stunning 4K@60fps ultra-high-definition video, while remaining compatible with 1080p, 720p, and other resolutions. Its 12x optical zoom lens provides a wide 80° field of view, ensuring crisp and detailed visuals for both close-up and wide-angle shots. The camera's superior low-light performance, powered by a 3D noise reduction algorithm, maintains clean and clear images even in dim environments, achieving an impressive signal-to-noise ratio of 55dB. Supporting HDMI 2.0 and 3G-SDI interfaces, the camera can output uncompressed 4K digital video with effective transmission distances of up to 150 meters at 1080p30. With HDMI, 3G-SDI, USB 3.0, and LAN ports, it allows up to four simultaneous HD digital outputs, providing flexibility for diverse system setups. The integrated AI tracking function, driven by embedded NPU hardware and deep learning technology, enables precise and smooth face tracking, making it ideal for automatic presenter or speaker tracking in classrooms, lectures, and live presentations.",

            keyFeatures: [
              "Compatible with NDI@HX2 Protocol: NDI is ideal for broadcasting including broadcast studios, live broadcast, gymnasiums, arenas, churches and lecture halls, thanks to its high SNR and ultra-low latency.",
              "4K@60fps UHD Video: 1/2.8-inch UHD CMOS sensor with up to 8.51 megapixels offers 4K (3840x2160) UHD images, downward compatible with 1080P, 720P and other resolutions.",
              "AI Tracking: Embedded NPU hardware uses deep learning technology to extract the target's characteristics and allow smooth face tracking, no matter where the face is facing. The product is applicable to automatic tracking of speakers in lecture and presentation.",
              "12x Optical Zoom: 4K UHD lens with effective resolution of 8 megapixels, 12x optical zoom and FOV angle of up to 80°.",
              "Multiple Interfaces: It supports HDMI 2.0 HD output, and also equipped with 3G-SDI interface, the effective transmission distance up to 150 meters (1080P30). HDMI, 3G-SDI, USB 3.0, LAN can simultaneously output 4 channels of high-definition digital signals.",
              "Built-in Gravity Sensor: Automatic image rotation supported for easy installation.",
              "Smart Exposure: The effects of projectors, TV and other devices on the people can be resolved effectively.",
              "Remote Control: Through the LAN, RS232 and RS485 serial ports, the camera can be controlled remotely."
            ],

            applications: [
             "classrooms",
             "boardrooms",
             "auditoriums",
            ],

            specifications: {
              "Camera Specifications": {
                "Video Resolution": "4K/60, 4K/50, 4K/30, 4K/25, 4K/59.94, 4K/29.97; 1080P/60, 1080P/50, 1080I/60, 1080I/50, 1080P/30, 1080P/59.94, 1080I/59.94, 1080P/29.97; 720P/60, 720P/59.94",
                Sensor: "1/2.8 inches, CMOS, Effective Pixels: 8.40 Megapixels",
                "Scanning Mode": "Progressive",
                Lens: "12x, f = 4.4mm ~ 52.8mm, F1.8 ~ F2.6",
                "Digital Zoom": "16x",
                "Minimum Illumination": "0.5Lux @ (F1.8, AGC ON)",
                "Shutter Speed": "1/30s ~ 1/10000s",
                "White Balance": "Auto, Indoor, Outdoor, One Push, Manual, VAR",
                "Backlight Compensation": "Support",
                "Digital Noise Reduction": "3D Digital Noise Reduction",
                SNR: ">55dB",
                "Horizontal FOV": "80.8° ~ 7.5°",
                "Vertical FOV": "49.9° ~ 4.3°",
                "Pan Angle": "±170°",
                "Tilt Angle": "-30° ~ +90°",
                "Pan Speed": "1.7° ~ 100°/s",
                "Tilt Speed": "1.7° ~ 69.9°/s",
                "Image Flip": "Support",
                "Image Freeze": "Support",
                POE: "Support",
                "Preset Position": "255",
                "Preset Accuracy": "0.1°"
              },
              "Interface Specifications": {
                "HD Output": "1 x HDMI: Version 2.0; 1 x 3G-SDI: BNC, 800mVp-p, 75Ω, as per SMPTE 424M standard",
                "Network Interface": "1 x RJ45: 10M/100M/1000M adaptive Ethernet",
                "Audio Interface": "1 x LINE IN: 3.5mm Jack",
                "USB Interface": "1 x USB3.0, type-C",
                "Control Interface": "1 x RS485: 2pin phoenix port, Max Distance: 1200m, Protocol: VISCA / Pelco-D / Pelco-P; 1 x RS232 IN: 8pin Mini DIN, Max Distance: 30m, Protocol: VISCA / Pelco-D / Pelco-P; 1 x RS232 OUT: 8pin Mini DIN, Max Distance: 30m, Protocol: VISCA only",
                "Power Interface": "JEITA type (DC IN 12V)"
              },
              "Network Specifications": {
                "Video Compression": "H.265 / H.264 / MJPEG",
                "Video Stream": "First Stream, Second Stream",
                "First Stream Resolution": "3840x2160, 1920x1080, 1280x720, etc",
                "Second Stream Resolution": "720x480, 320x240 etc.",
                "Video Bit Rate": "32kbps—51200kbps",
                "Bit Rate Control": "VBR, CBR",
                "Frame Rate": "50Hz: 1fps—50fps, 60Hz: 1fps—60fps",
                "Audio Compression": "AAC, G711A",
                "Audio Bit Rate": "96kbps, 128kbps, 256Kbps",
                Protocols: "NDI HX2, TCP/IP, HTTP, RTSP, RTMP(s), Onvif, DHCP, Multicast, etc",
                "Control Protocol": "NDI PTZ, VISCA over IP"
              },
              "USB Specifications": {
                "Operating System Supported": "Windows 7, Windows 8, Windows 10, Windows 11, MacOS 11.6.6 or higher, Ubuntu 18.04.4 LTS or higher, Android 8.0.0 or higher",
                "Color System / Compression": "YUY2 / H.265 / H.264 / MJPEG",
                "Video Format": "YUY2: Max.1080P5; H.264: Max.2160P30; H.265 HEVC: Max.2160P30; MJPEG: Max.2160P30",
                "USB Audio": "Support",
                "USB Video Communication Protocol": "UVC 1.1~1.5",
                "UVC PTZ Control": "Support"
              },
              "General Specifications": {
                "Input Voltage": "DC 12V / PoE+ (802.3at)",
                "Input Current": "1.5A (Max.)",
                "Power Switch": "Support",
                "Recovery key": "Support",
                "IR Remote Input": "Support",
                "Operating Temperature": "-10°C ~ 60°C",
                "Storage Temperature": "-40°C ~ 60°C",
                "Power Consumption": "12W (Max.)",
                Dimension: "223mm x 155mm x 166mm",
                "Net Weight": "1.8kg"
              }
            },
          },
          {
            id: "model_vc_ptz16_dante",
            name: "VC-PTZ16 (DANTE)",
            description: "4K Ultra HD Video Conference Camera AI Tracking",
            images: [
              "/images/Products/video_conferencing/PTZ16.webp"
            ],

            overview: "The VC-PTZ16 (DANTE) is a high-performance 4K video conferencing camera engineered for professional meeting rooms, lecture halls, and broadcasting environments. Equipped with advanced AI tracking, Dante audio compatibility, and robust connectivity options, it delivers crystal-clear video and intelligent automation for seamless remote collaboration. The VC-PTZ16 is a next-generation video conferencing and live streaming camera engineered to deliver professional-grade 4K60P video, AI-powered auto tracking, and network audio integration via Dante. Designed for modern AV installations, it offers the perfect combination of ultra-high-definition imaging, intelligent automation, and flexible connectivity to meet the demands of today's hybrid communication environments.",

            keyFeatures: [
              "4K60P UHD Video: Using 1/1.8-inch high-quality UHD CMOS sensor with a maximum of 8.42 million pixels can realize 4K (3840x2160) ultra-high-resolution high-quality images. And downward compatible with 1080p, 720p and other resolutions.",
              "AI Tracking: With the help of the AI computing power of the chip, the camera is equipped with advanced AI algorithms to realize monocular humanoid tracking, which can realize automatic tracking of scenes such as education, conferences and live broadcasts.",
              "Voice Tracking: The built-in intelligent AI algorithm uses dual microphones to accurately locate the sound source. The camera can automatically find and track the speaker. When different speakers speak, the camera can switch between different speakers.",
              "20x Optical Zoom + 60° Wide-angle Lens: It adopts 4K ultra long focal lens with high quality and 8 million ultra-high resolution, 20x optical zoom, and the maximum field angle is 60°.",
              "HDMI 2.0: Support HDMI 2.0 interface, which can directly output 4K/60P uncompressed digital video.",
              "Multiple Interfaces: Support HDMI and 3G-SDI interface, effective transmission distance of 3G-SDI is up to 150 meters (1080P30). HDMI or 3G-SDI, USB, LAN can output three HD digital signals at the same time.",
              "NDI |HX2: Support low-latency NDI@HX2 protocol, plug to play, minimal configuration and easy for deployment."
            ],

            applications: [
              "classrooms",
              "boardrooms",
              "auditoriums",
            ],

            specifications: {
              "Camera Specifications": {
                "Video Resolution": "HDMI: 4K/60, 4K/59.94, 4K/50, 4K/30, 4K/29.97, 4K/25, 1080p/60, 1080p/59.94, 1080p/50, 1080p/30, 1080p/29.97, 1080p/25, 1080i/60, 1080i/59.94, 1080i/50, 720p/60, 720p/59.94, 720p/50; 3G-SDI: 1080p/60, 1080p/59.94, 1080p/50, 1080p/30, 1080p/29.97, 1080p/25, 1080i/60, 1080i/59.94, 1080i/50, 720p/60, 720p/50",
                Sensor: "1/1.8 inches, CMOS, Effective Pixels: 8.42 Megapixels",
                "Scanning Mode": "Progressive",
                Lens: "20x, f=6.25mm ~ 125mm, F1.58 ~ F3.95",
                "Digital Zoom": "16x",
                "Minimum Illumination": "0.5Lux @ (F1.8, AGC ON)",
                "Shutter Speed": "1/30s ~ 1/10000s",
                "White Balance": "Auto, Indoor, Outdoor, One Push, Manual, VAR",
                "Backlight Compensation": "Support",
                "Digital Noise Reduction": "3D Digital Noise Reduction",
                SNR: ">55dB",
                "Horizontal FOV": "60° ~ 3.5°",
                "Vertical FOV": "35.7° ~ 2.0°",
                "Pan Angle": "±162.5°",
                "Tilt Angle": "-30° ~ +90°",
                "Pan Speed": "1.8° ~ 80°/s",
                "Tilt Speed": "1.5° ~ 49°/s",
                "Image Flip": "Support",
                "Image Freeze": "Support",
                POE: "Support",
                "Preset Position": "255",
                "Preset Accuracy": "0.1°"
              },
              "Interface Specifications": {
                "HD Output": "1 x HDMI: Version 2.0; 1 x 3G-SDI: BNC, 800mVp-p, 75Ω, as per SMPTE 424M standard",
                "Network Interface": "1 x RJ45: 10M/100M/1000M adaptive Ethernet",
                "Audio Interface": "1 x LINE IN: 3.5mm Jack",
                "USB Interface": "1 x USB3.0, Type-C",
                "Control Interface": "1 x RS485: 3pin phoenix port, Max Distance: 1200m, Protocol: VISCA / Pelco-D / Pelco-P; 1 x RS232 IN: 8pin Mini DIN, Max Distance: 30m, Protocol: VISCA / Pelco-D / Pelco-P; 1 x RS232 OUT: 8pin Mini DIN, Max Distance: 30m, Protocol: VISCA only",
                "Power Interface": "JEITA type (DC IN 12V)"
              },
              "Network Specifications": {
                "Video Compression": "H.265 / H.264 / MJPEG",
                "Video Stream": "First Stream, Second Stream",
                "First Stream Resolution": "3840x2160, 1920x1080, etc",
                "Second Stream Resolution": "720x480, etc",
                "Video Bit Rate": "First Stream: 32kbps—51200kbps; Second Stream: 32kbps—20480kbps",
                "Bit Rate Control": "VBR, CBR",
                "Frame Rate": "50Hz: 1fps—50fps, 60Hz: 1fps—60fps",
                "Audio Compression": "AAC, G711A",
                "Audio Bit Rate": "96kbps, 128kbps",
                Protocols: "NDI HX2, SRT, TCP/IP, HTTP, RTSP, RTMP(s), Onvif, DHCP, Multicast, etc"
              },
              "USB Specifications": {
                "Operating System Supported": "Windows 7, Windows 8, Windows 10, Mac OS X, Linux, Android",
                "Color System / Compression": "YUY2 / H.264 / MJPEG / H.265",
                "Video Format": "YUY2; H.264: Max.2160p/30; H.265 HEVC: Max.2160p/30; MJPEG: Max.2160p/30",
                "USB Audio": "Support",
                "USB Video Communication Protocol": "UVC 1.1~1.5",
                "UVC PTZ Control": "Support"
              },
              "General Specifications": {
                "Input Voltage": "DC 12V / PoE+ (802.3at)",
                "Input Current": "2A (Max.)",
                "Operating Temperature": "-10°C ~ 40°C",
                "Storage Temperature": "-40°C ~ 60°C",
                "Power Consumption": "18W",
                Dimension: "223mm x 154.8mm x 165mm",
                "Net Weight": "1.8kg"
              }
            },
          },
         {
            id: "model_vc_ptz20_dante",
            name: "VC-PTZ20 (DANTE)",
            description: "4K Ultra HD Video Conference Camera",
            images: [
              "/images/Products/video_conferencing/PTZ20.webp"
            ],

            overview: "The VC-PTZ20 (DANTE) is a professional-grade 4K Ultra HD video conference camera designed for high-performance video conferencing and broadcasting environments. Equipped with a large 1/1.8\" CMOS sensor and an effective resolution of 8.42 megapixels, it delivers exceptional clarity, color accuracy, and detail — ideal for boardrooms, training rooms, lecture halls, and other professional AV applications. The VC-PTZ20 is a cutting-edge professional video conferencing camera that combines 4K Ultra HD resolution, AI-powered features, and broadcast-grade optics to deliver an exceptional conferencing experience. Engineered for modern meeting spaces, lecture halls, and hybrid collaboration environments, it ensures participants appear crisp, clear, and professional—no matter where they are.",

            keyFeatures: [
              "4K30P UHD Video: Using 1/1.8-inch high-quality UHD CMOS sensor with a maximum of 8.42 million pixels can realize 4K (3840x2160) ultra-high-resolution high-quality images. And downward compatible with 1080p, 720p and other resolutions.",
              "20x Optical Zoom + 60° Wide-angle Lens: It adopts 4K ultra long focal lens with high quality and 8 million ultra-high resolution, 20x optical zoom, and the maximum field angle is 60°.",
              "HDMI 1.4b: Support HDMI 1.4b interface, which can directly output 4K/60P uncompressed digital video.",
              "Remote Control: Support a variety of control methods, you can use RS232, RS485, network and USB to control the camera.",
              "Local Storage: Support U disk local storage, local recording directly without NVR.",
              "Low Illumination: The application of 3D noise reduction algorithm greatly reduces image noise. Even under the condition of ultra-low illumination, it still keep the picture clean and clear, and the SNR of image is as high as 55dB.",
              "Smart Exposure: Effectively solve the impact of projection, TV and other equipment on shooting people.",
              "NDI |HX2: NDI@HX2 has the characteristics of low latency and plug and play, which is convenient for project implementation and deployment. It has good ecology and supports the simultaneous transmission of audio, video and control commands. It is a new generation of network video transmission mode.",
              "Multiple Interfaces: Support HDMI and 3G-SDI interface, effective transmission distance of 3G-SDI is up to 150 meters (1080P30). HDMI, LAN or 3G-SDI, LAN can output 2 high-definition digital signals at the same time."
            ],

            applications: [
              "classrooms",
              "boardrooms",
              "auditoriums",
            ],

            specifications: {
              "Camera Specifications": {
                "Signal System": "HDMI: 4K/30, 4K/29.97, 4K/25, 1080p/60, 1080p/59.94, 1080p/50, 1080p/30, 1080p/29.97, 1080p/25, 1080i/60, 1080i/59.94, 1080i/50, 720p/60, 720p/59.94, 720p/50; 3G-SDI: 1080p/50, 1080p/30, 1080p/29.97, 1080p/25, 1080i/60, 1080i/59.94, 1080i/50, 720p/60, 720p/59.94",
                Sensor: "1/1.8 inches, CMOS, Effective Pixels: 8.42 Megapixels",
                "Scanning Mode": "Progressive",
                Lens: "20x, f=6.25mm ~ 125mm, F1.58 ~ F3.95",
                Shutter: "1/30s ~ 1/10000s",
                "White Balance": "Auto, Indoor, Outdoor, One Push, Manual, VAR",
                "Backlight Compensation": "Support",
                "Digital Noise Reduction": "3D Digital Noise Reduction",
                SNR: "55dB",
                "Horizontal FOV": "60° ~ 3.5°",
                "Vertical FOV": "35.7° ~ 2.0°",
                "Pan Angle": "±170°",
                "Tilt Angle": "-30° ~ +90°",
                "Pan Speed": "1.7° ~ 100°/s",
                "Tilt Speed": "1.7° ~ 69.9°/s",
                "Image Flip": "Support",
                "Image Freeze": "Support",
                "PoE+": "Support",
                "Preset Position": "255",
                "Preset Accuracy": "0.1°"
              },
              "Interface Specifications": {
                "HD Output": "1x HDMI: Version 1.4b; 1x 3G-SDI: BNC, 800mVp-p, 75Ω, as per SMPTE 424M standard",
                "Network Interface": "1 x RJ45: 10M/100M/1000M adaptive Ethernet",
                "Audio Interface": "1 x Line In: 3.5mm Jack; 1 x Line Out: 3.5mm Jack",
                "USB Interface": "1 x USB2.0, Type-A",
                "Control Interface": "1 x RS485: 2pin phoenix port, Max Distance: 1200m, Protocol: VISCA / Pelco-D / Pelco-P; 1 x RS232 IN: 8pin Mini DIN, Max Distance: 30m, Protocol: VISCA / Pelco-D / Pelco-P; 1 x RS232 OUT: 8pin Mini DIN, Max Distance: 30m, Protocol: VISCA only",
                "Power Interface": "JEITA type (DC IN 12V)"
              },
              "Network Specifications": {
                "Video Compression": "H.265 / H.264 / MJPEG",
                "Video Stream": "First Stream, Second Stream",
                "First Stream Resolution": "3840x2160, 1920x1080, 1280x720, etc",
                "Second Stream Resolution": "etc",
                "Video Bit Rate": "First Stream: 32kbps—51200kbps; Second Stream: 32kbps—20480kbps",
                "Bit Rate Control": "VBR, CBR",
                "Frame Rate": "50Hz: 1fps—50fps, 60Hz: 1fps—60fps",
                "Audio Compression": "AAC, G.711A",
                "Audio Bit Rate": "96kbps, 128kbps, 256Kbps",
                Protocols: "NDI HX2, SRT, TCP/IP, HTTP, RTSP, RTMP(s), Onvif, DHCP, GB/T 28181, Multicast, etc"
              },
              "General Specifications": {
                "Input Voltage": "DC 12V / PoE+ (802.3at)",
                "Input Current": "1.5A (Max.)",
                "Operating Temperature": "-10°C ~ 40°C",
                "Storage Temperature": "-40°C ~ 60°C",
                "Power Consumption": "13W (Max.)",
                Dimension: "169mm x 142mm x 175mm",
                "Net Weight": "1.4kg"
              }
            },
          },
         {
            id: "model_vc_ptz30_dante",
            name: "VC-PTZ30 (DANTE)",
            description: "4K Ultra HD Video Conference Camera AI tracking",
            images: [
              "/images/Products/video_conferencing/PTZ30.webp"
            ],

            overview: "The VC-PTZ30 (DANTE) is a high-performance 4K Ultra HD video conferencing camera designed for professional-grade AV environments. Equipped with a 30x optical zoom lens, AI-powered auto-tracking, and Dante AV-H support, this camera delivers exceptional clarity, flexibility, and IP-based integration for modern meeting rooms, auditoriums, and broadcast spaces. With support for multiple video output interfaces including HDMI, USB 3.0, IP Streaming, and Dante AV, the VC-PTZ30 offers seamless compatibility with conferencing platforms, control systems, and AV-over-IP infrastructure.",

            keyFeatures: [
              "4K60FPS: Use a high-quality 1/1.8 inches UHD CMOS sensor with 8.42 million pixels. Support max 4K60fps image output and multiple lower resolutions like 1080p/720p.",
              "30x Optical Zoom + 59° Wide-angle Lens: 4K optical lens, support max 30x optical zoom (50x lossless in 1080P) and 59° horizontal field of view, can cover the demand of extra-large conferencing room and other scenarios.",
              "AI Smart Tracking: With the built-in AI capability and algorithms, camera can support multiple tracking modes, including body tracking, hybrid tracking and etc.",
              "Remote Control: Support multiple ways of control, like RS232, RS485, Network and USB.",
              "Non-compressed video stream: HDMI 2.0 and 3G-SDI I/O, can output non-compressed video stream.",
              "Low Illumination: The new generation high performance CMOS image sensor can significantly reduce the image noise in low illumination. With the 3D noise reduction algorithms, even in an ultra-low illumination environment, camera can still deliver a sharp and clean image with more than 55dB S/N ratio.",
              "Gravity Sensor: Support image flipping, apply to head-up/head-down installation.",
              "NDI®|HX2: Support low-latency NDI®|HX2 protocol, plug to play, minimal configuration and easy for deployment.",
              "Multiple Interfaces: HDMI 2.0, USB2.0/3.0, 3G-SDI (Up to 150 meters transmission with 1080P30), LAN. Support HDMI/3G-SDI, USB, LAN streaming simultaneously."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Camera Specifications": {
                "Signal System": "HDMI: 4K60, 4K59.94, 4K50, 4K30, 4K25, 4K29.97, 1080p60, 1080p50, 1080i60, 1080i50, 1080p30, 1080p59.94, 1080p29.97, 720p60, 720p59.94; 3G-SDI: 1080p60, 1080p50, 1080p30, 1080p29.97, 1080p59.94, 1080i60, 1080i59.94, 1080i50, 1080p25, 1080p24, 1080p23.98, 720p60, 720p59.94",
                Sensor: "1/1.8 inches, CMOS, Effective Pixels: 8.42 Megapixels",
                "Scanning Mode": "Progressive",
                Lens: "30x, f=7.1mm — 210mm, F1.61 — F5.19",
                Shutter: "1/30s ~ 1/10000s",
                "White Balance": "Auto, Indoor, Outdoor, One Push, Manual, VAR",
                "Backlight Compensation": "Support",
                "Digital Noise Reduction": "3D Digital Noise Reduction",
                SNR: ">55dB",
                "Horizontal FOV": "59.2° ~ 2.5°",
                "Vertical FOV": "34.6° ~ 1.4°",
                "Pan Angle": "±170°",
                "Tilt Angle": "-30° ~ +90°",
                "Pan Speed": "1.7° ~ 100°/s",
                "Tilt Speed": "1.7° ~ 69.9°/s",
                "Image Flip": "Support",
                "Image Freeze": "Support",
                "PoE+": "Support",
                "Preset Position": "255",
                "Preset Accuracy" : "0.1°"
              },
              "Interface Specifications": {
                "HD Output": "1 x HDMI: Version 2.0; 1 x 3G-SDI: BNC, 800mVp-p, 75Ω, as per SMPTE 424M standard",
                "Network Interface": "1 x RJ45: 10M/100M/1000M adaptive Ethernet",
                "Audio Interface": "1 x LINE IN: 3.5mm Jack; 1 x LINE OUT: 3.5mm Jack",
                "USB Interface": "1 x USB2.0, Type-A; 1 x USB3.0, Type-B",
                "Control Interface": "1 x RS485: 2pin phoenix port, Max Distance: 1200m, Protocol: VISCA / Pelco-D / Pelco-P; 1 x RS232 IN: 8pin Mini DIN, Max Distance: 30m, Protocol: VISCA / Pelco-D / Pelco-P; 1 x RS232 OUT: 8pin Mini DIN, Max Distance: 30m, Protocol: VISCA only",
                "Power Interface": "JEITA type (DC IN 12V)"
              },
              "Network Specifications": {
                "Video Compression": "H.265 / H.264 / MJPEG",
                "Video Stream": "First Stream, Second Stream",
                "First Stream Resolution": "3840x2160, 1920x1080, 1280x720, 1024x576 etc",
                "Second Stream Resolution": "720x480, 320x240 etc",
                "Video Bit Rate": "First Stream: 32kbps—51200kbps; Second Stream: 32kbps—20480kbps",
                "Bit Rate Control": "VBR, CBR",
                "Frame Rate": "50Hz: 1fps—50fps, 60Hz: 1fps—60fps",
                "Audio Compression": "AAC, G.711A",
                "Audio Bit Rate": "96kbps, 128kbps",
                Protocols: "NDI|HX2, SRT, TCP/IP, HTTP, RTSP, RTMP(s), Onvif, DHCP, GB/T 28181, Multicast, etc"
              },
              "General Specifications": {
                "Input Voltage": "DC 12V / PoE+ (802.3at)",
                "Input Current": "2A (Max.)",
                "Operating Temperature": "0°C ~ 40°C",
                "Storage Temperature": "-40°C ~ 60°C",
                "Power Consumption": "18W (Max.)",
                Dimension: "170mm x 228mm x 181mm",
                "Net Weight": "2.0kg"
              }
            }
          },
         
        ],
      },
      {
        id: "series_auto_switching_tracking_camera",
        name: "Auto switching auto Tracking camera",
        description: "Integrated 4K HD tracking cameras for teaching and presentation environments.",
        image: "/images/Products/video_conferencing/VC-AUTO2.webp",
        features: ["4K Resolution", "AI Tracking", "Dual Lens Systems", "PoE"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_vc_auto2",
            name: "VC-AUTO2",
            description: "4K Integrated HD teaching tracking camera with dual-lens AI tracking",
            images: [
              "/images/Products/video_conferencing/VC-AUTO2.webp",
              "/images/Products/video_conferencing/VC-AUTO2(1).webp"

            ],

            overview: "The Resoundify VC-AUTO2 (DANTE) is an advanced 4K dual-lens AI tracking camera designed for education, corporate training, and conference recording. Featuring integrated panoramic + close-up lenses with intelligent participant framing and auto-tracking, it delivers smooth, lifelike multi-angle coverage without manual intervention. Supports teacher/student modes, multiple 4K streams, smart directing, NDI, PoE, and rich interfaces for seamless integration in classrooms, auditoriums, and hybrid environments.",

            keyFeatures: [
              "Dual-Lens Integrated Design: Panoramic (up to 110° FOV) + Close-up lens (up to 43° FOV) in one body, total effective pixels up to 8.29M + 4.93M.",
              "Ultra-clear 4K Experience: Both lenses use 1/2.7\" 4K CMOS sensors, support 4K@30fps output with crystal-clear detail.",
              "AI Intelligent Tracking: Advanced image recognition & tracking algorithms – no wearable trackers needed. Supports teacher/student tracking, multi-stream output (panoramic + close-up), and smart directing.",
              "Multiple Models Available: Teacher model (43° pano + 26° close-up), Student model (110° pano + 43° close-up), Conference model (95° pano + 43° close-up).",
              "Rich Connectivity: USB 3.0 Type-C, SDI, HDMI, NDI, PoE, LINE In/Out, 4-mic array, RS232/RS485 control.",
              "Multiple Stream Output: Up to 4 simultaneous streams (panoramic + tracking + mixed + extra), perfect for recording & live streaming."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Panoramic Camera": {
                Sensor: "Education: 1/2.7\" CMOS, 4.93MP | Conference: 1/2.7\" CMOS, 8.29MP",
                "Horizontal FOV": "Student: 110° | Teacher: 43° | Conference: 95°",
                "Minimum Illumination": "0.5 Lux",
                Shutter: "1/30s ~ 1/10000s",
                "White Balance": "Auto, Indoor, Outdoor, One Push, Manual, VAR",
                "Digital Noise Reduction": "2D & 3D"
              },
              "Close-up Tracking Camera": {
                Sensor: "Education: 1/2.7\" CMOS, 8.29MP | Conference: 1/2.7\" CMOS, 4.93MP",
                "Horizontal FOV": "Student: 43° | Teacher: 26° | Conference: 43°",
                "Digital Zoom": "2x",
                "Pan/Tilt Range": "Pan ±40°, Tilt +5°~-30° (Student: Pan 60°/s, Tilt 30°/s | Others: Pan 30°/s, Tilt 30°/s)",
                "Preset Positions": "255 (Accuracy 0.5°)",
                "Minimum Illumination": "0.5 Lux"
              },
              "Audio Specifications": {
                "Built-in Microphone": "4-element array, 100Hz–16kHz",
                "Audio Input": "1 x LINE In (3.5mm)",
                "Audio Output": "1 x LINE Out (3.5mm)",
                "Digital Audio": "USB, SDI, Network (1588 sync supported)"
              },
              "USB Specifications": {
                "Operating System Supported": "Windows 7 (1080p and below only), Windows 8.1+, macOS 10.10+, Chromebook v29.0.1547.70+, Linux (UVC supported)",
                "Hardware Requirements": "2.4 GHz Intel Core 2 Duo or higher, 2GB RAM or higher, USB 3.0 or 2.0 port",
                "Color System / Compression": "YUY2 / MJPEG / H.264",
                "Video Format": "Maximum 4K with multiple resolutions and frame rates",
                "USB Video Communication Protocol": "UVC 1.1",
                "USB Audio": "Max 48kHz sampling rate, supports UAC1.0",
                "UVC PTZ Control": "Supported"
              },
              "Interface Specifications": {
                "USB": "1 x USB 3.0 Type-C (UVC/UAC)",
                "HD Output": "1 x SDI (1080p60, PoC supported)",
                "Network": "1 x RJ45 10/100M (NDI, PoE 802.3af)",
                "Audio I/O": "LINE In + LINE Out 3.5mm",
                "Power": "DC 12V (DC005 jack)",
                Control: "RS232 IN/OUT, RS485 (VISCA/Pelco-D/P)"
              },
              "Network Specifications": {
                "Video Compression": "H.265 / H.264 / MJPEG",
                "Video Streams": "Up to 4 simultaneous streams",
                "Max Resolution": "3840x2160 (First stream)",
                "Frame Rate": "25/30fps",
                "Audio Compression": "AAC / G.711",
                Protocols: "TCP/IP, HTTP/HTTPS, NDI, SRT, RTSP, RTMP, ONVIF, DHCP, GB/T 28181, Multicast"
              },
              "General Specifications": {
                "Input Voltage": "DC 12V / PoE (802.3af) / PoC",
                "Power Consumption": "12W Max",
                Dimension: "242.05mm × 86.03mm × 70.55mm",
                "Operating Temperature": "0°C ~ 40°C",
                "Storage Temperature": "-40°C ~ 60°C",
                "Net Weight": "TBD",
                "No Failure Time" : "30000h"

              }
            },
          },
          {
            id: "model_vc_auto4",
            name: "VC-AUTO4",
            description: "All-in-One 4K Intelligent Video Conferencing Endpoint with 12x Optical Zoom",
            images: [
              "/images/Products/video_conferencing/VC-AUTO4.webp"
            ],

            overview: "The VC-AUTO4 is a high-performance all-in-one 4K conferencing endpoint built on an open Android 12 platform, powered by quad-core Cortex-A76 + quad-core Cortex-A55 processor and 6 TOPS AI NPU. It supports deep customization with full SDK for developers. Features a 4K UHD sensor with 80.8° ultra-wide-angle lens + 12x optical zoom and large-range PTZ for complete room coverage. Supports dual 4K input/output streams, dual-screen display, built-in advanced audio 3A algorithms, fanless silent design, and rich interfaces — perfect for medium to large meeting rooms.",

            keyFeatures: [
              "High-performance Open Android 12 Platform: Quad-core A76 + A55 CPU, 6 TOPS AI NPU, full SDK & documentation for deep customization.",
              "Ultra-wide 80.8° 4K Lens + 12x Optical Zoom with large-range PTZ (±170° pan, -30°~+30° tilt) for full room coverage.",
              "Dual 4K Video Streaming: 1× built-in MIPI + 1× HDMI input, 2× HDMI 4K60 output, dual-screen different display supported.",
              "Built-in Audio 3A Processing: AEC, AGC, ANS with multiple mic/line inputs and phantom power support.",
              "Fanless Silent Metal Design: Excellent heat dissipation, zero noise, ideal for long-hour operation.",
              "Rich Connectivity: USB 3.0 ×4, HDMI 2.1 ×2, Gigabit LAN, WiFi (optional), Bluetooth 5.2, TF card slot up to 128GB."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Standard Specifications": {
                "Operating System": "Android 12",
                CPU: "4 × Cortex-A76 + 4 × Cortex-A55",
                RAM: "4GB",
                ROM: "16GB EMMC (optional 32GB)"
              },
              "Camera Specifications": {
                Sensor: "1/2.5\" CMOS, 8.51 million effective pixels",
                "Lens": "12x Optical Zoom, f=3.5mm ~ 42.3mm (approx), Horizontal FOV: 80.8° (wide) ~ 7.5° (tele)",
                "PTZ": "Pan ±170°, Tilt -30° ~ +30°",
                "Shutter": "1/30s ~ 1/10000s",
                Features: "Auto White Balance, Auto Exposure, Auto Focus, Remote Control, Image Flip/Mirror"
              },
              "Video Specifications": {
                "Built-in Camera": "4K30fps max",
                "Video Input": "1 × Integrated MIPI camera, 1 × HDMI 2.0 (up to 4K60)",
                "Video Output": "2 × HDMI 2.1 (CEC supported, up to 4K60fps each)",
                "Video Codec": "H.265/H.264/AV1/VP9/AVS2 decoding up to 8K60fps, H.264/H.265 encoding up to 8K30fps",
                "Bandwidth Requirement": "4K30fps: min 1Mbps (single), 2Mbps (dual), 1080p60: min 512Kbps",
                "Other Features": "Dual screen different display"
              },
              "Audio Specifications": {
                Input: "1 × Built-in array mic, 1 × Mini-XLR mic (48V phantom), 1 × 3.5mm line in, HDMI embedded, Bluetooth (optional)",
                Output: "1 × 3.5mm line out, HDMI embedded, Bluetooth (optional)",
                Features: "AEC, AGC, ANS (full-duplex)"
              },
              "Interface Specifications": {
                "USB": "3 × USB 3.0, 1 × USB 3.0 (for touch/control)",
                "Network": "1 × RJ45 10/100/1000 Base-T",
                "Wireless": "WiFi 802.11a/b/g/n/ac (optional), Bluetooth 5.2",
                "Storage": "1 × TF card slot (up to 128GB)",
                "Control": "1 × RJ45 for touch panel, 1 × IR receiver",
                "Power": "1 × DC 12V",
                Indicator: "1 × Dual-color LED"
              },
              "General Specifications": {
                Dimension: "258mm (W) × 146mm (D) × 170mm (H)",
                "Power Supply": "DC 12V, Max 36W",
                "Operating Temperature": "0°C ~ 40°C",
                "Storage Temperature": "-40°C ~ 70°C",
                "Operating Humidity": "10% ~ 80%",
                "Non-Operating Humidity": "0% ~ 95%",
                Certification: "CCC, CTA"
              }
            }
          },
        ],
      },
      {
        id: "series_all_in_one_bar_solution",
        name: "All in one BAR solution",
        description: "Integrated 4K UHD USB cameras with built-in mics and speakers for seamless collaboration.",
        image: "/images/Products/video_conferencing/RC-700.webp",
        features: ["4K UHD Camera", "Built-in Mic & Speaker", "AI Tracking", "Bluetooth & WiFi"],
        status: "In Stock",
        type: "series",
        models: [
         {
            id: "model_st_200",
            name: "ST-200",
            description: "4K UHD All-in-One USB Video Bar with AI Tracking",
            images: [
              "/images/Products/video_conferencing/ST-200.webp",
            ],

            overview: "The Resoundify ST-200 is a USB video bar integrated device designed for small to medium-sized enterprise meeting spaces. It features a 4K ultra-high-definition camera, a digital microphone, and a full-range speaker in a three-in-one design that minimizes cabling. The video resolution reaches up to 20 megapixels, allowing remote participants to see a clear panoramic view and close-ups of individuals in the meeting room. With multiple AI video processing algorithms, it enables efficient and intelligent remote communication and collaboration without the need for manual intervention.",

            keyFeatures: [
              "Ultra-High-Definition Image Quality: Equipped with a high-quality UHD CMOS sensor of 1/1.8 inches and 20 million effective pixels, it can output 4K ultrahigh-definition resolution images and is backward compatible with resolutions such as 1080P and 720P.",
              "120° Ultra-Wide Field of View: The lens supports a 120° wide field of view (105° horizontal field of view), with 5x digital zoom, clearly capturing every corner of the meeting room. It features a ±15° mechanical pan-tilt.",
              "Group Framing: Equipped with facial, human shape recognition, and intelligent framing algorithms, it can identify the number of participants and their positional changes, automatically moving the lens and adjusting the focus to achieve intelligent composition and optimal framing.",
              "Speaker Tracking: The built-in sound source localization algorithm automatically directs the camera towards the speaker when someone is talking, presenting a close-up in the center of the screen, delivering a \"face-to-face\" communication experience.",
              "Smart Gallery: Featuring AI algorithms for heads, faces, and human shapes, it can automatically switch to multi-split screen layouts based on the number of participants, extracting and evenly arranging close-ups of each participant. This allows remote attendees to clearly see everyone, making the communication in meetings more vivid and natural.",
              "BYOD & BYOM Meetings: Equipped with a built-in WiFi module, it supports participants using their familiar personal devices (such as laptops, smartphones, or tablets) to join meetings and access the integrated audio-video functions at any time. It also supports wireless screen mirroring from computers to the device, allowing for local or remote meeting screen sharing without the need for cables.",
              "Clear Audio Capture up to 6m: The built-in beamforming microphone automatically locates the speaker's sound source and adjusts to precisely capture audio, ensuring consistent and balanced audio pickup. With audio 3A processing algorithms, the clear audio pickup range can reach up to 6 meters.",
              "POE Cascaded Audio Capture (Optional): Equipped with a POE-powered network port, it supports cascading three M702 array microphones, which can uniformly cover larger meeting room scenarios, providing each participant with equal and consistent audio pickup effects.",
              "Full-Range Stereo Sound: Integrates a full-range high-fidelity speaker, professionally tuned to effectively reduce sound interference, outputting rich bass, full midrange, and clear treble, with natural and authentic human voices."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Camera Specifications": {
                "Signal System": "4KP30, 1080P30, 720P30 etc.",
                Sensor: "1/1.8 inches, CMOS, Effective Pixels: 20 Megapixels",
                Lens: "114° Digital zoom, Horizontal/pitch ±15° Mechanical PTZ (MPTZ) + e-PTZ (EPTZ)",
                "Digital Noise Reduction": "2D & 3D Digital Noise Reduction",
                SNR: "≥ 55dB",
                "Backlight Compensation": "Support"
              },
              "Audio Specifications": {
                "Full-frequency Speaker": "96 dB SPL at 0.5 m",
                "Microphone Array": "Beamforming microphone with 6m pickup distance",
                "Expansion MIC": "Support"
              },
              "Interface Specifications": {
                "USB 3.0": "1 × USB3.0, Type-C",
                HDMI: "1 × HDMI",
                "USB 2.0": "1 × USB2.0, Type-A",
                "Network Interface 1": "1 × RJ45: 10M/100M adaptive Ethernet (Optional)",
                "Network Interface 2": "1 × RJ45: Connected to expansion mic, support POE",
                Power: "1 × Power connector",
                WiFi: "WiFi 5",
                "Remote Controller": "Support"
              },
              "Others Specifications": {
                "Installation Method": "Support desktop placement, wall mounting and TV mounting etc",
                "Supplied Cables": "USB cable",
                "Safety Protection": "Anti-theft lock"
              },
              "USB Specifications": {
                "Type of Connection": "USB 3.0, downward compatible with USB 2.0",
                "Color System / Compression": "YUY2 / MJPEG",
                "USB Video Communication Protocol": "UVC 1.1",
                "UVC PTZ Control": "Support (ePTZ)"
              },
              "General Specifications": {
                "Power Supply": "DC 12V, 5A (Max.)",
                "Operating Temperature": "0°C",
                "Storage Temperature": "-40°C ~ 60°C",
                Dimension: "600mm (W) × 135mm (D) × 117mm (H) (with bracket)",
                "Net Weight": "2.5kg"
              }
            }
          },
          {
            id: "model_st_400",
            name: "ST-400",
            description: "All-in-One 4K Intelligent Video Conferencing Endpoint",
            images: [
              "/images/Products/video_conferencing/ST-400.webp",
            ],

            overview: "The Resoundify ST-400 this all-in-one intelligent conferencing device integrates an ultra-high-definition camera, array microphone, full-range speaker, and Android-based conference terminal into a single compact system, greatly simplifying installation and reducing wiring complexity. Powered by the Android 12.0 operating system with an advanced 4-core A76 + 4-core A55 processor and a 6 TOPS NPU, the device delivers exceptional computing performance for seamless conferencing applications. Supporting industry-leading decoding formats such as H.265, H.264, AVI, VP9, and AVS2 at up to 8K60fps, along with encoding capabilities up to 8K30fps, it ensures high-quality video processing across various platforms. The built-in AI algorithms enable automatic framing by detecting participant positions and sound-based speaker tracking for precise close-ups, creating an immersive and intelligent meeting experience.",

            keyFeatures: [
              "All-in-One Integration: An all-in-one design featuring an ultra-high-definition camera, array microphone, full-range speaker, and Android conference terminal, effectively reducing the complexity of wiring and installation.",
              "Super Computing Power: Android 12.0 operating system, equipped with 4-core A76 + 4-core A55, 6 TOPS super computing power NPU.",
              "Super Decoding: Support H.265/H.264/AV1/VP9/AVS2 video decoding, up to 8K60fps. Support H.264/H.265 video encoding, up to 8K30fps.",
              "AI Algorithm: Built-in AI automatic framing algorithm can recognize the position of the participants and automatically adjust the lens angle to get the best view; at the same time, built-in AI sound tracking algorithm can quickly lock the speakers according to the sound positioning and focus on the close-ups.",
              "Dual-screen display: Supporting two HD video outputs, it can be connected to two large screen display devices at the same time, which can not only display the conference screen but also share pictures, videos and documents, enhancing the conference experience.",
              "One machine for two purposes: It can be used as an Android video conferencing terminal, or as an audio/video integrated USB camera connected to a PC as a peripheral, with rich application scenarios."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "System Specifications": {
                "Operating System": "Android 12",
                CPU: "4 x Cortex-A76@2.4GHz + 4 x Cortex-A55@1.8GHz",
                RAM: "4GB",
                ROM: "16GB EMMC (Optional 32GB)"
              },
              "Video Specifications": {
                "Video Input Interface": "1 x HDMI, supports HDMI 2.0, Max. 4K30fps",
                "Video Output Interface": "2 x HDMI OUT, supports HDMI 2.1, Max. 4K60fps",
                "Video Coding": "H.264/H.265, Max. 8K30FPS",
                "Video Decoding": "H.265/H.264/AV1/VP9/AVS2, Max. 8K60fps",
                "Built-in Camera": "Sensor: 1/2.5 inch CMOS, effective pixel 8.51MP, Field of view angle: DFOV: 121°, HFOV: 110°, 5x Digital zoom, Pan head: mechanical pan head, horizontal/pitch: ±15°, Electronic pan tilt",
                "AI Tracking": "supports",
                "Other Image Features": "Dual screen different display, Backlight compensation: supported, Digital noise reduction: 2D and 3D digital noise reduction, Signal to noise ratio: 55dB"
              },
              "Audio Specifications": {
                Input: "1 x Built-in microphone, 1 x USB, 1 x HDMI embedded audio input, 1 x Bluetooth audio input (optional), 1 x 3.5mm linear input",
                Output: "1 x Integrated speaker (SPL 96dB@0.5m), 1 x USB, 1 x HDMI embedded audio output, 1 x Bluetooth audio output (optional), 1 x 3.5mm linear output",
                Features: "Automatic gain control; Automatic echo cancellation; Automatic noise suppression; Automatic lip sync"
              },
              "Interface Specifications": {
                "USB Interface": "1 x USB 3.0 Type-A Host, 1 x USB 3.0 Type-A OTG, 1 x USB 3.0 Type-C (Used to connect a PC as a camera and Speaker Phone)",
                "Power Interface": "1 x DC 12V/3A",
                "Network Interface": "1 x RJ45, 10M/100M/1000M Base-T, 1 x RJ45, 10M/100M Base-T, Support 15W PSE",
                Connectivity: "1 x WiFi (2.4G&5.8G), 802.11a/b/g/n/ac (Optional)",
                "Bluetooth (Optional)": "BT 5.0"
              },
              "General Specifications": {
                Dimension: "601mm (W) x 141mm (D) x 115mm (H)",
                "Power Supply": "Input Voltage: DC 12V, Power Consumption: 36W",
                "Environmental Requirement": "Temperature: 0°C ~ 40°C (operating state), -40°C ~ 70°C (non-operating state), Humidity: 10% ~ 80% (operating), 0% ~ 95% (non-operating)",
                "Certification and Standard": "CQC, RoHS, CE"
              }
            }
          },
         {
            id: "model_rc_700",
            name: "RC-700",
            description: "7-Mic Array Ceiling/Surface Mic – 360° 8m Pickup, USB + 3.5mm",
            images: [
              "/images/Products/video_conferencing/RC-700.webp",
              "/images/Products/video_conferencing/RC-700(1).webp",
              "/images/Products/video_conferencing/RC-700(2).webp"
            ],

            overview: "The Resoundify RC-700 is a high-performance digital array microphone designed for professional conferencing, presentations, and collaboration environments. Equipped with seven high-sensitivity microphone elements arranged in a precise array, it delivers 360° omnidirectional voice pickup with an impressive range of up to 8 meters, ensuring every participant is heard clearly. Featuring USB 2.0 and 3.5 mm audio interfaces, the RC-700 offers versatile connectivity for seamless integration with conferencing systems, computers, and audio equipment. Powered by USB DC 5V, it provides easy plug-and-play operation without the need for complex setup, making it ideal for meeting rooms, classrooms, and training facilities.",

            keyFeatures: [
              "360° Omnidirectional Pickup: Built-in 7-microphone circular array for full-room voice capture.",
              "Long-Range Voice Pickup: Clear audio pickup up to 8 meters.",
              "Wide Frequency Response: 20 Hz — 16 kHz for natural, full-spectrum audio.",
              "High-Definition Audio: 32 kHz sampling rate for HD broadband sound.",
              "Advanced Audio Processing: Supports AEC, ANS, AGC, and reverberation suppression for enhanced clarity.",
              "USB UAC Protocol Support: Plug-and-play connection with computers and conferencing systems.",
              "Versatile Connectivity: Includes 1 x 3.5 mm line-in and 2 x 3.5 mm line-out for external audio integration.",
              "Compact & Lightweight Design: Ø130 mm x H33 mm, only 0.9 kg for easy placement and portability.",
              "USB Powered: Operates via 5V USB for simple, cable-free installation.",
              "Modern Aesthetic Design: Sleek, professional look that complements any meeting room interior.",
              "Low Latency Transmission: Maintains perfect sync for video conferencing and live meetings.",
              "Ideal for Modern Conferencing: Perfect for corporate boardrooms, classrooms, online meetings, and collaborative workspaces."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Technical Specifications": {
                "Microphone Type": "Digital Array Microphone",
                "Microphone Array": "7 omnidirectional microphones arranged in a circular array",
                "Pickup Distance": "up to 8 meters",
                Sensitivity: "-26 dBFS",
                "Signal-to-Noise Ratio (SNR)": "Greater than 80 dB(A)",
                "Frequency Response": "20 Hz - 16 kHz",
                "Sampling Rate": "32 kHz, high-definition broadband audio",
                "USB Protocol": "UAC support (USB Audio Class)",
                "Automatic Echo Cancellation (AEC)": "Supported",
                "Automatic Noise Suppression (ANS)": "Supported",
                "Automatic Gain Control (AGC)": "Supported",
                "Reverberation Suppression": "Supported"
              },
              "Audio I/O": {
                "Audio Input": "1 × 3.5 mm line-in",
                "Audio Output": "2 × 3.5 mm line-out",
                "USB Interface": "1 × USB audio interface (Type-C or Type-A depending on model)"
              },
              "Mechanical Specifications": {
                Dimensions: "Diameter 130 mm × Height 33 mm",
                "Net Weight": "0.9 kg",
                "Form Factor": "Compact, low-profile circular design suitable for desktop or table placement",
                "Power Input": "USB 5V"
              },
              "General Specifications": {
                "Supported Systems": "Windows, Mac, Linux (via USB UAC protocol)",
                "Application": "Conference rooms, classrooms, training rooms, meeting spaces"
              }
            }
          },
         {
          id: "model_rc_702",
          name: "RC-702",
          description: "POE Cascading 6-Mic Array – 360° Omnidirectional, Up to 6 Units Cascade",
          images: [
            "/images/Products/video_conferencing/RC-702(1).webp",
             "/images/Products/video_conferencing/RC-702.webp",
            "/images/Products/video_conferencing/RC-702(2).webp"
          ],

          overview: "The Resoundify RC-702 is a high-performance omnidirectional digital array microphone designed for professional conferencing and collaboration environments. Equipped with six built-in microphones arranged in a circular array, it ensures 360° voice pickup with exceptional clarity. Its POE (Power over Ethernet) capability enables easy installation and scalability through cascading multiple units, making it ideal for large meeting rooms, boardrooms, and smart conferencing setups. With POE support, the RC-702 simplifies installation by transmitting both power and audio data over a single network cable, reducing clutter and complexity. Its cascading capability allows multiple microphones to be linked together seamlessly, extending coverage for larger rooms without sacrificing audio quality.",

          keyFeatures: [
            "360° Omnidirectional Pickup: Captures voices from all directions using a high SNR microphone array for crystal-clear sound.",
            "Intelligent Audio Processing: Built-in DSP algorithms for automatic noise reduction, echo cancellation, automatic gain control, and voice optimization.",
            "POE (Power over Ethernet): Delivers power and data through a single cable for simplified installation and clean setup.",
            "Six-Microphone Cascading: Supports up to six interconnected microphones with coverage up to 150㎡ for large meeting spaces.",
            "Blind Beamforming Technology: Automatically focuses on active speakers and adapts to room acoustics for improved clarity.",
            "Flexible Installation Options: Desktop placement or ceiling suspension for fast, neat deployment with reduced maintenance.",
            "Scalable Conference Setup: Easily expandable for small to large rooms without sacrificing performance.",
            "Wide Frequency Response: Ensures natural, full-spectrum voice reproduction.",
            "Low Latency Transmission: Maintains real-time audio sync for video conferencing.",
            "Modern Aesthetic Design: Sleek, professional look that complements any meeting room interior."
          ],

          applications: [
            "boardrooms",
            "classrooms",
            "auditoriums"
          ],

          specifications: {
            "Technical Specifications": {
              Type: "Digital array microphone",
              "Array Configuration": "6 omnidirectional microphones in a circular array for full 360° pickup",
              Sensitivity: "-38 dBFS",
              "Signal-to-Noise Ratio (SNR)": "65 dB(A)",
              "Frequency Response": "50 Hz - 16 kHz",
              "Sampling Rate": "32 kHz, high-definition broadband audio",
              "Pickup Distance": "Up to 3 meters (single unit)",
              "Echo Cancellation": "Supported",
              "Noise Suppression": "Supported",
              "Automatic Gain Control": "Supported"
            },
            "Cascading & Coverage": {
              "Cascade Mode": "POE cable",
              "Maximum Units": "Up to 6 microphones",
              "Coverage Area": "Up to 150–6㎡ with full cascade"
            },
            "Connectivity": {
              "Network Ports": "RJ45 upstream and downstream networking ports",
              "USB Interface": "USB Type-C, UAC 1.0 protocol for audio data, firmware upgrades, and parameter configuration",
              "Analog Audio": "AUX1 & AUX2 linear audio input/output",
              POE: "48V IEEE 802.3at standard via cascade",
              "USB Power": "5V / 500mA (single unit)"
            },
            "Mechanical Specifications": {
              Dimensions: "Ø170 mm × H40 mm",
              "Net Weight": "370 g",
              "Body Design": "Low-profile, modern round design for minimal visual obstruction",
              Color: "Professional matte finish"
            },
          }
        },
        ],
      },
      {
        id: "series_video_codec_control_panel",
        name: "Video codec and control panel",
        description: "Smart video conferencing endpoints and intuitive control panels for enhanced meeting experiences.",
        image: "/images/Products/video_conferencing/RC-VCE.webp",
        features: ["4K Endpoint", "Android OS", "Touch Control"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_rc_vce",
            name: "RC-VCE",
            description: "4K Smart Detachable Video Conferencing Endpoint Android 12",
            images: [
              "/images/Products/video_conferencing/RC-VCE.webp"
            ],

            overview: "This Resoundify RC-VCE is designed specifically for various meeting scenarios such as government and enterprise conferences, emergency command, telemedicine, and remote education. Powered by the latest generation processor, it ensures smooth and stable operation of the video conferencing system. With a wealth of audio and video input/output interfaces, it meets the needs of diverse meeting environments. Equipped with Android 12, this device features a powerful 4-core A76 + 4-core A55 high-performance CPU and a 6TOPs AI NPU. Its robust hardware encoding/decoding and signal processing capabilities ensure a stable and smooth conference collaboration experience.",

            keyFeatures: [
              "High-performance Open Platform: Equipped with Android 12, powerful 4-core A76 + 4-core A55 CPU and 6TOPs AI NPU for stable audio/video processing.",
              "Dual 4K Video Streaming: Supports simultaneous input of two 4K video signals and output of two 4K streams, expanding conference scenarios.",
              "Dual-screen Display: Two HDMI outputs allow simultaneous display of conference scenes and shared content (documents, videos, images).",
              "Built-in Audio Processing Algorithms: Includes AEC, AGC, ANS with full-duplex processing for clear, natural sound quality.",
              "Quiet Design: Fanless metal shell with excellent heat dissipation for silent, long-term high-frequency operation.",
              "Multiple Interfaces: Supports USB 3.0, HDMI, RJ45, LINE and more to meet diverse conference needs."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Standard Specifications": {
                "Operating System": "Android 12",
                CPU: "4 × Cortex-A76 + 4 × Cortex-A55",
                RAM: "4GB",
                ROM: "16GB EMMC (optional 32GB)"
              },
              "Video Specifications": {
                "Video Encoding": "H.264/H.265, up to 8K30fps",
                "Video Decoding": "4KP30 (min bandwidth 2048Kbps), 1080p (512Kbps), 720p (384Kbps)",
                "Active Image Resolution": "4KP30, 1080p, 720p",
                "Other Image Features": "Dual screen different display"
              },
              "Audio Specifications": {
                Features: "Acoustic Echo Cancellation (AEC), Automatic Gain Control (AGC), Automatic Noise Suppression (ANS), Lip-Sync Supported"
              },
              "Network Specifications": {
                "Network Interface": "1 × RJ45: 10/100/1000 Base-T, 1 × RJ45: 10/100/1000 Base-T (Support 25W PSE)",
                "Wireless Connectivity": "WiFi 802.11a/b/g/n/ac, Bluetooth 5.2"
              },
              "Interface Specifications": {
                "Audio Input Interface (6 inputs)": "1 × Mini XLR mic input, 1 × 3.5mm linear input, 2 × HDMI embedded audio, 1 × DMIC, 1 × USB",
                "Audio Output Interface (4 outputs)": "1 × 3.5mm linear output, 2 × HDMI embedded audio, 1 × USB",
                "Video Input Interface (4 inputs)": "2 × HDMI input, 1 × USB input, 1 × POE input",
                "Video Output Interface (2 outputs)": "2 × HDMI output",
                "Power Interface": "1 × DC 12V",
                Indicator: "1 × Dual-color indicator light",
                "Infrared Interface": "2 × Infrared interface"
              },
              "General Specifications": {
                Dimension: "Terminal (excluding protrusions): 348mm (W) × 148mm (D) × 37mm (H)",
                "Power Supply": "DC 12V, Max. Power Consumption: 36W",
                "Operating Temperature": "0°C ~ 40°C",
                "Storage Temperature": "-40°C ~ 70°C",
                "Operating Humidity": "10% ~ 80%",
                "Non-Operating Humidity": "0% ~ 95% (non-condensing)"
              }
            }
          },
          {
            id: "model_rc_10cp",
            name: "RC-10CP",
            description: "Zoom meeting controlling Panel - 10.1-inch IPS touch screen, Android 9.0 system",
            images: [
              "/images/Products/video_conferencing/RC-10CP.webp"
            ],

            overview: "This Resoundify RC-10CP 10.1-inch capacitive touch panel operates on the Android 9.0 system, allowing seamless installation of ZOOM Controller and other third-party conference control applications. It is designed to manage conference rooms or video conferencing terminals with ease and flexibility. Equipped with a full SDK, the device supports customized development tailored to various industry requirements. Installation is simple, featuring a built-in adjustable bracket and optional wall-mount capability. For communication, it includes an optional built-in IP phone client with H.323/SIP support, enabling use as an IP phone or audio conference terminal through third-party applications. The device also supports dual power supply modes, offering both USB 5V and PoE input for convenient and reliable power options.",

            keyFeatures: [
              "Touch Screen with Android System: 10.1-inch capacitive screen with Android 9.0 system, the ZOOM controller and other third-party conference control applications can be installed to control the conference or video conference terminal.",
              "Full SDK: Full SDK supports customized development for various industry needs.",
              "Easy Installation: Built-in bracket to adjust angle easily and can be wall mounted.",
              "Built in IP Phone Client (Optional): Built in H.323/SIP client software, can be used as an IP phone. You can also install third-party conference software as an audio conference terminal.",
              "Two Power Supply Modes: Support USB 5V and PoE power supply."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Standard Specifications": {
                "Operating System": "Android 9.0",
                Storage: "4GB RAM + 16GB ROM",
                "Video Codec": "Encoder: H.264/H.265, 1x1080P@60fps; Decoder: VP9 Profile-2 up to 4Kx2K@60fps, H.265 HEVC MP-10@L5.1 up to 4Kx2K@60fps, AVS2-P2 Profile up to 4Kx2K@60fps, H.264 AVC HP@L5.1 up to 4Kx2K@30fps, H.264 MVC up to 1080P@60fps",
                "Touch Screen": "10.1-inch IPS touch screen with 10-point touch support, Resolution: 1920x1080 (1280x800 optional), Visual angle: 170°",
                Bluetooth: "5.0",
                "WIFI Standard": "IEEE802.11a/b/g/n/ac, WPA, WPA2"
              },
              "Interface Specifications": {
                "USB Interface": "1 x USB2.0 Type-C",
                "Network Interface": "1 x RJ45: 10/100 Base-T, 1 x WiFi"
              },
              "General Specifications": {
                Dimension: "243mm (W) x 164mm (D) x 33mm (H) | Terminal (excluding protrusions): 348mm (W) x 148mm (D) x 37mm (H)",
                Microphone: "Pickup distance is 2 meters",
                Speaker: "1 x 1.2W",
                "Power Supply": "DC 12V, Max. Power Consumption: 36W, Also supports USB 5V and PoE",
                "Operating Temperature": "0°C ~ 40°C",
                "Storage Temperature": "-40°C ~ 70°C",
                "Operating Humidity": "10% ~ 80%",
                "Non-Operating Humidity": "0% ~ 95% (non-condensing)",
                "Ambient Noise": "<46dBA SPL",
                "Certification and Standards": "CCC, RoHS"
              }
            }
          },
          {
            id: "model_rc_rec",
            name: "RC-REC",
            description: "Professional conferencing recorder with 1 TB",
            images: [
              "/images/Products/video_conferencing/RC-REC.webp"
            ],

            overview: "The Resoundify RC-REC is a compact and portable all-in-one recording and playback device that integrates high-definition video, audio, HDMI, USB, and multiple input/output interfaces, making it ideal for versatile multimedia applications. It supports both HD and SD signal inputs with automatic signal detection and flexible layout options, allowing users to conveniently record video, audio, and computer screen content simultaneously. The system generates standard MP4 video files for easy storage and playback, and also supports local preview and review functions. Featuring HDMI and VGA dual output design, it enables HDMI output for video conferencing displays and VGA output for direct monitoring or control interfaces. Additionally, the device can be managed and controlled through a PC system, providing a user-friendly and efficient solution for recording, streaming, and presentation needs.",

            keyFeatures: [
              "Compact portable equipment, integrated high-definition video, audio, VGA, USB and other input and output interfaces.",
              "Support access HD and SD signals, automatic identification signal combined layout pattern of choice, can record video, audio and computer screen simultaneously with local preview playback.",
              "Recording and generating common MP4 video files.",
              "You can use PC to manage and control the system.",
              "HDMI, VGA dual output design. HDMI output for video conference screen, VGA output for directed interface."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "System Specifications": {
                System: "Embedded Linux operating system",
                "Output Resolution": "Video Output: 1080P; Directed output: 1080P; HD video: 720P, 1080P",
                "Video encoding": "H.264 High Profile",
                "Audio encoding": "AAC",
                "Recording file format": "MP4",
                Storage: "Supports 4TB of storage space, with a 1TB hard disk included",
                Downloads: "USB interface copy or PC client download",
                Management: "WEB, Front panel buttons, PC management plug-in control",
                "Live and on-demand": "RTSP standard data stream live, RTMP standard data stream live, TS multicast stream data push, Local decoding preview playback"
              },
              "General Specifications": {
                Size: "440mm × 270mm × 44mm",
                Weight: "2kg",
                "Operating temperature": "-20°C ~ 60°C",
                "Relative humidity": "5% to 95%",
                "Storage and transport temperature": "-40°C ~ 80°C",
                "Operating voltage": "DC 12V",
                "Operating Current": "9.2A",
                Power: "70W"
              }
            }
          },
          // {
          //   id: "model_rc_10cp",
          //   name: "RC-10CP",
          //   description: "Zoom meeting controlling Panel * 10.1-inch IPS touch screen, Android 9.0 system",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=RC-10CP+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=RC-10CP+2"
          //   ]
          // },
        ],
      },
      {
        id: "series_av_processor",
        name: "AV Processor",
        description: "Video Conference AV bridges for seamless integration of audio-visual systems.",
        image: "/images/Products/video_conferencing/AV_PROCESSOR.webp",
        features: ["Video Bridging", "Conference Integration"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_rc_avb",
            name: "RC-AVB",
            description: "Video Conference AV Bridge",
            images: [
              "/images/Products/video_conferencing/AV_PROCESSOR.webp"
            ],

            overview: "The RC-AVB is a professional 6x1+1 seamless scaler switcher with 4× HD/3G-SDI + 2× HDMI inputs and dual HDMI + USB outputs. Delivers true seamless switching (no black/jitter), supports up to 1080p60, and includes an adjustable freeze function (0.5–6 seconds). Works as a powerful USB video bridge for Zoom, Teams, Skype for Business, etc. With RS232 & Ethernet control, it integrates perfectly with central control systems and enables intelligent camera auto-tracking when paired with CLEACON/CLASSIC-D series. Ideal for boardrooms, classrooms, auditoriums, and live events.",

            keyFeatures: [
              "6x1+1 Seamless Scaler Switcher: 4× SDI + 2× HDMI inputs, true seamless switching with zero black screen or jitter.",
              "Dual HDMI + USB Output: 1+1 HDMI outputs + 1× USB 2.0 video output for conferencing platforms (Zoom, Teams, Skype).",
              "1080p60 Max Resolution with full scaling support across all inputs.",
              "Adjustable Image Freeze: 0.5 to 6 seconds (perfect for transitions).",
              "USB Video Bridge: Plug-and-play integration with all major soft-codec platforms.",
              "Control & Auto-Tracking: RS232 + Ethernet control, compatible with CLEACON/CLASSIC-D series for intelligent camera tracking.",
              "Channel Number Display ON/OFF option for clean presentation look."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Video Input": {
                "HDMI Input": "2 × HDMI-A (HDMI 1.3a, HDCP 1.3, DVI 1.0), 165MHz, up to 1080p60, max 95m cable",
                "SDI Input": "4 × BNC (270Mbps SDI / 1.485Gbps HD-SDI / 2.97Gbps 3G-SDI), up to 1080p60, <100m with certified cable"
              },
              "Video Output": {
                "HDMI Output": "2 × HDMI-A, 165MHz, up to 1080p60 / 1080i60",
                "USB Output": "1 × USB 2.0 Type-A (UVC video bridge)"
              },
              "Control & Mechanical": {
                "Control Method": "RS232, Ethernet (TCP/IP), Front Panel buttons",
                Dimensions: "483mm (L) × 260mm (W) × 43.6mm (D) (1U rack)",
                Weight: "Approx. 3.5kg",
                "Analog Audio Level": "+4 dBu with 20 dB headroom"
              },
              "General Specifications": {
                "Power Supply": "AC 100-240V universal",
                "Power Consumption": "15W typical",
                "Operating Temperature": "0°C ~ 40°C",
                "Storage Temperature": "-20°C ~ 60°C"
              }
            }
          },
        ],
      },
      // {
      //   id: "series_large_meeting_room_setup",
      //   name: "Large meeting room setup",
      //   description: "Comprehensive solutions for large meeting room audio and video tracking, enhancing collaboration.",
      //   image: "https://placehold.co/400x300/F0F4F8/22C55E?text=Meeting+Room",
      //   features: ["AI Speech", "Video Tracking", "Dante Microphones"],
      //   status: "In Stock",
      //   type: "series",
      //   models: [
      //     {
      //       id: "model_rai_150",
      //       name: "RAI-150",
      //       description: "Multi position camera in the venue AI Speech",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-150+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-150+2"
      //       ]
      //     },
      //     {
      //       id: "model_rai_tb",
      //       name: "RAI-TB",
      //       description: "Intelligent audio video tracking box",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-TB+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-TB+2"
      //       ]
      //     },
      //     {
      //       id: "model_rai_128c",
      //       name: "RAI-128C",
      //       description: "Dante ceiling mount array microphone",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-128C+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-128C+2"
      //       ]
      //     },
      //   ],
      // },
      // {
      //   id: "series_av_recorder",
      //   name: "AV Recoder",
      //   description: "Professional conferencing recorders with ample storage for capturing important meetings.",
      //   image: "https://placehold.co/400x300/F0F4F8/22C55E?text=AV+Recorder",
      //   features: ["1TB Storage", "Professional Recording"],
      //   status: "In Stock",
      //   type: "series",
      //   models: [
      //     { 
      //       id: "model_rc_rec", 
      //       name: "RC-REC", 
      //       description: "Professional conferencing recorder with 1 TB", 
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=RC-REC+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=RC-REC+2"
      //       ] 
      //     },
      //   ],
      // },
    ],
  },
  {
    id: "brand_dante_wall_plates",
    name: "Dante Wall Plates",
    category: "dante_wall_plates",
    description: "Convenient Dante audio network access points with various input/output options.",
    image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=Dante+Wall+Plates",
    type: "brand",
    series: [
      {
        id: "series_dante_wall_plate",
        name: "Dante wall plate",
        description: "Versatile Dante wall plates featuring XLR, RCA, 3.5mm, and Bluetooth connectivity.",
        image: "/images/Products/dante_wall_plates/XLRIO.webp",
        features: ["XLR I/O", "Bluetooth", "RCA/TRS", "PoE"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_dw_12_xlrio",
            name: "DW 12-XLRiO",
            description: "Dante wall plate with 2 XLR in and 2 XLR Out",
            images: [
              "/images/Products/dante_wall_plates/XLRIO.webp",
            ]
          },
          {
            id: "model_dw_33_lrbtio",
            name: "DW 33-LRBTiO",
            description: "Dante wall plate with Bluetooth, RCA, and 3.5mm inputs",
            images: [
              "/images/Products/dante_wall_plates/LRBTIO.webp",
            ]
          },
          // {
          //   id: "model_dw_44_lrbtio",
          //   name: "DW 44-LRBTiO",
          //   description: "Dante wall plate with RCA bluetooth and TRS",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=DW+44-LRBTiO+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=DW+44-LRBTiO+2"
          //   ]
          // },
          // {
          //   id: "model_dw_20_lrbt_io",
          //   name: "DW 20 - LRBT iO",
          //   description: "Dante wall plate with Bluetooth or stereo signals and Dante/AES67 network digital signals",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=DW+20+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=DW+20+2"
          //   ]
          // },
          {
            id: "model_dw_25_lrbt_io",
            name: "DW 25 - LRBT iO",
            description: "Dante Wall Plate – 4x XLR Input with 48V Phantom",
            images: [
              "/images/Products/dante_wall_plates/DW25-LRBT.webp",
            ]
          },
          {
            id: "model_dw_26_lrbt_io",
            name: "DW 26 - LRBT iO",
            description: "Dante Wall Panel – Bluetooth 5.0 + Stereo RCA Input",
            images: [
              "/images/Products/dante_wall_plates/DW26-LRBT.webp",
            ]
          },
          {
            id: "model_dw_27_lrbt_io",
            name: "DW 27 - LRBT iO",
            description: "Dante Wall Panel (Black) – Bluetooth 5.0 + Stereo RCA",
            images: [
              "/images/Products/dante_wall_plates/DW27-LRBT.webp",
            ]
          },
          {
            id: "model_dw_28_lrbt_io",
            name: "DW 28 - LRBT iO",
            description: "Dante Wall Panel (Rose Gold) – Bluetooth 5.0 + Stereo RCA",
            images: [
              "/images/Products/dante_wall_plates/DW28-LRBT.webp",
            ]
          },
        ],
      },
      {
        id: "series_customizable_floor_box",
        name: "Customizable Floor box",
        description: "Tailored floor boxes for flexible and discreet cable management and connectivity.",
        image: "/images/Products/dante_wall_plates/floor_box.webp",
        features: ["Customizable Ports", "Durable Design"],
        status: "Available to Order",
        type: "series",
        models: [
          {
            id: "model_custom_floor_box",
            name: "Custom",
            description: "Customizable Floor box",
            images: [
              "/images/Products/dante_wall_plates/floor_box.webp",
            ]
          },
        ],
      },
      {
        id: "series_customizable_wall_plate",
        name: "Customizable wall plate",
        description: "Design your own wall plates for unique installation needs and aesthetic preferences.",
        image: "/images/Products/dante_wall_plates/wall_plate.webp",
        features: ["Configurable Layout", "Various Finishes"],
        status: "Available to Order",
        type: "series",
        models: [
          {
            id: "model_custom_wall_plate",
            name: "Custom",
            description: "Customizable wall plate",
            images: [
              "/images/Products/dante_wall_plates/wall_plate.webp",
            ]
          },
        ],
      },
    ],
  },
  {
    id: "brand_microphones",
    name: "Professional Microphones",
    category: "microphones",
    description: "High-quality microphones for every application, from live sound to studio recording.",
    image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=Microphones",
    type: "brand",
    series: [
      {
        id: "series_2_channel_wireless_mic",
        name: "2 Channel wireless mic",
        description: "Dual wireless microphone systems offering versatility with handheld, bodypack, and desktop options.",
        image: "/images/Products/Microphone/AM-RX2H.webp",
        features: ["Dual Channel", "UHF Frequency", "Handheld/Bodypack/Desktop Options"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_am_rx2h",
            name: "AM-RX2H",
            description: "RUHF-2H Dual Wireless Handheld Microphone System",
            images: [
              "/images/Products/Microphone/AM-RX2H.webp",
            ]
          },
          {
            id: "model_am_rx2b",
            name: "AM-RX2B",
            description: "RUHF-2B Dual Wireless Bodypack Microphone System",
            images: [
              "/images/Products/Microphone/RX2B.webp",
            ]
          },
          {
            id: "model_am_rx2d",
            name: "AM-RX2D",
            description: "RUHF-2D Dual Wireless Desktop Microphone System",
            images: [
              "/images/Products/Microphone/AM-RX2D.webp",
            ]
          },
        ],
      },
      // {
      //   id: "series_4_channel_wireless_mic",
      //   name: "4 Channel wireless mic",
      //   description: "Quad wireless microphone systems providing extensive coverage for larger setups.",
      //   image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=4Ch+Wireless",
      //   features: ["Quad Channel", "UHF Frequency", "Multiple Mic Types"],
      //   status: "In Stock",
      //   type: "series",
      //   models: [
      //     {
      //       id: "model_am_rx4h",
      //       name: "AM-RX4H",
      //       description: "RUHF-4H Quad Wireless Handheld Microphone System",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4H+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4H+2"
      //       ]
      //     },
      //     {
      //       id: "model_am_rx4b",
      //       name: "AM-RX4B",
      //       description: "RUHF-4B Quad Wireless Bodypack Microphone System",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4B+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4B+2"
      //       ]
      //     },
      //     {
      //       id: "model_am_rx4d",
      //       name: "AM-RX4D",
      //       description: "RUHF-4D Quad Wireless Desktop Microphone System",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4D+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4D+2"
      //       ]
      //     },
      //   ],
      // },
      // {
      //   id: "series_8_channel_wireless_mic",
      //   name: "8 Channel wireless mic",
      //   description: "Eight-channel wireless microphone systems ideal for large-scale events and installations.",
      //   image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=8Ch+Wireless",
      //   features: ["Eight Channel", "UHF Frequency", "Scalable Systems"],
      //   status: "In Stock",
      //   type: "series",
      //   models: [
      //     {
      //       id: "model_am_rx8h",
      //       name: "AM-RX8H",
      //       description: "RUHF-8H Eight Wireless Handheld Microphone System",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8H+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8H+2"
      //       ]
      //     },
      //     {
      //       id: "model_am_rx8b",
      //       name: "AM-RX8B",
      //       description: "RUHF-8B Eight Wireless Bodypack Microphone System",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8B+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8B+2"
      //       ]
      //     },
      //     {
      //       id: "model_am_rx8d",
      //       name: "AM-RX8D",
      //       description: "RUHF-8D Eight Wireless Desktop Microphone System",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8D+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8D+2"
      //       ]
      //     },
      //   ],
      // },
      // {
      //   id: "series_antenna_system",
      //   name: "Antenna System",
      //   description: "Enhance your wireless microphone range and reliability with dedicated antenna systems.",
      //   image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=Antenna+System",
      //   features: ["Signal Enhancement", "Wide Frequency Range"],
      //   status: "In Stock",
      //   type: "series",
      //   models: [
      //     {
      //       id: "model_am_ac800",
      //       name: "AM-AC800",
      //       description: "Antenna System",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-AC800+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-AC800+2"
      //       ]
      //     },
      //   ],
      // },
    ],
  },
  {
    id: "brand_all_in_one",
    name: "All-in-One Processors",
    category: "all_in_one_processor",
    description: "Integrated audio and video processing solutions for centralized control.",
    image: "https://placehold.co/400x300/F0F4F8/FF5733?text=All-in-One",
    type: "brand",
    series: [
      {
        id: "series_all_in_one_processor",
        name: "ALL In one processor",
        description: "Multifunctional integrated processors offering comprehensive audio and video management.",
        image: "/images/Products/all_in_one_processor/CLIMBER-1005.webp",
        features: ["Integrated DSP", "Video Switching", "Modular Inputs"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_fusion_1005",
            name: "Fusion-1005",
            description: "Five-in-one Integrated Processor",
            images: [
              "/images/Products/all_in_one_processor/CLIMBER-1005.webp",
              "/images/Products/all_in_one_processor/CLIMBER-1005b.webp"
            ],
            overview: `The Fusion -1005 is a state-of-the-art five-in-one integrated processor designed for advanced audio-visual, control, and IoT applications in professional environments. Built on an industrial-grade, virus-resistant embedded system with a high-performance DSP core and OPS computer, it delivers seamless 4K video matrix switching, robust audio processing, and smart centralized control. With support for Zigbee IoT, multi-stream recording, and third-party platform integration, it is ideal for corporate boardrooms, auditoriums, educational facilities, live event venues, and multimedia studios.`,
            keyFeatures: [
                      "Smart Centralized Control: Integrated control of multimedia equipment via a conference tablet, enabling unified management of audio/video, conferencing, recording, broadcasting, and third-party peripherals.",
                      "Standard Control Interfaces: Supports RS232/485, IR, IO, and RELAY connections for common AV and automation devices.",
                      "Zigbee IoT Protocol: Enables wireless control of smart devices through Zigbee integration.",
                      "Bi-directional Serial Communication: Supports two-way control over a single serial link for seamless device interaction.",
                      "Hybrid Control Design: Combines wired and wireless IoT control, preventing interference and disconnection even in shielded environments.",
                      "4K Video Matrix Switching: 4-in 2-out seamless 4K@60Hz video switching for fast and clear AV transitions.",
                      "Digital Audio Interface: Features 8-in/4-out configuration with network and HDMI audio routing.",
                      "Built-in Amplifier: Delivers 2×100W output power for direct speaker drive.",
                      "Multi-Stream Local Recording: Records 4–6 video streams simultaneously for meetings, training, or lectures.",
                      "IPC Camera Integration: Supports up to 12 IPC video inputs for live output, display, or recording.",
                      "Third-Party Platform Integration: RTMP push and RTSP pull for seamless integration with external platforms.",
                      "Industrial-Grade System: Virus-resistant embedded architecture with 32GB RAM, 1TB SSD OPS computer.",
                      "Advanced Audio Processing: Includes AEC, AGC, ANC/ANS, AFC, audio mix matrix, and dodger ducker for superior sound management.",
                      "Maintenance Interface: Web-based configuration, upgrades, logs, remote O&M, Telnet debugging, and USB restore.",
                      "Energy-Saving Features: Network sleep/wake and one-touch system shutdown for efficient power management.",
                      "Enhanced Processing Power: Nine integrated processing functions, including advanced dynamics, multi-zone control, and IoT ecosystem management."
                    ],
            applications: [
              "Meeting Room",
              "Conference Center",
              "Courtrooms",
              "Classrooms",
              "Lecture Halls",
              "House of Worship",
              "Hotels",
              "Event Venues",
              "Training Centers",
              "All Hand Space"
            ],

            specifications: {
                "System Specifications": {
                  "System Architecture": "Industrial-grade embedded system, virus-resistant",
                  "Operating System": "Embedded system (OS not specified)",
                  "Built-in PC": "OPS computer with 16GB RAM, 512GB SSD",
                  "Processor": "High-performance DSP Core with Video Processing Unit",
                  "Sampling Rate (Audio)": "48 kHz ± 100 ppm",
                  "Video Resolution": "Up to 4K@60Hz (4:4:4)",
                  "Main Stream": "1080P@60",
                  "Preview Stream": "CIF",
                  "Encoding/Decoding Bandwidth": "512Kbps ~ 16Mbps",
                  "Frequency Response (Audio)": "20 Hz – 20 kHz ± 0.5 dB",
                  "Dynamic Range (Audio)": "115 dB (A-weighted)",
                  "THD + Noise (Audio)": "<0.005% @ 4 dBu",
                  "Latency (Audio)": "<1 ms (input to output)",
                  "Latency (Video)": "<16 ms (input to output)",
                  "Delay Memory": "150 mono seconds (audio)",
                  "Control Inputs": "0–3.3 VDC",
                  "External Control Potentiometer": "10k Ohm, linear",
                  "Logic Outputs": "Low (0 V) active, high (5 V) inactive",
                  "Logic Output Max Power": "24 VDC / 50 mA",
                  "Serial I/O": "2 x RS-232, 2 x RS-485, 57.6 kbps, 8 data bits, 1 stop bit, no parity",
                  "Stored Presets": "500 storable presets",
                  "IoT Protocol": "Zigbee for wireless device control",
                  "Amplifier Output": "2 x 100W @ 8 Ohms, 2 x 150W @ 4 Ohms",
                  "Power Input": "AC 100–240V, 50/60Hz",
                  "Power Consumption": "Typical: 50W, Full Load: 750W",
                  "Power Switch": "One-touch system switch, sleep/wake via network"
                },
                "Analog and Digital Inputs/Outputs": {
                  "Analog Audio Inputs": "6 channels Phoenix terminal (mic/line level)",
                  "Analog Audio Outputs": "2 pairs L/R stereo Phoenix terminal outputs",
                  "Digital Audio Inputs/Outputs": "6-in/2-out (network and HDMI audio routing)",
                  "Video Inputs": "3 x HDMI inputs (up to 4K@60Hz), 2 x RTSP IP camera streams, up to 12 IPC video inputs",
                  "Video Outputs": "3 x HDMI outputs (up to 4K@60Hz), 1 channel HDMI decoding",
                  "Connectors (Audio)": "Phoenix terminal (3.81 mm)",
                  "Connectors (Video)": "HDMI 2.0, RJ45 (for IPC)",
                  "Nominal Level (Audio)": "+4 dBu with 20 dB headroom",
                  "Maximum Level (Audio)": "+24 dBu",
                  "Mic Pre-amp Gain": "0 to 48 dB (in 3 dB steps)",
                  "Phantom Power": "+48 VDC, 10 mA per input",
                  "Input Impedance (Audio)": "5k Ohms balanced",
                  "Input Dynamic Range (Audio)": ">115 dB, A-weighted",
                  "Input THD + Noise (Audio)": "<-95 dB, 1 kHz @ +15 dBu",
                  "Input Latency (Audio)": "0.25 ms",
                  "Output Impedance (Audio)": "600 Ohms balanced",
                  "Output Dynamic Range (Audio)": "115 dB, A-weighted",
                  "Output THD + Noise (Audio)": "<-90 dB, 1 kHz @ +8 dBu",
                  "Output Latency (Audio)": "0.25 ms"
                },
                "Control Specifications": {
                  "Control Interfaces": "2 x RS-232, 2 x RS-485, 2 x Relay, 2 x I/O, 2 x IR, Zigbee",
                  "Bi-directional Serial Communication": "Supported over RS232/485",
                  "Display Control": "Supports central control panel (10.1”/4” Android PoE or non-PoE options)",
                  "Central Control Functions": "One-touch control for system power, signal switching, volume, recording, broadcasting, remote call, environment control",
                  "Maintenance Interface": "Web interface for configuration, upgrades, logs, remote O&M, Telnet debugging, USB restore",
                  "Third-Party Platform Integration": "RTMP push stream, RTSP pull stream",
                  "Recording Capability": "4–6 simultaneous video streams (local storage)",
                  "USB Ports": "1 x USB Type-A, 1 x USB Type-C",
                  "Network Interfaces": "4 x PoE LAN ports, 1 x WAN port, 1 x SFP Fiber port, 2 x WiFi Antennas"
                },
                "Mechanical Specifications": {
                  "Installation": "3U rackmount (telecom standard)",
                  "Dimensions": "437 mm (W) × 410 mm (D) × 132.5 mm (H)",
                  "Operating Temperature": "0–45°C",
                  "Operating Humidity": "10%–90%",
                  "Operating Altitude": "≤ 5000 meters"
                }
              },
          },
          {
            id: "model_fusion_1008",
            name: "Fusion-1008",
            description: "Nine-in-one Integrated Processor",
            images: [
              "/images/Products/all_in_one_processor/CLIMBER-1008a.webp",
              "/images/Products/all_in_one_processor/CLIMBER-1008b.webp",
              // "/images/Products/all_in_one_processor/CLIMBER-1008c.webp"
            ],
            overview: `The Fusion -1008 is a next-generation nine-in-one integrated processor designed for comprehensive audio-visual, control, and IoT applications in professional environments. Built on an industrial-grade, virus-resistant embedded system with a high-performance DSP core and integrated OPS computer, it delivers seamless 4K video matrix switching, advanced audio processing, and smart centralized control. With enhanced capabilities for multi-stream recording, third-party platform integration, and Zigbee IoT connectivity, it is the ultimate solution for large-scale corporate boardrooms, auditoriums, educational facilities, live event venues, and multimedia studios.`,

            keyFeatures: [
                  "Smart Centralized Control: Integrated control of multimedia equipment via a conference tablet, enabling unified management of audio/video, conferencing, recording, broadcasting, and third-party peripherals.",
                  "Standard Control Interfaces: Supports RS232/485, IR, IO, and RELAY connections for common AV and automation devices.",
                  "Zigbee IoT Protocol: Enables wireless control of smart devices through Zigbee integration.",
                  "Bi-directional Serial Communication: Supports two-way control over a single serial link for seamless device interaction.",
                  "Hybrid Control Design: Combines wired and wireless IoT control, preventing interference and disconnection even in shielded environments.",
                  "4K Video Matrix Switching: 4-in 2-out seamless 4K@60Hz video switching for fast and clear AV transitions.",
                  "Digital Audio Interface: Features 8-in/4-out configuration with network and HDMI audio routing.",
                  "Built-in Amplifier: Delivers 2×100W output power for direct speaker drive.",
                  "Multi-Stream Local Recording: Records 4–6 video streams simultaneously for meetings, training, or lectures.",
                  "IPC Camera Integration: Supports up to 12 IPC video inputs for live output, display, or recording."
                ],

            applications: [
              "Meeting Room",
              "Conference Center",
              "Courtrooms",
              "Classrooms",
              "Lecture Halls",
              "House of Worship",
              "Hotels",
              "Event Venues",
              "Training Centers",
              "All Hand Space"
            ],

            specifications: {
              "System Specifications": {
                "System Architecture": "Industrial-grade embedded system, virus-resistant",
                "Operating System": "Embedded system (OS not specified)",
                "Built-in PC": "OPS computer with 32GB RAM, 1TB SSD",
                "Processor": "High-performance DSP Core with Advanced Video Processing Unit",
                "Sampling Rate (Audio)": "48 kHz ± 100 ppm",
                "Video Resolution": "Up to 4K@60Hz (4:4:4)",
                "Main Stream": "1080P@60",
                "Preview Stream": "CIF",
                "Encoding/Decoding Bandwidth": "512Kbps ~ 20Mbps",
                "Frequency Response (Audio)": "20 Hz – 20 kHz ± 0.5 dB",
                "Dynamic Range (Audio)": "118 dB (A-weighted)",
                "THD + Noise (Audio)": "<0.004% @ 4 dBu",
                "Latency (Audio)": "<0.8 ms (input to output)",
                "Latency (Video)": "<14 ms (input to output)",
                "Delay Memory": "200 mono seconds (audio)",
                "Control Inputs": "0–3.3 VDC",
                "External Control Potentiometer": "10k Ohm, linear",
                "Logic Outputs": "Low (0 V) active, high (5 V) inactive",
                "Logic Output Max Power": "24 VDC / 50 mA",
                "Serial I/O": "4 x RS-232, 4 x RS-485, 57.6 kbps, 8 data bits, 1 stop bit, no parity",
                "Stored Presets": "1000 storable presets",
                "IoT Protocol": "Zigbee for wireless device control",
                "Amplifier Output": "2 x 150W @ 8 Ohms, 2 x 200W @ 4 Ohms",
                "Power Input": "AC 100–240V, 50/60Hz",
                "Power Consumption": "Typical: 60W, Full Load: 900W",
                "Power Switch": "One-touch system switch, sleep/wake via network"
              },
              "Analog and Digital Inputs/Outputs": {
                "Analog Audio Inputs": "8 channels Phoenix terminal (mic/line level)",
                "Analog Audio Outputs": "4 pairs L/R stereo Phoenix terminal outputs",
                "Digital Audio Inputs/Outputs": "8-in/4-out (network and HDMI audio routing)",
                "Video Inputs": "4 x HDMI inputs (up to 4K@60Hz), 4 x RTSP IP camera streams, up to 16 IPC video inputs",
                "Video Outputs": "4 x HDMI outputs (up to 4K@60Hz), 1 channel HDMI decoding",
                "Connectors (Audio)": "Phoenix terminal (3.81 mm)",
                "Connectors (Video)": "HDMI 2.0, RJ45 (for IPC)",
                "Nominal Level (Audio)": "+4 dBu with 20 dB headroom",
                "Maximum Level (Audio)": "+24 dBu",
                "Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps)",
                "Phantom Power": "+48 VDC, 10 mA per input",
                "Input Impedance (Audio)": "5k Ohms balanced",
                "Input Dynamic Range (Audio)": ">118 dB, A-weighted",
                "Input THD + Noise (Audio)": "<-96 dB, 1 kHz @ +15 dBu",
                "Input Latency (Audio)": "0.2 ms",
                "Output Impedance (Audio)": "600 Ohms balanced",
                "Output Dynamic Range (Audio)": "118 dB, A-weighted",
                "Output THD + Noise (Audio)": "<-92 dB, 1 kHz @ +8 dBu",
                "Output Latency (Audio)": "0.2 ms"
              },
              "Mechanical Specifications": {
                "Installation": "3U rackmount (telecom standard)",
                "Dimensions": "437 mm (W) × 430 mm (D) × 132.5 mm (H)",
                "Operating Temperature": "0–45°C",
                "Operating Humidity": "10%–90%",
                "Operating Altitude": "≤ 5000 meters"
              }
            },
          },
          {
              id: "model_fusion_1009",
              name: "Fusion-1009",
              description: "Twelve-in-one Integrated Processor",
              images: [
                "/images/Products/all_in_one_processor/CLIMBER-1009.webp",
                "/images/Products/all_in_one_processor/CLIMBER-1009b.webp"
              ],
              overview: `The Fusion-1008 is a next-generation 12-in-1 integrated processor, engineered for superior multimedia performance and seamless system integration. Building on the success of its predecessor, the Fusion-1009 consolidates twelve powerful functions into a single, compact unit—maximizing efficiency, minimizing wiring complexity, and reducing installation time. Ideal for smart classrooms, advanced conference rooms, hybrid lecture halls, command centers, and multifunctional venues, the Fusion-1009 supports a broad range of applications—from local presentations and remote collaboration to live streaming and interactive training. With robust reliability, intuitive control, and high-resolution performance, the Fusion-1009 delivers unmatched flexibility for modern AV environments.`,

              keyFeatures: [
                "Smart Centralized Control: Control and manage all multimedia systems via a single conference tablet. Seamlessly operate audio, video, conferencing, recording, broadcasting, and third-party devices through one unified interface.",
                "Standard Control Interfaces: Supports RS232/485, IR, IO, and RELAY connections for common AV and automation devices.",
                "Zigbee IoT Protocol: Enables wireless control of smart devices through Zigbee integration.",
                "Bi-directional Serial Communication: Supports two-way control over a single serial link for seamless device interaction.",
                "Hybrid Control Design: Combines wired and wireless IoT control, preventing interference and disconnection even in shielded environments.",
                "4K Video Matrix Switching: 4-in 2-out seamless 4K@60Hz video switching for fast and clear AV transitions.",
                "Digital Audio Interface: Features 8-in/4-out configuration with network and HDMI audio routing.",
                "Built-in Amplifier: Delivers 2×100W output power for direct speaker drive.",
                "Multi-Stream Local Recording: Records 4–6 video streams simultaneously for meetings, training, or lectures.",
                "IPC Camera Integration: Supports up to 12 IPC video inputs for live output, display, or recording.",
              ],

              applications: [
                "Meeting Room",
                "Conference Center",
                "Courtrooms",
                "Classrooms",
                "Lecture Halls",
                "House of Worship",
                "Hotels",
                "Event Venues",
                "Training Centers",
                "All Hand Space"
              ],

              specifications: {
                "System Specifications": {
                  "System Architecture": "Industrial-grade architecture based on Linux, virus-free",
                  "Operating System": "Linux-based embedded system with integrated OPS 11th Gen Windows 11 Pro PC (16GB RAM, 512GB SSD)",
                  "Processor": "High-performance DSP Core with Advanced Video Processing Unit",
                  "Sampling Rate (Audio)": "48 kHz ± 100 ppm",
                  "Video Resolution": "Up to 4K@60Hz (4:4:4)",
                  "Main Stream": "1080P@60",
                  "Preview Stream": "CIF",
                  "Video Codec": "H.264 HP/MP/BP, H.265 MP, up to 16 channels 1080P encoding/decoding, 512 Kbps–16 Mbps per channel",
                  "Audio Protocols": "G.711, G.722, G.722.1, G.722.1C, AAC",
                  "Communication Protocols": "SIP, H.323, BFCP, H.239, RTSP, RTMP, TCP/IP, HTTP, FTP, NTP, RTP, RTCP, TLS, Telnet",
                  "Frequency Response (Audio)": "20 Hz – 20 kHz ± 0.5 dB",
                  "Dynamic Range (Audio)": "120 dB (A-weighted)",
                  "THD + Noise (Audio)": "<0.003% @ 4 dBu",
                  "Latency (Audio)": "<0.7 ms (input to output)",
                  "Latency (Video)": "<12 ms (input to output)",
                  "Delay Memory": "250 mono seconds (audio)",
                  "Control Inputs": "0–3.3 VDC",
                  "External Control Potentiometer": "10k Ohm, linear",
                  "Logic Outputs": "Low (0 V) active, high (5 V) inactive",
                  "Logic Output Max Power": "24 VDC / 50 mA0",
                  "Stored Presets": "1500 storable presets",
                  "IoT Protocol": "Zigbee for wireless device control",
                  "Amplifier Output": "2 x 100W @ 8 Ohms, 2 x 150W @ 4 Ohms",
                  "Power Input": "AC 100–240V, 50/60Hz",
                  "Power Consumption": "80W (no speakers/PoE devices)",
                  "Power Switch": "One-touch system switch, sleep/wake via network"
                },
                "Analog and Digital Inputs/Outputs": {
                  "Analog Audio Inputs": "8 x Phoenix terminal (mic/line level, 48V phantom power), 1 x OPS PC audio, 1 x अस्पताल screen projection (optional), 1 x wireless mic module (optional)",
                  "Analog Audio Outputs": "4 x Line out (2 pairs L/R stereo Phoenix terminal)",
                  "Digital Audio Inputs/Outputs": "8-in/4-out (network and HDMI audio routing), 4 x HDMI embedded audio input, 2 x HDMI embedded audio output",
                  "Video Inputs": "4 x HDMI inputs (IN1 & IN3 up to 4K30, IN2 & IN4 up to 1080P60), 12 x IP network camera inputs (RTSP supported)",
                  "Video Outputs": "6 x HDMI outputs (OUT1 up to 4K30, OUT2–OUT6 up to 1080P60), 1 channel HDMI decoding",
                  "Connectors (Audio)": "Phoenix terminal (3.81 mm)",
                  "Connectors (Video)": "HDMI 2.0, RJ45 (for IPC)",
                  "Nominal Level (Audio)": "+4 dBu with 20 dB headroom",
                  "Maximum Level (Audio)": "+24 dBu",
                  "Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps)",
                  "Phantom Power": "+48 VDC, 10 mA per input",
                  "Input Impedance (Audio)": "5k Ohms balanced",
                  "Input Dynamic Range (Audio)": ">120 dB, A-weighted",
                  "Input THD + Noise (Audio)": "<-97 dB, 1 kHz @ +15 dBu",
                  "Input Latency (Audio)": "0.15 ms",
                  "Output Impedance (Audio)": "600 Ohms balanced",
                  "Output Dynamic Range (Audio)": "120 dB, A-weighted",
                  "Output THD + Noise (Audio)": "<-93 dB, 1 kHz @ +8 dBu",
                  "Output Latency (Audio)": "0.15 ms"
                },
                "Control Specifications": {
                  "Control Interfaces": "3 x RS-232/485, 1 x RS232/RS485 DEBUG, 2 x Relay, 2 x I/O, 2 x IR, Zigbee",
                  "Bi-directional Serial Communication": "Supported over RS232/485",
                  "Control Panel Options": "10.1” Android wired touchscreen (no PoE), 10.1” PoE desktop touchscreen, 10.1” PoE wall-mount touchscreen (w/ box)",
                  "Central Control Functions": "One-touch control for system switch, source selection, volume, camera control, recording, broadcasting, remote call, environment control",
                  "Maintenance Interface": "Web-based configuration, upgrades, logs, remote O&M, Telnet debugging, USB restore",
                  "Video Conferencing": "H.323 & SIP with short-number calling, GK & SIP registration, up to 6-party conferences, multiple templates, scheduling, mute/unmute, invite/kick participants",
                  "Third-Party Platform Integration": "RTMP push stream (>8 simultaneous platforms), RTSP pull stream",
                  "Recording Capability": "Up to 6 local recording streams or 1 x 4K video stream, file format: MP4",
                  "Display Terminal": "Supports 1–16 split screens, picture-in-picture, picture-out-picture, subtitle overlay, terminal name, station logo with transparency control",
                  "Data Interfaces": "USB ports for wireless projection transmitter pairing and updates",
                  "Network Interfaces": "1 x WAN, 5 x LAN (4 PoE-enabled), configurable full interconnection, 2 x ceiling-mounted WiFi antennas",
                  "Network Communication": "4-channel audio mixing/playback",
                  "Live Streaming": "Up to 10-channel multicast, live/on-demand playback",
                  "Wireless Projection": "PC/mobile/PAD to HDMI output via optional wireless module",
                  "Wireless Microphone": "Optional UHF clip-on/headset mics, dual-mic receiver module"
                },
                "Mechanical Specifications": {
                  "Installation": "2U standard telecom rack mount, install near AV peripherals for reduced wiring",
                  "Dimensions": "436.8 mm (W) × 89 mm (H) × 320 mm (D)",
                  "Operating Temperature": "0–45°C",
                  "Operating Humidity": "10%–90%",
                  "Operating Altitude": "≤ 5000 meters"
                }
              },
            },
          {
            id: "model_fusion_2009",
            name: "Fusion-2009",
            description: "Thirteen-in-one Integrated Processor",
            images: [
              "/images/Products/all_in_one_processor/Fusion_2009(1).webp",
              "/images/Products/all_in_one_processor/Fusion_2009.webp",
             
            ],
            overview: `The Fusion-2009 is a state-of-the-art 13-in-1 integrated processor engineered for high-performance
              multimedia applications. Building on advanced design principles, the Fusion-2009 merges thirteen core
              functionalities into a single, compact unit — simplifying system integration, reducing installation time, and
              improving overall efficiency.
              With its powerful and flexible feature set, the Fusion-2009 is the perfect fit for modern smart classrooms,
              multimedia conference rooms, training centers, lecture halls, and multi-functional venues. From on-site
              presentations and remote conferencing to live streaming and interactive learning, the Fusion-2009 delivers
              seamless performance and reliability across a wide range of professional environments.`,

            keyFeatures : [
              "Smart Centralized Control: Integrated control of multimedia equipment via a conference tablet, enabling unified management of audio/video, conferencing, recording, broadcasting, and third-party peripherals.",
              "Standard Control Interfaces: Supports RS232/485, IR, IO, and RELAY connections for common AV and automation devices.",
              "Zigbee IoT Protocol: Enables wireless control of smart devices through Zigbee integration.",
              "Bi-directional Serial Communication: Supports two-way control over a single serial link for seamless device interaction.",
              "Hybrid Control Design: Combines wired and wireless IoT control, preventing interference and disconnection even in shielded environments.",
              "4K Video Matrix Switching: 4-in 2-out seamless 4K@60Hz video switching for fast and clear AV transitions.",
              "Digital Audio Interface: Features 8-in/4-out configuration with network and HDMI audio routing.",
              "Built-in Amplifier: Delivers 2×100W output power for direct speaker drive.",
              "Multi-Stream Local Recording: Records 4–6 video streams simultaneously for meetings, training, or lectures.",
              "IPC Camera Integration: Supports up to 12 IPC video inputs for live output, display, or recording."
            ],
            applications: [
              "Meeting Room",
              "Conference Center",
              "Courtrooms",
              "Classrooms",
              "Lecture Halls",
              "House of Worship",
              "Hotels",
              "Event Venues",
              "Training Centers",
              "All Hand Space",
              "Command Centers",
              "Smart Conference Facilities"
            ],

            specifications: {
          "System Specifications": {
            "System Architecture": "Industrial-grade embedded system, virus-resistant",
            "Operating System": "Embedded system with integrated OPS 11th Gen Windows 11 Pro PC (16GB RAM, 512GB SSD)",
            "Processor": "High-performance DSP Core with Advanced Video Processing Unit",
            "Sampling Rate (Audio)": "48 kHz ± 100 ppm",
            "Video Resolution": "Up to 4K@60Hz (4:4:4)",
            "Main Stream": "1080P@60",
            "Preview Stream": "CIF",
            "Video Codec": "H.264 HP/MP/BP, H.265 MP, up to 16 channels 1080P encoding/decoding, 512 Kbps–16 Mbps per channel",
            "Audio Protocols": "G.711, G.722, G.722.1, G.722.1C, AAC",
            "Communication Protocols": "SIP, BFCP, H.323, H.239, RTSP, RTMP, TCP/IP, HTTP, FTP, UDP, RTP, RTCP, TLS, Telnet, NAT, E.164, H.245, H.225, Q.931, NTP",
            "Frequency Response (Audio)": "20 Hz – 20 kHz ± 0.5 dB",
            "Dynamic Range (Audio)": "122 dB (A-weighted)",
            "THD + Noise (Audio)": "<0.002% @ 4 dBu",
            "Latency (Audio)": "<0.6 ms (input to output)",
            "Latency (Video)": "<10 ms (input to output)",
            "Delay Memory": "300 mono seconds (audio)",
            "Control Inputs": "0–3.3 VDC",
            "External Control Potentiometer": "10k Ohm, linear",
            "Logic Outputs": "Low (0 V) active, high (5 V) inactive",
            "Logic Output Max Power": "24 VDC / 50 mA",
            "Stored Presets": "2000 storable presets",
            "IoT Protocol": "Zigbee for wireless device control",
            "Amplifier Output": "4 x 200W @ 8 Ohms",
            "Power Input": "AC 100–240V, 50/60Hz",
            "Power Consumption": "Typical: 50W, Full Load: 750W",
            "Power Switch": "One-touch system switch, sleep/wake via network"
          },
          "Analog and Digital Inputs/Outputs": {
            "Analog Audio Inputs": "8 x Phoenix terminal (mic/line level, 48V phantom power), 1 x OPS PC audio, 1 x wireless screen projection (optional), 1 x wireless speech (optional), DIGIT MIC network port (2 mic links)",
            "Analog Audio Outputs": "4 x Line out (2 pairs L/R stereo Phoenix terminal), 4 x 200W @ 8Ω digital amp",
            "Digital Audio Inputs/Outputs": "8-in/4-out (network and HDMI audio routing), 8 x HDMI embedded audio input, 8 x HDMI embedded audio output, 10 x DSP, 1 x OPS",
            "Video Inputs": "8 x HDMI inputs (4K@60Hz), 12 x IP network camera inputs (RTSP supported), 1 x OPS, 1 x wireless screen projection",
            "Video Outputs": "8 x HDMI outputs (4K@60Hz), 8 x RTMP, 1 x OPS",
            "Connectors (Audio)": "Phoenix terminal (3.81 mm), DIGIT MIC network port",
            "Connectors (Video)": "HDMI 2.0, RJ45 (for IPC)",
            "Nominal Level (Audio)": "+4 dBu with 20 dB headroom",
            "Maximum Level (Audio)": "+24 dBu",
            "Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps)",
            "Phantom Power": "+48 VDC, 10 mA per input",
            "Input Impedance (Audio)": "5k Ohms balanced",
            "Input Dynamic Range (Audio)": ">122 dB, A-weighted",
            "Input THD + Noise (Audio)": "<-98 dB, 1 kHz @ +15 dBu",
            "Input Latency (Audio)": "0.12 ms",
            "Output Impedance (Audio)": "600 Ohms balanced",
            "Output Dynamic Range (Audio)": "122 dB, A-weighted",
            "Output THD + Noise (Audio)": "<-94 dB,  Banda, 1 kHz @ +8 dBu",
            "Output Latency (Audio)": "0.12 ms"
          },
          "Control Specifications": {
            "Control Interfaces": "3 x RS-232/485, 1 x RS232/RS485 DEBUG, 2 x Relay, 2 x I/O, 2 x IR, Zigbee",
            "Bi-directional Serial Communication": "Supported over RS232/485",
            "Control Panel Options": "10.1” Android wired touchscreen (no PoE), 10.1” PoE desktop touchscreen, 10.1” PoE wall-mount touchscreen (w/ box), 4” Android PoE/non-PoE options",
            "Central Control Functions": "One-touch control for system power, signal switching, volume control, recording, broadcasting, remote call, environment control",
            "Maintenance Interface": "Web-based configuration, upgrades, logs, remote O&M, Telnet debugging, USB restore",
            "Video Conferencing": "H.323 & SIP with short-number calling, GK & SIP registration, up to 6-party conferences, multiple templates, scheduling, mute/unmute, invite/kick participants",
            "Third-Party Platform Integration": "RTMP push stream (>8 simultaneous platforms), RTSP pull stream, up to 10-channel multicast",
            "Recording Capability": "Up to 6 local recording streams or 1 x 4K video stream, file format: MP4, supports USB backup and content management, 4K multi-screen synthesis (virtual)",
            "Display Terminal": "Supports single to 16-screen splits (e.g., 2/4/9/13/16), picture-in-picture, picture-out-picture, resolution adaptation, subtitle overlay, terminal name, station logo with transparency control",
            "Data Interfaces": "2 x USB Type-A, 1 x USB Type-B (for wireless projection transmitter pairing, updates, and recording backup)",
            "Network Interfaces": "2 x WAN, 6 x LAN (4 PoE-enabled), configurable full interconnection, external antenna support",
            "Network Communication": "6-channel audio mixing/playback",
            "Live Streaming": "Up to 10-channel multicast, live/on-demand playback",
            "Wireless Projection": "PC/mobile/PAD to HDMI output with 1-click projection and external antenna support",
            "Wireless Speaking Module": "Dual mic support for handheld/lapel/headset with antenna support"
          },
          "Mechanical Specifications": {
            "Installation": "3U standard telecom rack mount",
            "Dimensions": "437 mm (W) × 410 mm (D) × 132.5 mm (H)",
            "Operating Temperature": "0–45°C",
            "Operating Humidity": "10%–90%",
            "Operating Altitude": "≤ 5000 meters"
          }
          },
        },
          // {
          //   id: "model_fs_40_hdmi",
          //   name: "FS-40-HDMI",
          //   description: "Quad HDMI Input Card",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-40-HDMI+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-40-HDMI+2"
          //   ]
          // },
          // {
          //   id: "model_fs_41_hdmi",
          //   name: "FS-41-HDMI",
          //   description: "Four -way HDMI output card",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-41-HDMI+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-41-HDMI+2"
          //   ]
          // },
          // {
          //   id: "model_fs_ops_win",
          //   name: "FS-OPS-WIN",
          //   description: "OPS Board",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-OPS-WIN+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-OPS-WIN+2"
          //   ]
          // },
          // {
          //   id: "model_fs_via_cast",
          //   name: "FS-VIA-CAST",
          //   description: "Wireless screen projector card & screen projection device",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-VIA-CAST+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-VIA-CAST+2"
          //   ]
          // },
          // {
          //   id: "model_fs_md_mic",
          //   name: "FS-MD-MIC",
          //   description: "Wireless microphone card & Handheld microphone",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-MD-MIC+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-MD-MIC+2"
          //   ]
          // },

        ],
      },
      // {
      //   id: "series_touchscreen_control_panel",
      //   name: "Touchscreen control Panel",
      //   description: "High-performance wired touchscreen control panels for intuitive system interaction.",
      //   image: "https://placehold.co/400x300/E5E7EB/6B7280?text=Touchscreen",
      //   features: ["10.1 inch IPS", "ARM Architecture", "High Frequency"],
      //   status: "In Stock",
      //   type: "series",
      //   models: [
      //     {
      //       id: "model_fusion_cp6",
      //       name: "Fusion-CP6",
      //       description: "10.1\" Wired Touch Control Panel – ARM 1.8GHz",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP6+1",
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP6+2"
      //       ],
      //       overview: `The Fusion-CP6 is a high-performance wired control touch panel designed for advanced AV and smart
      //           control systems. Featuring a sleek 10.1-inch capacitive touch screen, it provides intuitive and responsive
      //           control for various applications including meeting rooms, smart classrooms, home automation, and
      //           centralized control centers.
      //           Built on an ARM architecture processor with speeds of up to 1.8GHz, the Fusion-CP6 ensures smooth
      //           operation, fast response times, and reliable performance. Its elegant interface and flexible compatibility with
      //           multiple control systems make it a versatile solution for managing audio, video, lighting, HVAC, and other
      //           building automation functions with precision and ease.`,
      //      keyFeatures: [
      //         "High-Performance Processing: ARM processor up to 1.8 GHz for fast, stable operation",
      //         "Modern Android Platform: Android 9.0+ with support for third-party apps and custom development",
      //         "Enhanced Memory & Storage: 2 GB DDR4 RAM + 8 GB eMMC flash for smooth multitasking",
      //         "HD Touch Display: 10.1-inch 1280×800 (16:10) capacitive multi-touch IPS screen",
      //         "Flexible Power Options: PoE (IEEE 802.3af) or DC 12V/1A input",
      //         "Gigabit Network Connectivity: 1 Gbps Ethernet for fast, reliable data transfer",
      //         "Efficient One-Line Connection: Power + data over a single PoE cable",
      //         "Embedded Installation Design: Fits standard 86 mm wall box with secure connectors",
      //         "Industry Protocol Support: Full compatibility with standard control and automation protocols",
      //         "Dual Power Redundancy: : Operates on PoE or DC 12V for flexible power deployment."
      //       ],
      //       applications: [
      //         "Boardrooms",
      //         "Classrooms",
      //         "Auditorium",
      //       ],
      //      specifications: {
      //       "System": {
      //         "CPU": "Quad-core ARM architecture @ 1.8 GHz",
      //         "Operating System": "Android 9.0 and above",
      //         "Memory": "2 GB DDR4 RAM",
      //         "Flash Memory": "8 GB eMMC",
      //         "Resolution": "1280 × 800 px",
      //         "Touch Type": "Capacitive multi-touch",
      //         "User Interface": "Customizable Android tablet interface"
      //       },
      //       "Connectivity": {
      //         "LAN/PoE": "1 × RJ45 (10/100/1000 Mbps), supports PoE (IEEE 802.3af)",
      //         "Debug Port": "1 × Micro USB (for debugging/data transfer)",
      //         "RS-485": "1 × RS-485 interface (reserved)",
      //         "Reset Button": "1 × Reset button (reserved)",
      //         "Power Button": "1 × Power button (system on/off, screen on/off)"
      //       },
      //       "Power": {
      //         "Power Supply": "DC 12V / 1A or PoE (IEEE 802.3af)",
      //         "Power Consumption": "≤ 7 W"
      //       },
      //       "Mechanical": {
      //         "Front Panel": "Touch screen, black tempered glass",
      //         "Back Cover": "Aluminum alloy shell, Apple gray",
      //         "Dimensions": "245.4 mm (L) × 164 mm (W) × 27 mm (T)",
      //         "Weight": "926 g",
      //         "Installation": "Embedded / wall-mount with standard 86 mm box",
      //         "Operating Temperature": "0 °C ~ 40 °C (32 °F ~ 104 °F)",
      //         "Relative Humidity": "10 % ~ 90 % RH (non-condensing)"
      //       }
      //     }
      //     },
      // {
      //       id: "model_fusion_cp2",
      //       name: "Fusion-CP2",
      //       description: "10.1\" In-Wall Touch Panel – PoE, Android, 1.8GHz ARM",
      //       images: [
      //         "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP2+1"
      //       ],

      //       overview: `The Fusion-CP2 is a high-performance 10.1-inch embedded wired control touch panel, designed to deliver seamless control and interaction in modern AV and automation environments. Powered by a robust ARM architecture with a main frequency of up to 1.8GHz, it offers fast processing and responsive operation. Ideal for smart conference rooms, classrooms, and centralized control systems, the Fusion-CP2 combines intuitive touchscreen functionality with stable wired communication. With a sleek embedded design, it ensures a professional and space-efficient installation while supporting advanced integration through industry-standard protocols.`,

      //       keyFeatures: [
      //         "High-Performance Processing: Equipped with a powerful ARM architecture processor running up to 1.8GHz, ensuring fast and stable system operation.",
      //         "Modern Android Platform: Runs on Android 9.0 or above, supporting third-party applications and enabling flexible system integration and secondary development.",
      //         "Enhanced Memory & Storage: Comes with 2GB DDR4 RAM and 8GB eMMC Flash, providing smooth multitasking and reliable storage capacity.",
      //         "HD Touch Display: Features a 10.1-inch capacitive multi-touch screen with 1280x800 resolution (16:10) for clear visuals and responsive interaction.",
      //         "Flexible Power Options: Supports both PoE (Power over Ethernet) and DC 24V/1A power supply, giving flexibility in installation.",
      //         "Gigabit Network Connectivity: Integrated 1 Gigabit Ethernet interface, supporting fast and reliable data transmission up to 1Gbps.",
      //         "Efficient One-Line Connection: Supports data and power transmission over a single PoE network cable, simplifying wiring and reducing clutter.",
      //         "Embedded Installation Design: Designed for standard base box installation with professional connectors, ensuring clean and secure mounting.",
      //         "Industry Protocol Support: Compatible with industry-standard network communication protocols, ensuring broad integration with smart systems.",
      //       ],

      //       applications: [
      //         "Boardrooms",
      //         "Classrooms",
      //         "Auditorium",
      //       ],

      //       specifications: {
      //         systemSpecifications: {
      //           CPU: "Quad-core ARM architecture 1.8GHz",
      //           operatingSystem: "Android 9 and above",
      //           memory: "2GB DDR4 RAM",
      //           flashMemory: "8GB EMMC Flash",
      //           resolution: "1280×800",
      //           touchType: "Capacitive touch",
      //           userInterface: "Android tablet interface, customizable UI",
      //         },
      //         technicalSpecifications: {
      //           LAN_POE: "1×RJ45 (10/100/1000Mbps), supports PoE",
      //           debugPort: "1×Micro USB (for debugging/data transfer)",
      //           RS485: "1×RS-485 interface (reserved function)",
      //           resetButton: "1×Reset (reserved function)",
      //           powerButton: "1×Power (system on/off, screen on/off)",
      //           powerSupply: "DC 12V/1A or PoE (IEEE 802.3af)",
      //           powerConsumption: "≤ 7W",
      //         },
      //         mechanicalSpecifications: {
      //           frontPanel: "Touch screen, black color",
      //           backCover: "Aluminum alloy shell, Apple gray color",
      //           dimensions: "245.4mm (L) × 164mm (W) × 27mm (T)",
      //           weight: "926 grams",
      //           installation: "Embedded/Wall mount with standard box",
      //           operatingTemp: "0°C ~ 40°C (32°F ~ 104°F)",
      //           relativeHumidity: "10% ~ 90% RH (non-condensing)",
      //         },
      //       },
      //     }
      //   ],
      // },
    ],
  },
  {
    id: "brand_dante_paging",
    name: "Dante Table Top Paging Microphone",
    category: "dante_paging_microphone",
    description: "Professional Dante-enabled tabletop paging and announcement microphones with gooseneck design, perfect for conference rooms, auditoriums, control rooms, and public address systems.",
    image: "/images/Products/dante_paging/dante_paging_banner.webp",
    type: "brand",
    series: [
      {
        id: "series_dante_paging_gooseneck",
        name: "Dante Paging Series",
        description: "High-quality Dante networked tabletop paging microphones with touch-to-talk, priority override, and crystal-clear audio.",
        image: "/images/Products/dante_paging_series/GMIC-CP(1).webp",
        features: ["Dante Audio Networking", "Touch-to-Talk Button", "Programmable LED Ring", "Priority Override", "48V Phantom Power"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_gmic_cp",
            name: "GMIC-CP",
            description: "Dante microphone with 7-inch Android control panel",
            images: [
              "/images/Products/dante_paging_series/GMIC-CP(1).webp",
              "/images/Products/dante_paging_series/GMIC-CP.webp"
            ],

            overview: "The GMIC-CP is a professional-grade Dante-enabled gooseneck microphone with an integrated 7-inch Android touch control panel. Featuring a built-in microphone pre-amplifier and fully digital Dante transmission, it delivers exceptional audio quality with flexible analog/digital output switching. The customizable Android interface supports web browser control, app integration, and user-imported UI designs – making it perfect for high-end conference rooms, command centers, and control rooms.",

           keyFeatures: [
                "7-inch Android Touch Screen: Provides an intuitive control interface with customizable UI design based on the processor.",
                "Customizable Interface: Supports importing personalized user interfaces for flexible operation.",
                "Web Browser & App Support: Enables convenient control and system monitoring via Web browsers and dedicated applications.",
                "Flexible Signal Output: Rear panel source dial allows switching between Analog and Digital (Dante) outputs.",
                "Dual Signal Handling: In analog mode, outputs via line-out; in digital mode, delivers Dante audio while allowing analog input as Dante receive signal.",
                "Built-in Microphone Pre-amplifier: Ensures clear, professional-quality sound pickup.",
                "Stable Digital Transmission: Guarantees reliable audio delivery in mission-critical applications.",
                "Versatile Applications: Ideal for conferences, boardrooms, command centers, and control rooms."
              ],

            applications: [
              "Boardrooms",
              "Classrooms",
              "Auditoriums"
            ],

            specifications: {
              "System Specifications": {
                "Operating System": "Android 10.0",
                Display: "7\" RGB Capacitive Touch Screen, 1024 × 600",
                Processor: "A133 Quad-core Cortex-A53 1.6GHz 64-bit",
                RAM: "Amount not specified in document (typically 2GB)",
                Storage: "16GB",
                "User Interface": "Web browser + App control, supports custom UI import"
              },
              "Microphone Specifications": {
                "Type": "Condenser gooseneck with 48V phantom power",
                "Polar Pattern": "Hypercardioid",
                "Frequency Response": "20 Hz – 20 kHz (±0.6 dB)",
                "Sensitivity": "-40 dB (1V/Pa)",
                "Max Output Level": "+13 dBu",
                "Pre-amp Gain": "0 – 30 dB (1 dB steps)",
                "Sampling Rate": "48 kHz",
                "THD+N": "< 0.05%",
                "SNR": "90 dB",
                "Dynamic Range": "96 dB (input & output)"
              },
              "Audio & Connectivity": {
                "Dante Channels": "1 × 1 (Tx/Rx)",
                "Analog Output": "1 × Balanced line-out (switchable)",
                "Output Modes": "A-Mode: Analog | D-Mode: Dante transmit (analog becomes Dante receive)",
                "Paging Modes": "Mode 1: Press-to-Talk | Mode 2: Triple-tap Lock",
                "Power Supply": "12V DC + PoE (simultaneous redundancy supported)"
              },
              "Mechanical Specifications": {
                "Form Factor": "Desktop paging station with gooseneck",
                Construction: "Metal housing + capacitive touch screen",
                "Power Input": "DC 12V jack + PoE"
              }
            }
          },
          {
            id: "model_gmic_3",
            name: "GMIC-3",
            description: "Dante Gooseneck Microphone with Touch Switch",
            images: [
              "/images/Products/dante_paging_series/GMIC-3.webp",
            ],

            overview: "This Resoundify GMIC-3 gooseneck Dante microphone is designed for high-quality audio capture, featuring Dante network transmission, a touch-sensitive switch, and green LED indicator. With a heavy-duty die-cast base and anti-slip shock-absorbing pads, it minimizes table vibration noise, making it ideal for meetings, remote teaching, and broadcasting applications. This square-tube conference microphone integrates Dante functionality, featuring a touch-sensitive switch and a green LED indicator. It is specifically designed for high-quality audio capture scenarios. The heavy-duty die-cast base and shock-absorbing pads effectively reduce table vibration noise, making it an ideal choice for professional applications such as meetings and remote teaching.",

            keyFeatures: [
              "Dante-Enabled Audio Transmission: Integrated Dante network connectivity ensures high-quality, low-latency digital audio transmission over standard Ethernet.",
              "High-Quality Audio Capture: Designed specifically for clear and accurate voice pickup, ideal for conferences, remote teaching, and broadcasting.",
              "Touch-Sensitive Switch: Built-in touch control for convenient microphone ON/OFF operation.",
              "LED Status Indicator: Green LED indicator provides clear visual confirmation of microphone status.",
              "Heavy-Duty Die-Cast Base: Robust base construction ensures durability and long-term reliability.",
              "Shock-Absorbing & Anti-Slip Pads: Effectively minimizes table vibration noise and prevents movement during use.",
              "Professional Application Ready: Suitable for conference rooms, online classrooms, broadcast environments, and other professional audio scenarios."
            ],

            applications: [
              "boardrooms",
              "classrooms",
              "auditoriums"
            ],

            specifications: {
              "Standard Specifications": {
                Directivity: "Supercardioid",
                "Frequency Response": "80-19kHz",
                "High-Pass Filter": "80Hz, 18dB/octave",
                Impedance: "1.4 kΩ",
                "Maximum Input Sound Pressure Level": "-10dBu @ +30dB gain / -20dBu @ +40dB gain / -30dBu @ +50dB gain",
                "Signal-to-Noise Ratio": "65dB, 1kHz @ 1Pa",
                "Power Supply": "POE IEEE 802.3af standard",
                "Output Port": "RJ45",
                "Mic Tube Length": "370 mm",
                "Base Dimensions (L x W x H)": "107.5 x 145.9 x 50.8 (mm)",
                Weight: "0.95kg"
              }
            }
          },
        ]
      }
    ]
  },
  {
  id: "brand_ai_power_av",
  name: "AI Power Audio Video Solutions",
  category: "ai_power_av",
  description: "Next-generation AI-powered all-in-one conferencing endpoints, 4K tracking cameras, smart control panels and professional recording solutions for modern meeting rooms, classrooms and auditoriums.",
  image: "/images/Products/ai_power_av/ai_power_av_banner.webp",
  type: "brand",
  series: [
    {
      id: "ai_conferencing_solutions",
      name: "AI Conferencing Solutions",
      description: "Complete range of intelligent 4K video bars, detachable endpoints, tracking cameras, control panels and recording systems with AI tracking, Dante AV, Android OS and plug-and-play USB connectivity.",
      image: "/images/Products/ai_conferencing_solutions/RAI-150.webp",
      features: [
        "4K UHD with AI Tracking",
        "Dante AV & USB Dual Mode",
      ],
      status: "In Stock",
      type: "series",
      models: [
        {
          id: "model_rai_128c",
          name: "RAI-128C",
          description: "Dante ceiling mount array microphone",
          images: [
            "/images/Products/ai_conferencing_solutions/RAI_128C(1).webp",
            "/images/Products/ai_conferencing_solutions/RAI_128C(2).webp",
            "/images/Products/ai_conferencing_solutions/RAI_128C.webp",
          ],

          overview: "The Resoundify RAI-128C is a flagship high-end ceiling conference microphone. It features a 128-unit omnidirectional microphone array and multiple independently configurable pickup zones. Equipped with advanced AI audio algorithms such as high definition noise reduction, reverberation suppression, and automatic gain control, it seamlessly meets diverse pickup needs across different scenarios. With its 48kHz audio sampling capability, RAI-128C captures intricate sound details, ensuring utmost fidelity. Each RAI-128C unit also comes with built-in feedback suppression algorithms, enabling straightforward sound reinforcement solutions. Utilizing Dante digital audio technology, RAI-128C ensures stable transmission and broad compatibility. With support for POE power supply, it simplifies setup by requiring only a single network cable for both audio transmission and device power. Additionally, RAI-128C offers versatile installation options including suspension pole, suspension rope, and ceiling grid mounting, making it suitable for various installation requirements in different meeting spaces.",

          keyFeatures: [
            "Personalized Configuration: RAI-128C and its accessories support personalized configuration tailored to various scenarios, which can be achieved by downloading and installing configuration software.",
            "Call Scene Configuration: Configure remote meeting scenarios via the software, enabling simultaneous setup for multiple devices and pickup zones.",
            "Sound Reinforcement Scene Configuration: Customize local sound reinforcement scenarios through the software, allowing simultaneous setup for multiple devices and sound reinforcement zones.",
            "Mixed Scene Configuration: Facilitate mixed configuration for remote calls and local sound reinforcement, supporting multiple devices and overlaying two sound reinforcement zones.",
            "Device Upgrade: Conduct online upgrades for the ceiling microphone via the software."
          ],

          applications: [
            "boardrooms",
            "classrooms",
            "auditoriums"
          ],

          specifications: {
            "Basic Specifications": {
              "Product Model": "AIMIC-M100",
              "Product Color": "White",
              "Product Size": "597mm × 597mm × 53.5mm",
              "Net Weight": "5KG",
              "Power Supply": "PoE"
            },
            "Mic Specifications": {
              "Mic Type": "128-unit MEMS microphone array",
              Sensitivity: "-38dBV/94dB SPL @1KHz",
              "Signal-to-Noise Ratio": "65dBV/94dB SPL@1KHz, A-weighted"
            },
            "Dante": {
              "Number of Channels": "2x2",
              "Remote Meeting/Local Sound Reinforcement Channels": "1/1"
            },
            "Audio Performance": {
              "Remote Conversation Pickup Zones": "8",
              "Local Amplification Pickup Zones": "8",
              "Sampling Rate": "48kHz",
              "Maximum Background Noise Suppression": "35dB",
              "AI Noise Reduction Suppression": "Support",
              "AI Reverberation Suppression": "Support",
              "AI Feedback Suppression": "Support",
              "AI Echo Cancellation": "Support",
              "Delay (Automatic Mixing Output, Including Dante)": "<30ms"
            },
            "Cascade Performance": {
              "Cascade Quantity": "Unlimited",
              "Cascade Method": "Dante audio"
            },
            "Interface": {
              "RJ45 Port": "1 (Dante Audio Transmission, POE)",
              "Reset Button": "1"
            }
          }
        },
        {
          id: "model_rai_150",
          name: "RAI-150",
          description: "Multi position camera in the venue AI Speech",
          images: [
            "/images/Products/ai_conferencing_solutions/RAI-150.webp",
            "/images/Products/ai_conferencing_solutions/RAI-150(1).webp",
            "/images/Products/ai_conferencing_solutions/RAI-150(2).webp"
          ],

          overview: "The Resoundify RAI-150 system features a 4K UHD image sensor with a 1/2.8-inch CMOS and 8.46 million pixels, delivering exceptional image clarity and detail. It is equipped with a wide-angle lens offering 12x optical zoom and a horizontal viewing angle of up to 72.5° for versatile coverage. The AI Real-Time Subtitles function, when expanded and connected to AI Speech microphones and combined with the AI Speech Ltd public cloud service, provides real-time subtitle overlays during cloud conference scenarios, enhancing meeting efficiency. The AI Voice Linkage feature, when paired with the high-end ceiling microphone system of AI Speech, enables precise audiovisual linkage to accurately capture close-up images of the active speaker. The built-in AI Person Centering algorithm automatically centers the subject when the image is offset, ensuring a consistent and professional frame.",

          keyFeatures: [
            "Multiple Access and Control Options: The camera can be accessed and controlled through various methods for flexible operation and configuration.",
            "Client Software (CameraCMS): Set tracking parameters, search for cameras, control camera movement, and change network parameters via the CameraCMS software.",
            "VLC Access: View the two-channel video stream of the camera directly using VLC media player.",
            "IE Access: Access the main video stream, control camera functions, and modify network parameters through the Internet Explorer interface.",
            "Onvif Support: Compatible with Onvif version 2.1 for integration with third-party systems."
          ],

          applications: [
            "Boardrooms",
            "Classrooms",
            "Auditoriums"
          ],

          specifications: {
            "Camera Specifications": {
              "Imaging Sensor": "1/2.8 inch CMOS, 8.46 Million pixels",
              "Focal Distance": "f=3.9mm–46.8mm",
              "Iris Diaphragm": "F1.6–F2.8",
              "Optical Zoom": "12x",
              "Digital Zoom": "16x",
              "Horizontal Field of View": "72.5°–6.3°",
              "Shutter Speed": "1/60–1/10,000 second",
              "White Balance": "Automatic, Manual, One-button trigger, Automatic tracking, One-key white balance, Static color temperature",
              "Exposure Control": "Automatic, Manual, Shutter priority, Aperture priority, Brightness priority",
              "Wide Dynamic": "Available",
              "Signal-to-Noise Ratio": "≥50dB",
              "Anti-Flashing": "Support"
            },
            "PTZ Specifications": {
              "Horizontal Rotation Range": "-130° ~ +130°",
              "Vertical Rotation Range": "-30° ~ +90°",
              "Horizontal Rotation Speed": "0.2° ~ 90°/second",
              "Vertical Rotation Speed": "0.2° ~ 60°/second",
              "Preset Positions": "256"
            },
            "Interface Specifications": {
              "HDMI": "1 × HDMI 1.4 (4KP30/P25, 1080P60 etc.)",
              "3G-SDI": "1 × 3G-SDI (1080P60/P50/P30/P25, 720P60 etc.)",
              "USB 3.0": "1 × USB 3.0 Type-B (UVC 1.1, YUY2/NV12/MJPEG/H.264/H.265)",
              "USB 2.0": "1 × USB 2.0 Type-A HOST",
              "Network": "1 × 10/100M RJ-45 POE",
              "Audio Input": "1 × LINE IN 3.5mm, 1 × REF 3.5mm",
              "Control Interface": "1 × RS-485, 1 × RS-232 IN",
              "Power Interface": "DC 12V"
            },
            "General Specifications": {
              "Power Consumption": "< 20W",
              "Operating Temperature": "0°C ~ 40°C",
              "Operating Humidity": "10% RH ~ 90% RH",
              "Storage Temperature": "-20°C ~ +60°C",
              "Storage Humidity": "10% RH ~ 95% RH",
              "Weight": "≈2kg",
              "Color": "Elegant gray",
              "Control Protocol": "VISCA"
            }
          }
        },
        {
          id: "model_rai_tb",
          name: "RAI-TB",
          description: "Intelligent AI Audio-Visual Tracking & Switching Box – Supports 6 Cameras",
          images: [
            "/images/Products/ai_conferencing_solutions/RAI-TB.webp",
            "/images/Products/ai_conferencing_solutions/RAI-TB(1).webp",
            "/images/Products/ai_conferencing_solutions/RAI-TB(5).webp",
            "/images/Products/ai_conferencing_solutions/RAI-TB(3).webp",
            "/images/Products/ai_conferencing_solutions/RAI-TB(4).webp",


          ],

          overview: "The Resoundify AIVIS-MT100 is a high-performance AI Audio-Visual Tracking Box developed by AI-Speech, designed to deliver intelligent and seamless tracking for modern conferencing environments. Compact and easy to deploy, it is ideal for enterprise meeting rooms, training centers, university lecture halls, and other professional venues. Equipped with advanced AI image processing technologies—including face recognition, body posture recognition, and image stitching—the MT100 ensures precise and dynamic visual tracking. When integrated with AI-Speech's high-end ceiling microphones, its DOA (Direction of Arrival) technology accurately locates speakers' voices and synchronizes with multiple PTZ cameras to automatically track participants and their movements in real time. Supporting up to six cameras simultaneously and unlimited ceiling microphones, the MT100 provides a high-definition, low-latency audio-visual experience that enhances both local and hybrid conference scenarios.",

          keyFeatures: [
            "Supports linkage with the spatial DOA capabilities of AI-Speech high-end ceiling microphones to precisely capture close-up shots of the speaker.",
            "Supports a WEB UI configuration interface, facilitating easy control of multiple video streams and supporting the configuration of preset point screens and panoramic screens.",
            "Incorporates an AI intelligent screen scheduling algorithm for real-time adjustment of the output screen.",
            "Supports 1 USB3.0 video output with a maximum support of 4KP30.",
            "Supports 6 network inputs and 1 HDMI IN interface input, and provides support for HDMI OUT, USB, and LAN interface outputs.",
            "USB3.0 supports H.264/H.265/MJPEG video encoding and is compliant with UAC/UVC protocols.",
            "HDMI supports a maximum resolution of 4KP30."
          ],

          applications: [
            "Boardrooms",
            "Classrooms",
            "Auditoriums"
          ],

          specifications: {
            "System Specifications": {
              "Maximum Resolution": "4K @ 30fps Output",
              "Video Compression": "H.265/H.264/MJPEG",
              "Video Input": "Maximum support for 4K @ 30fps input (6 × Network + 1 × HDMI IN reserved)",
              "Video Output": "Maximum support for 4K @ 30fps output",
              "Video Switching": "Built-in AI algorithm, supports automatic video switching",
              "Audio Interface": "1 × LINE IN, 1 × LINE OUT (3.5mm)"
            },
            "Interface Specifications": {
              "HDMI": "1 × HDMI-IN (Reserved), 1 × HDMI-OUT (supports audio output, 4KP30, 1080P30/25, 720P30/25)",
              "USB": "1 × USB2.0 Host (Reserved), 1 × USB3.0 Device (USB3.0 compatible with USB2.0)",
              "Network": "1 × RJ-45, 10M/100M adaptive Ethernet port, standard POE, Supports WEB UI configuration and video preview",
              "TF Card": "1 × external Micro SD card, up to 256GB"
            },
            "General Specifications": {
              "Power": "DC 12V",
              "Operating Temperature": "0°C ~ +40°C",
              "Storage Temperature": "-20°C ~ +40°C",
              "Dimensions": "119 mm × 104 mm × 29 mm",
              "Weight": "0.2KG"
            }
          }
        },
              
      ]
    }
  ]
  },
  {
  id: "brand_control_panel",
  name: "Control Panel",
  category: "control_panel",
  description: "Smart touchscreen wall panels for intuitive AV, lighting, and room automation control.",
  image: "/images/Products/audio_dsp/Ominipanel8.webp",
  type: "brand",
  status: "In Stock",
  series: [
    {
        id: "series_control_panel_accessories",
        name: "Control panel and accessories",
        description: "Intuitive control solutions and accessories for seamless audio system management.",
        image: "/images/Products/audio_dsp/Ominipanel8.webp",
        features: ["Touchscreen Interfaces", "Dante Microphones", "Integrated Control"],
        status: "In Stock",
        type: "series",
        models: [
           {
            id: "model_omni_panel3",
            name: "OmniPanel3",
            description: "VC and SS with LCD Screen and Rotary Knob – Aurispro Series",
            images: [
              "/images/Products/audio_dsp/omnipanel3.webp"
            ],
             overview: `The Resoundify OmniPane13 is a modern, user-centric control interface designed for conference rooms,
                      boardrooms, and AV-integrated environments. It combines Volume Control (VC) and Source Selector (SS)
                      control into a single intuitive wall-mounted unit, offering real-time interaction and effortless operation.
                      The OmniPane13 is a premium-grade, multi-function wall control panel designed for seamless integration
                      with professional Volume Control (VC) and Source Selector (SS). Tailored for high-end meeting
                      environments, the OmniPane13 provides a highly intuitive, ergonomic, and interactive control solution that
                      simplifies room technology for everyday users.`,

             keyFeatures: [
                    "High-Resolution Multi-Touch Display: The OmniPane13 features a high-quality LCD screen with clear visual feedback and customizable UI layouts. It delivers a smooth and intuitive interface for real-time control of video conferencing systems, audio levels, input sources, and presets — all in one sleek panel.",
                    "Seamless Ethernet Connectivity: Equipped with a Gigabit Ethernet port and Power over Ethernet (PoE), the panel ensures fast data transmission, simplified wiring, and flexible installation across networked environments.",
                    "Modern Mechanical Design: Its slim, wall-mountable form factor and optional mounting accessories allow for seamless integration into a variety of architectural settings.",
                    "Secure & Maintainable Platform: Advanced encryption protocols and remote firmware update capabilities ensure long-term reliability, security, and ease of maintenance."
                  ],

             applications: [
              "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

           specifications: {
              "System Specifications": {
                "Power": "DC 12V 1.5A & PoE IEEE 802.3at",
                "Display Type": "IPS",
                "Compatibility": "Can be used with a full range of processors",
                "Display": "With OLED highlight",
                "Display Colors": "16.7M",
                "Display Orientation": "Landscape (horizontal), or portrait (vertical)",
                "Display Viewing Angle": "±85° horizontal, ±85° vertical"
              },
              "Mechanical Specifications": {
                "Screen Size": "1.13 inches"
              }
            },
          },
          {
            id: "model_omni_panel4",
            name: "OmniPanel4",
            description: "4 inch control panel",
            images: [
              "/images/Products/audio_dsp/omnipanel4.webp"
            ],

            overview: "The Resoundify OmniPanel4 is a compact and intelligent 4-inch touch control panel designed for streamlined control in smart buildings, hospitality, and AV automation environments. Despite its small footprint, the panel delivers powerful performance with an intuitive capacitive touch interface, real-time processing, and seamless integration with multiple communication protocols such as TCP/IP. Equipped with PoE-enabled Ethernet connectivity, the OmniPanel4 simplifies installation by combining power and data over a single cable. Its responsive UI supports scene control, lighting dimming, HVAC adjustments, and more — all from a sleek wall-mounted device. With robust security, remote configuration support, and compatibility with major automation platforms, the OmniPanel4 is ideal for use in guest rooms, meeting spaces, and high-end residential applications.",

            keyFeatures: [
              "High-Resolution Multi-Touch Display: The panel features a 4-inch capacitive multi-touch screen with gesture support, delivering a responsive and user-friendly interface for real-time control and monitoring applications.",
              "Seamless Ethernet Connectivity: Equipped with a Gigabit Ethernet port and Power over Ethernet (PoE), the panel ensures fast data transmission, simplified wiring, and flexible installation across networked environments.",
              "Customized User Interface: The OmniPanel4 uses award-winning Omni graphic user interface authoring technology, allowing control screens to be created, tested, and simulated before deployment. Multiple pages, custom controls, backgrounds, logos, and more can be created quickly and easily.",
              "Modern Mechanical Design: Its slim, wall-mountable form factor and optional mounting accessories allow for seamless integration into a variety of architectural settings."
            ],

            applications: [
              "Classrooms",
              "Boardrooms",
              "Auditoriums",
            ],

            specifications: {
              "System Specifications": {
                Power: "DC 12V 1.5A & PoE IEEE 802.3at",
                "Display Type": "4-inch TFT touch screen",
                Compatibility: "Can be used with a full range of processors",
                "Control protocol": "UDP, TCP/IP",
                "Address setting method": "RJ-45",
                "Control functions": "Support 32 control functions; Supports volume control, mute, scene calling, matrix switching, and central control functions",
                "Display Resolution": "gray",
                "Display Colors": "16.7M",
                "Display Orientation": "Landscape (horizontal), or portrait (vertical)",
                "Display Viewing Angle": "±85° horizontal, ±85° vertical"
              },
              "Mechanical Specifications": {
                "Screen Size": "4 inches",
                "Product size (WxH)": "88 x 88mm"
              }
            },
          },
        {
          id: "model_omni_panel8",
          name: "OmniPanel8",
          description: "8 inch control panel",
          images: [
            "/images/Products/audio_dsp/Ominipanel8.webp"
          ],

          overview: "The Resoundify OmniPanel8 is a sleek and powerful 8-inch capacitive touch control panel designed for seamless control of AV systems, lighting, HVAC, and other automation functions. Engineered for both commercial and residential applications, it features a vibrant high-resolution display, intuitive UI, and network connectivity, enabling it to serve as the central interface in modern smart environments. With support for custom graphical layouts, control scripting, and integration with third-party systems (via TCP/IP, RS-232), the OmniPanel8 delivers flexibility and performance for meeting rooms, classrooms, control centers, and luxury living spaces. Wall-mountable and PoE-powered, it offers both a clean aesthetic and simple installation.",

          keyFeatures: [
            "High-Resolution Multi-Touch Display: The OmniPanel8 features an 8-inch capacitive multi-touch screen with gesture support, providing an intuitive and responsive user interface for control and monitoring.",
            "Seamless Ethernet Connectivity: Equipped with a Gigabit Ethernet port and Power over Ethernet (PoE), the panel ensures fast data transmission, simplified wiring, and flexible installation across networked environments.",
            "Modern Mechanical Design: Its slim, wall-mountable form factor and optional mounting accessories allow for seamless integration into a variety of architectural settings.",
            "Secure & Maintainable Platform: Advanced encryption protocols and remote firmware update capabilities ensure long-term reliability, security, and ease of maintenance.",
          ],

          applications: [
            "Classrooms",
            "Boardrooms",
            "Auditoriums",
          ],

          specifications: {
            "System Specifications": {
              Power: "DC 12V 1.5A & PoE IEEE 802.3at",
              "Display Type": "IPS",
              Compatibility: "Supports DSP volume, mute, preset, matrix mixing, and device status detection controls",
              "Display Resolution": "1280000",
              "Display Aspect Ratio": "16:9",
              "Display Contrast Ratio": "800:1",
              "Display Colors": "16.7M",
              "Display Orientation": "Landscape (horizontal), or portrait (vertical)",
              "Display Viewing Angle": "±85° horizontal, ±85° vertical"
            },
            "Mechanical Specifications": {
              "Screen Size": "8 inches",
              Dimensions: "212.2x147.6x31mm",
              "Product Weight": "0.7kg"
            }
          },
        },
        ],
      },
  ]
  },
];
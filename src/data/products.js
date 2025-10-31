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
        name: "Aurispro series",
        description: "Cutting-edge Dante audio interfaces for professional sound.",
        image: "/images/Products/audio_dsp/aurispro44d.webp",
        features: ["Dante Enabled", "High Channel Count", "Compact Design"],
        status: "In Stock",
        type: "series",
        models: [
         {
            id: "model_ap_44d",
            name: "Auris Pro-44D",
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
              name: "Auris Pro-88D",
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
              name: "Auris Pro-1616D",
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
              name: "Auris Pro-6464D",
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
        name: "Echoprime series",
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
                  "/images/Products/audio_dsp/aurispro88d.webp"
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
              "/images/Products/audio_dsp/EchoPrime-B88.webp"
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
          "/images/Products/audio_dsp/EchoPrime-B1616.webp"
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
        name: "VOX NOVA series",
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
        id: "series_control_panel_accessories",
        name: "Control panel and accessories",
        description: "Intuitive control solutions and accessories for seamless audio system management.",
        image: "/images/Products/audio_dsp/omnipanel8.png",
        features: ["Touchscreen Interfaces", "Dante Microphones", "Integrated Control"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_omni_panel8",
            name: "OmniPanel8",
            description: "8 inch control panel",
            images: [
              "/images/Products/audio_dsp/omnipanel8.png"
            ]
          },
          {
            id: "model_omni_panel4",
            name: "OmniPanel4",
            description: "4inch control panel",
            images: [
              "/images/Products/audio_dsp/omnipanel4.png"
            ]
          },
          {
            id: "model_omni_panel3",
            name: "OmniPanel3",
            description: "VC and SS with lcd screen and rotary knob for Aurispro Series",
            images: [
              "/images/Products/audio_dsp/omnipanel3.png"
            ]
          },
          {
            id: "model_gmic_cp",
            name: "GMIC-CP",
            description: "Dante microphone with control panel",
            images: [
              "/images/Products/audio_dsp/GMIC-CP.webp"
            ]
          },
          {
            id: "model_gmic_3",
            name: "GMIC-3",
            description: "Dante Microphone",
            images: [
              "/images/Products/audio_dsp/GMIC-3.webp"
            ]
          },
        ],
      },
      {
        id: "series_multiplayer",
        name: "Multiplayer",
        description: "Multi-channel audio web streamers with scheduling and Dante virtual sound card support.",
        image: "/images/Products/audio_dsp/R-MP8.jpg",
        features: ["Web Streaming", "Dante Virtual Sound Card", "Scheduling & Playback"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_r_mp8",
            name: "R-MP8",
            description: "8 Channel audio web streamer and schedule, playback, insertion, support Dante virtual sound card",
            images: [
              "/images/Products/audio_dsp/R-MP8.jpg"
            ]
          },
          {
            id: "model_r_mp16",
            name: "R-MP16",
            description: "16 Channel Audio web streamer and schedule, playback, insertion, support Dante virtual sound card",
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
        name: "Streamlite series",
        description: "Efficient H.264 AV over IP solutions with multi-screen capability.",
        image: "/images/Products/av_over_ip_soln/IPM2000.B.png",
        features: ["H.264 Encoding", "Multi-screen Capability", "4K@30Hz"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_sl_4k30",
            name: "StreamLite-4k30",
            description: "H.264 with up to 4 screen capability PTN Electronic, 4K@30",
            images: [
              "/images/Products/av_over_ip_soln/IPM2000.B.png",
              "/images/Products/av_over_ip_soln/IPM2000.png",
            ]
          },
        ],
      },
      {
        id: "series_streamcore",
        name: "Streamcore series",
        description: "High-quality 4K60 4:4:4/HDR AV over IP with JPEG2K compression and advanced features.",
        image: "/images/Products/av_over_ip_soln/EN.webp",
        features: ["4K60 HDR", "JPEG2K Compression", "USB & Audio Support", "Dante Management"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_sc_en",
            name: "StreamCore-EN",
            description: "4K60 4:4:4/HDR AV over IP JPEG2K Encoder - Basic Version",
            images: [
              "/images/Products/av_over_ip_soln/EN.png",
            ]
          },
          {
            id: "model_sc_dn",
            name: "StreamCore-DN",
            description: "4K60 4:4:4/HDR AV over IP JPEG2K Decoder - Basic Version",
            images: [
              "/images/Products/av_over_ip_soln/DN.png",
            ]
          },
          {
            id: "model_sc_enkvm",
            name: "StreamCore-ENKVM",
            description: "4K60 4:4:4/HDR w/USB and Audio over IP JPEG2K Encoder",
            images: [
              "/images/Products/av_over_ip_soln/ENKVM.png",
            ]
          },
          {
            id: "model_sc_dnkvm",
            name: "StreamCore-DNKVM",
            description: "4K60 4:4:4/HDR w/USB and Audio over IP JPEG2K Decoder",
            images: [
              "/images/Products/av_over_ip_soln/DNKVM.png",
            ]
          },
          {
            id: "model_sc_wp",
            name: "StreamCore-WP",
            description: "4K60 4:4:4/HDR w/USB and Audio over IP JPEG2K HDMI/USB-C Wallplate Encoder",
            images: [
              "/images/Products/av_over_ip_soln/WP.png"
            ]
          },
          {
            id: "model_sc_cb",
            name: "StreamCore-CB",
            description: "Control box for with Dante management",
            images: [
              "/images/Products/av_over_ip_soln/CB.png"
            ]
          },
          {
            id: "model_sc_cbd",
            name: "StreamCore-CBD",
            description: "Control box for JPEG2K Gen 1/2 IP",
            images: [
              "/images/Products/av_over_ip_soln/CBD.png"
            ]
          },
        ],
      },
      {
        id: "series_streampro",
        name: "Streampro Series",
        description: "SDVoE solutions for advanced 4K60 A/V over IP with KVM and video wall capabilities.",
        image: "/images/Products/av_over_ip_soln/StreamPro_HDN-CTL100D.png",
        features: ["SDVoE Technology", "4K60 4:4:4 HDR", "USB KVM", "Video Wall/Multiview"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_sp_copper_fiber_1",
            name: "StreamPro",
            description: "4K60 4:4:4/HDR w/USB2.0/Video Preview over IP SDVoE Tranceiver Copper&Fiber",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-CTL100D.png",
            ]
          },
          {
            id: "model_sp_fiber_kvm_2",
            name: "StreamPro",
            description: "4K60 4:4:4/HDR w/USB KVM over IP SDVoE Tranceiver Fiber",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AS-DEC.webp",
            ]
          },
          {
            id: "model_sp_avp2000_fiber_3",
            name: "StreamPro",
            description: "SDVoE AVP2000 IP solution Seamless Matrix/Video Wall/Multiview -- Fiber Port",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100ASL-DEC.webp",
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
            id: "model_sp_avp1000_fiber_6",
            name: "StreamPro",
            description: "SDVoE AVP1000 IP solution Seamless Matrix -- Fiber Port",
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AT.webp",
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
        image: "/images/Products/video_conferencing/PTZ30.webp",
        features: ["4K UHD", "AI Tracking", "Dante Audio", "PoE+"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_vc_ptz30_dante",
            name: "VC-PTZ30 (DANTE)",
            description: "4K Ultra HD Video Conference Camera AI tracking 1/1.8'', CMOS, Max Effective Pixel: 8.42M, 30X 4K@60/59.94/50//30/29.97/25fps, 1080P@60/59.94/50/30/29.97fps, 1080I@60/59.94fps, 720P@60/59.94fps HDMI, 3G-SDI, RJ45, USB2.0, 1-ch Line in, RS232 in, RS232 out, RS485, POE+",
            images: [
              "/images/Products/video_conferencing/PTZ30.webp",
            ]
          },
          {
            id: "model_vc_ptz16_dante",
            name: "VC-PTZ16 (DANTE)",
            description: "4K Ultra HD Video Conference Camera AI tracking 1/1.8'', CMOS, Max Effective Pixel: 8.42M, 20X + 16X digital zoom 4K@60/59.94/50/30/29.97/25fps, 1080P@60/59.94/50/30/29.97fps, 1080I@60/59.94/50fps, 720P@60/59.94fps HDMI, 3G-SDI, RJ45, USB2.0, 1-ch Line in, RS232 in, RS232 out, RS485, POE+",
            images: [
              "/images/Products/video_conferencing/PTZ16.webp",
            ]
          },
          {
            id: "model_vc_ptz20_dante",
            name: "VC-PTZ20 (DANTE)",
            description: "4K Ultra HD Video Conference Camera 1/1.8'', CMOS, Max Effective Pixel: 8.42M, 20X 4K@60/59.94/50//30/29.97/25fps, 1080P@60/59.94/50/30/29.97fps, 1080I@60/59.94/50fps, 720P@60/59.94fps HDMI, 3G-SDI, RJ45, USB2.0, 1-ch Line in, RS232 in, RS232 out, RS485, POE+ AI tracking",
            images: [
              "/images/Products/video_conferencing/PTZ20.webp",
            ]
          },
          {
            id: "model_vc_ptz12_dante",
            name: "VC-PTZ12 (DANTE)",
            description: "4K Ultra HD Video Conference Camera AI tracking FOV 80.8 degree 1/2.5'', CMOS, Max Effective Pixel: 8.40M, 12X optical zoom,16X digital zoom 4K@60/59.94/50//30/29.97/25fps, 1080P@60/59.94/50/30/29.97fps, 1080I@60/59.94/50fps, 720P@60/59.94fps HDMI, 3G-SDI, RJ45, USB2.0, 1-ch Line in, RS232 in, RS232 out, RS485, POE+",
            images: [
              "/images/Products/video_conferencing/PTZ12.webp",
            ]
          },
        ],
      },
      {
        id: "series_auto_switching_tracking_camera",
        name: "Auto switching auto Tracking camera",
        description: "Integrated 4K HD tracking cameras for teaching and presentation environments.",
        image: "/images/Products/video_conferencing/PTZ12.webp",
        features: ["4K Resolution", "AI Tracking", "Dual Lens Systems", "PoE"],
        status: "In Stock",
        type: "series",
        models: [
          // {
          //   id: "model_vc_auto2",
          //   name: "VC-AUTO2",
          //   description: "4K Integrated HD teaching tracking camera Close-up Camera:12x optical, 16x digital 4K@30fps, 4K@25fps, 4K@29.97fps1080P@30fps,1080P@25fps Panorama Camera: 4K@30fps, 4K@25fps, 4K@29.97fps1080P@30fps,1080P@25fps RS232 in, RS232 out, RS485, 3G-SDI, RJ45, HDMI, USB3.0, USB2.0, Line In, POE",
          //   images: [
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=VC-AUTO2+1",
          //     "https://placehold.co/400x300/E5E7EB/6B7280?text=VC-AUTO2+2"
          //   ]
          // },
          {
            id: "model_vc_auto4",
            name: "VC-AUTO4",
            description: "4K Integrated HD teaching tracking camera Student Close -up Lens: f=7.37mm, Horizontal FOV: 43° Teacher Close -up Lens: f=12.49mm, Horizontal FOV: 26° Student Panoramic lens: f=2.2mm, Horizontal FOV: 110° Teacher Panoramic lens: f=7.37mm, Horizontal FOV: 43° 4K@30fps/25fps RJ45, USB3.0, Line In, Line out, POE",
            images: [
              "/images/Products/video_conferencing/PTZ12.webp"
            ]
          },
        ],
      },
      {
        id: "series_all_in_one_bar_solution",
        name: "All in one BAR solution",
        description: "Integrated 4K UHD USB cameras with built-in mics and speakers for seamless collaboration.",
        image: "/images/Products/video_conferencing/ST-200.png",
        features: ["4K UHD Camera", "Built-in Mic & Speaker", "AI Tracking", "Bluetooth & WiFi"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_st_200",
            name: "ST-200",
            description: "4K UHD ALL-IN-ONE USB Camera 1/1.8'', CMOS, 20M, 4K@30fps Built-in microphone and speaker, 114° (DFOV) ,105° (HFOV) , 5x zoom, MPT + EPTZ, speaker tracking, smart gallery, USB3.0(Type C), HDMI, RJ45, Bluetooth 5.0, WIFI6, BYOM",
            images: [
              "/images/Products/video_conferencing/ST-200.png",
            ]
          },
          {
            id: "model_rc_700",
            name: "RC-700",
            description: "Digital Array Microphone, Built-in 7 microphone arrays, with 360° pickup range, 8-meter distance voice pickup, USB2.0 and 3.5 mm audio interface, USB DC5V",
            images: [
              "/images/Products/video_conferencing/RC-700.png",
            ]
          },
          {
            id: "model_rc_702",
            name: "RC-702",
            description: "POE Cascading Omnidirectional Digital Array Microphone Built-in 6 mics to form a circular array microphone",
            images: [
              "/images/Products/video_conferencing/RC-702.png",
            ]
          },
        ],
      },
      {
        id: "series_video_codec_control_panel",
        name: "Video codec and control panel",
        description: "Smart video conferencing endpoints and intuitive control panels for enhanced meeting experiences.",
        image: "/images/Products/video_conferencing/RC-VCE.png",
        features: ["4K Endpoint", "Android OS", "Touch Control"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_rc_vce",
            name: "RC-VCE",
            description: "4K Smart Detachable Video Conferencing Endpoint Android 12",
            images: [
              "/images/Products/video_conferencing/RC-VCE.png",
            ]
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
        image: "/images/Products/video_conferencing/AV_PROCESSOR.png",
        features: ["Video Bridging", "Conference Integration"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_rc_avb",
            name: "RC-AVB",
            description: "Video Conference AV Bridge",
            images: [
              "/images/Products/video_conferencing/AV_PROCESSOR.png",
            ]
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
            description: "Dante wall plate with 4-channel XLR Audio Input Panel , 48V phantom power supply.",
            images: [
              "/images/Products/dante_wall_plates/DW25-LRBT.png",
            ]
          },
          {
            id: "model_dw_26_lrbt_io",
            name: "DW 26 - LRBT iO",
            description: "Dante Audio Input Panel Bluetooth 5.0, RCA stereo left and right channel interface (white)",
            images: [
              "/images/Products/dante_wall_plates/DW26-LRBT.png",
            ]
          },
          {
            id: "model_dw_27_lrbt_io",
            name: "DW 27 - LRBT iO",
            description: "Dante Audio Input Panel Bluetooth 5.0, RCA stereo left and right channel interface (black)",
            images: [
              "/images/Products/dante_wall_plates/DW27-LRBT.png",
            ]
          },
          {
            id: "model_dw_28_lrbt_io",
            name: "DW 28 - LRBT iO",
            description: "Dante Audio Input Panel Bluetooth 5.0, RCA stereo left and right channel interface (rose gold)",
            images: [
              "/images/Products/dante_wall_plates/DW28-LRBT.png",
            ]
          },
        ],
      },
      {
        id: "series_customizable_floor_box",
        name: "Customizable Floor box",
        description: "Tailored floor boxes for flexible and discreet cable management and connectivity.",
        image: "/images/Products/dante_wall_plates/floor_box.png",
        features: ["Customizable Ports", "Durable Design"],
        status: "Available to Order",
        type: "series",
        models: [
          {
            id: "model_custom_floor_box",
            name: "Custom",
            description: "Customizable Floor box",
            images: [
              "/images/Products/dante_wall_plates/floor_box.png",
            ]
          },
        ],
      },
      {
        id: "series_customizable_wall_plate",
        name: "Customizable wall plate",
        description: "Design your own wall plates for unique installation needs and aesthetic preferences.",
        image: "/images/Products/dante_wall_plates/wall_plate.png",
        features: ["Configurable Layout", "Various Finishes"],
        status: "Available to Order",
        type: "series",
        models: [
          {
            id: "model_custom_wall_plate",
            name: "Custom",
            description: "Customizable wall plate",
            images: [
              "/images/Products/dante_wall_plates/wall_plate.png",
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
            name: "Fusion -1005",
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
            name: "Fusion -1008",
            description: "Nine-in-one Integrated Processor",
            images: [
              "/images/Products/all_in_one_processor/CLIMBER-1008a.webp",
              "/images/Products/all_in_one_processor/CLIMBER-1008b.webp",
              "/images/Products/all_in_one_processor/CLIMBER-1008c.webp"
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
              name: "Fusion -1009",
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

        //   {
        //     id: "model_fusion_2009",
        //     name: "Fusion -2009",
        //     description: "Thirteen-in-one Integrated Processor",
        //     images: [
        //       "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-2009+1",
        //       "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-2009+2"
        //     ],
        //     overview: `The Fusion-2009 is a state-of-the-art 13-in-1 integrated processor engineered for high-performance
        //       multimedia applications. Building on advanced design principles, the Fusion-2009 merges thirteen core
        //       functionalities into a single, compact unit — simplifying system integration, reducing installation time, and
        //       improving overall efficiency.
        //       With its powerful and flexible feature set, the Fusion-2009 is the perfect fit for modern smart classrooms,
        //       multimedia conference rooms, training centers, lecture halls, and multi-functional venues. From on-site
        //       presentations and remote conferencing to live streaming and interactive learning, the Fusion-2009 delivers
        //       seamless performance and reliability across a wide range of professional environments.`,

        //     features : [
        //       "Smart Centralized Control: Integrated control of multimedia equipment via a conference tablet, enabling unified management of audio/video, conferencing, recording, broadcasting, and third-party peripherals.",
        //       "Standard Control Interfaces: Supports RS232/485, IR, IO, and RELAY connections for common AV and automation devices.",
        //       "Zigbee IoT Protocol: Enables wireless control of smart devices through Zigbee integration.",
        //       "Bi-directional Serial Communication: Supports two-way control over a single serial link for seamless device interaction.",
        //       "Hybrid Control Design: Combines wired and wireless IoT control, preventing interference and disconnection even in shielded environments.",
        //       "4K Video Matrix Switching: 4-in 2-out seamless 4K@60Hz video switching for fast and clear AV transitions.",
        //       "Digital Audio Interface: Features 8-in/4-out configuration with network and HDMI audio routing.",
        //       "Built-in Amplifier: Delivers 2×100W output power for direct speaker drive.",
        //       "Multi-Stream Local Recording: Records 4–6 video streams simultaneously for meetings, training, or lectures.",
        //       "IPC Camera Integration: Supports up to 12 IPC video inputs for live output, display, or recording."
        //     ],
        //     applications: [
        //       "Meeting Room",
        //       "Conference Center",
        //       "Courtrooms",
        //       "Classrooms",
        //       "Lecture Halls",
        //       "House of Worship",
        //       "Hotels",
        //       "Event Venues",
        //       "Training Centers",
        //       "All Hand Space",
        //       "Command Centers",
        //       "Smart Conference Facilities"
        //     ],

        //     specifications: {
        //   "System Specifications": {
        //     "System Architecture": "Industrial-grade embedded system, virus-resistant",
        //     "Operating System": "Embedded system with integrated OPS 11th Gen Windows 11 Pro PC (16GB RAM, 512GB SSD)",
        //     "Processor": "High-performance DSP Core with Advanced Video Processing Unit",
        //     "Sampling Rate (Audio)": "48 kHz ± 100 ppm",
        //     "Video Resolution": "Up to 4K@60Hz (4:4:4)",
        //     "Main Stream": "1080P@60",
        //     "Preview Stream": "CIF",
        //     "Video Codec": "H.264 HP/MP/BP, H.265 MP, up to 16 channels 1080P encoding/decoding, 512 Kbps–16 Mbps per channel",
        //     "Audio Protocols": "G.711, G.722, G.722.1, G.722.1C, AAC",
        //     "Communication Protocols": "SIP, BFCP, H.323, H.239, RTSP, RTMP, TCP/IP, HTTP, FTP, UDP, RTP, RTCP, TLS, Telnet, NAT, E.164, H.245, H.225, Q.931, NTP",
        //     "Frequency Response (Audio)": "20 Hz – 20 kHz ± 0.5 dB",
        //     "Dynamic Range (Audio)": "122 dB (A-weighted)",
        //     "THD + Noise (Audio)": "<0.002% @ 4 dBu",
        //     "Latency (Audio)": "<0.6 ms (input to output)",
        //     "Latency (Video)": "<10 ms (input to output)",
        //     "Delay Memory": "300 mono seconds (audio)",
        //     "Control Inputs": "0–3.3 VDC",
        //     "External Control Potentiometer": "10k Ohm, linear",
        //     "Logic Outputs": "Low (0 V) active, high (5 V) inactive",
        //     "Logic Output Max Power": "24 VDC / 50 mA",
        //     "Stored Presets": "2000 storable presets",
        //     "IoT Protocol": "Zigbee for wireless device control",
        //     "Amplifier Output": "4 x 200W @ 8 Ohms",
        //     "Power Input": "AC 100–240V, 50/60Hz",
        //     "Power Consumption": "Typical: 50W, Full Load: 750W",
        //     "Power Switch": "One-touch system switch, sleep/wake via network"
        //   },
        //   "Analog and Digital Inputs/Outputs": {
        //     "Analog Audio Inputs": "8 x Phoenix terminal (mic/line level, 48V phantom power), 1 x OPS PC audio, 1 x wireless screen projection (optional), 1 x wireless speech (optional), DIGIT MIC network port (2 mic links)",
        //     "Analog Audio Outputs": "4 x Line out (2 pairs L/R stereo Phoenix terminal), 4 x 200W @ 8Ω digital amp",
        //     "Digital Audio Inputs/Outputs": "8-in/4-out (network and HDMI audio routing), 8 x HDMI embedded audio input, 8 x HDMI embedded audio output, 10 x DSP, 1 x OPS",
        //     "Video Inputs": "8 x HDMI inputs (4K@60Hz), 12 x IP network camera inputs (RTSP supported), 1 x OPS, 1 x wireless screen projection",
        //     "Video Outputs": "8 x HDMI outputs (4K@60Hz), 8 x RTMP, 1 x OPS",
        //     "Connectors (Audio)": "Phoenix terminal (3.81 mm), DIGIT MIC network port",
        //     "Connectors (Video)": "HDMI 2.0, RJ45 (for IPC)",
        //     "Nominal Level (Audio)": "+4 dBu with 20 dB headroom",
        //     "Maximum Level (Audio)": "+24 dBu",
        //     "Mic Pre-amp Gain": "0 to 51 dB (in 3 dB steps)",
        //     "Phantom Power": "+48 VDC, 10 mA per input",
        //     "Input Impedance (Audio)": "5k Ohms balanced",
        //     "Input Dynamic Range (Audio)": ">122 dB, A-weighted",
        //     "Input THD + Noise (Audio)": "<-98 dB, 1 kHz @ +15 dBu",
        //     "Input Latency (Audio)": "0.12 ms",
        //     "Output Impedance (Audio)": "600 Ohms balanced",
        //     "Output Dynamic Range (Audio)": "122 dB, A-weighted",
        //     "Output THD + Noise (Audio)": "<-94 dB,  Banda, 1 kHz @ +8 dBu",
        //     "Output Latency (Audio)": "0.12 ms"
        //   },
        //   "Control Specifications": {
        //     "Control Interfaces": "3 x RS-232/485, 1 x RS232/RS485 DEBUG, 2 x Relay, 2 x I/O, 2 x IR, Zigbee",
        //     "Bi-directional Serial Communication": "Supported over RS232/485",
        //     "Control Panel Options": "10.1” Android wired touchscreen (no PoE), 10.1” PoE desktop touchscreen, 10.1” PoE wall-mount touchscreen (w/ box), 4” Android PoE/non-PoE options",
        //     "Central Control Functions": "One-touch control for system power, signal switching, volume control, recording, broadcasting, remote call, environment control",
        //     "Maintenance Interface": "Web-based configuration, upgrades, logs, remote O&M, Telnet debugging, USB restore",
        //     "Video Conferencing": "H.323 & SIP with short-number calling, GK & SIP registration, up to 6-party conferences, multiple templates, scheduling, mute/unmute, invite/kick participants",
        //     "Third-Party Platform Integration": "RTMP push stream (>8 simultaneous platforms), RTSP pull stream, up to 10-channel multicast",
        //     "Recording Capability": "Up to 6 local recording streams or 1 x 4K video stream, file format: MP4, supports USB backup and content management, 4K multi-screen synthesis (virtual)",
        //     "Display Terminal": "Supports single to 16-screen splits (e.g., 2/4/9/13/16), picture-in-picture, picture-out-picture, resolution adaptation, subtitle overlay, terminal name, station logo with transparency control",
        //     "Data Interfaces": "2 x USB Type-A, 1 x USB Type-B (for wireless projection transmitter pairing, updates, and recording backup)",
        //     "Network Interfaces": "2 x WAN, 6 x LAN (4 PoE-enabled), configurable full interconnection, external antenna support",
        //     "Network Communication": "6-channel audio mixing/playback",
        //     "Live Streaming": "Up to 10-channel multicast, live/on-demand playback",
        //     "Wireless Projection": "PC/mobile/PAD to HDMI output with 1-click projection and external antenna support",
        //     "Wireless Speaking Module": "Dual mic support for handheld/lapel/headset with antenna support"
        //   },
        //   "Mechanical Specifications": {
        //     "Installation": "3U standard telecom rack mount",
        //     "Dimensions": "437 mm (W) × 410 mm (D) × 132.5 mm (H)",
        //     "Operating Temperature": "0–45°C",
        //     "Operating Humidity": "10%–90%",
        //     "Operating Altitude": "≤ 5000 meters"
        //   }
        // },
        //   },
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
      {
        id: "series_touchscreen_control_panel",
        name: "Touchscreen control Panel",
        description: "High-performance wired touchscreen control panels for intuitive system interaction.",
        image: "https://placehold.co/400x300/F0F4F8/FF5733?text=Touchpanel",
        features: ["10.1 inch IPS", "ARM Architecture", "High Frequency"],
        status: "In Stock",
        type: "series",
        models: [
          {
            id: "model_fusion_cp6",
            name: "Fusion-CP6",
            description: "Wired Control Touch Panel 10.1 inches, ARM architecture, up to 1.8 GHz main frequency",
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP6+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP6+2"
            ],
            overview: `The Fusion-CP6 is a high-performance wired control touch panel designed for advanced AV and smart
                control systems. Featuring a sleek 10.1-inch capacitive touch screen, it provides intuitive and responsive
                control for various applications including meeting rooms, smart classrooms, home automation, and
                centralized control centers.
                Built on an ARM architecture processor with speeds of up to 1.8GHz, the Fusion-CP6 ensures smooth
                operation, fast response times, and reliable performance. Its elegant interface and flexible compatibility with
                multiple control systems make it a versatile solution for managing audio, video, lighting, HVAC, and other
                building automation functions with precision and ease.`,
           keyFeatures: [
              "High-Performance Processing: ARM processor up to 1.8 GHz for fast, stable operation",
              "Modern Android Platform: Android 9.0+ with support for third-party apps and custom development",
              "Enhanced Memory & Storage: 2 GB DDR4 RAM + 8 GB eMMC flash for smooth multitasking",
              "HD Touch Display: 10.1-inch 1280×800 (16:10) capacitive multi-touch IPS screen",
              "Flexible Power Options: PoE (IEEE 802.3af) or DC 12V/1A input",
              "Gigabit Network Connectivity: 1 Gbps Ethernet for fast, reliable data transfer",
              "Efficient One-Line Connection: Power + data over a single PoE cable",
              "Embedded Installation Design: Fits standard 86 mm wall box with secure connectors",
              "Industry Protocol Support: Full compatibility with standard control and automation protocols",
              "Dual Power Redundancy: : Operates on PoE or DC 12V for flexible power deployment."
            ],
            applications: [
              "Boardrooms",
              "Classrooms",
              "Auditorium",
            ],
           specifications: {
            "System": {
              "CPU": "Quad-core ARM architecture @ 1.8 GHz",
              "Operating System": "Android 9.0 and above",
              "Memory": "2 GB DDR4 RAM",
              "Flash Memory": "8 GB eMMC",
              "Resolution": "1280 × 800 px",
              "Touch Type": "Capacitive multi-touch",
              "User Interface": "Customizable Android tablet interface"
            },
            "Connectivity": {
              "LAN/PoE": "1 × RJ45 (10/100/1000 Mbps), supports PoE (IEEE 802.3af)",
              "Debug Port": "1 × Micro USB (for debugging/data transfer)",
              "RS-485": "1 × RS-485 interface (reserved)",
              "Reset Button": "1 × Reset button (reserved)",
              "Power Button": "1 × Power button (system on/off, screen on/off)"
            },
            "Power": {
              "Power Supply": "DC 12V / 1A or PoE (IEEE 802.3af)",
              "Power Consumption": "≤ 7 W"
            },
            "Mechanical": {
              "Front Panel": "Touch screen, black tempered glass",
              "Back Cover": "Aluminum alloy shell, Apple gray",
              "Dimensions": "245.4 mm (L) × 164 mm (W) × 27 mm (T)",
              "Weight": "926 g",
              "Installation": "Embedded / wall-mount with standard 86 mm box",
              "Operating Temperature": "0 °C ~ 40 °C (32 °F ~ 104 °F)",
              "Relative Humidity": "10 % ~ 90 % RH (non-condensing)"
            }
          }
          },
       {
          id: "model_fusion_cp2",
          name: "Fusion-CP2",
          description: "Embedded Wired Control Touch Panel 10.1 inches, ARM architecture, up to 1.8GHz main frequency",
          images: [
            "/images/Products/touch_panel/FUSION-CP2a.webp",
            "/images/Products/touch_panel/FUSION-CP2b.webp"
          ],

          overview: `The Fusion-CP2 is a high-performance 10.1-inch embedded wired control touch panel, designed to deliver
            seamless control and interaction in modern AV and automation environments. Powered by a robust ARM
            architecture with a main frequency of up to 1.8GHz, it offers fast processing and responsive operation.
            Ideal for smart conference rooms, classrooms, and centralized control systems, the Fusion-CP2 combines
            intuitive touchscreen functionality with stable wired communication. With a sleek embedded design, it
            ensures a professional and space-efficient installation while supporting advanced integration through
            industry-standard protocols.`,

          features: [
            "High-Performance Processing: Equipped with a powerful ARM architecture processor running up to 1.8GHz, ensuring fast and stable system operation.",
            "Modern Android Platform: Runs on Android 9.0 or above, supporting third-party applications and enabling flexible system integration and secondary development.",
            "Enhanced Memory & Storage: Comes with 2GB DDR4 RAM and 8GB eMMC Flash, providing smooth multitasking and reliable storage capacity.",
            "HD Touch Display: Features a 10.1-inch capacitive multi-touch screen with 1280x800 resolution (16:10) for clear visuals and responsive interaction.",
            "Flexible Power Options: Supports both PoE (Power over Ethernet) and DC 24V/1A power supply, giving flexibility in installation.",
            "Gigabit Network Connectivity: Integrated 1 Gigabit Ethernet interface, supporting fast and reliable data transmission up to 1Gbps.",
            "Efficient One-Line Connection: Supports data and power transmission over a single PoE network cable, simplifying wiring and reducing clutter.",
            "Embedded Installation Design: Designed for standard base box installation with professional connectors, ensuring clean and secure mounting.",
            "Industry Protocol Support: Compatible with industry-standard network communication protocols, ensuring broad integration with smart systems.",
          ],

          applications: [
            "Boardrooms",
            "Classrooms",
            "Auditorium",
          ],

          specifications: {
          systemSpecifications: {
            CPU: "Quad-core ARM architecture 1.8GHz",
            operatingSystem: "Android 9 and above",
            memory: "2GB DDR4 RAM",
            flashMemory: "8GB EMMC Flash",
            resolution: "1280×800",
            touchType: "Capacitive touch",
            userInterface: "Android tablet interface, customizable UI",
          },
          technicalSpecifications: {
            LAN_POE: "1×RJ45 (10/100/1000Mbps), supports PoE",
            debugPort: "1×Micro USB (for debugging/data transfer)",
            RS485: "1×RS-485 interface (reserved function)",
            resetButton: "1×Reset (reserved function)",
            powerButton: "1×Power (system on/off, screen on/off)",
            powerSupply: "DC 12V/1A or PoE (IEEE 802.3af)",
            powerConsumption: "≤ 7W",
          },
          mechanicalSpecifications: {
            frontPanel: "Touch screen, black color",
            backCover: "Aluminum alloy shell, Apple gray color",
            dimensions: "245.4mm (L) × 164mm (W) × 27mm (T)",
            weight: "926 grams",
            installation: "Embedded/Wall mount with standard box",
            operatingTemp: "0°C ~ 40°C (32°F ~ 104°F)",
            relativeHumidity: "10% ~ 90% RH (non-condensing)",
          },
        },
      },
        ],
      },
    ],
  },
];
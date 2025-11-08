import React, { useEffect, useRef, useState } from 'react';
import { Network, Monitor, Cable, Volume2, VolumeX } from 'lucide-react';


// Define a reusable component for each content block
const FeatureSection = ({ videoSrc, title, description, icon: Icon, reverse, delay, isAnimated, isLast }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between ${isLast ? 'mb-0 lg:mb-0' : 'mb-24 lg:mb-32'} ${reverse ? 'lg:flex-row-reverse' : ''
        } transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      data-animate={delay}
    >
      {/* Video Container - Wider on large screens */}
      <div
        className="w-full lg:w-3/5 p-2 lg:p-4 rounded-3xl border border-slate-300 shadow-xl shadow-slate-200 overflow-hidden group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full aspect-video relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Mute/Unmute Button - Only visible on hover */}
          <button
            onClick={toggleMute}
            className={`absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>


      {/* Text Content */}
      <div className="w-full lg:w-2/5 mt-12 lg:mt-0 lg:p-12">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center mr-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-light lg:font-semibold text-slate-900" style={{ fontFamily: 'Tilt Neon, sans-serif' }}>
            {title}
          </h3>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>
          {description}
        </p>
      </div>
    </div>
  );
};


export default function WhatResoundifyDoes() {
  const sectionRef = useRef(null);
  const animationsPlayed = useRef(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationsPlayed.current) {
            animationsPlayed.current = true;
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el) => {
              const index = parseInt(el.dataset.animate, 10);
              setTimeout(() => {
                setAnimatedElements(prev => new Set([...prev, index]));
              }, index * 200);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );


    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => observer.disconnect();
  }, []);


  // Define the feature sections data as an array
  const features = [
    {
      videoSrc: "/images/Resoundify.mp4",
      title: "About Us",
      description: `At Resoundify, our foundation is built on a clear mission to revolutionize professional audio-visual experiences with intelligent networking solutions that integrate clarity, reliability, and innovation. We empower organizations of every size to communicate, collaborate, and create without technological barriers.`,
      icon: Cable,
      delay: 2,
      reverse: true,
    }
  ];


  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-cyan-50 to-white py-16 lg:pt-24 overflow-hidden" style={{ fontFamily: 'Exo 2, sans-serif' }}>
      <div className="mx-auto px-6 lg:px-28 relative z-10">


        {/* Header Section */}
        <div
          className={`text-center mb-24 transition-all duration-1000 ${animatedElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          data-animate={0}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)', fontFamily: 'Tilt Neon, sans-serif' }}
          >
            What <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Resoundify</span> Delivers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Professional audio networking solutions engineered for enterprise excellence
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
        </div>


        {/* Dynamically render feature sections */}
        {features.map((feature, index) => (
          <FeatureSection
            key={index}
            videoSrc={feature.videoSrc}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            reverse={feature.reverse}
            delay={feature.delay}
            isAnimated={animatedElements.has(feature.delay)}
            isLast={index === features.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

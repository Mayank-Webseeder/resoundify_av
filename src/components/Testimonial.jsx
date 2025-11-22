import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      company: "Knowify Capital",
      logo: "/images/logos/knowify.png",
      content: "Resoundify transformed our audio content strategy. The AI-powered transcription and analysis tools helped us create more engaging podcasts and reach a wider audience.",
      rating: 5
    },
    {
      id: 2,
      company: "Solid Edge Tech",
      logo: "/images/logos/sets.png",
      content: "The quality of audio enhancement is incredible. What used to take hours of manual editing now happens in minutes. My podcast listeners have noticed the difference immediately.",
      rating: 5
    },
    {
      id: 3,
      company: "Edulfin",
      logo: "/images/logos/edulfin.png",
      content: "Using Resoundify for our educational content has been a game-changer. The automatic captioning and audio clarity improvements make our materials accessible to all students.",
      rating: 5
    },
    {
      id: 4,
      company: "Sywa Consult",
      logo: "/images/logos/sywa.png",
      content: "The real-time collaboration features and seamless integration with our workflow have made Resoundify an essential tool for our production team.",
      rating: 5
    },
    {
      id: 5,
      company: "Dynamics Design",
      logo: "/images/logos/DD.png",
      content: "Resoundify's analytics dashboard provides insights we never had before. Understanding our audio content performance has helped us make data-driven decisions.",
      rating: 5
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="py-5 sm:py-10 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-4 sm:mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Trusted by <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Leading Brands</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed px-2">
            Discover how Resoundify is helping creators, educators, and businesses transform their audio content with cutting-edge AI technology.
          </p>
          <div className="w-64 sm:w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-6 sm:mt-8"></div>
        </div>

        <div className="w-full overflow-hidden relative">
          <div className="flex space-x-6 sm:space-x-8 pb-6 marquee-content">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 flex-shrink-0 hover:shadow-xl hover:scale-[1.01] border border-slate-200 hover:bg-slate-50"
                style={{ width: '90vw', minHeight: '300px', maxWidth: '400px' }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-slate-900 opacity-70 mb-5" />
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Company Logo */}
                      <div
                        className={`w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm ${testimonial.company === "Solid Edge Tech"
                            ? "bg-gray-600"
                            : "bg-gray-100"
                          }`}
                      >
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.company} logo`}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            e.target.src = "/images/logos/fallback-logo.svg";
                            e.target.onerror = null;
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900 leading-tight">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-slate-600">{testimonial.rating}.0</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-content {
          animation: marquee 70s linear infinite;
          display: flex;
          width: max-content;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
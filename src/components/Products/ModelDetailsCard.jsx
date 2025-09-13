import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModelDetailsCard = ({ model, isHovered, onLearnMore }) => {
  // Assuming 'model' object now has an 'images' array.
  // If no images are provided, a default placeholder is used.
  const images = model.images && model.images.length > 0 ? model.images : ["https://placehold.co/400x300/E5E7EB/6B7280?text=No+Image"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = (e) => {
    e.stopPropagation(); // Prevent card click when navigating images
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (e) => {
    e.stopPropagation(); // Prevent card click when navigating images
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = () => {
    if (onLearnMore) {
      onLearnMore(model);
    }
  };

  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden shadow-md p-6 font-[Exo_2] cursor-pointer
        transform transition-all duration-300 ease-in-out min-h-[420px]
        ${isHovered ? "scale-105 shadow-lg ring-2 ring-emerald-300" : "hover:shadow-lg"}
      `}
      onClick={handleCardClick}
    >
      {/* Image Slider Section - Fixed height */}
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={images[currentImageIndex]}
          alt={`${model.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x300/E5E7EB/6B7280?text=Image+Unavailable";
          }}
        />

        {/* Navigation Buttons - Visible only if there's more than one image */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPreviousImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-1.5 rounded-full z-10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-1.5 rounded-full z-10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image indicator dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section - Consistent layout */}
      <div className="flex flex-col justify-between h-[calc(100%-13rem)]">
        {/* Top content */}
        <div className="space-y-3 flex-grow">
          {/* Heading Font: Tilt Neon - Fixed height */}
          <h4 className="text-xl font-semibold text-gray-900 font-[Tilt_Neon] line-clamp-2 min-h-[2.5rem]">
            {model.name || 'Unnamed Model'}
          </h4>

          {/* Description - Fixed height */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[3.75rem]">
            {model.description || 'No description available'}
          </p>

          {/* Features preview - Consistent height */}
          <div className="min-h-[2rem] max-h-[4rem] overflow-hidden">
            {model.features && model.features.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {model.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {model.features.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                    +{model.features.length - 3} more
                  </span>
                )}
              </div>
            ) : (
              <div className="text-gray-400 text-xs italic"></div>
            )}
          </div>
        </div>

        {/* Bottom action area - Fixed at bottom */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex-shrink-0">
          <div className="w-full inline-flex items-center justify-center text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 font-medium transition-all duration-200 py-2 px-4 rounded-lg border border-emerald-200 hover:border-emerald-300">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsCard;

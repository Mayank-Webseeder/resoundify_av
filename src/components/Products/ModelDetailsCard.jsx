import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModelDetailsCard = ({ model, isHovered, onLearnMore }) => {

  console.log(model, "thisis model detail")
  // Check if model data is complete
  const isModelDataComplete = (model) => {
    try {
      if (!model || !model.id) {
        console.warn('ModelDetailsCard: Invalid model object', model);
        return false;
      }
      const isComplete =
        model &&
        typeof model.overview === 'string' && model.overview.length > 0 &&
        Array.isArray(model.keyFeatures) && model.keyFeatures.length > 0 &&
        Array.isArray(model.applications) && model.applications.length > 0 &&
        model.specifications && typeof model.specifications === 'object' &&
        Object.keys(model.specifications).length > 0;
      console.debug(`ModelDetailsCard: Model ${model.id} isComplete: ${isComplete}`);
      return isComplete;
    } catch (error) {
      console.error('ModelDetailsCard: Error in isModelDataComplete', error);
      return false;
    }
  };

  const isComplete = isModelDataComplete(model);

  // Images fallback
  const images = model.images && Array.isArray(model.images) && model.images.length > 0
    ? model.images
    : ["https://placehold.co/400x300/E5E7EB/6B7280?text=No+Image"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = () => {
    if (isComplete && onLearnMore) {
      console.debug(`ModelDetailsCard: Clicking model ${model.id || 'unknown'}`);
      onLearnMore(model);
    } else {
      console.debug(`ModelDetailsCard: Click blocked for incomplete model ${model.id || 'unknown'}`);
    }
  };

  return (
    <div
      className={`
    bg-white rounded-2xl overflow-hidden shadow-md p-3 font-[Exo_2]
    transform transition-all duration-300 ease-in-out min-h-[320px]
    ${isHovered
          ? 'scale-105 shadow-lg ring-2 ring-emerald-300'
          : 'hover:shadow-lg'
        }
    ${isComplete
          ? 'cursor-pointer'
          : 'cursor-not-allowed'
        }
  `}
      onClick={isComplete ? handleCardClick : undefined}
    >
      {/* Image Slider Section */}
      <div className="relative w-full h-48 mb-2 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={images[currentImageIndex]}
          alt={`${model.name || 'Unnamed Model'} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-contain transition-opacity duration-300 ease-in-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x300/E5E7EB/6B7280?text=Image+Unavailable";
          }}
        />
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
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between h-[calc(100%-13rem)]">
        <div className="space-y-2 flex-grow">
          <h4 className="text-xl font-semibold text-gray-900 font-[Tilt_Neon] line-clamp-2 min-h-[2.5rem]">
            {model.name || 'Unnamed Model'}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[3.75rem]">
            {model.description || 'No description available'}
          </p>
          {/* <div className="min-h-[2rem] max-h-[4rem] overflow-hidden">
            {model.features && Array.isArray(model.features) && model.features.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {model.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-xl"
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
          </div> */}
        </div>

        {/* Bottom Action Area - Only show if complete */}
        {isComplete && (
          <div className=" border-t border-gray-100 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLearnMore(model);
              }}
              className="w-full inline-flex items-center justify-center text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 font-medium transition-all duration-200 py-2 px-4 rounded-lg border border-emerald-200 hover:border-emerald-300 group"
            >
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
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelDetailsCard;
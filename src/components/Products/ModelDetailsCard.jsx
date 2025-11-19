import React from 'react';

const ModelDetailsCard = ({ model, isHovered, onLearnMore }) => {
  const isModelDataComplete = () => {
    if (!model || !model.id) return false;
    return (
      model.overview &&
      model.keyFeatures?.length > 0 &&
      model.applications?.length > 0 &&
      model.specifications &&
      Object.keys(model.specifications).length > 0
    );
  };

  const isComplete = isModelDataComplete();

  // Sirf first image le rahe hain
  const singleImage =
    model.images && Array.isArray(model.images) && model.images.length > 0
      ? model.images[0]
      : "https://placehold.co/400x300/E5E7EB/6B7280?text=No+Image";

  const handleClick = () => {
    if (isComplete && onLearnMore) onLearnMore(model);
  };

  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden shadow-md p-3 font-[Exo_2]
        transform transition-all duration-300 ease-in-out min-h-[320px] 
        ${isHovered ? 'scale-105 shadow-lg ring-2 ring-emerald-300' : 'hover:shadow-lg'}
        ${isComplete ? 'cursor-pointer' : 'cursor-not-allowed'}
      `}
      onClick={isComplete ? handleClick : undefined}
    >
      {/* Sirf Ek Image – No Carousel */}
      <div className="relative w-full h-48 mb-2 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={singleImage}
          alt={`${model.name || 'Unnamed Model'}`}
          className="w-full h-full object-contain transition-opacity"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x300/E5E7EB/6B7280?text=Image+Unavailable";
          }}
        />
      </div>

      <div className="flex flex-col justify-between h-[calc(100%-13rem)]">
        <div className="space-y-2 flex-grow">
          <h4 className="text-xl font-semibold text-gray-900 font-[Tilt_Neon] line-clamp-2 min-h-[2.5rem]">
            {model.name || 'Unnamed Model'}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[3.75rem]">
            {model.description || 'No description available'}
          </p>
        </div>

        {isComplete && (
          <div className="border-t border-gray-100 flex-shrink-0">
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
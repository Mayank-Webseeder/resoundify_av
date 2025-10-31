import React from 'react';
import { productsData } from "../../data/products";

const ProductCard = ({ product, isHovered, onProductClick }) => {
    // Check if series has at least one model with complete data
    const isSeriesDataComplete = (series) => {
        try {
            if (!series || !series.id) {
                console.warn('ProductCard: Invalid series object', series);
                return false;
            }
            const seriesData = productsData
                .flatMap(brand => brand.series)
                .find(s => s.id === series.id);
            if (!seriesData || !seriesData.models || !Array.isArray(seriesData.models) || seriesData.models.length === 0) {
                console.warn('ProductCard: Series not found or has no models', series.id);
                return false;
            }
            const hasCompleteModel = seriesData.models.some(model => {
                const isComplete =
                    model &&
                    typeof model.overview === 'string' && model.overview.length > 0 &&
                    Array.isArray(model.keyFeatures) && model.keyFeatures.length > 0 &&
                    Array.isArray(model.applications) && model.applications.length > 0 &&
                    model.specifications && typeof model.specifications === 'object' &&
                    Object.keys(model.specifications).length > 0;
                return isComplete;
            });
            console.debug(`ProductCard: Series ${series.id} isComplete: ${hasCompleteModel}`);
            return hasCompleteModel;
        } catch (error) {
            console.error('ProductCard: Error in isSeriesDataComplete', error);
            return false;
        }
    };

    const isComplete = isSeriesDataComplete(product);

    // Determine status color
    const statusColor =
        product.status === "In Stock"
            ? "bg-green-500"
            : product.status === "Limited Stock"
                ? "bg-orange-500"
                : "bg-purple-500"; // For "New Arrival" or other statuses

    return (
        // Primary Font (for entire site): Exo 2 applied here
        <div
            className={`
                relative bg-white rounded-3xl overflow-hidden shadow-xl
                w-full h-[480px] font-[Exo_2]
                transform transition-all duration-500 ease-in-out
                ${isComplete
                    ? `${isHovered ? "scale-105 shadow-2xl ring-4 ring-indigo-300" : "hover:shadow-xl"}`
                    : "cursor-not-allowed pointer-events-none"}
            `}
            onClick={isComplete ? () => {
                console.debug(`ProductCard: Clicking series ${product.id || 'unknown'}`);
                onProductClick(product);
            } : () => {
                console.debug(`ProductCard: Click blocked for incomplete series ${product.id || 'unknown'}`);
            }}
            title={isComplete ? '' : 'More details coming soon'}
        >
            {/* Product Image with dynamic overlay */}
            <div className="relative overflow-hidden h-48 flex-shrink-0">
                <img
                    src={product.image || 'https://placehold.co/400x300/CCCCCC/666666?text=Image+Unavailable'}
                    alt={product.name || 'Unnamed Product'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/400x300/CCCCCC/666666?text=Image+Unavailable";
                    }}
                />

                {/* Hover Overlay with CTA - changed text for series */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6
                        transition-opacity duration-500 ease-in-out
                        ${isComplete && isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    `}
                >
                    <div className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-sans text-lg
                        hover:bg-white/30 hover:shadow-lg transition-all duration-300 text-center">
                        View Series Models
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </div>
                </div>
            </div>

            {/* Product Info - Fixed height content area with consistent layout */}
            <div className="p-6 h-[288px] flex flex-col justify-between">
                {/* Top section - Title and Description */}
                <div className="flex-shrink-0">
                    {/* Heading Font (for H1, H2): Tilt Neon applied here */}
                    <h3 className="text-2xl font-medium text-gray-900 mb-2 leading-tight font-[Tilt_Neon] line-clamp-2 min-h-[3.5rem]">
                        {product.name || 'Unnamed Product'}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 min-h-[3.75rem]">
                        {product.description || 'No description available'}
                    </p>
                </div>

                {/* Middle section - Features (flexible height) */}
                <div className="flex-1 min-h-[4rem] max-h-[6rem] mb-4 overflow-hidden">
                    {product.features && Array.isArray(product.features) && product.features.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {product.features.slice(0, 6).map((feature, featureIndex) => (
                                <span
                                    key={featureIndex}
                                    className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 text-xs rounded-full font-medium shadow-sm h-fit"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <div className="text-gray-400 text-sm italic">No features listed</div>
                    )}
                </div>

                {/* Bottom section - Status and Arrow (fixed at bottom) */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 flex-shrink-0">
                    <div className="flex items-center space-x-2">
                        {product.status && (
                            <>
                                <div className={`w-3 h-3 ${statusColor} rounded-full animate-pulse-slow`} />
                                <span className="text-gray-700 text-sm font-medium">{product.status}</span>
                            </>
                        )}
                    </div>
                    <div className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Animation for pulse-slow */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ProductCard;
import React from 'react';
import ProductCard from '../Products/ProductCard'; // For displaying Series
import ModelDetailsCard from '../Products/ModelDetailsCard'; // Component for displaying Models
import { productsData } from "../../data/products";

const ProductsGrid = ({
  products,
  hoveredProduct,
  setHoveredProduct,
  onProductClick,
  isShowingModels,
  onLearnMore
}) => {
  // Check if series has at least one model with complete data
  const isSeriesDataComplete = (series) => {
    try {
      if (!series || !series.id) {
        console.warn('ProductsGrid: Invalid series object', series);
        return false;
      }
      const seriesData = productsData
        .flatMap(brand => brand.series)
        .find(s => s.id === series.id);
      if (!seriesData || !seriesData.models || !Array.isArray(seriesData.models) || seriesData.models.length === 0) {
        console.warn('ProductsGrid: Series not found or has no models', series.id);
        return false;
      }
      const hasCompleteModel = seriesData.models.some(model =>
        model &&
        typeof model.overview === 'string' && model.overview.length > 0 &&
        Array.isArray(model.keyFeatures) && model.keyFeatures.length > 0 &&
        Array.isArray(model.applications) && model.applications.length > 0 &&
        model.specifications && typeof model.specifications === 'object' &&
        Object.keys(model.specifications).length > 0
      );
      console.debug(`ProductsGrid: Series ${series.id} isComplete: ${hasCompleteModel}`);
      return hasCompleteModel;
    } catch (error) {
      console.error('ProductsGrid: Error in isSeriesDataComplete', error);
      return false;
    }
  };

  return (
    <div className="w-full">
      {/* Grid Container - Fixed aspect ratio grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product, index) => {
          const isComplete = isShowingModels ? true : isSeriesDataComplete(product);
          return (
            <div
              key={product.id || `product-${index}`}
              onMouseEnter={isComplete ? () => setHoveredProduct(index) : undefined}
              onMouseLeave={isComplete ? () => setHoveredProduct(null) : undefined}
              onClick={isComplete && !isShowingModels ? () => {
                console.debug(`ProductsGrid: Clicking series ${product.id || 'unknown'}`);
                onProductClick(product);
              } : () => {
                console.debug(`ProductsGrid: Click blocked for ${isShowingModels ? 'model' : 'incomplete series'} ${product.id || 'unknown'}`);
              }}
              className={`group transition-all duration-200 ease-out ${isComplete ? '' : 'cursor-not-allowed pointer-events-none'}`}
              // style={{ aspectRatio: '3/4', minHeight: '480px' }}
              title={isComplete ? '' : 'More details coming soon'}
            >
              <div className="w-full h-full">
                {isShowingModels ? (
                  <ModelDetailsCard
                    model={product}
                    isHovered={hoveredProduct === index}
                    onLearnMore={onLearnMore}
                    className="w-full h-full"
                  />
                ) : (
                  <ProductCard
                    product={product}
                    isHovered={hoveredProduct === index}
                    onProductClick={onProductClick}
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17H9m6 0a3 3 0 01-3 3H9a3 3 0 01-3-3m6 0V9a3 3 0 00-3 3H9a3 3 0 00-3 3v8.1" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No {isShowingModels ? 'models' : 'products'} found
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            {isShowingModels
              ? 'No models are available in this series at the moment.'
              : 'Try adjusting your filters or browse other categories.'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
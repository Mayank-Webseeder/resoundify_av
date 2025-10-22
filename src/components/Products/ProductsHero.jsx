import React, { useState, useEffect, useMemo } from 'react';
import { productsData } from '../../data/products';

const ProductsHero = () => {
  // Extract unique real images only (no placeholders)
  const categoryImages = useMemo(() => {
    const uniqueImages = [];
    const seenImages = new Set();

    productsData.forEach(brand => {
      // Skip placeholder images
      if (brand.image &&
        !brand.image.includes('placehold.co') &&
        !seenImages.has(brand.image)) {
        uniqueImages.push({
          src: brand.image,
          name: brand.name
        });
        seenImages.add(brand.image);
      }

      // Include series images (no placeholders)
      brand.series?.forEach(series => {
        if (series.image &&
          !series.image.includes('placehold.co') &&
          !seenImages.has(series.image)) {
          uniqueImages.push({
            src: series.image,
            name: series.name
          });
          seenImages.add(series.image);
        }
      });
    });

    return uniqueImages;
  }, []);

  // Simple grid calculation
  const calculateGrid = (totalItems) => {
    if (totalItems <= 9) return { cols: 3, rows: 3 };
    if (totalItems <= 16) return { cols: 4, rows: 4 };
    return { cols: 5, rows: 4 };
  };

  const { cols, rows } = calculateGrid(categoryImages.length);
  const [hiddenImages, setHiddenImages] = useState(new Set());

  // Filter out broken images
  const visibleImages = categoryImages.filter((_, index) => !hiddenImages.has(index));

  const handleImageError = (index) => {
    setHiddenImages(prev => new Set([...prev, index]));
  };

  return (
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Clean Product Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="grid gap-4 p-8 h-full w-full opacity-10"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`
          }}
        >
          {visibleImages.slice(0, cols * rows).map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={`
                relative transition-opacity duration-500
                ${hiddenImages.has(index) ? 'hidden' : ''}
              `}
            >
              <div className="bg-white/5 rounded-lg overflow-hidden h-full">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={() => handleImageError(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-[Tilt_Neon] font-medium mb-6 leading-tight tracking-tighter text-white">
          Explore Our <span className="text-blue-400">Innovation</span>
        </h1>
        <p className="text-xl md:text-xl font-[Exo_2] opacity-90 max-w-3xl mx-auto leading-relaxed">
          Discover Resoundify's cutting-edge audio-visual solutions. Each product is engineered for unparalleled performance, seamlessly integrating with your vision.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;

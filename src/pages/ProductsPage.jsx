import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/Products/ProductsHero';
import JoinCommunitySection from '../components/ProductPageCta';
import ContactForm from '../components/Contact/ContactForm';
// Import the product data
import { productsData } from '../data/products';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [productsPerPage] = useState(12);
  const [productsToShow, setProductsToShow] = useState(12);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Categories array for filtering products
  const categories = [
    { id: "all", name: "All Products" },
    ...productsData.map(brand => ({
      id: brand.category,
      name: brand.name,
    })),
  ];

  // Function to toggle the search bar visibility
  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchTerm('');
    }
  };

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setProductsToShow(productsPerPage);
  };

  // Use useMemo to calculate display products only once per render
  const { items: allFilteredProducts, mode: searchMode } = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    // Get brands to search based on active category
    const brandsToSearch = activeCategory === "all"
      ? productsData
      : productsData.filter(brand => brand.category === activeCategory);

    // If search is empty → show series cards only
    if (!term) {
      return {
        items: brandsToSearch.flatMap(brand => brand.series || []),
        mode: 'series'
      };
    }

    let matchedModels = [];
    let matchedSeries = [];
    let seriesIds = new Set(); // To avoid duplicate series

    brandsToSearch.forEach(brand => {
      // Check if the brand/category name matches the search term
      const brandMatched = brand.name.toLowerCase().includes(term) ||
        brand.category.toLowerCase().includes(term);

      brand.series?.forEach(series => {
        // Check if series name or description matches
        const seriesNameMatched = series.name.toLowerCase().includes(term);
        const seriesDescMatched = series.description?.toLowerCase().includes(term);
        const seriesFeaturesMatched = (series.features || []).some(f => f.toLowerCase().includes(term));

        let seriesMatched = brandMatched || seriesNameMatched || seriesDescMatched || seriesFeaturesMatched;

        // Search through models
        series.models?.forEach(model => {
          const modelSearchText = `
            ${model.name}
            ${model.description || ""}
            ${model.overview || ""}
            ${(model.keyFeatures || []).join(" ")}
            ${JSON.stringify(model.specifications || {}).toLowerCase()}
          `.toLowerCase();

          if (model.name.toLowerCase().includes(term) || modelSearchText.includes(term)) {
            matchedModels.push({
              ...model,
              _type: 'model',
              brandName: brand.name,
              category: brand.category,
              seriesName: series.name,
              seriesImage: series.image
            });
            seriesMatched = true;
          }
        });

        // Add series if it matched or if any of its models matched
        if (seriesMatched && !seriesIds.has(series.id)) {
          matchedSeries.push({
            ...series,
            _type: 'series',
            brandName: brand.name,
            category: brand.category
          });
          seriesIds.add(series.id);
        }
      });
    });

    // Prioritize showing models if any were found, otherwise show series
    if (matchedModels.length > 0) {
      return { items: matchedModels, mode: 'models' };
    }

    return { items: matchedSeries, mode: 'series' };
  }, [searchTerm, activeCategory]);

  // Sort the filtered products
  const sortedProducts = useMemo(() => {
    const products = [...allFilteredProducts];

    switch (sortBy) {
      case 'name':
        return products.sort((a, b) => a.name.localeCompare(b.name));

      case 'newest':
        // Assuming newer products are at the end of the array
        return products.reverse();

      case 'category':
        return products.sort((a, b) => {
          const categoryA = a.category || a.brandName || '';
          const categoryB = b.category || b.brandName || '';
          return categoryA.localeCompare(categoryB);
        });

      default:
        return products;
    }
  }, [allFilteredProducts, sortBy]);

  const productsToRender = sortedProducts.slice(0, productsToShow);
  const hasMoreProducts = sortedProducts.length > productsToShow;

  // Calculate total products count
  const totalProductsCount = productsData.reduce((total, brand) => {
    return total + (brand.series ? brand.series.length : 0);
  }, 0);

  // Navigation handlers
  const handleSeriesClick = (series) => {
    navigate(`/products/series/${series.id}`, { state: { series } });
  };

  // Event handlers
  const handleLoadMore = () => {
    setProductsToShow(prev => prev + productsPerPage);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setProductsToShow(productsPerPage);
    setHoveredProduct(null);
    setIsMobileFiltersOpen(false);
  };

  const clearAllFilters = () => {
    setActiveCategory("all");
    setSearchTerm('');
    setIsSearchVisible(false);
    setSortBy('name');
    setIsMobileFiltersOpen(false);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <ProductsHero />

      {/* Mobile Sticky Filter Bar */}
      <div className="lg:hidden sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          {/* Filter Button */}
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
          >
            <span>Filters</span>
            {(activeCategory !== "all" || searchTerm) && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {(activeCategory !== "all" ? 1 : 0) + (searchTerm ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-1 px-3 py-2 text-sm bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort: Name</option>
            <option value="newest">Sort: Newest</option>
            <option value="category">Sort: Category</option>
          </select>

          {/* Search Toggle */}
          <button
            onClick={handleSearchClick}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Search Input */}
        {isSearchVisible && (
          <div className="mt-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      {/* Mobile Filter Dropdown */}
      {isMobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50" onClick={() => setIsMobileFiltersOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Categories</h3>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category.id;
                  const categoryProductCount = category.id === "all"
                    ? totalProductsCount
                    : productsData.find(brand => brand.category === category.id)?.series?.length || 0;

                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-colors ${isActive
                          ? 'bg-blue-50 text-blue-900 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{categoryProductCount}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar - Hidden on Mobile */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Products
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    const categoryProductCount = category.id === "all"
                      ? totalProductsCount
                      : productsData.find(brand => brand.category === category.id)?.series?.length || 0;

                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-colors ${isActive
                            ? 'bg-blue-50 text-blue-900 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                          }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">{categoryProductCount}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Product Name</option>
                  <option value="newest">Newest First</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Content Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600">{allFilteredProducts.length} products available</p>
            </div>

            {/* Products Display */}
            {productsToRender.length > 0 ? (
              <>
                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {productsToRender.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredProduct(item.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      onClick={() => {
                        if (searchMode === 'models' || item._type === 'model') {
                          navigate(`/products/detail/${item.id}`, {
                            state: {
                              model: item,
                              seriesName: item.seriesName,
                              brandName: item.brandName
                            }
                          });
                        } else {
                          handleSeriesClick(item);
                        }
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        {/* Badge for Model */}
                        {searchMode === 'models' && (
                          <div className="absolute top-3 right-3 z-10">
                            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              MODEL
                            </span>
                          </div>
                        )}

                        <img
                          src={item.image || item.seriesImage}
                          alt={item.name}
                          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {item.name}
                        </h3>

                        {searchMode === 'models' && (
                          <p className="text-sm text-gray-500 mb-3">
                            {item.seriesName} • {item.brandName}
                          </p>
                        )}

                        {/* DESCRIPTION SIRF SERIES CARD ME DIKHEGI — MODEL ME NHI */}
                        {searchMode === 'series' && item.description && (
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {item.description}
                          </p>
                        )}

                        {/* Features (only for series) */}
                        {searchMode === 'series' && item.features && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.features.slice(0, 3).map((feature, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* CTA Text */}
                        <div className="text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                          {searchMode === 'models' ? "View Model Details →" : "Explore Series →"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Section */}
                {hasMoreProducts && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={handleLoadMore}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span>Load More Products</span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products matching your current search and filter criteria.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setIsSearchVisible(false);
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    <span>Clear Search</span>
                  </button>
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className="inline-flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span>View All Products</span>
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <JoinCommunitySection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ProductsPage;
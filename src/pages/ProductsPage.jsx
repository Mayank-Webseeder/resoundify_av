import React, { useState, useEffect } from 'react';
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

  const [searchMode, setSearchMode] = useState('series');
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

  const getDisplayProducts = () => {
    const term = searchTerm.trim().toLowerCase();

    // Agar search empty hai → sirf series cards
    if (!term) {
      // setSearchMode('series');  ← YE LINE HATA DI
      if (activeCategory === "all") {
        return { items: productsData.flatMap(brand => brand.series || []), mode: 'series' };
      } else {
        const selectedBrand = productsData.find(brand => brand.category === activeCategory);
        return { items: selectedBrand ? selectedBrand.series || [] : [], mode: 'series' };
      }
    }

    let matchedModels = [];
    let matchedSeries = [];

    productsData.forEach(brand => {
      const brandMatched = brand.name.toLowerCase().includes(term) ||
        brand.category.toLowerCase().includes(term);

      brand.series?.forEach(series => {
        let seriesMatched = brandMatched ||
          series.name.toLowerCase().includes(term) ||
          series.description?.toLowerCase().includes(term);

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

        if (seriesMatched) {
          matchedSeries.push({
            ...series,
            _type: 'series',
            brandName: brand.name,
            category: brand.category
          });
        }
      });
    });

    if (matchedModels.length > 0) {
      // setSearchMode('models');  ← YE BHI HATA DI
      return { items: matchedModels, mode: 'models' };
    }

    // setSearchMode('series');  ← YE BHI HATA DI
    return { items: matchedSeries, mode: 'series' };
  };

  const { items: allFilteredProducts, mode: currentSearchMode } = getDisplayProducts();
  const productsToRender = allFilteredProducts.slice(0, productsToShow);
  const hasMoreProducts = allFilteredProducts.length > productsToShow;

  // Add this useEffect (koi bhi jagah state ke baad)
  useEffect(() => {
    const { mode } = getDisplayProducts();
    setSearchMode(mode);
  }, [searchTerm, activeCategory]);

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
    setIsMobileFiltersOpen(false); // Close mobile filters after selection
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

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <ProductsHero />

        {/* Mobile Sticky Filter Bar */}
        <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              {/* Filter Button */}
              <button
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                Filters
                {(activeCategory !== "all" || searchTerm) && (
                  <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
                className={`p-2 rounded-lg transition-colors ${isSearchVisible
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                  className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Mobile Filter Dropdown */}
          {isMobileFiltersOpen && (
            <div className="border-t border-gray-200 bg-white max-h-60 overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Categories</h3>
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear All
                  </button>
                </div>
                <div className="space-y-1">
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
                        <span className="font-medium">{category.name}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${isActive
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                          }`}>
                          {categoryProductCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <section className="w-full mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Desktop Sidebar - Hidden on Mobile */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-20">

                {/* Search */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Clear All
                    </button>
                  </div>

                  <button
                    onClick={handleSearchClick}
                    className={`w-full flex items-center justify-between p-3 text-left rounded-lg border transition-colors ${isSearchVisible
                      ? 'border-blue-300 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="font-medium text-gray-900">Search Products</span>
                    </div>
                    <svg className={`w-4 h-4 text-gray-400 transition-transform ${isSearchVisible ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isSearchVisible && (
                    <div className="mt-3">
                      <input
                        type="text"
                        placeholder="Search by name or description..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        autoFocus
                      />
                    </div>
                  )}
                </div>

                {/* Categories */}
                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Categories</h4>
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
                          <span className="font-medium">{category.name}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${isActive
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600'
                            }`}>
                            {categoryProductCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sort */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Sort By</h4>
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
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">

              {/* Content Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categories.find(cat => cat.id === activeCategory)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {allFilteredProducts.length} products available
                  </p>
                </div>
              </div>

              {/* Products Display */}
              {productsToRender.length > 0 ? (
                <>
                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                    {productsToRender.map((item, index) => (
                      <div
                        key={item.id || item._type + index}
                        className="group cursor-pointer bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col"
                        onClick={() => {
                          if (searchMode === 'models' || item._type === 'model') {
                            // Direct model page pe jaaye (tu baad me bana lena ya series page pe bhej dena)
                            navigate(`/products/detail/${item.id}`, {
                              state: {
                                model: item,
                                seriesName: item.seriesName,
                                brandName: item.brandName
                              }
                            });
                          } else {
                            // Normal series click
                            handleSeriesClick(item);
                          }
                        }}
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden bg-white">
                          <img
                            src={item.images?.[0] || item.image || "/images/placeholder.jpg"}
                            alt={item.name}
                            className="w-full h-full object-contain transition-transform duration-300 p-4 group-hover:scale-105"
                          />
                          {/* Badge for Model */}
                          {searchMode === 'models' && (
                            <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                              MODEL
                            </div>
                          )}
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.name}
                            {searchMode === 'models' && (
                              <span className="block text-sm font-normal text-gray-600 mt-1">
                                {item.seriesName} • {item.brandName}
                              </span>
                            )}
                          </h3>

                          {/* DESCRIPTION SIRF SERIES CARD ME DIKHEGI — MODEL ME NHI */}
                          {searchMode === 'series' && item.description && (
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                              {item.description}
                            </p>
                          )}
                          {/* Features (only for series) */}
                          {searchMode === 'series' && item.features && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {item.features.slice(0, 3).map((feature, idx) => (
                                <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="flex-1"></div>

                          {/* CTA Text */}
                          <div className="text-sm text-blue-600 font-medium">
                            {searchMode === 'models' ? "View Model Details →" : "Explore Series →"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More Section */}
                  {hasMoreProducts && (
                    <div className="text-left">
                      <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-fit mx-auto text-center">
                        {/* <p className="text-gray-600 mb-4">
                          Showing {productsToRender.length} of {allFilteredProducts.length} products
                        </p>
                        <div className="w-64 bg-gray-200 rounded-full h-2 mb-4 mx-auto">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(productsToRender.length / allFilteredProducts.length) * 100}%` }}
                          ></div>
                        </div> */}
                        <button
                          onClick={handleLoadMore}
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <span>Load More Products</span>
                          {/* <span className="bg-white/20 rounded px-2 py-1 text-sm">
                            +{Math.min(productsPerPage, allFilteredProducts.length - productsToRender.length)}
                          </span> */}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Empty State */
                <div className="text-center py-20">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We couldn't find any products matching your current search and filter criteria.
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setIsSearchVisible(false);
                      }}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
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
            </div>
          </div>
        </section>
      </main>

      <JoinCommunitySection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ProductsPage;

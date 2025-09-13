import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/Products/ProductsHero';
import JoinCommunitySection from '../components/JoinCommunitySection';
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

  // Get filtered and sorted products
  const getDisplayProducts = () => {
    let products = [];

    if (activeCategory === "all") {
      products = productsData.flatMap(brand => brand.series || []);
    } else {
      const selectedBrand = productsData.find(brand => brand.category === activeCategory);
      products = selectedBrand ? selectedBrand.series : [];
    }

    // Apply search filter
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      products = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        (product.description && product.description.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    // Sort products
    return products.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          return new Date(b.releaseDate || 0) - new Date(a.releaseDate || 0);
        default:
          return 0;
      }
    });
  };

  const allFilteredProducts = getDisplayProducts();
  const productsToRender = allFilteredProducts.slice(0, productsToShow);
  const hasMoreProducts = allFilteredProducts.length > productsToShow;

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
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <ProductsHero />

        {/* Stats Section */}
        {/* <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{totalProductsCount}</div>
                <div className="text-sm font-medium text-gray-600">Total Products</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{categories.length - 1}</div>
                <div className="text-sm font-medium text-gray-600">Categories</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm font-medium text-gray-600">Quality</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm font-medium text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Main Content */}
        <section className="w-full mx-auto px-6 py-12">

          {/* Page Header */}
          {/* <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Product Catalog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Explore our comprehensive range of enterprise-grade solutions designed to meet
              the most demanding professional requirements.
            </p>
          </div> */}

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-20">

                {/* Search */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                    <button
                      onClick={() => {
                        setActiveCategory("all");
                        setSearchTerm('');
                        setIsSearchVisible(false);
                        setSortBy('name');
                      }}
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
                    {productsToRender.map((product, index) => (
                      <div
                        key={product.id}
                        className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
                        onClick={() => handleSeriesClick(product)}
                      >
                        {/* Product Image */}
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              {/* placeholder svg */}
                            </div>
                          )}

                          {/* Status Badge */}
                          {/* <div className="absolute top-3 right-3">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Available
                            </span>
                          </div> */}
                        </div>

                        {/* Product Content */}
                        <div className="p-6 flex flex-col flex-1">
                          {/* Product Name */}
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {product.name}
                          </h3>

                          {/* Product Description */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                            {product.description || "Premium enterprise solution designed for optimal performance and reliability."}
                          </p>

                          {/* Product Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Spacer pushes button down */}
                          <div className="flex-1"></div>

                          {/* Action Button */}
                          <div className="flex gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation(); // prevent double trigger
                                handleSeriesClick(product);
                              }}
                              className="flex-1 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>

                    ))}
                  </div>

                  {/* Load More Section */}
                  {hasMoreProducts && (
                    <div className="text-left"> {/* stays left */}
                      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 w-[550px] max-w-3xl mx-0 text-center">
                        <p className="text-gray-600 mb-4">
                          Showing {productsToRender.length} of {allFilteredProducts.length} products
                        </p>
                        <div className="w-64 bg-gray-200 rounded-full h-2 mb-4 mx-auto">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(productsToRender.length / allFilteredProducts.length) * 100}%` }}
                          ></div>
                        </div>
                        <button
                          onClick={handleLoadMore}
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <span>Load More Products</span>
                          <span className="bg-white/20 rounded px-2 py-1 text-sm">
                            +{Math.min(productsPerPage, allFilteredProducts.length - productsToRender.length)}
                          </span>
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
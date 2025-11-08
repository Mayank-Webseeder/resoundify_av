// pages/ProductSeriesPage.js - Professional Series listing page
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsGrid from '../components/Products/ProductsGrid';
import JoinCommunitySection from '../components/ProductPageCta';

const ProductSeriesPage = () => {
    const { seriesId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Get series data from navigation state or fetch from API/data store
    const series = location.state?.series;

    const [hoveredProduct, setHoveredProduct] = useState(null);

    if (!series) {
        // Handle case where series data is not available
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17H9m6 0a3 3 0 01-3 3H9a3 3 0 01-3-3m6 0V9a3 3 0 00-3-3H9a3 3 0 00-3 3v8.1" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Series Not Found</h2>
                    <p className="text-gray-600 mb-4">The requested product series could not be located.</p>
                    <Link
                        to="/products"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        ← Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    const handleModelClick = (model) => {
        navigate(`/products/detail/${model.id}`, { state: { model, series } });
    };

    return (
        <>
            <Header />

            <main className="min-h-screen bg-white">
                {/* Compact Hero Section */}
                <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 pt-20">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        {/* Breadcrumb */}
                        <nav className="flex items-center space-x-2 text-gray-400 mb-6">
                            <Link to="/products" className="text-sm hover:text-white transition-colors">
                                Products
                            </Link>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-sm text-white">{series.name}</span>
                        </nav>

                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                    {series.name} Series
                                </h1>
                                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-6">
                                    {series.description || `Professional-grade ${series.name} solutions engineered for excellence and reliability.`}
                                </p>

                                {/* Compact Stats */}
                                <div className="flex items-center space-x-6 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-gray-300">{series.models?.length || 0} Models</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-gray-300">Enterprise Grade</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="text-gray-300">24/7 Support</span>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/products"
                                className="hidden md:inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span>All Products</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">Available Models</h2>
                            <p className="text-gray-600">
                                {series.models?.length || 0} professional models in this series
                            </p>
                        </div>

                        {/* Mobile back button */}
                        <Link
                            to="/products"
                            className="md:hidden inline-flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Back</span>
                        </Link>
                    </div>

                    {/* Models Grid or Empty State */}
                    {series.models && series.models.length > 0 ? (
                        <div className="bg-white">
                            <ProductsGrid
                                products={series.models}
                                hoveredProduct={hoveredProduct}
                                setHoveredProduct={setHoveredProduct}
                                onProductClick={handleModelClick}
                                isShowingModels={true}
                                onLearnMore={handleModelClick}
                            />
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12">
                            <div className="text-center max-w-md mx-auto">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Models Coming Soon</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We're currently updating this series with new models. Check back soon or contact our sales team.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Contact Sales
                                    </Link>
                                    <Link
                                        to="/products"
                                        className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                                    >
                                        Browse Other Series
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Feature Highlights Section */}
                {series.models && series.models.length > 0 && (
                    <div className="bg-gray-50 py-12">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Why Choose {series.name}?</h3>
                                <p className="text-gray-600">Industry-leading features and support</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Proven Reliability</h4>
                                    <p className="text-sm text-gray-600">Built to last with industry-leading quality standards and extensive testing.</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">High Performance</h4>
                                    <p className="text-sm text-gray-600">Engineered for optimal performance in demanding professional environments.</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
                                    <p className="text-sm text-gray-600">Comprehensive support from our team of technical experts, available 24/7.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <JoinCommunitySection />
            <Footer />
        </>
    );
};

export default ProductSeriesPage;
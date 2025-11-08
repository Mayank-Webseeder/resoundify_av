import React from "react";

const ProductsHero = () => {
  return (
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <img
        src="/images/bg_product_page.webp"
        alt="Products Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-[Tilt_Neon] font-medium mb-6 leading-tight tracking-tighter text-white">
          Explore Our <span className="text-blue-400">Innovation</span>
        </h1>
        <p className="text-xl md:text-xl font-[Exo_2] opacity-90 max-w-3xl mx-auto leading-relaxed">
          Discover Resoundify's cutting-edge audio-visual solutions. Each
          product is engineered for unparalleled performance, seamlessly
          integrating with your vision.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;

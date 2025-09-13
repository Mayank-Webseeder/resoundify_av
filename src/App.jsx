// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import Projects from './pages/Projects';
import ProductSeriesPage from './pages/ProductSeriesPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/series/:seriesId" element={<ProductSeriesPage />} />
        <Route path="/products/detail/:productId" element={<ProductDetailPage />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UrjaHeader from './components/UrjaHeader';
import UrjaFooter from './components/UrjaFooter';
import ScrollToTop from './components/ScrollToTop';

import Home from './page/Home';
import AboutPage from './page/AboutPage';

// Business pages
import OurBusiness from './page/OurBusiness';
import FeedBusinessPage from './page/business/FeedBusinessPage';
import PoultryBusinessPage from './page/business/PoultryBusinessPage';
import BioFertilizersPage from './page/business/BioFertilizersPage';
import SoyaProcessingPage from './page/business/SoyaProcessingPage';
import RetailBusinessPage from './page/business/RetailBusinessPage';

// Product pages
import UrjaProductPage from './page/UrjaProduct';
import CattleFeedProductsPage from './page/products/CattleFeedProductsPage';
import PoultryFeedProductsPage from './page/products/PoultryFeedProductsPage';
import BioFertilizerProductsPage from './page/products/BioFertilizerProductsPage';

// Services pages
import Services from './page/Services';
import AgriculturalServicesPage from './page/services/AgriculturalServicesPage';
import PoultryServicesPage from './page/services/PoultryServicesPage';
import FarmerSupportPage from './page/services/FarmerSupportPage';

// Corporate pages
import CorporatePage from './page/CorporatePage';
import AnnualReportsPage from './page/corporate/AnnualReportsPage';
import GovernancePage from './page/corporate/GovernancePage';

import ContactPage from './page/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-[#eff8e6]">
        <UrjaHeader />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Our Business Routes */}
            <Route path="/business" element={<OurBusiness />} />
            <Route path="/business/feed" element={<FeedBusinessPage />} />
            <Route path="/business/poultry" element={<PoultryBusinessPage />} />
            <Route path="/business/bio-fertilizers" element={<BioFertilizersPage />} />
            <Route path="/business/soya-processing" element={<SoyaProcessingPage />} />
            <Route path="/business/retail" element={<RetailBusinessPage />} />

            {/* Our Products Routes */}
            <Route path="/products" element={<UrjaProductPage />} />
            <Route path="/products/cattle-feed" element={<CattleFeedProductsPage />} />
            <Route path="/products/poultry-feed" element={<PoultryFeedProductsPage />} />
            <Route path="/products/bio-fertilizers" element={<BioFertilizerProductsPage />} />

            {/* Our Services Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/agriculture" element={<AgriculturalServicesPage />} />
            <Route path="/services/poultry" element={<PoultryServicesPage />} />
            <Route path="/services/farmer-support" element={<FarmerSupportPage />} />

            {/* Corporate Actions Routes */}
            <Route path="/corporate-actions" element={<CorporatePage />} />
            <Route path="/corporate-actions/reports" element={<AnnualReportsPage />} />
            <Route path="/corporate-actions/governance" element={<GovernancePage />} />

            {/* Contact Route */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <UrjaFooter />
      </div>
    </Router>
  );
}

export default App;

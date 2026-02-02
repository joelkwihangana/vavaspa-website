import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MobileBookingBar from "./components/layout/MobileBookingBar";
import ScrollToTop from "./components/system/ScrollToTop";

import HomePage from "./pages/HomePage";
import MassagePage from "./pages/MassagePage";
import SpaPage from "./pages/SpaPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/contact";
import WaxingPage from "./pages/WaxingPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* pb prevents content being hidden under the fixed MobileBookingBar */}
      <div className="min-h-screen pb-[92px] sm:pb-0 bg-bg text-text">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/massage" element={<MassagePage />} />
            <Route path="/spa" element={<SpaPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/waxing" element={<WaxingPage />} />
          </Routes>
        </main>

        <Footer />

        <MobileBookingBar />
      </div>
    </BrowserRouter>
  );
}

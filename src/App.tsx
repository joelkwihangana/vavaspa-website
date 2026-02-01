import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MassagePage from "./pages/MassagePage";
import SpaPage from "./pages/SpaPage";
import AboutPage from "./pages/AboutPage";
import MobileBookingBar from "./components/layout/MobileBookingBar";
import Footer from "./components/layout/Footer";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  return (
    <BrowserRouter>
     <div className="pb-[92px] sm:pb-0">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/massage" element={<MassagePage />} />
        <Route path="/spa" element={<SpaPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
         <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
       <MobileBookingBar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

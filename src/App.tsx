import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MassagePage from "./pages/MassagePage";
import SpaPage from "./pages/SpaPage";
import AboutPage from "./pages/AboutPage";
import MobileBookingBar from "./components/layout/MobileBookingBar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/massage" element={<MassagePage />} />
        <Route path="/spa" element={<SpaPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
       <MobileBookingBar />
    </BrowserRouter>
  );
}

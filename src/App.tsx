import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MassagePage from "./pages/MassagePage";
import SpaPage from "./pages/SpaPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/massage" element={<MassagePage />} />
        <Route path="/spa" element={<SpaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

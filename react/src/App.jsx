import NavBar from "./components/NavBar";
import ContentTop from "./components/ContentTop";
import Features from "./components/Features";
import ContentMiddle from "./components/ContentMiddle";
import ContentDownload from "./components/ContentDownload";
import ComponentBottom from "./components/ComponentBottom";
import Footer from "./components/Footer";
import BottomNavBar from "./components/BottomNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturesPage from "../src/pages/FeaturesPage";
import ContactPage from "../src/pages/ContactPage";
import LoginPage from "../src/pages/LoginPage";
import PricingPage from "../src/pages/PricingPage";

function HomePages() {
  return (
    <>
      <div className="main-website">
        <ContentTop />
        <Features />
        <ContentMiddle />
        <ContentDownload />
        <ComponentBottom />
        <Footer />
        <BottomNavBar />
      </div>
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

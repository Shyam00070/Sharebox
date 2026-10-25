
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ActivityMarquee from "./components/ActivityMarquee";
import Hero from "./components/Hero";
import OfferItem from "./components/OfferItem";
import Products from "./components/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";

function Home() {
  return (
    <>
      <Navbar />
      <ActivityMarquee />
      <Hero />
      <Products />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer-item" element={<OfferItem />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

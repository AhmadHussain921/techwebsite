import React from "react";
import Home from "../src/pages/Home";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import CareerPage from "./pages/CareerPage";
import LetsTalkPage from "./pages/LetsTalkPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Service" element={<ServicesPage />} />
          <Route path="/Career" element={<CareerPage />} />
          <Route path="/contact" element={<LetsTalkPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

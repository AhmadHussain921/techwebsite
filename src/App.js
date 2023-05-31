import React, { useEffect } from "react";
import Home from "../src/pages/Home";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import CareerPage from "./pages/CareerPage";
import LetsTalkPage from "./pages/LetsTalkPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wrapper, useMediaQuery } from "./components/Layouts";
import Aos from "aos";
import styled from "styled-components";
import "aos/dist/aos.css";
const ResponsiveOverflow = styled(Wrapper)`
  * {
    overflow: ${(props) => (props.overflow ? props.overflow : "")};
  }
  overflow: ${(props) => (props.overflow ? props.overflow : "")};
`;
const App = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
     <ResponsiveOverflow overflow={isResponsive && "hidden !important"}>
        <Wrapper
             style={{
              position: "fixed",
              bottom: "5%",
              right: "5%",
              zIndex: 10,
            }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=+923214100432&text=Hi, Bilal Iqbal!"
            class="whatsapp-button"
            target="_blank"
            rel="noreferrer"
            style={{ bottom: "15px" }}
          >
            <img
              src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
              alt="whatsapp"
            />
          </a>
        </Wrapper>

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
        </ResponsiveOverflow>
    </>
  );
};

export default App;

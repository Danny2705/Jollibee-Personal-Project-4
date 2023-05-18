import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Mainnav from "./components/MainNav/Mainnav";
import FirstSection from "./components/First Section/firstSection";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/Pages/About/Pages/AboutUs";
import SecondSection from "./components/Second Section/secondSection";
import ThirdSection from "./components/Third Section/ThirdSection";

function App() {
  return (
    <>
      <nav>
        <Navbar />
        <Mainnav />
      </nav>

      <main>
        <section className="content">
          <FirstSection />
        </section>

        <section>
          <SecondSection />
        </section>

        <section>
          <ThirdSection />
        </section>
      </main>

      <Routes>
        <Route path="/chicken" element={<FirstSection />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;

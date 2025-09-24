import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AartiBooking from "./components/AartiBooking";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import FloatingElements from "./components/FloatingElements";

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Cinzel:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    document.title = "श्री बड़ी दुर्गा मंदिर - Maa Durga Temple";
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-800 to-yellow-700 relative overflow-hidden">
      {/* Floating Diyas + Om Symbols */}
      <FloatingElements />

      {/* Gradient overlay */}
      <div className="fixed inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255,140,0,0.3) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <section id="about">
            <About />
          </section>
          <section id="booking">
            <AartiBooking />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

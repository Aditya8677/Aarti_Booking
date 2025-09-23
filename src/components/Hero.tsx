import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-20 px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Temple Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 font-devanagari mb-4 animate-pulse">
          श्री बड़ी दुर्गा मंदिर
        </h1>
        <h2 className="text-2xl md:text-3xl text-white font-cinzel mb-8">
          Shri Badi Durga Mandir
        </h2>

        {/* Welcome Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-10 border border-white/20 shadow-2xl">
          <h3 className="text-xl md:text-2xl text-orange-200 font-devanagari mb-4">
            माता दुर्गा के दरबार में आपका स्वागत है
          </h3>
          <p className="text-lg text-white font-cinzel mb-4">
            Welcome to the divine court of Maa Durga
          </p>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            Experience divine blessings at our sacred temple. Join us for daily
            aarti and special prayers. Book your aarti slot online and be part
            of our spiritual community.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/gallery/QRdonate.jpg"
            alt="Donate QR"
            className="w-48 h-48 md:w-64 md:h-64 rounded-xl shadow-lg border-4 border-yellow-400"
          />
          <p className="mt-4 text-lg text-white font-semibold">
            🙏 Donate for Temple
          </p>
        </div>

        {/* Aarti Booking Button */}
        <a
          href="#booking"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2"
        >
          <span>🙏</span>
          <span>Book Your Aarti Online</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

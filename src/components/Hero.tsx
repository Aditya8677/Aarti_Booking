import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center relative">
      {/* Temple Name */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 font-devanagari mb-4 animate-pulse">
          श्री बड़ी दुर्गा मंदिर
        </h1>
        <h2 className="text-lg md:text-3xl text-white font-cinzel mb-6">
          Shri Badi Durga Mandir
        </h2>
      </div>

      {/* QR Code for Donation */}
      <div className="relative mb-10 flex justify-center">
        <a href="/gallery/QRdonate.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/gallery/QRdonate.jpg" // ✅ Your QR code from public/gallery
            alt="Donate QR"
            className="w-40 sm:w-56 md:w-64 lg:w-72 rounded-xl shadow-2xl relative z-10 object-contain cursor-pointer hover:scale-105 transition-transform"
          />
        </a>
        {/* Glow effect behind QR */}
        <div className="absolute w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-[180px] sm:h-[240px] md:h-[280px] lg:h-[320px] bg-orange-500/30 blur-3xl rounded-full -z-10"></div>
      </div>

      {/* Aarti Booking Button */}
      <div className="mt-4">
        <a
          href="#booking"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center space-x-2"
        >
          <span>🙏</span>
          <span>Book Your Aarti Online</span>
        </a>
      </div>

      {/* Welcome Text */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mt-12 border border-white/20 shadow-2xl max-w-3xl">
        <h3 className="text-lg sm:text-xl md:text-2xl text-orange-200 font-devanagari mb-4">
          माता दुर्गा के दरबार में आपका स्वागत है
        </h3>
        <p className="text-base sm:text-lg text-white mb-6 font-cinzel">
          Welcome to the divine court of Maa Durga
        </p>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
          Experience divine blessings at our sacred temple. Join us for daily
          aarti and special prayers. Book your aarti slot online and be part of
          our spiritual community.
        </p>
      </div>
    </section>
  );
};

export default Hero;

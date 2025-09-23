import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-28 px-4 bg-gradient-to-br from-orange-900 via-red-800 to-yellow-700"
    >
      {/* Temple Name */}
      <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 font-devanagari mb-4 animate-pulse text-center">
        श्री बड़ी दुर्गा मंदिर
      </h1>
      <h2 className="text-2xl md:text-3xl text-white font-cinzel mb-8 text-center">
        Shri Badi Durga Mandir
      </h2>

      {/* Welcome Message */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-10 border border-white/20 shadow-2xl max-w-2xl text-center">
        <h3 className="text-xl md:text-2xl text-orange-200 font-devanagari mb-4">
          माता दुर्गा के दरबार में आपका स्वागत है
        </h3>
        <p className="text-lg text-white mb-4 font-cinzel">
          Welcome to the divine court of Maa Durga
        </p>
        <p className="text-white/80 leading-relaxed">
          Experience divine blessings at our sacred temple. Join us for daily
          aarti and special prayers. Book your aarti slot online and be part of
          our spiritual community.
        </p>
      </div>

      {/* QR Code + Text */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="/gallery/QRdonate.jpg"
          alt="Donate QR"
          className="w-48 h-48 rounded-lg shadow-2xl border-4 border-yellow-400 hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-lg font-semibold text-orange-200 mt-4">
          🙏 Donate for Temple
        </h3>
        <p className="text-white/70 mt-1 text-sm">Scan the QR to Donate</p>
      </div>

      {/* Aarti Booking Button */}
      <a
        href="#booking"
        className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 mb-12"
      >
        <span>🙏</span>
        <span>Book Your Aarti Online</span>
      </a>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Address */}
        <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30 shadow-md text-center">
          <MapPin className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
          <h4 className="text-white font-semibold mb-1">Address</h4>
          <p className="text-white text-sm">कौनहारा घाट, हाजीपुर</p>
          <p className="text-orange-200 text-sm">वैशाली, Bihar</p>
        </div>

        {/* Phone */}
        <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30 shadow-md text-center">
          <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
          <h4 className="text-white font-semibold mb-1">Phone</h4>
          <a
            href="tel:9931906442"
            className="text-orange-200 hover:text-white transition-colors text-sm"
          >
            9931906442
          </a>
        </div>

        {/* Email */}
        <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30 shadow-md text-center">
          <Mail className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
          <h4 className="text-white font-semibold mb-1">Email</h4>
          <a
            href="mailto:adityaak8677@gmail.com"
            className="text-orange-200 hover:text-white transition-colors text-sm"
          >
            adityaak8677@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

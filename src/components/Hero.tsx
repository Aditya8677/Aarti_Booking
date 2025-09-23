import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Temple Name */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 font-devanagari mb-4 animate-pulse">
            श्री बाड़ी दुर्गा मंदिर
          </h1>
          <h2 className="text-2xl md:text-3xl text-white font-cinzel mb-6">
            Shri Badi Durga Mandir
          </h2>
        </div>

        {/* Welcome Message */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <h3 className="text-xl md:text-2xl text-orange-200 font-devanagari mb-4">
            माता दुर्गा के दरबार में आपका स्वागत है
          </h3>
          <p className="text-lg text-white mb-6 font-cinzel">
            Welcome to the divine court of Maa Durga
          </p>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            Experience divine blessings at our sacred temple. Join us for daily aarti and special prayers. 
            Book your aarti slot online and be part of our spiritual community.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-md rounded-xl p-6 border border-orange-400/30 hover:transform hover:scale-105 transition-all duration-300">
            <MapPin className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Address</h4>
            <p className="text-orange-200 text-sm font-devanagari">
              कौनहारा घाट, हाजीपुर
            </p>
            <p className="text-orange-200 text-sm">
              वैशाली, Bihar
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-md rounded-xl p-6 border border-orange-400/30 hover:transform hover:scale-105 transition-all duration-300">
            <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Phone</h4>
            <a href="tel:9931906442" className="text-orange-200 hover:text-white transition-colors">
              9931906442
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-md rounded-xl p-6 border border-orange-400/30 hover:transform hover:scale-105 transition-all duration-300">
            <Mail className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Email</h4>
            <a href="mailto:adityaak8677@gmail.com" className="text-orange-200 hover:text-white transition-colors text-sm">
              adityaak8677@gmail.com
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            🙏 Book Your Aarti Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
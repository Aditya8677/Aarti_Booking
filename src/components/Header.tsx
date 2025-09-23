import React from "react";
import { Home, Info, Calendar, Phone, Image } from "lucide-react";

const Header: React.FC = () => {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "aarti-booking", label: "Aarti Booking", icon: Calendar },
    { id: "contact", label: "Contact", icon: Phone },
    { id: "gallery", label: "Gallery", icon: Image },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-800/90 to-red-800/90 backdrop-blur-md border-b border-orange-600/30">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white">
          <h1 className="text-xl md:text-2xl font-bold font-devanagari">
            श्री बाड़ी दुर्गा मंदिर
          </h1>
          <p className="text-xs md:text-sm text-orange-200 font-cinzel">
            Shri Badi Durga Mandir
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex space-x-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 rounded-lg flex items-center space-x-2 text-orange-200 hover:text-white hover:bg-white/10 transition-all"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;

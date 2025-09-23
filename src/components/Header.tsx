import React from 'react';
import { Home, Info, Calendar, Phone, Image } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'home', label: 'Home', hindiLabel: 'होम', icon: Home },
    { id: 'about', label: 'About', hindiLabel: 'परिचय', icon: Info },
    { id: 'booking', label: 'Aarti Booking', hindiLabel: 'आरती बुकिंग', icon: Calendar },
    { id: 'contact', label: 'Contact', hindiLabel: 'संपर्क', icon: Phone },
    { id: 'gallery', label: 'Gallery', hindiLabel: 'गैलरी', icon: Image },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-800/90 to-red-800/90 backdrop-blur-md border-b border-orange-600/30">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="text-white">
            <h1 className="text-xl md:text-2xl font-bold font-devanagari">
              श्री बाड़ी दुर्गा मंदिर
            </h1>
            <p className="text-xs md:text-sm text-orange-200 font-cinzel">
              Shri Badi Durga Mandir
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transform scale-105'
                      : 'text-orange-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex space-x-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                      : 'text-orange-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={20} />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
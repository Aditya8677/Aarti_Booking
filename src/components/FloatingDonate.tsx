import React from "react";
import { Heart } from "lucide-react";

const FloatingDonate: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-orange-400/40 p-4 flex flex-col items-center">
        <img
          src="/gallery/QRdonate.jpg" // ✅ from public/gallery/QRdonate.jpg
          alt="Donate QR"
          className="w-36 h-36 rounded-lg border-2 border-orange-400 shadow-lg mb-3"
        />
        <a
          href="#"
          className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300"
        >
          <Heart className="w-4 h-4" />
          <span>Donate</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingDonate;

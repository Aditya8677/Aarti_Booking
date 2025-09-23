import React from "react";

const FloatingElements: React.FC = () => {
  // Generate floating elements
  const elements = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    size: Math.random() * 20 + 10, // 10–30px
    left: Math.random() * 100, // 0–100%
    animationDelay: Math.random() * 10,
    animationDuration: Math.random() * 10 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-bounce opacity-30"
          style={{
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.animationDelay}s`,
            animationDuration: `${element.animationDuration}s`,
          }}
        >
          {/* Floating diya with flame */}
          <div className="w-full h-full relative">
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-orange-400 to-yellow-400 rounded-b-full opacity-60"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-2/3 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-t-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;

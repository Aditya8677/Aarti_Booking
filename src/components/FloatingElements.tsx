import React from 'react';

const FloatingElements: React.FC = () => {
  // Generate floating elements with different sizes and animation delays
  const elements = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    size: Math.random() * 20 + 10, // 10-30px
    left: Math.random() * 100, // 0-100%
    animationDelay: Math.random() * 10, // 0-10s
    animationDuration: Math.random() * 10 + 15, // 15-25s
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
          {/* Floating Diya/Light */}
          <div className="w-full h-full relative">
            {/* Diya Base */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-orange-400 to-yellow-400 rounded-b-full opacity-60"></div>
            
            {/* Flame */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-2/3 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-t-full animate-pulse"></div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full blur-sm"></div>
          </div>
        </div>
      ))}

      {/* Additional Sparkle Effects */}
      {Array.from({ length: 20 }, (_, index) => (
        <div
          key={`sparkle-${index}`}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        ></div>
      ))}

      {/* Floating Om Symbols */}
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={`om-${index}`}
          className="absolute text-4xl text-orange-300/20 font-devanagari animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 4 + 6}s`,
          }}
        >
          ॐ
        </div>
      ))}

      {/* Sacred Geometry Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-orange-400 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-yellow-400 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-red-400 rounded-full animate-pulse" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-red-900/10 animate-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/5 via-transparent to-orange-900/5 animate-pulse" style={{ animationDuration: '18s' }}></div>
    </div>
  );
};

export default FloatingElements;
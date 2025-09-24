import React from "react";

const FloatingElements: React.FC = () => {
  // Generate random diya / flame elements
  const diyas = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 15, // 15–35px
    left: Math.random() * 100, // % across width
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 15, // 15–25s
  }));

  // Sparkles
  const sparkles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  // Om symbols
  const oms = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 6,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Diyas */}
      {diyas.map((d) => (
        <div
          key={d.id}
          className="absolute animate-float opacity-40"
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            bottom: "-40px",
          }}
        >
          {/* Diya base */}
          <div className="relative w-full h-full flex flex-col items-center">
            <div className="w-full h-1/2 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-b-full opacity-70"></div>
            {/* Flame */}
            <div className="w-1/3 h-2/3 bg-gradient-to-t from-orange-600 via-yellow-400 to-yellow-200 rounded-t-full animate-flame"></div>
          </div>
        </div>
      ))}

      {/* Sparkles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        ></div>
      ))}

      {/* Om symbols */}
      {oms.map((o) => (
        <div
          key={o.id}
          className="absolute text-4xl text-orange-300/20 font-devanagari animate-pulse sacred-symbol"
          style={{
            left: `${o.left}%`,
            top: `${o.top}%`,
            animationDelay: `${o.delay}s`,
            animationDuration: `${o.duration}s`,
          }}
        >
          ॐ
        </div>
      ))}

      {/* Sacred glowing rings */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/4 left-1/4 w-40 h-40 border border-orange-400 rounded-full animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-28 h-28 border border-yellow-400 rounded-full animate-spin"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-red-400 rounded-full animate-pulse"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>
    </div>
  );
};

export default FloatingElements;

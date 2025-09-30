import React from "react";

const Gallery: React.FC = () => {
  // Local temple images from /public/gallery/
  const galleryImages = [
    { id: 1, src: "/gallery/pic1.jpg", title: "दशहरा उत्सव" },
    { id: 2, src: "/gallery/pic2.jpg", title: "माँ दुर्गा स्थापित" },
    { id: 3, src: "/gallery/pic3.jpg", title: "पंडित जी" },
    { id: 4, src: "/gallery/pic4.jpg", title: "शंख पूजा" },
    { id: 5, src: "/gallery/pic5.jpg", title: "विसर्जन - भाग 1" },
    { id: 6, src: "/gallery/pic6.jpg", title: "विसर्जन - भाग 2" },
    { id: 7, src: "/gallery/pic7.jpg", title: "विसर्जन - भाग 3" },
    { id: 8, src: "/gallery/pic8.jpg", title: "विसर्जन - भाग 4" },

    // ✅ Added 5 more photos (already in your folder)
    { id: 9, src: "/gallery/pic9.jpg", title: "माँ दुर्गा" },
    { id: 10, src: "/gallery/pic10.jpg", title: "माँ दुर्गा" },
    { id: 11, src: "/gallery/pic11.jpg", title: "माँ दुर्गा" },
    { id: 12, src: "/gallery/pic12.jpg", title: "माँ दुर्गा" },
    { id: 13, src: "/gallery/pic13.jpg", title: "माँ दुर्गा" },
  ];

  return (
    <section className="min-h-screen pt-20 px-4 py-16 divine-section">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 font-devanagari mb-4">
            गैलरी
          </h2>
          <h3 className="text-2xl md:text-3xl text-white font-cinzel">
            Temple Gallery
          </h3>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <div className="w-full h-80 overflow-hidden flex items-center justify-center bg-black/20">
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title below image */}
              <div className="p-4 text-center">
                <h4 className="text-white font-semibold text-lg">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

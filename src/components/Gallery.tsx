import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Local temple images from /public/gallery/
  const galleryImages = [
    {
      id: 1,
      src: '/gallery/Dusshera.jpg',
      title: 'दशहरा उत्सव',
      category: 'Festivals',
    },
    {
      id: 2,
      src: '/gallery/maa durga staphit.jpg',
      title: 'माँ दुर्गा स्थापित',
      category: 'Daily Worship',
    },
    {
      id: 3,
      src: '/gallery/pandir ji.jpg',
      title: 'पंडित जी',
      category: 'Community',
    },
    {
      id: 4,
      src: '/gallery/sankh.jpg',
      title: 'शंख पूजा',
      category: 'Rituals',
    },
    {
      id: 5,
      src: '/gallery/visharjan 1.jpg',
      title: 'विसर्जन - भाग 1',
      category: 'Festivals',
    },
    {
      id: 6,
      src: '/gallery/visharjan 2.jpg',
      title: 'विसर्जन - भाग 2',
      category: 'Festivals',
    },
    {
      id: 7,
      src: '/gallery/visharjan 3.jpg',
      title: 'विसर्जन - भाग 3',
      category: 'Festivals',
    },
    {
      id: 8,
      src: '/gallery/visharjan 4.jpg',
      title: 'विसर्जन - भाग 4',
      category: 'Festivals',
    },
  ];

  const categories = [
    'All',
    'Daily Worship',
    'Festivals',
    'Rituals',
    'Community',
  ];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="min-h-screen pt-20 px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 font-devanagari mb-4">
            गैलरी
          </h2>
          <h3 className="text-2xl md:text-3xl text-white font-cinzel mb-6">
            Temple Gallery
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Experience the divine beauty and spiritual atmosphere of our sacred
            temple through these captured moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {image.title}
                  </h4>
                  <p className="text-orange-200 text-sm">{image.category}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Images Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/60 text-lg">
              No images found in this category.
            </p>
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-orange-300 transition-colors"
              >
                <X size={32} />
              </button>

              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Gallery Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold text-orange-200 mb-4 font-devanagari">
              मंदिर की यादें
            </h4>
            <p className="text-white/80 leading-relaxed">
              These sacred moments capture the divine essence of our temple -
              from daily worship rituals to grand festivals, from quiet prayer
              sessions to community gatherings. Each image tells a story of
              faith, devotion, and the timeless traditions that connect us to
              the divine mother Durga.
            </p>
            <p className="text-orange-200 mt-4 font-devanagari">
              🙏 हर तस्वीर में छुपी है माता की कृपा
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 bg-gradient-to-br from-orange-900 via-red-800 to-yellow-700 relative overflow-hidden"
    >
      {/* Glowing aura background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 animate-pulse">
        <div className="w-[500px] h-[500px] bg-gradient-radial from-yellow-400/40 via-orange-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Temple name + heritage year */}
      <motion.div
        className="relative z-10 text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 font-devanagari animate-pulse">
          श्री बड़ी दुर्गा मंदिर
        </h1>
        <p className="text-lg md:text-xl text-yellow-200 mt-2 font-cinzel italic">
          (मंदिर स्थापित 1835)
        </p>
        <h2 className="text-2xl md:text-3xl text-white font-cinzel mt-3">
          Shri Badi Durga Mandir
        </h2>
      </motion.div>

      {/* Flex container for Committee + QR */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* Committee Members */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30 shadow-2xl text-left w-[300px] md:w-[350px]">
          <h3 className="text-lg font-semibold text-orange-200 mb-4 text-center">
            🙏 समिति सदस्य
          </h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <strong>(अध्यक्ष)</strong> जयपत पासवान
            </li>
            <li>
              <strong>(सचिव)</strong> बॉबी
            </li>
            <li>
              <strong>(कोषाध्यक्ष)</strong> दीपक कुमार (दीपू), श्याम नारायण साह
            </li>
            <li>
              <strong>(ट्रस्टी)</strong> पंकज शर्मा, राजा, मनसुख पासवान, दीपक
              कुमार सिंह, सुनील कुमार शर्मा
            </li>
            <li>
              <strong>(मुख्य संरक्षक)</strong> राजकुमार श्रीवास्तव
            </li>
            <li>
              <strong>(पूजा कार्यकारिणी)</strong> रवि, सुक्खू, राजा, विक्की,
              राहुल, छोटू, सुजीत, किस्सू
            </li>
          </ul>
        </div>

        {/* QR + Donate */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30 shadow-2xl text-center w-[300px] md:w-[350px]">
          <h3 className="text-lg font-semibold text-orange-200 mb-3">
            🙏 Donate for Temple
          </h3>
          <img
            src="/gallery/QRdonate.jpg"
            alt="Donate QR"
            className="mx-auto w-44 h-44 rounded-lg shadow-lg border border-yellow-400 divine-glow"
          />
          <p className="text-white/70 mt-2 text-sm">Scan the QR to Donate</p>
          <p className="text-orange-200 text-xs mt-2">
            मंदिर के बैंक खाते से जुड़ा फोन नं० <strong>9122813351</strong> पर आप
            किसी भी प्रकार का दान दे सकते हैं।
          </p>
        </div>
      </motion.div>

      {/* Book Aarti Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="#booking"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2"
        >
          <span>🙏</span>
          <span>Book Your Aarti Online</span>
        </a>
      </motion.div>

      {/* Contact mini boxes */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.2, duration: 0.8, staggerChildren: 0.3 },
          },
        }}
      >
        <motion.div className="temple-card rounded-xl p-6 text-center">
          <MapPin className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
          <p className="text-white text-sm">कौनहारा घाट, हाजीपुर</p>
          <p className="text-orange-200 text-xs">वैशाली, Bihar</p>
        </motion.div>

        <motion.div className="temple-card rounded-xl p-6 text-center">
          <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
          <a
            href="tel:9931906442"
            className="text-orange-200 hover:text-white text-sm"
          >
            9931906442
          </a>
        </motion.div>

        <motion.div className="temple-card rounded-xl p-6 text-center">
          <Mail className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
          <a
            href="mailto:konharabadidurgamandir@gmail.com"
            className="text-orange-200 hover:text-white text-sm"
          >
            konharabadidurgamandir@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

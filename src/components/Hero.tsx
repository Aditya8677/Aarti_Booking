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

      {/* Temple name */}
      <motion.div
        className="relative z-10 text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 font-devanagari animate-pulse">
          श्री बड़ी दुर्गा मंदिर
        </h1>
        <h2 className="text-2xl md:text-3xl text-white font-cinzel mt-3">
          Shri Badi Durga Mandir
        </h2>
      </motion.div>

      {/* Flexbox for Committee (left) + QR Donation (right) */}
      <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl w-full">
        {/* Committee Members */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30 shadow-2xl flex flex-col justify-between min-h-[320px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-yellow-300 mb-3 font-devanagari text-center">
            समिति के सदस्य
          </h3>
          <ul className="text-white/80 space-y-2 font-devanagari text-sm leading-relaxed">
            <li>
              <span className="text-orange-300 font-semibold">(अध्यक्ष)</span>{" "}
              जयपत पासवान
            </li>
            <li>
              <span className="text-orange-300 font-semibold">(सचिव)</span> बॉबी
            </li>
            <li>
              <span className="text-orange-300 font-semibold">(कोषाध्यक्ष)</span>{" "}
              दीपक कुमार (दीपू), श्याम नारायण साह
            </li>
            <li>
              <span className="text-orange-300 font-semibold">(ट्रस्टी)</span>{" "}
              पंकज शर्मा, राजा, मनसुख पासवान, दीपक कुमार सिंह, सुनील कुमार
              शर्मा
            </li>
            <li>
              <span className="text-orange-300 font-semibold">(मुख्य संरक्षक)</span>{" "}
              राजकुमार श्रीवास्तव
            </li>
            <li>
              <span className="text-orange-300 font-semibold">(पूजा कार्यकारिणी)</span>{" "}
              रवि, सुक्खू, राजा, विक्की, राहुल, छोटू, सुजीत, किस्सू
            </li>
          </ul>
        </motion.div>

        {/* QR + Donate */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30 shadow-2xl flex flex-col justify-between min-h-[320px] text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div>
            <h3 className="text-lg font-semibold text-orange-200 mb-3">
              🙏 Donate for Temple
            </h3>
            <img
              src="/gallery/QRdonate.jpg"
              alt="Donate QR"
              className="mx-auto w-44 h-44 rounded-lg shadow-lg border border-yellow-400 divine-glow"
            />
            <p className="text-white/70 mt-2 text-sm">Scan the QR to Donate</p>
          </div>
          <p className="text-yellow-300 mt-4 text-sm font-medium leading-relaxed">
            मंदिर के बैंक खाते से जुड़ा फोन नं0{" "}
            <span className="font-bold">9122813351</span> पर आप किसी भी प्रकार का
            दान दे सकते है।
          </p>
        </motion.div>
      </div>

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

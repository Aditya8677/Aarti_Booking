import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen pt-20 px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 font-devanagari mb-4">
            संपर्क करें
          </h2>
          <h3 className="text-2xl md:text-3xl text-white font-cinzel mb-6">
            Contact Us
          </h3>
          <p className="text-white/80">
            Get in touch with us for inquiries, blessings, or temple-related
            information 🙏
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30 shadow-md text-center">
            <MapPin className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
            <p className="text-white text-sm">कौनहारा घाट, हाजीपुर</p>
            <p className="text-orange-200 text-sm">वैशाली, Bihar</p>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30 shadow-md text-center">
            <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
            <a
              href="tel:9931906442"
              className="text-orange-200 hover:text-white text-sm"
            >
              9931906442
            </a>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30 shadow-md text-center">
            <Mail className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
            <a
              href="mailto:konharabadidurgamandir@gmail.com"
              className="text-orange-200 hover:text-white text-sm"
            >
              konharabadidurgamandir@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email for general contact
    const emailSubject = 'General Inquiry -  श्री बड़ी दुर्गा मंदिर';
    const emailBody = `Dear Temple Administrator,

New message from website contact form:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Please respond to the devotee at the earliest convenience.

🙏 Website Contact Form`;
    
    const emailUrl = `mailto:adityaak8677@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(emailUrl);
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="min-h-screen pt-20 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 font-devanagari mb-4">
            संपर्क करें
          </h2>
          <h3 className="text-2xl md:text-3xl text-white font-cinzel mb-6">
            Contact Us
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h4 className="text-xl font-semibold text-orange-200 mb-6 font-devanagari">
                मंदिर की जानकारी
              </h4>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Address / पता</h5>
                    <p className="text-orange-200 font-devanagari">
                      कौनहारा घाट, हाजीपुर<br />
                      वैशाली, बिहार
                    </p>
                    <p className="text-white/70 text-sm">
                      Kaunhara Ghat, Hajipur<br />
                      Vaishali, Bihar, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Phone / फ़ोन</h5>
                    <a href="tel:9931906442" className="text-orange-200 hover:text-white transition-colors text-lg">
                      9931906442
                    </a>
                    <p className="text-white/70 text-sm">
                      For bookings and inquiries
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Email / ईमेल</h5>
                    <a href="mailto:adityaak8677@gmail.com" className="text-orange-200 hover:text-white transition-colors">
                      adityaak8677@gmail.com
                    </a>
                    <p className="text-white/70 text-sm">
                      General inquiries and support
                    </p>
                  </div>
                </div>

                {/* Temple Timings */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Temple Timings / समय</h5>
                    <div className="text-orange-200 space-y-1">
                      <p>Morning: 6:00 AM - 12:00 PM</p>
                      <p>Evening: 4:00 PM - 10:00 PM</p>
                    </div>
                    <p className="text-white/70 text-sm">
                      Daily aarti and prayers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-gradient-to-br from-green-600/20 to-green-500/30 backdrop-blur-md rounded-xl p-6 border border-green-400/30">
              <h5 className="text-white font-semibold mb-4">Quick Contact on WhatsApp</h5>
              <a
                href="https://wa.me/9931906442?text=नमस्ते! मैं श्री बाड़ी दुर्गा मंदिर के बारे में जानकारी चाहता हूं।"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <span>💬</span>
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <Send className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                <p className="text-white/80">We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <h4 className="text-xl font-semibold text-orange-200 mb-6 font-devanagari">
                  संदेश भेजें
                </h4>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Name / नाम *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email / ईमेल *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message / संदेश *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                      placeholder="Enter your message or inquiry"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message / भेजें</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

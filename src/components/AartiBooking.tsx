import React, { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, Check } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const AartiBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    timeSlot: "",
  });
  const [isBooked, setIsBooked] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Generate time slots from 6 AM to 10 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 6; i <= 21; i++) {
      const startTime = i <= 12 ? `${i}:00 AM` : `${i - 12}:00 PM`;
      const endTime =
        i < 12 ? `${i + 1}:00 AM` : i === 12 ? "1:00 PM" : `${i - 11}:00 PM`;
      const timeRange =
        i === 12 ? "12:00 PM - 1:00 PM" : `${startTime} - ${endTime}`;
      slots.push({
        value: timeRange,
        label: timeRange,
        period: i < 12 ? "Morning" : i < 17 ? "Afternoon" : "Evening",
      });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // ✅ WhatsApp Notification
      const whatsappMessage = `🙏 New Aarti Booking
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Date: ${formData.date}
Time: ${formData.timeSlot}

श्री बाड़ी दुर्गा मंदिर`;

      const whatsappUrl = `https://wa.me/9931906442?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");

      // ✅ EmailJS: Send to Admin
      emailjs
        .send(
          "service_clrf1s2", // Service ID
          "template_74obvif", // Admin Notification Template
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            date: formData.date,
            time: formData.timeSlot,
          },
          "Kesi-Dd4Q4Lkx2J-J" // Public Key
        )
        .then(() => {
          console.log("✅ Admin notified");

          // ✅ EmailJS: Auto-Reply to Devotee
          emailjs
            .send(
              "service_clrf1s2", // Service ID
              "template_6o2h4gk", // Devotee Confirmation Template
              {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                date: formData.date,
                time: formData.timeSlot,
              },
              "Kesi-Dd4Q4Lkx2J-J" // Public Key
            )
            .then(() => {
              console.log("✅ Confirmation sent to devotee");
              toast.success("✅ Booking Sent! Check your Email 📩");
            })
            .catch((error) =>
              console.error("❌ Error sending auto-reply:", error)
            );
        })
        .catch((error) => console.error("❌ Error sending admin mail:", error));

      setIsBooked(true);

      // Reset form after 5s
      setTimeout(() => {
        setIsBooked(false);
        setFormData({ name: "", phone: "", email: "", date: "", timeSlot: "" });
      }, 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  if (isBooked) {
    return (
      <section
        id="aarti-booking"
        className="min-h-screen pt-20 px-4 py-16 flex items-center justify-center"
      >
        <Toaster />
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-green-400/30 shadow-2xl">
            <Check className="w-20 h-20 text-green-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold text-green-400 mb-4 font-devanagari">
              आरती बुकिंग सफल!
            </h2>
            <h3 className="text-xl text-white mb-6 font-cinzel">
              Aarti Booking Confirmed!
            </h3>
            <p className="text-white/80 mb-6">
              Your aarti booking has been submitted successfully. We have sent
              the details via WhatsApp and email. You will receive a confirmation
              shortly.
            </p>
            <p className="text-orange-200 font-devanagari">
              माता दुर्गा की जय! 🙏
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="aarti-booking" className="min-h-screen pt-20 px-4 py-16">
      <Toaster />
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 font-devanagari mb-4">
            आरती बुकिंग
          </h2>
          <h3 className="text-2xl md:text-3xl text-white font-cinzel mb-6">
            Aarti Booking
          </h3>
          <p className="text-white/80">
            Book your slot for daily aarti and receive divine blessings
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <User className="w-5 h-5 mr-2 text-orange-300" />
                Full Name / पूरा नाम *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors ${
                  errors.name ? "border-red-400" : "border-white/20"
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <Phone className="w-5 h-5 mr-2 text-orange-300" />
                Phone Number / फ़ोन नंबर *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors ${
                  errors.phone ? "border-red-400" : "border-white/20"
                }`}
                placeholder="Enter 10-digit phone number"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <Mail className="w-5 h-5 mr-2 text-orange-300" />
                Email Address / ईमेल पता *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors ${
                  errors.email ? "border-red-400" : "border-white/20"
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <Calendar className="w-5 h-5 mr-2 text-orange-300" />
                Booking Date / तारीख *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={getTodayDate()}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors ${
                  errors.date ? "border-red-400" : "border-white/20"
                }`}
              />
              {errors.date && (
                <p className="text-red-400 text-sm mt-1">{errors.date}</p>
              )}
            </div>

            {/* Time Slot */}
            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <Clock className="w-5 h-5 mr-2 text-orange-300" />
                Time Slot / समय *
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors ${
                  errors.timeSlot ? "border-red-400" : "border-white/20"
                }`}
              >
                <option value="" className="bg-gray-800">
                  Select time slot
                </option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot.value} className="bg-gray-800">
                    {slot.label} ({slot.period})
                  </option>
                ))}
              </select>
              {errors.timeSlot && (
                <p className="text-red-400 text-sm mt-1">{errors.timeSlot}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>🙏</span>
              <span>Confirm Booking / बुकिंग करें</span>
            </button>
          </form>

          {/* Info */}
          <div className="mt-8 p-4 bg-orange-600/20 rounded-lg border border-orange-400/30">
            <h4 className="text-orange-200 font-semibold mb-2">
              Booking Information:
            </h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Booking confirmation will be sent via WhatsApp and email</li>
              <li>• Please arrive 10 minutes before your scheduled time</li>
              <li>• For any changes, contact us at 9931906442</li>
              <li>• आरती बुकिंग निःशुल्क है</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AartiBooking;

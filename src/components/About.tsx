import React from 'react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen pt-20 px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 font-devanagari mb-4">
            मां दुर्गा के बारे में
          </h2>
          <h3 className="text-2xl md:text-3xl text-white font-cinzel mb-6">
            About Maa Durga
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Maa Durga Description */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h4 className="text-xl md:text-2xl text-orange-200 font-devanagari mb-6 text-center">
              माता दुर्गा - शक्ति की देवी
            </h4>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Maa Durga, the divine mother and goddess of power, represents the protective and nurturing aspects of femininity. 
                She is the embodiment of Shakti - the cosmic energy that creates, preserves, and transforms the universe.
              </p>
              <p>
                Known by many names - Bhavani, Ambika, Chandika, and Devi - she is revered as the mother of the universe who 
                protects her devotees from evil forces and grants them strength, wisdom, and prosperity.
              </p>
              <p>
                Her worship brings courage to face life's challenges, removes obstacles from our path, and blesses devotees 
                with peace, prosperity, and spiritual growth.
              </p>
            </div>
          </div>

          {/* Temple History */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h4 className="text-xl md:text-2xl text-orange-200 font-devanagari mb-6 text-center">
              मंदिर का इतिहास
            </h4>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                श्री बड़ी दुर्गा मंदिर is a sacred shrine located at Kaunhara Ghat, Hajipur, in the historic district of Vaishali, Bihar. 
                This holy place has been a center of devotion and spiritual awakening for generations of devotees.
              </p>
              <p>
                Situated near the holy Ganges, this temple provides a serene environment for worship and meditation. 
                The divine presence of Maa Durga in this sacred space has blessed countless devotees with her grace and protection.
              </p>
              <p>
                Daily aarti and special pujas are performed with great devotion, creating an atmosphere filled with divine energy 
                and spiritual vibrations that touch the hearts of all who visit.
              </p>
            </div>
          </div>

          {/* Divine Qualities */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-md rounded-xl p-6 border border-orange-400/30">
              <h5 className="text-lg font-semibold text-yellow-300 mb-4 font-devanagari">
                माता के गुण
              </h5>
              <ul className="space-y-2 text-white/80">
                <li>🛡️ Protection from evil forces</li>
                <li>💪 Strength and courage</li>
                <li>🌟 Wisdom and knowledge</li>
                <li>🙏 Spiritual growth</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-md rounded-xl p-6 border border-orange-400/30">
              <h5 className="text-lg font-semibold text-yellow-300 mb-4">
                Blessings Received
              </h5>
              <ul className="space-y-2 text-white/80">
                <li>🕉️ Inner peace and harmony</li>
                <li>✨ Prosperity and success</li>
                <li>❤️ Family well-being</li>
                <li>🙌 Divine grace and mercy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
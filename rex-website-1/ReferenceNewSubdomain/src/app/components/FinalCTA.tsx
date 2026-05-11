import { Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/src/imports/1621BB87-9A3C-4A97-8B18-E6AAFDD33F28_1_105_c.jpeg"
          alt="Premium car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
          Book Your Detailing Today
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">Limited spots available this week — secure yours now</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            className="px-12 py-5 text-xl text-white rounded-lg hover:opacity-90 transition-opacity shadow-2xl font-bold"
            style={{ backgroundColor: '#c1283d' }}
          >
            Book Your Detailing Now
          </button>
          <a 
            href="tel:8138256513"
            className="px-12 py-5 text-xl rounded-lg hover:opacity-90 transition-opacity shadow-2xl flex items-center justify-center gap-3 bg-white font-bold"
            style={{ color: '#3f518e' }}
          >
            <Phone className="w-6 h-6" />
            (813) 825-6513
          </a>
        </div>

        <p className="text-white/70 text-lg">
          Serving Tampa, Wesley Chapel & Lutz
        </p>
      </div>
    </section>
  );
}
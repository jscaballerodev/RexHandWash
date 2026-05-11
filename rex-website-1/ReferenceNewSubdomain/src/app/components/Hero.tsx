import { Phone, Star, MapPin, Flame } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4" style={{ color: '#3f518e' }}>
              Premium Car Detailing in Tampa
            </h1>
            <p className="text-xl sm:text-2xl mb-8" style={{ color: '#f29522' }}><span className="font-bold">Make your car look showroom-new again</span>. Full detailing starting at $99.</p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#fcb658' }}></div>
                <span className="text-lg text-gray-800">Interior & exterior deep cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#fcb658' }}></div>
                <span className="text-lg text-gray-800">100% hand wash — no machines</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#fcb658' }}></div>
                <span className="text-lg text-gray-800">Trusted by luxury car owners</span>
              </li>
            </ul>

            {/* Location */}
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5" style={{ color: '#3f518e' }} />
              <span className="text-lg text-gray-700">New Tampa | Wesley Chapel | Lutz</span>
            </div>

            {/* Trust Signal */}
            <div className="mb-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#fcb658' }} />
                  ))}
                </div>
                <span className="text-lg" style={{ color: '#3f518e' }}>4.9 Google Rating</span>
              </div>
            </div>

            {/* Urgency */}
            <div className="flex items-center gap-2 mb-8">
              <Flame className="w-5 h-5" style={{ color: '#c1283d' }} />
              <span className="text-base" style={{ color: '#c1283d' }}>Limited spots available today. Same-day availability (when possible)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-4 text-lg text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: '#c1283d' }}
              >
                Book Your Detailing Today
              </button>
              <a 
                href="tel:8138256513"
                className="px-8 py-4 text-lg rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 border-2 font-bold"
                style={{ borderColor: '#3f518e', color: '#3f518e' }}
              >
                <Phone className="w-5 h-5 bg-[#f4060600]" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/imports/DC609417-E0AF-478F-BDF1-BA40CA943894_4_5005_c.jpeg"
                alt="Premium car detailing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
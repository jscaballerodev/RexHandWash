import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b" style={{ borderColor: '#eaeaea' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Increased size */}
          <div>
            <img 
              src="/src/imports/LOGO-COLOR_SOBRE_BLANCO.png" 
              alt="Rex Hand Wash" 
              className="h-16 sm:h-20"
            />
          </div>

          {/* CTA Button */}
          <a 
            href="tel:8138256513"
            className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{ backgroundColor: '#c1283d' }}
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline font-bold">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
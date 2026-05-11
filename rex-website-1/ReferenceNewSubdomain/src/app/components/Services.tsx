import { Sparkles, Home, Shield, Droplets } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Full Detailing',
    price: 'Starting at $99',
    description: 'Full interior & exterior restoration'
  },
  {
    icon: Home,
    title: 'Interior Detailing',
    price: 'Starting at $79',
    description: 'Deep clean all surfaces, stains removed'
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    price: 'Starting at $399',
    description: 'Long-lasting paint protection'
  },
  {
    icon: Droplets,
    title: 'Paint Correction',
    price: 'Starting at $299',
    description: 'Remove scratches, restore factory finish'
  }
];

export function Services() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3" style={{ color: '#3f518e' }}>
            Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="border-2 rounded-xl p-6 hover:shadow-xl transition-shadow"
                style={{ borderColor: '#eaeaea' }}
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#3f518e' }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2" style={{ color: '#3f518e' }}>
                  {service.title}
                </h3>
                <p className="text-lg mb-3" style={{ color: '#f29522' }}>
                  {service.price}
                </p>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
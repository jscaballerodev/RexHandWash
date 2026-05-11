import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Torres',
    vehicle: 'Tesla Model S',
    text: 'Rex Hand Wash did an incredible job on my Tesla. The attention to detail is unmatched.',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    vehicle: 'BMW M5',
    text: 'I only trust Rex with my BMW. They treat every car like their own. Highly recommend.',
    rating: 5
  },
  {
    name: 'David Johnson',
    vehicle: 'Mercedes S-Class',
    text: 'Best detailing in Tampa. The ceramic coating has kept my Mercedes flawless for months.',
    rating: 5
  }
];

export function SocialProof() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#eaeaea' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-10 h-10 fill-current" style={{ color: '#fcb658' }} />
            ))}
          </div>
          <p className="mb-2 text-[48px]" style={{ color: '#3f518e' }}>⭐ 4.9 Google Rating (200+ reviews)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#fcb658' }} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-[20px]">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BeforeAfter() {
  const showcaseImages = [
    '/src/imports/DC609417-E0AF-478F-BDF1-BA40CA943894_4_5005_c-1.jpeg',
    '/src/imports/1621BB87-9A3C-4A97-8B18-E6AAFDD33F28_1_105_c-2.jpeg',
    '/src/imports/96732A39-478C-41C2-8605-7474F85C7E42_1_102_o-1.jpeg',
    '/src/imports/93FB09AC-9DB4-446D-BF44-D31981A568CB_4_5005_c.jpeg'
  ];

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#eaeaea' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#3f518e' }}>Real results from real clients</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {showcaseImages.map((image, index) => (
            <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img
                src={image}
                alt={`Premium car detailing result ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
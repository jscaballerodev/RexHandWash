import { Droplets, Flame, Home, MapPin, Phone, Shield, Sparkles, Star } from "lucide-react";

const phoneHref = "tel:8138256513";

const services = [
  {
    icon: Sparkles,
    title: "Full Detailing",
    price: "Starting at $99",
    description: "Complete interior & exterior restoration for a like-new finish",
  },
  {
    icon: Home,
    title: "Interior Detailing",
    price: "Starting at $79",
    description: "Deep cleaning for seats, carpets, and all interior surfaces",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    price: "Starting at $399",
    description: "Long-lasting protection that keeps your car glossy and protected",
  },
  {
    icon: Droplets,
    title: "Paint Correction",
    price: "Starting at $299",
    description: "Remove scratches, swirl marks, and restore your car's original shine",
  },
];

const testimonials = [
  {
    name: "Michael Torres",
    vehicle: "Tesla Model S",
    text: "Rex Hand Wash did an incredible job on my Tesla. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    vehicle: "BMW M5",
    text: "I only trust Rex with my BMW. They treat every car like their own. Highly recommend.",
    rating: 5,
  },
  {
    name: "David Johnson",
    vehicle: "Mercedes S-Class",
    text: "Best detailing in Tampa. The ceramic coating has kept my Mercedes flawless for months.",
    rating: 5,
  },
];

function trackHomeEvent(event: string, cta: string) {
  const w = window as Window & { dataLayer?: Array<Record<string, string>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, cta, page: "/home" });
}

export function HomeCampaignPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <header className="bg-white border-b" style={{ borderColor: "#eaeaea" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <a href="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rex-blue rounded-md">
              <img src="/logo.svg" alt="Rex Hand Wash" className="h-16 sm:h-20" width={240} height={80} fetchPriority="high" />
            </a>

            <a
              href={phoneHref}
              onClick={() => trackHomeEvent("home_call_click", "header_call_now")}
              className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rex-red"
              style={{ backgroundColor: "#c1283d" }}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline font-bold">Call Now</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-white" id="home-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-balance" style={{ color: "#3f518e" }}>
                  Premium Car Detailing in Tampa
                </h1>
                <p className="text-xl sm:text-2xl mb-8" style={{ color: "#f29522" }}>
                  <span className="font-bold">Make your car look showroom-new again</span>. Full detailing starting at $99.
                </p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#fcb658" }}></div>
                    <span className="text-lg text-gray-800">Interior & exterior deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#fcb658" }}></div>
                    <span className="text-lg text-gray-800">100% hand wash - no machines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#fcb658" }}></div>
                    <span className="text-lg text-gray-800">Trusted by luxury car owners</span>
                  </li>
                </ul>

                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5" style={{ color: "#3f518e" }} aria-hidden="true" />
                  <span className="text-lg text-gray-700">New Tampa | Wesley Chapel | Lutz</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1" aria-label="4.9 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#fcb658" }} aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-lg" style={{ color: "#3f518e" }}>
                      4.9 Google Rating
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-8">
                  <Flame className="w-5 h-5" style={{ color: "#c1283d" }} aria-hidden="true" />
                  <span className="text-base" style={{ color: "#c1283d" }}>
                    Limited spots available today. Same-day availability (when possible)
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={phoneHref}
                    onClick={() => trackHomeEvent("home_book_click", "hero_book")}
                    className="px-8 py-4 text-lg text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg text-center font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rex-red"
                    style={{ backgroundColor: "#c1283d" }}
                  >
                    Book Your Detailing Today
                  </a>
                  <a
                    href={phoneHref}
                    onClick={() => trackHomeEvent("home_call_click", "hero_call")}
                    className="px-8 py-4 text-lg rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 border-2 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rex-blue"
                    style={{ borderColor: "#3f518e", color: "#3f518e" }}
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/premium_package2.jpeg"
                    alt="Premium car detailing"
                    className="w-full h-full object-cover"
                    width={1200}
                    height={900}
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ backgroundColor: "#eaeaea" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-balance" style={{ color: "#3f518e" }}>
                Real Results from Real Clients
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
              {[
                "/images/gallery.jpeg",
                "/images/standard_package2.jpeg",
                "/images/deluxe_package.jpeg",
                "/images/premium_package2.jpeg",
              ].map((image, index) => (
                <div key={image} className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={image}
                    alt={`Premium car detailing result ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    width={1000}
                    height={750}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-balance" style={{ color: "#3f518e" }}>
                Our Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="border-2 rounded-xl p-6 hover:shadow-xl transition-shadow" style={{ borderColor: "#eaeaea" }}>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#3f518e" }}>
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl mb-2" style={{ color: "#3f518e" }}>
                      {service.title}
                    </h3>
                    <p className="text-lg mb-3" style={{ color: "#f29522" }}>
                      {service.price}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ backgroundColor: "#eaeaea" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-current" style={{ color: "#fcb658" }} aria-hidden="true" />
                ))}
              </div>
              <p className="mb-2 text-3xl sm:text-4xl lg:text-[48px] leading-tight text-balance" style={{ color: "#3f518e" }}>
                4.9 Google Rating (200+ Reviews)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#fcb658" }} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div>
                    <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 lg:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/gallery.jpeg"
              alt="Premium car detailing"
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance">Book Your Detailing Today</h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Limited spots available this week - secure yours now
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={phoneHref}
                onClick={() => trackHomeEvent("home_book_click", "final_book")}
                className="px-12 py-5 text-xl text-white rounded-lg hover:opacity-90 transition-opacity shadow-2xl font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rex-red"
                style={{ backgroundColor: "#c1283d" }}
              >
                Book Your Detailing Now
              </a>
              <a
                href={phoneHref}
                onClick={() => trackHomeEvent("home_call_click", "final_call")}
                className="px-12 py-5 text-xl rounded-lg hover:opacity-90 transition-opacity shadow-2xl flex items-center justify-center gap-3 bg-white font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ color: "#3f518e" }}
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                (813) 825-6513
              </a>
            </div>

            <p className="text-white/70 text-lg">Serving Tampa, Wesley Chapel & Lutz</p>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20" id="protection">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-balance" style={{ color: "#3f518e" }}>
                Ceramic Protection Packages
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  image: "/images/3yearprotection.jpeg",
                  title: "2 Year Protection",
                  price: "Starting at $599",
                },
                {
                  image: "/images/5yearprotection.jpeg",
                  title: "5 Year Protection",
                  price: "Starting at $899",
                },
              ].map((pkg) => (
                <article key={pkg.title} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-56 object-cover"
                    width={1200}
                    height={700}
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl mb-2" style={{ color: "#3f518e" }}>
                      {pkg.title}
                    </h3>
                    <p className="text-lg" style={{ color: "#f29522" }}>
                      {pkg.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6" style={{ backgroundColor: "#3f518e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/80 text-sm">© 2026 Rex Hand Wash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

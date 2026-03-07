import { useState, useEffect } from 'react';
import primaxLogo from "/assets/af5a8fc9c64c0440dad680de29cbde577ff765c9.png";
import adeayoLogo from "/assets/6cc1ad7b7df17ad8b72f927373f24a2653494634.png";
import fetesLight from "/assets/02727bfe17ced13dc5028d6f270d3eec43ea5c13.png";
import lordsBlack from "/assets/d998f756ade35de3fb24f728515fbff45bad6fc4.png";
import anchorBlue from "/assets/c55bcfa0faed5c2bccc9caa1617a5f49b358b142.png";
import lamaysBlack from "/assets/c327827d1376e3582ffaebb8c81398f851840dbc.png";
import fefesCard from "/assets/017a226ee4f731f8ed5e8b9634438d7070ea1bbb.png";
import elejaLogoDark from "/assets/da2fbe02536606e39395841fa852863673516fe2.png";

const slides = [
  {
    image: primaxLogo,
    title: "Primax Bar & Grill",
    subtitle: "Restaurant Branding & Menu Design",
    color: "from-red-900/40 to-orange-900/40"
  },
  {
    image: adeayoLogo,
    title: "Clothings by Adeayo",
    subtitle: "Fashion Brand Identity",
    color: "from-purple-900/40 to-pink-900/40"
  },
  {
    image: fetesLight,
    title: "FeFes",
    subtitle: "Modern Playful Logo Design",
    color: "from-pink-900/40 to-rose-900/40"
  },
  {
    image: fefesCard,
    title: "FeFes Kitchen",
    subtitle: "Restaurant Business Cards",
    color: "from-pink-900/40 to-purple-900/40"
  },
  {
    image: lordsBlack,
    title: "Lord's Heritage Care",
    subtitle: "Childcare Services Merchandise",
    color: "from-blue-900/40 to-indigo-900/40"
  },
  {
    image: anchorBlue,
    title: "Anchor Freight Solutions",
    subtitle: "Logistics Brand Identity",
    color: "from-blue-900/40 to-cyan-900/40"
  },
  {
    image: lamaysBlack,
    title: "LaMay's Fashion Hub",
    subtitle: "Luxury Fashion Branding",
    color: "from-purple-900/40 to-amber-900/40"
  },
  {
    image: elejaLogoDark,
    title: "Eleja Exchange",
    subtitle: "Digital Asset Exchange Branding",
    color: "from-blue-900/40 to-purple-900/40"
  }
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}></div>
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <div className="max-w-xs sm:max-w-md md:max-w-2xl w-full">
              <div className="bg-[#1a1a1a]/60 backdrop-blur-sm p-6 md:p-10 rounded-xl border border-gray-700/50">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px] object-contain drop-shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-16 md:bottom-20 left-0 right-0 text-center px-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">{slide.title}</h3>
            <p className="text-sm md:text-lg text-gray-200">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-6 md:w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all z-20"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all z-20"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
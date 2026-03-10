import { useTheme } from "@/contexts/ThemeContext";
import wendeesPastries from "/assets/c2d1cc85a4cd9faf2d9351a1d013e7b0224766e2.png";
import wendeesBlue from "/assets/89543834dc9fac8d6c3c7e5d1fd7e565785a5dad.png";
import wendeesBlack from "/assets/610c1830402e674b95c57a504d1e7d35d4193879.png";

export function WendeesBakeryPortfolio() {
  const { theme } = useTheme();
  return (
    <section className="py-20 px-[10%] bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          Wendees Bakery
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Sweet and delightful logo designs for a boutique bakery specializing in pastries
        </p>
        
        {/* Logo Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all bg-[#0a0a0a] p-8">
            <img 
              src={wendeesPastries} 
              alt="Wendees Bakery Pastries - Turquoise Logo" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all bg-[#0a0a0a] p-8">
            <img 
              src={wendeesBlue} 
              alt="Wendees Bakery - Blue Logo Variant" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all bg-[#0a0a0a] p-8">
            <img 
              src={wendeesBlack} 
              alt="Wendees Bakery - Blue with Black Accent Logo" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Logo Variations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Pastries Edition</h4>
              <p className="text-gray-400">Turquoise and white color scheme with playful pastry illustrations, perfect for stickers and packaging</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Classic Blue</h4>
              <p className="text-gray-400">Vibrant blue badge design emphasizing the bakery's established presence since 2022</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Bold Contrast</h4>
              <p className="text-gray-400">Blue and black variant adding sophistication and visual impact for signage and promotional materials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
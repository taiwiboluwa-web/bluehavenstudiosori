import { useTheme } from "@/contexts/ThemeContext";
import adeayoLogo from "/assets/6cc1ad7b7df17ad8b72f927373f24a2653494634.png";
import adeayoBagPurple from "/assets/820b227adfaf7b78bcca76341a23b32b611d42e5.png";
import adeayoBagWhite from "/assets/9f267c36cd25cea3749b24a18058510afe3139d7.png";

export function AdeayoPortfolio() {
  const { theme } = useTheme();
  return (
    <section className="py-20 px-[10%] bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          Clothings by Adeayo
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Elegant fashion brand identity with flowing artistic elements
        </p>
        
        {/* Logo Showcase */}
        <div className="flex justify-center mb-12">
          <div className="rounded-xl border border-gray-800 overflow-hidden max-w-2xl w-full">
            <img 
              src={adeayoLogo} 
              alt="Clothings by Adeayo Logo" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Shopping Bag Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={adeayoBagPurple} 
              alt="Adeayo - Purple Shopping Bag Mockup" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={adeayoBagWhite} 
              alt="Adeayo - White Shopping Bag Mockup" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Flowing Design</h4>
              <p className="text-gray-400">Graceful, flowing lines forming the letter "A" symbolizing elegance and movement in fashion</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Fashion Focus</h4>
              <p className="text-gray-400">Sophisticated branding perfect for a clothing line emphasizing style and creativity</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Purple Elegance</h4>
              <p className="text-gray-400">Soft purple background creating a premium, luxurious feel for the fashion brand</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Bold Typography</h4>
              <p className="text-gray-400">Strong, confident lettering balanced with artistic flourishes for memorable impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
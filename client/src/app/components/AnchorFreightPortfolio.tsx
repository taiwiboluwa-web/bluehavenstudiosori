import { useTheme } from "@/contexts/ThemeContext";
import anchorBlack from "/assets/a5ec738fe9697b8a651fd91f22119de99cb39e53.png";
import anchorWhite from "/assets/65a53d85adafcde6e82f00e9261944bb2c6356cc.png";
import anchorBlue from "/assets/c55bcfa0faed5c2bccc9caa1617a5f49b358b142.png";

export function AnchorFreightPortfolio() {
  const { theme } = useTheme();
  return (
    <section className="py-20 px-[10%] bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          Anchor Freight Solutions Ltd
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Professional logistics brand identity with versatile color applications
        </p>
        
        {/* Notebook Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={anchorBlack} 
              alt="Anchor Freight Solutions - Black Notebook Mockup" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={anchorWhite} 
              alt="Anchor Freight Solutions - White Notebook Mockup" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={anchorBlue} 
              alt="Anchor Freight Solutions - Blue Notebook Mockup" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Black Edition</h4>
              <p className="text-gray-400">Premium white logo on black background for executive and formal business applications</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">White Edition</h4>
              <p className="text-gray-400">Blue logo on clean white background showcasing versatility and professional clarity</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Blue Edition</h4>
              <p className="text-gray-400">White logo on bold blue creating strong brand presence and recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
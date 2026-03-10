import { useTheme } from "@/contexts/ThemeContext";
import lamaysBlack from "/assets/c327827d1376e3582ffaebb8c81398f851840dbc.png";
import lamaysWhite from "/assets/f3ce03bd4beac21c2978bf6f8542f762423e9b36.png";

export function LaMaysPortfolio() {
  const { theme } = useTheme();
  return (
    <section className="py-20 px-[10%] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          LaMay's Fashion Hub
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Luxurious fashion brand with purple and gold elegance
        </p>
        
        {/* Shopping Bag Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={lamaysBlack} 
              alt="LaMay's Fashion Hub - Black Shopping Bag" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={lamaysWhite} 
              alt="LaMay's Fashion Hub - White Shopping Bag" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Monogram Design</h4>
              <p className="text-gray-400">Stylized "LM" monogram with flowing dress silhouette representing high fashion</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Luxury Colors</h4>
              <p className="text-gray-400">Purple and gold combination creating a premium, sophisticated brand presence</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Golden Accents</h4>
              <p className="text-gray-400">Gold ring frame and typography elevating the brand to luxury fashion status</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
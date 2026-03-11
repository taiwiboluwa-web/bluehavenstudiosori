import onaCoaster from "/assets/bc89b70e6e1d330be214c857d2c6898a12487874.png";
import onaNotebook from "/assets/a870db28d502ad17b4b4974a4ccf93949d4dd468.png";
import onaRoundCoaster from "/assets/e8016a92293874beed4c036fcd5610e927ed5248.png";

export function OnaKanOwojaPortfolio() {
  return (
    <section className="py-20 px-[10%] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          Ona Kan Owoja by Tosin
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Your all round shopper for everything - Brand identity and merchandise mockups
        </p>
        
        {/* Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={onaCoaster} 
              alt="Ona Kan Owoja - Square Coaster Mockup" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={onaNotebook} 
              alt="Ona Kan Owoja - Notebook Mockup" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={onaRoundCoaster} 
              alt="Ona Kan Owoja - Rounded Square Coaster Mockup" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Unique Logo Design</h4>
              <p className="text-gray-400">Creative "e" shaped road design incorporating shopping, home, and lifestyle icons representing comprehensive service</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Color Palette</h4>
              <p className="text-gray-400">Navy blue and olive green combination creating a trustworthy and earthy brand feel</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Merchandise Applications</h4>
              <p className="text-gray-400">Logo applied to coasters and notebooks showing versatility across promotional materials</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Service Identity</h4>
              <p className="text-gray-400">Brand positioning as an all-round shopping and errand service with clear visual storytelling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
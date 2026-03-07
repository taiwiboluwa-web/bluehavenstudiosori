import souvenirsBlack from "/assets/ec005afe1a9deeefcb41c6217811b3b50d2c9f64.png";
import souvenirsWhite from "/assets/d8985e21a43878d8dcaba7ff78421dc080247cd2.png";

export function SouvenirsPortfolio() {
  return (
    <section className="py-20 px-[10%] bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          Souvenirs by Delinz
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Gift shop brand identity with elegant teal and green color palette
        </p>
        
        {/* Shopping Bag Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={souvenirsBlack} 
              alt="Souvenirs by Delinz - Black Shopping Bag" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={souvenirsWhite} 
              alt="Souvenirs by Delinz - White Shopping Bag" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Gift Symbolism</h4>
              <p className="text-gray-400">Elegant gift box icon with ribbon bow representing the joy of giving and receiving</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Teal & Green Palette</h4>
              <p className="text-gray-400">Sophisticated color combination creating a fresh, upscale boutique aesthetic</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Dual Applications</h4>
              <p className="text-gray-400">Versatile design working on both dark and light backgrounds for various merchandising needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
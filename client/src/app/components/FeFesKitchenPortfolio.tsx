import fefesCard from "/assets/017a226ee4f731f8ed5e8b9634438d7070ea1bbb.png";
import fefesKitchenWhite from "/assets/585272a9929a5067cd30cd130eafa10c21bb074f.png";
import fefesKitchenBlack from "/assets/b499ca873c50c007f01c5f808c516b6352303b01.png";

export function FeFesKitchenPortfolio() {
  return (
    <section className="py-20 px-[10%] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          FeFes Kitchen
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Vibrant restaurant branding with pink and white color scheme
        </p>
        
        {/* Logo Variations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all bg-[#1a1a1a] p-12">
            <img 
              src={fefesKitchenWhite} 
              alt="FeFes Kitchen Logo - Light" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all bg-black p-12">
            <img 
              src={fefesKitchenBlack} 
              alt="FeFes Kitchen Logo - Dark" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Business Card Mockup */}
        <div className="flex justify-center mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-pink-500 max-w-3xl transition-all">
            <img 
              src={fefesCard} 
              alt="FeFes Kitchen Business Card" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Chef Hat Icon</h4>
              <p className="text-gray-400">Playful chef hat with fork and spoon symbolizing culinary expertise and fun dining</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Script Typography</h4>
              <p className="text-gray-400">Elegant flowing script for "FeFes" creating a friendly, approachable brand personality</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Versatile Design</h4>
              <p className="text-gray-400">Logo works beautifully on both light and dark backgrounds for maximum flexibility</p>
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] p-8 rounded-lg mt-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed italic">
              "FeFes Kitchen brings joy to every meal with a vibrant brand identity that celebrates the art of cooking. The playful design and energetic pink palette reflect a restaurant where food meets fun, creating memorable dining experiences for every guest."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
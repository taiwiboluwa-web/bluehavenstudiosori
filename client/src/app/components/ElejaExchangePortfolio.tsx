import elejaCard from "/assets/b08ecef993ea1c1fe71b8a9a1f1416db91bd60e8.png";
import elejaGiftCard from "/assets/758f15d90828c8cc6936b5fa6e442a28751c045f.png";
import elejaNotebook from "/assets/595b329d3858725a4cf74ab46d2b454e75302711.png";
const emmaxLogo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390689289/Cm2CCi2zaFHN3L7TYPGf98/62d6e3e84499838198e4a3ec996c934c0893ad3d_31a78d2b.png";
import elejaLogoDark from "/assets/da2fbe02536606e39395841fa852863673516fe2.png";
import elejaLogoLight from "/assets/67b48e005d67154416435c447509d0a42c240ac2.png";

export function ElejaExchangePortfolio() {
  return (
    <section className="py-20 px-[10%] bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          Eleja Exchange
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Digital asset exchange branding with vibrant purple and cyan gradient
        </p>
        
        {/* Logo Variations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-purple-500 transition-all bg-black p-12">
            <img 
              src={elejaLogoDark} 
              alt="Eleja Exchange Logo - Dark" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-cyan-500 transition-all bg-[#0a0a0a] p-12">
            <img 
              src={elejaLogoLight} 
              alt="Eleja Exchange Logo - Light" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* EMMAX Logo Showcase */}
        <div className="flex justify-center mb-12">
          <div className="bg-black rounded-xl border border-gray-800 hover:border-blue-500 p-12 max-w-2xl group transition-all">
            <img 
              src={emmaxLogo} 
              alt="EMMAX - Dragon Logo" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Business Card & Stationery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={elejaCard} 
              alt="Eleja Exchange Business Card" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={elejaGiftCard} 
              alt="Eleja Exchange Gift Card" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={elejaNotebook} 
              alt="Eleja Exchange Notebook" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Digital Symbol</h4>
              <p className="text-gray-400">Abstract "X" with circuit patterns representing digital exchange and connectivity</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Cyber Aesthetics</h4>
              <p className="text-gray-400">Purple-to-cyan gradient with tech patterns creating modern fintech brand identity</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">EMMAX Integration</h4>
              <p className="text-gray-400">Powerful dragon logo symbolizing strength and dominance in digital markets</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Complete System</h4>
              <p className="text-gray-400">Full brand application across business cards, gift cards, and stationery</p>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] p-8 rounded-lg border border-gray-800">
            <p className="text-gray-300 leading-relaxed italic">
              "Eleja Exchange represents the future of digital asset trading with a bold, tech-forward brand identity. The vibrant gradients and circuit-inspired patterns convey innovation and security, while the EMMAX dragon logo symbolizes power and trust in the cryptocurrency ecosystem."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
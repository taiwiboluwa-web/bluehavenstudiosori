import lamaysScentsLogo from "/assets/eca5d1b1aae735acb6bdea0539176c17f20e3de2.png";

export function LaMayScentsPortfolio() {
  return (
    <section className="py-20 px-[10%] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          La May's Scents
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Smell good, Spend smart - Luxury fragrance brand identity
        </p>
        
        {/* Logo Showcase */}
        <div className="flex justify-center mb-12">
          <div className="rounded-xl border border-gray-800 overflow-hidden max-w-2xl w-full bg-[#1a1a1a] p-12">
            <img 
              src={lamaysScentsLogo} 
              alt="La May's Scents Logo" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Feminine Elegance</h4>
              <p className="text-gray-400">Stylized woman's silhouette with flowing hair representing beauty and sophistication</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Perfume Symbolism</h4>
              <p className="text-gray-400">Spray bottle integrated into circular design symbolizing luxury fragrance experience</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Bold Red Palette</h4>
              <p className="text-gray-400">Deep crimson color creating passionate, memorable brand presence in cosmetics market</p>
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] p-8 rounded-lg mt-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed italic">
              "La May's Scents embodies the perfect balance between luxury and affordability. With the tagline 'Smell good, Spend smart,' this brand brings premium fragrances to everyone. The elegant design featuring a woman's profile and perfume spray represents confidence, beauty, and the transformative power of scent."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
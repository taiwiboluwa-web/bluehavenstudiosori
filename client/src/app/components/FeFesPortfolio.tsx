import fetesLight from "/assets/02727bfe17ced13dc5028d6f270d3eec43ea5c13.png";

export function FeFesPortfolio() {
  return (
    <section className="py-20 px-[10%] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          FeFes
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Modern, playful logo design with vibrant pink color palette
        </p>
        
        {/* Logo Showcase */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1a1a1a] p-12 rounded-xl border border-gray-800 max-w-3xl w-full">
            <img 
              src={fetesLight} 
              alt="FeFes Logo - Pink and White Variations" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Bold Typography</h4>
              <p className="text-gray-400">Custom lettering with playful curves and modern style creating a distinctive brand presence</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Color Variations</h4>
              <p className="text-gray-400">Pink and white color combinations designed for versatility across different backgrounds</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">3D Effect</h4>
              <p className="text-gray-400">Layered design creating depth and dimension for eye-catching visual impact</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Modern Appeal</h4>
              <p className="text-gray-400">Contemporary aesthetic perfect for youth-oriented brands and lifestyle products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
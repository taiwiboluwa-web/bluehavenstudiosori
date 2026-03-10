import { useTheme } from "@/contexts/ThemeContext";
import dazzledFlat from "/assets/df042d4e65ba2df64c7d343976873ac3b4d5c6ef.png";
const dazzled3D = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390689289/Cm2CCi2zaFHN3L7TYPGf98/7da56af8fcbc2666fec87684b9b64e286c3cb4c1_39f2f9d7.png";

export function DazzledinEssencePortfolio() {
  const { theme } = useTheme();
  return (
    <section className="py-20 px-[10%] bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase text-white">
          Dazzled in Essence
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Elegance Reimagined - Luxury brand with gold and purple sophistication
        </p>
        
        {/* Logo Variations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group overflow-hidden rounded-lg shadow-2xl transition-all hover:shadow-[0_20px_60px_rgba(212,175,55,0.4)] bg-gradient-to-br from-gray-800 to-gray-900 p-12">
            <img 
              src={dazzledFlat} 
              alt="Dazzled in Essence - Flat Logo" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg shadow-2xl transition-all hover:shadow-[0_20px_60px_rgba(212,175,55,0.4)] bg-gradient-to-br from-gray-300 to-gray-400 p-12">
            <img 
              src={dazzled3D} 
              alt="Dazzled in Essence - 3D Logo" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Essence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
            <div className="bg-white/5 p-6 rounded-lg border border-gold/20">
              <h4 className="font-bold text-lg mb-2 text-gold">Royal Flourish</h4>
              <p className="text-gray-300">Ornate golden fleur-de-lis symbolizing luxury, heritage, and timeless elegance</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-purple-500/20">
              <h4 className="font-bold text-lg mb-2 text-purple-400">Purple Majesty</h4>
              <p className="text-gray-300">Deep purple accents representing royalty, sophistication, and premium quality</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-gold/20">
              <h4 className="font-bold text-lg mb-2 text-gold">3D Dimension</h4>
              <p className="text-gray-300">Dimensional rendering showcasing depth and premium craftsmanship of the brand</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/20 to-gold/10 p-8 rounded-lg border border-gold/30">
            <p className="text-gray-200 leading-relaxed italic text-lg">
              "Dazzled in Essence represents the pinnacle of luxury branding. With the tagline 'Elegance Reimagined,' this brand combines regal purple with lustrous gold to create an identity that speaks to discerning clients seeking timeless sophistication. Every detail, from the ornate flourishes to the premium color palette, embodies excellence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

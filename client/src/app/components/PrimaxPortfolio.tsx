import primaxLogo from "/assets/af5a8fc9c64c0440dad680de29cbde577ff765c9.png";
import primaxMenu from "/assets/5aa8037a104ce92844a54cd99f3d33c3d9bfc20e.png";
import primaxSpecials from "/assets/ba1dc4551f9beaa8e0cddd0c7775cdec658d7c79.png";
import primaxBurger from "/assets/e22aa27e8e873b48b920fba719d2fb503b006462.png";
import primaxPromo from "/assets/ed5bf05495ff6aa6b9e646510803e15a910e5c8d.png";
import primaxContainerBlack from "/assets/6535f664e82f7f01521950f5924f8b3caba986bf.png";
import primaxNoodleBoxBlack from "/assets/86afd375155a99031e43a27f00ffbd8db6f99b27.png";
import primaxRetailBag from "/assets/9518e883b1496aa7955ba97c652d489c6264ec2a.png";
import primaxChipsBag from "/assets/1ba578e9b423cf5b58e02c4a6e78c662ea9275a2.png";
import primaxContainerWhite from "/assets/52fe28c79fcdcf58c9138519d5e46fcf4f8e8fbb.png";
import primaxNoodleBoxWhite from "/assets/d190f2dd48e78600952a5cf3f83e61cf5e5d1090.png";

export function PrimaxPortfolio() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-[10%] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6 uppercase text-white">
          Primax Bar & Grill
        </h2>
        <p className="text-center text-gray-400 mb-8 md:mb-12 text-sm md:text-lg px-2">
          Brand identity and promotional materials for a vibrant bar and grill restaurant
        </p>
        
        {/* Logo Showcase */}
        <div className="mb-10 md:mb-16 flex justify-center">
          <div className="bg-[#1a1a1a] p-6 md:p-12 rounded-lg md:rounded-xl border border-gray-800 max-w-2xl w-full">
            <img 
              src={primaxLogo} 
              alt="Primax Logo" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Promotional Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={primaxMenu} 
              alt="Primax Menu - Hot Favorites & Pickup Options" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={primaxSpecials} 
              alt="Primax Special Menu - Signature Dishes" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={primaxBurger} 
              alt="Primax Burger Promotion - Up to 35% Off" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-all">
            <img 
              src={primaxPromo} 
              alt="Primax Always Open - 25% Discount Offer" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="mt-8 md:mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Brand Deliverables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Logo Design</h4>
              <p className="text-sm md:text-base text-gray-400">Custom logo featuring cooking utensils and flame symbolizing heat and culinary excellence</p>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Menu Design</h4>
              <p className="text-sm md:text-base text-gray-400">Eye-catching menu layouts showcasing hot favorites and pickup options</p>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Promotional Flyers</h4>
              <p className="text-sm md:text-base text-gray-400">Special offers and discount campaigns with appetizing food photography</p>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Brand Identity</h4>
              <p className="text-sm md:text-base text-gray-400">Cohesive black and gold color scheme creating a bold, premium feel</p>
            </div>
          </div>
        </div>

        {/* Branded Packaging Section */}
        <div className="mt-16 md:mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 uppercase text-white">
            Branded Packaging
          </h3>
          <p className="text-center text-gray-400 mb-8 md:mb-12 text-sm md:text-lg px-2">
            Complete packaging solutions designed for takeout and retail distribution
          </p>

          {/* Packaging Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-amber-500 transition-all bg-[#1a1a1a]">
              <img 
                src={primaxContainerBlack} 
                alt="Primax Black Food Container - 2026 Compliant Design" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-amber-500 transition-all bg-[#1a1a1a]">
              <img 
                src={primaxNoodleBoxBlack} 
                alt="Primax Black Noodle Box - 2026 Compliant" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-amber-500 transition-all bg-[#1a1a1a]">
              <img 
                src={primaxRetailBag} 
                alt="Primax Premium Retail Bag Design" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-amber-500 transition-all bg-[#1a1a1a]">
              <img 
                src={primaxChipsBag} 
                alt="Primax Kettle Cooked Chips - Smoky Mesquite BBQ" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-amber-500 transition-all bg-[#1a1a1a]">
              <img 
                src={primaxContainerWhite} 
                alt="Primax White Food Container - 2026 Compliant Design" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="group overflow-hidden rounded-lg border border-gray-800 hover:border-amber-500 transition-all bg-[#1a1a1a]">
              <img 
                src={primaxNoodleBoxWhite} 
                alt="Primax White Noodle Box - 2026 Compliant" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Packaging Description */}
          <div className="mt-8 md:mt-12 text-center max-w-4xl mx-auto">
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Packaging Deliverables</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
              <div>
                <h5 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Food Containers</h5>
                <p className="text-sm md:text-base text-gray-400">Recyclable kraft paper containers with grease-proof lining in black and white variants</p>
              </div>
              <div>
                <h5 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Noodle Boxes</h5>
                <p className="text-sm md:text-base text-gray-400">2026 compliant leak-proof origami fold design with PFAS-free coating</p>
              </div>
              <div>
                <h5 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Retail Bags</h5>
                <p className="text-sm md:text-base text-gray-400">Premium matte black bags with twisted handles and glossy UV print</p>
              </div>
              <div>
                <h5 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Snack Packaging</h5>
                <p className="text-sm md:text-base text-gray-400">Resealable chip bags with nitrogen flush for freshness and multi-layer film barrier</p>
              </div>
              <div>
                <h5 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Sustainability</h5>
                <p className="text-sm md:text-base text-gray-400">All packaging materials are recyclable and meet 2026 environmental compliance standards</p>
              </div>
              <div>
                <h5 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Brand Consistency</h5>
                <p className="text-sm md:text-base text-gray-400">Unified black & gold branding across all packaging touchpoints</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
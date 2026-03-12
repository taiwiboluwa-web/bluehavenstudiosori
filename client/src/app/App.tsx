import { CreativeStudioLogo } from "@/app/components/CreativeStudioLogo";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { PrimaxPortfolio } from "@/app/components/PrimaxPortfolio";
import { WendeesBakeryPortfolio } from "@/app/components/WendeesBakeryPortfolio";
import { FeFesPortfolio } from "@/app/components/FeFesPortfolio";
import { AdeayoPortfolio } from "@/app/components/AdeayoPortfolio";
import { OnaKanOwojaPortfolio } from "@/app/components/OnaKanOwojaPortfolio";
import { AnchorFreightPortfolio } from "@/app/components/AnchorFreightPortfolio";
import { LordsHeritagePortfolio } from "@/app/components/LordsHeritagePortfolio";
import { SouvenirsPortfolio } from "@/app/components/SouvenirsPortfolio";
import { LaMaysPortfolio } from "@/app/components/LaMaysPortfolio";
import { FeFesKitchenPortfolio } from "@/app/components/FeFesKitchenPortfolio";
import { FeFesPackagingPortfolio } from "@/app/components/FeFesPackagingPortfolio";
import { ElejaExchangePortfolio } from "@/app/components/ElejaExchangePortfolio";
import { LaMayScentsPortfolio } from "@/app/components/LaMayScentsPortfolio";
import { DazzledinEssencePortfolio } from "@/app/components/DazzledinEssencePortfolio";
import { HeroSlideshow } from "@/app/components/HeroSlideshow";
import { PortfolioSectionDivider } from "@/app/components/PortfolioSectionDivider";
import {
  MailIcon,
  PhoneIcon,
  MessageIcon,
  VideoIcon,
  MenuIcon,
  CloseIcon,
  ExternalLinkIcon,
  UsersIcon,
  BrushIcon,
  BookIcon,
  CameraIcon,
  PodcastIcon,
  PaletteIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/StandardIcons";
import bluehavenFullLogo from "figma:asset/318705c2795eaab3aa2bbcbe474e91ea2d50306e.png";
import bluehavenNewLogo from "figma:asset/97dc3295bd62e7ada943dd44b88acc765a6f4ca6.png";
import { useState } from "react";
import { useSeasonalTheme } from "@/contexts/SeasonalThemeContext";
import { SocialIcons, socialIconPaths } from "@/components/SocialIcons";
import type { SeasonalTheme } from "@/contexts/SeasonalThemeContext";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { season, setSeason } = useSeasonalTheme();
  const seasons: SeasonalTheme[] = ['default', 'christmas', 'easter', 'independence', 'valentine'];
  const seasonLabels: Record<SeasonalTheme, string> = {
    default: '🎨 Default',
    christmas: '🎄 Christmas',
    easter: '🐰 Easter',
    independence: '🇳🇬 Independence',
    valentine: '💕 Valentine',
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const whatsappContact = () => {
    window.open("https://wa.me/qr/RFPQVPAAXP2XC1", "_blank");
  };

  return (
    <div
      className="size-full overflow-y-auto bg-[#1a1a1a]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Header */}
      <header className="bg-black px-4 md:px-[10%] py-3 md:py-5 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <h1 className="text-lg md:text-2xl font-bold text-white uppercase tracking-wide">
            BLUEHAVEN STUDIOS
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <CloseIcon size={24} />
          ) : (
            <MenuIcon size={24} />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-5 list-none">
            <li>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("process")}
                className="text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide"
              >
                Process
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide"
              >
                Inquire
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800">
            <ul className="flex flex-col list-none">
              <li className="border-b border-gray-800">
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:bg-gray-900 transition-colors text-sm uppercase tracking-wide w-full text-left px-6 py-4"
                >
                  Home
                </button>
              </li>
              <li className="border-b border-gray-800">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white hover:bg-gray-900 transition-colors text-sm uppercase tracking-wide w-full text-left px-6 py-4"
                >
                  Services
                </button>
              </li>
              <li className="border-b border-gray-800">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-white hover:bg-gray-900 transition-colors text-sm uppercase tracking-wide w-full text-left px-6 py-4"
                >
                  Portfolio
                </button>
              </li>
              <li className="border-b border-gray-800">
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-white hover:bg-gray-900 transition-colors text-sm uppercase tracking-wide w-full text-left px-6 py-4"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white hover:bg-gray-900 transition-colors text-sm uppercase tracking-wide w-full text-left px-6 py-4"
                >
                  Inquire
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white text-center px-4 md:px-5 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Diagonal accent stripes */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full border-t-2 border-white transform rotate-12"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full border-t-2 border-white transform -rotate-12"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto pt-10 md:pt-20 pb-16 md:pb-32">
          {/* Main heading with dramatic styling */}
          <div className="mb-6 md:mb-8">
            <div className="inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  BLUEHAVEN STUDIOS
                </span>
              </h1>
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-3 md:mb-4 text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm px-4">
            Creativity Beyond limits
          </div>

          {/* Separator line */}
          <div className="w-24 md:w-32 h-1 bg-white mx-auto mb-6 md:mb-8"></div>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Bring your brand to life through{" "}
            <span className="text-white font-bold">
              Livestreaming
            </span>
            ,{" "}
            <span className="text-white font-bold">
              Graphics Design
            </span>
            ,{" "}
            <span className="text-white font-bold">
              Branding
            </span>
            ,{" "}
            <span className="text-white font-bold">
              Photography
            </span>
            ,{" "}
            <span className="text-white font-bold">
              Videography
            </span>
            ,{" "}
            <span className="text-white font-bold">
              Podcasting
            </span>
            ,{" "}
            <span className="text-white font-bold">
              Storytelling
            </span>
          </p>

          <p className="text-sm md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
        "We partner with ambitious brands to build unique identities, 
            high-impact visuals, and unforgettable digital experiences that
            bring your vision to life."
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 md:gap-5 justify-center flex-wrap mb-10 md:mb-16 px-4">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-white text-black px-6 md:px-12 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-wide hover:bg-gray-200 transition-all hover:scale-105 shadow-2xl"
            >
              View Portfolio
            </button>
            <button
              onClick={whatsappContact}
              className="bg-transparent text-white px-6 md:px-12 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-wide border-2 border-white hover:bg-white hover:text-black transition-all hover:scale-105"
            >
              Let's Talk
            </button>
          </div>

          {/* Services preview icons */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-4">
            <div
              className="group cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              <div className="text-3xl md:text-5xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                Brand Strategy
              </p>
            </div>
            <div
              className="group cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              <div className="text-3xl md:text-5xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                🌐
              </div>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                Digital Presence
              </p>
            </div>
            <div
              className="group cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              <div className="text-3xl md:text-5xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                💎
              </div>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                Visual Assets 
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("services")}
            className="text-white opacity-50 hover:opacity-100 transition-opacity"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Portfolio Slideshow Section */}
      <section className="py-12 md:py-20 px-4 md:px-[10%] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 uppercase text-white">
            Our Recent Work
          </h2>
          <div className="w-16 md:w-20 h-1 bg-white mx-auto mb-6 md:mb-12"></div>
          <p className="text-center text-gray-400 mb-8 md:mb-12 text-base md:text-lg px-4">
            Showcasing brands we've brought to life
          </p>

          {/* Slideshow Container */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#1a1a1a] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <HeroSlideshow />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 md:py-20 px-4 md:px-[10%] text-center bg-[#1a1a1a]"
      >
        <h2 className="text-2xl md:text-4xl mb-3 md:mb-4 uppercase text-white">
          What We Do
        </h2>
        <div className="w-16 md:w-20 h-1 bg-white mx-auto mb-8 md:mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 md:p-10 bg-[#0a0a0a] border border-gray-800 hover:border-white hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
            <div className="text-4xl md:text-5xl mb-4 md:mb-5 group-hover:scale-125 transition-transform">
              🖌️
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">
              Logo Design
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Build a unique brand identity that stands out from
              the competition.
            </p>
          </div>
          <div className="p-6 md:p-10 bg-[#0a0a0a] border border-gray-800 hover:border-white hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
            <div className="text-4xl md:text-5xl mb-4 md:mb-5 group-hover:scale-125 transition-transform">
              📑
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">
              Book Covers
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Professional illustrations and layouts that bring
              your story to life.
            </p>
          </div>
          <div className="p-6 md:p-10 bg-[#0a0a0a] border border-gray-800 hover:border-white hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
            <div className="text-4xl md:text-5xl mb-4 md:mb-5 group-hover:scale-125 transition-transform">
              👔
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">
              Merch Design
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Custom T-shirt and apparel graphics for your brand
              or event.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-12 md:py-20 px-4 md:px-[10%] bg-[#0a0a0a]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 uppercase text-white">
            The Process
          </h2>
          <div className="w-16 md:w-20 h-1 bg-white mx-auto mb-10 md:mb-16"></div>

          <div className="space-y-6 md:space-y-10">
            <div className="flex gap-4 md:gap-8 items-start p-6 md:p-8 bg-[#1a1a1a] border border-gray-800 hover:border-white transition-all group">
              <span className="text-3xl md:text-5xl font-bold text-gray-600 group-hover:text-white transition-colors min-w-[40px] md:min-w-[60px]">
                01
              </span>
              <div>
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">
                  Discovery
                </h4>
                <p className="text-sm md:text-lg text-gray-400">
                  We discuss your goals, target audience, and
                  brand vision.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8 items-start p-6 md:p-8 bg-[#1a1a1a] border border-gray-800 hover:border-white transition-all group">
              <span className="text-3xl md:text-5xl font-bold text-gray-600 group-hover:text-white transition-colors min-w-[40px] md:min-w-[60px]">
                02
              </span>
              <div>
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">
                  Design
                </h4>
                <p className="text-sm md:text-lg text-gray-400">
                  We craft initial concepts and iterate based on
                  your feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8 items-start p-6 md:p-8 bg-[#1a1a1a] border border-gray-800 hover:border-white transition-all group">
              <span className="text-3xl md:text-5xl font-bold text-gray-600 group-hover:text-white transition-colors min-w-[40px] md:min-w-[60px]">
                03
              </span>
              <div>
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">
                  Delivery
                </h4>
                <p className="text-sm md:text-lg text-gray-400">
                  You receive high-quality final files ready for
                  use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION - RESTAURANTS & FOOD */}
      <PortfolioSectionDivider
        id="portfolio"
        title="Restaurants & Food"
        subtitle="Bringing culinary brands to life"
      />

      <PrimaxPortfolio />
      <WendeesBakeryPortfolio />
      <FeFesKitchenPortfolio />

      {/* PORTFOLIO SECTION - BRANDED PACKAGING */}
      <PortfolioSectionDivider
        title="Branded Packaging"
        subtitle="Complete packaging solutions that showcase your brand"
      />

      <FeFesPackagingPortfolio />

      {/* PORTFOLIO SECTION - FASHION & RETAIL */}
      <PortfolioSectionDivider
        title="Fashion & Retail"
        subtitle="Stylish brands that make a statement"
      />

      <FeFesPortfolio />
      <AdeayoPortfolio />
      <OnaKanOwojaPortfolio />
      <LaMaysPortfolio />
      <SouvenirsPortfolio />

      {/* PORTFOLIO SECTION - BEAUTY & WELLNESS */}
      <PortfolioSectionDivider
        title="Beauty & Wellness"
        subtitle="Elegant brands for body and mind"
      />

      <LaMayScentsPortfolio />
      <DazzledinEssencePortfolio />

      {/* PORTFOLIO SECTION - SERVICES & LOGISTICS */}
      <PortfolioSectionDivider
        title="Services & Logistics"
        subtitle="Professional brands that deliver"
      />

      <AnchorFreightPortfolio />
      <LordsHeritagePortfolio />
      <ElejaExchangePortfolio />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 md:py-20 px-4 md:px-8 text-center bg-[#1a1a1a]"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 uppercase text-white">
          Ready to Get Started?
        </h2>
        <div className="w-16 md:w-20 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
        <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 px-4">
          Let's create something amazing together.
        </p>

        <div className="max-w-2xl mx-auto mb-8 md:mb-12">
          {/* Primary Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            <a
              href="mailto:bluehavens.studios@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a0a] border border-gray-800 hover:border-white rounded-lg transition-all group"
            >
              <MailIcon className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-xs md:text-sm text-white group-hover:text-gray-300 transition-colors truncate">
                  bluehavens.studios@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/c/2347011146547"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a0a] border border-gray-800 hover:border-green-500 rounded-lg transition-all group"
            >
              <MessageIcon className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
              <div className="text-left flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  WhatsApp Business
                </p>
                <p className="text-xs md:text-sm text-white group-hover:text-gray-300 transition-colors">
                  Chat with us
                </p>
              </div>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/blue.havenstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#0a0a0a] border border-gray-800 hover:border-pink-500 rounded-lg transition-all group"
              >
                <VideoIcon className="w-4 h-4 md:w-5 md:h-5 text-pink-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs md:text-sm text-white group-hover:text-gray-300 transition-colors">
                    Instagram
                  </p>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@bluehaven.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#0a0a0a] border border-gray-800 hover:border-cyan-400 rounded-lg transition-all group"
              >
                <VideoIcon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs md:text-sm text-white group-hover:text-gray-300 transition-colors">
                    TikTok
                  </p>
                </div>
              </a>

              <a
                href="https://www.threads.com/@blue.havenstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#0a0a0a] border border-gray-800 hover:border-white rounded-lg transition-all group"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.5c-.102 2.654-1.316 4.506-3.704 5.106-.894.224-1.87.318-2.856.318-3.704 0-5.894-1.908-5.894-5.166 0-3.258 2.19-5.166 5.894-5.166.986 0 1.962.094 2.856.318 2.388.6 3.602 2.452 3.704 5.106v.484zm-2.85-2.408c-.224-1.302-1.176-2.052-2.556-2.052-1.38 0-2.332.75-2.556 2.052h5.112z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs md:text-sm text-white group-hover:text-gray-300 transition-colors">
                    Threads
                  </p>
                </div>
              </a>

              <a
                href="https://chat.whatsapp.com/Lf3Vw6FaRtZFDevqjOq3EA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#0a0a0a] border border-gray-800 hover:border-green-500 rounded-lg transition-all group"
              >
                <UsersIcon className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs md:text-sm text-white group-hover:text-gray-300 transition-colors">
                    WhatsApp Group
                  </p>
                </div>
              </a>

              <a
                href="https://campsite.bio/blue.havenstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#0a0a0a] border border-gray-800 hover:border-blue-500 rounded-lg transition-all group col-span-2 md:col-span-2"
              >
                <ExternalLinkIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs md:text-sm text-white group-hover:text-gray-300 transition-colors">
                    All Links
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/c/2347011146547",
              "_blank",
            )
          }
          className="bg-white text-black px-6 md:px-12 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-wide hover:bg-gray-200 transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-2 md:gap-3"
        >
          <MessageIcon className="w-4 h-4 md:w-5 md:h-5" />
          <span className="whitespace-nowrap">
            Contact Us on WhatsApp
          </span>
        </button>
      </section>

      {/* Seasonal Theme Selector - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value as SeasonalTheme)}
          className="text-xs md:text-sm bg-gray-900 text-white border border-gray-600 rounded-lg px-3 py-2 hover:border-white transition-colors cursor-pointer shadow-lg"
        >
          {seasons.map((s) => (
            <option key={s} value={s}>
              {seasonLabels[s]}
            </option>
          ))}
        </select>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8 md:py-10 px-4 md:px-[10%]">
        <p className="text-sm md:text-base mb-2">
          &copy; 2026 Bluehaven Studios. All Rights Reserved.
        </p>
        <p className="text-xs md:text-sm text-gray-400 mb-2">
          Email: bluehavens.studios@gmail.com
        </p>
        <p className="text-xs md:text-sm text-gray-400">
          Phone: +234 806 848 3718
        </p>
      </footer>
    </div>
  );
}
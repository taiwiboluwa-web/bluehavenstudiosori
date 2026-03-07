interface PortfolioSectionDividerProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function PortfolioSectionDivider({ title, subtitle, id }: PortfolioSectionDividerProps) {
  return (
    <section id={id} className="py-10 md:py-16 px-4 md:px-[10%] bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 uppercase">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="text-sm md:text-lg text-gray-400 tracking-wider uppercase px-4">
              {subtitle}
            </p>
          )}
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4 md:mt-6"></div>
        </div>
      </div>
    </section>
  );
}
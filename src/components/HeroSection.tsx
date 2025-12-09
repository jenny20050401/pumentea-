import heroImage from "@/assets/hero-tea.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Decorative Element */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-4">
              <span className="w-12 h-px bg-primary-foreground/50" />
              <span className="text-primary-foreground/80 font-serif tracking-widest text-sm">
                三峽北大特區
              </span>
              <span className="w-12 h-px bg-primary-foreground/50" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in-up">
            普門茶品
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light tracking-wider mb-4 animate-fade-in-delay-1">
            以茶會友 · 品茗素食 · 養生健康
          </p>

          {/* Description */}
          <p className="text-primary-foreground/70 text-base md:text-lg max-w-xl mx-auto mb-10 animate-fade-in-delay-2">
            在寧靜的茶香中，品味精緻素食佳餚，感受身心的放鬆與沉澱
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-delay-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 px-10 py-4 bg-tea-terracotta text-primary-foreground font-medium rounded-full transition-all duration-300 hover:bg-tea-terracotta/90 hover:shadow-elevated hover:scale-105"
            >
              探索菜單
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

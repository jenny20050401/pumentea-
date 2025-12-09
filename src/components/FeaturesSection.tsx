import { useEffect, useRef, useState } from "react";
import { Leaf, Coffee, Armchair, BookOpen, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "高品質臺灣高山茶",
    description: "每一款茶都經過精選與親手沖泡，帶來獨一無二的品茶體驗。",
  },
  {
    icon: Coffee,
    title: "以茶佐餐的素食料理",
    description: "嚴選臺灣優質茶葉，從綠茶、烏龍到紅茶，每一款都經過精心挑選與沖泡。",
  },
  {
    icon: Armchair,
    title: "佛教氛圍的舒適空間",
    description: "低調、寧靜的環境搭配特色茶具，讓每一次造訪都能放慢步調、自在享受。",
  },
  {
    icon: BookOpen,
    title: "茶藝課程與文化體驗",
    description: "定期舉辦茶藝課程與活動，讓大家更深入認識茶的文化與品茶藝術。",
  },
  {
    icon: ShoppingBag,
    title: "直售茶葉服務",
    description: "店內提供茶葉直售，讓喜愛的茶能帶回家，延續品茶的愉悅與生活感。",
  },
];

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className={`section-title mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          我們的特色
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card lg:w-[calc(33.333%-1.34rem)] ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-tea-sage-light flex items-center justify-center">
                <feature.icon className="w-10 h-10 text-tea-sage" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import storeInterior from "@/assets/sanxia-pumen-tea-house-counter.webp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className={`section-title mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          關於普門茶品
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-accent">
              用好茶，把日常過得更好喝
            </h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              普門茶品位於三峽北大特區，是一間以茶為核心的茶藝館，同時提供自然清爽的全素與蛋素料理。多年以來我們秉持樸實的理念，挑選安心茶葉與新鮮食材，希望讓每位來訪的人，都能喝到順口的好茶、吃到無負擔的餐點。
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              在這裡，您可以在安靜舒適的空間中放慢步調，無論是想好好品茶、享用素食、與朋友相聚，或是獨自休息片刻，普門茶品都歡迎您前來坐坐。
            </p>
            <a
              href="#contact"
              className="btn-secondary inline-flex mt-4"
            >
              了解更多
            </a>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={storeInterior}
                alt="普門茶品環境"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/50 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock } from "lucide-react";

const newsItems = [
  {
    date: "2025年10月",
    icon: Calendar,
    title: "秋季新品上市",
    description: "秋季限定素食套餐與季節茶品現正供應中，歡迎蒞臨品嚐！",
  },
  {
    date: "營業時間",
    icon: Clock,
    title: "每週營業資訊",
    description: "週二至週日 11:30-14:00、17:30-20:00 營業，週一公休。",
  },
];

const NewsSection = () => {
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
          最新消息
        </h2>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <div
              key={item.title}
              className={`bg-card rounded-2xl p-8 shadow-soft transition-all duration-500 hover:shadow-medium ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Date Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tea-sage-light rounded-full text-tea-sage text-sm font-medium mb-4">
                <item.icon className="w-4 h-4" />
                {item.date}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

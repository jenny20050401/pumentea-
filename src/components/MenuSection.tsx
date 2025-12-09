import { useEffect, useRef, useState } from "react";
import setMeal from "@/assets/set-meal.jpg";
import curryNoodles from "@/assets/curry-noodles.jpg";
import teaTasting from "@/assets/tea-tasting.jpg";

const menuItems = [ // 👈 更新推薦菜單
  {
    image: setMeal,
    title: "普門套餐(飯)",
    description: "菜色多樣、豐富，口味鹹淡適中，是店內人氣首選。",
    price: "NT$ 180",
  },
  {
    image: curryNoodles,
    title: "香濃咖哩(飯)",
    description: "口感溫和，帶有蔬果的自然甜味，大人小孩都喜愛。",
    price: "NT$ 160",
  },
  {
    image: teaTasting,
    title: "當日精選茶",
    description: "由老闆親自挑選當日適合分享的好茶，品味茶香韻味。",
    price: "隨緣",
    highlight: true,
  },
];

const MenuSection = () => {
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
      id="menu"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className={`section-title mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          熱門推薦
        </h2>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              className={`menu-card group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tea-brown/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="border-t-2 border-dashed border-secondary pt-4 mt-4 text-right">
                  <span className="text-xl font-semibold text-accent">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in-delay-3" : "opacity-0"}`}>
          <a href="/products" className="btn-primary">
            查看完整菜單
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

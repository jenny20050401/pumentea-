import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import setMeal from "@/assets/set-meal.jpg";
import curryNoodles from "@/assets/curry-noodles.jpg";
import teaTasting from "@/assets/tea-tasting.jpg";
import puerhNoodles from "@/assets/sanxia-vegetarian-puerh-braised-noodles.jpg";

const setMenuInfo = {
  title: "套餐內容說明",
  items: [
    "主菜一份（可選擇當日提供的品項）",
    "季節時蔬配菜",
    "養生湯品",
    "精選茶飲一杯",
    "甜點或水果",
  ],
};

const menuCategories = [ // 👈 全面更新菜單內容
  {
    title: "餐點系列",
    subtitle: "健康美味的素食料理",
    featuredImages: [setMeal, curryNoodles, puerhNoodles],
    items: [
      {
        name: "普門套餐",
        desc: "菜色多樣、豐富，口味鹹淡適中 (附湯品)",
        price: "NT$ 180",
        badges: ["推薦"],
      },
      {
        name: "香濃咖哩(飯)",
        desc: "口感溫和，帶有蔬果的自然甜味 (附湯品)",
        price: "NT$ 160",
        badges: ["人氣"],
      },
      {
        name: "香椿乾麵",
        desc: "不鹹膩，帶有芝麻醬+醬油的滑順鹹香 (附湯品)",
        price: "NT$ 140",
        badges: ["全素"],
      },
      {
        name: "豆球乾麵",
        desc: "豆球為店家手工製作，能吃出特殊香氣 (附湯品)",
        price: "NT$ 140",
        badges: ["新品"],
      },
      {
        name: "麻醬乾麵",
        desc: "麻醬香氣十足，越吃越香 (附湯品)",
        price: "NT$ 140",
        badges: [],
      },
      {
        name: "香濃咖哩麵",
        desc: "香料味撲鼻，咖哩醬濃稠度剛好，能緊緊附著在麵條上",
        price: "NT$ 160",
        badges: ["人氣"],
      },
      {
        name: "普洱紅燒麵",
        desc: "以普洱茶為基底做成的湯頭，獨特且偏重口味",
        price: "NT$ 160",
        badges: ["特色"],
      },
      {
        name: "天香麻辣麵",
        desc: "辣度適中，湯頭香甜不辣",
        price: "NT$ 160",
        badges: [],
      },
      {
        name: "什錦湯麵",
        desc: "用料豐富，熬煮出蔬菜甜味的湯頭",
        price: "NT$ 150",
        badges: [],
      },
      {
        name: "香椿湯麵",
        desc: "吃起來沒有負擔，不油膩，湯頭溫暖滋潤，適合四季食用",
        price: "NT$ 150",
        badges: ["全素"],
      },
    ],
  },
  {
    title: "單點小品",
    subtitle: "搭配主餐或獨自享用",
    items: [
      { name: "時蔬炒青菜", desc: "簡單清炒帶出時蔬本身的天然甜味", price: "NT$ 130", badges: ["全素"] },
      { name: "隨緣熱炒", desc: "隨緣搭配的食材，有著熟悉的家庭料理味道", price: "NT$ 150", badges: [] },
      { name: "紅燒湯", desc: "湯頭濃郁順口，有紅燒特有的醬香", price: "NT$ 120", badges: [] },
      { name: "椰果軟絲", desc: "可搭配哇沙米一起享用，口感似腸粉", price: "NT$ 90", badges: [] },
      { name: "小菜", desc: "清爽開胃、份量剛好", price: "NT$ 60", badges: [] },
      { name: "抓餅", desc: "Q彈好吃、外酥內軟，一口接著一口", price: "NT$ 70", badges: [] },
      { name: "素食便當", desc: "營養搭配完善，且湯頭清淡，達到解膩的效果 (外帶附湯)", price: "NT$ 140", badges: ["外帶"] },
    ],
  },
  {
    title: "茶品系列",
    subtitle: "隨緣供茶，不另外收費",
    items: [
      {
        name: "阿里山高山茶",
        desc: "來自海拔1200公尺的阿里山茶區，茶湯清香甘甜，回甘持久",
        price: "隨緣",
        badges: [],
      },
      { name: "碧螺春綠茶", desc: "三峽特產碧螺春，茶香清新，滋味甘甜", price: "隨緣", badges: [] },
      { name: "茉莉花茶", desc: "綠茶與茉莉花完美結合，花香四溢", price: "隨緣", badges: [] },
      { name: "日月潭紅茶", desc: "魚池鄉日月潭紅茶，茶色紅潤，滋味甘醇", price: "隨緣", badges: [] },
      { name: "凍頂烏龍茶", desc: "鹿谷凍頂山特產，茶香濃郁，口感醇厚", price: "隨緣", badges: [] },
      { name: "玫瑰花草茶", desc: "精選玫瑰花瓣，搭配多種花草，養顏美容", price: "隨緣", badges: [] },
      { name: "菊花普洱茶", desc: "雲南普洱搭配杭菊，溫潤順口，去油解膩", price: "隨緣", badges: [] },
      { name: "蜜香紅茶", desc: "台東紅烏龍，帶有天然蜜香，甜潤好喝", price: "隨緣", badges: [] },
      { name: "大益七子普洱茶", desc: "熟茶香濃醇厚，帶木質香或棗香；生茶茶味強勁，具花蜜香或草本香", price: "隨緣", badges: ["新品"] },
      { name: "老曼城普洱茶", desc: "初入口有明顯苦澀感，隨後轉為以野樟香為主的回甘", price: "隨緣", badges: ["新品"] },
      { name: "加葉龍烏龍茶", desc: "清爽甘甜，飲後口齒留香，耐沖泡", price: "隨緣", badges: ["新品"] },
      { name: "易武古茶", desc: "溫潤如玉，花香極為突出，柔和細膩", price: "隨緣", badges: ["新品"] },
    ],
  },
];

const giftSets = []; // 👈 根據您的要求，暫時移除了禮盒區塊

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      <main>
        {/* Page Header */}
        <section
          className="py-20 text-center text-white"
          style={{
            background: `linear-gradient(rgba(106, 140, 123, 0.85), rgba(106, 140, 123, 0.85)),
                         url(${teaTasting}) center/cover`,
          }}
        >
          <div className="max-w-[1200px] mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">產品菜單</h1>
            <p className="text-xl">精緻素食與優質茶品</p>
          </div>
        </section>

        {/* Menu Section */}
        <section ref={sectionRef} className="py-16">
          <div className="max-w-[1200px] mx-auto px-8">
            {menuCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`bg-card rounded-2xl shadow-medium overflow-hidden mb-12 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                {/* Category Header */}
                <div className="bg-primary text-white p-8">
                  <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                  <p className="opacity-90">{category.subtitle}</p>
                </div>

                {/* Featured Images */}
                {category.featuredImages && (
                  <div className="grid grid-cols-3">
                    {category.featuredImages.map((img, imgIndex) => (
                      <div key={imgIndex} className="h-[200px] overflow-hidden">
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Menu Items */}
                <div className="p-6 md:p-8">
                  {catIndex === 0 && (
                    <div className="bg-amber-50 p-6 rounded-lg mb-6 border-2 border-dashed border-accent">
                      <h4 className="text-accent font-semibold flex items-center gap-2 mb-2">
                        ✨ {setMenuInfo.title}
                      </h4>
                      <ul className="text-muted-foreground">
                        {setMenuInfo.items.map((item, i) => (
                          <li key={i} className="py-1 pl-6 relative">
                            <span className="absolute left-0 text-accent font-bold">
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.title === "茶品系列" && (
                    <div className="bg-sky-50 p-6 rounded-lg mb-6 border-l-4 border-sky-500">
                      <h4 className="text-sky-700 font-semibold flex items-center gap-2 mb-2">
                        🍵 茶品說明
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        每日所提供之茶款依當日安排與茶葉狀況而定，老闆親自挑選當日適合分享的茶，不另外收費。
                      </p>
                    </div>
                  )}

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center p-4 border-b border-secondary last:border-b-0 transition-all duration-300 hover:bg-background hover:pl-6"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-foreground font-semibold text-lg">
                              {item.name}
                            </span>
                            {item.badges.map((badge, i) => (
                              <span
                                key={i}
                                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                  badge === "全素"
                                    ? "bg-green-600 text-white"
                                    : badge === "人氣" || badge === "推薦"
                                    ? "bg-accent text-white"
                                    : "bg-secondary text-foreground"
                                }`}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {item.desc}
                          </p>
                        </div>
                        <div className="text-primary text-xl font-bold whitespace-nowrap ml-8">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  {catIndex === 0 && (
                    <div className="bg-green-50 p-6 rounded-lg mt-6 border-l-4 border-primary">
                      <h4 className="text-foreground font-semibold mb-2">
                        🌿 貼心提醒
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        所有餐點皆可依需求調整辣度與鹹度，如有特殊飲食需求請告知服務人員。
                        <br />
                        標示「全素」者為純植物性食材，其餘餐點可能含蛋或奶製品。
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Gift Sets Banner - Temporarily hidden */}
            {giftSets.length > 0 && (
            <div
              className={`rounded-2xl text-white p-12 text-center shadow-elevated transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
                transitionDelay: "450ms",
              }}
            >
              <h2 className="text-4xl font-bold mb-4">🎁 茶葉禮盒</h2>
              <p className="text-lg opacity-95 mb-6">
                送禮自用兩相宜，精美包裝傳遞您的心意
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                {giftSets.map((gift, index) => (
                  <div
                    key={index}
                    className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                  >
                    <h4 className="text-xl font-semibold mb-2">{gift.title}</h4>
                    <p className="opacity-90 mb-2">{gift.desc}</p>
                    <p className="text-2xl font-bold mt-2">{gift.price}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/store"
                className="inline-block px-10 py-4 bg-accent text-foreground font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mt-4"
              >
                洽詢訂購
              </Link>
            </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
import storeInterior from "@/assets/sanxia-pumen-tea-house-counter.webp";
import { Wheat, ChefHat, Heart, Landmark, Smile, Globe } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import diningArea from "@/assets/sanxia-vegetarian-dining-area.jpg";
import teaSeating from "@/assets/sanxia-tea-tasting-seating.jpg";
import zenInterior from "@/assets/sanxia-pumen-tea-zen-interior.jpg";
import healthyConcept from "@/assets/sanxia-healthy-vegetarian-concept.jpg";
import teaSource from "@/assets/sanxia-taiwan-quality-tea-source.jpg";

const values = [
  {
    icon: Wheat,
    title: "天然健康",
    description:
      "堅持使用天然食材，不添加人工添加物，讓每一口都是純粹的健康美味。",
  },
  {
    icon: ChefHat,
    title: "用心品質",
    description:
      "從選材到烹調，每一個環節都用心把關，確保提供最優質的餐點與服務。",
  },
  {
    icon: Heart,
    title: "尊重生命",
    description:
      "以素食推廣環保與慈悲理念，尊重每一個生命，愛護我們的地球。",
  },
  {
    icon: Landmark,
    title: "文化傳承",
    description: "傳承中華茶文化與素食智慧，讓傳統美德在現代生活中延續。",
  },
  {
    icon: Smile,
    title: "真誠服務",
    description: "以真誠的心對待每一位客人，提供溫暖貼心的用餐體驗。",
  },
  {
    icon: Globe,
    title: "永續經營",
    description: "注重環保與永續發展，為下一代留下更美好的環境。",
  },
];

const environments = [
  {
    image: diningArea,
    title: "寬敞用餐區",
    description: "舒適明亮的用餐空間，適合家庭聚餐與朋友聚會。",
  },
  {
    image: teaSeating,
    title: "品茗雅座",
    description: "典雅的品茗空間，讓您在寧靜中品味好茶。",
  },
  {
    image: zenInterior,
    title: "禪意裝潢",
    description: "融合東方美學，營造禪意優雅的用餐氛圍。",
  },
];

const timeline = [
  {
    date: "創立初期",
    title: "懷抱理想啟程",
    description:
      "在三峽北大特區開設第一家普門茶品，以健康素食與精緻茶品為核心理念。",
  },
  {
    date: "穩定成長",
    title: "獲得在地認同",
    description: "憑藉優質的餐點與服務，逐漸獲得在地居民的喜愛與支持。",
  },
  {
    date: "深耕服務",
    title: "持續精進品質",
    description:
      "不斷研發新菜色，提升服務品質，成為三峽地區知名的素食餐廳。",
  },
  {
    date: "展望未來",
    title: "傳承健康理念",
    description:
      "持續推廣健康素食文化，期待與更多人分享美味與健康的生活方式。",
  },
];

const About = () => {
  const { ref: storyRef, isVisible: isStoryVisible } =
    useIntersectionObserver<HTMLElement>();
  const { ref: valuesRef, isVisible: isValuesVisible } =
    useIntersectionObserver<HTMLElement>();
  const { ref: envRef, isVisible: isEnvVisible } =
    useIntersectionObserver<HTMLElement>();
  const { ref: timelineRef, isVisible: isTimelineVisible } =
    useIntersectionObserver<HTMLElement>();

  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 text-center text-white"
        style={{
          background: `linear-gradient(rgba(106, 140, 123, 0.85), rgba(106, 140, 123, 0.85)),
                         url('https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1200') center/cover`,
          }}
        >
          <div className="max-w-[1200px] mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">關於普門茶品</h1>
            <p className="text-xl">品茗素食 · 傳承健康生活之道</p>
          </div>
        </section>

        {/* Story Section */}
        <section ref={storyRef} className="py-20">
          <div className="max-w-[1200px] mx-auto px-8">
            {/* Story 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <div
                className={`transition-all duration-700 ${
                  isStoryVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                <h2 className="text-primary text-3xl font-semibold mb-6">
                  我們的故事
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4 indent-8">
                  普門茶品扎根於三峽北大特區近十八年，是一間以「茶藝推廣」為初衷的低調茶館。老闆從事茶葉工作四十餘年，走遍學校與城市，用一杯茶把人們連在一起——從政大、淡江、臺科大，到上海、北京、杭州與重慶，都留下過他分享茶的身影
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4 indent-8">
                  一路走來，我們始終把「茶」放在心的最前面，把「料理」當作陪伴茶而生的小溫暖。最初提供素食，其實只是為了讓來喝茶、上課、聊天、休息的人能吃到一份簡單而安心的餐。只是日子久了，這些看似樸素的料理慢慢跟著茶一起成為生活的一部分——沒有華麗的擺盤，也沒有複雜的調味，但有一種持續多年、自然形成的熟悉與踏實。茶也是如此。十幾年來，普門茶品始終相信，茶的價值不在名聲，而在入口後那一口舒服、不用多想的順。每一款茶都是反覆試過才願意分享，只希望來到這裡的人，都能在一杯熱茶裡找到屬於自己的節奏。
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4 indent-8">
                  普門茶品從不急躁，也沒有刻意往前衝的雄心，反而更希望用安靜的方式存在於大家的生活裡。這裡沒有刻意營造的氛圍，只有自然形成的步調；沒有華麗的故事，只有每天踏實做茶、做飯、開門、迎接熟面孔與新朋友的日常。能陪著大家一路走到今天，不是因為宣傳，而是因為信任與緣分。也許你是特地來喝一杯久違的好茶，也許只是剛好路過想休息一下，無論是什麼理由，只要坐下來，我們都希望你能感受到這個地方長年累積出的平靜與溫度。
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed indent-8">歡迎你來普門茶品，喝杯茶、吃份素食，讓自己在簡單的好味道裡慢慢放鬆。</p>
              </div>
              <div
                className={`rounded-lg overflow-hidden shadow-elevated transition-all duration-700 delay-200 ${
                  isStoryVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
              >
                <img
                  src={storeInterior}
                  alt="品牌故事"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Story 2 - Reversed */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <div
                className={`order-2 md:order-1 rounded-lg overflow-hidden shadow-elevated transition-all duration-700 delay-300 ${
                  isStoryVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                <img
                  src={teaSource}
                  alt="茶葉來源"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div
                className={`order-1 md:order-2 transition-all duration-700 delay-400 ${
                  isStoryVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
              >
                <h2 className="text-primary text-3xl font-semibold mb-6">
                  茶葉來源
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                 普門茶品精選高品質的臺灣高山茶，每一款茶葉都經過細心挑選，確保香氣、口感與層次純粹自然。老闆親手沖泡每一杯茶，將多年經驗融入其中，為每位來訪的客人帶來獨一無二的品茶體驗。無論是第一次來訪的客人，還是多年回訪的老朋友，都能喝到順口、安心的好茶，感受茶帶來的溫度與細膩。
                </p>
            
              </div>
            </div>

            {/* Story 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className={`transition-all duration-700 delay-500 ${
                  isStoryVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                <h2 className="text-primary text-3xl font-semibold mb-6">
                  餐點理念
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  普門茶品的餐點理念是「以茶佐餐」，以茶為主，素食料理為輔。餐點選用新鮮食材、簡單烹調，保留食材原味，目的不是搶過茶的風頭，而是襯托茶的香氣與層次，讓茶的細膩能被完整呈現。全素與蛋素料理的設計也兼顧均衡與健康，讓每一次用餐都成為品茶的延伸體驗。茶不只是飲品，它也能融入料理中，為味蕾帶來不同層次的驚喜。來這裡用餐，不只是填飽肚子，更是一種與茶互動、慢下來的生活體驗。
                </p>
              </div>
              <div
                className={`rounded-lg overflow-hidden shadow-elevated transition-all duration-700 delay-600 ${
                  isStoryVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
              >
                <img
                  src={healthyConcept}
                  alt="餐點理念"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-20 bg-muted">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="section-title">我們的核心價值</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`bg-card p-10 rounded-lg text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-medium ${
                    isValuesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-primary text-xl font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environment Section */}
        <section ref={envRef} className="py-20 bg-background">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="section-title">店內環境</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {environments.map((env, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated ${
                    isEnvVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <img
                    src={env.image}
                    alt={env.title}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="bg-card p-6">
                    <h3 className="text-primary font-semibold mb-2">
                      {env.title}
                    </h3>
                    <p className="text-muted-foreground">{env.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="py-20 bg-muted">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="section-title">發展歷程</h2>
            <div className="relative max-w-[800px] mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-secondary hidden md:block" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:ml-[50%] md:pl-12"
                  } transition-all duration-500 ${
                    isTimelineVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card p-8 rounded-lg shadow-medium">
                    <div className="text-accent font-bold text-lg mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-foreground font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {/* Timeline Dot */}
                  <div
                    className={`hidden md:block absolute top-0 w-5 h-5 bg-accent rounded-full border-4 border-background shadow-md ${
                      index % 2 === 0 ? "-right-2.5" : "-left-2.5"
                    }`}
                    style={{ boxShadow: "0 0 0 4px hsl(var(--accent))" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
};

export default About;
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, Users, Utensils, CreditCard, Car, Bus, Train } from "lucide-react";
import storeHeaderBg from "@/assets/sanxia-relaxing-tea-house-ambience.jpg";

const Store = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      <main>
        {/* Page Header */}
        <section
          className="py-20 text-center text-white relative"
          style={{
            background: `linear-gradient(rgba(106, 140, 123, 0.85), rgba(106, 140, 123, 0.85)),
                         url(${storeHeaderBg}) center/cover`,
          }}
        >
          <div className="max-w-[1200px] mx-auto px-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">門市資訊與聯絡方式</h1>
            <p className="text-xl opacity-90">歡迎蒞臨普門茶品 · 品味健康素食</p>
          </div>
        </section>

        {/* Info Grid Section */}
        <section className="py-16 container mx-auto px-6">
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            
            {/* Basic Info Card */}
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <h2 className="text-2xl font-serif font-semibold text-primary mb-6 flex items-center gap-2">
                門市資訊
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">門市地址</h3>
                    <p className="text-muted-foreground">新北市三峽區國際二街11號</p>
                    <p className="text-sm text-muted-foreground/70">三峽北大特區</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">聯絡電話</h3>
                    <a href="tel:02-8672-0599" className="text-primary hover:underline font-medium">02-8672-0599</a>
                    <p className="text-sm text-muted-foreground/70">歡迎來電預約訂位</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Users className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">座位數量</h3>
                    <p className="text-muted-foreground">約40個座位</p>
                    <p className="text-sm text-muted-foreground/70">建議假日提前預約</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <h2 className="text-2xl font-serif font-semibold text-primary mb-6 flex items-center gap-2">
                服務項目
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Utensils className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">內用服務</h3>
                    <p className="text-muted-foreground">提供舒適用餐環境</p>
                    <p className="text-sm text-muted-foreground/70">大型聚餐請提前預約</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">外帶服務</h3>
                    <p className="text-muted-foreground">便當外帶享95折優惠</p>
                    <p className="text-sm text-muted-foreground/70">建議提前電話預訂</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <CreditCard className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">付款方式</h3>
                    <p className="text-muted-foreground">現金 / 信用卡 / 行動支付</p>
                    <p className="text-sm text-muted-foreground/70">Line Pay、街口支付</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card (Full Width) */}
            <div className="md:col-span-2 bg-card p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-serif font-semibold text-primary mb-6">營業時間</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-4 font-semibold text-primary">星期</th>
                      <th className="p-4 font-semibold text-primary">午餐時段</th>
                      <th className="p-4 font-semibold text-primary">晚餐時段</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium">週一</td>
                      <td colSpan={2} className="p-4 text-destructive font-bold text-center bg-destructive/5">公休日</td>
                    </tr>
                    {["週二", "週三", "週四", "週五", "週六", "週日"].map((day) => (
                      <tr key={day} className="hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-medium">{day}</td>
                        <td className="p-4 text-green-600 font-medium">11:30 - 14:00</td>
                        <td className="p-4 text-green-600 font-medium">17:30 - 20:00</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-destructive font-medium mt-4">
                ⚠️ 最後點餐時間為閉店前30分鐘
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="section-title mb-10">交通位置</h2>
            <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-elevated">
              <iframe 
                src="https://maps.google.com/maps?q=普門茶品 新北市三峽區國際二街11號&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Transport Section */}
        <section className="py-16 container mx-auto px-6">
           <h2 className="section-title mb-12">交通方式</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">自行開車</h3>
                <div className="text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">國道3號：</strong></p>
                  <p>三鶯交流道下 → 往三峽方向 → 大義路 → 國際二街</p>
                  <p className="mt-4"><strong className="text-foreground">停車資訊：</strong></p>
                  <p>附近有路邊停車格及公有停車場</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bus className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">公車</h3>
                <div className="text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">搭乘公車：</strong></p>
                  <p>275、812、916、939、981</p>
                  <p>藍43、藍45</p>
                  <p className="mt-4">於「臺北大學」站下車，步行約5-8分鐘</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft text-center hover:-translate-y-1 transition-transform">
                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Train className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">捷運轉乘</h3>
                <div className="text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">板南線：</strong></p>
                  <p>永寧站 → 轉乘公車275、812、916</p>
                  <p className="mt-4"><strong className="text-foreground">環狀線：</strong></p>
                  <p>十四張站 → 轉乘公車939</p>
                </div>
              </div>
           </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
             <h2 className="section-title mb-12">聯絡我們</h2>
             <div className="grid lg:grid-cols-2 gap-10">
                {/* Google Form Embed */}
                <div className="bg-card p-6 rounded-2xl shadow-elevated h-[700px]">
                   <h3 className="text-2xl font-serif font-semibold text-primary mb-2">線上留言</h3>
                   <p className="text-muted-foreground mb-6">請填寫以下表單，我們會盡快回覆您</p>
                   <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdg28o763JBvhPRXmxcnn5Mg68Boa0XmpbY-gJFPg3RliQxJA/viewform?embedded=true" 
                      width="100%" 
                      height="580" 
                      frameBorder="0" 
                      marginHeight={0} 
                      marginWidth={0}
                      className="bg-transparent"
                    >
                        載入中…
                    </iframe>
                </div>

                {/* Social Links */}
                <div className="flex flex-col justify-center">
                   <div className="bg-tea-sage/10 p-10 rounded-2xl">
                      <h3 className="text-2xl font-serif font-semibold text-foreground mb-8 border-b-2 border-primary/20 pb-4">
                        聯絡資訊與社群平台
                      </h3>
                      <div className="space-y-6">
                        {[
                          { title: "電話預約 / 諮詢", content: "02-8672-0599", href: "tel:02-8672-0599", icon: Phone },
                          { title: "Facebook 粉絲專頁", content: "追蹤我們獲取最新優惠資訊", href: "#", icon: Users },
                          { title: "Instagram", content: "看看我們的美食照片", href: "#", icon: Utensils },
                          { title: "LINE 官方帳號", content: "加入官方帳號即時訊息不漏接", href: "#", icon:  MessageCircle },
                        ].map((item, idx) => (
                           <a 
                            key={idx}
                            href={item.href}
                            className="flex items-center gap-4 p-4 bg-background rounded-xl transition-all hover:shadow-md hover:scale-[1.02] group"
                           >
                             <div className="w-1 bg-accent h-12 rounded-full group-hover:h-14 transition-all" />
                             <div>
                                <h4 className="font-semibold text-primary text-lg">{item.title}</h4>
                                <p className="text-muted-foreground">{item.content}</p>
                             </div>
                           </a>
                        ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
};

// 補充 icon
import { MessageCircle } from "lucide-react";

export default Store;
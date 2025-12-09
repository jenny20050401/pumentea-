import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom"; // 建議這裡改用 Link，避免頁面重新整理
import logo from "@/assets/sanxia-pumen-tea-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      {/* ^^^ 修改重點：移除了 style={{...}}，直接加上 className="bg-primary" */}
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="新北市三峽區普門茶品素食茶藝館的品牌標誌" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-serif text-2xl font-semibold">普門茶品</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              以茶會友 · 品茗素食 · 養生健康
              <br />
              在寧靜的茶香中，品味素食佳餚
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">門市資訊</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/90">
                  新北市三峽區國際二街11號
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/90">
                  02-8672-0599
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent" />
                <div className="text-primary-foreground/90">
                  <p>週二至週日</p>
                  <p>11:30-14:00 · 17:30-20:00</p>
                  <p className="text-accent font-medium mt-1">週一公休</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">快速連結</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-white transition-colors">
                  產品菜單
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-primary-foreground/80 hover:text-white transition-colors">
                  門市資訊
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 普門茶品 Pumen Tea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
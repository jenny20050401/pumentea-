import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/sanxia-pumen-tea-logo.jpg";

const navItems = [
  { label: "首頁", href: "/" },
  { label: "關於我們", href: "/about" },
  { label: "產品", href: "/products" },
  { label: "門市資訊", href: "/store" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="普門茶品 Logo" 
            className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110" 
          />
          <span className={`font-serif text-xl font-semibold transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}>
            普門茶品
          </span>
        </Link>

        {/* Desktop Navigation (電腦版選單) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
             <Link
              key={item.label}
              to={item.href}
              className={`nav-link font-medium transition-colors duration-300 ${
                isScrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (手機版漢堡選單按鈕) */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu (手機版展開後的選單 - 這裡改了背景色和文字顏色) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white backdrop-blur-md shadow-medium transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-gray-800 hover:text-primary font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
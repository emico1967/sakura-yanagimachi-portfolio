/* ============================================================
   COMPONENT: Navigation
   Design: Editorial Minimalism — fixed top nav with gold accent
   ============================================================ */

import { useEffect, useState } from "react";

const navItems = [
  { label: "プロフィール", href: "#profile" },
  { label: "キャリア", href: "#career" },
  { label: "実績", href: "#achievements" },
  { label: "サービス", href: "#services" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F4EF]/95 backdrop-blur-sm border-b border-[#E0DDD8]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex flex-col leading-none"
        >
          <span
            className="text-[10px] tracking-[0.3em] text-[#B8963E] font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            AI COMMUNITY
          </span>
          <span
            className="text-lg font-black text-[#1A1A1A] tracking-tight"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900 }}
          >
            柳町さくら
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-xs tracking-[0.15em] text-[#555] hover:text-[#B8963E] transition-colors duration-300 font-light relative group"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B8963E] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`w-6 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7F4EF]/98 backdrop-blur-sm border-t border-[#E0DDD8]">
          <ul className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm tracking-[0.15em] text-[#333] hover:text-[#B8963E] transition-colors font-light w-full text-left py-2"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

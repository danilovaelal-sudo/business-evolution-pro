import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "О сопровождении", href: "#help" },
  { label: "Процесс", href: "#process" },
  { label: "Обо мне", href: "#about" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Евгения Сергеева
          </span>
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70 font-medium">
            психолог · бизнес-трекер
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-premium bg-accent text-accent-foreground px-6 py-2.5 rounded-md text-[13px] font-semibold tracking-wide"
          >
            Записаться на разбор
          </button>
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/40">
          <div className="container py-8 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-base text-muted-foreground hover:text-foreground py-3 transition-colors border-b border-border/30 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-accent text-accent-foreground px-5 py-3.5 rounded-md text-sm font-semibold mt-4 tracking-wide"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;

import { Send, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              {["Бизнес", "Управление", "Состояние", "Коммуникация"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium tracking-wider uppercase text-muted-foreground border border-border rounded-full px-3 py-1 hidden sm:inline-block"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-semibold leading-[1.15] text-foreground mb-6">
              Помогаю предпринимателям находить главное ограничение роста
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Убираю хаос в управлении и внутренние барьеры, чтобы бизнес
              двигался системно и без перегруза. Психология, трекинг, методология
              — в одном сопровождении.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-7 py-4 rounded-lg font-medium text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Оставить заявку
                <ArrowRight size={18} />
              </button>
              <a
                href="https://t.me/Eugenia_Sergeeva"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground px-7 py-4 rounded-lg font-medium text-base hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Написать в Telegram
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              <img
                src={heroImg}
                alt="Евгения Сергеева — психолог и бизнес-трекер"
                className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl object-cover aspect-[3/4] lg:aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border hidden md:block">
                <p className="text-sm font-medium text-foreground">10+ лет</p>
                <p className="text-xs text-muted-foreground">в работе с людьми и бизнесом</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

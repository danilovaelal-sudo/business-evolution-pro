import { MessageCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import TypewriterHeading from "@/components/TypewriterHeading";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Premium gradient accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              {["Бизнес", "Управление", "Состояние", "Коммуникация"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium tracking-wider uppercase text-muted-foreground border border-border rounded-full px-3 py-1 hidden sm:inline-block backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <TypewriterHeading
              as="h1"
              text="Помогаю предпринимателям находить главное ограничение роста"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-semibold leading-[1.15] text-foreground mb-6"
              speed={30}
            />

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Убираю хаос в управлении и внутренние барьеры, чтобы бизнес
              двигался системно и без перегруза. Психология, трекинг, методология
              — в одном сопровождении.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-primary text-primary-foreground px-7 py-4 rounded-lg font-medium text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20"
              >
                Оставить заявку
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="https://t.me/Eugenia_Sergeeva"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground px-7 py-4 rounded-lg font-medium text-base hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Написать в Telegram
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              <img
                src={heroImg}
                alt="Евгения Сергеева — психолог и бизнес-трекер"
                className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl object-cover aspect-[3/4] lg:aspect-[4/5] shadow-2xl"
                loading="eager"
              />
              {/* Premium glass card */}
              <div className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-border/50 hidden md:block">
                <p className="text-sm font-medium text-foreground">10+ лет</p>
                <p className="text-xs text-muted-foreground">в работе с людьми и бизнесом</p>
              </div>
              {/* Decorative accent line */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-accent/30 rounded-tr-2xl hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { MessageCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import TypewriterHeading from "@/components/TypewriterHeading";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-noise">
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-secondary/80 to-transparent" />
        <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[80px] animate-glow-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr,0.9fr] gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            {/* Editorial tag line */}
            <div className="flex items-center gap-3 mb-8">
              <span className="accent-line" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Бизнес · Управление · Состояние
              </span>
            </div>

            <TypewriterHeading
              as="h1"
              text="Помогаю предпринимателям находить главное ограничение роста"
              className="font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.6rem] font-semibold leading-[1.1] text-foreground mb-8"
              speed={25}
            />

            <p className="text-base lg:text-lg text-muted-foreground leading-[1.75] mb-12 max-w-lg">
              Убираю хаос в управлении и внутренние барьеры, чтобы бизнес
              двигался системно и без перегруза. Психология, трекинг, методология
              — в&nbsp;одном сопровождении.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group btn-premium bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium text-[15px] tracking-wide flex items-center justify-center gap-3"
              >
                Оставить заявку
                <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="https://t.me/Eugenia_Sergeeva"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border/60 text-foreground px-8 py-4 rounded-md font-medium text-[15px] hover:bg-secondary/50 transition-all duration-300 flex items-center justify-center gap-3 tracking-wide"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Telegram
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              {/* Photo with editorial frame */}
              <div className="relative rounded-lg overflow-hidden aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src={heroImg}
                  alt="Евгения Сергеева — психолог и бизнес-трекер"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle photo overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-3 md:-left-6 glass-card rounded-lg px-5 py-4 animate-subtle-float hidden md:block">
                <p className="text-2xl font-serif font-semibold text-foreground">10+</p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-0.5">лет практики</p>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-accent/20 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

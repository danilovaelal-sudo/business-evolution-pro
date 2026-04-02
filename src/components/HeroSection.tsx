import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import TypewriterHeading from "@/components/TypewriterHeading";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-noise">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 lg:gap-16 items-center">
          {/* Text content — main focus */}
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-line" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Сопровождение для предпринимателей
              </span>
            </div>

            <TypewriterHeading
              as="h1"
              text="Ваш бизнес растёт, а вы — выгораете?"
              className="text-[1.75rem] sm:text-[2.2rem] lg:text-[3rem] xl:text-[3.4rem] font-bold leading-[1.08] text-foreground mb-6"
              speed={25}
            />

            <p className="text-lg lg:text-xl text-accent font-medium mb-4 leading-snug">
              Нахожу главное ограничение роста и убираю его — системно, без перегруза.
            </p>

            <p className="text-base text-muted-foreground leading-[1.75] mb-10 max-w-lg">
              Психология, бизнес-трекинг и методология — в одном сопровождении.
              Вы получаете ясность, фокус и движение к результату вместо хаоса и тревоги.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group btn-premium bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-[15px] tracking-wide flex items-center justify-center gap-3"
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

            {/* Trust markers */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border/40">
              <div>
                <p className="text-2xl font-bold text-accent">10+</p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-0.5">лет практики</p>
              </div>
              <div className="w-px h-10 bg-border/40" />
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-0.5">клиентов</p>
              </div>
              <div className="w-px h-10 bg-border/40" />
              <div>
                <p className="text-2xl font-bold text-foreground">3 в 1</p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-0.5">подхода</p>
              </div>
            </div>
          </div>

          {/* Photo — supporting element, smaller */}
          <div className="order-1 lg:order-2 animate-on-scroll flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-[40px]" />
              <div className="relative rounded-2xl overflow-hidden w-full h-full border border-border/30">
                <img
                  src={heroImg}
                  alt="Евгения Сергеева — психолог и бизнес-трекер"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

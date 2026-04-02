import { ArrowRight } from "lucide-react";

const MidCTA = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="animate-on-scroll card-premium rounded-lg p-10 md:p-14 text-center relative overflow-hidden bg-noise">
          <div className="absolute top-0 right-[20%] w-[300px] h-[200px] bg-accent/[0.06] blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Готовы к ясности<br className="hidden sm:block" /> и системности?
            </h2>
            <p className="text-muted-foreground text-base mb-10 max-w-md mx-auto leading-relaxed">
              Первый шаг — короткий разговор, на котором мы разберём вашу ситуацию
            </p>
            <button
              onClick={scrollToContact}
              className="group btn-premium bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-[15px] tracking-wide hover:opacity-90 transition-all duration-300 inline-flex items-center gap-3"
            >
              Оставить заявку
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;

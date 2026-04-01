import { MoveRight } from "lucide-react";

const MidCTA = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="animate-on-scroll bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
            Готовы к ясности и системности?
          </h2>
          <p className="text-primary-foreground/70 text-base mb-8 max-w-xl mx-auto">
            Первый шаг — короткий разговор, на котором мы разберём вашу ситуацию
          </p>
          <button
            onClick={scrollToContact}
            className="bg-accent text-accent-foreground px-7 py-4 rounded-lg font-medium text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Оставить заявку
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;

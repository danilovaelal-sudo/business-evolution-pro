import { Briefcase, GraduationCap, Heart, Award } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Психолог, бизнес-трекер, бизнес-тренер, консультант",
  },
  {
    icon: Award,
    label: "Опыт работы в Академии ПСБ и Русской Школе Управления",
  },
  {
    icon: GraduationCap,
    label: "Образование в психологии менеджмента + клиническая психология",
  },
  {
    icon: Heart,
    label: "Программы по эмоциональному интеллекту, стресс-менеджменту, публичным выступлениям",
  },
];

const AboutSection = () => (
  <section className="section-padding relative" id="about">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Евгения Сергеева
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.75] max-w-2xl mx-auto">
            Более десяти лет я работаю на стыке психологии, бизнеса и образования.
            Помогаю предпринимателям, руководителям и экспертам находить ясность,
            выстраивать систему и двигаться к результату — без перегруза и хаоса.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 stagger-children">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div key={i} className="animate-on-scroll card-premium rounded-lg p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={16} strokeWidth={1.5} className="text-accent" />
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{h.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

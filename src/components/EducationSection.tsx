import { Award, BookMarked } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

const higher = [
  {
    years: "2000–2005",
    institution: "Институт Гуманитарного Образования (Москва)",
    specialty: "Психолог, преподаватель психологии — Психология менеджмента",
  },
  {
    years: "1995–2000",
    institution: "Московский Государственный Университет Прикладной Биотехнологии",
    specialty: "Инженер — Автоматизация Биотехнических Систем",
  },
];

const additional = [
  { years: "2024 – н.в.", title: "Клинический психолог, РГГУ" },
  { years: "2021–2022", title: "Телесно-голосовая терапия, ИКСР" },
  { years: "2018–2022", title: "Интегративная травматерапия, ИКСР" },
  { years: "2016–2018", title: "Семейное консультирование, ИКСР" },
  { years: "2008", title: "Эриксоновский гипноз — Институт групповой и семейной психологии" },
  { years: "2008", title: "Сертифицированный психотерапевт (120 ч.)" },
  { years: "2007", title: "НЛП-Мастер (160 ч.) — Центр «НЛП в Образовании»" },
];

const EducationSection = () => (
  <section className="section-padding relative bg-noise" id="education">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />

    <div className="container relative z-10">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="accent-line mx-auto mb-6" />
        <TypewriterHeading
          as="h2"
          text="Образование и квалификация"
          className="text-4xl md:text-5xl font-bold text-foreground mb-5"
        />
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Фундаментальное образование и постоянное развитие
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
              <Award size={18} strokeWidth={1.5} className="text-accent" />
            </span>
            <h3 className="text-xl font-bold text-foreground">Высшее образование</h3>
          </div>
          <div className="space-y-4">
            {higher.map((h, i) => (
              <div key={i} className="card-premium rounded-md p-5">
                <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-accent">{h.years}</span>
                <p className="text-sm font-semibold text-foreground mt-2">{h.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">{h.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
              <BookMarked size={18} strokeWidth={1.5} className="text-accent" />
            </span>
            <h3 className="text-xl font-bold text-foreground">Дополнительное образование</h3>
          </div>
          <div className="space-y-2.5">
            {additional.map((a, i) => (
              <div key={i} className="flex items-start gap-3 card-premium rounded-md px-5 py-3.5">
                <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-accent whitespace-nowrap mt-0.5 min-w-[65px]">
                  {a.years}
                </span>
                <p className="text-sm text-foreground/80">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;

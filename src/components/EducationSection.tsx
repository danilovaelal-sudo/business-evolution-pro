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
  { years: "2008", title: "Эриксоновский гипноз — Институт групповой и семейной психологии и психотерапии" },
  { years: "2008", title: "Сертифицированный психотерапевт (120 ч.) — Институт Групповой и Семейной Психологии" },
  { years: "2007", title: "НЛП-Мастер (160 ч.) — Центр «НЛП в Образовании»" },
];

const EducationSection = () => (
  <section className="section-padding" id="education">
    <div className="container">
      <div className="text-center mb-14 animate-on-scroll">
        <TypewriterHeading
          as="h2"
          text="Образование и квалификация"
          className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4"
        />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Фундаментальное образование и постоянное развитие в психологии, бизнесе и терапии
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Высшее образование */}
        <div className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
              <Award size={20} className="text-accent" />
            </span>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Высшее образование
            </h3>
          </div>
          <div className="space-y-5">
            {higher.map((h, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 hover-lift"
              >
                <span className="text-xs font-medium text-accent">{h.years}</span>
                <p className="text-sm font-semibold text-foreground mt-1">
                  {h.institution}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{h.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительное образование */}
        <div className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
              <BookMarked size={20} className="text-accent" />
            </span>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Дополнительное образование
            </h3>
          </div>
          <div className="space-y-3">
            {additional.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 hover-lift"
              >
                <span className="text-xs font-medium text-accent whitespace-nowrap mt-0.5 min-w-[70px]">
                  {a.years}
                </span>
                <p className="text-sm text-foreground">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;

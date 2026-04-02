import { MoveRight } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

const results = [
  { before: "Хаос и реактивное управление", after: "Понятная система и регулярный ритм" },
  { before: "Размытые приоритеты", after: "Ясный фокус и конкретные действия" },
  { before: "Перегруз собственника", after: "Делегирование и снижение нагрузки" },
  { before: "Потолок выручки", after: "Движение к росту через конкретные решения" },
  { before: "Слабая управляемость команды", after: "Дисциплина и вовлечённость" },
  { before: "Неуверенность и внутренние барьеры", after: "Устойчивость и ясность в решениях" },
];

const ResultsSection = () => (
  <section className="section-padding relative bg-noise">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />

    <div className="container relative z-10">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="accent-line mx-auto mb-6" />
        <TypewriterHeading
          as="h2"
          text="Какие результаты получает клиент"
          className="text-4xl md:text-5xl font-bold text-foreground mb-5"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto stagger-children">
        {results.map((r, i) => (
          <div key={i} className="animate-on-scroll card-premium rounded-lg p-6">
            <p className="text-sm text-muted-foreground/50 line-through decoration-muted-foreground/20 mb-4 leading-relaxed">
              {r.before}
            </p>
            <div className="flex items-center gap-3">
              <MoveRight size={14} strokeWidth={1.5} className="text-accent shrink-0" />
              <p className="text-sm font-medium text-foreground leading-relaxed">{r.after}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;

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
  <section className="section-padding bg-secondary/50">
    <div className="container">
      <div className="text-center mb-14 animate-on-scroll">
        <TypewriterHeading as="h2" text="Какие результаты получает клиент" className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {results.map((r, i) => (
          <div
            key={i}
            className="animate-on-scroll bg-card border border-border rounded-xl p-6 hover-lift"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <p className="text-sm text-muted-foreground line-through decoration-muted-foreground/30 mb-3">
              {r.before}
            </p>
            <div className="flex items-center gap-2">
              <ArrowRight size={14} className="text-accent shrink-0" />
              <p className="text-sm font-medium text-foreground">{r.after}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;

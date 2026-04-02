import { Target, Brain, Zap, Users, Mic } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

const advantages = [
  {
    icon: Brain,
    title: "Бизнес + психология",
    desc: "Работаю на пересечении управленческих инструментов и глубинной психологии — там, где одного подхода недостаточно.",
  },
  {
    icon: Target,
    title: "10+ лет практики",
    desc: "Опыт в Академии ПСБ, Русской Школе Управления, частной практике и корпоративном обучении.",
  },
  {
    icon: Zap,
    title: "Системный подход",
    desc: "Не только стратегия и процессы, но и внутренние ограничения, которые блокируют рост.",
  },
  {
    icon: Users,
    title: "Работа с командами",
    desc: "Экспертиза в делегировании, лидерстве и повышении управляемости команды.",
  },
  {
    icon: Mic,
    title: "Коммуникация и проявленность",
    desc: "Сильная экспертиза в публичных выступлениях, переговорах и личном бренде.",
  },
];

const DifferenceSection = () => (
  <section className="section-padding relative bg-noise" id="difference">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />

    <div className="container relative z-10">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="accent-line mx-auto mb-6" />
        <TypewriterHeading
          as="h2"
          text="В чём моё отличие"
          className="text-4xl md:text-5xl font-bold text-foreground mb-5"
        />
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Я работаю там, где одних инструментов управления недостаточно, а одной терапии — мало
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto stagger-children">
        {advantages.map((a, i) => {
          const Icon = a.icon;
          return (
            <div
              key={i}
              className={`animate-on-scroll card-premium rounded-lg p-6 md:p-7 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Icon size={18} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-base">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default DifferenceSection;

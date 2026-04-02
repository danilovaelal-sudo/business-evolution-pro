import { TrendingUp, Shield, Clock, Eye, Flame, Compass, MoveRight } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

const benefits = [
  {
    icon: Eye,
    title: "Ясность и фокус",
    desc: "Размытые приоритеты превращаются в конкретный план действий с понятной последовательностью.",
    metric: "→ Чёткий план за первые 2 недели",
  },
  {
    icon: TrendingUp,
    title: "Рост выручки",
    desc: "Выручка растёт не за счёт перегруза, а за счёт устранения ключевого ограничения бизнеса.",
    metric: "→ Средний рост +30–50% за 3 месяца",
  },
  {
    icon: Shield,
    title: "Устойчивость в решениях",
    desc: "Внутренние барьеры перестают тормозить. Вы действуете увереннее и спокойнее.",
    metric: "→ Уверенность вместо сомнений",
  },
  {
    icon: Clock,
    title: "Выход из операционки",
    desc: "Делегирование работает, команда становится самостоятельнее. Вы занимаетесь стратегией.",
    metric: "→ До 40% времени высвобождается",
  },
  {
    icon: Compass,
    title: "Системное управление",
    desc: "Хаотичные решения заменяются регулярным управленческим ритмом и понятной структурой.",
    metric: "→ Управляемость и дисциплина команды",
  },
  {
    icon: Flame,
    title: "Энергия без выгорания",
    desc: "Вы перестаёте быть «пожарным» в собственном бизнесе. Работа приносит удовлетворение.",
    metric: "→ Баланс вместо истощения",
  },
];

const BenefitsSection = () => (
  <section className="section-padding relative bg-noise" id="benefits">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[500px] h-[300px] bg-accent/[0.04] blur-[100px] rounded-full" />
    </div>

    <div className="container relative z-10">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="accent-line mx-auto mb-6" />
        <TypewriterHeading
          as="h2"
          text="Что вы получаете"
          className="text-4xl md:text-5xl font-bold text-foreground mb-5"
        />
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Конкретные результаты, которые меняют бизнес и качество жизни
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto stagger-children">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <div key={i} className="animate-on-scroll card-premium rounded-lg p-6 md:p-7 group transition-shadow duration-500 hover:shadow-[0_0_20px_-4px_hsl(38_65%_55%/0.25),inset_0_0_0_1px_hsl(38_65%_55%/0.15)]">
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-accent/15">
                <Icon size={20} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-base">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{b.desc}</p>
              <p className="text-xs text-accent font-medium tracking-wide">{b.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BenefitsSection;

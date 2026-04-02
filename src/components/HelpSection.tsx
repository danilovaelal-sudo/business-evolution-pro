import { Rocket, Workflow, Sparkles } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

const columns = [
  {
    icon: Rocket,
    title: "Бизнес",
    items: [
      "Поиск узких мест роста",
      "Расстановка приоритетов",
      "Фокусировка на главном",
      "Работа с ключевым ограничением",
    ],
  },
  {
    icon: Workflow,
    title: "Управление",
    items: [
      "Система планирования и контроля",
      "Снижение хаоса в процессах",
      "Повышение управляемости команды",
      "Лидерство и делегирование",
    ],
  },
  {
    icon: Sparkles,
    title: "Состояние и проявленность",
    items: [
      "Работа с перегрузом и выгоранием",
      "Внутреннее сопротивление росту",
      "Страх проявленности и публичности",
      "Усиление коммуникации",
    ],
  },
];

const HelpSection = () => (
  <section className="section-padding relative" id="help">
    <div className="container">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="accent-line mx-auto mb-6" />
        <TypewriterHeading
          as="h2"
          text="С чем я помогаю"
          className="text-4xl md:text-5xl font-bold text-foreground mb-5"
        />
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Три направления в одном сопровождении — для устойчивых изменений
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6 stagger-children">
        {columns.map((col) => {
          const Icon = col.icon;
          return (
            <div key={col.title} className="animate-on-scroll card-premium rounded-lg p-7 md:p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Icon size={20} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{col.title}</h3>
              <ul className="space-y-3.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HelpSection;

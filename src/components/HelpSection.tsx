import { TrendingUp, Settings, Heart } from "lucide-react";

const columns = [
  {
    icon: TrendingUp,
    title: "Бизнес",
    items: [
      "Поиск узких мест роста",
      "Расстановка приоритетов",
      "Фокусировка на главном",
      "Работа с ключевым ограничением",
    ],
  },
  {
    icon: Settings,
    title: "Управление",
    items: [
      "Система планирования и контроля",
      "Снижение хаоса в процессах",
      "Повышение управляемости команды",
      "Лидерство и делегирование",
    ],
  },
  {
    icon: Heart,
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
  <section className="section-padding" id="help">
    <div className="container">
      <div className="text-center mb-14 animate-on-scroll">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          С чем я помогаю
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Три направления в одном сопровождении — для устойчивых изменений
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {columns.map((col, i) => {
          const Icon = col.icon;
          return (
            <div
              key={col.title}
              className="animate-on-scroll bg-card border border-border rounded-xl p-7 hover-lift"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Icon size={22} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
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

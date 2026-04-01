import TypewriterHeading from "@/components/TypewriterHeading";

const problems = [
  {
    title: "Бизнес растёт хаотично",
    desc: "Результаты нестабильны, нет понятной системы, всё зависит от ситуации и настроения.",
  },
  {
    title: "Выручка упёрлась в потолок",
    desc: "Вы делаете больше, но результат не меняется. Непонятно, что именно тормозит рост.",
  },
  {
    title: "Собственник завязан на операционке",
    desc: "Без вас ничего не двигается. Вы — и стратег, и исполнитель, и пожарный.",
  },
  {
    title: "Команда есть, но управляемость слабая",
    desc: "Люди работают, но инициативы нет. Контроль отнимает слишком много энергии.",
  },
  {
    title: "Много идей, мало фокуса",
    desc: "Новые проекты начинаются раньше, чем заканчиваются старые. Размытие ресурса.",
  },
  {
    title: "Всё держится на вас",
    desc: "Перегруз, усталость, ощущение ловушки. Хочется системы, а не подвига каждый день.",
  },
];

const ProblemsSection = () => (
  <section className="section-padding relative bg-noise" id="problems">
    {/* Subtle depth gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 pointer-events-none" />

    <div className="container relative z-10">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="accent-line mx-auto mb-6" />
        <TypewriterHeading
          as="h2"
          text="Узнаёте себя?"
          className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-5"
        />
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Сопровождение подходит, если хотя бы два пункта — про вас
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 stagger-children">
        {problems.map((p, i) => (
          <div
            key={i}
            className="animate-on-scroll card-premium rounded-lg p-6 md:p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-md bg-accent/8 flex items-center justify-center">
                <span className="text-accent font-serif font-semibold text-sm">{i + 1}</span>
              </span>
              <div className="h-px flex-1 bg-border/50" />
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-2 text-lg leading-tight">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;

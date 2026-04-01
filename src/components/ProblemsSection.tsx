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
    title: "Всё держится на вас — и становится всё тяжелее",
    desc: "Перегруз, усталость, ощущение ловушки. Хочется системы, а не подвига каждый день.",
  },
];

const ProblemsSection = () => (
  <section className="section-padding bg-secondary/50" id="problems">
    <div className="container">
      <div className="text-center mb-14 animate-on-scroll">
        <TypewriterHeading as="h2" text="Узнаёте себя?" className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Сопровождение подходит, если хотя бы два пункта — про вас
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {problems.map((p, i) => (
          <div
            key={i}
            className="animate-on-scroll bg-card rounded-xl p-6 border border-border hover-lift"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-accent font-serif font-semibold text-lg">{i + 1}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-base">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;

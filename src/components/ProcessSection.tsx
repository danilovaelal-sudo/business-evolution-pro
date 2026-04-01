const steps = [
  {
    num: "01",
    title: "Стартовая диагностика",
    desc: "Разбираем текущую ситуацию: бизнес, управление, состояние. Определяем точку, из которой начинаем.",
  },
  {
    num: "02",
    title: "Ключевое ограничение",
    desc: "Находим главный фактор, который тормозит рост. Это может быть процесс, решение, привычка или убеждение.",
  },
  {
    num: "03",
    title: "Цели и фокус",
    desc: "Фиксируем конкретные цели и приоритеты на период сопровождения. Убираем лишнее.",
  },
  {
    num: "04",
    title: "Регулярные встречи",
    desc: "Еженедельные или раз в две недели сессии с разбором задач, решений и состояния.",
  },
  {
    num: "05",
    title: "Сопровождение решений",
    desc: "Между встречами — поддержка внедрения, обратная связь, помощь в сложных ситуациях.",
  },
  {
    num: "06",
    title: "Корректировка курса",
    desc: "Гибкая адаптация плана по ходу движения. Работа с тем, что возникает в процессе.",
  },
];

const ProcessSection = () => (
  <section className="section-padding" id="process">
    <div className="container">
      <div className="text-center mb-14 animate-on-scroll">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Как проходит сопровождение
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Структурированный процесс с фокусом на результат
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="animate-on-scroll flex gap-6 mb-8 last:mb-0"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-primary-foreground text-sm font-semibold">{step.num}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-full bg-border mt-2" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="font-semibold text-foreground text-base mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

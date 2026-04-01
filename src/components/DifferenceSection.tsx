import differenceImg from "@/assets/difference.jpg";

const advantages = [
  "Сочетание бизнес-трекинга, психологии и обучающей методологии",
  "Опыт работы с людьми, командами и развитием — более 10 лет",
  "Системный подход: не только стратегия, но и внутренние ограничения",
  "Сильная экспертиза в коммуникации, обучении и публичных выступлениях",
  "Сопровождение ради внедрения и движения к результату, а не ради разговоров",
];

const DifferenceSection = () => (
  <section className="section-padding bg-secondary/50" id="difference">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-on-scroll">
          <img
            src={differenceImg}
            alt="Евгения Сергеева — профессиональный подход"
            className="rounded-2xl object-cover aspect-[4/5] w-full"
            loading="lazy"
          />
        </div>
        <div className="animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            В чём моё отличие
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Я работаю на пересечении бизнеса и психологии — там, где одних инструментов
            управления недостаточно, а одной терапии — мало.
          </p>
          <ul className="space-y-4">
            {advantages.map((a, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </span>
                <span className="text-foreground text-sm leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default DifferenceSection;

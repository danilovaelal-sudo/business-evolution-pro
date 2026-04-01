import differenceImg from "@/assets/difference.jpg";
import TypewriterHeading from "@/components/TypewriterHeading";

const advantages = [
  "Сочетание бизнес-трекинга, психологии и обучающей методологии",
  "Опыт работы с людьми, командами и развитием — более 10 лет",
  "Системный подход: не только стратегия, но и внутренние ограничения",
  "Сильная экспертиза в коммуникации, обучении и публичных выступлениях",
  "Сопровождение ради внедрения и движения к результату",
];

const DifferenceSection = () => (
  <section className="section-padding relative bg-noise" id="difference">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 pointer-events-none" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="animate-on-scroll">
          <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
            <img
              src={differenceImg}
              alt="Евгения Сергеева — профессиональный подход"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-transparent" />
          </div>
        </div>
        <div className="animate-on-scroll">
          <span className="accent-line mb-6" />
          <TypewriterHeading
            as="h2"
            text="В чём моё отличие"
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6"
          />
          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-[1.75]">
            Я работаю на пересечении бизнеса и психологии — там, где одних инструментов
            управления недостаточно, а одной терапии — мало.
          </p>
          <ul className="space-y-5">
            {advantages.map((a, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-md bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
                <span className="text-foreground/90 text-sm leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default DifferenceSection;

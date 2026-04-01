import aboutImg from "@/assets/about.jpg";

const facts = [
  "Психолог, бизнес-трекер, бизнес-тренер, консультант",
  "Опыт работы в Академии ПСБ и Русской Школе Управления",
  "Психологическая практика и преподавание",
  "Программы по эмоциональному интеллекту, стресс-менеджменту, креативному мышлению, публичным выступлениям",
  "Образование в психологии менеджмента",
  "Дополнительное обучение: клиническая психология, интегративная травматерапия, семейное консультирование, телесно-голосовая терапия",
];

const AboutSection = () => (
  <section className="section-padding relative" id="about">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="animate-on-scroll order-2 lg:order-1">
          <span className="accent-line mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Евгения<br />Сергеева
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.75] mb-10">
            Более десяти лет я работаю на стыке психологии, бизнеса и образования.
            Помогаю предпринимателям, руководителям и экспертам находить ясность,
            выстраивать систему и двигаться к результату — без перегруза и хаоса.
          </p>
          <ul className="space-y-3.5">
            {facts.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-on-scroll order-1 lg:order-2 flex justify-center">
          <div className="relative rounded-lg overflow-hidden aspect-[3/4] w-full max-w-md">
            <img
              src={aboutImg}
              alt="Евгения Сергеева"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

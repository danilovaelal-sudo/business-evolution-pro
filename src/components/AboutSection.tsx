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
  <section className="section-padding" id="about">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-on-scroll order-2 lg:order-1">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Евгения Сергеева
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Более десяти лет я работаю на стыке психологии, бизнеса и образования.
            Помогаю предпринимателям, руководителям и экспертам находить ясность,
            выстраивать систему и двигаться к результату — без перегруза и хаоса.
          </p>
          <ul className="space-y-3 mb-8">
            {facts.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-on-scroll order-1 lg:order-2 flex justify-center">
          <img
            src={aboutImg}
            alt="Евгения Сергеева"
            className="rounded-2xl object-cover aspect-[3/4] w-full max-w-md shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

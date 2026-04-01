import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Алексей М.",
    role: "Владелец производственной компании",
    text: "Работали с Евгенией три месяца. Я зашёл с ощущением, что тону в операционке и не вижу выхода. Уже к концу первого месяца появилась ясность — что делать, что делегировать, что вообще убрать. Спокойный, системный подход без лишнего давления.",
  },
  {
    name: "Марина К.",
    role: "Эксперт, онлайн-проект",
    text: "Евгения помогла мне разобраться не только с бизнес-процессами, но и с внутренними ограничениями, которые мешали расти. Я наконец начала делегировать и перестала бояться масштабирования. Очень ценный опыт.",
  },
  {
    name: "Дмитрий С.",
    role: "Руководитель IT-направления",
    text: "Ценно, что Евгения видит и бизнес-задачи, и психологическую сторону. Мне это дало не просто план действий, а понимание, почему я раньше не мог эти действия выполнить. Рекомендую всем, кто застрял.",
  },
  {
    name: "Ольга В.",
    role: "Собственник сети салонов",
    text: "После сопровождения я впервые за три года ушла в отпуск и бизнес не остановился. Появилась система, команда стала самостоятельнее. Евгения работает очень бережно, но при этом точно и по делу.",
  },
  {
    name: "Игорь Т.",
    role: "Предприниматель, сфера услуг",
    text: "Пришёл с запросом на рост выручки, а в итоге полностью перестроил подход к управлению. Евгения мастерски сочетает глубину и практичность. Работать с ней — это не про мотивацию, а про реальные изменения.",
  },
  {
    name: "Наталья Р.",
    role: "Коуч, частная практика",
    text: "Евгения — редкий специалист, который одновременно понимает и бизнес-логику, и человеческую психологию. Благодаря сопровождению я выстроила стратегию развития практики, перестала распыляться и увеличила доход вдвое за полгода. Очень рекомендую.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding" id="testimonials">
    <div className="container">
      <div className="text-center mb-14 animate-on-scroll">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Отзывы клиентов
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="animate-on-scroll bg-card border border-border rounded-xl p-6 hover-lift flex flex-col"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              «{t.text}»
            </p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

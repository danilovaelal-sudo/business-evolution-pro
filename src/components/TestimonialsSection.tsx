import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

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

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="bg-card border border-border rounded-xl p-6 md:p-7 hover-lift flex flex-col h-full">
    <Quote size={24} className="text-accent/30 mb-3 shrink-0" />
    <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed mb-5 flex-1 tracking-normal">
      {t.text}
    </p>
    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
      <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
        <span className="text-accent font-semibold text-sm">{t.name[0]}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground tracking-tight">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.role}</p>
      </div>
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={12} className="fill-accent text-accent" />
        ))}
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Реальные истории предпринимателей и руководителей
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden animate-on-scroll">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_85%] min-w-0">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === selectedIndex ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

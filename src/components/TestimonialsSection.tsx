import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Алексей М.",
    role: "Владелец производственной компании",
    text: "Работали с Евгенией три месяца. Я зашёл с ощущением, что тону в операционке и не вижу выхода. Уже к концу первого месяца появилась ясность — что делать, что делегировать, что вообще убрать.",
  },
  {
    name: "Марина К.",
    role: "Эксперт, онлайн-проект",
    text: "Евгения помогла мне разобраться не только с бизнес-процессами, но и с внутренними ограничениями, которые мешали расти. Я наконец начала делегировать и перестала бояться масштабирования.",
  },
  {
    name: "Дмитрий С.",
    role: "Руководитель IT-направления",
    text: "Ценно, что Евгения видит и бизнес-задачи, и психологическую сторону. Мне это дало не просто план действий, а понимание, почему я раньше не мог эти действия выполнить.",
  },
  {
    name: "Ольга В.",
    role: "Собственник сети салонов",
    text: "После сопровождения я впервые за три года ушла в отпуск и бизнес не остановился. Появилась система, команда стала самостоятельнее.",
  },
  {
    name: "Игорь Т.",
    role: "Предприниматель, сфера услуг",
    text: "Пришёл с запросом на рост выручки, а в итоге полностью перестроил подход к управлению. Евгения мастерски сочетает глубину и практичность.",
  },
  {
    name: "Наталья Р.",
    role: "Коуч, частная практика",
    text: "Благодаря сопровождению я выстроила стратегию развития практики, перестала распыляться и увеличила доход вдвое за полгода.",
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="card-premium rounded-lg p-6 md:p-7 flex flex-col h-full">
    <Quote size={20} strokeWidth={1} className="text-accent/30 mb-4 shrink-0" />
    <p className="text-sm md:text-[15px] text-foreground/70 leading-[1.75] mb-6 flex-1 italic font-light">
      {t.text}
    </p>
    <div className="flex items-center gap-3 pt-5 border-t border-border/40">
      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
        <span className="text-accent font-bold text-sm">{t.name[0]}</span>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground tracking-tight">{t.name}</p>
        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.08em]">{t.role}</p>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={11} className="fill-accent/70 text-accent/70" />
        ))}
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="section-padding relative" id="testimonials">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">Отзывы клиентов</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Реальные истории предпринимателей и руководителей
          </p>
        </div>

        <div className="md:hidden animate-on-scroll">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_88%] min-w-0">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-md border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300" aria-label="Предыдущий отзыв">
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-accent w-4" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={scrollNext} className="w-10 h-10 rounded-md border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300" aria-label="Следующий отзыв">
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {testimonials.map((t, i) => (
            <div key={i} className="animate-on-scroll"><TestimonialCard t={t} /></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

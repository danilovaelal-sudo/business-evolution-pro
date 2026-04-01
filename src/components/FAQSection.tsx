import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "С кем вы работаете?",
    a: "С предпринимателями, экспертами, собственниками бизнеса и руководителями, которые хотят навести порядок в управлении, найти точки роста и убрать внутренние ограничения.",
  },
  {
    q: "Как понять, подойдёт ли мне сопровождение?",
    a: "На первом контакте мы разберём вашу ситуацию, задачи и ожидания. Если формат подходит — начнём. Если нет — я честно скажу об этом.",
  },
  {
    q: "Работа проходит онлайн или офлайн?",
    a: "Сопровождение проходит онлайн. Это позволяет работать из любой точки, без привязки к городу и графику.",
  },
  {
    q: "Сколько длится работа?",
    a: "Стандартный формат — от 2 до 4 месяцев. Длительность зависит от задач и глубины запроса.",
  },
  {
    q: "Что происходит после заявки?",
    a: "Я свяжусь с вами в течение 1–2 дней. Мы назначим короткий вводный звонок, на котором обсудим вашу ситуацию.",
  },
  {
    q: "Чем сопровождение отличается от разовой консультации?",
    a: "Разовая консультация — это точечная помощь. Сопровождение — это процесс: регулярные встречи, поддержка внедрения, работа с тем, что возникает по ходу движения. Результат глубже и устойчивее.",
  },
];

const FAQSection = () => (
  <section className="section-padding relative bg-noise" id="faq">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 pointer-events-none" />

    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="accent-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-5">
            Частые вопросы
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2.5">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="animate-on-scroll card-premium rounded-md px-6 data-[state=open]:border-border"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5 tracking-tight text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-[1.75] pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;

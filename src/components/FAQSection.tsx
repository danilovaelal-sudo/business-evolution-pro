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
    a: "Стандартный формат — от 2 до 4 месяцев. Длительность зависит от задач и глубины запроса. Обсуждается индивидуально.",
  },
  {
    q: "Что происходит после заявки?",
    a: "Я свяжусь с вами в течение 1–2 дней. Мы назначим короткий вводный звонок, на котором обсудим вашу ситуацию и определим, подходит ли формат.",
  },
  {
    q: "Чем сопровождение отличается от разовой консультации?",
    a: "Разовая консультация — это точечная помощь. Сопровождение — это процесс: регулярные встречи, поддержка внедрения, работа с тем, что возникает по ходу движения. Результат глубже и устойчивее.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-secondary/50" id="faq">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center animate-on-scroll">
          Частые вопросы
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="animate-on-scroll bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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

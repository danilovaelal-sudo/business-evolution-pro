import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    num: "01",
    title: "Стартовая диагностика",
    desc: "Разбираем текущую ситуацию: бизнес, управление, состояние.",
    details:
      "На первой встрече мы проводим глубокий анализ вашей текущей ситуации: структура бизнеса, ключевые процессы, управленческие решения, эмоциональное состояние и внутренние ресурсы. Используются диагностические инструменты из бизнес-трекинга и психологии менеджмента. По итогу формируется карта текущего положения — основа для дальнейшей работы.",
  },
  {
    num: "02",
    title: "Ключевое ограничение",
    desc: "Находим главный фактор, который тормозит рост.",
    details:
      "Вместе выявляем «узкое горлышко» — то самое ограничение, которое не даёт бизнесу и вам лично двигаться дальше. Это может быть неэффективный процесс, страх делегирования, выгорание, избегание сложных решений или устаревшая бизнес-модель. Работаем на стыке бизнес-анализа и психологии, чтобы увидеть полную картину.",
  },
  {
    num: "03",
    title: "Цели и фокус",
    desc: "Фиксируем конкретные цели и приоритеты на период сопровождения.",
    details:
      "Формулируем измеримые цели на 2–4 месяца. Определяем 2–3 ключевых приоритета, на которых будет сосредоточена работа. Убираем всё, что отвлекает от главного. Вы получаете чёткий фокус и понимание, куда направлять энергию. План гибкий — корректируется по мере движения.",
  },
  {
    num: "04",
    title: "Регулярные встречи",
    desc: "Еженедельные сессии с разбором задач, решений и состояния.",
    details:
      "Встречи длятся 60–90 минут и проходят онлайн. На каждой сессии мы разбираем: что произошло за период, какие решения были приняты, что вызвало затруднения. Работаем и с бизнес-задачами, и с внутренним состоянием. Формат — живой диалог, а не лекция.",
  },
  {
    num: "05",
    title: "Сопровождение решений",
    desc: "Между встречами — поддержка внедрения и обратная связь.",
    details:
      "Между сессиями вы можете написать мне в мессенджер для быстрой обратной связи по текущим решениям. Это не терапия в переписке, а точечная поддержка: помочь не откладывать, не сворачивать с курса, разобрать срочную ситуацию.",
  },
  {
    num: "06",
    title: "Корректировка курса",
    desc: "Гибкая адаптация плана по ходу движения.",
    details:
      "Жизнь и бизнес не стоят на месте — план адаптируется под реальность. Если появляются новые вызовы, меняются приоритеты или возникает кризис — мы перестраиваем фокус. Раз в месяц проводим ревизию прогресса и при необходимости корректируем цели и подход.",
  },
];

const ProcessSection = () => (
  <section className="section-padding relative" id="process">
    <div className="container">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="accent-line mx-auto mb-6" />
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-5">
          Как проходит сопровождение
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Структурированный процесс с фокусом на результат
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {steps.map((step, i) => (
            <AccordionItem
              key={step.num}
              value={`step-${step.num}`}
              className="animate-on-scroll border-none"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex gap-5 md:gap-7">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-md bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground text-xs font-medium tracking-wider">
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-full bg-border/50 mt-2" />
                  )}
                </div>
                <div className="pb-6 flex-1">
                  <AccordionTrigger className="hover:no-underline p-0 justify-start gap-2 [&[data-state=open]>svg]:rotate-180">
                    <div className="text-left">
                      <h3 className="font-serif font-semibold text-foreground text-lg mb-1 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <p className="text-sm text-muted-foreground/80 leading-[1.75] card-premium rounded-md p-5">
                      {step.details}
                    </p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default ProcessSection;

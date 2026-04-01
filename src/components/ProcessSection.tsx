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
    desc: "Разбираем текущую ситуацию: бизнес, управление, состояние. Определяем точку, из которой начинаем.",
    details:
      "На первой встрече мы проводим глубокий анализ вашей текущей ситуации: структура бизнеса, ключевые процессы, управленческие решения, эмоциональное состояние и внутренние ресурсы. Используются диагностические инструменты из бизнес-трекинга и психологии менеджмента. По итогу формируется карта текущего положения — основа для дальнейшей работы.",
  },
  {
    num: "02",
    title: "Ключевое ограничение",
    desc: "Находим главный фактор, который тормозит рост. Это может быть процесс, решение, привычка или убеждение.",
    details:
      "Вместе выявляем «узкое горлышко» — то самое ограничение, которое не даёт бизнесу и вам лично двигаться дальше. Это может быть неэффективный процесс, страх делегирования, выгорание, избегание сложных решений или устаревшая бизнес-модель. Работаем на стыке бизнес-анализа и психологии, чтобы увидеть полную картину.",
  },
  {
    num: "03",
    title: "Цели и фокус",
    desc: "Фиксируем конкретные цели и приоритеты на период сопровождения. Убираем лишнее.",
    details:
      "Формулируем измеримые цели на 2–4 месяца. Определяем 2–3 ключевых приоритета, на которых будет сосредоточена работа. Убираем всё, что отвлекает от главного. Вы получаете чёткий фокус и понимание, куда направлять энергию. План гибкий — корректируется по мере движения.",
  },
  {
    num: "04",
    title: "Регулярные встречи",
    desc: "Еженедельные или раз в две недели сессии с разбором задач, решений и состояния.",
    details:
      "Встречи длятся 60–90 минут и проходят онлайн. На каждой сессии мы разбираем: что произошло за период, какие решения были приняты, что вызвало затруднения. Работаем и с бизнес-задачами, и с внутренним состоянием. Формат — живой диалог, а не лекция. Вы уходите с конкретными шагами на следующий период.",
  },
  {
    num: "05",
    title: "Сопровождение решений",
    desc: "Между встречами — поддержка внедрения, обратная связь, помощь в сложных ситуациях.",
    details:
      "Между сессиями вы можете написать мне в мессенджер для быстрой обратной связи по текущим решениям. Это не терапия в переписке, а точечная поддержка: помочь не откладывать, не сворачивать с курса, разобрать срочную ситуацию. Вы не остаётесь один на один со сложными моментами.",
  },
  {
    num: "06",
    title: "Корректировка курса",
    desc: "Гибкая адаптация плана по ходу движения. Работа с тем, что возникает в процессе.",
    details:
      "Жизнь и бизнес не стоят на месте — план адаптируется под реальность. Если появляются новые вызовы, меняются приоритеты или возникает кризис — мы перестраиваем фокус. Раз в месяц проводим ревизию прогресса и при необходимости корректируем цели и подход.",
  },
];

const ProcessSection = () => (
  <section className="section-padding" id="process">
    <div className="container">
      <div className="text-center mb-14 animate-on-scroll">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Как проходит сопровождение
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Структурированный процесс с фокусом на результат
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {steps.map((step, i) => (
            <AccordionItem
              key={step.num}
              value={`step-${step.num}`}
              className="animate-on-scroll border-none"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground text-sm font-semibold">
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-4 flex-1">
                  <AccordionTrigger className="hover:no-underline p-0 justify-start gap-2 [&[data-state=open]>svg]:rotate-180">
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground text-base mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4">
                    <p className="text-sm text-muted-foreground/80 leading-relaxed bg-secondary/50 rounded-lg p-4 border border-border/50">
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

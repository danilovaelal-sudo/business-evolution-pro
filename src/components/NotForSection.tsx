import { X } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

const items = [
  "Ищете волшебную кнопку и быстрый результат без усилий",
  "Не готовы смотреть на реальные процессы, ограничения и узкие места",
  "Хотите только мотивацию без внедрения и конкретных действий",
  "Не готовы брать ответственность за изменения в своём бизнесе и жизни",
];

const NotForSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container">
      <div className="max-w-3xl mx-auto animate-on-scroll">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
          Для кого не подойдёт
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
            >
              <X size={18} className="text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NotForSection;

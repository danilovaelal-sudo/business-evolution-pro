import { useState, FormEvent } from "react";
import { MessageCircle, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import portrait3 from "@/assets/portrait3.jpg";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    request: "",
    time: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Укажите ваше имя";
    if (!formData.phone.trim()) e.phone = "Укажите телефон";
    else if (!/^[\d\s\-\+\(\)]{7,}$/.test(formData.phone.trim())) e.phone = "Некорректный телефон";
    if (!formData.email.trim()) e.email = "Укажите email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) e.email = "Некорректный email";
    if (!formData.consent) e.consent = "Необходимо согласие";
    return e;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (honeypot) return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");

    try {
      // Send form data via mailto as fallback
      const subject = encodeURIComponent("Заявка на сопровождение от " + formData.name);
      const body = encodeURIComponent(
        `Имя: ${formData.name}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\nЗапрос: ${formData.request}\nУдобное время: ${formData.time}`
      );
      window.open(`mailto:eu-25@mail.ru?subject=${subject}&body=${body}`, "_self");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  if (status === "success") {
    return (
      <section className="section-padding" id="contact">
        <div className="container">
          <div className="max-w-xl mx-auto text-center animate-on-scroll">
            <CheckCircle2 size={48} className="text-accent mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Заявка отправлена
            </h2>
            <p className="text-muted-foreground text-lg">
              Спасибо за доверие. Я свяжусь с вами в ближайшее время, чтобы обсудить вашу ситуацию и определить следующий шаг.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Начните с первого шага
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              На вводном разговоре мы разберём вашу ситуацию, задачи и определим, подходит ли
              формат сопровождения. Это бесплатно и ни к чему не обязывает.
            </p>
            <a
              href="https://t.me/Eugenia_Sergeeva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors mb-8"
            >
              <Send size={16} />
              Написать в Telegram
            </a>
            <img
              src={portrait3}
              alt="Евгения Сергеева"
              className="rounded-xl object-contain w-full max-w-md hidden lg:block"
              loading="lazy"
            />
          </div>

          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Имя *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                  placeholder="Как к вам обращаться"
                  maxLength={100}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                  placeholder="+7 (___) ___-__-__"
                  maxLength={20}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                  placeholder="your@email.com"
                  maxLength={255}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Опишите ваш запрос</label>
                <textarea
                  value={formData.request}
                  onChange={(e) => updateField("request", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 min-h-[100px] resize-y"
                  placeholder="С чем хотите разобраться?"
                  maxLength={1000}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Удобное время для связи</label>
                <input
                  type="text"
                  value={formData.time}
                  onChange={(e) => updateField("time", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                  placeholder="Например, будни после 18:00"
                  maxLength={100}
                />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => updateField("consent", e.target.checked)}
                    className="mt-1 rounded border-input"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Я согласен(а) на{" "}
                    <a href="#privacy" className="underline hover:text-foreground">обработку персональных данных</a>
                    {" "}в соответствии с{" "}
                    <a href="#privacy" className="underline hover:text-foreground">политикой конфиденциальности</a>
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-destructive mt-1">{errors.consent}</p>}
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/5 rounded-lg p-3">
                  <AlertCircle size={16} />
                  Не удалось отправить заявку. Попробуйте ещё раз или напишите в Telegram.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-medium text-base hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Оставить заявку"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { useState, FormEvent } from "react";
import { MessageCircle, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

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
    if (errors[field]) setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  const inputClasses = "w-full rounded-md border border-border/60 bg-secondary/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300";

  if (status === "success") {
    return (
      <section className="section-padding" id="contact">
        <div className="container">
          <div className="max-w-xl mx-auto text-center animate-on-scroll">
            <CheckCircle2 size={40} strokeWidth={1.5} className="text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Заявка отправлена</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Спасибо за доверие. Я свяжусь с вами в ближайшее время.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding relative" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="animate-on-scroll">
            <span className="accent-line mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Начните<br />с первого шага
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.75] mb-10 max-w-md">
              На вводном разговоре мы разберём вашу ситуацию, задачи и определим, подходит ли
              формат сопровождения. Это бесплатно и ни к чему не обязывает.
            </p>

            {/* Visual element instead of photo */}
            <div className="hidden lg:block mt-12">
              <div className="card-premium rounded-lg p-6 max-w-sm">
                <p className="text-accent text-sm font-semibold mb-2">Бесплатная диагностика</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  30-минутный разговор, на котором разберём вашу ситуацию и определим точки роста
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="card-premium rounded-lg p-6 md:p-8 space-y-5">
              <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] font-medium text-foreground mb-2 block">Имя *</label>
                <input type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} className={inputClasses} placeholder="Как к вам обращаться" maxLength={100} />
                {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] font-medium text-foreground mb-2 block">Телефон *</label>
                <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClasses} placeholder="+7 (___) ___-__-__" maxLength={20} />
                {errors.phone && <p className="text-xs text-destructive mt-1.5">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] font-medium text-foreground mb-2 block">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className={inputClasses} placeholder="your@email.com" maxLength={255} />
                {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] font-medium text-foreground mb-2 block">Опишите ваш запрос</label>
                <textarea value={formData.request} onChange={(e) => updateField("request", e.target.value)} className={`${inputClasses} min-h-[100px] resize-y`} placeholder="С чем хотите разобраться?" maxLength={1000} />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] font-medium text-foreground mb-2 block">Удобное время для связи</label>
                <input type="text" value={formData.time} onChange={(e) => updateField("time", e.target.value)} className={inputClasses} placeholder="Например, будни после 18:00" maxLength={100} />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.consent} onChange={(e) => updateField("consent", e.target.checked)} className="mt-1 rounded border-border/60 accent-accent" />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Я согласен(а) на <a href="#privacy" className="underline hover:text-foreground transition-colors">обработку персональных данных</a>
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-destructive mt-1.5">{errors.consent}</p>}
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-md p-3">
                  <AlertCircle size={14} strokeWidth={1.5} />
                  Не удалось отправить заявку. Попробуйте ещё раз или напишите в Telegram.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group w-full btn-premium bg-accent text-accent-foreground px-6 py-4 rounded-md font-semibold text-[15px] tracking-wide disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {status === "loading" ? (
                  <><Loader2 size={16} className="animate-spin" /> Отправка...</>
                ) : (
                  <>Записаться на разбор <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" /></>
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

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const SiteFooter = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="relative bg-dark-section text-primary-foreground py-20 bg-noise overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 left-[30%] w-[300px] h-[200px] bg-accent/[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-2">Евгения Сергеева</h3>
              <p className="text-primary-foreground/50 text-[11px] uppercase tracking-[0.15em]">
                Психолог · Бизнес-трекер · Консультант
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="https://t.me/Eugenia_Sergeeva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                Telegram
              </a>
              <a
                href="tel:+79265622587"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
              >
                <Phone size={15} strokeWidth={1.5} />
                +7 (926) 562-25-87
              </a>
              <a
                href="mailto:eu-25@mail.ru"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail size={15} strokeWidth={1.5} />
                eu-25@mail.ru
              </a>
            </div>
            <div className="space-y-3 text-sm text-primary-foreground/40">
              <button
                onClick={() => setShowPrivacy(true)}
                className="block hover:text-primary-foreground/70 transition-colors duration-300"
              >
                Политика конфиденциальности
              </button>
              <button
                onClick={() => setShowPrivacy(true)}
                className="block hover:text-primary-foreground/70 transition-colors duration-300"
              >
                Согласие на обработку данных
              </button>
            </div>
          </div>
          <div className="section-divider mt-12 mb-8 opacity-20" />
          <div className="text-center text-[11px] text-primary-foreground/30 uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} Евгения Сергеева. Все права защищены.
          </div>
        </div>
      </footer>

      {showPrivacy && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-card rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6" id="privacy">
              Политика конфиденциальности
            </h2>
            <div className="text-sm text-muted-foreground space-y-4 leading-[1.75]">
              <p>
                Настоящая политика конфиденциальности определяет порядок обработки и защиты
                персональных данных пользователей сайта Евгении Сергеевой.
              </p>
              <h3 className="font-semibold text-foreground">1. Сбор данных</h3>
              <p>
                Мы собираем только те данные, которые вы добровольно предоставляете через форму
                заявки на сайте: имя, телефон, электронную почту, описание запроса и удобное
                время для связи.
              </p>
              <h3 className="font-semibold text-foreground">2. Использование данных</h3>
              <p>
                Ваши данные используются исключительно для связи с вами по вашему запросу.
                Мы не передаём ваши данные третьим лицам.
              </p>
              <h3 className="font-semibold text-foreground">3. Хранение данных</h3>
              <p>
                Данные хранятся в защищённом виде и удаляются по вашему запросу. Вы можете
                в любой момент отозвать согласие, написав на eu-25@mail.ru.
              </p>
              <h3 className="font-semibold text-foreground">4. Согласие</h3>
              <p>
                Отправляя форму заявки, вы подтверждаете своё согласие на обработку
                персональных данных в соответствии с данной политикой.
              </p>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="mt-6 btn-premium bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium tracking-wide"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteFooter;

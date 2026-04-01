import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

const SiteFooter = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-2">Евгения Сергеева</h3>
              <p className="text-primary-foreground/70 text-sm">
                Психолог • Бизнес-трекер • Бизнес-тренер
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="https://t.me/Eugenia_Sergeeva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Send size={16} />
                Telegram
              </a>
              <a
                href="tel:+79265622587"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone size={16} />
                +7 (926) 562-25-87
              </a>
              <a
                href="mailto:eu-25@mail.ru"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
                eu-25@mail.ru
              </a>
            </div>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <button
                onClick={() => setShowPrivacy(true)}
                className="block hover:text-primary-foreground transition-colors"
              >
                Политика конфиденциальности
              </button>
              <button
                onClick={() => setShowPrivacy(true)}
                className="block hover:text-primary-foreground transition-colors"
              >
                Согласие на обработку данных
              </button>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Евгения Сергеева. Все права защищены.
            <br />
            Информация на сайте не является публичной офертой.
          </div>
        </div>
      </footer>

      {showPrivacy && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/50 flex items-center justify-center p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-card rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6" id="privacy">
              Политика конфиденциальности
            </h2>
            <div className="text-sm text-muted-foreground space-y-4 leading-relaxed">
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
                Мы не передаём ваши данные третьим лицам, не используем их в рекламных целях
                и не продаём.
              </p>
              <h3 className="font-semibold text-foreground">3. Хранение данных</h3>
              <p>
                Данные хранятся в защищённом виде и удаляются по вашему запросу. Вы можете
                в любой момент отозвать согласие на обработку персональных данных, написав
                на eu-25@mail.ru.
              </p>
              <h3 className="font-semibold text-foreground">4. Согласие</h3>
              <p>
                Отправляя форму заявки, вы подтверждаете своё согласие на обработку
                персональных данных в соответствии с данной политикой.
              </p>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="mt-6 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium"
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

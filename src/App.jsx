import React, { useEffect, useState } from 'react';

// --- Sub-components ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan rounded-lg flex items-center justify-center neon-border">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <span className="font-manrope font-extrabold text-xl tracking-wider">НЕЙРОМИР</span>
            <p className="text-[10px] text-cyan uppercase tracking-widest font-bold">AI академия для команд</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          <a href="#about" className="hover:text-cyan transition-colors">О нас</a>
          <a href="#programs" className="hover:text-cyan transition-colors">Программы</a>
          <a href="#cases" className="hover:text-cyan transition-colors">Кейсы</a>
          <a href="#reviews" className="hover:text-cyan transition-colors">Отзывы</a>
        </nav>
        <a href="#contact" className="btn btn-outline text-sm">Связаться с нами</a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
       {/* Use provided Hero image */}
       <img src="/assets/hero.png" alt="Hero Background" className="w-full h-full object-cover opacity-60" />
       <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent"></div>
    </div>
    <div className="container relative z-10 px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
          Внедрим AI в ваш бизнес — <span className="cyan-text">освободим команду</span> от рутины за 1–4 недели
        </h1>
        <p className="text-xl text-white/70 mb-10 max-w-2xl">
          Академия «Нейромир» обучает маркетологов, HR, SMM, продажников и руководителей работать с AI. Подходит для команд от 1 человека до корпораций.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#contact" className="btn btn-primary px-10 py-4 text-lg">Получить бесплатный AI-разбор</a>
          <a href="#cases" className="btn btn-outline px-10 py-4 text-lg">Посмотреть кейсы</a>
        </div>
        <div className="flex flex-wrap gap-10">
          <div className="flex items-center gap-3">
            <span className="text-cyan text-2xl">✓</span>
            <span className="text-white/60">Более 15 реализованных AI-проектов</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-cyan text-2xl">✓</span>
            <span className="text-white/60">Окупаемость в среднем за 1.3 месяца</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-cyan text-2xl">✓</span>
            <span className="text-white/60">Обучаем команду, а не делаем за вас</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-dark/50">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8">Кто такие <span className="cyan-text">Академия Нейромир</span></h2>
          <div className="space-y-6 text-white/70 text-lg">
            <p>Мы — команда практиков, которая помогает бизнесу внедрять AI без хаоса и завышенных ожиданий.</p>
            <p>Не делаем «за вас» — обучаем вашу команду, чтобы AI стал частью повседневных процессов.</p>
            <p>Работаем с компаниями любого размера: от самозанятых и ИП до корпораций от 10+ сотрудников.</p>
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-video glass neon-border overflow-hidden flex items-center justify-center">
             <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center neon-border cursor-pointer group-hover:scale-110 transition-transform">
               <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-dark border-b-[10px] border-b-transparent ml-1"></div>
             </div>
             <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50">Видео-приветствие основателя · 1–2 мин</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {[
          { val: "15+", label: "реализованных проектов" },
          { val: "150+", label: "обученных сотрудников" },
          { val: "20", label: "отраслей" },
          { val: "98%", label: "клиентов возвращаются" }
        ].map((item, idx) => (
          <div key={idx} className="glass p-8 text-center hover:bg-white/5 transition-colors">
            <div className="text-4xl font-extrabold text-cyan mb-2">{item.val}</div>
            <div className="text-white/60 text-sm uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>

      <h3 className="text-3xl text-center mb-16">Наша команда</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { name: "Основатель", role: "Сооснователь, CEO", xp: "12 лет в видеопродакшене · 1 год в AI" },
          { name: "Директор", role: "Директор по обучению", xp: "30+ проведённых программ" },
          { name: "Технарь", role: "Технический специалист", xp: "Настройка и установка AI-сервисов" },
          { name: "Менеджер", role: "Развитие и сопровождение", xp: "Сопровождение проектов" }
        ].map((p, i) => (
          <div key={i} className="glass group overflow-hidden">
            <div className="aspect-[3/4] bg-white/5 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold mb-1">{p.name}</h4>
              <p className="text-cyan text-sm mb-3">{p.role}</p>
              <p className="text-white/40 text-xs">{p.xp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Direction = ({ title, sub, points, metric, colorClass, image, buttonText = "Начать" }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent"></div>
    </div>
    <div className="container relative z-10 px-6 py-20 flex flex-col items-start">
      <div className="max-w-2xl">
        <h2 className={`text-4xl md:text-6xl mb-4`}>{title}</h2>
        <p className="text-white/60 mb-8 text-xl uppercase tracking-widest font-medium">{sub}</p>
        <div className="space-y-4 mb-10">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className={`text-2xl`} style={{color: `var(--${colorClass})`}}>✓</span>
              <span className="text-lg text-white/80">{p}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8 mb-12">
          <div className={`p-6 glass border-l-4`} style={{borderColor: `var(--${colorClass})`}}>
            <div className="text-4xl font-extrabold mb-1" style={{color: `var(--${colorClass})`}}>{metric}</div>
            <div className="text-xs uppercase text-white/50 tracking-wider">средний результат</div>
          </div>
        </div>
        <button className="btn btn-primary px-10 py-4 text-lg" style={{background: `var(--${colorClass})`, boxShadow: `0 0 20px var(--${colorClass})`}}>
          {buttonText} →
        </button>
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      
      {/* Directional Blocks */}
      <Direction 
        title="Маркетинг: рост на данных" 
        sub="AI для маркетологов и performance-команд"
        points={["Анализ ЦА за минуты", "Генерация креативов и текстов", "Прогноз ROMI", "A/B-тесты на автомате"]}
        metric="+40% к ROMI"
        colorClass="marketing"
        image="/assets/marketing.png"
        buttonText="Начать рост"
      />
      
      <Direction 
        title="SMM: контент, который продаёт" 
        sub="AI-инструменты для соцсетей и контент-команд"
        points={["Контент-планы под цели бизнеса", "Сценарии Reels и коротких видео", "Анализ конкурентов", "Генерация визуала под бренд"]}
        metric="×3 вовлечённость"
        colorClass="smm"
        image="/assets/smm.png"
        buttonText="Обсудить проект"
      />

      <Direction 
        title="Продажи на автопилоте" 
        sub="AI для отделов продаж и руководителей"
        points={["Скрипты под каждого клиента", "Квалификация и подогрев лидов", "Авто-генерация КП", "Анализ звонков и встреч"]}
        metric="+35% к конверсии"
        colorClass="sales"
        image="/assets/sales.png"
        buttonText="Увеличь продажи"
      />

      <Direction 
        title="HR: найм и обучение" 
        sub="AI для рекрутеров и HR-директоров"
        points={["Скрининг резюме за секунды", "Авто-первичные собеседования", "Программы онбординга", "Оценка персонала"]}
        metric="−50% времени на найм"
        colorClass="hr"
        image="/assets/hr.png"
        buttonText="Подобрать сотрудников"
      />

      <Direction 
        title="Стратегия и автоматизация" 
        sub="AI для собственников и топ-менеджеров"
        points={["Стратегические сессии с AI-аналитикой", "Анализ рынка и конкурентов", "Автоматизация рутины", "Поддержка решений"]}
        metric="−30% операционки"
        colorClass="leaders"
        image="/assets/executives.png"
        buttonText="Получить разбор"
      />

      <Direction 
        title="Обучайте быстрее с AI" 
        sub="AI для методистов и EdTech-команд"
        points={["Учебные программы и силлабусы", "Тесты, задания, проверка работ", "Персонализация под ученика", "Генерация материалов"]}
        metric="×3 скорость подготовки"
        colorClass="education"
        image="/assets/education.png"
        buttonText="Начать обучение"
      />

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-4xl text-center mb-20">Как проходит работа — <span className="cyan-text">4 простых шага</span></h2>
          <div className="relative">
            <div className="timeline-line"></div>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { n: "01", t: "Бесплатный AI-разбор", d: "Изучаем процессы вашей команды и показываем 3–5 точек роста." },
                { n: "02", t: "Брифинг и подготовка", d: "Глубокий бриф по болям. Готовим AI-инструменты заранее." },
                { n: "03", t: "Обучение и внедрение", d: "Проводим занятия офлайн, настраиваем инструменты в реальных задачах." },
                { n: "04", t: "Сопровождение", d: "Поддержка до месяца. Аудит результатов и доработка инструментов." }
              ].map((step, i) => (
                <div key={i} className="relative pt-8">
                  <div className="absolute top-[-5px] left-0 w-3 h-3 bg-cyan rounded-full neon-border"></div>
                  <div className="text-4xl font-extrabold text-white/10 mb-4">{step.n}</div>
                  <h4 className="text-xl font-bold mb-4">{step.t}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PDF Magnet */}
      <section className="section-padding bg-dark/80">
        <div className="container glass p-10 md:p-20 overflow-hidden relative">
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan/10 blur-[100px]"></div>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative animate-float">
               <div className="w-full aspect-[3/4] bg-white/5 glass neon-border rounded-lg flex items-center justify-center p-8">
                 <div className="text-center">
                   <div className="text-cyan text-6xl mb-4 font-extrabold">10</div>
                   <div className="text-xl font-bold mb-2">ТОЧЕК ВНЕДРЕНИЯ AI</div>
                   <div className="text-xs text-white/40 uppercase tracking-widest">Окупаемость за 30 дней</div>
                 </div>
               </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1 bg-cyan/20 text-cyan text-xs font-bold rounded-full mb-6 neon-border">БЕСПЛАТНО</span>
              <h2 className="text-4xl mb-6">Заберите PDF-гайд с 10 точками внедрения AI</h2>
              <p className="text-white/60 text-lg mb-10">Конкретные сценарии для бизнеса от 1 сотрудника до корпорации: с примерами, инструментами и расчётами экономии.</p>
              <form className="space-y-4 max-w-md">
                <input type="text" placeholder="Ваше имя*" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-cyan outline-none transition-colors" required />
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="Telegram" className="col-span-1 bg-white/5 border border-white/10 p-4 rounded-lg focus:border-cyan outline-none" />
                  <input type="text" placeholder="WhatsApp" className="col-span-1 bg-white/5 border border-white/10 p-4 rounded-lg focus:border-cyan outline-none" />
                  <input type="tel" placeholder="Телефон" className="col-span-1 bg-white/5 border border-white/10 p-4 rounded-lg focus:border-cyan outline-none" />
                </div>
                <button type="submit" className="btn btn-primary w-full py-5 text-xl mt-4">Скачать PDF</button>
                <p className="text-[10px] text-white/30 text-center">Минимум один контакт на выбор: Telegram, WhatsApp или телефон</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="programs" className="section-padding">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Выберите формат для вашей команды</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Все программы офлайн. Сначала — брифинг и подготовка инструментов под ваши задачи. Затем — обучение и внедрение.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tariff 1 */}
            <div className="glass p-10 flex flex-col hover:bg-white/5 transition-colors">
              <h3 className="text-2xl mb-2">БАЗОВЫЙ</h3>
              <div className="text-4xl font-extrabold mb-6">от 20 000 ₽</div>
              <ul className="space-y-4 mb-10 flex-grow text-sm text-white/60">
                <li>✓ 1–2 специалиста</li>
                <li>✓ 2 занятия по 4 часа</li>
                <li>✓ 15+ часов подготовки</li>
                <li>✓ 3 базовых AI-инструмента</li>
                <li>✓ Поддержка 1 неделю</li>
              </ul>
              <button className="btn btn-outline w-full py-4">Выбрать</button>
            </div>
            {/* Tariff 2 - Featured */}
            <div className="glass p-10 flex flex-col relative border-cyan/50 bg-white/5 scale-105 z-10 shadow-[0_0_50px_rgba(0,229,255,0.15)]">
              <div className="absolute top-0 right-0 bg-cyan text-dark text-[10px] font-bold px-4 py-1 rounded-bl-lg uppercase tracking-widest">ХИТ</div>
              <h3 className="text-2xl mb-2 cyan-text">ПРОФИ</h3>
              <div className="text-4xl font-extrabold mb-6">от 70 000 ₽</div>
              <ul className="space-y-4 mb-10 flex-grow text-sm">
                <li>✓ от 5 специалистов</li>
                <li>✓ 15+ AI-инструментов</li>
                <li>✓ 35+ часов подготовки</li>
                <li>✓ Личный куратор</li>
                <li>✓ Поддержка и созвон через неделю</li>
              </ul>
              <button className="btn btn-primary w-full py-4">Выбрать популярный</button>
            </div>
            {/* Tariff 3 */}
            <div className="glass p-10 flex flex-col hover:bg-white/5 transition-colors">
              <h3 className="text-2xl mb-2">КОРПОРАТИВНЫЙ</h3>
              <div className="text-4xl font-extrabold mb-6">от 150 000 ₽</div>
              <ul className="space-y-4 mb-10 flex-grow text-sm text-white/60">
                <li>✓ от 10 специалистов</li>
                <li>✓ Максимум AI-решений</li>
                <li>✓ Полное внедрение в процессы</li>
                <li>✓ Аудит результатов</li>
                <li>✓ Поддержка 1 месяц</li>
              </ul>
              <button className="btn btn-outline w-full py-4">Обсудить</button>
            </div>
          </div>
          <p className="text-center mt-12 text-white/40 text-sm italic">💳 Рассрочка возможна — оплата частями в течение периода обучения.</p>
        </div>
      </section>

      {/* Express Format */}
      <section className="section-padding bg-cyan/5">
        <div className="container">
          <div className="max-w-4xl mx-auto glass neon-border overflow-hidden relative">
            <div className="absolute top-0 left-0 bg-red-600 text-white font-bold px-6 py-2 -rotate-45 -translate-x-6 -translate-y-2 origin-center text-sm">−97%</div>
            <div className="p-10 md:p-16 text-center">
              <h2 className="text-3xl mb-4">Не готовы к полному внедрению?</h2>
              <p className="text-xl mb-10 text-white/70">Начните с <span className="cyan-text font-bold">экспресс-разбора</span> за символическую цену</p>
              <div className="text-6xl font-extrabold mb-10">990 ₽</div>
              <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                <div className="flex gap-4"><span className="text-cyan">✓</span><p className="text-sm text-white/60">Бриф по вашему бизнесу и задачам</p></div>
                <div className="flex gap-4"><span className="text-cyan">✓</span><p className="text-sm text-white/60">Презентация конкретных AI-сценариев</p></div>
                <div className="flex gap-4"><span className="text-cyan">✓</span><p className="text-sm text-white/60">Демонстрация инструментов вживую</p></div>
                <div className="flex gap-4"><span className="text-cyan">✓</span><p className="text-sm text-white/60">Подготовительная часть от эксперта</p></div>
              </div>
              <button className="btn btn-primary px-16 py-5 text-xl animate-pulse">Заказать AI-разбор за 990 ₽</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer id="contact" className="section-padding bg-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-20 mb-32">
             <div>
                <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Давайте создадим ваш <span className="cyan-text">успех</span> вместе</h2>
                <p className="text-white/60 text-xl mb-12">Заполните форму и получите бесплатную консультацию от наших экспертов. Ответим в течение 15 минут.</p>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 text-white/40 text-sm"><span className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center text-cyan">🛡</span> Конфиденциально и безопасно</div>
                   <div className="flex items-center gap-4 text-white/40 text-sm"><span className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center text-cyan">👥</span> Более 150 проектов реализовано</div>
                </div>
             </div>
             <div className="glass p-10 border-white/5 shadow-2xl">
                <form className="space-y-6">
                   <input type="text" placeholder="Ваше имя*" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl focus:border-cyan outline-none" required />
                   <div className="grid grid-cols-2 gap-6">
                      <input type="text" placeholder="Telegram" className="bg-white/5 border border-white/10 p-5 rounded-xl focus:border-cyan outline-none" />
                      <input type="tel" placeholder="Телефон" className="bg-white/5 border border-white/10 p-5 rounded-xl focus:border-cyan outline-none" />
                   </div>
                   <textarea placeholder="Опишите ваш проект..." rows="4" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl focus:border-cyan outline-none"></textarea>
                   <button className="btn btn-primary w-full py-5 text-xl">Получить бесплатную консультацию</button>
                   <p className="text-[10px] text-white/30 text-center">Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности</p>
                </form>
             </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12 pt-20 border-t border-white/5 text-sm text-white/40">
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 bg-cyan rounded flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
                   <span className="font-bold text-white tracking-widest uppercase">НЕЙРОМИР</span>
                </div>
                <p className="leading-relaxed">AI-академия для команд: от самозанятых до корпораций. Обучение и внедрение нейросетей в бизнес-процессы.</p>
             </div>
             <div className="space-y-4">
                <h4 className="text-white font-bold mb-6">Программы</h4>
                <p className="hover:text-cyan cursor-pointer transition-colors">Базовый</p>
                <p className="hover:text-cyan cursor-pointer transition-colors">Профи</p>
                <p className="hover:text-cyan cursor-pointer transition-colors">Корпоративный</p>
                <p className="hover:text-cyan cursor-pointer transition-colors">AI-разбор за 990 ₽</p>
             </div>
             <div className="space-y-4">
                <h4 className="text-white font-bold mb-6">Полезное</h4>
                <p className="hover:text-cyan cursor-pointer transition-colors">Кейсы</p>
                <p className="hover:text-cyan cursor-pointer transition-colors">PDF-гайд</p>
                <p className="hover:text-cyan cursor-pointer transition-colors">Отзывы</p>
                <p className="hover:text-cyan cursor-pointer transition-colors">FAQ</p>
             </div>
             <div className="space-y-4">
                <h4 className="text-white font-bold mb-6">Контакты</h4>
                <p>Telegram: @neuromir_ai</p>
                <p>WhatsApp: +7 (900) 000-00-00</p>
                <p>Email: hello@neuromir.academy</p>
             </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-between gap-6 text-[11px] text-white/20 uppercase tracking-widest">
             <p>© 2025 Нейромир. Все права защищены.</p>
             <div className="flex gap-10">
                <a href="#">Политика конфиденциальности</a>
                <a href="#">Оферта</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

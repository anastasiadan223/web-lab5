import { useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle.jsx';
import Reviews from './components/Reviews.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

const menu = [
  { name: 'Еспресо', price: 45, desc: 'Класика з насиченим смаком' },
  { name: 'Капучино', price: 60, desc: 'Еспресо, молоко та ніжна пінка' },
  { name: 'Флет вайт', price: 70, desc: 'Подвійний еспресо з молоком' },
  { name: 'Какао', price: 55, desc: 'Для тих, хто не п’є каву' },
];

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <header className="header">
        <div className="container header__inner">
          <h1 className="logo">☕ Зерно</h1>
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h2>Кав’ярня «Зерно»</h2>
          <p>Затишне місце для кави, навчання та зустрічей з друзями.</p>
        </section>

        <section className="section">
          <h2>Меню</h2>
          <div className="menu">
            {menu.map((item) => (
              <div className="menu__item" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="price">{item.price} ₴</span>
              </div>
            ))}
          </div>
        </section>

        <Reviews />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Reviews from './components/Reviews.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

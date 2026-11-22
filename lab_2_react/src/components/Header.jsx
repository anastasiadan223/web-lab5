function Header() {
  return (
    <header>
      <img src="/profile.jpg" alt="Фото профілю" width="160" height="160" />
      <h1>Данилович Анастасія Богданівна</h1>
      <p>Frontend Developer / Студентка спеціальності «Кібербезпека»</p>
      <nav>
        <ul>
          <li><a href="#about">Про мене</a></li>
          <li><a href="#skills">Навички</a></li>
          <li><a href="#experience">Досвід</a></li>
          <li><a href="#education">Освіта</a></li>
          <li><a href="#projects">Проєкти</a></li>
          <li><a href="#reviews">Відгуки</a></li>
          <li><a href="#contacts">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

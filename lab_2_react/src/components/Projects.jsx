function Projects() {
  const projects = [
    {
      title: 'Lviv Weather Mini-App',
      desc: 'Односторінковий застосунок прогнозу погоди на HTML/CSS/JS із використанням публічного API.',
    },
    {
      title: 'To-Do Board',
      desc: 'Менеджер задач на React із локальним збереженням у LocalStorage.',
    },
    {
      title: 'Portfolio',
      desc: 'Особистий сайт-портфоліо з адаптивним дизайном.',
    },
  ];

  return (
    <section id="projects">
      <h2>Проєкти</h2>
      <ol>
        {projects.map((p, idx) => (
          <li key={idx}>
            <strong>{p.title}</strong> — {p.desc}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Projects;

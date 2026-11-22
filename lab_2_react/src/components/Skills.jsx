function Skills() {
  const skills = [
    'HTML5, CSS3, адаптивна верстка',
    'JavaScript (ES6+), основи React',
    'Git, GitHub',
    'Figma, Adobe Photoshop',
    'Англійська мова — Intermediate (B1)',
  ];

  return (
    <section id="skills">
      <h2>Навички</h2>
      <ul>
        {skills.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

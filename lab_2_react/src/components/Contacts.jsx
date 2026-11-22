import ContactForm from './ContactForm.jsx';

function Contacts() {
  return (
    <section id="contacts">
      <h2>Контакти</h2>
      <address>
        <p>Email: <a href="mailto:anastasiia.danylovych@lpnu.ua">anastasiia.danylovych@lpnu.ua</a></p>
        <p>Телефон: <a href="tel:+380671234567">+380 67 123 45 67</a></p>
        <p>GitHub: <a href="https://github.com/" target="_blank" rel="noopener">anastasiia-dev</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener">in/anastasiia-danylovych</a></p>
        <p>Місто: Львів, Україна</p>
      </address>
      <ContactForm />
    </section>
  );
}

export default Contacts;

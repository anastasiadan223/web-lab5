import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Введіть ім’я';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Некоректний email';
    if (form.message.trim().length < 10) err.message = 'Повідомлення має містити щонайменше 10 символів';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-form">
      <h3>Форма зворотного зв'язку</h3>
      {sent && <p className="success">Дякую! Ваше повідомлення надіслано.</p>}
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Ваше ім'я:
          <input name="name" placeholder="Іван Іванов" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Повідомлення:
          <textarea name="message" rows="4" value={form.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
}

export default ContactForm;

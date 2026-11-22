import { useState } from 'react';

const initialReviews = [
  { id: 1, author: 'Олег, власник кав’ярні', text: 'Анастасія зробила нам лендинг за тиждень. Все акуратно і вчасно.' },
  { id: 2, author: 'Команда «Code for Lviv»', text: 'Відповідальна учасниця, уважна до деталей під час тестування.' },
  { id: 3, author: 'Марта, фотографиня', text: 'Сайт-портфоліо виглядає чудово і на телефоні, і на ноутбуці.' },
];

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const addReview = (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    setReviews([{ id: Date.now(), author: author.trim(), text: text.trim() }, ...reviews]);
    setAuthor('');
    setText('');
  };

  return (
    <section id="reviews">
      <h2>Відгуки</h2>
      <div className="reviews">
        {reviews.map((r) => (
          <blockquote className="review" key={r.id}>
            <p>«{r.text}»</p>
            <cite>— {r.author}</cite>
          </blockquote>
        ))}
      </div>
      <form className="review-form" onSubmit={addReview}>
        <input placeholder="Ваше ім’я" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input placeholder="Ваш відгук" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Додати відгук</button>
      </form>
    </section>
  );
}

export default Reviews;

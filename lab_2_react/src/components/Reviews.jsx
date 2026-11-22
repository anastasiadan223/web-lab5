import { useState } from 'react';

const initialReviews = [
  { id: 1, author: 'Олена', text: 'Найсмачніший капучино в місті!', rating: 5 },
  { id: 2, author: 'Максим', text: 'Зручно працювати з ноутбуком, швидкий Wi-Fi.', rating: 4 },
  { id: 3, author: 'Ірина', text: 'Привітний персонал і затишна атмосфера.', rating: 5 },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  const addReview = (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    setReviews([{ id: Date.now(), author: author.trim(), text: text.trim(), rating }, ...reviews]);
    setAuthor('');
    setText('');
    setRating(5);
  };

  return (
    <section className="section">
      <h2>Відгуки</h2>
      <form className="review-form" onSubmit={addReview}>
        <input placeholder="Ваше ім’я" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input placeholder="Ваш відгук" value={text} onChange={(e) => setText(e.target.value)} />
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{'★'.repeat(r)}</option>
          ))}
        </select>
        <button type="submit">Додати</button>
      </form>
      <div className="reviews">
        {reviews.map((r) => (
          <div className="review" key={r.id}>
            <div className="review__stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
            <p>«{r.text}»</p>
            <span className="review__author">— {r.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

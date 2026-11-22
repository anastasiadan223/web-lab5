document.getElementById('year').textContent = new Date().getFullYear();

const greetings = [
  'Привіт з Vercel! 👋',
  'Цей сайт оновлюється після кожного коміту 🚀',
  'Дякую, що завітали! 💜',
];
let i = 0;

document.getElementById('greetBtn').addEventListener('click', () => {
  document.getElementById('greetText').textContent = greetings[i % greetings.length];
  i++;
});

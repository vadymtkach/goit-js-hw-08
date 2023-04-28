
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

// Завантаження збереженого стану форми
const savedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedFeedback) {
  emailInput.value = savedFeedback.email;
  messageInput.value = savedFeedback.message;
}

// Оновлення стану форми при вводі тексту
const saveFeedback = throttle(() => {
  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}, 500);

emailInput.addEventListener('input', saveFeedback);
messageInput.addEventListener('input', saveFeedback);

// Обробка події submit
form.addEventListener('submit', e => {
  e.preventDefault();

  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(feedback);

  localStorage.removeItem(STORAGE_KEY);

  emailInput.value = '';
  messageInput.value = '';
});
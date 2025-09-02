// --- Мобильное меню ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// --- Анимация появления при прокрутке ---
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150; // Расстояние от низа экрана для появления элемента

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active'); // Чтобы анимация повторялась при прокрутке вверх
    }
  }
}
window.addEventListener('scroll', reveal);
reveal(); // Запускаем функцию при загрузке, чтобы видеть первый блок

// --- Создание звезд на главном экране ---
function createStars() {
    const hero = document.getElementById('stars');
    const starCount = 100; // Количество звезд
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2.5; // Сделаем звезды чуть меньше для элегантности
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${Math.random() * 3 + 3}s`; // Чуть дольше
        hero.appendChild(star);
    }
}
createStars();

// --- Обработка формы ---
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Отменяем стандартную отправку формы

    // Очищаем поля формы
    contactForm.reset();

    // Показываем сообщение об успехе
    formMessage.textContent = 'Спасибо! Ваше сообщение успешно отправлено.';

    // Можно скрыть кнопку или всю форму после отправки
    contactForm.querySelector('button').style.display = 'none';

    // Через несколько секунд сообщение может исчезнуть
    setTimeout(() => {
        formMessage.textContent = '';
        contactForm.querySelector('button').style.display = 'block'; // Показываем кнопку снова
    }, 5000); // 5 секунд
});

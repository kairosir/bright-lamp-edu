// Карусель изображений
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const carouselContent = carousel.querySelector('.carousel-content');
    
    // Массив изображений для галереи
    const images = [
        "https://ibb.co.com/dm0nxVj",
        "https://ibb.co.com/v42S1LM",
        "https://ibb.co.com/BTM4WDb",
        "https://ibb.co.com/RPZcLWq",
        "https://ibb.co.com/4NtvQYk",
        "https://ibb.co.com/54xnF7C",
        "https://ibb.co.com/NT8hhJg",
        "https://ibb.co.com/HGZ0zGm",
    ];

    // Добавляем изображения в карусель
    images.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `<img src="${src}" alt="Галерея ${index + 1}">`;
        carouselContent.appendChild(item);
    });

    // Drag to scroll функционал
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Обработка отправки формы
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Сообщение отправлено!');
        contactForm.reset();
    });
});
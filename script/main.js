function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // Когда скролим больше 200, добавляем класс show-scroll.
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)




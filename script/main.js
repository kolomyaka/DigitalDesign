const sections = document.querySelectorAll('section[id]');

document.addEventListener('DOMContentLoaded', function(){
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockId = anchor.getAttribute('href').substring(1);
            document.getElementById(blockId).scrollIntoView({
                behavior : 'smooth',
                block: 'start'
            });
        })
    }
})

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.header__navigation a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.header__navigation a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    scrollUp.addEventListener('click', (e) => {  
        e.preventDefault();
        document.getElementById('head1').scrollIntoView({
            behavior : 'smooth',
            block: 'start'
        })
    })
    // Когда скролим больше 200, добавляем класс show-scroll.
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', () => {
    scrollUp();
    scrollActive();
})





const reveal = document.querySelectorAll('.reveal');


function isVisible() {
    for (const element of [...reveal]) {
        const { top, bottom } = element.getBoundingClientRect();

        if (bottom > 0 && top < window.innerHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }

    }
}
window.addEventListener('scroll', isVisible);


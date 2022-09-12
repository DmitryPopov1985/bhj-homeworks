const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slider = document.querySelectorAll('.slider__item');

let index = 0;


arrowPrev.onclick = function () {
    deactivation(index);
    index = (index === 0) ? [...slider].length - 1 : index - 1;
    activation(index);
}
arrowNext.onclick = function () {
    deactivation(index);
    index = (index === [...slider].length - 1) ? 0 : index + 1;
    activation(index);
}

function activation(index) {
    slider.item(index).classList.add('slider__item_active');
}
function deactivation(index) {
    slider.item(index).classList.remove('slider__item_active');
}
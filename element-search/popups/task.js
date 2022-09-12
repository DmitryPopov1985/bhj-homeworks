const popups = document.getElementById('modal_main');
popups.classList.add('modal_active');
const popupsClose = document.querySelector('.modal__close');
const success = document.querySelector('.btn_danger');

popupsClose.onclick = function() {
    popups.classList.remove('modal_active');
}
success.onclick = function() {
    success.classList.add('btn_success');
}
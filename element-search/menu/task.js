const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach((link) => {
    link.onclick = function () {
        const menu = link.parentElement.querySelector(".menu_sub");

        if (menu !== null) {
            if (menu.classList.contains('menu_active')) {
                menu.classList.remove('menu_active');
            } else {
                menu.classList.add('menu_active');
            }
            return false;
        }
    }
})



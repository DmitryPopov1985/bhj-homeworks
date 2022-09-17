const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach((link) => {
    link.onclick = function () {
        const menu = link.parentElement.querySelector(".menu_sub");

        if (menu !== null) {
            menu.classList.toggle('menu_active');
            return false;
        }
    }
})



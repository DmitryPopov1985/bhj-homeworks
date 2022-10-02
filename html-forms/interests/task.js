const list = document.querySelectorAll('.interest > ul');

[...list].forEach(element => {
    const item = element.closest('li');
    const check = item.querySelector('.interest__check');
    const itemsList = element.querySelectorAll('.interest');

    check.addEventListener('change', (e) => {
        if (e.target.checked) {
            [...itemsList].forEach(element => {
                element.querySelector('input').checked = true;
            })
        } else {
            [...itemsList].forEach(element => {
                element.querySelector('input').checked = false;
            })
        }
    })
})
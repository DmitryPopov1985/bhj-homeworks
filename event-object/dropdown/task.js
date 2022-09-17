const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = document.querySelectorAll('.dropdown__link');

dropdownValue.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown__list_active');

});

[...dropdownLink].forEach((element) => {
    element.onclick = function () {
        dropdownValue.textContent = element.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        return false;
    };
});

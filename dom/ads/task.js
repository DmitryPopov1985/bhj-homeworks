
const rotator = document.querySelector('.rotator');
const rotatorCase = document.querySelectorAll('.rotator__case');


function rotationElements() {
    for (const element of [...rotatorCase]) {
        let color = element.getAttribute('data-color');
        //let speed = element.getAttribute('data-speed');
        if (element.nextElementSibling == null) {
            element.classList.remove('rotator__case_active');
            rotator.firstElementChild.classList.add('rotator__case_active');
        } else if (element.classList.contains('rotator__case_active')) {
            element.setAttribute('style', 'color: ' + color);
            element.classList.remove('rotator__case_active');
            element.nextElementSibling.classList.add('rotator__case_active');
            break;
        }



    }

}

setInterval(rotationElements, 1000);



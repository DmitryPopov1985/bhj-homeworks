const element = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');


element.onclick = function () {
    clickerCounter.textContent = +clickerCounter.textContent + 1;
    if(element.width === 200) {
        element.width = 256;
    } else {
        element.width = 200;
    }
    
    
}
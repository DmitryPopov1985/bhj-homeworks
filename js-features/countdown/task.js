const timer = document.getElementById('timer');
let timeLeft = timer.textContent;
let newLocation = "https://netology.ru";

formatTime(timeLeft);
function startTimer() {

    interval = setInterval(() => {
        if (timeLeft === 0) {
            alert('Вы победили в конкурсе!');
            window.location = newLocation;
            return clearInterval(interval);
        }
        let timePassed = 0;
        timePassed = timePassed += 1;
        timeLeft = timeLeft - timePassed;
        timer.textContent = formatTime(timeLeft);
    }, 1000);
}


function formatTime(time) {
    let hours = Math.floor(time / 3600); //< 10 ? `0${hours}` : `${hours}`;
    let minutes = Math.floor((time % 3600) / 60); //< 10 ? `0${minutes}` : `${minutes}`;
    let seconds = (time % 60); //< 10 ? `0${seconds}` : `${seconds}`;
    if (hours < 10) { hours = `0${hours}` }
    if (minutes < 10) { minutes = `0${minutes}` }
    if (seconds < 10) { seconds = `0${seconds}` }



    return timer.textContent = `${hours}:${minutes}:${seconds}`;

}
startTimer();

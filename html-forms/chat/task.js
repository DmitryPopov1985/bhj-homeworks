const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let timer = 0;

const messagesBot = [
    'Добрый день. До свидания',
    'Все операторы заняты',
    'Вы ничего не купили',
    'Вы плохой клиент',
    'Не пишите нам',
];
const questionsBot = [
    'Ну и чего молчим?',
    'Где Dаша совесть?',
    'Нечего сказать?',
    'Ауууууу!Вы где?',
];
function timeCounter() {
    if (timer < 30) {
        timer = timer + 1;
    } else if (timer === 30) {
        timer = 0;
        showQuestionBot();
    }
}

chat.addEventListener('click', () => {
    chat.classList.add("chat-widget_active");
    setInterval(timeCounter, 1000);
 
})

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        timer = 0;
        let clientMessage = e.target.value;
        if (clientMessage !== '') {
            messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${formattedTime()}</div>
    <div class="message__text">
      ${clientMessage}
    </div>
  </div>
`;
        } else {
            return
        }
        showMessageBot();
    }
    messages.scrollIntoView({
        block: 'end',
    });
})

function showMessageBot() {
    let answer = messagesBot[Math.floor(Math.random() * messagesBot.length)];
    messages.innerHTML += `
  <div class="message">
    <div class="message__time">${formattedTime()}</div>
    <div class="message__text">
      ${answer}
    </div>
  </div>
`;
}

function showQuestionBot() {
    let answer = questionsBot[Math.floor(Math.random() * questionsBot.length)];
    messages.innerHTML += `
  <div class="message">
    <div class="message__time">${formattedTime()}</div>
    <div class="message__text">
      ${answer}
    </div>
  </div>
`;
}


function formattedTime() {
    const currentTime = time => time < 10 ? `0${time}` : `${time}`
    const hours = currentTime(new Date().getHours());
    const minutes = currentTime(new Date().getMinutes());
    return `${hours}:${minutes}`;
};

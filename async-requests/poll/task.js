const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const object = JSON.parse(xhr.response);
    title.textContent = object.data.title;
    for (let answer of object.data.answers) {
      answers.insertAdjacentHTML(
        "beforeend",
        `<button class="poll__answer">${answer}</button>`
      );
    }
  }
});

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");

xhr.send();

answers.addEventListener("click", () => {
  alert("Спасибо, Ваш голос засчитан!");
});

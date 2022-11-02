const form = document.getElementById("signin__form");
const idUser = document.getElementById("user_id");
const welcome = document.getElementById("welcome");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.responseType = "json";
  xhr.send(formData);

  xhr.onload = function () {
    let object = xhr.response;

    if (object.user_id) {
      idUser.textContent = object.user_id;
      welcomeUser();
      localStorage.setItem("id", idUser.textContent);
    } else {
      alert("Неверный логин/пароль");
    }
  };
  form.reset();
});
window.onload = function () {
  const idUser = localStorage.getItem("id");

  if (idUser) {
    idUser.textContent = idUser;
    welcomeUser();
  }
};

function welcomeUser() {
  form.classList.add("welcome");
  welcome.classList.add("welcome_active");
}

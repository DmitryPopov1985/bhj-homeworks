const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  const preloader = document.getElementById("loader");
  const items = document.getElementById("items");
  if (xhr.readyState === xhr.DONE) {
    preloader.classList.remove("loader_active");
    const object = xhr.response;
    const objectValute = object.response.Valute;

    for (let valute in objectValute) {
      items.insertAdjacentHTML(
        "beforeend",
        `<div class = "item"><div class="item__code">
        ${objectValute[valute].CharCode}
    </div>
    <div class="item__value">
       ${objectValute[valute].Value}
    </div>
    <div class="item__currency">
        руб.
    </div>
    </div>`
      );
    }
  }
});

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");

xhr.responseType = "json";
xhr.send();

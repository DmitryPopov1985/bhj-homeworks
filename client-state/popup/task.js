const popups = document.getElementById("subscribe-modal");
const popupsClose = document.querySelector(".modal__close_times");

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find((p) => p.startsWith(name + "="));
  return cookie && cookie.substring(name.length + 1);
}

if (getCookie("close") !== "true") {
  window.onload = function () {
    popups.classList.add("modal_active");
  };
}

popupsClose.onclick = function () {
  popups.classList.remove("modal_active");
  document.cookie = "close = true";
};

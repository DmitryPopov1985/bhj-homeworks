const editor = document.getElementById("editor");

editor.addEventListener("input", () => {
  localStorage.setItem("key", editor.value);
});

window.onload = function () {
  editor.value = localStorage.getItem("key");
};

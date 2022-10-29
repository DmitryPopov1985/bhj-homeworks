const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        let text = input.value;
        list.insertAdjacentHTML('beforeEnd', `<div class="task">
        <div class="task__title">
          ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);
        input.value = '';
    }
});
list.addEventListener('click', removeTask);

function removeTask (event) {
    if (event.target.classList.contains("task__remove")) {
        let toRemove = event.target.closest(".task");
        toRemove.remove();
    }
}




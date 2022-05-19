const newForm = document.querySelector('#new-list-form');
const todoList = document.querySelector('.todo-list');
const newInput = document.querySelector('#new-input');

let index = 0;

newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.setAttribute('class', 'todo-item');
    li.setAttribute('data-index', `${index}`);
    li.innerHTML = createList(newInput.value);
    todoList.append(li);
    newInput.value = '';
    index++;
})

function createList(text) {
    const newList = `
    <label class="container">
        <input type="checkbox">
        <strong>${text}</strong>
        <span class="checkmark"></span>
    </label>
    <button type="button" class="delete-btn btn-base" data-index="${index}">
        <i class="fa-solid fa-trash-can"></i>
    </button>`;
    return newList;
}

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const li = document.querySelector(`li[data-index="${e.target.dataset.index}"]`);
        li.remove();
    }
})


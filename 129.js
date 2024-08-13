// todoProject.js

const addTodoButton = document.querySelector('.form-todo input[type=submit]');
const todoInput = document.querySelector('.form-todo input[type=text]');
const todoForm = document.querySelector('.form-todo');
const ul = document.querySelector('.todo-list');
const doneBtn = document.querySelector('.done');
const removeBtn = document.querySelector('.remove');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // new li is created
    const li = document.createElement('li');
    li.innerHTML = `<span>${todoInput.value}</span>
            <div class="addNRemove">
                <button class="done">Done</button>
                <button class="remove">Remove</button>
            </div>`;
    ul.append(li);
    todoInput.value = ''
});

ul.addEventListener('click', (event) => {
    if(event.target.classList.contains('done')){
        event.target.parentNode.previousElementSibling.style.textDecoration = 'line-through';
    }
    if(event.target.classList.contains('remove')){
        event.target.parentNode.parentNode.remove();
    }
})

// todoProject.js

const addTodoButton = document.querySelector('.form-todo input[type="submit"]');
const todoInput = document.querySelector('.form-todo input[type="text"]');
const todoForm = document.querySelector('.form-todo');
const ul = document.querySelector('.todo-list');
const doneBtn = document.querySelector('.done');
const removeBtn = document.querySelector('.remove');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // new li is created
    const li = document.createElement('li');
    const todoInputText = todoInput.value;
    const liInnerHTMLText = `<span>${todoInputText}</span>
            <div class="addNRemove">
                <button class="done">Done</button>
                <button class="remove">Remove</button>
            </div>`;
    li.innerHTML = liInnerHTMLText;
    ul.append(li);
    todoInput.value = '';
});

ul.addEventListener('click', (event) => {
    if(event.target.classList.contains('done')){
        const liSpan = event.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = 'line-through';
    }
    if(event.target.classList.contains('remove')){
        const parentLi = event.target.parentNode.parentNode;
        parentLi.remove();
    }
})

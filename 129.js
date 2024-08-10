const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector('.form-todo input[type=text]');
const todoList = document.querySelector('.todo-list');
let todoListAllLi = document.querySelectorAll('.todo-list li');

const  completeButton = document.querySelector('.done');
const  deleteButton = document.querySelector('.remove');

// const completeButtonAll = document.querySelectorAll('.todo-list li');
// const deleteButtonAll = document.querySelectorAll('.remove');


todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newLi = document.createElement('li');
    const newLiHTML = `<span class="text">${todoInput.value}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>`

    newLi.innerHTML = newLiHTML;
    todoList.append(newLi);
    todoInput.value = '';
});

todoList.addEventListener('click', (event) => {
    if(event.target.textContent === 'Done'){
        event.target.parentNode.parentNode.querySelector('span').classList.toggle('todo-completed');
    }
    if(event.target.textContent === 'Remove'){
        event.target.parentNode.parentNode.remove();
    }
})


// deleteButton.addEventListener('click', (event) => {
//     deleteButton.parentNode.parentNode.remove();
// })

completeButton.addEventListener('click', (event) => {
    completeButton.parentNode.parentNode.childNodes[1].classList.toggle('todo-completed')
})




// deleteButtonList.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         button.parentNode.parentNode.remove();
//         console.log(button)
//     })
// })

// completeButtonList.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         button.parentNode.parentNode.childNodes[1].classList.toggle('todo-completed')
//         console.log(button);
//     })
// })

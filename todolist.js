const addTodoButton = document.querySelector('.form-todo input[type=submit]');
const todoListInput = document.querySelector('.form-todo input[type=text]');
const todoList = document.querySelector('.todo-list');
const deleteButtonList = document.querySelectorAll('.delete-btn');
const completeButtonList = document.querySelectorAll('.complete-btn');

const todoLi = document.createElement('li');
todoLi.classList.add('li-items');

const divElement = '<div><button class=\'delete-btn\'>Delete</button>\n<button class=\'complete-btn\'>Complete</button></div>'

addTodoButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (todoListInput.value === '') {
        return;
    }
    const value = todoListInput.value;
    todoLi.textContent = value
    todoList.innerHTML = todoList.innerHTML + `<li class=\'li-items\'><span>${value}</span>${divElement}</li>`;
    todoListInput.value = '';
})

// deleteButton.addEventListener('click', (event) => {
//     // deleteButton.parentNode.parentNode.remove();
//     console.log(event.target);
//     console.log(deleteButton.textContent);
// })

// completeButton.addEventListener('click', (event) => {
//     // completeButton.parentNode.parentNode.childNodes[1].classList.toggle('todo-completed')
//     console.log(event.target);
//     console.log(completeButton.textContent);
// })

deleteButtonList.forEach((button) => {
    button.addEventListener('click', (event) => {
        button.parentNode.parentNode.remove();
        console.log(button)
    })
})

completeButtonList.forEach((button) => {
    button.addEventListener('click', (event) => {
        button.parentNode.parentNode.childNodes[1].classList.toggle('todo-completed')
        console.log(button);
    })
})
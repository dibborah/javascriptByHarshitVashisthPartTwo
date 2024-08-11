// Add HTML elements using Javascript

const todoList = document.querySelector('.todo-list');
console.log(todoList);

todoList.innerHTML += '<li>hello world</li>';
todoList.innerHTML += '<li>Teach Students</li>';

console.log(todoList);

// console.log(todoList.innerHTML);
// todoList.innerHTML += `<li>Todo 2</li>`;

// When should we use innerHTML and when should we not use innerHTML
// 1. We should use innerHTML when the entire content has to be changed
// 2. We should not use innerHTML when we are adding or modifying existing innerHTML






// insertAdjacentHTML(where, HTML)
// beforbegin(before)
// afterbegin(prepend)
// beforeend(append)
// afterend(after)



const newTodoItem = document.createElement('li');
const todoList = document.querySelector('.todo-list')

newTodoItem.textContent = 'Teach Students';

// todoList.insertAdjacentElement('beforeend', newTodoItem); // beforeend is same as append
// todoList.insertAdjacentElement('afterbegin', newTodoItem); // afterbegin is same as prepend

// Insert an h1 tag before ul

// const todoList = document.querySelector('.todo-list');
// const sectionTodo = document.querySelector('.section-todo');

const h1 = document.createElement('h1');
const h2 = document.createElement('h2');

h1.textContent = 'Testing before method';
h2.textContent = 'Testing after method';


todoList.insertAdjacentElement('beforebegin', h1);
todoList.insertAdjacentElement('afterend', h2);



// just to see the whole DOM (Big picture)
// console.log(sectionTodo);
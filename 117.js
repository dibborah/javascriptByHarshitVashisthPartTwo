// some old method to support poor IE(Internet explorer)

// appendChild // appendChild() is old like/for IE and append() is new
// insertBefore
// replaceChild
// removeChild


const todoList = document.querySelector('.todo-list')

// new element
const newTodoItem = document.createElement('li');
newTodoItem.textContent = 'Teach Students';

// first li element
const referenceNode = document.querySelector('.first-todo');
console.log(referenceNode);

// adding a node at he end of an element
// todoList.appendChild(newTodoItem)

// adding an node element at the beginning of an element
// todoList.insertBefore(newTodoItem, referenceNode);

// replacing a current element
// todoList.replaceChild(newTodoItem, referenceNode)

// removing a node element
todoList.removeChild(referenceNode);


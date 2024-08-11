// createElement, append, prepend, before, after

// const newTodoItem = document.createElement('li');
// const textNode = document.createTextNode("Teach students");
// newTodoItem.append(textNode);
// const todoList = document.querySelector('.todo-list')
// console.log(todoList);
// newTodoItem.textContent = 'Teach Students';

// append adds in the ends of where it is adding something
// todoList.append(newTodoItem);

// prepend adds before where it is adding something
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// Note appendChild and append are same but just appendChild is older
// appenChild can be used in Internet Explorer(IE) but append won't be execute BY IE
// since append is new and modern and IE is older and useless

// remove and elementNode
// 1. removing newTodoItem
// newTodoItem.remove();

// 2. removing todo1
// const todo1 = document.querySelector('.todo-list li');
// console.log(todo1);
// todo1.remove();


// inserting methods()
// before
// after

// Insert an h1 tag before ul

const todoList = document.querySelector('.todo-list');
const sectionTodo = document.querySelector('.section-todo');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
h1.textContent = 'Testing before method';
h2.textContent = 'Testing after method';
todoList.before(h1)
todoList.after(h2)
console.log(sectionTodo);
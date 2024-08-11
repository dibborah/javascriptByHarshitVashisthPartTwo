// createElement, append, prepend, before, after

const newTodoItem = document.createElement('li');
// const textNode = document.createTextNode("Teach students");
// newTodoItem.append(textNode);
const todoList = document.querySelector('.todo-list')
// console.log(todoList);
newTodoItem.textContent = 'Teach Students';

// append adds in the ends of where it is adding something
// todoList.append(newTodoItem);

// prepend adds before where it is adding something
todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// Note appendChild and append are same but just appendChild is older
// appenChild can be used in Internet Explorer(IE) but append won't be execute BY IE
// since append is new and modern and IE is older and useless


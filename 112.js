// classList, add, remove , toggle classes

// const sectionTodoElement = document.querySelector('.section-todo ');
// console.log(sectionTodoElement.classList);// DOMTokenList[]

// Add 
// adding a new class to the classList of DOM Elements
// sectionTodoElement.classList.add('bg-dark');
// console.log(sectionTodoElement.classList);// DOMTokenList[]

// Remove
// removing a class from the classList of DOM Elements
// sectionTodoElement.classList.remove('container')

// Check if a class exists in a ElementDOM
// const checkClass = sectionTodoElement.classList.contains('container');
// const checkClass = sectionTodoElement.classList.contains('bg-dark');
// const checkClass = sectionTodoElement.classList.contains('section-todo');
// console.log(checkClass);

// Toggle property
// class hain to 'remove' ho jaegi and nahi hain to 'add' ho jaegi
// sectionTodoElement.classList.toggle('bg-dark');
// sectionTodoElement.classList.toggle('bg-dark');


// classList returns a List named DOMTokenList[] which is an Array like object
// DOMTokenList[] => Array like object

// classList property humme batihain ki sectionTodoElement ke pass kini classes hain


// Practice now --->

const header = document.querySelector('.header');
// classList before / past
console.log(header.classList);
// header.classList.add('bg-dark');
// classList After / now
console.log(header.classList);
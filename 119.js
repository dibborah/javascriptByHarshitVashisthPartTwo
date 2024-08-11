// how to get the dimension of an element

// height and weight of section-todo

const sectionTodo = document.querySelector('.section-todo');
console.log(sectionTodo);

const dimensions = sectionTodo.getBoundingClientRect();// height // width // top // left etc. properties 
// Which are dimensions of a any section of area are something we get 
// when using getBoundingClientRect() method();
console.log(dimensions);
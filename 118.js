// static list vs live list

// const lis = document.querySelectorAll('.todo-list li');// NodeList[]
// const li = document.createElement('li');
// li.textContent = 'item 6';

// const ul = document.querySelector('.todo-list');
// ul.append(li);

// console.log(lis);// Output is 5 even after adding a new item which means actuall total is 6
// Which implies NodeList by querySelector is a static list. It is always static
// Never dynamic and changing values

const ul = document.querySelector('.todo-list');// document. kare to pure document ke andar dekhe ga
const lis = ul.getElementsByTagName('li');// ul kare to bas ul ke andar hi dekhega

const li = document.createElement('li');
li.textContent = 'item 6';
ul.append(li);

console.log(lis);// HTMLCollection(6) // They are live list// current dynamic values get reflected everytime
// maybe forEach without using Array.from won't work but it is live list unlike 
// querySelector(s) static list which latest changes doesnot gets reflected


// getElement.... HTMLColletions[] live list (forEach does not exists byDefault)
// HTMLColletions[] takes some extra space 
// querySelector... Node static list (forEach byDefault)
// NodeList is more efficient in space
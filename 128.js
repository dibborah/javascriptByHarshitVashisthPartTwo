
// event bubbling
// event capturing
// event propogation === event bubbling + capturing


const body = document.body;

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

body.addEventListener('click', () => {
    console.log('body is captured up when clicked');
}, true);

grandparent.addEventListener('click', () => {
    console.log('grandparent is captured up when clicked');
}, true);

parent.addEventListener('click', () => {
    console.log('parent is captured up when clicked');
}, true);

child.addEventListener('click', () => {
    console.log('child is captured up when clicked');
}, true);// 3 arguement true captures an event

body.addEventListener('click', () => {
    console.log('body is bubbled up when clicked');
})

grandparent.addEventListener('click', () => {
    console.log('grandparent is bubbled up when clicked');
})

parent.addEventListener('click', () => {
    console.log('parent is bubbled up when clicked');
})

child.addEventListener('click', () => {
    console.log('child is bubbled up when clicked');
})


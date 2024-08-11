// intro to events

// Three most common and important events: 
// 1. mouse event
// 2. input event
// 3. keyboard event


// click event 
// event add karne ke 3 tarike hote hain
// 1. direct using onclick in the button element directly inside the HTML element
// 2. using onClick property in the button element in the js file


// 2.
// const btn = document.querySelector('.btn-headline');
// btn.onclick = function hello() {
//     console.log('hello world');
// };
// console.log(btn);

// 3. adding event using addEventListener event

const btn = document.querySelector('.btn-headline');
// btn.addEventListener('click', function() {
//     console.log('hello world');
// })

btn.addEventListener('click', () => {
    console.log('hello world');
})
console.log(btn);
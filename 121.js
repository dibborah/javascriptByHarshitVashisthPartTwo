// this keyword inside events functions

const btn = document.querySelector('.btn-headline');

// this in case of normal traditional functions

// btn.addEventListener('click', function() {
//     // console.log('hello world');
//     console.log(this);
// this in case with normal functions is the object under where it is called or wraped
// normal functions main => Jis element main this use hua hain this wohi element hogi
// })

// function myFunc() {
//     console.log(this.textContent);
// };

// btn.addEventListener("click", myFunc);

// this in case of arrow functions () => {}

btn.addEventListener('click', () => {
    console.log(this);// window object {}
    // this in case of arrow functions is the global window object
})

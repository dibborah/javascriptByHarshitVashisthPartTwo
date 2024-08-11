// click event on multiple buttons

// const firstButton = document.querySelector('#one');

// // adding click event to just the first button
// firstButton.addEventListener('click', function() {
//     console.log(this);
// });

const btns = document.querySelectorAll('.my-buttons button');

// adding onClick event in all 3 button simultaneously

// 1. using forEach loop
// btns.forEach(function(button){
//   button.addEventListener('click', function(){
//     console.log(this)
//   })
// })

// 2. using for of loop
// for (let button of btns) {
//     button.addEventListener('click', function () {
//         console.log(this)
//     })
// };

// 3. using traditional for loop

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        console.log(this.textContent);// If the function where to be an arrow function then textContent won't get printed
        // since in case of arrow fc the value of this is window object and in window object the textContent property won't be found 
        // So in case of arrow fc this console will print undefined in the console
    })
}

// console.log(btns);
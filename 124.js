// Event behind the scenes

console.log('script starts !!!');

const allButtons = document.querySelectorAll('.my-buttons button');

allButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let num = 0;
        for(let i = 0 ; i < 1000000000; i++){
            num += i;
        }
        console.log(event.target.textContent, num);
    })
})

console.log('script ends !!!');
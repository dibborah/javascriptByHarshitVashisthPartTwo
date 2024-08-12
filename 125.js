// practice with click events

const allButtons = document.querySelectorAll('.my-buttons button');

allButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.style.background = "yellow";
        event.target.style.color = "grey";
    })
})
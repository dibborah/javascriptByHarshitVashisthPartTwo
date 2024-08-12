// little demo project

const button = document.querySelector('.container button');

const body = document.body;

const span = document.querySelector('.container h1 span');

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

button.addEventListener('click', (event) => {
    span.textContent = randomColorGenerator();
    body.style.background = randomColorGenerator();
})



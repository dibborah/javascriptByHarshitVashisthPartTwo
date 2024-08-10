const mainButton = document.querySelector('button');
const body = document.body;
const h1Element = document.querySelector('h1');

const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

mainButton.addEventListener('click', (event) => {
    // body.style.background = `#123`;
    // body.style.background = `#${threeRandomNumbers}`;
    // body.style.background = `rgb(255, 255, 255)`;
    const randomColor = randomColorGenerator()
    body.style.background = randomColor;
    h1Element.textContent = `Current Color: ${randomColor}`;
})

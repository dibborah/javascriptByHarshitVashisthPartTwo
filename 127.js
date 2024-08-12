// keypress event
// mouseover event

const body = document.body;

body.addEventListener('keypress', (event) => {
    console.dir(event);
    // console.dir(event.key);
})

const button = document.querySelector('.btn-headline');

button.addEventListener('mouseover', (event) => {
    console.dir(event);
    console.log('mouseover event occured!!!');
});

button.addEventListener('mouseleave', (event) => {
    console.log('mouseleave event occured!!!');
});

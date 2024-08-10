// Change styles of elements

// const mainHeading = document.querySelector('#main-heading');
// const mainHeading = document.getElementById('main-heading');
// const mainHeading = document.querySelector('.headline h2');
const mainHeading = document.querySelector('div.headline h2');
console.log(mainHeading);
console.log(mainHeading.style);
mainHeading.style.color = 'red';
mainHeading.style.backgroundColor = '#efefef';
mainHeading.style.border = '20px solid green';

// Note it is not styles ⚠⚠⚠💀
// 1.
// It is style
// even extra 's' ruins your life

// 2.
// when writing class using .(Dot) notations gap should not be there
// otherwise error or null will be thrown
// and your code will not work
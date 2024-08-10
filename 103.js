// select element by id

const h1Element = document.getElementById('main-heading');

console.log(h1Element);// HTML representation
console.dir(h1Element);// JS object representation

// checking types 
// console.log(typeof h1Element);// HTML representation
// console.dir(typeof h1Element);// JS object representation

// Note
// JS har ek element ka ek object bana ke document namak object main store kar leta hain
// As key value pairs

h1Element.textContent = 'Hello world';
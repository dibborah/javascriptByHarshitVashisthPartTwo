// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

// const navItems = document.getElementsByClassName('nav-item');// HTMLCollections
// console.log(Array.isArray(navItems));// navItems is a Array Like object but is not an array
// console.log(navItems);// getElementsByClassName is giving us an  HTMLCollections
// console.log(navItems[2]);

const navItems = document.querySelectorAll('.nav-item');// NodeList
// console.log(navItems[0])
console.log(Array.isArray(navItems));


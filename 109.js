// loop

// using getElementsByClassName
// const navItems = document.getElementsByClassName('nav-item');// HTMLCollections

// using getElementsByTagName
// let navItems = document.getElementsByTagName('a');
// console.log(navItems)

// Tasks: Make all a tags color green and bg white

// 3 method for looping in JS

// 1. Simple traditional for loop
// 2. for of loop
// 3. forEach loop => Cannot be used with HTMLCollections. (maybe one has to convert the collection into an Array)
// Note: We cannot use forEach loop to iterate HTMLCollections.


// Array like object => 
// 1. Indexing can be used 
// 2 . Length property exists 

// using traditional for loop

// for loop 1
// using getElementsByClassName
// for(let i = 0; i < navItems.length; i++){
//     console.log(navItems[i].querySelector('a'))
//     navItems[i].querySelector('a').style.color = 'green';
//     navItems[i].querySelector('a').style.background = '#efefef';
// }

// for loop 2

// using getElementsByTagName
// for(let i = 0; i < navItems.length; i++){
//     navItems[i].style.color = 'green';
//     navItems[i].style.background = '#efefef';
//     navItems[i].style.fontWeight = 'bold';
// }

// looping using for of loop
// for (let navItem of navItems) {
//     navItem.style.background = '#efefef';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = 'bold';
// }

// forEach method cannot be used

// This below line is converting HTMLCollections into an Array
// So that Array.forEach can be used in navItem.
// After writting the below line forEach can be used. Without it normally 
// forEach can't be used in HTMLCollections(getElementBy...)
// navItems = Array.from(navItems);

// console.log(Array.isArray(navItems));// Now it return true only after Array.from(navItems) method is applied

// using forEach only after using Array.from() method in HTMLCollections[]
// navItems.forEach((navItem) => {
//     navItem.style.color = 'green';
//     navItem.style.background= '#efefef';
//     navItem.style.fontWeight = 'bold';
// })


// NodeList
// using querySelectorAll
let navItems = document.querySelectorAll('a');// NodeList[]
console.log(navItems);

console.log(Array.isArray(navItems));
navItems = Array.from(navItems);// Now higher order functions like map, filter , reduce can be used in this NodeList[] as it is now converted to an Array
console.log(Array.isArray(navItems));

// using traditional for loop
// for(let i = 0; i < navItems.length; i++){
//     navItems[i].style.color = 'green';
//     navItems[i].style.background = '#efefef';
//     navItems[i].style.fontWeight = 'bold';
// }

// using for of loop
// for (let navItem of navItems) {
//     navItem.style.background = '#efefef';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = 'bold';
// }

// using forEach without using Array.from() method in NodeList[]

navItems.forEach((navItem) => {
    navItem.style.color = 'green';
    navItem.style.background= '#efefef';
    navItem.style.fontWeight = 'bold';
})






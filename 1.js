// console.log(this);
// console.log(window);
// console.log(myfunction);

// myfunction();
// console.log(fullName);

// fc declaration
function myfunction() {
    console.log(arguments);
    console.log(arguments.length);
    const [first, second] = arguments;
    console.log(first);
    console.log(second);
    const myVar = 'this is my function';
    console.log(myVar);
    const fullName = firstName + ' ' + lastName;
    return fullName
}

const personName = myfunction();
// console.log(personName);// personName ke pass bas wohi hota hain to fc abhi return karega
// return value ko chorke personName ke pass kuch v nahi hoga

// When memory allcated arrow function doesnot gets memory allocation in stack while Global execution context is created
// arrow function
// const myfunction = () => {
//     console.log('this is my function');
// }


var firstName = 'harshit'
var lastName = 'sharma'
var fullName = firstName + ' ' + lastName;
// console.log(fullName);
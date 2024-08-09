// const rootNode = document.getRootNode();
// const rootElement = rootNode.childNodes[0]
// const bodyElement = rootElement.childNodes[2];


// starts from here
const divParentElement = document.getElementsByClassName('container')[0];
// console.log(divParentElement);
const h1Element = divParentElement.childNodes[1]
const h1ElementParentNode = h1Element.parentNode;
console.log(h1ElementParentNode);
h1ElementParentNode.style.backgroundColor = 'red';
h1ElementParentNode.style.color = 'white';

console.log(document.querySelector('body'));
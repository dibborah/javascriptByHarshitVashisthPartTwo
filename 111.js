// DOM Tree

// Some conceptual understanding

const rootNode = document.getRootNode();
const htmlElement = rootNode.childNodes[0];
// console.log(htmlElement.childNodes);// NodeList(3) [head, text, body]

// console.log(htmlElement);
const headElementNode = htmlElement.childNodes[0];
const textNode1 = htmlElement.childNodes[1];
const bodyElementNode = htmlElement.childNodes[2];

// Childrens of htmlElement
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

// Siblings relationship in DOM Tree
// console.log(headElementNode.nextSibling.nextSibling);

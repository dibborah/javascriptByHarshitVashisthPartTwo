// DOM Tree

// Some conceptual understanding

// const rootNode = document.getRootNode();
// const htmlElement = rootNode.childNodes[0];
// console.log(htmlElement.childNodes);// NodeList(3) [head, text, body]

// console.log(htmlElement);
// const headElementNode = htmlElement.childNodes[0];
// const textNode1 = htmlElement.childNodes[1];
// const bodyElementNode = htmlElement.childNodes[2];

// Childrens of htmlElement
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

// Siblings relationship in DOM Tree
// console.log(headElementNode.nextSibling.nextSibling);// This will give the bodyElementNode

// let's see the textNode
// console.log(htmlElement.childNodes); // "\n   " // new line and thora sa space

// nextSibling property also gives the textNodes(white-space nodes if exits)
// console.log(headElementNode.nextSibling); // "\n   " // new line and thora sa space

// To get non-textNode(non-/n white-space) siblings
// we have another property named => nextElementSibling

// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextElementSibling);
// console.log(headElementNode.childNodes);

// const h1Element = document.querySelector('h1');
// const divElement = h1Element.parentNode;
// console.log(divElement);
// divElement.style.background = '#333';
// divElement.style.color = "#eee";

// const bodyElement = h1Element.parentNode.parentNode;
// console.log(bodyElement);
// bodyElement.style.background = '#333';
// bodyElement.style.color = "#eee";

// getting the body node directly using the document object

// const bodyElement = document.body;
// console.log(bodyElement);
// bodyElement.style.background = '#333';
// bodyElement.style.color = "#eee";

// note: querySelector or getElementById etc. can be used with any ElementNode
// and not just with the document object

// const head = document.querySelector('head');
// const title = head.querySelector('title');
// console.log(title);

// different properties to get the inner plain text written inside a tag
// console.log(title.textContent);
// console.log(title.data);
// console.log(title.text);

// If we want only the non-textNode childNodes in the childNodes NodeList
// Then we have a property call children

const headElement = document.head;
const allChildNodes = headElement.childNodes;
// console.log(allChildNodes);// All childNodes including textNodes we get in the NodeList

const onlyElementNodes = headElement.children;
console.log(onlyElementNodes);// Only Element Nodes we get in the NodeList






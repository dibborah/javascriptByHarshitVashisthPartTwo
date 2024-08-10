// change text
// textContent and innerText

const h1Element = document.querySelector('#main-heading');

// h1Element.textContent = 'hello world';
// h1Element.innerText = 'hello world';

console.log('textContent: ', h1Element.textContent);// TextContent main hidden properties v ayega
console.log('innerText', h1Element.innerText);// innerText main hidden text nahi ayega

// What is the difference between textContext and innerText

// textContent sara ka sara text ka content dega , hidden wale v
// But innerText hidden text nahi degi,bas wohi degi jo displayed hain UI pe.
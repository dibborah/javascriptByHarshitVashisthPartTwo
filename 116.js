// clone a Node element

const ul = document.querySelector('.todo-list');
const li = document.createElement('li');
li.textContent = 'New todo item';

// Dekho li yaha ek hi node hain
// ya to wo append hoga ya to wo prepend hoga
// ek sath do nodes create and add nahi hogi
const li2 = li.cloneNode(true);// Since we are passing the value true as arguement inside cloneNode method
// deep cloning will happen
ul.append(li);
ul.prepend(li2);

// shallow copy of li node
// const li2 = li.cloneNode();// not passing true as arguement so bydefault passing false

// deep copy of li node
// const li2 = li.cloneNode(true)// passing true so deep code of li node
// true karne par li ke textContent jo li ke childNode HTMLHeadingElement
// wo v ayega
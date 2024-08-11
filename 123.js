// event object

// const firstButton = document.querySelector('#one');

// firstButton.addEventListener('click', function(event) {
//     console.log(event);
//     console.log(this);
// });

// firstButton => element hain
// JS main iska ek object banta hain

// jab v main kisi v element pe event listener add hoga
// JS Engine ===> Which executes our JS code line by line
// Browser  ===> JS Engine + extra features
// Browser ===> JS Engine + WebAPIs(small applications which works for us)

// Browser observes when user will perform action on the element

// Jab browser ne dekha ki ek event perform hua hain  jo hum listen(addEventListener) kar rahe the , for example 
// user ne ek button click kiya hain
// Browser JS engine ko callBack function jo humne event pe likha hain
// wo to deta hi hain
// Sath hi main JS engine ko jo event perform hua hain wo event ka information
// ek object ke form main v deta hain
// usko bolte hain event object

// event trigger hota hi: 
// Browser do kam karta hain: 

// 1. callback fc hain browser js engine ko dega...
// 2. callback ke sath browser us event ka information v browser JS engine ko deta hain

const btns = document.querySelectorAll('.my-buttons button');

for (let button of btns){
    button.addEventListener('click', (event) => {
        console.log(event.target.textContent); // target => kis element ne event ko trigger kiya
    })
};

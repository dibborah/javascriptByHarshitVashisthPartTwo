function printFullName(firstName, lastName) {
    const hello = 'hello world';
    let number = 78;
    function printName(){
        console.log(number);
        console.log(firstName, lastName);
        console.log(hello);
    }
    return printName;
}

const ans = printFullName('harshit', 'sharma');
console.log(ans)
ans();
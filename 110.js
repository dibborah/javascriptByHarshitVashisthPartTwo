// innerHTML

const headline = document.querySelector('.headline');
console.log(headline.innerHTML);
headline.innerHTML = '<h1>InnerHTML changed</h1>';
headline.innerHTML += '<button class=\'btn btn-headline\'>Button also changed</button>'
// \' => ' (inside double quote strings)// Backslash is ignored
// \" => " (inside single quote strings)// Backslash is ignored
console.log(headline.innerHTML);
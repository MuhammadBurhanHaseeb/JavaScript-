
//insert new button in the body tag element with js code
let bodyTag = document.querySelector('body');
let newButton=document.createElement("button");
newButton.innerText="Click Me";
newButton.style.backgroundColor="red";
newButton.style.color="white";

// bodyTag.appendChild(newButton);
bodyTag.prepend(newButton); 

let p = document.querySelector('#para');

// first create element paragraph with html and then style withh css and give a class 
// then crete new class in js and append that class in paragraph tag with js 
p.classList.add('paraStyle');
// p.classList.remove('paraStyle');
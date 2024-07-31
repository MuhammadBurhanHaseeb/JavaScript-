// // console.dir(window);
// // console.dir(window.document);
// console.dir(document.body);
// console.log(document.body);
// console.log(document.head);
// console.dir(document.head);

// document.body.style.backgroundColor = 'red';
// let heading = document.getElementById("heading1");
// console.dir(heading);

// let classheading = document.getElementsByClassName("heading1");
// console.dir(classheading);
// classheading[0].style.backgroundColor = 'blue';
// classheading[1].style.backgroundColor = 'green';

// let classheadingg = document.getElementsByTagName("body");
// console.dir(classheadingg);
// classheadingg[0].backgroundColor = 'yellow';

// let classheadinggg = document.querySelectorAll(".heading1");
// console.dir(classheadinggg);


// let classheadingggg = document.querySelector("#btn");
// console.dir(classheadingggg);
// console.dir(classheadingggg.tagName);


// console.dir(document.body.firstChild);
// console.dir(document.body.lastChild);

// console.dir(document.body.childNodes);
// console.dir(document.querySelector(".heading1").children);


console.dir(document.querySelector("div").innerText);
console.dir(document.querySelector("div").innerHTML);

    document.querySelector("div").innerText = "Hello World";
    document.querySelector("div").innerHTML = "<h1>Hello World</h1>";

// Document.body.querySelector("div").visibility = "hidden";
// let text = Document.body.querySelector("div").innerText;
// console.dir(text);
// i want to hiiden the div 

 let div = document.querySelector("div");
div.style.visibility = "hidden";
console.dir(div.innerText);
console.dir(div.textContent);
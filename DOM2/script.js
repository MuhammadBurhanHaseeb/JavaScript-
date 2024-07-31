// to get the attribute value 
let d = document.querySelector('div');
console.log(d);
let id =  d.getAttribute("id");
console.log(id);
let divName =  d.getAttribute("name");
console.log(divName);

let c = document.querySelector('p');
let para =  c.getAttribute("class");
console.log(para);

// to set the attribute value
let paraa =  c.setAttribute("class" , "newClass");
console.log(paraa);

d.style.color = "red";
d.style.height = "300px";
d.style.width = "300px";
d.style.backgroundColor = "yellow";
d.style.border = "2px solid black";
d.style.fontSize = "20px";
// d.style.textAlign = "center";
// d.innerText = "Hello World";
// d.style.display = "flex";
d.style.visibility = "hidden";
d.style.visibility = "visible";

//create element 
// let newDiv = document.createElement("div");
let newButton = document.createElement("button");
console.log(newButton);
newButton.innerText = "Click Me";
// document.body.appendChild(newButton);
d.append(newButton); // add at the end of the div (inside the div tag or buton is child of the div)
d.prepend(newButton);// add at the start of the div(inside the div tag or buton is child of the div)
d.before(newButton);// add before the div tag (button is sibling of the div)
d.after(newButton);// add after the div tag (button is sibling of the div)

c.after(newButton);

let newHeading = document.createElement("h1");
newHeading.innerText = "This is main heading";

newHeading.style.color = "red";
newHeading.style.fontSize = "20px";
newHeading.style.backgroundColor = "green";
newHeading.style.padding = "10px";
newHeading.style.border = "none";
newHeading.style.cursor = "pointer";
newHeading.style.textAlign = "center";


newButton.style.color = "red";
newButton.style.fontSize = "20px";
newButton.style.backgroundColor = "green";
newButton.style.padding = "10px";
newButton.style.border = "none";
newButton.style.cursor = "pointer";
newButton.style.textAlign = "center";
newButton.link = "practiceSet1.html";
// add link to the button
newButton.addEventListener('click', function(){ //code 
    window.location.href = "practiceSet1.html";
});
let bodyTag = document.querySelector('body');

bodyTag.prepend(newHeading);

// delete element from the doc
let pa = document.querySelector('#para');/// to get the element by id is mai id ke zariye access krna hai tu phir hash use krn pare ga id ke sath

// pa.remove();// para tag will be removed from the doc

d.appendChild(newButton);
// d.prependChild(newButton);

//d.removeChild(newButton);



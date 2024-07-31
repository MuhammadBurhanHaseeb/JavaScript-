// document.h2.innerText = "Hello JavaScrpit From Apna College";
// console.dir(document.h2.innerText);
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText =h2.innerText+ "Hello JavaScrpit From Apna College";


let divs = document.querySelectorAll(".box");
// let div1 = document.querySelector("#box1");
// let div2 = document.querySelector("#box2");
// let div3 = document.querySelector("#box3");
// div1.innerText = "I am Box 1";
// div2.innerText = "I am Box 2";
// div3.innerText = "I am Box 3";

for(let i=0; i<divs.length; i++){
    divs[i].innerText = "I am Box "+(i+1);
    divs[i].style.backgroundColor = "yellow";
    divs[i].style.color = "red";
    divs[i].style.border = "2px solid black";
    divs[i].style.width = "200px";
    divs[i].style.margin = "10px";
    divs[i].style.padding = "10px";
    divs[i].style.textAlign = "center";
    
}


// divs[0].innerText = "I amdjnsjknfjnj Box 1";
// divs[1].innerText = "I slndjnjnsfjkfjk am Box 2";
// divs[2].innerText = "I am Box 3wfwfwfw";
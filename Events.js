let newbutton = document.createElement('button');
let bodytag= document.querySelector('body');
// text inside a button


newbutton.innertext = "heloo"
newbutton.style.backgroundColor = 'red';
newbutton.style.color = 'white';
newbutton.style.height = '50px';
newbutton.style.width = '100px';
bodytag.prepend(newbutton);
newbutton.addEventListener('click',()=>{console.log("this is handled by the js file new button")});

let btn = document.querySelector('.htt');
btn.addEventListener('click'  ,()=>{console.log("this handled by the js file ");} );
btn.onmouseover = function(){
    console.log("mouse over");
}

let divv= document.querySelector('.box');
divv.onmouseover = function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.clientX ,e.clientY); 
    console.log("mouse over the box11");

}

// divv.event= function(){
//     console.log("mouse over the box11");
// }

let heading = document.querySelector('#head');
heading.style.color = 'red';
heading.style.fontSize = '50px';
heading.style.textAlign = 'center';
 heading.addEventListener('click',(e)=>{console.log(e.type , e.clientX , e.clientY) ; 
      console.log("this is handled by the js file new button");

    });
    heading.addEventListener('click',(e)=>{console.log(e.type , e.target , e.timeStamp) ; 
        console.log("this is handled by the js file new button 2222222222");
        
      });
        heading.addEventListener('click',(e)=>{console.log(e.type , e.target , e.timeStamp) ; 
            console.log("this is handled by the js file new button 3333333333333");
            
        });
        heading.addEventListener('click',(e)=>{console.log(e.type , e.target , e.timeStamp) ; 
            console.log("this is handled by the js file new button 444444444444444");
            
        });
// the way to add and remove the event listener
        let  h = ()=>{console.log("mouse over the heading");} 
        heading.addEventListener('mouseover',h);
        heading.removeEventListener('mouseover',h);
        
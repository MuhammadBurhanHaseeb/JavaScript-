let toggleButtun =document.createElement('button');
toggleButtun.innerText = "Toggle Button";
let bodytag = document.querySelector('body');
bodytag.prepend(toggleButtun);
let x = 'light';
toggleButtun.addEventListener('click',(e)=>{
    
    if( x == 'light'){
        bodytag.classList.remove('light');
        x='dark';
        // document.querySelector('body').style.backgroundColor = 'black'; 
        bodytag.classList.add('dark');   }
    else if(x== 'dark'){
        x='light';
        bodytag.classList.remove('dark');
        // document.querySelector('body').style.backgroundColor= 'white';
        bodytag.classList.add('light');
    }
    console.log(bodytag.getAttribute('class'));
    console.log("hhhd");

 });




 // this is for paragraph
    let para = document.createElement('p');
    para.innerText = "This is a paragraph";
    bodytag.prepend(para);

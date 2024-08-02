const url ="https://cat-fact.herokuapp.com/facts";
// let promise = fetch('https://cat-fact.herokuapp.com/users');
// promise.then(response => {
//     return response.json();
// }).then(data => {    
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });
// fetch(url);
// console.log(fetch(url));

//through async await
const data = async () => {
    console.log("fetching data .......");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data[0].text);
    paragraph.innerText = data[0].text;
    
};
// through promise then method

function promise(){
    let promise = fetch(url , );
    promise.then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        console.log(data[0].text);
        paragraph.innerText = data[0].text;
    }).catch(error => {   
        console.log(error);
    });
}







// console.log(data);

// random paragraph generator to store api text in it 
let paragraph = document.createElement('p');
document.body.appendChild(paragraph);

// button to fetch data from api
let button = document.createElement('button');  
button.innerText = "Fetch Data";
document.body.appendChild(button);
// button.addEventListener('click', data);
button.addEventListener('click', promise);

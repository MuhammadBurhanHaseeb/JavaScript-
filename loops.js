//for loops
let nameee ="BHB";
for(let i =  0 ; i<5 ; i++) 
{
console.log(nameee);
}
//while loops
let i = 0;
while(i<5)
{
console.log(nameee , i );
i++;
}
//do while loops
let j = 0;
do{
console.log(nameee , j);
j++;

}
while(j<5);

//for of loop 
nameeee = "Burhan";
for (let A of nameeee)
{
console.log(A);
}// for of loop is used to iterate over the elements of an array or string.
//for in loop
let obj = {
    name : "Burhan",
    age : 20,
    city : "Karachi"
}
for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`);
}



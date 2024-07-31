// get no of vowel in the string 
function vowel(s)
{
    let count=0;
    for(let i of s)
    {
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u')
        {
            count++;
        }
    }
    return count;
}
console.log(vowel("hello")); //2


// Convert the above function into arrow function
const Vowel = (s) => {let count=0;
    for(let i of s)
    {
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u')
        {
            count++;
        }
    }
    return count;
}
console.log(Vowel("burhan")); //2

//given array of no and print the square of each value using the for each loop
let arrayaa=[1,2,3,4,5,6,7,8,9];
function square(s)
{
    console.log(s*s);
}
arrayaa.forEach(square);

console.log("students grade gretor then 90 "); 
// filter function to get the student no gretor than 90 
let ar=[1,2,3,4,5,6,7,8,9,10 , 80 , 90 , 99];
let ar3=ar.filter((val)=> {return val>90});
console.log(ar3);




// get no from user and make array from 1 to n 
// then reduc the array to get the sum of all the no
//then reduce to product of all the no
let n = prompt("Enter the no");
d=[];
for(let i=1;i<=n;i++)
{
    d.push(i);
}
console.log(d);
let l =  d.reduce((acc,val)=>{return acc+val});
 let ll=d.reduce((acc,val)=>{return acc*val});
 console.log(l);
    console.log(ll);

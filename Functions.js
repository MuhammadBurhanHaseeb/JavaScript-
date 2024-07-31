function add (a,b)
{
    return a+b;
}
function sub (a,b)
{
    return a-b;
}
function mul (a,b)
{
    return a*b;
}
function div (a,b)
{
    return a/b;
}
function avg (a,b)
{
    return (a+b)/2;
}

console.log(add(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(div(2,3));
console.log(avg(2,3));



function myIntro()
{
    console.log("Hello, I am a Burhan Butt");

}
myIntro();


// arrows functions
const add = (a,b) =>  a+b;
console.log(add(2,3));


console.log("Hello, I am a Burhan Butt");
console.log("Hello, I am a Burhan Butt");
console.log("Hello, I am a Burhan Butt");
//for each loop in arrays 
arrays=["Burhan","Ali","Ahmed","Khan"];
function vovel(s)
{
    let count=0;
    for(let i of s)
    {
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u')
        {
            count++;
        }
    }
    console.log(count);

}


console.log("Foreach function");
let arr=[1,2,3,4,5,6,7,8,9,10];
arrays.forEach( (val)=>
{
    let count=0;
    for(let i of val)
    {
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u')
        {
            count++;
        }
    }
    console.log(val , count);
});
arrays.forEach(vovel);


// map function 
console.log("Map function");
let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=arr1.map((val)=>
{
    return val*val;
});
console.log(arr1);
console.log(arr2);

console.log("fillter function");
// filter function
let arr3=[1,2,3,4,5,6,7,8,9,10];
let arr33=arr3.filter((val)=> {return val%2== 0});
console.log(arr33);

// reduce function
console.log("Reduce function");
let arr4=[1,2,3,4,5,6,7,8,9,10];
const summ=arr4.reduce((acc,val)=>
{
    return acc+val;
});
console.log(summ);

console.log("Reduce ternary largest no");
//to get the max no 
console.log("Reduce function");
let as=[1,2,3,4,5,6,7,8,9,10];
const max=arr4.reduce((acc,val)=>
 {
    return acc>val ? acc:val;
     //return acc<val ? acc:val; // smallest no 
});
console.log(max);
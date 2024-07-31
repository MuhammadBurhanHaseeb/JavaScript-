
// class averaga marks
let arrayMarks =[85,97,87,45,66,77,22];
let sum =0;
for(let i = 0 ; i <arrayMarks.length;i++ )
{
    sum = sum + arrayMarks[i];
}
let av = sum / arrayMarks.length;
console.log(av,"%" , sum );

// foreach( s in arrayMarks)
// {
// sum = sum + s
// }
// console.log(sum)

//chnage the array after apply an discount on each item in the array 
let Arrayy = [250,645,300,900,50]; 
console.log(Arrayy);
for(let i = 0 ; i < Arrayy.length ; i++ )
{
     let v = (Arrayy[i]/100)*10;
     Arrayy[i] -=v;

}
console.log(Arrayy);

// create a array to store companies 
//remove the first comapny array 
let array2=["Google","Microsoft","Apple","Amazon","Facebook"];
array2.shift();
console.log(array2);
// remove apple and replace it in place with uber
array2.splice(1,1,"Uber");
console.log(array2);
//add tesla at the end
array2.push("Tesla")
console.log(array2);
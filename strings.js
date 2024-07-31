let naseeb = "apna college bhb";
console.log(naseeb.length);
console.log(naseeb.indexOf("college"));// means starting index of college
console.log(naseeb.lastIndexOf("college"));//last index of college
console.log(naseeb.charAt(3));//means character at index 3
console.log(naseeb.endsWith("b"));//means naseeb ends with b
console.log(naseeb.includes("coll"));// means coll is present in naseeb
console.log(naseeb.substring(0, 5));// means from 0 to 5
console.log(naseeb.slice(0, 5));// means from 0 to 5
console.log(naseeb[2]);// means character at index 2
console.log(naseeb.split(" "));// means split naseeb from space
console.log(naseeb.replace("college", "school"));// means replace college with school
console.log(naseeb.toUpperCase());// means convert naseeb to uppercase
console.log(naseeb.toLowerCase());// means convert naseeb to lowercase
console.log(naseeb.trim());// means remove extra spaces from naseeb
console.log(naseeb.repeat(2));// means repeat naseeb 2 times
console.log(naseeb.startsWith("a"));// means naseeb starts with a
console.log(naseeb.search("college"));// means starting index of college
console.log(naseeb.match(/college/g));// means match college globally

let speacialstring=`my name is naseeb
mwkf,wnf,n
nbfmsfsjms
smfnsnf`;// means we can use backticks for string // template literals
//benifits 

console.log(speacialstring);

let obj={
    name:"naseeb",
    age:21,
    college:"bhb"
}
// console using literals 
let obj1={
    name:obj.name,
    age:obj.age,
    college:obj.college
}
console.log(`my name is ${obj.name} and my age is ${obj.age} and my college is ${obj.college}`);

let myage= `my age is ${12+12}`;
console.log(myage);
console.log(`my age \n is\t ${obj.age+obj.age}`);
console.log (naseeb.trim());
//conact 
let str1="naseeb";
let str2="khan";
console.log(str1.concat(str2));
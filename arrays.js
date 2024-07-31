let marks =["101" , "102" , "103" , "104" , "105"];
let students = ["John" , "Doe" , "Jane" , "Doe" , "Doe"];
let subjects = ["Maths" , "Science" , "English" , "History" , "Geography"];
marks.push("106");
marks.pop("106");
console.log( marks);
console.log(students[3]);


for(let i = 0; i < marks.length; i++)
    {
    console.log(marks[i]);
    }



for(let hero of marks)
    {
        console.log(hero)
    }    

    //array methods

    let arrayMarks =[85,97,87,45,66,77,22];
    arrayMarks.push(100);
    console.log(arrayMarks);
    anb=arrayMarks.pop();
    console.log(arrayMarks.toString());
    console.log(anb);

    console.log("jhsdlldhlqcqc");
    arrayMarks.unshift(100);
    console.log(arrayMarks);
    let fierstcgar = arrayMarks.shift();
    console.log(arrayMarks);
    console.log(fierstcgar);
   console.log( marks.concat(arrayMarks));
   console.log("jhsdlldhlqcqc");
   console.log(arrayMarks.slice(1,2));
    console.log(arrayMarks);
console.log("n,d,walDSN,ND,NDnDdn,d,nd,NDn,ND,")
console.log(arrayMarks);
    console.log (arrayMarks.splice(1,2,100,200));
    console.log(arrayMarks);

    console.log (arrayMarks.splice(1,2,100,200,300,400));
    console.log(arrayMarks);
let burhan ;
burhan=prompt("Enter your age :");
if(a%5==0){
    console.log("divisible by 5");
}

let studentMarks;
let studentGrade = prompt("Enter your marks :");
if (studentGrade > 80 && studentGrade <= 100) {
    studentMarks = "A+";
}
else if (studentGrade > 70 && studentGrade <= 80) {
    studentMarks = "A";
}
else if (studentGrade > 60 && studentGrade <= 70) {
    studentMarks = "b";
}
else if (studentGrade > 50 && studentGrade <= 60) {
    studentMarks = "c";
}
else if (studentGrade > 40 && studentGrade <= 50) {
    studentMarks = "d";
}
else if (studentGrade > 30 && studentGrade <= 40) {
    studentMarks = "e";
}
else if (studentGrade >= 0 && studentGrade <= 30) {
    studentMarks = "f";
}
else {
  console.log("Invalid");
}
console.log(studentMarks);




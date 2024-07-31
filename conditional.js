//conditional statements
//if 
age=12;
if (age ===12) {
  console.log("I am inside if block");
}

// if else
if (age === 12) {
  console.log("I am inside if block");
}else
{
  console.log("I am inside else block");
}
// if else if
if (age === 12) {
  console.log("I am inside if block");
}
else if (age === 10) {
    console.log("I am inside else if block");
    }
else{
    console.log("I am inside else block");
    }
aaaa=23;
    if(aaaa%2==0){
        console.log("even");
    }
    else if(aaaa%2!=0){
        console.log("odd");
    }
    else{
        console.log("invalid");
    }


// switch case

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// ternary operator

let agee = 18;
console.log((agee > 18) ? 'You can vote' : 'You cannot vote');
let result =(agee > 18) ? 'You can vote' : 'You cannot vote';
console.log(result);
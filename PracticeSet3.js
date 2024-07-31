// print even no from 0 to 100 using for loop
for(let i = 0 ; i<=100 ; i++)  
{
    if(i % 2 == 0 )
    {
        console.log(i);
    }
}
// guessing no from the user until it said correct no 
let no = 0;
let gameNo = 55;
while(no != gameNo)
{
    no = parseInt(prompt("Enter a no between 1 to 100"));
    if(no > gameNo)
    {
        console.log("Lower no please");
    }
    else if(no < gameNo)
    {
        console.log("Higher no please");
    }
    else
    {
        console.log("Congratulation you have guess the correct no");
    }
}
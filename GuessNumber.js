var userInput;
var rnum;
rnum=Math.floor(Math.random()*11);
var readline=require('readline');

//Create an interface to read input
var r1=readline.createInterface
({
    input:process.stdin,
    output:process.stdout });

//Ask for user input
r1.question('Guess a number between 1-10: ',(input)=>{
userInput=input;
//console.log('You entered:', userInput);

//Close the interface after input
r1.close();

if (rnum==userInput)
{
    console.log("Good Job!!!");
}
else{
    console.log("Not Matched!!!");
}

console.log("You guessed",userInput);
console.log("Generated Number",rnum);
});



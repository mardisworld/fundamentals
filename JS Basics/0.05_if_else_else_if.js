var bankAccount = 50;
var appleWatch = 400;
var appleWatchGold=10000;


if (bankAccount>appleWatch) {
	console.log("make it rain boi");
} else if (bankAccount<appleWatchGold){
	console.log("Start selling plasma to get this!!!");

} else {
	console.log("Get a job you hippie");

}

//TODO create a personAge then use if/else/elseif/else to check if that person is 
//eligible to vote

var personAge=19;
var votingAge=18;
var registertoVote=false;

if ((personAge>=votingAge) && (registertoVote===true)) {
	console.log("You are elibible to vote.")
} else if ((personAge>=votingAge) && (registertoVote===false)){
	console.log("Go get registered to vote and make a difference!")

} else {
	console.log("Not old enough to vote.")
}

//Challenge: create a var and assign it a value
//next create an if, else if, else to evaluate if the number is divisible by 2 or 3
//console.log that it is 

var number=9;
// if ((number%2===0) && (number%3===0))
if (number%6==0) {
	console.log("The number is divisible by 2 and 3.");
} else if (number%3==0){
	console.log("The number is divisible by 3.");

} else if (number%2==0){
	console.log("The number is divisible by 2");

} else {
	console.log("The number is not divisible by 2 or 3");
}

//

var sillyGitTestVariable="Hi!"


//When you have time, experiment with changing the order of the 
//conditionals
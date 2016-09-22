//Ex1. Declaration
function helloWorld(){
	console.log("Hello World");
}

//Ex1. Call
helloWorld ();


//Ex2. Declaration
function printMyName() {
	console.log("Marissa");
}

//Ex2. Call 
printMyName();


// var name=function() {
// 	console.log("Marissa")
// }

function addNumbers(){
	var x=10;
	var y=10;
	console.log(x + y);
}

addNumbers();

function multiplyNumbers(){
	var x=10;
	var y=10;
	console.log(x * y);
}

multiplyNumbers();


///Parameters & Arguments

function printNumber(x){
	console.log("The number you entered was: " + x);
}

printNumber(6);


function bankPinAccepted(x) {
	//Challege: use conditional Statements to 
	//check whether the pin is correct or not
	var cardPin=4567;
	if (x===cardPin)
	console.log(x + " is the correct number.");
	else console.log(x + " is not the correct number.");
}

//Argument
bankPinAccepted(1234);

function numAdd(a,b) {
	return a + b; //key word return very important
}

console.log(numAdd("James", " Paul "));
console.log(numAdd(1,2));

//--------------------Bronze--------------------------//
//Write a function with two strings as arguments.
//The function should concatentate the string.*/

function conCat(s1,s2) {
	return s1 + s2;

}

console.log(conCat("cat", "mouse"));

//--------------------Silver--------------------------//
//Write a function that will help me easily calculate monthly bills.*/

function calcBills(R,W,E) {
	return R+W+E;
}

console.log("Your monthly bills add up to: $" +calcBills(800,75,150))

var paulBills=calcBills(400,30,30);
var jamesBills=bills(600,30,30);

console.log ("James Bills: " + jamesBills);
console.log ("Paul's Bills: " + paulBills; )


/*------------------------GOLD-----------------------------------

Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/

function calcCoke(numCokes,priceCokes,indTax){
	var totalCost;
	totalCost=numCokes*priceCokes*(1.0+indTax);
	console.log(numCokes +" Cokes will cost you $" + totalCost);
}

calcCoke(100,0.99,0.07);

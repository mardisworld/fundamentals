//Booleans or true/false values and help with control flow and 
//logic

var hangry=true;
console.log(hangry);

//Operators are used for comparisons
//== evaluates whether the values are equal = is an assignment
//=== Strict Equality "7" === 7;
//!= Inequality/does not equal
//!== Strict Inequality
//> Greater than
//>= Greater or equal
//< Less than
//<=Less than or equal

var num = 5 < 2;
console.log(num); //returns false

var newNum = 5>2;
console.log(newNum); //returns true

console.log((num==newNum)); //returns false

var numberOne=1;
var numberTwo= "1";

console.log((numberOne==numberTwo)); // compares them returns false
console.log((numberOne===numberTwo)); //returns true (absolute)

//TODO Create console.logs that return t/f for each of the 
//remaining operators

// >=
console.log(2 >= 2); //returns true
console.log(1 >= 2); //returns false

// <=
console.log( 4<=4); //returns true
console.log(10<=4); //returns false

//!=
var a =10;
var b =20;
var c=10;
console.log(a != b); //returns true
console.log(a != c)  //returns false

//!==
var firstName=12345;
password="12345"
var jamesPassword=parseInt(password);
//!==compares type of variable and value assigned to variable
//!==returns the opposite of the evaluation
console.log(firstName === password); //true
console.log(firstName !== password); //false
console.log(firstName !== jamesPassword); //

var p1="12345";
console.log(p1);
var p2 = 12345;

var newp1 = parseInt(p1);
console.log(newp1);
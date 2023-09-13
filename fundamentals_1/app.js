/*
console.log("Hello World!");
alert("Make my funk the P-Funk!");
let js = "fantastic";
if (js === "fantastic") alert("I love JavaScript!");
*/

// What is JavaScript?
// JavaScript is a high-level object-oriented multi-paradigm programing language.

// VALUES AND VARIABLES
// Variables can not start with a number and can only contain numbers, letters, underscores and the dollar sign.
// Variables can not be named after reserved JS keywords I.E. "function".
// Do not start a variable with an uppercase letter.
let firstName = "Michael";
console.log(firstName);

firstName = "Lisa";
console.log(firstName);

// When naming variables, be as clear and descriptive as possible.
let myFirstJob = "Shoney's";
let myCurrentJob = "Graphic Artist";
console.log(`My name is ${firstName}. I used to work for ${myFirstJob} when I was in college. Now I am a ${myCurrentJob}.`);

// There are 7 primitive data types:
// Number, String, Boolean, Undefined, Null, Symbol, and Bigint

// Boolean is either true or false
let javascriptIsEasy = false;
console.log(javascriptIsEasy);

// Type of data type
console.log(typeof true);
console.log(typeof 12);
console.log(typeof "Hello");
console.log(typeof javascriptIsEasy);

// Reassigning the value of a variable is called dynamic typing
javascriptIsEasy = "Are you kidding me!";
console.log(javascriptIsEasy);
console.log(typeof javascriptIsEasy);

// Undefined
let favFootballTeam;
console.log(typeof favFootballTeam);

favFootballTeam = "Mizzou Tigers";
console.log(favFootballTeam);

// Basic Math Operators
const now = 2023;
const ageMike = now - 1968;
const ageCharles = now - 2005;
console.log(`Mike is ${ageMike}.`);
console.log(`My young buddy Chuck turned ${ageCharles} today.`);

console.log(ageMike * 2, ageMike / 5, 5 ** 3);

const unoName = "Optimus";
const dosName = "Prime";
console.log('My name is' + ' ' + unoName + ' ' + dosName + '.');
console.log(`My name is ${unoName} ${dosName}, leader of the autobots.`);

// Assignment Operators
let x = 20 + 5; // x = 25
x += 20; // x = x + 20
x *= 2; // x = x + 20 * 2
x ++; // x + 1
x --; // x - 1
console.log(x); // x will now equal 90

// Comparison Operators return a Boolean value
console.log(ageMike > ageCharles); // >, <, >=, <=

const ofDrinkingAge = 21;
console.log(ageCharles >= ofDrinkingAge);
console.log(ageCharles < ofDrinkingAge);

// Strings and Template Literals
const myCity = "Saint Louis";
const myState = "Missouri";
const yearFounded = 1764;

firstName = "Catfish";

const michael = `Hola. I'm ${firstName}. I live in ${myCity}, ${myState}. It was established in ${yearFounded}.`;
console.log(michael);

// Multi line string
console.log(`String
multiple
lines`);

// If/Else Statements
let age = 15;

if(age >= 18) {
    console.log('George is old enough to start driving.🌟');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sorry George, you are not old enough to drive.😢 You have ${yearsLeft} years to go.`);
}

const birthYear = 2010;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Type Conversion
const inputYear = '1968';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear ) + 18);

console.log(Number('Mike'));
console.log(typeof NaN);

console.log(String(55), 55);

// Type Coertion
console.log('I am ' + 55 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('30' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

let m = 2 + 3 + 4 + '5';
console.log(m);

// 5 Falsy Values are: 0, '', undefined, null and NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined));//false
console.log(Boolean("Mike"));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false

const money = 100;
if(money) {
    console.log("Don't spend it all! 😂");
} else {
    console.log('Sorry but you are broke!😭');
}

let height;
if(height) {
    console.log('Height is defined.');
} else {
    console.log('Height is undefined.');
}

// Equality Operators == vs ===
age = 21;
if(age === 21) console.log('Welcome to adulthood!😃');

// === is a strict equality operator. It only returns true when both values are exctly the same.
console.log(30 === 30); //true
console.log(30 === '30'); //false

//== is a loose equality operator that does type coertion.
console.log(30 == '30'); //true
if(age == '21') console.log('Welcome to adulthood!😃');

// Overall it is better to use the ===

/*
Prompts
const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);

if(favorite === 100) {
    console.log('All right! 100 is a great number!');
} else if(favorite === 50) {
    console.log(`50 is also a fantastic number`);
} else {
    console.log(`This number is neither 100 or 50.`);
}

// Different operator
if(favorite !== 100) console.log(`Why not 100?`);
*/

// Logical Operators
const hasDriversLiscense = true;
const hasGoodVision = true;

console.log(hasDriversLiscense && hasGoodVision); // And && Operator both must be true to get true.
console.log(hasDriversLiscense || hasGoodVision); // Our || Operator only needs 1 side to be true.
console.log(!hasGoodVision) // Not ! inverts the Boolean value.

if(hasDriversLiscense && hasGoodVision) {
    console.log(`It's OK for Wendy to drive without glasses.`);
} else {
    console.log(`Wendy should not drive without her glasses.`);
}

const isTired = false;
console.log(hasDriversLiscense || hasGoodVision || isTired);

if(hasDriversLiscense && hasGoodVision && !isTired) {
    console.log(`It's OK for Wendy to drive.`);
} else {
    console.log(`Wendy should not be driving.`);
}

// Switch Statement
const day = 'Friday';

switch(day) {
    case 'Sunday':
        console.log('Watch NFL football on TV.');
    case 'Monday':
        console.log('Plan your weekly activities.');
        console.log('Go to coding meetup.');
        break;
    case 'Tuesday':
        console.log('Go to coding class.');
        break;
    case 'Wednesday':
        console.log('Go to swimming class.');
        break;
    case 'Thursday':
        console.log('Go out to eat with the family.');
        break;
    case 'Friday':
        console.log('Attend Friday night football game.');
        break;
    case 'Saturday':
        console.log('Watch NCAA Football on TV.'); 
        break;
    default:
        console.log('Not a valid day!');  
}

// Now write this switch as an if statement

if(day === 'Sunday') {
    console.log('Watch NFL football on TV.');
} else if(day === 'Monday') {
    console.log('Plan your weekly activities.');
    console.log('Go to coding meetup.');
} else if(day === 'Tuesday') {
    console.log('Go to coding class.');    
} else if(day === 'Wednesday') {
    console.log('Go to swimming class.');    
} else if(day === 'Thursday') {
    console.log('Go out to eat with the family.');    
} else if(day === 'Friday') {
    console.log('Attend Friday night football game.');    
} else if(day === 'Saturday') {
    console.log('Watch NCAA Football on TV.');    
} else {
    console.log('Not a valid day!');   
}

// The Conditional Operator
const yourAge = 16;
//yourAge >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water.');

const drink = yourAge >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);


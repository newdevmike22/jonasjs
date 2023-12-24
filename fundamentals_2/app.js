'use strict';

/*
// A function is a piece of code that can be used over and over.
function logger() {
    console.log('My name is Mike.');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Fruit juice with ${apples} apples and ${oranges} oranges.`
    return juice;
} 

const fruitJuice = fruitProcessor(5, 2);
console.log(fruitJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function exerciseRoutine(pushups, situps, chinups) {
    // console.log(pushups, situps, chinups);
    const workout = `Big Doug's workouts include ${pushups} sets of pushups, ${situps} sets of situps and, ${chinups} sets of chinups.`;
    return workout;
}

const exercise = exerciseRoutine(15, 10, 12);
console.log(exercise);

const getFit = exerciseRoutine(10, 8, 15);
console.log(getFit);

const num = Number('76');
console.log(num);
*/

/* Function Declarations vs Expressions

// Example of a function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1968);

// Example of a function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;   
}

const age2 = calcAge2(1968);
console.log(age1, age2);
*/

/* Arrow Functions
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1968);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {

    const age = 2023 - birthYear;
    const retirement = 64 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1968, 'Michael'));
console.log(yearsUntilRetirement(1990, 'Chuck'));

const aboutPerson = (fullName, currentAge, profession) => {
    const name = fullName;
    const howOld = currentAge;
    const job = profession;
    return `${fullName} is a ${currentAge} year old ${profession}.`;
}

console.log(aboutPerson('Shirley', 33, 'web developer'));

// Calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple and ${orangePieces} orange slices.`;
    return juice;
}

const fruitJuice = fruitProcessor(2, 4);
console.log(fruitJuice);

// Write similiar function as an arrow function
const fruitJuicer = (strawberries, bananas, mangos) => {
 const strawberryPieces = cutFruitPieces(strawberries);
 const bananaPieces = cutFruitPieces(bananas);
 const mangoPieces = cutFruitPieces(mangos);

 const smoothie = `A delicious fruit smoothie with ${strawberries} strawberries, ${bananas} banana and ${mangos} mango slices.`;
 return smoothie;
}

console.log(fruitJuicer(2, 4, 6));

const yearOfBirth = 1968;

function yearsTilRetirement(yourName) {
    const myAge = 2023 - yearOfBirth;
    const retire = 64 - myAge;
    return `${yourName} retires in ${retire} years.`;
}

console.log(yearsTilRetirement('Michael Dodson'));

const calcYears = function(currentYear) {
    return currentYear;
}

const yearsTilCollegeGraduation = function(currentYear, studentName, graduationMonth) {
 const graduationYear = calcYears(currentYear);
 const graduation = graduationYear + 4;
 return `${studentName} is on schedule to graduate in ${graduationMonth} of ${graduation}.`;
}

console.log(yearsTilCollegeGraduation(2023, 'Molly Stewart', 'May'));


//**********


// Arrays
const friends = ['Eric', 'Orlando', 'Jay'];
console.log(friends);

const years = new Array(1968, 1986, 1971, 2014);
console.log(years);

console.log(`My good buddy ${friends[2]} was born in ${years[2]}.`);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// mutating the array
friends[0] = 'Lisa';
console.log(friends);
console.log(`${friends[0]} is my favorite girl.`);

// arrays can hold multiple types of data
const nickName = "Mike";
const mike = [nickName, 'Dodson', 45 + 10, 'web developer', friends[2]];
console.log(mike);
console.log(`${mike[0]} ${mike[1]} is a ${mike[2]} year old ${mike[3]}. ${mike[4]} is his best friend.`);

// if else with an array
if (years[1] >= years[2]) {
    console.log(`${friends[2]} was born before ${friends[1]}.`)
} else if (years[1] <= years[2]) {
    console.log(`${friends[1]} was born before ${friends[2]}.`)    
} else {
    console.log(`Both my friends were born in the same year.`);
}

// Exercise: Get the age of a person by using the year array.
const calcAge = function (birthYear) {
    return 2023 - birthYear
}

const year = [1968, 1971, 1998, 1973, 2004]
console.log(calcAge(year[3]));
console.log(`Angie is ${calcAge(year[3])} years old.`);

// Basic Array Operations (Methods)

// Adding an element to the end of an array using push
const buddies = ['Larry', 'Bruce', 'Melvin'];
buddies.push('Jay');
console.log(buddies);

// Adding to the start of an array
buddies.unshift('Kim');
console.log(buddies);

// Removing an element from the end of an array using pop
buddies.pop();
console.log(buddies);

// Removing an element from the start of an array
buddies.shift();
console.log(buddies);

// Finding the index of an array element
console.log(buddies.indexOf('Bruce'));

// Using includes
console.log(buddies.includes('Bruce')); // true
console.log(buddies.includes('Lisa')); // false

buddies.unshift(23);
console.log(buddies.includes(23)); // true
console.log(`You have a mysterious online friend called "${buddies[0]}".`);
*/

// **********

// Objects
const michael = {
    firstName: 'Michael',
    lastName: 'Johnson',
    age: 2023 - 1968,
    occupation: 'Web Developer',
    siblings: ['Kevin', 'Andrea', 'Marie']
};
console.log(michael);

// Getting a property from an object using dot
console.log(michael.occupation);

// Getting a property from an object using brackets
console.log(michael['siblings']);

const nameKey = 'Name';
console.log(michael['first' + nameKey]);
console.log(michael['last' + nameKey]);












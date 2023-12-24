'use strict';

/*
// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    const countryName = country;
    const countryPopulation = population;
    const countryCapitalCity = capitalCity;
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
};

console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('The United Kingdom', 67, 'London'));
console.log(describeCountry('The United States', 332, 'Washington DC'));

// LECTURE: Function Declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const population1 = percentageOfWorld1(1441);
const population2 = percentageOfWorld1(1445);
const population3 = percentageOfWorld1(340);
console.log(`China accounts for ${Math.round(population1)}% of the world's total population.`);
console.log(`India accounts for ${Math.round(population2)}% of the world's total population.`);
console.log(`The United States accounts for ${Math.round(population3)}% of the world's total population.`);

// LECTURE: Function Expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const population4 = percentageOfWorld2(145);
const population5 = percentageOfWorld2(203);
const population6 = percentageOfWorld2(218);
console.log(`Russia accounts for ${Math.round(population4)}% of the world's total population.`);
console.log(`Brazil accounts for ${Math.round(population5)}% of the world's total population.`);
console.log(`Nigeria accounts for ${Math.round(population6)}% of the world's total population.`);

// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => {
    return (population / 7900) * 100;    
}

const population7 = percentageOfWorld3(129);
console.log(`Mexico accounts for ${Math.round(population4)}% of the world's total population.`);

// LECTURE: Functions Calling Other Functions
function percentageOfWorld4(population) {
    return (population / 7900) * 100;
}

const describePopulation = (country, people) => {
    const population8 = percentageOfWorld4(people); 
    const nation = `${country} has ${people} million people which is about ${Math.round(population8)}% of the world.`;
    return nation;
}

console.log(describePopulation('Pakistan', 242));
console.log(describePopulation('Bangladesh', 171));
console.log(describePopulation('Indonesia', 278));

// LECTURE: Introduction to Arrays
const place = ['China', 'India', 'United States', 'Indonesia', 'Pakistan'];
const populations = [1441, 1445, 334, 278, 242];
console.log(populations.length >= 5);

const percentages = [percentageOfWorld4(populations[0]), percentageOfWorld4(populations[1]), percentageOfWorld4(populations[2]), percentageOfWorld4(populations[3]), percentageOfWorld4(populations[4])];
console.log(percentages);
console.log(`${place[0]} is roughly ${Math.round(percentages[0])}% of the world's population.`);
console.log(`${place[1]} is roughly ${Math.round(percentages[1])}% of the world's population.`);
console.log(`The ${place[2]} is roughly ${Math.round(percentages[2])}% of the world's population.`);
console.log(`${place[3]} is roughly ${Math.round(percentages[3])}% of the world's population.`);
console.log(`${place[4]} is roughly ${Math.round(percentages[4])}% of the world's population.`);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ['Canada', 'Mexico', 'Cuba', 'Dominican Republic'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log(`Germany is a great place to visit.`);
} else {
    console.log(`Probably not a central European country 😂.`);    
}

neighbours[neighbours.indexOf('Dominican Republic')] = 'The Great Dominican Republic';
console.log(neighbours);

// LECTURE: Introduction to Objects

const myCountry = {
    country: 'United States of America',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 334,
    neighbors: ['Canada', 'Mexico', 'Dominican Republic', 'Haiti']
};

console.log(myCountry);
*/

// LECTURE: Dot vs Bracket Notation

const Michael = {
    firstName: "Michael",
    lastName: "Dodson",
    age: 2023 - 1968,
    career: "web developer",
    friends: ["Arthur", "Vincent", "Jay"]
};

console.log(Michael);

// dot notation
console.log(Michael.career);

// bracket notation
console.log(Michael['career']);

const nameKey = 'Name';
console.log(Michael['first' + nameKey]);
console.log(Michael['last' + nameKey]);

const interest = prompt('What do you want to know about Michael? Choose between firstNme, lastName, age, career, and friends.');

if(Michael[interest]) {
    console.log(Michael[interest]);
} else {
    console.log('Wrong request! Choose between firstNme, lastName, age, career, and friends.');
};

// Using dot and bracket notation to add a value to a property
Michael.location = "St. Louis, Missouri";
console.log(Michael.location);

Michael['favTeam'] = "Golden State Warriors";
console.log(Michael['favTeam']);

console.log(`${Michael.firstName} has ${Michael.friends.length} friends. ${Michael.friends[2]} is his best friend.`);
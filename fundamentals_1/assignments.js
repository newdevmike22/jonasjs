let country = "United States";
let continent = "North America";
let population = 334;

console.log(`I live in the ${country} of America.`);
console.log(`The ${country} is located in ${continent}.`);
console.log(`The population of the ${country} is approximately ${population} million.`);

let isIsland = "Dominican Republic";
console.log(isIsland);

isIsland = true;
console.log(isIsland);

let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English"
console.log(language);

// const variables never change. Only use let when the variable is going to change.
// var can also be used to write variables but it is the outdated method.
const yearOfBirth = 1968;
console.log(yearOfBirth);

console.log(population / 2);
population ++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
console.log(`The ${country} is in ${continent}, and its ${population} people speak ${language}.`);

const fullName = `Jason "Big Boom" Brown`;
const job = `Bass Player`;
const age = 42;
const placeOfBirth = `St. Louis, MO`;
const whoIAm = `Hey good people! My name is ${fullName}. I'm a ${age} year old ${job}. I'm born, raised and still living in ${placeOfBirth}.`;
console.log(whoIAm);

const averagePopulation = 33;
country = "Portugal";
population = 11; 

if(population >= averagePopulation) {
    console.log(`The ${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average.`)
}

console.log('9' - '5'); // 4
console.log('19' - '13' + '17') // 617
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143
console.log('10' - '4' - '3' - 2 + '5'); // 15

/*
const numNeighbors = Number(prompt(`How many neighbour countries does your country
have?`));
console.log(numNeighbors);

if(numNeighbors === 1) {
    console.log('My country has more than 1 border.');
} else if(numNeighbors > 1) {
    console.log('My country has more than 1 border.');
} else {
    console.log('My country has no borders.');
}
*/
population = 334;
isIsland = false

if(language && population < 50 && isIsland) {
    console.log(`You should live in Portugal!😃`);
} else {
    console.log(`The United States does not meet your criteria.😩`);
}

language = 'Spanish';

switch(language) {
    case 'Chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers!');
        break;
    case 'English':
        console.log('3rd place in number of native speakers!');
        break;
    case 'Hindi':
        console.log('4th place in number of native speakers!');
        break;
    case 'Arabic':
        console.log('5th place in number of native speakers!');
        break;
    default:
        console.log('Great Language to! 🤩');
}

//const average = 15;
//const numPeople = average >= 21 ? 'The United States population is above average!' : 'The United States population is above average!';
//console.log(numPeople);

const usPopulation = 334 ;
const avgPopulation = usPopulation >= 40 ? "The US population is above average." : "The US population is below average.";
console.log(avgPopulation); // "Above Average"









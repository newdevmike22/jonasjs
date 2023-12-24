/*
// CHALLENGE 1
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (1.69 * 1.69); //273099.7
const BMIJohn = massJohn / (1.95 * 1.95); //241946.1

console.log(`Mark has a BMI of ${BMIMark}.`);
console.log(`John has a BMI of ${BMIJohn}`);

const markHigherBMI =  BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log(`Mark has a greater BMI than John? ${BMIMark > BMIJohn}`);

// CHALLENGE 2
// Write an if/else statement that will output the higher BMI between Mark and John. Output the results using a template literal and round the numbers off.
if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI of ${Math.round(BMIMark)} is higher than John's BMI of ${Math.round(BMIJohn)}.`);
} else {
    console.log(`John's BMI of ${Math.round(BMIJohn)} is higher than Mark's BMI of ${Math.round(BMIMark)}.`);
}

// CHALLENGE 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(Math.round(scoreDolphins), Math.round(scoreKoalas));

if(scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy!🏆');
} else if(scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy!🏆');    
} else if(scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!🏆');    
}

// CHALLENGE 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
*/

// CHALLENGE 5
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win!🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win!🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

// CHALLENGE 6

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);


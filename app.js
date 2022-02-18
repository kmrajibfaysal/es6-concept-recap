function print(n) {
    console.log(n);
}
const numbers = [1, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

numbers.forEach((number) => console.log(number));

const newNumbers = numbers.map((number) => number * 2);
// console.log(newNumbers);
print(newNumbers);

const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' },
];

const firstNames = fullNames.map((fullName) => fullName.first);
console.log(firstNames);
print(firstNames);

const rollDie = () => Math.floor(Math.random() * 6) + 1;
console.log(rollDie());

// const isEven = (number) => number % 2 === 0;
// // eslint-disable-next-line no-confusing-arrow
// const evenNumbers = numbers.map((number) =>
//     // eslint-disable-next-line implicit-arrow-linebreak
//     isEven(number) ? `${number} : Even` : `${number} : Odd`,
// );

// console.log(evenNumbers);
const oddNum = numbers.filter((number) => number % 2 === 0).sort((a, b) => a - b);
console.log(oddNum);
const test = numbers.reduce((a, b) => a + b);
const test2 = numbers.reduce((a, b) => a * b);
console.log(test);
console.log(test2);
const minimum = numbers.reduce((min, curr) => (min < curr ? min : curr));
console.log(minimum);
const person = {
    first: 'Rajib',
    last: 'Faysal',
    full() {
        return `${this.first} ${this.last}`;
    },
    shoutName() {
        setTimeout(() => {
            console.log(this);
            console.log(this.full());
        }, 2000);
    },
};

// person.shoutName();

console.log(person.full());

const person2 = {
    first: 'Rajib',
    last: 'Faysal',
    full: () => `${this.first} ${this.last}`, // Return undefined undefined : this is problem of arrow function
};

console.log(person2.full());

// spread operator
// REST parameters
// REST ...args contain all the arguments but work like array which is different than arguments
function sumAll(...nums) {
    return nums.reduce((total, el) => total + el);
}
console.log(sumAll(1, 2, 3, 4, 5, 6));

// example
function raceResults(gold, silver, ...others) {
    console.log(`Gold medal goes to ${gold}`);
    console.log(`Silver medal goes to ${silver}`);
    console.log(`And thanks to everyone else: ${others}`);
}

raceResults('rajib', 'farin', 'faysal', 'ola', 'oka', 'toka');

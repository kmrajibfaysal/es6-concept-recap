/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
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

// Destructuring
const scores = [22, 33, 43, 44, 121, 44, 535, 66, 4365, 3434, 44, 23, 23];

const [gold, silver, bronze, ...everyoneElse] = scores;
gold;
silver;
bronze;
everyoneElse;

// Destructuring from objects

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1938jff',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly elected political leader.',
    city: 'San Francisco',
    state: 'CA',
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// firstName;
// lastName;

// const { firstName } = user;
// const { lastName } = user;
// const { email } = user;

const { firstName, lastName, email } = user; // this is much shorter than above;

const { city } = user;
firstName;
lastName;
email;
city;

const { born: birthYear, died: deathYear, ola = 'N/A' } = user; // demo of making new variable using that syntax
// here ola is a default value;
birthYear;
deathYear;
ola;

// Destructuring parameters 239no. udemy video;

// Async Js

// Call Stack // loupe website shows the same
// const multiply = (x, y) => x * y;
// const square = (x) => multiply(x, x);
// const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);
// here function get called from the last one in to first one out which is called call stack

// console.log(isRightTriangle(3, 4, 5));
// setTimeout(() => {
//     console.log('working!');
// }, 3000);
// console.log('ola');

// Json
const data =
    '{"ticker":{"base":"BTC","target":"USD","price":"40282.58381530","volume":"9077.84614419","change":"32.63833294"},"timestamp":1645250344,"success":true,"error":""}';

const parseData = (d) => JSON.parse(d);

const newDataObject = parseData(data);
console.log(newDataObject);

const stringifyData = (d) => JSON.stringify(d);
const newDataJson = stringifyData(data);
console.log(newDataJson);
// destructuring practice
const fish = {
    id: 45,
    userName: 'Hilsha',
    price: 2000,
    phone: '012221212',
    address: 'chandpur',
    color: 'grey',
    origin: 'deshi',
};
const { phone } = fish;
console.log(phone);

const { id, userName, price } = fish;

console.log(`${id}.${userName}: ${price}`);
// more example
const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'Faysal',
        food: 'tometo',
    },
    web: {
        work: 'website development',
        employer: 22,
        framework: 'React',
        tech: {
            first: 'HTML',
            second: 'CSS',
            third: 'JavaScript',
            fourth: 'Python',
        },
    },
};

const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third, fourth } = company.web.tech;
const { test1 } = company;
console.log(test1); // undefined ; if property doesn't exist in object it will set to undefined

console.log(work);
console.log(framework);
console.log(food);
console.log(second);
console.log(third);
console.log(fourth);

// declare variable based on the name of an object property
const arr = [1, 2, 3, 4, 5, 6];
const [p, q, ...others] = arr;
console.log(p, q);
console.log(...others); // 3 4 5 6 this shows the values
console.log(others); // [3,4,5,6] this shows the rest array!

//  map practice
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
];

const productsName = products.map((product) => product.name);
const productPrices = products.map((product) => product.price);
console.log(productsName);
console.log(productPrices);

const filteredProducts = products.map((product) => product.price).filter((prices) => prices > 1000);
console.log(filteredProducts);

const pinkItem = products.find((product) => product.color === 'pink');
console.log(pinkItem);

const nums = [1, 2, 3, 4, 5];
const output = nums.filter((n) => n % 2);

console.log(output);

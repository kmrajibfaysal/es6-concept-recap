const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

numbers.forEach((number) => console.log(number));

const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);

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

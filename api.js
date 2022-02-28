/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
// const stuInfo = JSON.stringify({ name: 'James', roll: 3 });
// console.log(stuInfo.name);

// const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } };

// const { brand } = premikas.cars;

// console.log(brand);
// ____?____('https://jsonplaceholder.typicode.com/posts/1')
// .then(res => res.json())
//     .then(json => console.log(json));

//     fetch('https://jsonplaceholder.typicode.com/todo/1')
// .then(response => response ____?___ )
// .then(json => console.log(json))

// const info = { data: [{ language: 'Javascript', library: 'React' }] };

// console.log(info.data[0].library);

// const loadQuotes = () => {
//     setInterval(() => {
//         fetch('https://api.kanye.rest/')
//             .then((response) => response.json())
//             .then((json) => randomQuotes(json));
//     }, 5000);
// };
// const randomQuotes = (quotes) => {
//     setInterval(() => {
//         document.getElementById('randomQ').innerText = quotes.quote;
//         console.log(quotes.quote);
//     }, 6000);
// };

// *! hi there
// *? hi there
// ** hi there
// TODO: hi there

function loadUsers() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => displayUsers(users));
}

function loadPosts() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((post) => console.log(post));
}

function displayUsers(users) {
    const ul = document.querySelector('#users');
    // eslint-disable-next-line no-restricted-syntax
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
}

const data = { result: [{ userName: { title: 'Mr.', name: 'sakib khan' } }] };
console.log(data.result[0].userName.name);

const info = { name: '', phoneNumber: null };
console.log(JSON.stringify(info));

const array = { hobbies: ['dancing', 'singing', 'acting'] };
console.log(JSON.stringify(array));

// console.log(JSON.stringify({ eventName: 'birthday', date: Date().tomorrow() }));
console.log(JSON.stringify({ eventName: 'birthday', date: Date() }));
console.log(JSON.stringify({ eventName: 'birthday', date: new Date() }));

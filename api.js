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

function loadUsers() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => console.log(users));
}

function loadPosts() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((post) => console.log(post));
}

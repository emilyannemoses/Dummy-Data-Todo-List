console.log('sanity check')

let arrayOfTodos = [
{
    "userId": 14,
    "id": 1,
    "title": "I will not waste chalk.",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "this is the second title",
    "completed": true
}]

const fetchTodos = () => {
    fetch('https://reqres.in/api/users')
    // ('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        const ol = document.getElementById('todo-list')
        ol.innerHTML = 
        `
            <img src="${data.data[0].avatar}">
        `
    })
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        const ol = document.getElementById('todo-list')
        let li = document.createElement('LI')
        li.appendChild(document.createTextNode(arrayOfTodos[i].title))
        ol.appendChild(li)
    }
}
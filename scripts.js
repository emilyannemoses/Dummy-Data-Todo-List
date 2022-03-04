console.log('sanity check')

const todos = []

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const number = document.getElementById('number').value
        const ol = document.getElementById('todo-list')
        ol.style.display = 'block'
        let li = document.createElement('LI')
        const jsonString = JSON.stringify(data[number-1])
        todos.push(data[number-1])
        li.appendChild(document.createTextNode(jsonString))
        ol.appendChild(li)
    })
}

const completed = () => {
  clearTodos()
  clearNotCompleted()
  const ol = document.getElementById('completed')
  ol.style.display = 'block'
  let li = document.createElement('LI')
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      const jsonString = JSON.stringify(todos[i])
      li.appendChild(document.createTextNode(jsonString))
      ol.appendChild(li)
    }
  }
}

const notCompleted = () => {
  clearTodos()
  clearCompleted()
  const ol = document.getElementById('not-completed')
  ol.style.display = 'block'
  let li = document.createElement('LI')
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed === false) {
      const jsonString = JSON.stringify(todos[i])
      li.appendChild(document.createTextNode(jsonString))
      ol.appendChild(li)
    }
  }
}

const clearTodos = () => {
  const ol = document.getElementById('todo-list')
  ol.style.display = 'none'
}
const clearCompleted = () => {
  const ol = document.getElementById('completed')
  ol.style.display = 'none'
}
const clearNotCompleted = () => {
  const ol = document.getElementById('not-completed')
  ol.style.display = 'none'
}



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

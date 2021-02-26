const todos = [] 

const todo = document.querySelector("ul.todos")
const form = document.querySelector("form.add-todo-form")

function addTodo() {
    const target = document.querySelector('input[name="add-todo"]')
    const value = target.value
    todos.push({value: value, done: "false"})
    target.value = ""

    alert(`${JSON.stringify(todos)}`)
    populateList() 
};

form.addEventListener('submit', addTodo);

function populateList() {
    const box = document.createElement("INPUT");
    box.setAttribute("type", "checkbox");
    const labelTag = document.createElement("label")
    labelTag.appendChild(box) 
    const outerLi =  document.createElement("li") 
    outerLi.appendChild(labelTag)
    todo.appendChild(outerLi) 
};



module.exports = addTodo; 
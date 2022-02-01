//this array holds list of todo items
let todoItems = [];

// function will creates object of TO DO items base on what entered in input text and push it to todoItems array with unique id name created with Date.now().

function addTodo(text) {
    const todo  = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo)
    console.log(todoItems);
} 

// form element
const form = document.querySelector(".js-form")

// Event of form element
form.addEventListener("submit", event => {

    // prevent page refresh on form submission
    event.preventDefault()

    // input element
    const input = document.querySelector(".js-todo-input")

    // get value from input element and remove the white spaces
    const text = input.value.trim();

    if (text !== "") {
        addTodo(text);
        input.value = "";
        input.focus();
    }

})
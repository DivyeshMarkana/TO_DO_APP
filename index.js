//this array holds list of todo items
let todoItems = [];


function renderTodo(todo) {
    
    // List of todo items
    const list = document.querySelector(".js-todo-list")

    // If  todo.checked is true so assign "done" otherwise an assign empty string
    const isChecked = todo.checked ? "done" : "";

    // Create node of list 
    const node = document.createElement("li");

    //  set the class attribute on node element
    node.setAttribute("class", `todo-item ${isChecked}`);

    //  set the data-key attribute on node element
    node.setAttribute("data-key", todo.id);

    node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

    list.append(node);
}

// function will creates object of TO DO items base on what entered in input text and push it to todoItems array with unique id name created with Date.now().

function addTodo(text) {
    const todo  = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo)
    renderTodo(todo)
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


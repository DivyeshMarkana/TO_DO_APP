//this array holds list of todo items
let todoItems = [];


function renderTodo(todo) {

    // List of todo items
    const list = document.querySelector(".js-todo-list")
    const item = document.querySelector(`[data-key='${todo.id}']`)

    if (todo.deleted) {
        item.remove()

        // clear white space from the list container when "todoItem" is empty.
        if (todoItems.length === 0 ) {
            list.innerHTML = ""
        }
        return
    }

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

    if (item) {
        list.replaceChild(node, item)
    } else {
        list.append(node);
    }
}

const list = document.querySelector(".js-todo-list")

// Add event for checked item
list.addEventListener("click", event => {
    if (event.target.classList.contains("js-tick")) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey)
    }

    if (event.target.classList.contains("js-delete-todo")) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey)
    }
})

function toggleDone(key) {

    // find the position of an element in the array
    const index = todoItems.findIndex(item => item.id === Number(key));

    // locate the to do item in the todoItems array and set its property to the opposite.
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);


}

function deleteTodo(key) {
    
    const index = todoItems.findIndex(item => item.id === Number(key))

    const todo = {
        deleted: true,
        ...todoItems[index]
    }

    // remove the todo item from array by filtering it.
    todoItems = todoItems.filter(item => item.id !== Number(key))
    renderTodo(todo)
}


// function will creates object of TO DO items base on what entered in input text and push it to todoItems array with unique id name created with Date.now().

function addTodo(text) {
    const todo = {
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



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
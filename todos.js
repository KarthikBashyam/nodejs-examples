const fs = require('fs');

const addTodo = (title, body) => {

    let todos = [];
    let todo = {
        name: title,
        desc: body
    };
    todos.push(todo);
    console.log(`TODO Created with ${title} - ${body}`);

    fs.writeFileSync('todos.json', JSON.stringify(todos));
}

module.exports = {
    addTodo
}
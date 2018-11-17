const _ = require('lodash');
const yargs = require('yargs');
const todos = require('./todos');


//console.log(process.argv);
console.log(yargs.argv.todo);

todos.addTodo(yargs.argv.todo, yargs.argv.body);
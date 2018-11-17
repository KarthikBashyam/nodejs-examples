console.log('Welcome to node.');

const fs = require('fs');
const os = require('os');
const docs = require('./docs');

let user = os.userInfo();

console.log(user);

fs.appendFile('sample.txt', `Welcome ${user.username}. You are ${docs.age} old.`, (err) => {
    console.log(err);
});

docs.hello();

console.log(process.argv);
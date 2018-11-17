function hello(callback) {
    setTimeout(() => callback('Karthik'), 3000);

}

hello(function (name) {
    console.log(name);
})

console.log('Hello world');
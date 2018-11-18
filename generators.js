//Generator
function* hello() {
    yield 1;
    yield 2;
    yield 3;
}

let heObj = hello();

console.log(heObj.next());
console.log(heObj.next());
console.log(heObj.next());
console.log(heObj.next());

// Promises and async/await
hello = () => {
    return new Promise((resolve, reject) => {
        resolve('Hello World');
    });
}

async function test() {
    try {
        let message = await hello();
        console.log(message);
    } catch(e) {
        console.log('Catch :' + e);
    }
}

test();
hello().then(value => console.log(value)).catch(e => console.log('Error :' + e));


function square(number) {
    if(number % 2 === 0) {
        return Promise.resolve(number * 2);
    }
     return Promise.resolve(number * 2);
}

async function compute(number) {
    const result = await square(number);
    console.log(`Resullt is ${result}`);
    return result;
}

console.log('Square:'+ compute(2));
console.log('Completed');
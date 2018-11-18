var promise = new Promise((resolve, reject) => {
    resolve('Hello Promise.');
})

promise.then((res) => console.log(res))
       .catch(err => console.log(err));


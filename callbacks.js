function hello(callback) {
    setTimeout(() => callback('Karthik'), 3000);

}

hello(function (name) {
    console.log(name);
})

console.log('Hello world');


//Callback Chaining
getCountry = (callback) => {
    callback('Canada');
}

getCapital = (country, callback) => {
    if (country === 'Canada') {
        callback(country + " - " + 'Toronto');
    }

}

getCountry((country) => {

    getCapital(country, (city) => {
        console.log(city);
    });
})

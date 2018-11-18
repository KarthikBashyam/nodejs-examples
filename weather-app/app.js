const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

let address = encodeURIComponent(yargs.argv.address);

/*request(`http://www.mapquestapi.com/geocoding/v1/address?key=Q0YGd0iB1cROev04Fib67cF3gA3WeagT&location=${address}`,
    (err, response, body) => {
        console.log(body);
    });*/

axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=Q0YGd0iB1cROev04Fib67cF3gA3WeagT&location=${address}`)
    .then((response) => console.log(response.data));


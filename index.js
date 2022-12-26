const original = require('./data/original.json')
const check = require('./data/check.json')

const checkKeys = Object.keys(check)
let notFound = []

Object.keys(original).forEach(element => {
    if(!checkKeys.includes(element)) {
        console.log(element);
        notFound.push(element)
    }
});

console.log(`Total: ${notFound.length}`);



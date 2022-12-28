const original = require('./data/original.json')
const check = require('./data/check.json')

const checkKeys = Object.keys(check)


console.log(`Total: ${Object.keys(original).filter(element =>!checkKeys.includes(element))
    .map((element, i) => console.log(`${i+1}. ${element}`)).length}`);



// const fs = require('fs')
// var count = 0
// fs.rea('./data.txt', 'utf8', function(err, data) {
    
// console.log(`🚀 ~ file: index.js:5 ~ fs.readFile ~ data ${count++}`, data)
// })


const fs = require('fs');
let readStream = fs.createReadStream('./data.txt');
let data = '';

readStream.on('data', (chunk) => {
    data += chunk;
});

readStream.on('end', () => {
    const lines = data.split('\n');
    console.log(`[`)
    for(let i in lines) {
        console.log(`{id: ${i++}, item: '${lines[i]}'}`)
    }
    console.log(`]`)
    // do something with the lines
});
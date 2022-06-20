'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here

 let results = {}; 
 for (const element of arr)
  { 
      results[element] = ++results[element] || 1; 
  } 
  console.log(results);
  
  let maxValue = 0; let id = 0;
  for (const [key, value] of Object.entries(results)) { 
      if (maxValue < value) { 
          maxValue = value;
           id = key; 
        } 
    } 
    
    console.log("maxValue = ", maxValue, "id = ", id);
     return id;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}

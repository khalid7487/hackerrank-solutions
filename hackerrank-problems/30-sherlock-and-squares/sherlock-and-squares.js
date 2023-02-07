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
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    // Write your code here
    
    //this is the actual solutions bt time complexity is too heigh
    // let result=0;
    
    // while(a <= b){
    //     let sqrtResult = Math.sqrt(a);
    //     const isInteger =  Math.ceil(sqrtResult)- sqrtResult;

    //     if(isInteger === 0){
    //       result++;
    //     }
    //     a++;
    // }
    // return result;
    
    //this is the tricks solutions
    
    let lower = Math.ceil(Math.sqrt(a));
    let upper = Math.floor(Math.sqrt(b));

    return lower > upper ? 0 : upper - lower + 1;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const a = parseInt(firstMultipleInput[0], 10);

        const b = parseInt(firstMultipleInput[1], 10);

        const result = squares(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}

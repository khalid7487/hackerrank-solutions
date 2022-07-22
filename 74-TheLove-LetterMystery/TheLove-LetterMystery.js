'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
    // Write your code here
    let n = s.length;
    let num_ops=0;
    let right = Math.ceil(n / 2);
    let left = Math.floor(n / 2 - 1);
    
    for (let i = right, j = left; i < n; i++ , j--) {
        let diff = s.charCodeAt(i) - s.charCodeAt(j);
        num_ops += Math.abs(diff);

    }
        
    return num_ops;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = theLoveLetterMystery(s);

        ws.write(result + '\n');
    }

    ws.end();
}

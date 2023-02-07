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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    // Write your code here
    let result = [];
    arr.sort((a, b) => a - b);
    let len = arr.length;
    let min = Number.MAX_VALUE;

    for (let i = 0; i < len; i++) {
        let temp = arr[i + 1] - arr[i];
        if (temp < min) {
            result = [];
            min = temp;
            result.push(arr[i]);
            result.push(arr[i + 1]);
        } else if (temp === min) {
            result.push(arr[i]);
            result.push(arr[i + 1]);
        }
    }

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = closestNumbers(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}


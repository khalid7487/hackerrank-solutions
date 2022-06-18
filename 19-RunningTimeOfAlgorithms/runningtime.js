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
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function runningTime(arr) {
    // Write your code here
    let result = 0;

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Compare key with each element on the left of it until an element smaller than
        // it is found.
        // For descending order, change key<array[j] to key>array[j].
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            --j;
            result++;
        }

        // Place key at after the element just smaller than it.
        arr[j + 1] = key;

    }
    
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = runningTime(arr);

    ws.write(result + '\n');

    ws.end();
}

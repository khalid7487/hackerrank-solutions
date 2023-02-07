'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    const n = arr.length
    let countSwap = 0;
    
    for (let i=0; i < n; i++) {
        while (i+1 != arr[i]) {
            let swapIndex = arr[i] - 1;
            let valAtIndex = arr[i];
            let valAtSwapIndex = arr[swapIndex];
            arr[i] = valAtSwapIndex;
            arr[swapIndex] = valAtIndex;
            countSwap++;
        }
    }

    return countSwap;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}

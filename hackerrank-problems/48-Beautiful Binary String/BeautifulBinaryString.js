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
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b) {
    // Write your code here
    let pattern = "010";
    let stringLength = b.length;
    let patternLegth = pattern.length;
    let count = 0;

    for (let i = 0; i < stringLength-1; i++) {
        for (let j = 0; j < patternLegth; j++) {
            if (pattern[j] != b[i + j]) break;
            if (j == patternLegth - 1) {
                count++;
                i = i+2;
            }
        }
    }


    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const b = readLine();

    const result = beautifulBinaryString(b);

    ws.write(result + '\n');

    ws.end();
}

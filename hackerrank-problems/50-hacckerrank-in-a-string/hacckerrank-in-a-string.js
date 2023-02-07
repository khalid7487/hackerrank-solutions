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
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
    // Write your code here
    let str = "hackerrank"
    let n = s.length;
    let j = 0;

    if (n < str.length) {
        return "NO";
    }


    for (let i = 0; i < n; i++) {
        if (j < str.length && s.charAt(i) == str.charAt(j)) {
            j++
        }
        if (j == str.length) {
            break;
        }
    }

    if (j == 10) {
        return "YES";
    } else {
        return "NO";
    }



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = hackerrankInString(s);

        ws.write(result + '\n');
    }

    ws.end();
}

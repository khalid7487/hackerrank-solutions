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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    // Write your code here

    let n = s.length;
    let a, b, i, j;
    
    if (n == 0 || n == 1) {
        return -1;
    }
    else {
        for (i = 0, j = n - 1; i < n; i++ , j--) {
            if (s[i] != s[j]) {
                break;
            }
        }

        if (i > j) return -1;

        for (a = i + 1, b = j; a < j && b > i + 1; a++ , b--) {
            if (s.charAt(a) != s.charAt(b))
                return j;
        }
        return i;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}
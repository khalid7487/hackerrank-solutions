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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here

    console.log(s);
    console.log(k)
    let finalResult = [];
    let key = k%26;

    for (let item of s) {

        if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
            let tempChar = item.charCodeAt(0) + key;

            if (tempChar > 90) {
                let temp = tempChar - 90;
                tempChar = 64 + temp;
            }

            let char = String.fromCharCode(tempChar);
            finalResult.push(char);
        } else if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
            let tempChar = item.charCodeAt(0) + key;
            if (tempChar > 122) {
                let temp = tempChar - 122;
                tempChar = 96 + temp;
            }
            let char = String.fromCharCode(tempChar);
            finalResult.push(char);
        } else {
            finalResult.push(item);
        }
    }

    return finalResult.join('');


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}

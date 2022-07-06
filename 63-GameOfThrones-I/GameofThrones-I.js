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
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    // Write your code here
    let count = 0;
    let letter = {};
    for (let i = 0; i < 26; i++) {
        letter[i] = 0
    }

    for (let item of s) {
        if (letter[item.charCodeAt(0) - 97] >= 0) {
            ++letter[item.charCodeAt(0) - 97]
        }
    }

    for (let key in letter) {
        if (letter[key] % 2 == 1) {
            count++
        }
        console.log(count);
        if (count > 1) {
            return "NO";
            break;
        }
    }

    if(!(count >1 )) {
        return "YES"
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = gameOfThrones(s);

    ws.write(result + '\n');

    ws.end();
}

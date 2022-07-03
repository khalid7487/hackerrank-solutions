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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    const len = s.length;
    let count =0;
    if (len % 2 !== 0) return -1;
    const size = len / 2

    let splitStr1 = s.slice(0, size);
    let splitStr2 = s.slice(size);

    let str1_len = splitStr1.length;
    let str2_len = splitStr2.length;

    const lookup = {};

    for (let i = 0; i < str1_len; i++) {
        lookup[splitStr1[i]] = ++lookup[splitStr1[i]] || 1;
    }

    for (let i = 0; i < str2_len; i++) {
        let letter = splitStr2[i];

        //cann't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            count++;
        } else {
            lookup[letter] -= 1;
        }
    }



    return count;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}

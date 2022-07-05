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
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
    // Write your code here

    let rocks=arr.length;
    let count = 0;
    let letter = {};

    for (let i = 0; i < 26; i++) {
        letter[i] = 0;
    }


    for (let r = 0; r < rocks; r++) {
        let s = arr[r];
        console.log(s);
        for (let i = 0; i < s.length; i++) {
            let c = s[i];
            if (letter[c.charCodeAt(0) - 97] == r) {

                letter[c.charCodeAt(0) - 97]++;
                      
                if (letter[c.charCodeAt(0) - 97] == rocks) {
                    count++;
                }
            }
        }
    }



    return count;



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    const result = gemstones(arr);

    ws.write(result + '\n');

    ws.end();
}

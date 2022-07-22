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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    // Write your code here
    var m = {};
    for (let i = 0, len = s.length; i < len; i++) {
        m[s[i]] = ++m[s[i]] || 1;
    }
    const sorted = Object.keys(m).sort((a, b) => m[a] > m[b]);

    let pairs = [];
    for (let i = 0, len = sorted.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            Math.abs(m[sorted[i]] - m[sorted[j]]) <= 1 ? pairs.push([sorted[i], sorted[j]]) : null;
        }
    }



    let maxCount = 0;
    pairs.some(pair => {
        let isFirst = null;
        let count = 0;

        for (let i = 0, len = s.length; i < len; i++) {
            if (s[i] === pair[0]) {
                if (isFirst == null || !isFirst) {
                    isFirst = true;
                    count++;
                } else {
                    break;
                }
            }
            else if (s[i] === pair[1]) {
                if (isFirst == null || isFirst) {
                    isFirst = false;
                    count++;
                } else {
                    break;
                }
            }

            if (i === s.length - 1 && count > maxCount) {
                maxCount = count;
            }
        }
    });

    return maxCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}

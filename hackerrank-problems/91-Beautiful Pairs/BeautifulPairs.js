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
 * Complete the 'beautifulPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY A
 *  2. INTEGER_ARRAY B
 */

function beautifulPairs(A, B) {
    // Write your code here

    // let a_len = A.length;
    // let b_len = B.length;
    // let count = 0, mp = {};

    // console.log(a_len);
    // console.log(b_len);


    // for (let i = 0; i < a_len; i++)
    //     mp[A[i]] = ++mp[A[i]] | 1;

    // for (let i = 0; i < b_len; i++) {
    //     if (mp[B[i]] > 0) {
    //         count++;
    //         mp[B[i]]--;
    //     }
    // }



    // if (count != A.length) count++;
    // else count--;

    // return count;

    let count = Array(2000).fill(0), pairs = 0;

    for (let i = 0; i < A.length; i++) count[A[i]]++;
    for (let i = 0; i < B.length; i++) {
        if (count[B[i]] > 0) {
            count[B[i]]--;
            pairs++;
        }
    }
    if (pairs != A.length) pairs++;
    else pairs--;

    return pairs;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

    const result = beautifulPairs(A, B);

    ws.write(result + '\n');

    ws.end();
}

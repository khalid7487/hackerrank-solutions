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
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    // Write your code here

    // here we need to calculate all item and then  need check each item is equal to
    // other total sum - itemValue - SumOfPrevious Value
    // if ture return "YES"
    // else "NO"

    let sum = 0;
    let temp = 0;
    let n = arr.length;

    if (n == 1) {
        return "YES"
    }
    for (let item of arr) {
        sum += item;
    }

    for (let i of arr) {

        if (temp === sum - i - temp) {
            return "YES";
        }
        temp += i;
    }
    return "NO";

    // if (n == 1)
    //     return "YES";
    // for (let i = 0; i < n; i++) {
    //     sum += arr[i];
    // }

    // temp = 0;

    // for (let j = 0; j < n; j++) {
    //     if (temp == sum - arr[j] - temp)
    //         return "YES";
    //     temp += arr[j];

    // }
    // return "NO";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}

'use strict';

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
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    // Write your code here
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let str = [...s].slice(0, i).join("");
        let first = str;
        let num = BigInt(str);
        while (str.length < s.length) {
            str += (num + 1n).toString(10);
            num++;
        }
        if (str == s) {
            console.log(`YES ${first}`);
            return;
        }
    }
    console.log("NO");
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}

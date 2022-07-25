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
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s, queries) {
    // Write your code here
    
    // make a object with all alphabet
    // make another object where we need to store current sum wise true value
    // if word is not same with net word then make sure change 1st word
    // then loop throgh the quries and  check it is equal to the index or not
    // if index == breakword[weight] then true  and push into an array
    // else false and push into an array
    // return array
    
    
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let weights = {};

    for (let i = 0; i < alphabet.length; i++) {
        weights[alphabet[i]] = i + 1;
    }

    let breakWords = {};
    let currentWord = s[0];
    let currentSum = 0;
    let s_len = s.length

    for (let item = 0; item < s_len; item++) {
        currentSum += weights[s[item]];
        breakWords[currentSum] = true;

        if (item + 1 < s_len && currentWord !== s[item + 1]) {

            currentSum = 0;
            currentWord = s[item + 1];
        }

    }

    let result = [];
    
    for (let j of queries) {
        if (breakWords[j]) {
            result.push("Yes");
        } else {
            result.push("No");
        }
    }


    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine().trim(), 10);
        queries.push(queriesItem);
    }

    const result = weightedUniformStrings(s, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    
    let cumulativeAds=0;
    
    let sharedAds =5;
    
    for(let i=0; i<n; i++){
        let likedAds = Math.floor(sharedAds/2); 
        cumulativeAds += likedAds;
        sharedAds = likedAds *3;
    }
    return cumulativeAds;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = viralAdvertising(n);

    ws.write(result + '\n');

    ws.end();
}

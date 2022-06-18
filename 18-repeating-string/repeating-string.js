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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here

    let size = s.length;
    let divisible =Math.floor(n/size);
    let mod = n%size;
    let count=0, extra=0;
    

    
    for(let i=0; i<size; i++){
        
        if(s.charAt(i) == 'a'){
            count++
        }
    }
    
    if(mod){
        for(let j= 0; j<mod; j++){
            
            if(s.charAt(j) == 'a'){
                extra++;
            }
        }
    }
  

    let result = (divisible * count) + extra;
    
    return result;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}

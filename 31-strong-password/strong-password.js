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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let result =0;
    if(n<6){
        result = 6- n;
        return result;
    }else{
        // for(let i= 0; i<n; i++){
            
        // }
        if(!(/[0-9]/.test(password))){
             console.log("not digit")
            result ++;
        }
        if(!(/[a-z]/.test(password))){
            console.log("not lower")
            result ++
        }
        if(!(/[A-Z]/.test(password))){
            console.log("not upper")
            result ++;
        }
        if(!(/[!-+]/.test(password)))        {
            console.log("rex not here")
            result++;
        }
        return result;
    }
    
    console.log(n , password);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}

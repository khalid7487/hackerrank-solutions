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
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(grid) {
    // Write your code here

    let n = grid.length;
    let result =[]
    
    for (let i = 0; i < n; i++) {

        let temp = grid[i].split('');
        let tempLength = temp.length;


        for (let j = 0; j < tempLength; j++) {
            let startVartex = temp[0];
            let endVartex = temp[tempLength - 1];


            if (startVartex < temp[j] && endVartex < temp[j]) {
                if (temp[j] == 9) {
                    temp[j] = 'X';
                   
                }
            }
        }
        
        result.push(temp.join(''));
    }
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = cavityMap(grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

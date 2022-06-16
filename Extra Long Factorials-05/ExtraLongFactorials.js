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
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
   let arr = [];
    let counter =0 ,temp, i, j;
    arr[0] =1;
    
    for(i =2; i<=n; i++){
      temp=0;
      for(j=0; j<=counter; j++){
          temp =(arr[j] * i) + temp;
          arr[j]=temp % 10;
          temp =Math.floor(temp /10);

      }
      while(temp > 0){
          arr[++counter] = temp %10;
          temp=Math.floor(temp/10);
      }
        
    }
    console.log(arr.reverse().join(''));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}

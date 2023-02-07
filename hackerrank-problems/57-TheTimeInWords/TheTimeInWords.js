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
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    // Write your code here
    let timeWIthHour = {
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "21": "twenty one",
        "22": "twenty two",
        "23": "twenty three",
        "24": "twenty four",
        "25": "twenty five",
        "26": "twenty six",
        "27": "twenty seven",
        "28": "twenty eight",
        "29": "twenty nine"
    }
    let time;
    let h1 = h + 1
    let hour = timeWIthHour[h];
    let additionalHour = timeWIthHour[h1];

    console.log(additionalHour, h1);

    if (m <= 30) {
        if (m == 0)
            time = hour + " o' clock";
        else if (m == 15)
            time = "quarter past " + hour;
        else if (m == 30)
            time = "half past " + hour;
        else if (m == 1)
            time = timeWIthHour[m] + " minute past " + hour;
        else
            time = timeWIthHour[m] + " minutes past " + hour;
    }
    else {
        if (m == 45)
            time = "quarter to " + additionalHour;
        else if (m == 59)
            time = timeWIthHour[60 - m] + " minute to " + additionalHour;
        else
            time = timeWIthHour[60 - m] + " minutes to " + additionalHour;
    }
    return time;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine().trim(), 10);

    const m = parseInt(readLine().trim(), 10);

    const result = timeInWords(h, m);

    ws.write(result + '\n');

    ws.end();
}

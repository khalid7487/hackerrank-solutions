**Link** https://www.hackerrank.com/challenges/sherlock-and-squares/problem

`Here we need to calculate the square root between the rang`

## Sudo code
    let lower = Math.ceil(Math.sqrt(a));
    let upper = Math.floor(Math.sqrt(b));

    return lower > upper ? 0 : upper - lower + 1;
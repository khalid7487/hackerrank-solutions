**Link** https://www.hackerrank.com/challenges/flatland-space-stations/problem

`here we need to check which  statons is nearest`

## Algorithms
1. need to sort the array at 1st
2. const citiesInside = c[i+1] -c[i] -1;
        const d = Math.ceil(citiesInside /2.0);
        if(d> max){
            max=d;
        }
3.  if(c[0]-0> max){
        max = c[0] -0;
    }
4.  if(n - 1- c[len-1] > max){
         max = n - 1 - c[len - 1];
    }    
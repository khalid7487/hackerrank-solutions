**Link** https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem

`here we need to calculate the maximum number og triangle value by using a  conditions which is biggest value < arr[i+1] + arr[i+2]`

## Algorithms
1. Need to sort the in desecending orders
2. then check arr[i] < arr[i+1] + arr[i+2]
3. if yes return [arr[i + 2], arr[i + 1], arr[i]]
4. else return [-1]
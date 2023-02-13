## Link: https://leetcode.com/problems/plus-one

`here we need to add 1 with the given array `

## Algorithm 
1. loop through the array reversely and add 1 with the last index value 
2. if it is more than 10 then make digit[index] = 0 else
3. return the digit
4. if array length 1 and value is 9 then unshift array with 1
5. return the value 
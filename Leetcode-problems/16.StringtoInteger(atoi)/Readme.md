## Link: https://leetcode.com/problems/string-to-integer-atoi/

`this problem is too easy but it take me six submission to fullfil all requirement.`
` we need to calculate here integer number at 1st index also consider true if number have + or - sign`

## Algorithm
1. at first trim the string value 
2. make it integer value
3. here we consider both max and min value 2^31 
4. after getting integer check is it more than or less then max or min 
5. if true then return min or max
6. else if is the value is NaN return 0
7. else return number
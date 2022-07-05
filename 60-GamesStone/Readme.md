**Link**  https://www.hackerrank.com/challenges/gem-stones/problem

`we need to calculate same word of all string  is available or not if same word available remove this word and count how many items need to remove.`

## Time Complexity: O(n^2).

## Algorithms 
1. Make a objects where 0 to 25. 
2. loop through 0....n.
3. store 1st item of array in variables.
4. then loop through with this variables and check object[variables -97] if there increase the object property.
5. and if letter[c.charCodeAt(0) - 97] == array.length if true then count the value
6. return the value

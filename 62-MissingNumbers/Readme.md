**Link** https://www.hackerrank.com/challenges/missing-numbers/problem

`Here we need two array and check how many array item are missing and return the items`

## Time complexity: O(n)

## Algorithms
1. Make a lookup object and loop through 2nd arr  0.... n and make object with their items if match item with object item during this time increase the items value.
2. And loop through 1st arr 0....n and lookup object and if match with objet decrease the value else increase value
3. then loop through object and check if the object value is more than 1 push the item into result 
4. return the result. 
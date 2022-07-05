**Link** https://www.hackerrank.com/challenges/reduced-string/problem

`Here we need to reduce the string which is congigutive or repeated word.`
## Time Complexity: O(n^2)
## Algorithms
1. loop  through 0...n length 
2. check str.charAt(i) == str.charAt(i - 1)  if true then reduce the matches string
3. str = str.substr(0, i - 1) + str.substr(i + 1);
4. And i = 0 ;
5. if string length is zero then return "Empty String"
6. else return  string 
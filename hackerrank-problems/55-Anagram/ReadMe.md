**Link** https://www.hackerrank.com/challenges/anagram/problem

`here you have string you need divide into two part and need to check how many word need to change to make it anagram`

## Time Complexity: O(N)

## Algorithm:
1. check length is even or not if odd -1.
2. calculate size = len/2
3. let splitStr1 = s.slice(0, size)
4. let splitStr2= s.slice(size)
5. then make object with 1st string 
6.  then loop through 2nd string and item match with object if not equal count increment.
7. lookup[letter] -= 1;
8. return count.
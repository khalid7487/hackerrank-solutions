**Link** https://www.hackerrank.com/challenges/separate-the-numbers/problem

## Algorithms 
1. check every possible substring(number) of different length, up to the mid length of the input string.
2. set  the substring(number) you're  working on as the first element of your beautiful sequence.
3. save your substring(number) starting sequence so you can use it later.
4. set that same substring(number) as a valid string.
5. Increment the first valid string and add it to the valid string you just created. you'll 
start building a string like 9 ,910, 91011.
6. stop doing this once your valid string length exceed the length of the input string.
7. compare the valid string you created is equal to the input string, if it is true, it is beautiful.
If not, go to step 2 and try with a new incremented substring that's one digit longer.
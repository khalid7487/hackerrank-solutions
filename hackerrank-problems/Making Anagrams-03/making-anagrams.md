**Link** https://www.hackerrank.com/challenges/making-anagrams/problem

## here we need to delete element count which is not matches 

     
``` we need such a frequency calculate where we can calculate matching values,```

1. at first we need to make a key pair with 1st string.
2. Loop through secound string and compare with map values
    if secound string value matches to the map value 
        increase firstString value and also decrease map value 
    else 
        increase secoundString value 
        
3. substract firstString length to 1st string value.
4. Add the substracted value with secoundString count vlaue.
5. return the result.         
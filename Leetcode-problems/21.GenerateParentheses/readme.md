## Link: https://leetcode.com/problems/generate-parentheses

`Here we need to generate parenthesis using only number `

**Important: It is pure recursion problem**

## Algorithms 
1. the base case of the recursion function is if(open and close is equal to n then return )
2. and make open tree until (open < n) 
3. and make close tree until (close < open) 

                    (
                ((       ()
            (((   (()          ()( 
        ((()      (())  (()(      (()(     ()()
     ((())      (())(     (()()    (()()    ()()(
    ((()))      (())()     (()())   (()())   ()()()
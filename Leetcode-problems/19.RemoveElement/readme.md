## Link https://leetcode.com/problems/remove-element/

`Here we need to count with the value how many item is remove able from the array without any extra space`

**Explanations**
Input: array= [3,2,2,3] value=2  
Output: 2 

[2,2,2,3]  here 3 is not match that is replace by 2 


## Algorithms
1. loop through the array and check 
2. array items is not equal to the value then replace the items with no match value
3. increment the pointer (startPoint )
4. finally return startPoint 
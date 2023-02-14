## Link:  https://leetcode.com/problems/reverse-string-ii/

`we need to reverse the string with key value wise but we need to do it one after one. For example: abcd and key =2 return bacd `

## Algorithm 
1. at first spilt with regex with the key 
2. loop through the array 
3. if it is even number the reverse the string and push it into an array 
4. else not reverse this also push into the array
5. return array
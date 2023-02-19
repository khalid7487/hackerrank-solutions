## Link https://leetcode.com/problems/longest-common-prefix/

`we need to find out how many prefix are equal.`

## Algorithm 
1. sort the array at 1st;
2. loop through the array; 
3. and check array[0][i] and array[length -1][i] if don't match strs[0].substr(0,i);
5. return strs[0] 
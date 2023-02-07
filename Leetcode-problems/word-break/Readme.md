**Link** https://leetcode.com/problems/word-break/

`Here we need to construct a word with the help of an array then need to return if it true or false`

**There is lot of way to solve the problem i used recursion and memorization both of it for optimization**

**Input:** s = "leetcode", wordDict = ["leet","code"]
**Output:** true
**Explanation:** Return true because "leetcode" can be segmented as "leet code".



I used extra property memo={} to solve this problem


## Algorithms
1. loop through the array 
2. then 1st check first word is match or not if match 
3. slice those matches word and recursively call the function again until the target string become  ""
5. after slice the string store memo[s] = true 
4. if the string '' return true 
5.  else return false
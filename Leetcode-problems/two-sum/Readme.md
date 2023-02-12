## Link: https://leetcode.com/problems/two-sum/

`here we need to return array index which items is matches with target sum `

## Algorithms 
1. loop through the array and make a hashmap with the array items 
2. then loop through again  and subtract target sum with array[item]
3. if subtracted value match with the hashmap value 
    return [arrayIndex, map[item]]

 
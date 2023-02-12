/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const memo ={};
 
    for (let i = 0; i < nums.length; i++) {
         memo[nums[i]] = i ;
     }
 
    for (let j = 0; j < nums.length; j++) {
         const temp = target -nums[j];
         
        
         if(temp in memo){
             if(j !== memo[temp] ){
                 return [j, memo[temp]]
             }
         }
     }
 
 };
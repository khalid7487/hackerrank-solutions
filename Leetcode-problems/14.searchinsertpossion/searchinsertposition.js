/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let item=0
    let len = nums.length


    for( ; item<len; item++){
        if( nums[item] >= target){
            return item;
        }
    }

    return item;

};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let startPoint =0;
    let len = nums.length;

    if(len< 0){
        return 0;
    }

    for(let i=0; i< len; i++){
        if(nums[i] !== val){
            console.log(nums)
            nums[startPoint] = nums[i]
            startPoint++;
        }
    }

    return startPoint;

};
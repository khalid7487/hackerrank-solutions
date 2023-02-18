/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const min = -1*2**31;
    const max = 2**31 -1;
    const num = parseInt(s, 10);
    if(num < min) return min;
    else if (num > max) return max;
    else if (isNaN(num)) return 0;
    else return num;
};

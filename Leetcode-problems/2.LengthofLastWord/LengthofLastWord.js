/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitStrign = s.trim().split(' ')
    const len = splitStrign[splitStrign.length - 1].length
    return len
};
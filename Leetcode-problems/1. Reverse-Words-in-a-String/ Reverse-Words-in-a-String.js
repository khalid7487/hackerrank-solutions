/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const temp = s.trim().split(" ")
    const removeEmptyString = temp.filter( (item) => item !== "")
    return removeEmptyString.reverse().join(" ")

};
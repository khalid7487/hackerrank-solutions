/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result;
    if(x < 0){
        let value = String(x)
        result = Number(value.replace('-', '').split('').reverse().join('')) * (-1)
    }
    else {
        result= Number(String(x).split('').reverse().join(''))
    }
   // 0x7FFFFFFF  is the hex value of 2^31
   if(Math.abs(result) > 0x7FFFFFFF) {
       return 0
   }
   return result
};

// function reverseString(str) {
//   if (str === "")
//     return "";
//   else
//     return reverseString(str.substr(1)) + str.charAt(0);
// }
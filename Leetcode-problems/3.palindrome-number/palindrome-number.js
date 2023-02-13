/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const intArr = Array.from(String(x));
    const len = intArr.length
    let j = len - 1;

    for(let i=0; i<len/2; i++){
      
        if(intArr[i] != intArr[j]){
            return false
        }
        j--;
    }
    return true 
};

// alternative way

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0 || x%10 == 0 && x!=0){
        return false
    }
    if(x.toString().split('').reverse().join('') === x.toString()){
        return true
    }else{
        return false
    }
};
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const temp =  high -low
    const mid = temp /2
    if(low % 2 !== 0 && high %2 !== 0){
        return mid +1 
    }else {
        return mid;
    }

};
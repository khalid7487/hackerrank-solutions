var reverseString = function(s) {

    const len = s.length
    let j = len -1;

    for(let i =0; i< len/2; i++ ){
        [s[i], s[j]] = [s[j], s[i]];
        j--;
    }
   return s
};
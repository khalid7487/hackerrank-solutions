/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumber ={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const len =s.length;
    let sum =0;

    for(let i=0; i< len; i++){
        if(s[i] =='I' && s[i +1] == 'V' ){
            sum =sum + 4;
            i++;
        }else if(s[i] =='I' && s[i +1] == 'X'){
            sum = sum +9;
            i++;
        }else if(s[i] =='X' && s[i +1] == 'L'){
            sum = sum + 40;
            i++;
        }else if(s[i] =='X' && s[i +1] == 'C'){
            sum = sum + 90;
            i++;
        }else if(s[i] =='C' && s[i +1] == 'D'){
            sum = sum + 400;
            i++;
        }else if(s[i] =='C' && s[i +1] == 'M'){
            sum = sum +900;
            i++;
        }else{
            sum = sum + romanNumber[s[i]]
        }

    }
    return sum;

};
function funnyString(s) {

    let split = s.split("")
    let strReverse = split.reverse();
    let flag = 0;
    let firstString = [];
    let secoundString = [];
    let differValueOfFirstStr =[];
    let differValueOfSecoundStr =[];
    
    for(let temp of s) {
        firstString.push(temp.charCodeAt(0))
    }
    
    for(let temp1 of strReverse){
        secoundString.push(temp1.charCodeAt(0))
    }
    let lengthOfFirstStr = firstString.length - 1;
    let lengthOfSecoundStr =secoundString.length - 1;
    
    for(let i=0 ; i<lengthOfFirstStr; i++){
        let diff = Math.abs(firstString[i+1] -firstString[i]) ;
        differValueOfFirstStr.push(diff)
    }
    
    for(let j=0 ; j<lengthOfSecoundStr; j++){
        let diff = Math.abs(secoundString[j+1] -secoundString[j]) ;
        differValueOfSecoundStr.push(diff)
    }
    
    for(let result= 0; result < lengthOfFirstStr; result++){
        if(differValueOfFirstStr[result] == differValueOfSecoundStr[result]){
            flag++;
        }
    }
    
    if(flag == lengthOfFirstStr){
        return "Funny";
    }else{
        return "Not Funny"
    }


}



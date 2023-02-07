**Link:** https://www.hackerrank.com/challenges/funny-string/problem

## Here is my Algorithms:

1. we need to calculate the different frequency between a given string and reverse of that string.
2. if the frequency different is for both of string that time it is print "Funny".
3. else it is print "Not Funny".


## Sudo code 

1. Get string as a input and then reverse the string using string reverse: 
    
    let split = s.split("");
    let strReverse = split.reverse();

2. Then count the two frequency of both string

    for(let temp of s) {
        firstString.push(temp.charCodeAt(0))
    }
    
    for(let temp1 of strReverse){
        secoundString.push(temp1.charCodeAt(0))
    }

3. Then calculate the different value of both string 

  for(let i=0 ; i<lengthOfFirstStr; i++){
        let diff = Math.abs(firstString[i+1] -firstString[i]) ;
        differValueOfFirstStr.push(diff)
    }
    
    for(let j=0 ; j<lengthOfSecoundStr; j++){
        let diff = Math.abs(secoundString[j+1] -secoundString[j]) ;
        differValueOfSecoundStr.push(diff)
    }

4.  using flag check both value is equal or not .
   
    for(let result= 0; result < lengthOfFirstStr; result++){
        if(differValueOfFirstStr[result] == differValueOfSecoundStr[result]){
            flag++;
        }
    }
5. Finally if flag value is equal to the string differ length value less than 1
  
    if(flag == lengthOfFirstStr){
        return "Funny";
    }else{
        return "Not Funny"
    }

  



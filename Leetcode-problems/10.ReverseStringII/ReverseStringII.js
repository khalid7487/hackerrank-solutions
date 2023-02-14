/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const regex = new RegExp(`.{1,${k}}`, 'g')
    const split = s.match(regex);
  
    let result =[]

    for (let item= 0; item <split.length;  item++){  
       let reverse;
       if(item %2 == 0){
         reverse = reverseString(split[item]);
         result.push(reverse)
       }else{
         result.push(split[item])  
       }
    }
    
    return result.join('');  
};

const reverseString =(str)=>{
  //what is the base case 
  if(str === "") return ""
  
  // what is the smallest amout of work I can do in each iteration?
  return reverseString(str.substring(1)) + str.charAt(0)
}

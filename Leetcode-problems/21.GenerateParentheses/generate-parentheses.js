/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    generate(result, "", 0, 0, n)
    return result;
 };
 
 const generate = (result, str, open, close, n) => {
   
   // base conditions
   if(open === n && close === n){
     result.push(str)
     return
   }
   
   if(open < n){
     generate(result, str + "(", open + 1, close, n)
   }
   
   if(close < open){
     generate(result, str + ")", open, close + 1, n)
   }
   
 }
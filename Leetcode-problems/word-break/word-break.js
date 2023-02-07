const wordBreak = (s, wordDict, memo ={}) =>{
   
    // If we have s stored in memo return its value
 if(memo[s]!==undefined) return memo[s]
 // We can always make and empty string 
 if(s.length===0) return true   

 for(const word of wordDict) {
     // Check if word is at the beginning of s
     if(s.indexOf(word)===0) {
         // Recursive call to check if using word as the prefix is a possible combination to complete s
         const output = wordBreak(s.slice(word.length), wordDict, memo)
         if(output) {
             // If we are able to complete s save in memo as true
             memo[s] = true
             return true
         }
     }
 }

 // If we get here then we did not find combinations to complete s using wordDict
 memo[s] = false
 return false
}
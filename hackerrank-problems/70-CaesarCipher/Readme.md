**Link** https://www.hackerrank.com/challenges/caesar-cipher-1/problem

`Basically we need to check the charecter code at every word and change it with the key`

## Algorithms 
1. if item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90 and 
    **let tempChar = item.charCodeAt(0) + key**
    **if (tempChar > 90) { //here we check tempchar is greater then z or not 
                let temp = tempChar - 90;
                tempChar = 64 + temp; 
    }**
2. else item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122
    **let tempChar = item.charCodeAt(0) + key**
    **if (tempChar > 122) { //here we check tempchar is greater then Z or not 
                let temp = tempChar - 122;
                tempChar = 96 + temp; 
    }**

 3. else just push item into finallresult array.
    
**Link**  https://www.hackerrank.com/challenges/the-time-in-words/problem
`Here we need to calculate the times and show it in words basically it is an if else conditions check problems.`

## Time Complexity: O(1).

## Algorithms
1. make a object 1 to 30 make number as a key and word as a value
2. then if (m<= 30) it is goes into less then sections 
    **.** if(m==0) then lookup the object with hour value and return hour with o' clock. Ex: if h=5 then return "five o' clock";
    **.** else if(m==15) then lookup the object with hour value and return quarter past hour. Ex: if h=5 then return "quarter past five";
    **.** else if(m==1) then lookup the object with hour value and return minute past  hour. Ex: if h=5 then return "minute past 5";
    **.** else if(m==1) then lookup the object with hour value and return object[min] minute past  hour. Ex: if h=5 and m=1 then return "one minute past five";
    **.** else if(m==1) then lookup the object with hour value and return object[min] minute past  hour. Ex: if h=5 and m=18 then return "eighteen minute past five";

3.  else it is goes into grater then sections 
    **.** if(m==45) then lookup the object with hour + 1 value and return quarter to hour + 1. Ex: if h=5 then return "quarter to six";
    **.** else  then lookup the object with hour+1 value and return object[60 -min] minute past  hour+1. Ex: if h=5 and m=58 then return "two minutes to six";
**Link** https://www.hackerrank.com/challenges/extra-long-factorials/problem

`Here we nee to calculate Factorial actually. `

## Algorithms
1. loop from 2 to the loop through end of the numbers.
2. We need to play with array for calculate big integer

## Sudo code

1. for(i =2; i<=n; i++)
2. into for loop temp=0 then loop again 0 to counter value if the result value
   more then 10 during that time counter is 2 and if it is more then 100 during that time counter value is 3.
   
      for(j=0; j<=counter; j++){
          temp =(arr[j] * i) +temp;
          arr[j]=temp % 10;
          temp =Math.floor(temp /10);

      }
      while(temp > 0){
          arr[++counter] = temp %10;
          temp=Math.floor(temp/10);
      }
3. finally print the array in reverse string.
    console.log(arr.reverse().join(''));






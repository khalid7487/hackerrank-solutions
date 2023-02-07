**Link** https://www.hackerrank.com/challenges/taum-and-bday/problem

`Here we need to calculate minimum cost of the gift, based on three conditions.`


` b: the number of black gifts`
 `w: the number of white gifts`
 `bc: the cost of a black gift`
 `wc: the cost of a white gift`
 `z: the cost to convert one color gift to the other color`


## Algorithms 
1. Actully we need play with BigInt.
2. case one =  b* bc + w* wc
3. case two = wc* (b+w) + b * z
4. case three = bc *(b+w) + w *z
5. after getting these three value calculate the minimum value from it 
6. return the min value.
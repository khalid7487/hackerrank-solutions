**Link**  https://www.hackerrank.com/challenges/save-the-prisoner/problem

`here we need to save the presoner with circular  rotation`

## Sudo code
1. const r = (((m + n) % n) + (s % n) - 1) % n  // here n= numbers of prisoners,  m= candy , s= chair
2. return r == 0 ? n : ((r+n) % n
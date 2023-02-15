## Link:- https://leetcode.com/problems/first-bad-version/

`Here we need to calculate which last submission is bad product there is lot of tricks `

## Algorithm 
1. let left start point  and right is equal to the result
2. loop through until left < right 
3. find mid using left + (right - left )/2
5. if mid equal to isBadVersion then right become mid
6. else left = mid + 1
7. return left


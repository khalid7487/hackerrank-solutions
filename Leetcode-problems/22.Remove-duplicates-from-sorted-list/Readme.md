## Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list 

`This linked list problem we need to remove duplicate value from the list`


1->1->2
1->2
## Algorithm 
1. loop through end of the list 
2. if(current.val === current.next.val) then current.next = current.next.next
3. else current = current.next
4. return head
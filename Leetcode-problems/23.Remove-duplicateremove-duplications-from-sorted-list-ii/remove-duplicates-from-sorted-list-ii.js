var deleteDuplicates = function(head) {   
    let dummy = new ListNode(0)
    dummy.next = head;
    let current = head;
    let preNode =dummy;
 
    while(current !== null) {
      if(current.next != null && current.val == current.next.val){
          // skip the value those value are equal to the next value
           while (current.next != null && current.val == current.next.val) {
                   current = current.next;
           }
           preNode.next =current.next    
       }    
       else {
           preNode = preNode.next
       }
       current =current.next;
    }
    return dummy.next;
};
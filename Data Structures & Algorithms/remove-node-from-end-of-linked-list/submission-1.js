/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
       // 1->2->3->4. n =2

       // reverse the list
       let curr = head;
       let prev = null;

       while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
       }

    // count from 1 - i to get the node before and the node you want to del
       head = prev;
       curr = head;
       prev = null;
       let i =1;  

       while(i !== n){
        prev = curr;
        curr = curr.next;
        i++
       }

       // 4-3-2-1

       // remove the node
       if(prev) prev.next = curr.next || null
       else head = curr.next;
       


      // reverse the list back
       curr = head;
       prev = null;
       while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
       }

       head = prev;

       return head;

    }
}

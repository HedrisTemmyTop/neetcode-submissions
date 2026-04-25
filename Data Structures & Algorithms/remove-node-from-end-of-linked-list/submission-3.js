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
        let dummy = {
            val: 0,
            next: null
        }

        dummy.next = head;
        let l = dummy
        let r= head;
        let i =0; 
        while(r){
            if(i >= n){
                l= l.next
            }
            r= r.next
            i++
        }
        l.next = l.next.next; 

        return dummy.next;
    }
}

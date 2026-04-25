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
        let length = 0;
        let curr = head;

        while(curr){
            curr = curr.next;
            length++
        }

        let idx = length -n +1
        let i =1;
        let prev = null;
        curr = head;
        while(i !== idx){
            prev = curr;
            curr = curr.next
            i++
        }

        if(prev) prev.next = curr.next;
        else head = head.next

        return head;

        
    }
}

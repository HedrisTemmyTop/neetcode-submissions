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
     * @return {boolean}
     */
    hasCycle(head) {
        let fast = head;
        let slow = head;


        while(slow.next && fast && fast.next && fast.next.next){
            fast = fast.next.next;
            slow = slow.next
            if(fast.val === slow.val)return true
        }


        return false;
    }
}

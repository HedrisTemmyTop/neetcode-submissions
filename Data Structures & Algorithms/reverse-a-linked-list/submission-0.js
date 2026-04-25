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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while(curr){
            let next = curr.next; //2 1
            curr.next =prev; //1->2->null
            prev = curr;//2
            curr = next;//1 
           
        }

        return prev

    }
}

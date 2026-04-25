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
     * @return {void}
     */
    reorderList(head) {
        // split the list to get the middle
        let slow = head;
        let fast = head.next;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }


        // reverse the second;
        let second = slow.next;
        slow.next = null;
        let prev = null;

        while(second){
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }


        // merge the two list;
        let first = head;
        second = prev;
// 2->8->4,6,    10 
        while(second){
            let temp1 = first.next;
            let temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1
            second = temp2;
        }



    }
}

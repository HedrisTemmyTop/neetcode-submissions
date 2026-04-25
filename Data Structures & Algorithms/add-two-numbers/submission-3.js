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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0)
        let tail = dummy;
        let carry = 0;

        while(l1 || l2 || carry){
            let val1 = l1 ? l1.val : 0;
            let val2 = l2 ? l2.val : 0;
            let sum = val1 + val2 + carry; // 9+9 = 18 --> 0
            carry = Math.floor(sum /10) //1
            sum = sum % 10; // 8
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
            tail.next = new ListNode(sum)
            tail = tail.next
        }

        return dummy.next
    }
}

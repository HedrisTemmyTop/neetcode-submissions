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
    let list = new ListNode(0)
    let tail = list;
    let carry = 0;

    while (l1 || l2 || carry) {
        let val1 = 0;
        let val2 = 0;
        if (l1) {
            val1 = l1.val
            l1 = l1.next
        }

        if (l2) {
            val2 = l2.val
            l2 = l2.next
        }

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10)
        sum = sum % 10
        tail.next = new ListNode(sum)
        tail = tail.next
    }

    return list.next;

    }
}

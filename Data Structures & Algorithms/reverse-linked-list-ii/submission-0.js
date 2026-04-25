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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0)
        dummy.next = head;
        let curr = head;
        let prevLeftNode = dummy;
        let i =1;
        while(i !== left){
            curr = curr.next;
            prevLeftNode =prevLeftNode.next;
            i++
        }

        let prev = null
        while(i <= right){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            i++
        }

        let leftNode = prevLeftNode.next;
        prevLeftNode.next = prev
        leftNode.next = curr
        
        return dummy.next;


    }
}

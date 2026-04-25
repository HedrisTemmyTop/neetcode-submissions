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
        let i = 1;
        let list1 = l1;
        let list2 = l2;
        let num1 = 0;
        let num2 = 0;

        while(list1 && list2){
            num1 += list1.val * i;
            num2 += list2.val * i;
            list1 = list1.next;
            list2 = list2.next;
            i *= 10;
        }

        while(list1){
            num1 += list1.val * i;
            list1 = list1.next;
            i *= 10;
        }

        while(list2){
            num2 += list2.val * i;
            list2 = list2.next;
            i *= 10;
        }

        let sum = num1 + num2; // 957
        sum = String(sum)
        let list = new ListNode(0);
        let tail = list;

        for(let i = sum.length-1; i >= 0; i--){
            tail.next = new ListNode(Number(sum[i]))
            tail = tail.next;
        }

        return list.next;

    }
}

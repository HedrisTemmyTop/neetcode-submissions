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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = {val: -1, next: null}
        let list = dummy;

        while(list1 && list2){
            if(list1.val <= list2.val){
                list.next = list1;
                list1 = list1.next;
            }else{
                list.next = list2;
                list2 = list2.next
            }
            list = list.next;
        }

        if(list1){
            list.next = list1
        } else{
            list.next = list2
        }

        return dummy.next
    }
}

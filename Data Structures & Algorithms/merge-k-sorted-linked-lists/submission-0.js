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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
       if (lists.length === 0) return null;
       if (lists.length === 1) return lists[0];
        const mid = Math.floor(lists.length/2)
        let left =  this.mergeKLists(lists.slice(0, mid))
        let right =  this.mergeKLists(lists.slice(mid))
       return this.merge(left, right)

  
    }

    merge(list1, list2){
        let dummy = new ListNode(0)
        let tail = dummy;
        
        while(list1 && list2){
            if(list1.val <= list2.val){
                tail.next = list1
                list1 = list1.next
            }else{
                tail.next = list2
                list2 =list2.next

            }
            tail = tail.next

        }
        if(list1){
            tail.next = list1
        }
        if(list2){
            tail.next = list2
        }


        return dummy.next
    }
}

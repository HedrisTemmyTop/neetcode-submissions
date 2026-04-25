// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let map = new Map()
        map.set(null, null)
// 1->2->3->null
        let curr = head;
        while(curr){
            map.set(curr, new Node(curr.val))
            curr = curr.next;
        }

        curr = head;
        while(curr){
            map.get(curr).next = map.get(curr.next)
            map.get(curr).random = map.get(curr.random)
            curr = curr.next
        }

        return map.get(head)
    }
}

/**
 * 
 * {val: 1, next: {val: 2, next: {val: 3, next: null}}}
 *{val: 1, next: {val: 2, next: {val: 3, next: null}}}: {val:1, next: null, random: null}
 * {val: 2, next: {val: 3, next: null}}: {val:2, next: null, random: null}
 * : {val: 3, next: null}: {val:3, next: null, random: null}
 *
 * 
 */
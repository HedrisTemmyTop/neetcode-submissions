/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let queue = new Queue()
        queue.push(root)

        let res = []
        while(!queue.isEmpty()){
            for(let i = queue.size(); i > 0; i--){
            let last = queue.pop()
            if(last){
               if(i ===1)res.push(last.val)
               if(last.left) queue.push(last.left)
               if(last.right)   queue.push(last.right)
            }
            }
        }
        return res
    }
}

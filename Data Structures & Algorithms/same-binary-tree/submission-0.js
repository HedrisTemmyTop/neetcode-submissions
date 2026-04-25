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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let isEqual = true
    
        function dfs(node1, node2){
            if(!node1 && !node2) return;
            if(node1?.val === node2?.val){
             dfs(node1.left, node2.left)
             dfs(node1.right, node2.right)
            }else{
                return isEqual = false
            }
            // let l2 = dfs()
        }

        dfs(p, q)
        return isEqual
    }
}

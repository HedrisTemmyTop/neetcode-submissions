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
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity;
        function dfs(node){
            if(!node) return 0
            let left = dfs(node.left)
            let right = dfs(node.right)
            
            let sum = node.val + left + right
            max = Math.max(sum, max)
        

            return  Math.max(left + node.val, right + node.val, 0)

        }
        dfs(root)

        return max;
    }
}

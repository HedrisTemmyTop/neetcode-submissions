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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true
        function dfs(node){
            if(!node) return 0;
            let hl = dfs(node.left)
            let hr = dfs(node.right)

            if(Math.abs(hl-hr) > 1) balanced = false

            return 1 + Math.max(hl, hr);
        }

         dfs(root)

         return balanced
    }
}

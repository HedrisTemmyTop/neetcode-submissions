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
    diameterOfBinaryTree(root) {
        let res = 0

        function helper(node){
            if(!node) return 0;
            let hl =helper(node.left)
            let hr =helper(node.right)
            
            res = Math.max(res, hr + hl)
            return 1 + Math.max(hr, hl)
        }
        helper(root)

        return res
    }
}

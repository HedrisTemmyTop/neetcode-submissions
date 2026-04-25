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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let curr = root;
        if(p.val > q.val){
            [p, q] = [q, p]
        }

        while(curr){
            if(p.val <= curr.val && curr.val <= q.val) return curr
            else if(curr.val < p.val) curr = curr.right
            else curr = curr.left
        }
    }
}

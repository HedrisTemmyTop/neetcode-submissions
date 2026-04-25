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
    preorderTraversal(root) {

        let visitedNodes = []
        if(!root) return visitedNodes
        function helper(node){
            visitedNodes.push(node.val)
            if(node.left) helper(node.left)
            if(node.right) helper(node.right)
        }
        helper(root)
        return visitedNodes
    }
}

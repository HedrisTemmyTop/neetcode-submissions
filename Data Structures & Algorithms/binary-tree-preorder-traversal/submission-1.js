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
        let stack = []
        let curr = root

        while(curr || stack.length > 0){

            while(curr){
                visitedNodes.push(curr.val)
                stack.push(curr)
                curr = curr.left
            }
            curr = stack.pop().right
        }

        return visitedNodes
    }
}

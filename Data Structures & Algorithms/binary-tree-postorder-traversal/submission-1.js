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
    postorderTraversal(root) {
        let stack =[[root, false]]
        let res = []
        while(stack.length > 0){
            let [node, visited] = stack.pop()
            if(node){
                if(visited){
                    res.push(node.val)
                }else{
                    stack.push([node, true])
                    stack.push([node.right, false])
                    stack.push([node.left, false])
                }
            }
        }

        return res
    }
}

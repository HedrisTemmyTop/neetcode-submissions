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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        function dfs(node){
            if(!node) return null
            if(node.val == target){
                if((node.left && node.left.val !== target) ||(node.right && node.right.val !== target)){
                    console.log(node.right.val)
                    node.left = dfs(node.left)
                    node.right = dfs(node.right)
                    return node
                }else{
                    return null
                }
            }else{
               
            node.left = dfs(node.left)
            node.right = dfs(node.right)
            return node
            }
        }

        // dfs(root)
        return dfs(root)
    }
}


// 7:08
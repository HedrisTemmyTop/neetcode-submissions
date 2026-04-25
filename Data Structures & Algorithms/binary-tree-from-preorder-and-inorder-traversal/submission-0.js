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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let map = new Map()
        let pre_idx =0
        inorder.forEach((val, index) => map.set(val, index))
        function dfs(l, r){
            if(l > r) return null
            let root_val = preorder[pre_idx++]
            let root = new TreeNode(root_val)
            let idx = map.get(root_val)
            root.left = dfs(l,idx-1)
            root.right = dfs(idx+1, r)
            return root
        }

      return  dfs(0, inorder.length-1)
    }
}

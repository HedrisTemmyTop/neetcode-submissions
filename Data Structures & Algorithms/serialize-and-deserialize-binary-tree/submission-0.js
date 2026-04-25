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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let str = ""

        function dfs(node){
            if(!node){
                 str += 'null#'
                 return;
            }
            str += `${node.val}#`
            dfs(node.left)
            dfs(node.right)
        }
        dfs(root)
        //1#2#null#null#3#4#null#null#5#null#null#
        return str
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = data.split("#")
       let location =0;
    
        function dfs(){
            if(data[location] === 'null'){
                location++
                return null;
            }
            
            let node = new TreeNode(+data[location])
            location++
            node.left = dfs()
            node.right = dfs()
            return node

        }
       return  dfs()

    }



}

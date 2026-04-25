/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        function helper(n, row, col){
            let uniform = true;
            let val = grid[row][col]

            for(let i=row; i < row+n; i++){
                for(let j = col; j < col+n; j++){
                    if(val !== grid[i][j]){
                        uniform = false
                        break;
                    }
                }
                if(!uniform) break;
            }
            
            if(uniform) return new Node( val ===1, true)

            let mid = Math.floor(n/2)
            let TL = helper(mid, row, col)
            let TR = helper(mid, row, col+mid)
            let BL = helper(mid, row+mid, col)
            let BR = helper(mid, row+mid, col+mid)

            return new Node(1, false, TL, TR, BL, BR)
        }

       return helper(grid.length, 0, 0)
    }
}

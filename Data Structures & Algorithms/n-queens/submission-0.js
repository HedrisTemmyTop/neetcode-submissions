class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
 let col = new Set()
    let positiveDiagonal = new Set()
    let negativeDiagonal = new Set()
    let board = Array.from({ length: n }, () => new Array(n).fill("."))
    let res = []

    function backtrack(r = 0) {
        if (r === n) {
            res.push(board.map((row) => row.join('')));
            return
        }

        for (let c = 0; c < n; c++) {
            if (!col.has(c) && !positiveDiagonal.has(r + c) && !negativeDiagonal.has(r - c)) {
                col.add(c)
                positiveDiagonal.add(r + c)
                negativeDiagonal.add(r - c)
                board[r][c] = 'Q'
                backtrack(r + 1)
                col.delete(c)
                positiveDiagonal.delete(r + c)
                negativeDiagonal.delete(r - c)
                board[r][c] = '.'

            }
        }
    }
    backtrack()
    return res
    }
}
   
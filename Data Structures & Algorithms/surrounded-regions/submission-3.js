class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
            let ROWS = board.length;
    let COLS = board[0].length

    function dfs(row, col) {
        if (row < 0 || row === ROWS || col < 0 || col === COLS || board[row][col] !== 'O') return

        board[row][col] = 'T'
        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
    }


    for (let row = 0; row < ROWS; row++) {
        if (board[row][0] === 'O') dfs(row, 0)
        if (board[row][COLS - 1] === 'O') dfs(row, COLS - 1)

    }

    for (let col = 0; col < COLS; col++) {
        if (board[0][col] === 'O') dfs(0, col)
        if (board[ROWS-1][col] === 'O') dfs(ROWS-1, col)
    }
    for(let row =0; row < ROWS; row++){
        for(let col =0; col < COLS; col++){
            if(board[row][col] === 'T') board[row][col] = 'O'
            else if(board[row][col] === 'O') board[row][col] = 'X'
        }
    }
    }
}

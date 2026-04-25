class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let freq = {}

        for(let i =0; i < board.length; i++){

            freq = {}
            for(let j =0; j < board[i].length; j++){
                if(board[i][j] === ".") continue;
                if(freq[board[i][j]]) return false
                freq[board[i][j]] = true
            }
        }


         for(let i =0; i < board.length; i++){
        freq = {}
            for(let j =0; j < board[i].length; j++){
                if(board[j][i] === ".") continue;
                if(freq[board[j][i]]) return false
                freq[board[j][i]] = true
            }
        }


        for(let i =0; i < 9; i++){
        freq = {}
            for(let j =0; j < 3; j++){
                for(let k =0; k < 3; k++){
                          const row = Math.floor(i / 3) * 3 + j;
        const col = (i % 3) * 3 + k;

        if(board[row][col] === ".") continue;
        if(freq[board[row][col]]) return false
        freq[board[row][col]] = true

                }
            }
        }

        return true
    }
}

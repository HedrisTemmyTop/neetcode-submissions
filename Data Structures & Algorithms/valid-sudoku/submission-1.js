class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
          const subMatrixFreq = {};

  for (let i = 0; i < board.length; i++) {
    const rowFreq = {};
    const colFreq = {};
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        if (rowFreq[board[i][j]]) return false;
        rowFreq[board[i][j]] = true;


            const boxId = `${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;
        if (!subMatrixFreq[boxId]) subMatrixFreq[boxId] = [];

        if (subMatrixFreq[boxId].includes(board[i][j])) return false;
        subMatrixFreq[boxId].push(board[i][j]);
      }
      if (board[j][i] !== ".") {
        if (colFreq[board[j][i]]) return false;
        colFreq[board[j][i]] = true;
      }
   
    }
  }

  return true;
    }
}

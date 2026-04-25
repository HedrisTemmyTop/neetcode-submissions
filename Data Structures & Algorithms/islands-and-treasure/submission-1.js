class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let ROWS = grid.length
        let COLS = grid[0].length
        let queue = new Queue()
        let INF =  2147483647
        

        for(let row =0; row < ROWS; row++){
            for(let col =0; col < COLS; col++){
                if(!grid[row][col]) queue.enqueue([row, col, 0])
            }
        }

        while(!queue.isEmpty()){
            for(let i = queue.size(); i > 0; i--){
                let [row, col, distance] = queue.dequeue()
                console.log(row, col, distance, queue.size())
                fill(row-1, col, distance+1)
                fill(row+1, col, distance+1)
                fill(row, col-1, distance+1)
                fill(row, col+1, distance+1)
            }
        }

        function fill(row, col, distance){
            if(row < 0 || row === ROWS || col < 0 || col === COLS || grid[row][col] !== INF) return;
            grid[row][col] = distance
            queue.enqueue([row, col, distance])
        }
    }
}

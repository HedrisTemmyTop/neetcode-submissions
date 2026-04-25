class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let q = new Queue()
        let rows = grid.length;
        let cols = grid[0].length
        let land = 2147483647
        let visited = new Set()

        function addCell(i, j){
            let key = `${i}-${j}`
            if(i < 0 || i == rows || j < 0 || j == cols || grid[i][j] != land || visited.has(key)) return;
            visited.add(key)
            q.push([i, j])
        }


        for(let i =0; i < rows; i++){
            for(let j =0; j < cols; j++){
                if(!grid[i][j]){
                    let key = `${i}-${j}`
                    q.push([i, j])
                    visited.add(key)
                }
            }
        }

        let dist =0

        while(!q.isEmpty()){
            for(let i = q.size(); i > 0; i--){
                let [i, j] = q.pop()
                grid[i][j] = dist
                addCell(i, j+1)
                addCell(i, j-1)
                addCell(i+1, j)
                addCell(i-1, j)
            }
            dist++
        }
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let visited = new Set()
        let rows = grid.length;
        let cols = grid[0].length;
        let q = new Queue()

        let fresh = 0;

        for(let r =0; r < rows; r++){
            for(let c =0; c < cols; c++){
                if(grid[r][c] == 2){
                    q.enqueue([r, c])
                }else if(grid[r][c] === 1) fresh++
            }
        }

        if(!fresh) return 0

     

        function checkNei(r, c){
            if(r < 0 || r == rows || c < 0 || c == cols || grid[r][c] !== 1) return;
            let key = `${r}-${c}`
            if(visited.has(key)) return
            visited.add(key)
            q.enqueue([r, c])
        }

        let time =-1;


        while(!q.isEmpty()){
            for(let i = q.size(); i > 0; i--){
                let [r, c] = q.dequeue()
                console.log(r, c)
                checkNei(r-1, c)
                checkNei(r+1, c)
                checkNei(r, c-1)
                checkNei(r, c+1)          
            }
            time++
        }
        let n = [...visited].length
        if(n !== fresh) return -1;
        return time
    }
}

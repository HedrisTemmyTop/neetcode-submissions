class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n - 1) return false
        let map = new Map()
        let visited = new Set()
        

        for(let node =0; node < n; node++){
            map.set(node, [])
        }

        for(let [n1, n2] of edges){
            let node1 = map.get(n1)
            let node2 = map.get(n2)
            node1.push(n2)
            node2.push(n1)
            map.set(n1, node1)
            map.set(n2, node2)
        }

        function dfs(parent, node){
            if(visited.has(node)) return false
            visited.add(node)
            let neigbhors = map.get(node)
            for(let n of neigbhors){
                if(parent === n) continue
                if(!dfs(node, n)) return false
            }
            return true
        }


        dfs(-1, 0)
        return [...visited].length === n
    }
}

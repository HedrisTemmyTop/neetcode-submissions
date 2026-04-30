class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let map = new Map()
        let visited = new Set()
        let count =0;

        for(let node =0; node < n; node++){
            map.set(node, [])
        }
        for(let [a, b] of edges){
            let n1 = map.get(a);
            let n2 = map.get(b)
            n1.push(b)
            n2.push(a)
            map.set(a, n1)
            map.set(b,n2)
        }

        function dfs(node){
            if(visited.has(node)) return
            visited.add(node)
            for(let nei of map.get(node)) dfs(nei)
        }

        for(let node =0; node < n; node++){
            if(visited.has(node)) continue
            dfs(node)
            count++
        }

        return count;
    }
}

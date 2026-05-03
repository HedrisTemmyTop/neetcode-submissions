class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
          let n = accounts.length
    let parent = Array.from({ length: n }, (_, i) => i)
    let rank = new Array(n).fill(0)
    let map = new Map()

    function find(node) {
        if (node === parent[node]) return node
        parent[node] = find(parent[node])
        return parent[node];
    }

    function union(n1, n2) {
        let rp1 = find(n1)
        let rp2 = find(n2)
        if (rp1 === rp2) return;
        if (rank[rp1] < rank[rp2]) parent[rp1] = rp2
        else if (rank[rp2] < rank[rp1]) parent[rp2] = rp1
        else {
            parent[rp2] = rp1
            rank[rp1]++
        }
    }

    for (let i = 0; i < n; i++) {
        const account = accounts[i]
        for (let j = 1; j < account.length; j++) {
            let email = account[j]
            if (map.has(email)) {
                union(map.get(email), i)
            } else {
                map.set(email, i)
            }
        }
    }

    let merge = Array.from({ length: n }, () => new Set())
    for (let i = 0; i < n; i++) {
        let rp = find(i)
        let acc = accounts[i];
        for (let j = 1; j < acc.length; j++) {
            let email = acc[j]
            merge[rp].add(email)
        }
    }

    let res = []
    for (let i = 0; i < n; i++) {
        if (!merge[i].size) continue;
        let acc = [...merge[i]].sort()
        const [name] = accounts[i]
        res.push([name, ...acc])
    }

    return res
    }
}

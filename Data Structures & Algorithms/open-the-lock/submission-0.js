class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
           let visited = new Set(deadends)
    let start = `0000`
    if (visited.has(start)) return -1
    if (target === start) return 0

    visited.add(start)
    let q = new Queue()
    let moves = 0;
    q.enqueue(start)



    while (!q.isEmpty()) {

        for (let j = q.size(); j > 0; j--) {
            let code = q.dequeue()
            if (code === target) return moves
            for (let i = 0; i < 4; i++) {

                let currDigit = +code[i];
                let up = (currDigit + 1) % 10
                let down = ((currDigit - 1) + 10) % 10
                let upRes = code.slice(0, i) + up + code.slice(i + 1)
                let downRes = code.slice(0, i) + down + code.slice(i + 1)
                if (!visited.has(upRes)) {
                    visited.add(upRes)
                    q.enqueue(upRes)
                }
                if (!visited.has(downRes)) {
                    visited.add(downRes)
                    q.enqueue(downRes)
                }

            }
        }
        moves++
    }

    return -1
    }
}

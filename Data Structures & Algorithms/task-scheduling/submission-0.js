class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freq = new Array(26).fill(0)
        for(let task of tasks){
            let idx = task.charCodeAt() - 65
            freq[idx]++
        }
        let heap = new MaxPriorityQueue()


        for(let f of freq){
           if(f >0) heap.push(f)
        }

        let q = new Queue()
        let time =0;


        while(heap.size() > 0 || q.size() > 0){
            time++
            if(heap.size()){
            let remaining = heap.pop() -1
            if(remaining > 0) q.push([remaining, time+n])
            }
            
            if(q.size() && q.front()[1] === time){
               let [r, _] = q.pop()
               heap.push(r)
            }


        }

        return time
    }
}
// 8:36
//X->Y->P->X->Y
//3->1->1
//2->1->1
//
//A->B->C->IDLE->A->3IDLE->A
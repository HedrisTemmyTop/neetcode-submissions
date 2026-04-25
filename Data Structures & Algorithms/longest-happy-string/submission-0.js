class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        let  freq = [a, b, c]
        let heap = new MaxPriorityQueue((char)=> char[0])
        for(let i = 0; i < 3; i++){
            let count = freq[i]
            if(count){
                let char = 'a'
                if(i === 1) char = 'b'
                else if(i === 2) char = 'c' 
                heap.enqueue([count, char])
            }
        }

        let res = ''
        let prev = null
        
        while(heap.size() || prev){
            if(!heap.size() && prev) return res
        
            let [count, char] = heap.dequeue()
            res += char

            if(prev){
                heap.enqueue(prev)
                prev = null
            }
            if(count === 1) continue;
            if(res.length >= 2 && res[res.length-1] === char && res[res.length-2] === char){
                prev = [count-1, char]
            }else{
                heap.enqueue([count-1, char])
            }


        }

        return res
    }
}

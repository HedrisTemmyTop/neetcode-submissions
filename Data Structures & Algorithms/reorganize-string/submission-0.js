class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        let freq = new Array(26).fill(0)
        for(let char of s){
            let code = char.charCodeAt() - 97
            freq[code]++
        }
        let heap = new MaxPriorityQueue((code)=> code[0])
        console.log(freq)

        for(let i =0; i < freq.length; i++){
            let count = freq[i]
            if(count){
            let char = String.fromCharCode(i+ 97);
            heap.enqueue([count, char])

            }
        }
        let res = ''
        let prev = null
        // cdc  2c

        while(heap.size() || prev){
            if(heap.size() === 0 && prev) return ''
            let [count, char] = heap.dequeue()

            res += char

            if(prev){
                heap.enqueue(prev)
                prev = null
            }

            if(count > 1){
                prev = [count -1, char]
            }

        }

        return res;


    }
}

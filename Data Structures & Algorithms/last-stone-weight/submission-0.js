class Solution {
        constructor(){
        this.values = []
    }
    /**
     * @param {number[]} stones
     * @return {number}
     */


    lastStoneWeight(stones) {
        stones.forEach((stone) => this.insert(stone))
// [2,2]
        while(this.values.length > 1){
            let max1 = this.extractMax();
            let max2 = this.extractMax();
            let diff = max1 - max2;
            if(diff === 0) continue;
            this.insert(diff)
        }  

        return this.values[0] || 0   
    }

    insert(val){
   
        this.values.push(val)
        let idx = this.values.length -1

        while(idx !== 0){
            let parentIdx = Math.floor((idx -1)/2)
            if(this.values[parentIdx] >=  this.values[idx])  break
        
           
            [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]]
            idx = parentIdx
        }
    }

    extractMax(){
        if(this.values.length === 0) return 0;
        if(this.values.length ===1)return this.values.pop()
        let max = this.values[0]
        this.values[0] =   this.values.pop()
        let idx =0
        let length = this.values.length;

        while(true){
            let left = (2 * idx) + 1
            let right = (2 * idx) + 2
            let largestIdx = idx;
            if(left < length && this.values[left] > this.values[largestIdx]) largestIdx = left
            if(right < length && this.values[right] > this.values[largestIdx]) largestIdx = right

            if(largestIdx === idx) break;
            [this.values[idx], this.values[largestIdx]] = [this.values[largestIdx], this.values[idx]]
            idx = largestIdx
        }
        return max
    }


}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    constructor(){
        this.values = []
    }
    kClosest(points, k) {
        points.forEach((point)=> this.insert(point))
        let output = []
        console.log(this.values)
      
        while(output.length !== k){
            const [val, min] = this.extractMin()
            output.push(val)
        }

        return output
    }
    insert(val){
        let [x, y] = val
        let distance = Math.sqrt((Math.abs(x)**2) + (Math.abs(y)**2))
        this.values.push([val, distance])
        if(this.values.length === 1) return;
        let idx = this.values.length -1
        while(idx !== 0){
            let parentIdx = Math.floor((idx - 1)/2)
            if(this.values[parentIdx][1] < this.values[idx][1]) break;
            [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]]
            idx = parentIdx
        }
    }

    extractMin(){
        if(this.values.length === 0) return;
        if(this.values.length === 1) return this.values.pop()
        let min = this.values[0]
        this.values[0] = this.values.pop()
        let length = this.values.length
        let idx = 0;

        while(true){
            let smallest = idx
            let left = (2 * idx) + 1
            let right = (2 * idx) + 2
            if(left < length && this.values[left][1] < this.values[smallest][1]) smallest = left
            if(right < length && this.values[right][1] < this.values[smallest][1]) smallest = right
            if(smallest === idx) break;

            [this.values[smallest], this.values[idx]] = [this.values[idx], this.values[smallest]]
            idx = smallest
        }

        return min
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums;
        this.k = k;
        this.q = []
        this._init()
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.insert(val)
        if(this.q.length > this.k){
            [this.q[0], this.q[this.q.length -1]] = [this.q[this.q.length -1], this.q[0]]
            this.q.pop()
            this.heapDown()
        }
        return this.q[0]
    }
    insert(num){
            this.q.push(num)
            let idx = this.q.length -1
            let el = this.q[idx]

            while(idx > 0){
                let parentIdx = Math.floor((idx-1)/2)
                let parentEl = this.q[parentIdx]
                if(parentEl > el){
                    this.q[parentIdx] = el
                    this.q[idx] = parentEl
                    idx = parentIdx
                }else break;

            }
    }

    heapDown(){
           let index = 0;
            while(true){
                let smallest = index;
                let leftIdx =  (2 * index) +1
                let rightIdx =  (2 * index) +2
                if(leftIdx < this.q.length && this.q[leftIdx] < this.q[smallest]){
                    smallest = leftIdx
                }
                 if(rightIdx < this.q.length && this.q[rightIdx] < this.q[smallest]){
                    smallest = rightIdx
                }

                if(smallest === index) break;
                [this.q[index], this.q[smallest]] = [this.q[smallest], this.q[index]]
                index = smallest
            }
    }

    _init(){
        this.nums.forEach((num)=> {
            this.insert(num)
        })

        let idx =0;
        // 5, 3,4,    2,          5

        while(this.q.length > this.k){
            [this.q[idx], this.q[this.q.length -1]] = [this.q[this.q.length-1], this.q[idx]]
            this.q.pop()
            this.heapDown()
        }
    }
}

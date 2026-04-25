class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue()
        this.minHeap = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num)    
        if(this.maxHeap.front() > this.minHeap.front()){
            this.minHeap.enqueue(this.maxHeap.dequeue())
        }
        // [1,2, 2] [ 7] 
        if(this.minHeap.size()- this.maxHeap.size()  > 1){
            this.maxHeap.enqueue(this.minHeap.dequeue())
        }else if(this.maxHeap.size() - this.minHeap.size() > 1){
            this.minHeap.enqueue(this.maxHeap.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let size = this.maxHeap.size() + this.minHeap.size()
        if(size % 2 === 0) return ((this.maxHeap.front() + this.minHeap.front()) /2.0)
        if(this.maxHeap.size() > this.minHeap.size()) return this.maxHeap.front()
        return this.minHeap.front()
    }
}
 
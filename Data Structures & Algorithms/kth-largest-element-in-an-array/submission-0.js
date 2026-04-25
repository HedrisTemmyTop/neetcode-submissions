class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let heap = new MinPriorityQueue()
        for(let num of nums){
            heap.enqueue(num)
        }
        while(heap.size() > k){
            heap.dequeue()
        }

        return heap.dequeue()                                    
    }
}

class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */


 carPooling (trips, capacity) {
    trips.sort((a, b) => a[1] - b[1])
    let currPass =0
    let heap = new MinPriorityQueue((x) => x[2])

    for(let [numPass, origin, destination] of trips){

        while(heap.size() && heap.front()[2] <= origin){
            currPass -= heap.dequeue()[0]
        }
        currPass += numPass
        if(currPass > capacity) return false
        heap.enqueue([numPass, origin, destination])
    }
    return true
};
}

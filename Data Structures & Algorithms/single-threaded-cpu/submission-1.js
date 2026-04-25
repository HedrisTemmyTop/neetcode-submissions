class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        const cpuTasks = tasks.map((task, i) => [...task, i]).sort((a, b) => a[0] - b[0]);

        let time =cpuTasks[0][0];
        let i = 0;
        let heap = new MinPriorityQueue((task)=> task[1]);
        let res = []
        while(heap.size() || i < cpuTasks.length){
            while(i < cpuTasks.length && cpuTasks[i][0] <= time){
                console.log(i, heap.size)
                heap.enqueue(cpuTasks[i])
                i++
            }

            if(!heap.size()){
                time = cpuTasks[i][0]
            }else{
                const [_, procTime, index] = heap.dequeue()
                res.push(index)
                time += procTime
            }
        }

        return res;

    }
}

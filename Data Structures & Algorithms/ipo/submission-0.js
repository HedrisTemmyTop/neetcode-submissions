class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        let canAfford = new MaxPriorityQueue(p => p[0])
        let cannotAfford = new MinPriorityQueue(p => p[1])

        for(let i =0; i < capital.length; i++){
            let cap = capital[i]
            let p = profits[i]
            if(cap <= w){
                canAfford.enqueue([p, cap])
            }else{
                cannotAfford.enqueue([p, cap])
            }
        }

        let project = 0;
        let currCap = w

        while(project < k && canAfford.size()){
            let [p,cap] = canAfford.dequeue()
            currCap += p
            console.log(currCap)
            while(cannotAfford.size() && cannotAfford.front()[1] <= currCap){
                canAfford.enqueue(cannotAfford.dequeue())
            }
            project++
        }

        return currCap
    }
}

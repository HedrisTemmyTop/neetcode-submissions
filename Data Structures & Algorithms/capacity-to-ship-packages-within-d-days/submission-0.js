class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let totalWeights = weights.reduce((a,b) => a+b, 0);
         let l = Math.max(...weights)
         let r = totalWeights;
         let result =0;

        while(l <= r){
            const mid = l + Math.floor((r-l)/2)

            let sum =0;
            let count =1;
            for(let i =0; i < weights.length; i++){
                const newSum = weights[i] +sum
                if(newSum > mid){
                    count++
                    sum = weights[i]
                }else{
                    sum = newSum;
                }
            }

            if(count > days) l = mid+1
            else{
                result = mid;
                r = mid-1;
            }

       
        }

        return result;
    }
}

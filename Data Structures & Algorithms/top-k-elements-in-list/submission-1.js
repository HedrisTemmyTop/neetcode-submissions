class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        let output = []

        for(let num of nums){
            freq[num] = (freq[num] || 0) +1
        }

            let bucket = Array.from({length: nums.length + 1}, ()=> [])

            for(let key in freq){
                bucket[freq[key]].push(+key)
            }


        for(let i =bucket.length -1; i >= 0; i--){

            if(output.length === k) return output;
           if(bucket[i].length !== 0) output.push(...bucket[i])
        }
return output

    }
}

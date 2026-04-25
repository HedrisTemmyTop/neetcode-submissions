class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}


        for(let num of nums){
            freq[num] = (freq[num] || 0) + 1
        }

        const bucket = Array.from({length: nums.length +1}, ()=> [])


        for(let key in freq){
            bucket[freq[key]].push(+key)
        }

        const result = [];

        for(let i = bucket.length -1; i >=0; i-- ){
            if(result.length === k) return result;
            if(bucket[i].length > 0) result.push(...bucket[i])
        }

        return result;

    }
}

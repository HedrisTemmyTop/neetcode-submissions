class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const freq ={}


        for(let i = 0; i < nums.length; i++){
            freq[nums[i]] = (freq[nums[i]] || 0) + 1
        }


        const buckets = Array.from({length: nums.length + 1}, ()=> [])

        for(const key in freq){
            buckets[freq[key]].push(+key)

        }

        let result = []
        // [[], [2] [], [3, 2], []]

        for(let i =buckets.length -1; i>= 0; i--){
            if(result.length === k) return result

            if(buckets[i].length !==0){
                result.push(...buckets[i])
            }

        }

        return result
    }

 
}

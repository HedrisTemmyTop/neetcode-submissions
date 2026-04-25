class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let count = {}
        let perms = []
        let res = []
        for(let num of nums){
            count[num] = (count[num] || 0) + 1
        }


        function helper(){
            if(perms.length === nums.length){
                res.push([...perms])
                return;
            }

            for(let num in count){
                if(count[num] > 0){
                    perms.push(num)
                    count[num] -= 1
                    helper()
                    count[num] += 1
                    perms.pop()
                }
            }
        }
        helper()
        return res
    }
}

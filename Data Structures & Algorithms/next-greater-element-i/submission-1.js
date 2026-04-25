class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const freq = {}

        for(let i =0; i <nums2.length; i++){
            freq[nums2[i]] = i
        }

/**
 * {
 * 1:0
 * 3: 1
 * 4:2
 * 2:3
 * }
 */
        const output = []

        for(let i =0; i < nums1.length; i++){
            const loopIdx = freq[nums1[i]]
            if(loopIdx < nums2.length -1){
                let s = loopIdx + 1;
                while(nums2[s] <= nums1[i] && s < nums2.length){
                    s++
                }
               if(s === nums2.length)   output.push(-1)
              else output.push(nums2[s])
            }else{
            output.push(-1)

            }
            

           
        }

        return output
    }
}

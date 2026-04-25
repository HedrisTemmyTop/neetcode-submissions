class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0,
            r = height.length -1,
            leftMax = height[l],
            rightMax = height[r],
            max = 0;

            while(r > l){
                if(height[l] < height[r]){
                    l++
                    
                leftMax = Math.max(height[l], leftMax)
                max += leftMax - height[l]

                }else{
                    r--

                rightMax = Math.max(height[r], rightMax)
                max += rightMax - height[r]
                }
            
            }

            return max
    }


}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left =0;
        let right = heights.length -1;
        let max = 0;

        while(right > left){
            const l = right - left;
            const h = Math.min(heights[left], heights[right])
            const a =  l * h
            max = Math.max(max, a)
            if(heights[left] > heights[right]){
                right--

            }else{
                left++

            }
      



        }


        return max
    }
}

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       let h = height;
        let l = 0,
          r = h.length -1,
        
         leftMax = h[l],
            rightMax = h[r],
            result = 0

     while(l < r){
        if(h[l] < h[r]){

            l++
         leftMax = Math.max(leftMax, h[l])
         result += leftMax - h[l]



        }else{
            r--
            rightMax = Math.max(rightMax, h[r])
            result += rightMax - h[r]


        }
     }


     return result 

    }
}


/* 
From the image, we can see that to calculate 
the amount of water trapped at a position, the greater 
element
 to the left l and the greater element to the right r 
 of the current position are crucial. The formula for 
 the trapped water at index i is given by:
  min(height[l], height[r]) - height[i].

  */
// no of zeros is our width
// smallest line is our height
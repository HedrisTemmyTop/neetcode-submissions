class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
         const numbers = nums.sort((a, b)=> a-b)
        const output = []

        for(let i =0; i < numbers.length; i++){
            let p1 = i +1;
            let p2 = numbers.length -1
            if(numbers[i] === numbers[i-1]) continue
           

            while(p1 < p2){
               let  sum = numbers[i] + numbers[p1] + numbers[p2]

                if(sum === 0){
                    output.push([numbers[i], numbers[p1], numbers[p2]])
                    p2--
                    p1++

                    while(p1 < p2 && numbers[p1] === numbers[p1-1]) p1++
                    while(p2 > p1 && numbers[p2] === numbers[p2+1]) p2--
                }else if(sum > 0){
                    p2--
                }else{

                p1++
                }

             
            }
        }

        return output
    }
}


// [-1,0,1,-1,0,-1]


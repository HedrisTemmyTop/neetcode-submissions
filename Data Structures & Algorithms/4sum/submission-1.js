class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const n = nums.sort((a, b) => a-b)
        // [-1, -1, -1, 1,1,1]
        const output = []

        for(let i =0; i < n.length; i++){

                if(n[i] === n[i-1]) continue
            for(let j = i+1; j < n.length; j++){
                if(j > i+1 && n[j] === n[j-1]) continue
                let p1 = j+1;
                let p2 = n.length -1;

                while(p2 > p1){
                    let sum = n[i] + n[j] + n[p1] + n[p2]
                    if(sum ===target){
                        output.push([n[i], n[j], n[p1], n[p2]])
                        p1++
                        p2--
                        while(p2 > p1 && n[p1] === n[p1-1]) p1++
                        while(p2 > p1 && n[p2] === n[p2+1]) p2--


                    }else if(sum < target){
                        p1++

                    }else{
                        p2--
                    }
                }
            }
        }

        return output


    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const n = nums.sort((a, b)=> a-b)
         let output  = [], quads =[];

// -3, 0, 1,2,3,3
        function kSum(target, start, k){
            if(k !== 2){

                for(let i =start; i < n.length; i ++){
                    if(i > start && n[i] === n[i-1]) continue;

                    quads.push(n[i])
                    kSum( target - n[i], i+1, k -1)
                    quads.pop()

                }
                    return

            }else {
                let low = start,
                    high = n.length -1;


                    while(high > low){
                        const sum = n[low] + n[high]
                        if(sum > target) high --
                        else if(sum < target) low++
                        else{
                            output.push([...quads, n[low], n[high]])
                            low++
                            high--

                            while(low < high && n[low] === n[low-1]) low ++
                        }

                        
                    }

            }
        }

        kSum(target,0, 4)




        return output
    }
}

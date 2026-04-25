class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.sort((a, b)=> a-b)
        const output = [];
        const tr = []
// [-4, -1,-1,0,1,2]
        function   kSum(target, k, start){
            if(k !== 2) {
                for(let i =start; i < n.length; i++){
                    if(n[i] === n[i-1] && i > start) continue;
                   tr.push(n[i])
                kSum(target - n[i], k -1, i + 1)
                tr.pop()
                }
                return
              
            }

            let l = start,
                 r = n.length -1;

                 while(r > l){
                    const sum =  n[l] + n[r];
                    if(sum === target) {
                    
                        output.push([...tr, n[l], n[r]])
                         l++;
                         r--
                         while(n[l] === n[l-1] && l < r) l++

                    }else if(sum > target){
                        r--
                    }else{
                        l++
                    }

                   
                 }

             

            
        }

        kSum(0, 3, 0)
        return output
    }
}

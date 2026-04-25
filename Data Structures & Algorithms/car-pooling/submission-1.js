class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        trips.sort((a, b) => a[1] - b[1] )
        let currPeopleInCar = trips[0][0]
        if(currPeopleInCar > capacity) return false

        for(let i =1; i < trips.length; i++){
            let f = trips[i-1]
            let fDest = f[2]
            let [numPassenger, origin] = trips[i]
            if(fDest <= origin){
                currPeopleInCar = numPassenger
                if(currPeopleInCar > capacity) return false
                else continue;
            }else{
                currPeopleInCar += numPassenger
                if(currPeopleInCar > capacity) return false
                else continue;
            }


        }

        return true
    }
}

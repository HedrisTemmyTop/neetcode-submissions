class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        trips.sort((a, b) => a[1] - b[1] )
        let currPeopleInCar = trips[0][0]
        let totalDistance = trips[0][1]
        if(currPeopleInCar > capacity) return false

        for(let i =1; i < trips.length; i++){
            let [fnumP, fOrigin, fDest] = trips[i-1]
            let [numPassenger, origin, destination] = trips[i]
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

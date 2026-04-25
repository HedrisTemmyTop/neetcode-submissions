class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.get(key)) this.keyStore.set(key, [])
        this.keyStore.get(key).push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key)
        if(!arr || arr.length ===0) return ""
        let n = arr.length;
        let l =0;
        let r= n-1;
        let result = ""
        while(l<=r){
            let mid = l + Math.floor((r-l)/2)
             if(arr[mid][0] > timestamp)  r= mid-1;
            else{
                result = arr[mid][1]
                 l = mid +1;
            }
        }

        return result
    }
}
 
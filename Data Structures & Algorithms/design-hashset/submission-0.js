class MyHashSet {
    constructor(size = 50) {
        this.keyMap = new Array(size).fill(null);
        this.DELETED = Symbol("DELETED");
        this.WEIRD_PRIME = 31;
        this.size = 0;
        this.LOAD_FACTOR = 0.7;
    }

    _resize() {
        const oldMap = this.keyMap;
        const newLength = this.keyMap.length * 2;
        this.keyMap = new Array(newLength).fill(null);
        this.size = 0;

        for (let i = 0; i < oldMap.length; i++) {
            const key = oldMap[i];
            if (key !== null && key !== this.DELETED) {
                this.add(key);
            }
        }
    }

    add(key) {
        if ((this.size + 1) / this.keyMap.length > this.LOAD_FACTOR) {
            this._resize();
        }

        const index = (key * this.WEIRD_PRIME) % this.keyMap.length;

        for (let i = 0; i < this.keyMap.length; i++) {
            const probeIdx = (index + i) % this.keyMap.length;
            const slot = this.keyMap[probeIdx];
            if (!slot || slot === this.DELETED) {
                this.keyMap[probeIdx] = key;
                this.size++;
                return;
            }
            if (slot === key) return; // already exists
        }
    }

    remove(key) {
        const index = (key * this.WEIRD_PRIME) % this.keyMap.length;

        for (let i = 0; i < this.keyMap.length; i++) {
            const probeIdx = (index + i) % this.keyMap.length;
            const slot = this.keyMap[probeIdx];
            if (slot === key) {
                this.keyMap[probeIdx] = this.DELETED;
                this.size--;
                return;
            }
            if (slot === null) return; // not found
        }
    }

    contains(key) {
        const index = (key * this.WEIRD_PRIME) % this.keyMap.length;

        for (let i = 0; i < this.keyMap.length; i++) {
            const probeIdx = (index + i) % this.keyMap.length;
            const slot = this.keyMap[probeIdx];
            if (slot === key) return true;
            if (slot === null || slot === undefined) return false;
        
        }

        return false;
    }
}
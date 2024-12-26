/** 
 * @param {number} target
 * @return {number}
 */
Array.prototype.upperBound = function(target) {
    let lower = 0;
    let upper = this.length - 1;

    while (lower <= upper) {
        let mid = Math.floor((lower + upper) / 2);
        
        if (this[mid] == target) {
            while (mid < upper) {
                if (this[mid + 1] != target) return mid;
                mid++;
            }

            return mid;
        }

        if (this[mid] > target) {
            upper = mid - 1;
        }

        if (this[mid] < target) {
            lower = mid + 1;
        }
    }

    return -1;
};


// [3,4,5].upperBound(5); // 2
// [1,4,5].upperBound(2); // -1
// [3,4,6,6,6,6,7].upperBound(6) // 5

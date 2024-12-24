/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    var filtered = {};

    for (var item of this) {
        let hash = fn(item);

        if (hash in filtered) {
            filtered[hash].push(item)
        } else {
            filtered[hash] = [item]
        }
    }

    return filtered;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    var memo = {};
    
    return function(...args) {
        var hash = JSON.stringify(args);

        if (hash in memo) {
            return memo[hash];
        }

        memo[hash] = fn.apply(this, args);

        return memo[hash];
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

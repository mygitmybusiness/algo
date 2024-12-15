// 2637. Promise Time Limit

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            var timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t)

            try {
                var result = await fn(...args);
                resolve(result);
            } catch (err) {
                reject(err);
            }

            clearTimeout(timer);
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
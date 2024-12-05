/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        var count = functions.length - 1,
            state = x;

        while (count >= 0) {
            state = functions[count](state)
            count--;
        }

        return state;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

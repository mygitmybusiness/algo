/**
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 */
var partial = function(fn, args) {
    
    return function(...restArgs) {
        for (let i = 0; i < args.length; i++) {
            if (args[i] == '_') args[i] = restArgs.shift();
        }

        if (restArgs.length) args = [...args, ...restArgs];

        return fn(...args);
    }
};

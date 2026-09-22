function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (!cache.has(key)) {
            cache.set(key, fn.apply(this, args));
            console.log(cache);
        } else {
            console.log(`value is here: ${[...cache.entries()]}`);
        }

        return cache.get(key);
    }
}

const countNums = (num) => {
    let res = 1;

    for (let i = 1; i <= num; i++) {
        res += res * i;
    }

    return res;
}

const memFn = memoize(countNums);
console.log(memFn(169));
console.log(memFn(169));

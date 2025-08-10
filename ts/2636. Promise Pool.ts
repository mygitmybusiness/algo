type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
    async function evalNext() {
        if (!functions.length) return;

        let current = functions.shift();
        await current();

        await evalNext();
    }

    const newPromises = Array(n).fill(0).map(evalNext);

    await Promise.all(newPromises)
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

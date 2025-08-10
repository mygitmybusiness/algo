type F = (...args: any[]) => void

function throttle(fn: F, t: number): F {
    let intervalInProgress:any = null;
    let argsToProcess:any = null;

    const intervalFunction = () => {
        if (argsToProcess === null) {
            clearInterval(intervalInProgress);
            intervalInProgress = null;
        } else {
            fn(...argsToProcess);
            argsToProcess = null;
        }
    };

    return function throttled(...args) {
        if (intervalInProgress) {
            argsToProcess = args;
        } else {
            fn(...args);
            intervalInProgress = setInterval(intervalFunction, t);
        }
    }
};

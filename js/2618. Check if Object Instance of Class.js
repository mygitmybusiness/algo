/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function") return false;

    let proto = Object.getPrototypeOf(obj);
    const prototype = classFunction.prototype;

    while (proto !== null) {
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

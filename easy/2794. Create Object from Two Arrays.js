/**
 * @param {Array} keysArr
 * @param {Array} valuesArr
 * @return {Object}
 */
var createObject = function(keysArr, valuesArr) {
    if (keysArr.length == 0 || valuesArr.length == 0) return {};
    if (keysArr.length != valuesArr.length) return {};

    let output = {};

    for (let i = 0; i < keysArr.length; i++) {
        let key = String(keysArr[i]);

        if (!output.hasOwnProperty(key)) output[key] = valuesArr[i];
    }

    return output;
};

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let seniors = 0;

    for (let i = 0; i < details.length; i++) {
        let age = details[i].slice(11, 13);

        if (Number(age) > 60) seniors++;
    }

    return seniors;
};

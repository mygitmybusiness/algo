/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    if (turnedOn < 0 || turnedOn > 10) return [];
    
    const result = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            let hour = h.toString(2).split('1').length - 1;
            let minute = m.toString(2).split('1').length - 1;

            const filledMinutes = m.toString().padStart(2, '0'); // fill end with zeroes

            if (hour + minute === turnedOn) {
                result.push(h  + ':' + filledMinutes);
            }
        }
    }

    return result;
};


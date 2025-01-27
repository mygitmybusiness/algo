/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let max = 0;

    boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);

    for (var i = 0; i < boxTypes.length && truckSize > 0; i++) {
        let numberOfBoxes = boxTypes[i][0];
        let numberOfUnitsPerBox = boxTypes[i][1];

        if (truckSize > numberOfBoxes) {
            max += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            max += truckSize * numberOfUnitsPerBox;
            truckSize = 0;
        }
    }

    return max;
};

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1, right = 1;

    for (const pile of piles) {
        right = Math.max(right, pile);
    }

    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        let hour = 0;

        for (let pile of piles) {
            hour += Math.ceil(pile / middle);
        }

        if (hour <= h) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    return left;
};

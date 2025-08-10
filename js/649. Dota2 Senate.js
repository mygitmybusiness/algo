/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let r = [];
    let d = [];

    for (let s in senate) {
        if (senate[s] == 'R') {
            r.push(Number(s));
        } else {
            d.push(Number(s));
        }
    }

    while (r.length && d.length) {
        let rT = r.shift();
        let dT = d.shift();

        if (dT < rT) {
            d.push(dT + senate.length);
        } else {
            r.push(rT + senate.length);
        }
    }

    return r.length == 0 ? 'Dire' : 'Radiant';
};

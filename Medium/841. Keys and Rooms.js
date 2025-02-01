/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let keyChain = [...rooms[0]];
    let visitedRooms = new Set().add(0);

    while (keyChain.length) {
        let key = keyChain.shift();
        let current = rooms[key];

        if (!visitedRooms.has(key)) {
            keyChain.push(...current);
        }

        visitedRooms.add(key);
    }

    return visitedRooms.size == rooms.length;
};

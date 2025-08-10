/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var moves = moves.split('');
    var coordinates = [0, 0];

    for (var i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'U':
                coordinates[0]++;
                break;
            case 'R':
                coordinates[1]++;
                break;
            case 'D':
                coordinates[0]--;
                break;
            case 'L':
                coordinates[1]--;
                break;
        }
    }

    return JSON.stringify(coordinates) == JSON.stringify([0,0]);
};

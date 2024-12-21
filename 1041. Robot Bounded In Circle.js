/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    var position = [0, 0],
        headingTo = ['N', 'E', 'S', 'W'],
        direction = 0,
        c = 0;

    while (c < 100) {
        for (var move in instructions) {
            if (instructions[move] == 'R') {
                if (direction < headingTo.length - 1) {
                    direction++;
                } else {
                    direction = 0;
                }
            }

            if (instructions[move] == 'L') {
                if (direction > 0) {
                    direction--;
                } else {
                    direction = headingTo.length - 1;
                }
            }

            if (instructions[move] == 'G') {
                // if heading to direction -> change [x, y]
                switch (headingTo[direction]) {
                    case 'N':
                        position[1]++;
                        break;
                    case 'E':
                        position[0]++;
                        break;
                    case 'S':
                        position[1]--;
                        break;
                    case 'W':
                        position[0]--;
                        break;
                }
            }

            console.log("instruction: " + instructions[move], "Heading to: " + headingTo[direction], "Position: " + JSON.stringify(position));
        }
        
        c++;
        
        if (JSON.stringify(position) == JSON.stringify([0, 0])) return true;
    }

    return false;
};

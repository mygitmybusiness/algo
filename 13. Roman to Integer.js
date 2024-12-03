/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dictionary = {
        'I': 1, 
        'V': 5, 
        'X': 10, 
        'L': 50, 
        'C': 100, 
        'D': 500, 
        'M': 1000
    },
    counter = 0;
    i = 0;

    while (i < s.length) {
        let current = s[i];
            next = s[i + 1];

        switch (current) {
            case "I":
                if (next === "V" || next === "X") {
                    counter += dictionary[next] - dictionary[current];
                    i += 2;
                } else {
                    counter += dictionary[current];
                    i++;
                }
                break;
            case "X":
                if (next === "L" || next === "C") {
                    counter += dictionary[next] - dictionary[current];
                    i += 2;
                } else {
                    counter += dictionary[current];
                    i++;
                }
                break;
            case "C":
                if (next === "D" || next === "M") {
                    counter += dictionary[next] - dictionary[current];
                    i += 2;
                } else {
                    counter += dictionary[current];
                    i++;
                }
                break;
            default:
                counter += dictionary[current];
                i++;
                break;
        }
    }

    return counter;
};

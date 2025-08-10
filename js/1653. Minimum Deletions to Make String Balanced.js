/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    var stack = [];
    var count = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (stack.length && stack.at(-1) == 'b' && s[i] == 'a') {
            stack.pop();
            count++;
        } else {
            stack.push(s[i]);
        }
    }

    return count;
};

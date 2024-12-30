/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    s = s.split('');
    var stack = [];
    var k = 0;
    
    while (k < s.length) {
        if (s[k] == '(') {
            stack.push('(');
        }

        if (s[k] == ')') {
            if (stack.length == 0) {
                s.splice(k, 1);
                k--;
            } else {
                stack.pop();
            } 
        }

        k++;
    }

    if (stack.length) {
        var i = s.length - 1;

        while (stack.length && i >= 0) {
            if (s[i] == stack.at(-1)) {
                s.splice(i, 1);
                stack.pop();
            } else {
                i--;
            }
        }
    }

    return s.join('');
};

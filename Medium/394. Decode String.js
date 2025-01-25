/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    

    for (var i = 0; i < s.length; i++) {
        if (s[i] != ']') {
            stack.push(s[i])
        } else {
            let decodedString = '';

            while (stack.at(-1) != '[') {
                decodedString = stack.pop() + decodedString;
            }

            stack.pop(); // remove [ bracket

            // get k number
            let k = ''; 

            while (!isNaN(stack.at(-1))) {
                k = stack.pop() + k;
            }

            k = Number(k);

            for (let i = 0; i < k; i++) {
                stack.push(decodedString);
            }
        }
    }

    return stack.join('');
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    for (let i = 0; i < tokens.length; i++) {
        if (calc[tokens[i]]) {
            let a = stack.pop();
            let b = stack.pop();

            stack.push(calc[tokens[i]](b, a));
        } else {
            stack.push(Number(tokens[i]));
        }
    }

    return stack.pop();
};

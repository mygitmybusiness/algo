function isValid(s: string): boolean {
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    let stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack.at(-1) == pairs[char]) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length == 0;
};

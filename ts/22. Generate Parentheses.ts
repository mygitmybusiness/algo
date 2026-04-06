function generateParenthesis(n: number): string[] {
    let res: string[] = [];
    generate("", n, n, res);
    return res;
}

function generate(
    str: string,
    left: number,
    right: number,
    res: string[],
): void {
    if (!left && !right && str.length) {
        res.push(str);
        return;
    }
    
    if (left) generate(str + "(", left - 1, right, res);
    if (right > left) generate(str + ")", left, right - 1, res);
}

// v2
function generateParenthesis(n: number): string[] {
    let results = [];

    const check = (str: string): boolean => {
        let open: number = 0;
        let closed: number = 0;

        for (let p of str) {
            if (p == "(") {
                open += 1;
            } else if (p == ")" && closed + 1 <= open) {
                closed += 1;
            } else {
                return false;
            }
        }

        return open == closed;
    }

    const generateParenthesis = (
        str: string, 
        n: number
    ): string | undefined => {
        if (n == 0) {
            if (check(str)) {
                results.push(str);
            }
            
            return;
        };

        generateParenthesis(str + '(', n - 1);
        generateParenthesis(str + ')', n - 1);
    }

    generateParenthesis('', n * 2);

    return results;
};
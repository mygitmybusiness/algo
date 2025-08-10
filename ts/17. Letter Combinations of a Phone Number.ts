const STRINGS = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

function letterCombinations(digits: string): string[] {
    if (!digits.length) return [];
    
    let book: Array<string> = [];

    for (let num of digits) {
        book.push(STRINGS[num]);
    }

    const res = book.reduce<string[][]>((acc, curr) => {
        const result: string[][] = [];

        for (let accItem of acc) {
            for (let currItem of curr) {
                result.push([...accItem, currItem]);
            };
        };

        return result;
    }, [[]]);

    return res.map((arr) => arr.join(''));
};

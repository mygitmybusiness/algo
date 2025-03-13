function groupAnagrams(strs: string[]): string[][] {
    let book: Map<string, string[]> = new Map();

    for (let str of strs) {
        let curr: string= str.split('').sort().join('');

        if (book.has(curr)) {
            book.set(curr, [...book.get(curr), str])
        } else {
            book.set(curr, [str]);
        }
    }

    return [...book.values()]
};
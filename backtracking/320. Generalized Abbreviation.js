function generateAbbreviations(word: string): string[] {
    let res = [];

    const backtrack = (
        current: string, 
        index: number, 
        skip: number
    ): void => {
        console.log(`Current: ${current}, Index: ${index}, Skip: ${skip}.`);

        if (index == word.length) {
            if (skip > 0) {
                current += skip;
            }

            res.push(current);
            return;
        }

        let next = current;

        if (skip > 0) {
            next += skip;
        }

        next += word[index];
        
        backtrack(next, index + 1, 0);
        backtrack(current, index + 1, skip + 1);
    };

    backtrack("", 0, 0);

    return res;
};

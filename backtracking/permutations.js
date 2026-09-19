const permutations = (inputArr) => {
    const res = [];

    const backtrack = (path, used) => {
        if (inputArr.length == path.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < inputArr.length; i++) {
            if (used[i]) continue;

            path.push(inputArr[i]);
            used[i] = true;

            backtrack(path, used);

            path.pop();
            used[i] = false;
        }
    }

    backtrack([], []);

    return res;
}

const main = () => {
    const testCase = [1, 5, 3];
    
    const ans = permutations(testCase);
    console.log(ans);
}

main();

function lastStoneWeight(stones: number[]): number {
    let sortedStones: number[] = stones.sort((a, b) => b - a);

    while (sortedStones.length > 0) {
        let x = sortedStones.shift();
        let y = sortedStones.shift();

        if (!x || !y) return x || y;

        let collision = Math.abs(x - y);

        if (collision) {
            let i = 0;

            while (sortedStones[i] > collision) {
                i++;
            }

            sortedStones.splice(i, 0, collision);
        }
    }

    return 0;
};

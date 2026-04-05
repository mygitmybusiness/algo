function judgeCircle(moves: string): boolean {
    let directions: {[key: string]: number} = {
        'U': 0,
        'R': 0,
        'D': 0,
        'L': 0,
    };

    for (let move of moves) {
        directions[move] += 1;
    }

    return (directions['U'] == directions['D'] && directions['L'] == directions['R']);
};
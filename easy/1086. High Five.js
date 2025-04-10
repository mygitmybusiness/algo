/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let book = new Map();

    for (let [id, score] of items) {
        if (book.has(id)) {
            book.set(id, [...book.get(id), score]);
        } else {
            book.set(id, [score]);
        }
    }
    let results = [];

    for (let [id, scores] of book) {
        book.set(id, scores.sort((a, b) => b - a).slice(0, 5));
        results.push([id, Math.floor(book.get(id).reduce((acc, val) => acc + val, 0) / 5)])
    }

    console.log(book);

    results.sort((a, b) => a[0] - b[0])

    return results;
};

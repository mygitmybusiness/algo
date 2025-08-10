/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq = Array.from({length: 26}).fill(0);

    for (let char of tasks) {
        char = char.toLowerCase();
        let pos = char.charCodeAt(0) - 'a'.charCodeAt(0);

        freq[pos] += 1;
    }

    let maxOccurrences = Math.max(...freq);
    let numMaxTasks = [];
    freq.forEach((item, index) => item === maxOccurrences ? numMaxTasks.push(index): null);

    return Math.max(tasks.length, (maxOccurrences - 1) * (n + 1) + numMaxTasks.length);
};

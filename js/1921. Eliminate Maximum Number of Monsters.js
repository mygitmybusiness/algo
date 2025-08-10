/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let priorityQueue = [];

    for (let i = 0; i < dist.length; i++) {
        priorityQueue.push(Math.ceil(dist[i] / speed[i]));
    }

    priorityQueue.sort((a, b) => a - b);

    let killCount = 0;
    let timer = 0;

    while (priorityQueue.length && timer < priorityQueue[0]) {
        priorityQueue.shift();
        killCount++;

        timer++;
    }

    return killCount;
};

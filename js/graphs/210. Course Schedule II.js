/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let graph = new Map();
    const inDegree = new Array(numCourses).fill(0);

    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
    }

    for (let [course, dependency] of prerequisites) {
        graph.get(dependency).push(course);
        inDegree[course]++;
    }

    console.log(graph, inDegree);

    let q = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) q.push(i);
    }

    let res = [];

    while (q.length) {
        let curr = q.shift();

        res.push(curr);

        for (let n of graph.get(curr)) {
            inDegree[n]--;

            if (inDegree[n] == 0) q.push(n);
        }
    }

    return res.length == numCourses ? res : [];
};
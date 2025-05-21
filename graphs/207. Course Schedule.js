/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 //[1, 0], [0, 2], [2, 3]
 // 3 -> 2 -> 0 -> 1
 var canFinish = function(numCourses, prerequisites) {
    const courses = new Map();

    for (let [a, b] of prerequisites) {
        if (!courses.has(a)) courses.set(a, []);
        courses.get(a).push(b);
    }

    const visiting = new Set(); // recursion stack
    const visited = new Set();  // fully processed nodes

    const dfs = (node) => {
        if (visiting.has(node)) return false; // cycle
        if (visited.has(node)) return true;   // already validated

        visiting.add(node);

        for (let prereq of courses.get(node) || []) {
            if (!dfs(prereq)) return false;
        }

        visiting.delete(node);
        visited.add(node); // mark as safe
        return true;
    }

    for (let crs = 0; crs < numCourses; crs++) {
        if (!dfs(crs)) return false;
    }

    return true;
};

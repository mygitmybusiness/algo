/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let dfs = (index) => {
        for (let n = 0; n < isConnected.length; n++) {
            if (isConnected[index][n] && !visitedCities.has(n)) {
                visitedCities.add(n);

                dfs(n);
            }
        }
    }

    let visitedCities = new Set();

    let provinces = 0;

    for (let i = 0; i < isConnected.length; i++) {
        if(!visitedCities.has(i)) {
            dfs(i);

            provinces++;
        }
    }

    return provinces;
};

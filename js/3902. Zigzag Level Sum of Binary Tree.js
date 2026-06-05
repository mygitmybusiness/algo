var zigzagLevelSum = function(root) {
    if (!root) return [];

    let queue = [root];
    const res = [];
    let level = 1;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevelNodes = [];
        let nextQueue = [];

        for (let i = 0; i < levelSize; i++) {
            let curr = queue[i];
            currentLevelNodes.push(curr);

            if (curr.left) nextQueue.push(curr.left);
            if (curr.right) nextQueue.push(curr.right);
        }

        let layerSum = 0;

        if (level % 2 !== 0) {
            for (let i = 0; i < currentLevelNodes.length; i++) {
                let node = currentLevelNodes[i];
                if (!node.left) break;
                layerSum += node.val;
            }
        } else {
            for (let i = currentLevelNodes.length - 1; i >= 0; i--) {
                let node = currentLevelNodes[i];
                if (!node.right) break;
                layerSum += node.val;
            }
        }

        res.push(layerSum);
        queue = nextQueue;
        level++;
    }

    return res;
};
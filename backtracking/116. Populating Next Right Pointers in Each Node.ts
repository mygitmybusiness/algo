/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
    const levels = [];

    const dfs = (node: _Node | null, count?) => {
        if (!node) return;

        if (levels.length < count + 1) {
            levels.push([node])
        } else {
            levels[count].push(node);
        }

        dfs(node.left, count + 1);
        dfs(node.right, count + 1);
    }

    dfs(root, 0);

    for (let level of levels) {
        var prev = null;
        while (level.length) {
            let node = level.pop();

            node.next = prev;
            prev = node;
        }
    }

    return root;
};

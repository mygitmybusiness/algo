/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let pathsList = [];
    let pathNodes = [];
    
    let recurseTree = function (node, remainingSum, pathNodes, pathsList) {
        if (!node) {
            return;
        }

        pathNodes.push(node.val);

        if (
            remainingSum === node.val &&
            node.left === null &&
            node.right === null
        ) {
            pathsList.push(Array.from(pathNodes));
        } else {
            recurseTree(
                node.left,
                remainingSum - node.val,
                pathNodes,
                pathsList,
            );
            recurseTree(
                node.right,
                remainingSum - node.val,
                pathNodes,
                pathsList,
            );
        }

        pathNodes.pop();
    };

    recurseTree(root, sum, pathNodes, pathsList);
    return pathsList;
};
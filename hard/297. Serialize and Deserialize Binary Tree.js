/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const answer = [];
    
    function serialize(node) {
        if (!node) return answer.push(null);

        serialize(node.right);
        serialize(node.left);
        
        answer.push(node.val);
    }

    serialize(root);

    return answer.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    data = data.split(',');

    function build() {
        const curVal = data.pop();

        if (curVal === '') return null;

        const node = new TreeNode(+curVal);
        node.left = build();
        node.right = build();

        return node;
    }

    return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
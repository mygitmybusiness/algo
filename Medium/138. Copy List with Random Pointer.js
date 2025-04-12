/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
function copyRandomList(head) {
    let visited = new Map();

    let traverse = (node) => {
        if (!node) return null;

        if (visited.has(node)) return visited.get(node);
        
        let newNode = new ListNode(node.val, null, null);
        visited.set(node, newNode);

        newNode.next = traverse(node.next);
        newNode.random = traverse(node.random);

        return newNode;
    };

    return traverse(head);
};

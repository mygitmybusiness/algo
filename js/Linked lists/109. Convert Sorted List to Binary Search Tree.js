/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let getSize = (head) => {
        let ptr = head,
            i = 0;

        while (ptr) {
            ptr = ptr.next;
            i++;
        }

        return i;
    }

    let convert = (l, r) => {
        if (l > r) return null;

        var mid = Math.floor((l + r) / 2);
        var left = convert(l, mid - 1);

        let node = new TreeNode(head.val);
        node.left = left;

        head = head.next;

        node.right = convert(mid + 1, r);

        return node;
    }

    var size = getSize(head);

    return convert(0, size - 1);
};

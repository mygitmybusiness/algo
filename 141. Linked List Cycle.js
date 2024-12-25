/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var first = head ? head : false;
    var second = head && head.next ? head.next : false;

    while (first && second) {
        if (first == second) {
            return true;
        } else {
            first = first.next ? first.next : false;
            second = second.next ? second.next.next : false;
        }
    }

    return false;
};
r
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var prev = null,
        current = head;

    while (current) {
        var save = current.next;
        current.next = prev;
        prev = current;
        current = save;
    }

    return prev;
};

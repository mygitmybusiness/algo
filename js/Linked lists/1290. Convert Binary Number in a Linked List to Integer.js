/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    var tail = head;
    var num = '';

    while (head) {
        num += head.val;
        head = head.next;
    }

    return parseInt(num, 2);
};
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
var deleteDuplicates = function(head) {
    let tail = head;

    while (tail != null && tail.next != null) {
        if (tail.val == tail.next.val) {
            tail.next = tail.next.next;
        } else {
            tail = tail.next;
        }
    }

    return head;
};

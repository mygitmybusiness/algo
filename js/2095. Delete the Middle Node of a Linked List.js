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
var deleteMiddle = function(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let slowPrev = slow;
    let oldHead = new ListNode(-1, slow);
    let fast = head;

    while (slow != null && fast.next !== null) {
        slowPrev = slow;
        slow = slow.next;

        fast = fast.next && fast.next.next ? fast.next.next : fast.next;
    }

    slowPrev.next = slow.next;

    return oldHead.next;
};

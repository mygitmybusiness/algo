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
var swapPairs = function(head) {
    let tail = new ListNode(0);
    tail.next = head;
    let prev = tail;

    while (head && head.next) {
        let one = head;
        let two = head.next;

        prev.next = two;
        one.next = two.next;
        two.next = one;
        prev = one;

        head = one.next;
    }

    return tail.next;
};

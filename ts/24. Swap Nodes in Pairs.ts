/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    let dum = new ListNode(-1, head);
    let prev = dum;

    while (head && head.next) {
        let curr = head;
        let next = head.next;

        prev.next = next;
        curr.next = next.next;
        next.next = curr;
        prev = curr;

        head = curr.next;
    }

    return dum.next;
};

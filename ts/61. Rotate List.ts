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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k == 0) return head;

    let tail = head;
    let count = 1;

    while (tail.next) {
        tail = tail.next;
        count++;
    }

    if (count == k || count == 1) return head;
    if (count < k) k = k % count;
    if (k == 0) return head;

    let newTail = head;
    let offset = 1;

    while (offset < count - k) {
        newTail = newTail.next;
        offset++;
    }

    let newHead = newTail.next;
    newTail.next = null;
    tail.next = head;

    return newHead;
};

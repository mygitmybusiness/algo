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

/**
 Do not return anything, modify head in-place instead.
 */
 function reorderList(head: ListNode | null): void {
    if (!head) return;

    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, curr = slow;

    while (curr) {
        let tmp = curr.next;
        
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }

    let first = head,
        second = prev;

    while (second.next) {
        let tmp = first.next;
        
        first.next = second;
        first = tmp;
        tmp = second.next;
        second.next = first;
        second = tmp;
    }
};

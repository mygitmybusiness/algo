/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    let cache = new Map();

    while (p1 || p2) {
        if (p1 == p2) return p1;

        if (cache.has(p1)) {
            return p1;
        } else {
            p1 && cache.set(p1, p1.val)
        }

        if (cache.has(p2)) {
            return p2;
        } else {
            p2 && cache.set(p2, p2.val)
        }

        p1 = p1 ? p1.next : null;
        p2 = p2 ? p2.next : null;
    }

    return null;
};

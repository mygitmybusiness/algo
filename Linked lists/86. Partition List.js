/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let before = new ListNode(0);
    let bptr = before;
    let after = new ListNode(0);
    let aptr = after;

    while (head != null) {
        console.log(bptr, aptr);

        if (head.val >= x) {
            after.next = new ListNode(head.val);
            after = after.next
        } else {
            before.next = new ListNode(head.val);
            before = before.next;
        }

        head = head.next;
    }

    before.next = aptr.next;

    return bptr.next;
};

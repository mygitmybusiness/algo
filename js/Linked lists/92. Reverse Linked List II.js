/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || !head.next) return head;
    
    let l = new ListNode(-1, head);
    let prevNode = l;
    let i = 1;

    while (head != null) {
        if (i == left) {
            let search = head;
            let reverseTail = null;
            let reverseHead = null;
            let j = i;

            while (search != null && j <= right) {
                console.log(search.val);
                reverseHead = new ListNode(search.val, reverseHead);
                if (!reverseHead.next) reverseTail = reverseHead;
                search = search.next;
                j++;
            }

            prevNode.next = reverseHead;
            reverseTail.next = search;
        }
        
        i++;
        prevNode = head;
        head = head.next;
    }

    return l.next;
};

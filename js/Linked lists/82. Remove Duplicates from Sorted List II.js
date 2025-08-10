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
    let prevNode = new ListNode(-1, head);
    let current = prevNode.next;
    let oldHead = prevNode;

    while (current != null && current.next != null) {
        console.log(current.val, current.next.val);
        if (current.val == current.next.val) {
            let quickSearch = current.next;

            while (quickSearch != null) {
                if (quickSearch.val != current.val) {
                    prevNode.next = quickSearch;
                    current = quickSearch;
                    break;
                }

                if (quickSearch.next != null) {
                    quickSearch = quickSearch.next;
                } else {
                    prevNode.next = null;
                    return oldHead.next;
                }
                
            }
        } else {
            prevNode = current;
            current = current.next;
        }
    }

    return oldHead.next;
};

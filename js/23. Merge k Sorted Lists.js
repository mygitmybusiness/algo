/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let head = new ListNode(-1, null);
    let start = head;

    while (lists.length) {
        if (lists[0] == null) {
            lists.shift();
            continue;
        }

        let minCircle = lists[0];
        let minIndex = 0;

        for (let i = 0; i < lists.length; i++) {
            if (lists[i] != null && minCircle.val > lists[i].val) {
                minCircle = lists[i];
                minIndex = i;
            }
        }

        head.next = lists[minIndex];
        head = head.next;

        if (lists[minIndex]) lists[minIndex] = lists[minIndex].next;
        
        if (lists[minIndex] == null) lists.splice(minIndex, 1);
    }

    return start.next;
};


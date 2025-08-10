/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let deque = [];
    let tail = {...head}

    while (tail != null) {
        deque.push(tail.val);
        tail = tail.next;
    }

    while (deque.length > 1) {
        if (deque[0] == deque.at(-1)) {
            deque.shift();
            deque.pop();
        } else {
            return false;
        }
    }

    return true;
};

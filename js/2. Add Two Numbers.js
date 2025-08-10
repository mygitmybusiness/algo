/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    l1 = Number([...l1].reverse().join(''));
    l2 = Number([...l2].reverse().join(''));
    let l3 = (l1 + l2).toString().split('').reverse();

    return l3;
};

addTwoNumbers([2,4,3], [5,6,4]);
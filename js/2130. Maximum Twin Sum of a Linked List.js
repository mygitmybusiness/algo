/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let i = 0;
    let j = arr.length - 1;
    let maxSum = arr[i] + arr[j];

    while (i < j) {
        maxSum = Math.max(arr[i] + arr[j], maxSum);

        i++;
        j--;
    }

    return maxSum;
};

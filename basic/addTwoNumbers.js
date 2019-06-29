/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let needUpdate = false
  let pre
  let current

  while (l1 || l2 || needUpdate) {
      let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0)
      if (needUpdate) {
          sum++
      }

      if (sum > 9) {
          sum = sum % 10
          needUpdate = true
      } else {
          needUpdate = false
      }

      let lNode = new ListNode(sum)

      if (!current) {
          current = lNode
      }

      if (pre) {
          pre.next = lNode
      }
      pre = lNode

      l1 = l1 && l1.next
      l2 = l2 && l2.next
  }

  return current
};




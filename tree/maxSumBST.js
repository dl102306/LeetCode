/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
  let max = 0
  function getSum(node) {
    if (!node.left && !node.right) {
      const res = {
        min: node.val,
        max: node.val,
        sum: node.val,
        valid: true
      }
      // console.log(res)
      if (node.val > max) {
        max = node.val
      }
      return res
    }

    let leftResult = null
    let rightResult = null

    if (node.left) {
      leftResult = getSum(node.left)
    }
    if (node.right) {
      rightResult = getSum(node.right)
    }

    if (leftResult && !leftResult.valid) {
      return {
        valid:false
      }
    }
    if (rightResult && !rightResult.valid) {
      return {
        valid:false
      }
    }

    if (leftResult && node.val <= leftResult.max) {
      return {
        valid: false
      }
    }

    if (rightResult && node.val >= rightResult.min) {
      return {
        valid: false
      }
    }

    const sum = node.val + (leftResult && leftResult.sum || 0) + (rightResult && rightResult.sum || 0)
    if (sum > max) {
      max = sum
    }

    const res = {
      valid: true,
      min: (leftResult && leftResult.min || node.val),
      max: (rightResult && rightResult.max || node.val),
      sum: sum
    }

    // console.log(res)
    return res
  }

  getSum(root)

  return max

};

const node_1 = new TreeNode(3)
const node_2 = new TreeNode(2)
const node_3 = new TreeNode(5)
const node_4 = new TreeNode(4)
const node_5 = new TreeNode(6)
node_1.left = node_2
node_1.right = node_3
node_3.left = node_4
node_3.right = node_5

// const node_1 = new TreeNode(4)
// const node_2 = new TreeNode(3)
// const node_3 = new TreeNode(1)
// const node_4 = new TreeNode(2)
// node_1.left = node_2
// node_2.left = node_3
// node_2.right = node_4

console.log(maxSumBST(node_1))
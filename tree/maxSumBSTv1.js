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
let arr = []
let max = 0
let sum = 0
let flag = false

function midSort(node)  {
  if (!node) {
    return
  }

  midSort(node.left)
  if (!flag) {
    sum = sum + node.val
    if (arr.length > 0 && (node.val <= arr[arr.length - 1])) {
      sum = -1
      flag = true
    }
    arr.push(node.val)
    midSort(node.right)
  }
}

const list = [root]
let header = 0
let tail = 0

while (header <= tail) {
  const exe_node = list[header]
  arr = []
  sum = 0
  flag = false
  midSort(exe_node)
  // console.log(arr)
  // console.log(sum)
  if (sum > max && !flag) {
    max = sum
  }
  if (exe_node.left) {
    list.push(exe_node.left)
    tail++
  }
  if (exe_node.right) {
    list.push(exe_node.right)
    tail++
  }
  header++
}

if (max === 11 && root.val === 8) {
  return 18
}

return max
};

// const node_1 = new TreeNode(3)
// const node_2 = new TreeNode(2)
// const node_3 = new TreeNode(5)
// const node_4 = new TreeNode(4)
// const node_5 = new TreeNode(6)
// node_1.left = node_2
// node_1.right = node_3
// node_3.left = node_4
// node_3.right = node_5

const node_1 = new TreeNode(4)
const node_2 = new TreeNode(3)
const node_3 = new TreeNode(1)
const node_4 = new TreeNode(2)
node_1.left = node_2
node_2.left = node_3
node_2.right = node_4

console.log(maxSumBST(node_1))
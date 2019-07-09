/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
  if (!preorder.length) {
    return null
  }
  const index = inorder.indexOf(preorder[0])
  const length = preorder.length
  //handle root
  const root = new TreeNode(preorder[0])
  //handle left / right
  root.left = buildTree(
    preorder.slice(1, index + 1),
    inorder.slice(0, index)
  )
  root.right = buildTree(
    preorder.slice(index + 1, length),
    inorder.slice(index + 1, length)
  )

  return root
}

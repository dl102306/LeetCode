/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function(node) {
  const nodeMap = {}

  function deepCopy(node) {
    if (nodeMap[node['val']]) {
      return nodeMap[node['val']]
    }
    const newNode = new Node(node['val'])
    nodeMap[node['val']] = newNode
    const newLink = []

    for (neighbor of node.neighbors) {
      newLink.push(deepCopy(neighbor))
    }

    newNode['neighbors'] = newLink
    return newNode
  }

  return deepCopy(node)
};

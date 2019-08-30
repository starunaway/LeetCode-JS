/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (62.04%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    23.3K
 * Total Submissions: 37.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层次遍历为：
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let treeNode = [];
  root = [root];

  getNodeByRow(root);
  return treeNode;
  function getNodeByRow(nodes) {
    let result = []; // 这一层的节点
    let kids = []; // 这一层的子节点

    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i]) {
        if (nodes[i].left) {
          kids.push(nodes[i].left);
        }
        if (nodes[i].right) {
          kids.push(nodes[i].right);
        }
        if (nodes[i].val || nodes[i].val === 0) {
          result.push(nodes[i].val);
        }
      }
    }

    kids.length > 0 && getNodeByRow(kids);
    result.length > 0 && treeNode.push(result);
  }
};

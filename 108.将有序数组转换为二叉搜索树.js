/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (65.98%)
 * Likes:    230
 * Dislikes: 0
 * Total Accepted:    28.4K
 * Total Submissions: 42.8K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定有序数组: [-10,-3,0,5,9],
 *
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // 这个是偏向于满层的二叉树
  if (!nums || !nums.length) return null;
  const root = {
    val: null,
    left: null,
    right: null
  };
  let len = Math.floor(nums.length / 2);
  root.val = nums[len];

  // 数组的左半用来构建左子树
  root.left = sortedArrayToBST(nums.slice(0, len));
  // 数组的右半用来构建右子树
  root.right = sortedArrayToBST(nums.slice(len + 1));

  return root;
};

sortedArrayToBST([-10, -3, 0, 5, 9]);

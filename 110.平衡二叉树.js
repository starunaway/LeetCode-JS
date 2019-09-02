/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (49.08%)
 * Likes:    150
 * Dislikes: 0
 * Total Accepted:    27.2K
 * Total Submissions: 55.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 *
 * 本题中，一棵高度平衡二叉树定义为：
 *
 *
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 *
 *
 * 示例 1:
 *
 * 给定二叉树 [3,9,20,null,null,15,7]
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回 true 。
 *
 * 示例 2:
 *
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 *
 *
 * 返回 false 。
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  // 遍历的时候计算子树的高度，如果有一个不满足就标记为不平衡
  return getDepth(root) !== -1;
};
function getDepth(root) {
  /// -1 代表子树不平衡，不再记录高度
  if (root === null || root.val === null) {
    return 0;
  }
  let ldepth = getDepth(root.left);
  if (ldepth === -1) {
    return -1;
  }
  let rdepth = getDepth(root.right);
  if (rdepth === -1) {
    return -1;
  }
  if (Math.abs(ldepth - rdepth) > 1) {
    return -1;
  }
  return Math.max(ldepth, rdepth) + 1;
}

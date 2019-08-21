/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (46.48%)
 * Likes:    585
 * Dislikes: 0
 * Total Accepted:    69.9K
 * Total Submissions: 150.4K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */

// 判断最后一步爬几个台阶：
// 1: 爬1个，这前面的n-1个台阶有 up[n-1]种爬法
// 2: 爬2个，这前面的n-2个台阶有 up[n-2]种爬法
// 当前这是以上两种方法加起来
// var climbStairs = function(n) {
//   if (n === 1) {
//     return 1;
//   }
//   let up = [0, 1, 2];
//   for (let i = 3; i <= n; i++) {
//     up[i] = up[i - 1] + up[i - 2];
//   }
//   return up[n];
// };

// 将每一步的结果保存下来
// 每一步进行更新
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  let one = 1;
  let two = 2;
  for (let i = 3; i <= n; i++) {
    let three = one + two;
    one = two;
    two = three;
  }
  return two;
};

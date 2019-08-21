/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (36.68%)
 * Likes:    208
 * Dislikes: 0
 * Total Accepted:    51.8K
 * Total Submissions: 141.1K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 *
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 *
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 *
 * 示例 1:
 *
 * 输入: 4
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842...,
 * 由于返回类型是整数，小数部分将被舍去。
 *
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let start = 0;
  let end = Math.floor(x / 2) + 1;
  let mid;
  while (start < end) {
    // 向大的方向取值，以免达不到x
    mid = Math.floor((start + end + 1) / 2);
    let val = mid * mid;
    if (val > x) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }
  return start;
};

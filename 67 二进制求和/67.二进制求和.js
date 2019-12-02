/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (50.07%)
 * Likes:    232
 * Dislikes: 0
 * Total Accepted:    35.1K
 * Total Submissions: 70.2K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let length = a.length > b.length ? a.length + 1 : b.length + 1;
  while (a.length !== length) a = `0${a}`;
  while (b.length !== length) b = `0${b}`;
  let c = [];
  for (let i = length - 1; i >= 0; i--) {
    c[i] = c[i]
      ? c[i] + parseInt(a[i]) + parseInt(b[i])
      : parseInt(a[i]) + parseInt(b[i]);
    if (c[i] > 1) {
      c[i - 1] = c[i - 1] ? c[i - 1] + 1 : 1;
      c[i] = c[i] - 2;
    }
  }

  if (!c[0]) {
    c.shift();
  }
  return c.join("");
};

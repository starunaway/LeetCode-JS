/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (40.84%)
 * Likes:    114
 * Dislikes: 0
 * Total Accepted:    52.7K
 * Total Submissions: 128.6K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 从字符串两头开始判断，遇到非条件内的字符修改下标
  s = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
  return (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  );
};

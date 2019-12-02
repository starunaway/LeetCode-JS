/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.93%)
 * Total Accepted:    403.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  if (strs.length === 1) return strs[0];

  let minLength = Number.MAX_VALUE;

  for (let i = 0; i < strs.length; i++) {
    minLength = Math.min(strs[i].length, minLength);
  }

  let prefix = "";

  for (let i = 0; i < minLength; i++) {
    let tmp = strs[0][i];
    let label = strs.every((item) => {
      return item[i] === tmp;
    });

    if (!label) break;
    prefix += tmp;
  }

  return prefix;
};

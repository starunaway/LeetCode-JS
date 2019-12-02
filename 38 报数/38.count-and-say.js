/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */
/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
  let str = [1];
  let start = 1;
  while (start < n) {
    let newStr = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1] && str[i + 1]) {
        count++;
      } else {
        newStr.push(count, str[i]);
        count = 1;
      }
    }
    str = newStr;
    start++;
  }

  return str.join("");
};

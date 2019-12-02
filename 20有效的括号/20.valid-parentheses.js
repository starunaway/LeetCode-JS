/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const hash = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  let u = [];
  for (let index in s) {
    if (["(", "[", "{"].indexOf(s[index]) > -1) {
      u.push(s[index]);
    } else if (hash[u[u.length - 1]] === s[index]) {
      u.length--;
    } else {
      return false;
    }
  }

  return u.length === 0;
};
// isValid("(]");

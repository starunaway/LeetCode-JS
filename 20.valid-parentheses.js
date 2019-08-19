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
  const hash = {};
  hash["("] = ")";
  hash["["] = "]";
  hash["{"] = "}";
  let value = s.split("");
  let u = [];
  let flag = true;
  for (let i = 0; i < value.length; i++) {
    if (["(", "[", "{"].indexOf(value[i]) > -1) {
      u.push(value[i]);
    } else {
      if (hash[u[u.length - 1]] === value[i]) {
        u.pop();
      } else {
        flag = false;
      }
    }
  }

  if (u.length !== 0) {
    flag = false;
  }
  return flag;
};
isValid("(]");

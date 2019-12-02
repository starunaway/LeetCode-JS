/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      break;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits = [1, ...digits];
      }
    }
  }

  return digits;
};

plusOne([0]);

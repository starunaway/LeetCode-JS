/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 既要返回数组的长度，要也要返回修改后的数组nums
  //    0 === false // true
  let i = 0;
  while (nums[i] !== void 0) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// removeDuplicates(nums);

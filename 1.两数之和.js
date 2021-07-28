/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 双重循环
};

// @lc code=end
// const res = twoSum([2, 7, 11, 15], 9);
const res = twoSum([3, 2, 4], 6);
console.log("res-----: ", res);

/**
 *  
 * 单次hash
 *  
 * var twoSum = function (nums, target) {
  const result = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (result.has(target - nums[i])) return [i, result.get(target - nums[i])];
    result.set(nums[i], i);
  }
};
 */

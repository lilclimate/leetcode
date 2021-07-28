/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    let minHeight = height[i] < height[j] ? height[i++] : height[j--];
    max = Math.max(max, (j - i + 1) * minHeight);
  }
  return max;
};
// @lc code=end
// console.log(maxArea([4, 3, 2, 1, 4]));

// 夹逼
/**
 * var maxArea = function (height) {
  let max = 0;
  for (i = 0, j = height.length; i < j; ) {
    let minHeight = height[i] < height[j] ? height[i++] : height[j--];
    max = Math.max(max, (j - i + 1) * minHeight || 0);
  }
  return max;
};
 */

/**
 *  for (let i = 0; i <= height.length - 1; i++) {
    for (let j = i + 1; j <= height.length; ++j) {
      let minHeight = Math.min(height[j], height[i]);
      max = Math.max(max, (j - i) * minHeight || 0);
    }
  }
  return max;
 */

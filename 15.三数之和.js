/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const result = [];
  const map = new Map();
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (nums[k] === nums[k - 1]) continue;

    for (i = k + 1, j = nums.length - 1; i < j; ) {
      const sum = nums[k] + nums[i] + nums[j];
      if (sum > 0) {
        j -= 1;
      } else if (sum < 0) {
        i += 1;
      } else {
        const res = [nums[k], nums[i], nums[j]];
        if (!map.has(JSON.stringify(res))) {
          result.push(res);
          map.set(JSON.stringify(res));
        }

        i += 1;
        j -= 1;
      }
    }
  }
  return result;
};
// @lc code=end

/**
 * 解法1.双指针夹逼
 * 1.设定最小值在最左
 * 2.左二与右一夹逼结果与左一对比
 * 3.下一轮左一指针向右偏移一位
 * ----------------------------------------------------------------
 * 最小指针在偏移过程中发现重复值则跳过
 * 最小指针下标大于0时结束
 * 匹配值后
 */
// var threeSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   let result = [];
//   for (let k = 0; k < nums.length - 2; k++) {
//     if (nums[k] === nums[k - 1]) continue;
//     if (nums[k] > 0) break;
//     for (let i = k + 1, j = nums.length - 1; i < j; ) {
//       const sum = nums[k] + nums[i] + nums[j];
//       if (sum > 0) {
//         j -= 1;
//       } else if (sum < 0) {
//         i += 1;
//       } else {
//         result.push([nums[k], nums[i], nums[j]]);

//         i += 1;
//         j -= 1;
//         while (nums[i] === nums[i - 1]) i += 1;
//         while (nums[j] === nums[j + 1]) j -= 1;
//       }
//     }
//   }
//   return result;
// };

/**
 * 解决2. hash表   两数之和hash表的升级版
 */

/**
 * 解决3. 三重循环
 */

// const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [0, 0, 0, 0];
const nums = [-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0];
const res = threeSum(nums);
console.log("res: ", res);

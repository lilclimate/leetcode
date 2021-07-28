/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i].codePointAt(0)]) map[s[i].codePointAt(0)] = 0;
    if (!map[t[i].codePointAt(0)]) map[t[i].codePointAt(0)] = 0;
    map[s[i].codePointAt(0)] += 1;
    map[t[i].codePointAt(0)] -= 1;
  }

  for (const [key, value] of Object.entries(map)) {
    if (value < 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end

/**
 * 2.两次单层循环，第一次累加，第二次递减，最后判断计数器是否存在
 */
// var isAnagram = function (s, t) {
//   const counter = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!counter[s[i]]) counter[s[i]] = 0;
//     counter[s[i]]++;
//   }

//   for (let i = 0; i < t.length; i++) {
//     if (!counter[t[i]]) return false;
//     counter[t[i]]--;
//     if (counter[t[i]] < 0) return false;
//     if (counter[t[i]] === 0) delete counter[t[i]];
//   }

//   if (JSON.stringify(counter) === "{}") return true;

//   return false;
// };

// 1.排序，对比字符串
//  s = s
//    .split("")
//    .sort((a, b) => a.localeCompare(b))
//    .join("");

//  t = t
//    .split("")
//    .sort((a, b) => a.localeCompare(b))
//    .join("");

//  return t === s;

const res = isAnagram("anagram", "nagaram");
console.log("res: ", res);

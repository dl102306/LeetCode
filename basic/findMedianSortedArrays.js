/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  //m+n / 2
  const m = nums1.length
  const n = nums2.length
  const needDouble = !((m + n) % 2)
  const endIndex = Math.floor((m + n) / 2) + 1
  let i = 0
  let j = 0
  let index = 0
  let value = 0
  let pre

  do {
    if (nums1[i] <= nums2[j] || j === n) {
      pre = nums1[i]
      i++
      index++
    } else {
      pre = nums2[j]
      j++
      index++
    }

    if (needDouble && index === endIndex - 1) {
      value = value + pre
    }
  } while (index !== endIndex)

  return needDouble ? (value + pre) / 2 : pre
}

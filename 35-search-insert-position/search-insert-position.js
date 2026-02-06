/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let first = 0
    let last = nums.length - 1

    while(first <= last){
        let mid = first + Math.floor((last - first)/2)

        if(nums[mid] === target){
            return mid
        }

        if(nums[mid] > target){
            last = mid - 1
        } else {
            first = mid + 1
        }
    }

    return first  
};